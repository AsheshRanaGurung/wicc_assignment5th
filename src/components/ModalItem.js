import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { cartUpdate } from "../redux/actions/fetchdata";

const ModalItem = (props) => {
  const { id, image, name, price, qty, stock, deletelist } = props;
  const [cartitemnum, setCartitemnum] = useState(qty);
  let nepaliPrice = Number(price) * 120;

  const dispatch = useDispatch();

  const decNum = () => {
    cartitemnum === 1 ? setCartitemnum(1) : setCartitemnum(cartitemnum - 1);
    console.log(cartitemnum - 1);
    const cartItem = cartitemnum - 1;
    dispatch(cartUpdate(id, name, image, stock, price, cartItem));
  };
  const incNum = (stock, qty) => {
    if (cartitemnum === stock || cartitemnum > stock || qty === stock) {
      setCartitemnum(stock);
    } else {
      setCartitemnum(cartitemnum + 1);
    }
    const cartitem = cartitemnum + 1;
    dispatch(cartUpdate(id, name, image, stock, price, cartitem));
  };
  return (
    <Row>
      <Col md={2}>
        <img
          className="cartImg"
          src={`https://electronic-ecommerce.herokuapp.com/${image}`}
          alt="img"
        ></img>
      </Col>
      <Col md={7}>
        <div>
          {" "}
          <div>{name}</div>
          <div style={{ color: "green" }}>Rs.{nepaliPrice}</div>
        </div>
      </Col>
      <Col md={3}>
        <div>
          <div style={{ color: "green" }}>Item:{cartitemnum}</div>
          <Row>
            <Col md={4}>
              {" "}
              <button
                className="itemsetter-btn"
                disabled={cartitemnum === 1}
                onClick={() => decNum()}
              >
                -
              </button>
            </Col>
            <Col md={2}>
              {" "}
              <div> 1</div>
            </Col>
            <Col md={4}>
              {" "}
              <button
                className="itemsetter-btn"
                disabled={cartitemnum === stock}
                onClick={() => incNum(stock)}
              >
                +
              </button>
            </Col>
          </Row>

          <button
            className="filtersecondary"
            style={{ color: "red" }}
            onClick={deletelist}
          >
            Delete
          </button>
        </div>
      </Col>
    </Row>
  );
};

export default ModalItem;
