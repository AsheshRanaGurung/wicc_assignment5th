import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
// import DeleteIcon from "@material-ui/icons/Delete";

const ModalItem = (props) => {
  const { id, image, name, price, qty, deletelist } = props;
  const [cartitemnum, setCartitemnum] = useState(qty);

  let nepaliPrice = Number(price) * 120;

  // const decNum = () => {
  //   {
  //     cartitemnum === 1 ? setCartitemnum(1) : setCartitemnum(cartitemnum - 1);
  //   }
  //   console.log(cartitemnum);
  // };
  // const incNum = (stock, qty) => {
  //   if (cartitemnum === stock || cartitemnum > stock || qty === stock) {
  //     setCartitemnum(stock);
  //   } else {
  //     setCartitemnum(cartitemnum + 1);
  //   }
  // };
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

// {
/* <div style={{ display: "flex" }}>
<button className="itemsetter-btn" onClick={decNum}>
  -
</button>
{/* <div> {cartitemnum} </div> */
// }1{
/* <div> {qty} </div> */
// }
// {
/* <button
  className="itemsetter-btn"
  onClick={() => incNum(stock, qty)}
>
  +
</button> */
// }
// </div>
