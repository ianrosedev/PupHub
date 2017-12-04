import {
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_RESPONSE,
  SEARCH_DATA_ERROR,
  SET_MAP_OPTIONS
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

export const setMapOptions = ({ zoom, isMarkerShown }) => ({
  type: SET_MAP_OPTIONS,
  zoom,
  isMarkerShown
});

// Thunk Action Creators
export const searchDataFetch = (zipcode) => {
  return (dispatch) => {
    dispatch(searchDataRequest());

    return (
      fetch(`search/general/${zipcode}`)
        .then(response => response.json())
        .then(response => dispatch(searchDataResponse(response)))
        .catch(error => dispatch(searchDataError()))
    );
  };
};
