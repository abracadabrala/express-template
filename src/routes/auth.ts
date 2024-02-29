import { Router } from "express";
import { PATH } from "../config";
import { authControllers } from "../controllers";

const router = Router();

/** 登录路由 */
router.post(PATH.AUTH.LOGIN, async (req, res) => {
  await authControllers.logIn(req, res);
});

/** 登出路由 */
router.post(PATH.AUTH.LOGOUT, async (req, res) => {
  await authControllers.logOut(req, res);
});

const authRouter = router;
export default authRouter;
