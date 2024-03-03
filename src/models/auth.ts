import { JSONSchemaType } from "ajv";
import { Auth } from "../types/auth";

/** 登录参数 */
export const logIn: JSONSchemaType<Auth.LogIn> = {
  type: "object",
  properties: {
    username: { type: "string" },
    password: { type: "string" },
  },
  required: ["username", "password"],
  additionalProperties:false
};

export const logOut: JSONSchemaType<Auth.LogIn> = logIn;
