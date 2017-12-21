import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker, Circle } from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';
import Radium from 'radium';

const propTypes = {
  loadingElement: PropTypes.object.isRequired,
  containerElement: PropTypes.object.isRequired,
  mapElement: PropTypes.object.isRequired,
  defaultCenter: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  isMarkerShown: PropTypes.bool.isRequired,
  locationCoords: PropTypes.object,
  distance: PropTypes.string.isRequired,
  searchResults: PropTypes.object
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
  locationCoords,
  distance,
  searchResults
}) => (
  <GoogleMap
    center={(!isMarkerShown) ?
      defaultCenter :
      locationCoords
    }
    zoom={zoom}
  >
    {isMarkerShown &&
      <Circle
        center={locationCoords}
        // Google Maps requires meters
        // miles * 1609.344 = meters
        radius={distance * 1609.344}
        defaultOptions={{
          fillOpacity: 0.1,
          strokeWeight: 1,
          clickable: false,
          editable: false
        }}
      />
    }
    {isMarkerShown &&
      <Marker position={locationCoords} />
    }
    {isMarkerShown && searchResults &&
      <MarkerClusterer
        //onClick={props.onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
        {Object.keys(searchResults).map((key) => {
          const individualResult = searchResults[key];
          const latLng = individualResult.animalLocationCoordinates.split(',');

          return (
            <Marker
              key={individualResult.animalID}
              position={{
                lat: Number(latLng[0]),
                lng: Number(latLng[1])
              }}
            />
          );
        })}
      </MarkerClusterer>
    }
  </GoogleMap>
));

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;

export default Radium(Map);
