/** 路由路径配置 */
export const PATH = {
  /** 当前使用路由版本 */
  VERSION: "/v1",
  /** 根路径 */
  BASE: "/api",
  /**测试路由 */
  TEST: "/test",
  /** 权限路由 */
  AUTH: {
    BASE: "/auth",
    LOGIN: "/login",
    LOGOUT: "/logout",
  },
} as const;
