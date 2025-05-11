import { combineReducers } from "redux";
import projectReducer from "./ProjectReducer";
import Project from "../components/Project";
const myReducer = combineReducers({
    user : userAuthReducer,
    Project : projectReducer,
});
export default myReducer;