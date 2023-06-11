import { db } from "@/drizzle";
import { cart, Cart, NewCart } from "@/drizzle/schema/cart";

const addToCart = ({
  newCart,
  userCart,
}: {
  newCart: NewCart;
  userCart: Cart[];
}) => {
  return <div>addToCart</div>;
};

function add(newCart: NewCart) {
  db.insert(cart).values(newCart);
}

export default addToCart;
