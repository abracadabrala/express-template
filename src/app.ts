import express from "express";
import helmet from "helmet";
import cors from "cors";

import router from "./routes";
import { useLogger } from "./middlewares";
import { ENV, PATH } from "./config";

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === ENV.pro) {
  app.use(helmet());
  app.use(cors);
}

app.use(useLogger);

app.use(PATH.BASE + PATH.VERSION, router);

export default app;
