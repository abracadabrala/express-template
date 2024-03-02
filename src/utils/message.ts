/** 生成错误返回消息 */
export function createErrorMsg(message: string) {
  return {
    code: 0,
    message,
  };
}

/** 生成返回消息 */
export function createMsg(message: string, data?: any) {
  return {
    code: 1,
    message,
    data,
  };
}
