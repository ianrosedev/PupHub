import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker, Circle } from 'react-google-maps';
import MarkerWithInfoWindow from '../MarkerWithInfoWindow/MarkerWithInfoWindow';
import Radium from 'radium';
import colors from '../../media/styles/colors';

const propTypes = {
  loadingElement: PropTypes.object.isRequired,
  containerElement: PropTypes.object.isRequired,
  mapElement: PropTypes.object.isRequired,
  defaultCenter: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  isMarkerShown: PropTypes.bool.isRequired,
  locationCoords: PropTypes.object,
  distance: PropTypes.string.isRequired,
  searchResults: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
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
}) => {
  const parseSearchResults = () => {
    const arrayOfMarkers = [];

    Object.keys(searchResults).forEach((key) => {
      const individualResult = searchResults[key];
      const matchedElementIndex = arrayOfMarkers.findIndex(element => {
        const latLngElement = element[0].animalLocationCoordinates.split(',');
        const latLngArray = individualResult.animalLocationCoordinates.split(',');

        return (
          latLngElement[0] === latLngArray[0] && latLngElement[1] === latLngArray[1]
        );
      });

      if (matchedElementIndex >= 0) {
  	    arrayOfMarkers[matchedElementIndex].push(individualResult)
      } else {
  	    arrayOfMarkers.push([individualResult])
      }
    })

    return (
      arrayOfMarkers.map((element, i) => (
        <MarkerWithInfoWindow
          key={'marker' + i}
          data={element}
          label={{
            text: String(element.length),
            color: 'white'
          }}
        />
      ))
    );
  };

  return (
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
            strokeWeight: 0.5,
            strokeColor: colors.pending,
            clickable: false,
            editable: false
          }}
        />
      }
      {isMarkerShown &&
        <Marker
          position={locationCoords}
          defaultIcon={require('../../media/images/map-icon-house.png')}
        />
      }
      {isMarkerShown && searchResults && typeof searchResults === 'object' &&
        parseSearchResults()
      }
    </GoogleMap>
  );
});

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;

export default Radium(Map);
