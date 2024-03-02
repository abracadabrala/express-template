import { Request, Response } from "express";

/** 登录服务 */
export async function logIn(req: Request, res: Response) {
  res.send("login");
}

/** 登出服务 */
export async function logOut(req: Request, res: Response) {
  res.send("login");
}
