import { combineReducers } from "redux";

import {
  fetchdataReducer,
  updateCartReducer,
  GetThisProductReducer,
  filtereddataReducer,
} from "./reducers/fetchdataReducer";

const rootReducer = combineReducers({
  fetch: fetchdataReducer,
  updateCart: updateCartReducer,
  GetThisProduct: GetThisProductReducer,
  filtereddata: filtereddataReducer,
});

export default rootReducer;
