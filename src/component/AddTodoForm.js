import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoSlice';

function AddTodoForm(props) {
	const [text, setText] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefualt();
		dispatch(addTodo({ title: text }));
	};

	const onChange = (e) => {
		setText(e.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="추가 할일"
				value={text}
				onChange={onChange}
			></input>
			<button>추가</button>
		</form>
	);
}

export default AddTodoForm;
