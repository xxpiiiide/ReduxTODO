import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';



const middleware = [logger]; //middleware가 여러개가 될 수 있기 때문에 선언해준다.

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware));

export default store;
