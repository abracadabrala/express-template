import { Router } from "express";
import { PATH } from "../config";
import { authControllers } from "../controllers";
import { validate } from "../middlewares/useValidate";
import { authSchema } from "../models";
import { useAuthentication } from "../middlewares";

const router = Router();

/** 登录路由 */
router.post(PATH.AUTH.LOGIN, validate(authSchema.logIn), authControllers.logIn);

/** 登出路由 */
router.post(PATH.AUTH.LOGOUT, useAuthentication, validate(authSchema.logOut), authControllers.logOut);

const authRouter = router;

export default authRouter;
