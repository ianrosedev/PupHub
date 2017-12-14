import { SET_ACTIVE_PAGE } from '../../constants/constants';

const initialState = {
  activePage: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.activePage
      };
    default:
      return state;
  }
};
