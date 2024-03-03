import express from "express";
import helmet from "helmet";
import cors from "cors";

import router from "./routes";
import { useLogger, limiter } from "./middlewares";
import { loadKeys } from "./utils/keyLoader";

import { ENV, PATH } from "./config";

loadKeys()

const app = express();

app.use(limiter)
app.use(express.json());

if (process.env.NODE_ENV === ENV.pro) {
  app.use(helmet());
  app.use(cors());
}

app.use(useLogger);

app.use(PATH.BASE + PATH.VERSION, router);

export default app;
