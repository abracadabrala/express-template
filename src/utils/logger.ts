import log4js from "log4js";
import { ENV } from "../config";

log4js.configure({
  appenders: {
    /** 开发环境输出配置 */
    outDev: {
      type: "stdout",
      layout: {
        type: "colored",
      },
    },
    /** 生产环境输出配置 */
    outPro: {
      type: "stdout",
      layout: {
        type: "basic",
      },
    },
    /** 开发环境记录配置 */
    infoDev: {
      type: "dateFile",
      filename: "./logs/infoDev.log",
      encoding: "utf8",
      layout: {
        type: "pattern",
      },
      pattern: "yyyy-MM-dd",
      alwaysIncludePattern: true,
    },
    /** 生产环境记录配置 */
    infoPro: {
      type: "dateFile",
      filename: "./logs/info.log",
      encoding: "utf8",
      layout: {
        type: "basic",
      },
      pattern: "yyyy-MM-dd",
      alwaysIncludePattern: true,
    },
  },
  categories: {
    default: { appenders: ["outDev", "infoDev"], level: "debug" },
    pro: { appenders: ["outPro", "infoPro"], level: "info" },
  },
});

export const log =
  process.env.NODE_ENV === ENV.pro
    ? log4js.getLogger("pro")
    : log4js.getLogger();
