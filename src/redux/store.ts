import { createStore } from 'redux';
import { reducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(reducer, composeWithDevTools());

export type rootReducerType = ReturnType<typeof reducer>;

export default store;
