import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

import { Row, Col } from "react-bootstrap";
import CardItems from "../Screens/CardItems";
const ProductCard = (props) => {
  const { products } = props;

  const isloading = useSelector((state) => state.fetch.isloading);

  return (
    <>
      {isloading ? (
        <div className="text-center p-5" style={{ margin: "auto" }}>
          <Loader />
        </div>
      ) : (
        <Row>
          {products.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <CardItems
                id={item.id}
                image={item.image}
                stock={item.stock}
                name={item.name}
                price={item.price}
                category={item.category}
                date={item.createDate}
              />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default ProductCard;
