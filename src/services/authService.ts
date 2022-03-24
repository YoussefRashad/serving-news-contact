import jwt from "jsonwebtoken";
import config from "../config/default";
import IUserModel from '../interfaces/IUserModel';

export default class AuthService {
  public generateAuthToken(user: IUserModel) {
    const token = jwt.sign({ user_id: user.user_id }, config.jwtSecret);
    user.tokens = [ { token }, ...user.tokens  ];
    return token;
  }
}
