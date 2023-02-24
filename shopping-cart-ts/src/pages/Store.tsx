import storeItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";
import { Storeitem } from "../components/Storeitem";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((storeItem) => (
          <Col key={storeItem.id}>
            <Storeitem {...storeItem} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
