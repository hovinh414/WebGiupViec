import { combineReducers } from "redux";
import wishlistReducer from "./wishlistReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  user: userReducer,
  wishlist: wishlistReducer,
});

export default reducers;
