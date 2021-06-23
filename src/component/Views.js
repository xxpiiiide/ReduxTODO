import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addView } from '../redux/';

const Views = () => {
	const [number, setNumber] = useState('');

	const count = useSelector((state) => state.views.count);

	const dispatch = useDispatch();

	return (
		<div className="items">
			<h1> 조회 수 : {count}</h1>
			<input
				type="text"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>
			<button onClick={() => dispatch(addView(number))}> 조회하기!</button>
		</div>
	);
};

// const mapStateToProps = ({ views }) => {
// 	return {
// 		count: views.count,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addSubscriber: () => dispatch(addSubscriber()),
// 	};
// };
// >>> 밑으로 간단하게 바꿀 수 있다.

// const mapDispatchToProps = {
// 	addView: (number) => addView(number),
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Views);

export default Views;
