import {
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_RESPONSE,
  SEARCH_DATA_ERROR,
  SET_MAP_OPTIONS,
  SET_ACTIVE_PAGE,
  TOGGLE_SEARCH_AREA
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

export const setActivePage = (activePage) => ({
  type: SET_ACTIVE_PAGE,
  activePage
});

export const toggleSearchArea = () => ({
  type: TOGGLE_SEARCH_AREA
});

// Thunk Action Creators
export const searchDataFetch = () => {
  return (dispatch, getState) => {
    const state = getState();
    const activePage = state.pagination.activePage;
    const formValues = state.form.searchForm.values;

    // Keep down API requests if not needed
    if (!formValues.sex || !formValues.age ||
        !formValues.goodWith || !formValues.distance) {
      return;
    }

    const searchSettings = {
      activePage,
      zipcode: formValues.locationZip,
      sex: formValues.sex,
      age: formValues.age,
      goodWith: formValues.goodWith,
      distance: formValues.distance
    };

    dispatch(searchDataRequest());

    fetch('/search/general', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(searchSettings)
    })
      .then(response => response.json())
      .then(response => dispatch(searchDataResponse(JSON.parse(response))))
      .catch(error => dispatch(searchDataError()));
  };
};
