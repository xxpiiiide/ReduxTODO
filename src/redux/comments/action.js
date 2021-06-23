import {
	FETCH_COMMENTS,
	FETCH_COMMENTS_FAILURE,
	FETCH_COMMENTS_REQUEST,
	FETCH_COMMENTS_SUCCESS,
} from './type';

export const fetchComments = () => {
	return (dispatch) => {
		fetch('https://jsonplaceholder.typicode.com/comments')
			.then((response) => response.json())
			.then((comments) => console.log(comments)) // 보통은 (data)이지만 여기에 맞는 컨벤션은 (comments)이므로 이렇게 한다.
			.catch((error) => console.log(error));
	};
};

