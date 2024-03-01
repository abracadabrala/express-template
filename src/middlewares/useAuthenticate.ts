import { NextFunction, Request, Response } from "express";

/** 鉴权 */
export function useAuthentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("auth");
  next();
}
