import { Router } from "express";
import { PATH } from "../config";
import { authControllers } from "../controllers";

const router = Router();

/** 登录路由 */
router.post(PATH.AUTH.LOGIN, authControllers.logIn);

/** 登出路由 */
router.post(PATH.AUTH.LOGOUT, authControllers.logOut);


const authRouter = router;
export default authRouter;
