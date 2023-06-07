import {
  boolean,
  int,
  mysqlEnum,
  mysqlTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/mysql-core";

export const product = mysqlTable("product", {
  id: serial("id").primaryKey(),
  status: mysqlEnum("status", ["DRAFT", "PUBLISHED"]).default("DRAFT"),
  name: text("name").notNull(),
  stock: int("stock").default(1),
  slug: text("slug").notNull(),
  cost: int("cost").notNull(),
  price: int("price"),
  description: text("description").notNull(),
  image: text("image").notNull(),
  featured: boolean("featured"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
