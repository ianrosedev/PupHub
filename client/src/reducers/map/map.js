import { SET_MAP_OPTIONS } from '../../constants/constants';

const initialState = {
  defaultCenter: { lat: 37, lng: -96 },
  zoom: 3,
  isMarkerShown: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MAP_OPTIONS:
      return {
        ...state,
        zoom: action.zoom,
        isMarkerShown: action.isMarkerShown
      };
    default:
      return state;
  }
};
