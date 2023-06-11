"use client";
import CartIcon from "@/components/icons/cart";
import { Cart } from "@/drizzle/schema/cart";

export default function CartButton({ cart }: { cart: Cart[] }) {
  return (
    <div className="relative ">
      <CartIcon />{" "}
      <span className="absolute -top-2 -right-2 bg-gray-100 text-gray-700 rounded-full w-5 h-5   flex items-center justify-center">
        {cart.length}
      </span>
    </div>
  );
}

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
