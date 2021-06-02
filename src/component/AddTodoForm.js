import React, { useState } from 'react';

function AddTodoForm(props) {
	const [text, setText] = useState('');

	const onSubmit = (e) => {
		e.preventDefualt();
	};

	const onChange = (e) => {
		setText(e.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="추가 할일"
				value={text}
				onChange={onChange}
			></input>
			<button>추가</button>
		</form>
	);
}

export default AddTodoForm;
