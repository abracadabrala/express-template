import knex from "knex";
import { ENV, MYSQL } from "../config";
import { log } from "../utils/logger";

export function createMysqlClient() {
  const config = process.env.NODE_ENV === ENV.pro ? MYSQL.proConf : MYSQL.devConf;
  const client = knex(config);
  if (client) {
    log.info("mysql client connect");
    return client;
  } else {
    log.error("mysql client error");
    process.exit(1);
  }
}
