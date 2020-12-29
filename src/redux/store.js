import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer'


// need to invoke/initialize the createStore function, not reference it
const store = createStore(rootReducer, applyMiddleware(thunk))

// console.log(store.getState())

export default store

