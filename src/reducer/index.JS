import { combineReducers } from "redux";
import projectReducer from "./reducer/projectReducer";
import Project from "../components/Project";
const myReducer = combineReducers({
    user : userAuthReducer,
    Project : projectReducer,
});
export default myReducer;