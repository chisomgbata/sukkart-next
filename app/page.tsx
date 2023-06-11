import { db } from "@/drizzle";
import { cart } from "@/drizzle/schema/cart";
import { product } from "@/drizzle/schema/products";
import { eq } from "drizzle-orm";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          {product.name}
          <Link href={`/product/${product.slug}`}>{`${product.price}`}</Link>
        </div>
      ))}
    </>
  );
}

async function getProducts() {
  return db.select().from(product).limit(10);
}


