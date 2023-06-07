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
  return (
    <>
      <div>
        {products.map((product) => (
          <div key={product.id}> {product.name}</div>
        ))}
      </div>
      Featured ********
      <div>
        {featuredProducts.map((product) => (
          <div key={product.id}> {product.name}</div>
        ))}
      </div>
      <form action={addProduct}>
        <button type="submit">create</button>
      </form>
    </>
  );
}

async function getProducts() {
  const products = db.select().from(product);
  console.log("okay from the server");
  return products;
}
async function getFeaturedProducts() {
  return db.select().from(product).where(eq(product.featured, true));
}
