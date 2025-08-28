import { combineReducers } from "redux";
import { movieReducer } from "./movieReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    movieReducer,
    userReducer
})