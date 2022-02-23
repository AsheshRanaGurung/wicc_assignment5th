import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import Modal from "react-bootstrap/Modal";
import ModalItem from "./ModalItem/ModalItem";

const Header = (props) => {
  const { cartlen, setCartlen, cartItems, setCartItems } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deletelist = (id) => {
    console.log(id);

    const filteryy = cartItems.filter((item) => {
      console.log(item.id);
      if (id !== item) {
        return item;
      }
    });
    setCartItems(filteryy);
    setCartlen(cartlen - 1);
    console.log(filteryy);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            style={{ height: "2rem", width: "auto" }}
            src="https://infodev.com.np/static/media/logonew.920b2087.svg"
            alt="logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>
            <ShoppingCartIcon onClick={handleShow} />
            {cartlen}
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
                id={item.id}
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
              <button
                className="filterprimary"
                disabled={cartItems.length === 0}
                // onClick={click}
              >
                Checkout
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </Container>
    </Navbar>
  );
};

export default Header;
