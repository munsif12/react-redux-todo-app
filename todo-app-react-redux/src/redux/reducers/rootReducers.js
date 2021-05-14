import { combineReducers } from "redux";
import { all_Reducers } from "./addItem";
// import { delete_item_reducer } from "./deleteItem";

const rootReducer = combineReducers({
  all_Reducers /* delete_item_reducer */,
});
export { rootReducer };
