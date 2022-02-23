import React, { useEffect, useState } from "react";
import ProductCard from "./body/ProductCard";
import { Container } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchIcon from "@material-ui/icons/Search";

function DataList(props) {
  const {
    cartlen,
    setCartlen,
    cartItems,
    setCartItems,
    loader,
    products,
    setProducts,
  } = props;

  const [show, setShow] = useState(false);
  const [minprice, setMinprice] = useState(0);
  const [maxprice, setMaxprice] = useState();
  const [element, setElement] = useState();
  const [date, setDate] = useState();
  const [category, setCategory] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const categorylist = () => {
    let categories = [
      ...new Map(products.map((item) => item.category.slice(1, 2))),
    ];
    return categories;
  };

  const handleFilter = (minprice, maxprice, date, category) => {
    const filterey = products.filter((item) => {
      if (Number(item.price.substring(1, 6) * 120) > minprice) {
        return item;
      }
    });
    // console.log(filterey);
    setProducts(filterey);
  };

  // useEffect(() => {
  //   setFilteredData(products);
  // }, []);

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
              {/* <Category list={categorylist()} element={element} /> */}
              <select id="type">
                {categorylist().map((element) => (
                  <option
                    value={element}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {element}
                  </option>
                ))}
              </select>
            </div>
            <button className="filtersecondary">Cancel</button>
            <button
              className="filterprimary"
              onClick={() => handleFilter(minprice)}
            >
              Apply
            </button>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <ProductCard
        products={products}
        loader={loader}
        cartValue={cartlen}
        setCartValue={setCartlen}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </Container>
  );
}

export default DataList;

// {products.map((item) => {
//   <ProductCard
//     id={item._id}
//     image={item.image}
//     stock={item.stock}
//     name={item.name}
//     price={item.price}
//     category={item.category}
//     date={item.createDate}
//     loader={loader}
//     cartValue={cartlen}
//     setCartValue={setCartlen}
//     cartItems={cartItems}
//     setCartItems={setCartItems}
//   />;
// })}
