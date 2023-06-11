import { db } from "@/drizzle";
import { product } from "@/drizzle/schema/products";
import { seedProduct } from "@/seeds/products";

export default async function Seed() {
  //   const products = seedProduct(500);
  //   await db.insert(product).values(products);
  //   console.log(products);

  return <div>Seed</div>;
}
