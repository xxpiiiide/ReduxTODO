import { combineReducers } from 'redux';
import subscribersReducer from './subscribers/reducer';
import viewsReducer from './views/reducer';
import commentsReducer from './comments/reducer';

const rootReducer = combineReducers({
	subscribers: subscribersReducer,
	views: viewsReducer,
	commentsReducer: commentsReducer,
});

export default rootReducer;
