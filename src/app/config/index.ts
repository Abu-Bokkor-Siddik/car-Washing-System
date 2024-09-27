import dotenv from "dotenv";
// import dotenv from 'dotenv';

import path from "path";
dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  port: process.env.PORT,
  database_URL: process.env.DATABASE_URL,
  jwt_token:process.env.JWT_TOKEN,
  store_id:process.env.Store_ID,
  signature_key:process.env.Signature_Key,
  payment_URL:process.env.payment_URL,
  payment_verify:process.env.payment_verify,
};
