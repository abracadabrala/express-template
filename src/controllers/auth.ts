import { Request, Response } from "express";
import { authServices } from "../services";
import { createErrorMsg, createMsg } from "../utils/message";

/** 登录控制器 */
export async function logIn(req: Request, res: Response) {
  const result = await authServices.logIn(req, res);
  if (result) {
    res.send(createMsg(result));
  } else {
    res.send(createErrorMsg("登录出错"));
  }
}

/** 登出控制器 */
export async function logOut(req: Request, res: Response) {
  const result = await authServices.logOut(req, res);
  if (result) {
    res.send(createMsg("登出成功"));
  } else {
    res.send(createErrorMsg("登出失败"));
  }
}
