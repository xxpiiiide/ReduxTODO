import React from 'react';

const Subcribers = (props) => {
	return (
		<div className="items">
			<p> 구독자 수 : {props.count}</p>
			<button> 추가하기</button>
		</div>
	);
};

export default Subcribers;
