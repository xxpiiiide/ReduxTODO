import React from 'react';
import { connect } from 'react-redux';
import { addSubscriber } from '../redux/subscribers/action';

const Views = ({ count, addSubscriber }) => {
	return (
		<div className="items">
			<h1> 구독자 수 : {count}</h1>
			<button onClick={() => addSubscriber()}> 추가하기</button>
		</div>
	);
};

const mapStateToProps = ({ subscribers }) => {
	return {
		count: subscribers.count,
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addSubscriber: () => dispatch(addSubscriber()),
// 	};
// };
// >>> 밑으로 간단하게 바꿀 수 있다.

const mapDispatchToProps = {
	addSubscriber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Views);
