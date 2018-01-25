import reducer from './search';
import {
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_RESPONSE,
  SEARCH_DATA_ERROR,
  TOGGLE_SEARCH_AREA
} from '../../constants/constants';

describe('map reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isOpen: true,
      isFetching: false,
      isError: false,
      searchResults: {}
    });
  });

  it('should handle `SEARCH_DATA_REQUEST` & return the expected object', () => {
    expect(reducer(undefined, {
      type: SEARCH_DATA_REQUEST,
      isFetching: true,
      isError: false
    })).toEqual({
      isOpen: true,
      isFetching: true,
      isError: false,
      searchResults: {}
    });
  });

  it('should handle `SEARCH_DATA_RESPONSE` & return the expected object', () => {
    expect(reducer(undefined, {
      type: SEARCH_DATA_RESPONSE,
      isFetching: false,
      isError: false,
      searchResults: JSON.stringify({
        foo: 'bar'
      })
    })).toEqual({
      isOpen: true,
      isFetching: false,
      isError: false,
      searchResults: {
        foo: 'bar'
      }
    });
  });

  it('should handle `SEARCH_DATA_ERROR` & return the expected object', () => {
    expect(reducer(undefined, {
      type: SEARCH_DATA_ERROR,
      isFetching: false,
      isError: true
    })).toEqual({
      isOpen: true,
      isFetching: false,
      isError: true,
      searchResults: {}
    });
  });

  it('should handle `TOGGLE_SEARCH_AREA` & return the expected object', () => {
    expect(reducer(undefined, {
      type: TOGGLE_SEARCH_AREA
    })).toEqual({
      isOpen: false,
      isFetching: false,
      isError: false,
      searchResults: {}
    });
  });
});
