import { getCart } from "@/components/cart";
import AddToCart from "@/components/cart/addToCart";
import { db } from "@/drizzle";
import { product } from "@/drizzle/schema/products";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";

const Product = async ({ params }: { params: { slug: string } }) => {
  const response = await getProduct(params.slug);

  const cookie = cookies().get("guestId");
  const { userId } = auth();
  const user = userId || cookie?.value;
  const cart = await getCart(user);
  const product = response[0];
  return (
    <>
      <div>{product.name}</div>
      <div>{product.id}</div>

      <div>
        {cart.map((cartItem) => (
          <div key={cartItem.product + cartItem.user}>{cartItem.product}</div>
        ))}
      </div>
      <AddToCart product={product.id} userCart={cart} />
    </>
  );
};

function getProduct(slug: string) {
  return db.select().from(product).where(eq(product.slug, slug)).limit(1);
}

export default Product;
