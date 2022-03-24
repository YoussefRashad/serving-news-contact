import { Response, NextFunction } from "express";
import HttpStatusCodes from "http-status-codes";
import jwt from "jsonwebtoken";
import Messages from "../config/Messages";
import config from "../config/default";
import Payload from "../types/Payload";
import Request from "../types/Request";
import User from '../models/user.model';

export default function (req: Request, res: Response, next: NextFunction) {
  // Get token from header
  let token = req.header("Authorization")?.replace("Bearer ", "");
  // Check if no token
  if (!token) {
    return res
      .status(HttpStatusCodes.UNAUTHORIZED)
      .json({ msg: Messages.user.error.UNAUTHORIZED_TOKEN });
  }
  try {
    const payload: Payload | any = jwt.verify(token, config.jwtSecret);
    // check if the user has a token or not
    const user = new User().getUsers().find((user) => {
      const hasToken = user.tokens[0]?.token === token
      return (user.user_id === payload.user_id) && hasToken
    });
    if (!user) {
      return res
      .status(HttpStatusCodes.UNAUTHORIZED)
      .json({ msg: Messages.user.error.INVALIDED_TOKEN });
    }

    req.user_id = payload.user_id;
    next();
  } catch (err) {
    res
      .status(HttpStatusCodes.UNAUTHORIZED)
      .json({ msg: Messages.user.error.INVALIDED_TOKEN });
  }
}
