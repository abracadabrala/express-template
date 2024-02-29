import { v4 as uuidv4 } from "uuid";
import { Request, Response, NextFunction } from "express";
import { log } from "../utils/logger";

export function useLogger(req: Request, res: Response, next: NextFunction) {
  const requestId = uuidv4();

  res.locals.requestStartTime = Date.now();

  // 记录请求开始的信息
  log.info(
    `[${requestId}] \nRequest started - ${req.method} ${req.url} from ${
      req.ip
    } \nRequest Headers: ${JSON.stringify(
      req.headers
    )} \nRequest Body: ${JSON.stringify(req.body)}`
  );

  res.on("finish", () => {
    const responseTime = Date.now() - res.locals.requestStartTime;

    // 记录响应信息
    log.info(
      `[${requestId}] \nRequest completed - ${req.method} ${req.url} - ${
        res.statusCode
      } (${responseTime} ms) \nResponse Headers: ${JSON.stringify(
        res.getHeaders()
      )}`
    );
  });

  res.locals.requestId = requestId;

  next();
}
