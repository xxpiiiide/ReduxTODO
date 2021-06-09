import {
	FETCH_COMMENTS,
	FETCH_COMMENTS_FAILURE,
	FETCH_COMMENTS_REQUEST,
	FETCH_COMMENTS_SUCCESS,
} from './type';

const initialState = {
	items: [],
};

const commentReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default commentReducer;
