import React, { useState } from 'react';
import List from '../component/List';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { add } from '../store';

function Home({ toDos, addToDo }) {
	const [text, setText] = useState('');

	function onChange(e) {
		setText(e.target.value);
	}

	function onSubmit(e) {
		e.preventDefault();
		setText('');
	}

	return (
		<>
			<Wrapper>
				<Title>PIDE TODOLIST</Title>
				<form onSubmit={onSubmit}>
					<input
						type="text"
						placeholder="추가할 일 "
						value={text}
						onChange={onChange}
					></input>
					<button> 추가</button>
				</form>
			</Wrapper>
			<ul>
				{toDos.map((toDo) => (
					<List {...toDo} key={toDo.id} />
				))}
			</ul>
		</>
	);
}

export default Home;

const Wrapper = styled.div`
	text-align: center;
`;

const Title = styled.h1`
	text-align: center;
	background-color: gray;
`;
