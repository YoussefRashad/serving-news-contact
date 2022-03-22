import IUser from "../interfaces/IUser";
import IUserModel from "../interfaces/IUserModel";
import AuthService from "./authService";
import User from "../models/user.model";

export default class UserService {
  authService = new AuthService();
  userModel = new User();

  public addUser(user: IUser) {
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
}
