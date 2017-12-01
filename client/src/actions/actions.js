import {
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_RESPONSE,
  SEARCH_DATA_ERROR
} from '../constants/constants';

// Action Creators
export const searchDataRequest = () => ({
  type: SEARCH_DATA_REQUEST,
  isFetching: true,
  isError: false
});

export const searchDataResponse = (response) => ({
  type: SEARCH_DATA_RESPONSE,
  isFetching: false,
  isError: false,
  searchResults: response
});

export const searchDataError = () => ({
  type: SEARCH_DATA_ERROR,
  isFetching: false,
  isError: true
});

// Thunk Action Creators
export const searchDataFetch = ({ sex, age, size, goodWith }) => {
  return (dispatch) => {
    dispatch(searchDataRequest());

    return (
      fetch(/* request */)
        .then(response => response.json())
        .then(response => dispatch(searchDataResponse(response)))
        .catch(error => dispatch(searchDataError()))
    );
  };
};
