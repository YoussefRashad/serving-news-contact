import User from "../models/user.model";
import Request from "../types/Request";
import { Response } from "express";
import HttpStatusCodes from "http-status-codes";
import IUser from "../interfaces/IUser";
import UserService from '../services/userService';

export default class UserController {
  userService = new UserService()

  public signup = async (req: Request, res: Response) => {
    try {
      const user_data: IUser = { ...req.body };
      console.log({user_data});
      const user = this.userService.addUser(user_data)
      return res.status(HttpStatusCodes.CREATED).send({ token: user.token });
    } catch (error) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .send({ error: error.message });
    }
  };
}
