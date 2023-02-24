import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type storeItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function Storeitem({ id, name, price, imgUrl }: storeItemProps) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantityItem = getItemQuantity(id);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantityItem === 0 ? (
            <Button onClick={() => increaseItemQuantity(id)} className="w-100">
              Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center "
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => increaseItemQuantity(id)}>+</Button>
                <div>
                  <span className="fs-3">{quantityItem}</span> in cart
                </div>
                <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
