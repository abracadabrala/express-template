import AJV from "ajv";
import { JSONSchemaType } from "ajv";
import { Request, Response, NextFunction } from "express";
import { createErrorMsg } from "../utils/message";

const ajv = new AJV();

export function validate<T>(schema: JSONSchemaType<T>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const valid = ajv.validate(schema, data);
    if (!valid) {
      const errors = ajv.errors;
      // res.send(createErrorMsg({ error: "Validation failed", details: errors }));
      res.send(createErrorMsg("参数错误"))
    } else {
      next();
    }
  };
}
