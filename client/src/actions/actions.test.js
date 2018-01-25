import {
  searchDataRequest,
  searchDataResponse,
  searchDataError,
  setMapOptions,
  setActivePage,
  setLastPage,
  toggleSearchArea,
  searchDataFetch
} from './actions';
import {
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_RESPONSE,
  SEARCH_DATA_ERROR,
  SET_MAP_OPTIONS,
  SET_ACTIVE_PAGE,
  SET_LAST_PAGE,
  TOGGLE_SEARCH_AREA
} from '../constants/constants';
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

describe('Action Creators', () => {
  it('`searchDataRequest` returns expected object', () => {
    const expectedAction = {
      type: SEARCH_DATA_REQUEST,
      isFetching: true,
      isError: false
    };

    expect(searchDataRequest()).toEqual(expectedAction);
  });

  it('`searchDataResponse` returns expected object', () => {
    const response = { foo: 'bar' };
    const expectedAction = {
      type: SEARCH_DATA_RESPONSE,
      isFetching: false,
      isError: false,
      searchResults: { foo: 'bar' }
    };

    expect(searchDataResponse(response)).toEqual(expectedAction);
  });

  it('`searchDataError` returns expected object', () => {
    const expectedAction = {
      type: SEARCH_DATA_ERROR,
      isFetching: false,
      isError: true
    };

    expect(searchDataError()).toEqual(expectedAction);
  });

  it('`setMapOptions` returns expected object', () => {
    const zoom = 8;
    const isMarkerShown = true;
    const expectedAction = {
      type: SET_MAP_OPTIONS,
      zoom,
      isMarkerShown
    };

    expect(setMapOptions({ zoom, isMarkerShown })).toEqual(expectedAction);
  });

  it('`setActivePage` returns expected object', () => {
    const activePage = 5;
    const expectedAction = {
      type: SET_ACTIVE_PAGE,
      activePage
    };

    expect(setActivePage(activePage)).toEqual(expectedAction);
  });

  it('`setLastPage` returns expected object', () => {
    const lastPage = 25;
    const expectedAction = {
      type: SET_LAST_PAGE,
      lastPage: 25
    };

    expect(setLastPage(lastPage)).toEqual(expectedAction);
  });

  it('`toggleSearchArea` returns expected object', () => {
    const expectedAction = {
      type: TOGGLE_SEARCH_AREA
    };

    expect(toggleSearchArea()).toEqual(expectedAction);
  });
});

describe('Thunk Action Creators', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('`searchDataFetch` returns the expected object', () => {
    const store = mockStore({
      pagination: {
        activePage: 7
      },
      form: {
        searchForm: {
          values: {
            locationZip: 12345,
            sex: ['Male', 'Female'],
            age: ['Young', 'Adult'],
            goodWith: ['Kids', 'Dogs', 'Cats'],
            distance: '50'
          }
        }
      }
    });

    const expectedActions = [{
      type: SEARCH_DATA_REQUEST,
      isFetching: true,
      isError: false
    },
    {
      type: SEARCH_DATA_RESPONSE,
      isFetching: false,
      isError: false,
      searchResults: {
        activePage: 1,
        formValues: {
          locationZip: 94115,
          sex: ['Male'],
          age: ['Young'],
          goodWith: ['Kids', 'Dogs'],
          distance: '25'
        }
      }
    }];

    fetchMock.postOnce('/search/general', {
      body: {
        activePage: 1,
        formValues: {
          locationZip: 94115,
          sex: ['Male'],
          age: ['Young'],
          goodWith: ['Kids', 'Dogs'],
          distance: '25'
        }
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return store.dispatch(searchDataFetch()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
