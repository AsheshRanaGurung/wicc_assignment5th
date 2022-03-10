import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import "./Wicc.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DataList from "./components/Screens/DataList";
import FormikCreation from "./components/Screens/FormikCreation";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchData } from "./redux/actions/fetchdata";
import ProductDetail from "./components/Screens/ProductDetail";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
      />

      <Route exact path="/" component={DataList} />
      <Route exact path="/formik" component={FormikCreation} />
      <Route exact path="/product/:id" component={ProductDetail} />

      {/* <DataList /> */}
    </div>
  );
}

export default App;
