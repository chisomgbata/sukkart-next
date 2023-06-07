import type { Config } from "drizzle-kit";

export default {
  schema: "./drizzle/schema/*",
  out: "./drizzle/migrations",
  connectionString: `mysql://ok0huxp8ui6cqdcctp7g:pscale_pw_LQoWdhmA06dZdqmtS76ImYnsY4dDJFIrRCA7lKaZ06r@aws.connect.psdb.cloud/sukkart?ssl={"rejectUnauthorized":true}`,
} satisfies Config;
