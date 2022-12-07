
//initial state
const initialState = 'Alu';

//create reducer
const foodReducer = ( state = initialState, { type, payload }) =>{

    switch (type) {
        case 'FOOD_CHANGE':
            return payload 
    
        default:
            return state;
    }
}

//export
export default foodReducer;