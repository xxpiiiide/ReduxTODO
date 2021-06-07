import React, { useState } from 'react';
import styled from 'styled-components';
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

	function checkDelBtn(e) {
		dispatch(createActions.checkRemove());
	}

	return (
		<Wrapper>
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
			<ListWrapper>
				{todoList.map((toDo) => (
					<Todos toDo={toDo} key={toDo.id} />
				))}
				<button onClick={checkDelBtn}>선택삭제</button>
			</ListWrapper>
		</Wrapper>
	);
}

export default App;

/// styled

const Wrapper = styled.div`
	text-align: center;
	background: lightblue;
`;

const ListWrapper = styled.ul`
	list-style: none;
	padding-left: 0px;
`;
