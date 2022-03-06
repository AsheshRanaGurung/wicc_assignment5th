import {
  FETCHING_DATA,
  FETCH_SUCCESS,
  ADD_TO_CART_SUCCESS,
  CART_ITEM_DELETE,
  FETCHING_ID_DATA,
  FETCHING_ID_DATA_SUCCESS,
  FILTERED_DATA_REQUEST,
  FILTERED_DATA_SUCCESS,
} from "../constants/fetchConstants";

export const fetchdataReducer = (
  state = { products: [], isloading: true },
  action
) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        products: [],
        isloading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isloading: false,
      };
    default:
      return state;
  }
};
export const GetThisProductReducer = (
  state = { product: {}, isloading: true },
  action
) => {
  switch (action.type) {
    case FETCHING_ID_DATA:
      return { ...state, isloading: true };
    case FETCHING_ID_DATA_SUCCESS:
      return {
        ...state,
        product: action.payload,
        isloading: false,
      };
    default:
      return state;
  }
};

export const filtereddataReducer = (
  state = { filteredproducts: [] },
  action
) => {
  switch (action.type) {
    case FILTERED_DATA_REQUEST:
      return {
        ...state,
      };
    case FILTERED_DATA_SUCCESS:
      return {
        ...state,
        filteredproducts: action.payload,
      };
    default:
      return state;
  }
};

export const updateCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.name === item.name);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.name === existItem.name ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_ITEM_DELETE:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x !== action.payload),
      };
    default:
      return state;
  }
};
