import {
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_RESPONSE,
  SEARCH_DATA_ERROR
} from '../../constants/constants';

const initialState = {
  isFetching: false,
  isError: false,
  searchResults: []
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
        searchResults: action.response
      };
    case SEARCH_DATA_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        isError: action.isError
      };
    default:
      return state;
  }
};
