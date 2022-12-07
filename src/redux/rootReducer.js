import { combineReducers } from "redux";
import colorReducer from "./color/colorReducer";
import counterRedu from "./counterRedu";
import foodReducer from "./foodReducer";


const rootReducer = combineReducers({
    counter : counterRedu,
    color : colorReducer,
    food : foodReducer
})

export default rootReducer;