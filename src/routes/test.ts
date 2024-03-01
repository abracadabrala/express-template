import { Router } from "express";

const router = Router();

/** 测试路由 */
router.get("/", async (req, res) => {
  console.log("test");
  res.send("hello");
});

const testRouter = router;

export default testRouter;
