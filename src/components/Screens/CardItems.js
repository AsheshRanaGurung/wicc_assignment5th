import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cartUpdate, GetThisProduct } from "../../redux/actions/fetchdata";
import { toast } from "react-toastify";

const CardItems = (props) => {
  const { id, image, stock, name, price, category, date } = props;

  const [itemnum, setItemnum] = useState(1);
  const dispatch = useDispatch();

  const decNum = () => {
    {
      itemnum === 1 ? setItemnum(1) : setItemnum(itemnum - 1);
    }
  };
  const incNum = (id, stock) => {
    if (itemnum < stock) {
      setItemnum(itemnum + 1);
    } else if (itemnum === stock || itemnum > stock) {
      setItemnum(stock);
    }
  };
  const addcartItem = (id, name, image, stock, price, qty) => {
    dispatch(cartUpdate(id, name, image, stock, price, qty));
    toast("Item added successfully");
  };
  const sendProductId = (id, image, stock, qty, name, price, category) => {
    dispatch(GetThisProduct(id, image, stock, qty, name, price, category));
  };

  return (
    <Card className="merocard my-3 p-3 rounded">
      <Link
        style={{ textDecoration: "none" }}
        to={`/product/${id}`}
        onClick={() =>
          sendProductId(id, image, stock, itemnum, name, price, category)
        }
      >
        <Card.Img
          style={{ height: "10rem", width: "100%" }}
          src={`https://electronic-ecommerce.herokuapp.com/${image}`}
        />
      </Link>

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
          Released on:{new Date(date).toString().slice(4, 15)}
        </Card.Text>
      </Card.Body>
      <button
        className="primary-btn"
        disabled={stock === 0}
        onClick={() =>
          addcartItem(id, name, image, stock, price.substring(1, 6), itemnum)
        }
      >
        <div className="primary-btn text">Add to Cart</div>
      </button>
    </Card>
  );
};

export default CardItems;
