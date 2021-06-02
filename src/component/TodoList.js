import React from 'react';
import TodoItem from './TotalItems';

function TodoList({todos}) {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} />
			))}
		</ul>
	);
}

export default TodoList;
