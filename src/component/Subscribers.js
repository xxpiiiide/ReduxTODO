import React from 'react';
import { connect } from 'react-redux';
import { addSubscriber } from '../redux/subscribers/action';

const Subcribers = ({ count, addSubscriber }) => {
	return (
		<div className="items">
			<h1> 구독자 수 : {count}</h1>
			<button onClick={() => addSubscriber()}> 추가하기</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		count: state.count,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addSubscriber: () => dispatch(addSubscriber()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Subcribers);
