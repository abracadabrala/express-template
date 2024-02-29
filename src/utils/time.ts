import dayjs from "dayjs";

/** 返回标准日期 */
export function date(timestamp: number) {
  return dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss");
}
