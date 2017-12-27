import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from 'react-google-maps';
import Radium from 'radium';

const propTypes = {
  data: PropTypes.object.isRequired,
  position: PropTypes.object.isRequired,
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
    const { data, position, defaultIcon } = this.props;

    return (
      <Marker
        position={position}
        defaultIcon={defaultIcon}
        onClick={this.toggleInfoWindow}
      >
        {this.state.isInfoWindowOpen &&
          <InfoWindow onCloseClick={this.toggleInfoWindow}>
            <div>
              <img
                src={data.animalPictures[0].urlSecureThumbnail}
                alt={data.animalName}
              />
              <h4>{data.animalName}</h4>
            </div>
          </InfoWindow>
        }
      </Marker>
    );
  }
}

MarkerWithInfoWindow.propTypes = propTypes;

export default Radium(MarkerWithInfoWindow);
