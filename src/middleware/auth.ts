import { Response, NextFunction } from "express";
import HttpStatusCodes from "http-status-codes";
import jwt from "jsonwebtoken";
import Messages from "../config/Messages";
import config from "../config/default";
import Payload from "../types/Payload";
import Request from "../types/Request";

export default function(req: Request, res: Response, next: NextFunction) {
  // Get token from header
  let token = req.header('Authorization')?.replace('Bearer ', '')
  // Check if no token
  if (!token) {
    return res
      .status(HttpStatusCodes.UNAUTHORIZED)
      .json({ msg: Messages.user.error.UNAUTHORIZED_TOKEN });
  }
  // Verify token
  try {
    const payload: Payload | any = jwt.verify(token, config.jwtSecret);
    req.user_id = payload._id;
    next();
  } catch (err) {
    res
      .status(HttpStatusCodes.UNAUTHORIZED)
      .json({ msg: Messages.user.error.INVALIDED_TOKEN });
  }
}
