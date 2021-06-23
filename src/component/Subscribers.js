import React from 'react';

import { connect, useDispatch, useSelector } from 'react-redux';
import { addSubscriber } from '../redux'; // 원래는 "../redux/"이지만 index는 생략이 가능하다.

const Subcribers = () => {
	const count = useSelector((state) => state.subscribers.count);

	const dispatch = useDispatch();

	return (
		<div className="items">
			<h1> 구독자 수 : {count}</h1>
			<button onClick={() => dispatch(addSubscriber())}> 추가하기</button>
		</div>
	);
};

// const mapStateToProps = ({ subscribers }) => {
// 	return {
// 		count: subscribers.count,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addSubscriber: () => dispatch(addSubscriber()),
// 	};
// };
// >>> 밑으로 간단하게 바꿀 수 있다.

// const mapDispatchToProps = {
// 	addSubscriber,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Subcribers);
export default Subcribers;
