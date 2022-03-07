import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../body/ProductCard";
import { Container } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchIcon from "@material-ui/icons/Search";
import { filteredData } from "../../redux/actions/fetchdata";
import useFetchAPIdata from "../CustomHook/useFetchAPIdata";

function DataList(props) {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.fetch.products);

  //tried custom hook to fetch data instead of redux ko action
  //redux bata ni chalxa if you un comment line 12.

  const products = useFetchAPIdata(
    "https://electronic-ecommerce.herokuapp.com/api/v1/product"
  );

  const [displayproducts, setDisplayproducts] = useState();

  const [show, setShow] = useState(false);
  const [minprice, setMinprice] = useState(0);
  const [maxprice, setMaxprice] = useState();
  const [element, setElement] = useState();
  const [date, setDate] = useState();
  const [category, setCategory] = useState("laptop");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let categories = [...new Map(products.map((item) => item.category.slice(1)))];

  const handleFilter = (minprice, maxprice, date, category) => {
    const filterey = products.filter((item) => {
      if (minprice !== "" && maxprice !== "" && category == "") {
        if (Number(item.price.substring(1, 6) * 120) > minprice) {
          return item;
        }
      }
      if (category == item.category.slice(1)) {
        return item;
        // category name ra array vitra ko item name same garna
      }
    });
    console.log(category);
    console.log(categories);

    dispatch(filteredData(filterey));
    setDisplayproducts(filterey);
  };

  return (
    <Container className="pt-3">
      <div className="filter">
        <h2>Hot Deals</h2>

        <button className="filter-btn" onClick={handleShow}>
          <SearchIcon />
          Filter
        </button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filter</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div>
              Price <br />
              <input
                type="number"
                style={{ width: "11rem" }}
                onChange={(e) => setMinprice(e.target.value)}
                placeholder="Minimum price"
              ></input>{" "}
              -{" "}
              <input
                type="number"
                style={{ width: "11rem" }}
                onChange={(e) => setMaxprice(e.target.value)}
                placeholder="Maximum price"
              ></input>
            </div>
            <br />
            <div>
              Date <br />
              <input
                style={{ width: "23rem" }}
                type="date"
                onChange={(e) => setDate(e.target.value)}
              ></input>
            </div>
            <br />
            <div>
              Category
              <br />
              <select
                id="type"
                onChange={(e) => setCategory(e.target.value.slice(0, -1))}
              >
                {categories.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </select>
            </div>
            <button className="filtersecondary">Cancel</button>
            <button
              className="filterprimary"
              onClick={() => handleFilter(minprice, maxprice, date, category)}
            >
              Apply
            </button>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <ProductCard products={displayproducts ? displayproducts : products} />
    </Container>
  );
}

export default DataList;
