import React from 'react';
import styled from 'styled-components';
import AddTodoForm from './component/AddTodoForm';
import TodoList from './component/TodoList';
import TotalItems from './component/TotalItems';

function Home() {
	return (
		<>
			<Title>PIDE TODOLIST</Title>
			<AddTodoForm />
			<TodoList />
			<TotalItems />
		</>
	);
}

export default Home;

const Title = styled.h1`
	text-align: center;
	background-color: gray;
`;
