import { db } from "@/drizzle";
import { product } from "@/drizzle/schema/products";
import { eq } from "drizzle-orm";

export default async function Home() {
  async function addProduct() {
    "use server";
    await db.insert(product).values({
      name: "Featured PRoduct",
      cost: 500,
      description: "lovely description",
      image: "image",
      slug: "image",
      featured: true,
    });
  }
  const products = await getProducts();
  const featuredProducts = await getFeaturedProducts();
  return <>Sukkart</>;
}

async function getProducts() {
  return [];
}
async function getFeaturedProducts() {
  return [];
}
