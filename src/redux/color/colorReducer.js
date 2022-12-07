import { BLUE, GRAY, GREEN, RED, YELLOW } from "./actionType";
import intialState from "./initialState";

//create reducer
const colorReducer = ( state = intialState, { type, payload }) => {

    switch (type) {
        case RED:
            return 'red';
        case GREEN:
            return 'green';
        case YELLOW:
            return 'yellow';
        case BLUE:
            return 'blue';
        case GRAY:
            return 'gray';
        default:
            return state;
    }

}

export default colorReducer;