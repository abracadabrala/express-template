import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

/** 登录服务 */
export async function logIn(req: Request, res: Response) {
  const PRI_KEY = process.env.PRI as string;
  const playLoad = req.body;
  const token = jwt.sign({ ...playLoad, uuid: uuidv4(), time: new Date().getTime() }, PRI_KEY, {
    algorithm: "RS256",
    expiresIn: "7d",
  });
  return { ...playLoad, token };
}

/** 登出服务 */
export async function logOut(req: Request, res: Response) {
  const playLoad = (req as any).user;
  const info = req.body;

  if (playLoad.username === info.username && playLoad.password === info.password) {
    return 1;
  } else {
    return 0;
  }
}
