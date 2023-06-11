import CartButton from "@/components/cart/button";
import { db } from "@/drizzle";
import { cart } from "@/drizzle/schema/cart";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";

export default async function Cart() {
  const cookie = cookies().get("guestId");
  const { userId } = auth();
  const user = userId || cookie?.value;

  // const cart = user ? await getCart(user) : [];
  const cart: any[] = [];

  return <CartButton cookie={cookie?.value} cart={cart} />;
}

function getCart(user: string) {
  return db.select().from(cart).where(eq(cart.user, user));
}
