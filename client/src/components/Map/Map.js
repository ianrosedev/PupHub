import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Radium from 'radium';

const defaultProps = {
  loadingElement: <div style={{ height: '100%' }} />,
  containerElement: <div style={{ height: 300 }} />,
  mapElement: <div style={{ height: '100%' }} />
};

const Map = withGoogleMap((props) => (
  <GoogleMap
    center={props.coords}
    zoom={props.zoom}
  >
    {props.isMarkerShown &&
      <Marker position={props.coords} />
    }
  </GoogleMap>
));

Map.defaultProps = defaultProps;

export default Radium(Map);
