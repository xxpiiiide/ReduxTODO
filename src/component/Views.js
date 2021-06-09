import React from 'react';
import { connect } from 'react-redux';
import { addView } from '../redux/';

const Views = ({ count, addView }) => {
	return (
		<div className="items">
			<h1> 조회 수 : {count}</h1>
			<button onClick={() => addView()}> 조회하기!</button>
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
	addView,
};

export default connect(mapStateToProps, mapDispatchToProps)(Views);
