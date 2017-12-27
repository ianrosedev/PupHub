import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from 'react-google-maps';
import Radium from 'radium';

const propTypes = {
  data: PropTypes.array.isRequired,
  defaultIcon: PropTypes.string.isRequired
};

class MarkerWithInfoWindow extends Component {
  state = {
    isInfoWindowOpen: false
  };

  toggleInfoWindow = () => (
    this.setState((prevState) => ({
      isInfoWindowOpen: !prevState.isInfoWindowOpen
    }))
  );

  render() {
    const { data, defaultIcon } = this.props;
    const latLngArray = data[0].animalLocationCoordinates.split(',');

    return (
      <Marker
        position={{
          lat: Number(latLngArray[0]),
          lng: Number(latLngArray[1])
        }}
        defaultIcon={defaultIcon}
        onClick={this.toggleInfoWindow}
      >
        {this.state.isInfoWindowOpen &&
          <InfoWindow onCloseClick={this.toggleInfoWindow}>
            <div>
              {data.map((element) => ([
                <img
                  src={element.animalPictures[0].urlSecureThumbnail}
                  alt={element.animalName}
                />,
                <h4>{element.animalName}</h4>
              ]))}
            </div>
          </InfoWindow>
        }
      </Marker>
    );
  }
}

MarkerWithInfoWindow.propTypes = propTypes;

export default Radium(MarkerWithInfoWindow);
