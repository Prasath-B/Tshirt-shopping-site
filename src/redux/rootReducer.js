
import reducer from "./Reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    shop:reducer
})

export default rootReducer;