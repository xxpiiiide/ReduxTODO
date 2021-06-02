import React from 'react';

function TodoItem({ id, title }) {
	return (
		<li>
			<div>
				<span>
					<input type="checkbox"></input>
					{title}
				</span>
				<button>지우기</button>
			</div>
		</li>
	);
}

export default TodoItem;
