import { db } from "@/drizzle";
import { Cart, cart } from "@/drizzle/schema/cart";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
const AddToCart = ({
  product,
  userCart,
}: {
  product: number;
  userCart: Cart[];
}) => {
  const inCart = userCart.find((e) => e.product === product);
  let user = getUser();

  async function addToCart() {
    "use server";
    if (!user) throw new Error("what am i doing");

    await db.insert(cart).values({
      product: product,
      user: user,
    });
    revalidatePath(`/product/${product}`);
  }

  async function increaseQuantity() {
    "use server";
    if (!user) throw new Error("ouch");
    const quantity = inCart?.quantity || 0;
    await db.update(cart).set({
      quantity: quantity + 1,
    });
    revalidatePath(`/product/${product}`);
  }
  return (
    <form action={addToCart}>
      <div>{inCart && <>{inCart.quantity} quantity</>}</div>

      <button type="submit">add to cart</button>
      {inCart && (
        <button formAction={increaseQuantity}>increaseQuantity</button>
      )}
    </form>
  );
};

function generateGuestId() {
  const prefix = "guest_";
  const alphanumeric =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let guestId = prefix;

  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * alphanumeric.length);
    guestId += alphanumeric[randomIndex];
  }

  return guestId;
}

function getUser() {
  const { userId } = auth();
  return userId || cookies().get("guestId")?.value;
}

export default AddToCart;
