import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "../Services/Reducers/HomeReducer";

const store = createStore(RootReducer);

export default store;
