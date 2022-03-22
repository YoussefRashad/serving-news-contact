import IUser from "../interfaces/IUser";
import IUserModel from "../interfaces/IUserModel";
import AuthService from "./authService";
import User from "../models/user.model";
import bcrypt from 'bcrypt';

export default class UserService {
  authService = new AuthService();
  userModel = new User();

  public async addUser(user: IUser) {
    const userExist = this.findUser(user.username)
    if (userExist) {
      throw new Error("username is exist")
    }
    user.password = await bcrypt.hash(user.password, 8)
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
    return this.userModel.getUsers().find((user) => user.username === username)
  }
}
