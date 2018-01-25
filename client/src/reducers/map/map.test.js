import reducer, { initialState } from './map';
import { SET_MAP_OPTIONS } from '../../constants/constants';

describe('map reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      defaultCenter: { lat: 37, lng: -96 },
      zoom: 3,
      isMarkerShown: false
    });
  });

  it('should handle `SET_MAP_OPTIONS` & return the expected object', () => {
    expect(reducer(undefined, {
      type: SET_MAP_OPTIONS,
      zoom: 8,
      isMarkerShown: true
    })).toEqual({
      defaultCenter: { lat: 37, lng: -96 },
      zoom: 8,
      isMarkerShown: true
    });
  });
});
