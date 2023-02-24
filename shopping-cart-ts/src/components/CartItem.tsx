import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
type cartItemType = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: cartItemType) {
  const { removeFromCart, cartItems } = useShoppingCart();

  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <>
      <Stack
        direction="horizontal"
        gap={3}
        className="d-flex align-items-center mt-2"
      >
        <img
          src={item.imgUrl}
          alt=""
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {item.name}{" "}
            <span style={{ fontSize: "0.75rem" }}>X {quantity}</span>
          </div>
          <div>{formatCurrency(item.price)}</div>
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        <button
          className="ml-auto outline-danger"
          onClick={() => removeFromCart(item.id)}
        >
          X
        </button>
      </Stack>
    </>
  );
}
