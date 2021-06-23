import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from './Todos';
import { createActions } from '../redux/action';
import {rootReducerType} from '../redux/store'


function Home() {
	const [text, setText] = useState('');

	const dispatch = useDispatch();

	const todoList = useSelector((state:rootReducerType) => state);
	// console.log(todoList);

	function onSubmit(e:React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setText('');
		dispatch(createActions.insertTODO(text));
	}

	function onChange(e:React.ChangeEvent<HTMLInputElement>) {
		setText(e.target.value);
	}

	function checkDelBtn() {
		dispatch(createActions.checkRemove());
	}

	return (
		<div>
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
			<div>
				{todoList.map((toDo) => (
					<Todos toDo={toDo} key={toDo.id} />
				))}
				<button onClick={checkDelBtn}>선택삭제</button>
			</div>
		</div>
	);
}

export default Home;


