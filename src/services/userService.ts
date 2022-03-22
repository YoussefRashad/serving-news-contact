import IUser from "../interfaces/IUser";
import IUserModel from "../interfaces/IUserModel";
import AuthService from "./authService";
import User from "../models/user.model";
import Messages from "../config/Messages";
import bcrypt from "bcrypt";

export default class UserService {
  authService = new AuthService();
  userModel = new User();

  public async addUser(user: IUser) {
    const userExist = this.findUser(user.username);
    if (userExist) {
      throw new Error("username is exist");
    }
    user.password = await bcrypt.hash(user.password, 8);
    const new_user: IUserModel = {
      user_id: this.userModel.getUsers().length + 1,
      ...user,
      tokens: [],
    };
    const token = this.authService.generateAuthToken(new_user);
    this.userModel.getUsers().push(new_user);
    return {
      new_user,
      token,
    };
  }
  public findUser(username: string) {
    return this.userModel.getUsers().find((user) => user.username === username);
  }

  public async findByCredentials(username: string, password: string) {
    const users = this.userModel.getUsers();
    const user = users.find((user) => user.username === username);
    if (!user) {
      throw new Error(Messages.user.error.INCORRECT_CREDENTIALS);
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      throw new Error(Messages.user.error.INCORRECT_CREDENTIALS);
    }
    return user;
  }
}
