import Request from "../types/Request";
import { Response } from "express";
import HttpStatusCodes from "http-status-codes";
import IUser from "../interfaces/IUser";
import UserService from "../services/userService";
import AuthService from "../services/authService";

export default class UserController {
  userService = new UserService();
  authService = new AuthService();

  public signup = async (req: Request, res: Response) => {
    try {
      const user_data: IUser = { ...req.body };
      const user = await this.userService.addUser(user_data);
      return res.status(HttpStatusCodes.CREATED).send({ token: user.token });
    } catch (error) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .send({ error: error.message });
    }
  };

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
      const user = await this.userService.findByCredentials(username, password);
      const token = this.authService.generateAuthToken(user);
      return res.status(HttpStatusCodes.OK).send({ token });
    } catch (error) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .send({ error: error.message });
    }
  };
}
