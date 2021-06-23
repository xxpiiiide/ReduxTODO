import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createActions } from '../redux/action';
import {todoType} from "../redux/type"

type TodoProps = {
	toDo: todoType;
  };


function Todos({toDo}:TodoProps) {
	const dispatch = useDispatch();
	const [isEdit, setIsEdit] = useState(false);
	const [toDoText, setToDoText] = useState(toDo.text);

	const delBtnClick = () => {
		dispatch(createActions.removeTODO(toDo.id));
	};

	const editBtnClick = () => {
		setIsEdit(true);
	};

	const setEditClick = () => {
		setIsEdit(false);
		dispatch(createActions.editTODO(toDo.id, toDoText));
	};

	const toDoChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		setToDoText(e.target.value);
	};

	const handleDone = () => {
		dispatch(createActions.doneTODO(toDo.id, toDo.done));
	};

	return (
		<>
			{isEdit === true ? (
				<div>
					<input value={toDoText} onChange={toDoChange} />
					<button onClick={setEditClick}>완료</button>
				</div>
			) : (
				<div>
					<div>
						<input type="checkbox" checked={toDo.done} onChange={handleDone} />
						<span>{toDo.text}</span>
						<button onClick={editBtnClick}>수정</button>
						<button onClick={delBtnClick}>제거</button>
					</div>
				</div>
			)}
		</>
	);
}

export default Todos;

