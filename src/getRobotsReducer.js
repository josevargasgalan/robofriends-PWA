import * as actions from './actionsTypes';

const initialState = {
  robots: [],
  isPending: true,
  error: null
};

export const getRobotsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.GET_ROBOTS_PENDING:
      return state;
    case actions.GET_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: state.robots.concat(action.payload),
        isPending: false
      };
    case actions.GET_ROBOTS_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.payload
      };
    default:
      return state;
  }
};
