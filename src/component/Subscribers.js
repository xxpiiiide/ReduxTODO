import React from 'react';
import { connect } from 'react-redux';

const Subcribers = (props) => {
	return (
		<div className="items">
			<h1> 구독자 수 : {props.count}</h1>
			<button> 추가하기</button>
		</div>
	);
};

const mapStateToprops = (state) => {
	return {
		count: state.count,
	};
};

export default connect(mapStateToprops)(Subcribers);
