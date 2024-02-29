import { NextFunction, Request, Response } from "express";

export function useAuthentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("auth");
  next();
}
