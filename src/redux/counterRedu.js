
//initial state
const intialState = 0;


//create reducer
const counterRedu = ( state = intialState, { type, payload }) => {

    switch (type) {
        case 'INCREMENT':
            return state+1;
        
        case 'DECREMENT':
            return state-1;
    
        default:
            return state;
    }

}

// export const store = createStore(counterRedu)
export default counterRedu;