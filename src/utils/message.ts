/** 生成错误返回消息 */
export function createErrorMsg(message: any) {
  return {
    code: 0,
    message,
  };
}

/** 生成返回消息 */
export function createMsg(message: any, data?: any) {
  return {
    code: 1,
    message,
    data,
  };
}
