export const INSERT = 'INSERT';
export const REMOVE = 'REMOVE';
export const EDIT = 'EDIT';
export const DONE = 'DONE';
export const CHECKREMOVE = 'CHECKREMOVE';


export interface insertTODOType {
    type: typeof INSERT
    text: string
}

export interface removeTODOType {
    type: typeof REMOVE
    id: number
}

export interface editTODOType {
    type: typeof EDIT
    text: string
    id: number
}

export interface doneTODOType {
    type: typeof DONE
    id: number
    done: boolean
}

export interface checkRemoveType {
    type: typeof CHECKREMOVE
}


export type TodoActionTypes = insertTODOType | removeTODOType | editTODOType | doneTODOType | checkRemoveType;


export interface todoType {
    text: string,
    id: number,
    done: boolean
}