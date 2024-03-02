import app from "./app";
import { log } from "./utils/logger";

const PORT = 13000;

process.on("uncaughtException", (error) => {
  log.error("uncaughtException", error);
});

process.on("unhandledRejection", (reason) => {
  log.error("unhandledRejection", reason);
});

app.listen(PORT, () => {
  log.info(`server listen on port ${PORT}\nenv ${process.env.NODE_ENV}`);
});
