import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Radium from 'radium';

const propTypes = {
  loadingElement: PropTypes.object.isRequired,
  containerElement: PropTypes.object.isRequired,
  mapElement: PropTypes.object.isRequired,
  defaultCenter: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  isMarkerShown: PropTypes.bool.isRequired,
  locationCoords: PropTypes.object,
};

const defaultProps = {
  loadingElement: <div style={{ height: '100%' }} />,
  containerElement: <div style={{ height: 300 }} />,
  mapElement: <div style={{ height: '100%' }} />
};

const Map = withGoogleMap(({
  defaultCenter,
  zoom,
  isMarkerShown,
  locationCoords
}) => (
  <GoogleMap
    center={(!isMarkerShown) ?
      defaultCenter :
      locationCoords
    }
    zoom={zoom}
  >
    {isMarkerShown &&
      <Marker position={locationCoords} />
    }
  </GoogleMap>
));

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;

export default Radium(Map);
