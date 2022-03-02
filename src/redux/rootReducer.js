import { combineReducers } from "redux";

import {
  fetchdataReducer,
  updateCartReducer,
  GetThisProductReducer,
} from "./reducers/fetchdataReducer";

const rootReducer = combineReducers({
  fetch: fetchdataReducer,
  updateCart: updateCartReducer,
  GetThisProduct: GetThisProductReducer,
});

export default rootReducer;
