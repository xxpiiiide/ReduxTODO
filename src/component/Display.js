import React from 'react';
import { connect, useSelector } from 'react-redux';

const Display = (props) => {
	const count = useSelector((state) => state.subscribers.count);
	console.log('count일것인가', count);

	return (
		<div>
			<p> 구독자 수입니다 : {count}</p>
		</div>
	);
};

// const mapStateToProps = ({ subscribers }) => {
// 	return {
// 		count: subscribers.count,
// 	};
// };

export default Display;
