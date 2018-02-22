import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from 'react-google-maps';
import { PortalWithState } from 'react-portal';
import Modal from '../Modal/Modal';
import Radium from 'radium';
import colors from '../../media/styles/colors';

const propTypes = {
  data: PropTypes.array.isRequired,
  label: PropTypes.object.isRequired
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
    const style = {
      infoWindow: {
        container: {
          margin: '0 10px',
          maxHeight: 200
        },
        card: {
          backgroundColor: colors.primaryLightest,
          width: 120,
          margin: '10px 0',
          borderRadius: 3,
          boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.4), 0 3px 10px 0 rgba(0, 0, 0, 0.3)',
          fontFamily: 'Nunito Sans, sans-serif',
          fontSize: 14,
          color: 'black',
          cursor: 'pointer'
        },
        img: {
          width: 120,
          height: 'auto',
          borderRadius: '3px 3px 0 0'
        },
        h4: {
          margin: 0,
          paddingBottom: 5,
          textAlign: 'center'
        }
      }
    };

    const { data, label } = this.props;
    const latLngArray = data[0].animalLocationCoordinates.split(',');

    return (
      <Marker
        position={{
          lat: Number(latLngArray[0]),
          lng: Number(latLngArray[1])
        }}
        label={label}
        onClick={this.toggleInfoWindow}
      >
        {this.state.isInfoWindowOpen &&
          <InfoWindow onCloseClick={this.toggleInfoWindow}>
            <div style={style.infoWindow.container}>
              {data.map((element, i) => (
                <PortalWithState
                  key={'portal' + i}
                  node={document.getElementById('portal')}
                  closeOnEsc
                >
                  {({ openPortal, closePortal, portal }) => {
                    return [
                      <div
                        style={style.infoWindow.card}
                        key={'infoWindowCard' + i}
                        onClick={openPortal}
                      >
                        <img
                          style={style.infoWindow.img}
                          src={(element.animalPictures[0]) ?
                            element.animalPictures[0].urlSecureFullsize :
                            require('../../media/images/no-photo-found.jpg')
                          }
                          alt={element.animalName}
                        />
                        <h4 style={style.infoWindow.h4}>{element.animalName}</h4>
                      </div>,
                      portal(
                        <Modal
                          individualResult={element}
                          closePortal={closePortal}
                        />
                      )
                    ];
                  }}
                </PortalWithState>
              ))}
            </div>
          </InfoWindow>
        }
      </Marker>
    );
  }
}

MarkerWithInfoWindow.propTypes = propTypes;

export default Radium(MarkerWithInfoWindow);
