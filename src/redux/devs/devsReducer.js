import initialState from "./initialState"


//create devs rreducer
const devsReducer = (state = initialState, { type, payload }) => {

    switch (type){
        case 'DEVS_ADDED':
            return{
                ...state,
                devs : payload
            }
    
        default:
            return state;
    }

}

export default devsReducer