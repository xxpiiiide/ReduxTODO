import React from 'react';
import AddTodoForm from './component/AddTodoForm';
import TodoList from './component/TodoList';
// import TotalCompleteItems from './component/TotalCompleteItems';

function App() {
	return (
		<div>
			<h1>PIDE TODO LIST</h1>
			<AddTodoForm />
			<TodoList />
			{/* <TotalCompleteItems /> */}
		</div>
	);
}

export default App;
