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

const doneTODO = (id) => {
	return {
		type: DONE,
		id,
	};
};

export const createActions = {
	insertTODO,
	removeTODO,
	editTODO,
	doneTODO,
};
