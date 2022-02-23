import React, { useEffect, useState } from "react";
import "./Wicc.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DataList from "./components/DataList";
import FormikCreation from "./components/FormikCreation";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartlen, setCartlen] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [loader, setLoader] = useState(false);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  const getProducts = async () => {
    setLoader(true);
    const response = await axios.get(
      "https://electronic-ecommerce.herokuapp.com/api/v1/product"
    );
    setProducts(response?.data.data.product || []);
    setLoader(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getProducts();
    handleShow();
  }, []);

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
      />
      {/* <FormikCreation /> */}
      <Header
        cartlen={cartlen}
        cartItems={cartItems}
        setCartlen={setCartlen}
        setCartItems={setCartItems}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notice</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Hello sir, asti ko hapta meroBoards exams le garera absent thea, so yo
          assignment hijo ra aja 2 din ma garera Deadline submit gareko hunale
          mistakes consider gardinuhola
        </Modal.Body>

        <Modal.Footer>
          <div className="Modal-footer"></div>
        </Modal.Footer>
      </Modal>
      <DataList
        products={products}
        setProducts={setProducts}
        loader={loader}
        cartlen={cartlen}
        setCartlen={setCartlen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
}

export default App;
