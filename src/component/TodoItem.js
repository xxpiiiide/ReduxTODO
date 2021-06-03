import React from 'react';

function TodoItem({ id, title, completed }) {
	return (
		<li>
			<div>
				<span>
					<input type="checkbox" checked={completed}></input>
					{title}
				</span>
				<button>지우기</button>
			</div>
		</li>
	);
}

export default TodoItem;
