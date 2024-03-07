import { createClient } from "redis";
import { ENV, REDIS } from "../config";
import { log } from "../utils/logger";

export function createRedisClient() {
  const config = process.env.NODE_ENV === ENV.pro ? REDIS.proConf : REDIS.devConf;
  const client = createClient(config);
  if (client) {
    client.connect();
    log.info("redis client connect");
    return client;
  } else {
    log.error("redis client error");
    process.exit(1);
  }
}
