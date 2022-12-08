import { combineReducers } from "redux";
import colorReducer from "./color/colorReducer";
import counterRedu from "./counterRedu";
import devsReducer from "./devs/devsReducer";
import foodReducer from "./foodReducer";


const rootReducer = combineReducers({
    counter : counterRedu,
    color : colorReducer,
    food : foodReducer,
    devs: devsReducer
})

export default rootReducer;