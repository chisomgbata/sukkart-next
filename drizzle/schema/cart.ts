import { InferModel } from "drizzle-orm";
import { mysqlTable, int, primaryKey, varchar } from "drizzle-orm/mysql-core";

export const cart = mysqlTable(
  "cart",
  {
    product: int("product").notNull(),
    user: varchar("user", {
      length: 40,
    }).notNull(),
    quantity: int("quantity").default(1).notNull(),
  },
  (table) => {
    return { pk: primaryKey(table.product, table.user) };
  }
);

export type NewCart = InferModel<typeof cart, "insert">;
export type Cart = InferModel<typeof cart>;
