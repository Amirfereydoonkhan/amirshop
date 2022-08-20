import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import productReducer from "./products/reducer";

const rootReducer = combineReducers({
    product: productReducer,
    shoppingCart:cartReducer
})
 
export default rootReducer;