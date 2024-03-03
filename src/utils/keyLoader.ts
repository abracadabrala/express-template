import fs from "node:fs";
import path from "node:path";

const pathPrivate = path.join(__dirname, "rsa_jwt_private.pem");
const pathPublic = path.join(__dirname, "rsa_jwt_public.pem");

export function loadKeys() {
  try {
    const privateData = fs.readFileSync(pathPrivate, "utf8");
    process.env.PRI = privateData;

    const publicData = fs.readFileSync(pathPublic, "utf8");
    process.env.PUB = publicData;
  } catch (err) {
    console.error("Error loading keys:", err);
    process.exit(1);
  }
}
