import reducer from './pagination';
import { SET_ACTIVE_PAGE } from '../../constants/constants';

describe('pagination reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      activePage: 1
    });
  });

  it('should handle `SET_ACTIVE_PAGE` & return the expected object', () => {
    expect(reducer(undefined, {
      type: SET_ACTIVE_PAGE,
      activePage: 7
    })).toEqual({
      activePage: 7
    });
  });
});
