import CartButton from "@/components/cart/button";
import { db } from "@/drizzle";
import { cart } from "@/drizzle/schema/cart";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";

export default async function Cart() {
  const user = getUser();
  const cart = user ? await getCart(user) : [];
  return <CartButton cart={cart} />;
}

export function getCart(user: string | undefined) {
  if (!user) return [];
  return db.select().from(cart).where(eq(cart.user, user));
}

function getUser() {
  const { userId } = auth();
  return userId || cookies().get("guestId")?.value;
}
