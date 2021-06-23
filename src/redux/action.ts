import { INSERT,REMOVE,EDIT,DONE,CHECKREMOVE, TodoActionTypes, todoType  } from "./type";

const insertTODO = (text:string):TodoActionTypes => {
	return {
		type: INSERT,
		text,
	};
};

const removeTODO = (id:number):TodoActionTypes => {
	return {
		type: REMOVE,
		id,
	};
};

const editTODO = (id:number, text:string):TodoActionTypes => {
	return {
		type: EDIT,
		id,
		text,
	};
};

const doneTODO = (id:number, done:boolean):TodoActionTypes => {
	return {
		type: DONE,
		id,
		done,
	};
};

const checkRemove = ():TodoActionTypes => {
	return {
		type: CHECKREMOVE,
	};
};

export const createActions = {
	insertTODO,
	removeTODO,
	editTODO,
	doneTODO,
	checkRemove,
};
