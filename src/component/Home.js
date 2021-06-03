import React, { useState } from 'react';
import todos from './todos';

function App() {
	const [text, setText] = useState('');

	function onSubmit(e) {
		e.preventDefault();
		setText('');
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
				<todos />
			</ul>
		</>
	);
}

export default App;
