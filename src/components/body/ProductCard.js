import React from "react";
import Loader from "../Loader/Loader";

import { Row, Col } from "react-bootstrap";
import CardItems from "./CardItems";
const ProductCard = (props) => {
  const { products, loader, cartValue, setCartValue, cartItems, setCartItems } =
    props;

  return (
    <>
      {loader ? (
        <div className="text-center p-5" style={{ margin: "auto" }}>
          <Loader />
        </div>
      ) : (
        <Row>
          {products.map((item) => (
            <Col sm={12} md={6} lg={4} xl={3} key={item._id}>
              <CardItems
                id={item._id}
                image={item.image}
                stock={item.stock}
                name={item.name}
                price={item.price}
                category={item.category}
                date={item.createDate}
                setCartValue={setCartValue}
                cartValue={cartValue}
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default ProductCard;
