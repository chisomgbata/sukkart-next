import { db } from "@/drizzle";
import { product } from "@/drizzle/schema/products";
import { eq } from "drizzle-orm";

export default async function Home() {
  // const products = await getProducts();
  // console.log(products);
  return <>hhello</>;
}

async function getProducts() {
  return db.select().from(product).limit(10);
}
