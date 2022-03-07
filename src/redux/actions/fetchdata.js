import axios from "axios";
import {
  FETCHING_DATA,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_TO_CART_SUCCESS,
  CART_ITEM_DELETE,
  FETCHING_ID_DATA,
  FETCHING_ID_DATA_SUCCESS,
  FILTERED_DATA_REQUEST,
  FILTERED_DATA_SUCCESS,
} from "../constants/fetchConstants";
import { toast } from "react-toastify";

export const fetchData = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCHING_DATA,
    });
    const response = await axios.get(
      "https://electronic-ecommerce.herokuapp.com/api/v1/product"
    );
    dispatch({
      type: FETCH_SUCCESS,
      payload: response.data.data.product,
    });
  } catch (error) {
    dispatch({ type: FETCH_FAIL });
  }
};
export const GetThisProduct =
  (id, image, stock, qty, name, price, category) => async (dispatch) => {
    dispatch({
      type: FETCHING_ID_DATA,
    });

    dispatch({
      type: FETCHING_ID_DATA_SUCCESS,
      payload: {
        id: id,
        image: image,
        stock: stock,
        name: name,
        price: price,
        category: category,
        qty: qty,
      },
    });
  };

export const filteredData = (filterey) => async (dispatch) => {
  dispatch({
    type: FILTERED_DATA_REQUEST,
  });

  dispatch({
    type: FILTERED_DATA_SUCCESS,
    payload: filterey,
  });
};

export const cartUpdate =
  (name, image, stock, price, qty) => async (dispatch) => {
    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: {
        name: name,
        image: image,
        stock: stock,
        price: price,
        qty: qty,
      },
    });
    toast("Item added successfully");
  };

export const cartDelete = (item) => async (dispatch) => {
  dispatch({
    type: CART_ITEM_DELETE,
    payload: item,
  });
};
