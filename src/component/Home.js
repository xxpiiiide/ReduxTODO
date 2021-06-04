import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from './Todos';
import { createActions } from '../redux/action';

function App() {
	const [text, setText] = useState('');

	const dispatch = useDispatch();

	const todoList = useSelector((state) => state);
	// console.log(todoList);

	function onSubmit(e) {
		e.preventDefault();
		setText('');
		dispatch(createActions.insertTODO(text));
	}

	function onChange(e) {
		setText(e.target.value);
	}

	return (
		<>
			<h1>PIDE TODO LIST</h1>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					value={text}
					placeholder="해야할 일"
					onChange={onChange}
				></input>
				<button>추가</button>
			</form>
			<ul>
				{todoList.map((toDo) => (
					<Todos toDo={toDo} key={toDo.id} />
				))}
			</ul>
		</>
	);
}

export default App;
