import { combineReducers } from "redux";
import { addItem } from "../actions";

const rootReducer = combineReducers({ addItem });
export { rootReducer };
