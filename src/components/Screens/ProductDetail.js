import React, { useState } from "react";
import { Col, Image, ListGroup, Row, Card, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import StarRating from "react-bootstrap-star-rating";
import { cartUpdate } from "../../redux/actions/fetchdata";

function ProductDetail() {
  const [qty, setQty] = useState(1);
  const GetThisProduct = useSelector((state) => state.GetThisProduct.product);
  const dispatch = useDispatch();

  const addcartItem = (name, image, stock, price, qty) => {
    dispatch(cartUpdate(name, image, stock, price, qty));
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="node_modules/react-star-rating/dist/css/react-star-rating.min.css"
      ></link>
      ;
      <Link to="/" className="btn my-3">
        Go Back
      </Link>
      <Container className="pt-3">
        <Row>
          <Col md={6}>
            <Image
              src={`https://electronic-ecommerce.herokuapp.com/${GetThisProduct.image}`}
              fluid
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3> {GetThisProduct.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <StarRating defaultValue={5} min={0} max={10} step={0.5} />
              </ListGroup.Item>

              <ListGroup.Item>
                Category: {GetThisProduct.category.slice(1, 2)}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>
                        Rs.{GetThisProduct.price.substring(1, 6) * 120}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {GetThisProduct.stock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {GetThisProduct.stock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col xs="auto" className="my-1">
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(GetThisProduct.stock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <button
                    style={{ display: "contents" }}
                    className="primary-btn"
                    disabled={GetThisProduct.stock === 0}
                    onClick={() =>
                      addcartItem(
                        GetThisProduct.name,
                        GetThisProduct.image,
                        GetThisProduct.stock,
                        GetThisProduct.price.substring(1, 6),
                        qty
                      )
                    }
                  >
                    <div className="primary-btn text">Add to Cart</div>
                  </button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetail;
