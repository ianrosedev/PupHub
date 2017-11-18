import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import Radium from 'radium';

const defaultProps = {
  loadingElement: <div style={{ height: '100%' }} />,
  containerElement: <div style={{ height: 300 }} />,
  mapElement: <div style={{ height: '100%' }} />
};

const Map = withGoogleMap((props) => {
  return (
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: 37, lng: -96 }}
    >
    </GoogleMap>
  );
});

Map.defaultProps = defaultProps;

export default Radium(Map);
