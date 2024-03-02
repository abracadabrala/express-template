import { Request, Response } from "express";
import { authServices } from "../services";

/** 登录控制器 */
export async function logIn(req: Request, res: Response) {
  await authServices.logIn(req, res);
}

/** 登出控制器 */
export async function logOut(req: Request, res: Response) {
  await authServices.logOut(req, res);
}
