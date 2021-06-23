import {TodoActionTypes, todoType, INSERT, REMOVE, EDIT, DONE, CHECKREMOVE, } from './type'


export const reducer = (state:todoType[] = [], action:TodoActionTypes): todoType[] => {
	switch (action.type) {
		case INSERT:
			return [...state, { id: Date.now(), text: action.text, done: false }];
		case REMOVE:
			return state.filter((toDo) => toDo.id !== action.id);
		case EDIT:
			return state.map((toDo) =>
				toDo.id === action.id ? { ...toDo, text: action.text } : toDo
			);
		case DONE:
			return state.map((toDo) =>
				toDo.id === action.id ? { ...toDo, done: !action.done } : toDo
			);
		case CHECKREMOVE:
			return state.filter((toDo) => toDo.done !== true);

		default:
			return state;
	}
};
