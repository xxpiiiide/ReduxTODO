const INSERT = 'INSERT';
const REMOVE = 'REMOVE';
const EDIT = 'EDIT';
const DONE = 'DONE';

export const reducer = (state = [], action) => {
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
			return state;

		default:
			return state;
	}
};
