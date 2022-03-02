import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import Modal from "react-bootstrap/Modal";
import ModalItem from "./ModalItem";
import { cartDelete } from "../redux/actions/fetchdata";

const Header = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.updateCart.cartItems);

  const deletelist = (item) => {
    dispatch(cartDelete(item));
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link style={{ textDecoration: "none" }} to="/">
            <img
              style={{ height: "2rem", width: "auto" }}
              src="https://infodev.com.np/static/media/logonew.920b2087.svg"
              alt="logo"
            />{" "}
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>
            <ShoppingCartIcon onClick={handleShow} />
            {cartItems.length}
          </Nav.Link>
          <Nav.Link>
            <AccountCircleRoundedIcon />
          </Nav.Link>
        </Nav>{" "}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Items added</Modal.Title>
          </Modal.Header>
          {cartItems.map((item) => (
            <Modal.Body>
              <ModalItem
                image={item.image}
                name={item.name}
                price={item.price}
                qty={item.qty}
                deletelist={() => deletelist(item)}
              />
            </Modal.Body>
          ))}

          <Modal.Footer>
            <div className="Modal-footer">
              Total Amount: Rs{" "}
              {cartItems.reduce(
                (acc, item) => acc + item.qty * Number(item.price) * 120,
                0
              )}
              <Link style={{ textDecoration: "none" }} to="/formik">
                <button
                  className="filterprimary"
                  disabled={cartItems.length === 0}
                  onClick={handleClose}
                >
                  Checkout
                </button>{" "}
              </Link>
            </div>
          </Modal.Footer>
        </Modal>
      </Container>
    </Navbar>
  );
};

export default Header;
