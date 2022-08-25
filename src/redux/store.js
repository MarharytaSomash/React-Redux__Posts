import { createStore } from 'redux';

const initialState = {
   likes:10
}

const reducer = (state = initialState, action) => {
   return state
}

const store = createStore(reducer);
export default store;