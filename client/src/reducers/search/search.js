import {
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_RESPONSE,
  SEARCH_DATA_ERROR,
  TOGGLE_SEARCH_AREA
} from '../../constants/constants';

const initialState = {
  isOpen: true,
  isFetching: false,
  isError: false,
  searchResults: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError
      };
    case SEARCH_DATA_RESPONSE:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError,
        searchResults: JSON.parse(action.searchResults)
      };
    case SEARCH_DATA_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError
      };
    case TOGGLE_SEARCH_AREA:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      return state;
  }
};
