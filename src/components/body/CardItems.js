import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { toast } from "react-toastify";
const CardItems = (props) => {
  const {
    id,
    image,
    stock,
    name,
    price,
    category,
    date,
    setCartValue,
    cartValue,
    setCartItems,
    cartItems,
  } = props;
  const [itemnum, setItemnum] = useState(1);
  const decNum = () => {
    {
      itemnum === 1 ? setItemnum(1) : setItemnum(itemnum - 1);
    }
  };
  const incNum = (id, stock) => {
    console.log(id);

    if (itemnum < stock) {
      setItemnum(itemnum + 1);
    } else if (itemnum === stock || itemnum > stock) {
      setItemnum(stock);
    }
  };
  const addcartItem = (name, image, stock, price, qty) => {
    toast("Item added successfully");

    setCartValue(cartValue + 1);

    setCartItems([
      ...cartItems,
      { name: name, image: image, stock: stock, price: price, qty: qty },
    ]);
    console.log(stock, qty);
  };

  // let month = Date(date).getMonth() + 1;
  // let year = Date(date).getFullYear();
  // let day = Date(date).getDate();
  // const finalDAte = `${day}/${month}/${year}`;

  return (
    <Card className="merocard my-3 p-3 rounded">
      <Card.Img
        style={{ height: "10rem", width: "100%" }}
        src={`https://electronic-ecommerce.herokuapp.com/${image}`}
      />
      <Card.Body>
        <div className="itemSetter">
          <button className="itemsetter-btn" onClick={decNum}>
            -
          </button>
          <div> {itemnum} </div>
          <button className="itemsetter-btn" onClick={() => incNum(id, stock)}>
            +
          </button>
        </div>

        <Card.Title as="h6">{name}</Card.Title>
        <div className="card-row">
          <Card.Text as="h5">
            <b>Rs.{price.substring(1, 6) * 120}</b>
          </Card.Text>
          <Card.Text className="stock" style={{ color: "green" }}>
            Stocks left:{stock}
          </Card.Text>
        </div>
        <Card.Text as="h6">Category:{category.slice(1, 2)}</Card.Text>
        <Card.Text style={{ font: "0.8rem" }}>
          {/* Released on:{finalDAte} */}
          Released on:{new Date(date).toString().slice(4, 15)}
          {/* Released on: 11/02/2022 */}
        </Card.Text>
      </Card.Body>
      <button
        className="primary-btn"
        disabled={stock === 0}
        onClick={() =>
          addcartItem(name, image, stock, price.substring(1, 6), itemnum)
        }
      >
        <div className="primary-btn text">Add to Cart</div>
      </button>
    </Card>
  );
};

export default CardItems;
