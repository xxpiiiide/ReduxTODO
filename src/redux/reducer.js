

export const reducer = (state=[], action) => {
    switch(action.type) {
        case INSERT:
            return {
                ...state, 
                id: Date.now()
                text: action.text
            }
    }
}


