const INSERT = 'INSERT';
const REMOVE = 'REMOVE';
const EDIT = 'EDIT';
const DONE = 'DONE';

const insertTODO = (text) => {
	return {
		type: INSERT,
		text,
	};
};

const removeTODO = (id) => {
	return {
		type: REMOVE,
		id,
	};
};

const editTODO = (id, text) => {
	return {
		type: EDIT,
		id,
		text,
	};
};

const doneTODO = (id, done) => {
	return {
		type: DONE,
		id,
		done,
	};
};

export const createActions = {
	insertTODO,
	removeTODO,
	editTODO,
	doneTODO,
};
