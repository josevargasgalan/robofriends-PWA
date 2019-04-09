import * as actions from './actionsTypes';

const initialState = {
    searchField : ''
}

export const searchReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actions.CHANGE_SEARCH_FIELD: 
        return {
            ...state,
            searchField: action.payload
        }
        default:
        return state;
    }
}