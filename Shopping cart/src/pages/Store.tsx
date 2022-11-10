import storeItems from "../data/items.json";
import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
const Store = () => {
  // grid layout and responsiveness makes it easy with react bootstrap : https://react-bootstrap.github.io/layout/grid/
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col><StoreItem {...item}/></Col>
        ))}
      </Row>
    </>
  );
};

export default Store;