
//initial state
const initialState = {
    devs : JSON.parse(localStorage.getItem('devs')) || [],
    loading : false,

}

export default initialState;