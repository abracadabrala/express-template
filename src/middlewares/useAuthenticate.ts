import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { createErrorMsg } from "../utils/message";

const PUB_KEY = process.env.PUB as string;
/** 鉴权 */
export function useAuthentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["authorization"];
  if (!token) {
    res.send(createErrorMsg("请传入token"));
  } else {
    jwt.verify(token, PUB_KEY, (error, decoded) => {
      if (error) {
        res.send(createErrorMsg(error.message));
      } else {
        // req.userInfo= decoded
        next();
      }
    });
  }
}


