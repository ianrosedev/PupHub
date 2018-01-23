import { SET_ACTIVE_PAGE, SET_LAST_PAGE } from '../../constants/constants';

const initialState = {
  activePage: 1,
  lastPage: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.activePage
      };
    case SET_LAST_PAGE:
      return {
        ...state,
        lastPage: action.lastPage
      };
    default:
      return state;
  }
};
