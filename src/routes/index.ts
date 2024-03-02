import { Router } from "express";

import authRouter from "./auth";
import testRouter from "./test";

import { PATH } from "../config";
import { useAuthentication } from "../middlewares";

const router = Router();

router.use((req, res, next) => {
  res.status(200);
  next();
});

/** 权限路由 */
router.use(PATH.AUTH.BASE, authRouter);

router.use(useAuthentication);
/** 测试路由 */
router.use(PATH.TEST.BASE, testRouter);

export default router;
