const INSERT = 'INSERT';
const REMOVE = 'REMOVE';
const EDIT = 'EDIT';


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

const editTODO = (id) => {
    return {
        type: EDIT

    }
}



export const createActions = {
	insertTODO,
	removeTODO,
    editTODO,


};
