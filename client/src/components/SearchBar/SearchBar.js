import React, { Component } from 'react';
import { change } from 'redux-form';
import zips from 'zips';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import Radium from 'radium';
import colors from '../../media/styles/colors';

class SearchBar extends Component {
  state = {
    isFindingPosition: false
  };

  style = {
    base: {
      display: 'flex',
      border: `1px solid ${colors.secondary}`,
      borderRadius: 4,
      i: {
        backgroundColor: colors.secondary,
        padding: '8px 8px 10px 8px',
        color: 'white'
      },
      input: {
        width: '100%',
        border: 0,
        padding: '0 10px',
        // Fix rounded corners on Safari mobile
        borderRadius: 0,
        WebkitAppearance: 'none',

      },
      button: {
        backgroundColor: colors.secondary,
        width: 100,
        border: 0,
        borderRadius: 0,
        padding: 0,
        color: 'white',
        cursor: 'pointer'
      }
    },
    error: {
      border: {
        border: `1px solid ${colors.warning}`,
        borderRadius: 5,
        padding: 5
      },
      text: {
        display: 'block',
        marginLeft: 40,
        padding: '4px 0',
        color: colors.warning,
        fontSize: 18
      }
    }
  };

  getGeocode = (location) => {
    const dispatch = this.props.meta.dispatch;

    this.geocoder.geocode({
      address: location,
      componentRestrictions: {
        country: 'US'
      }
    },
    (results, status) => {
      if (status === 'OK') {
        const address = results[0].formatted_address;
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();

        // Dispatch location
        dispatch(change('search', 'location', address));

        // Dispatch coordinates
        dispatch(change('search', 'locationCoords', { lat, lng }));

        // Dispatch zipcode
        dispatch(change('search', 'locationZip', zips.getByLocation(
          lat,
          lng
        ).zip));
      } else {
        console.log(status);
      }
    });
  };

  getUserLocation = () => {
    // Show waiting message
    this.setState({
      isFindingPosition: true
    });

    const locationSuccess = (position) => {
      this.geocoder.geocode({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      },
        (results, status) => {
          if (status === 'OK') {
            this.getGeocode(results[0].formatted_address);
            this.setState({
              isFindingPosition: false
            });
          } else {
            console.log(status);
          }
        }
      );
    };

    const locationError = (error) => {
      // Default to user input
      this.setState({
        isFindingPosition: false
      });
    };

    // Reverse geocode to get city
    navigator.geolocation.getCurrentPosition(
      position => locationSuccess(position),
      error => locationError(error)
    );
  };

  componentDidMount() {
    this.geocoder = new window.google.maps.Geocoder();
    this.getUserLocation();
  }

  render() {
    const { input, meta: { touched, error } } = this.props;

    return (
      <div style={(touched && error) ? this.style.error.border : null}>
        <div style={this.style.base}>
          <i
            style={this.style.base.i}
            className='fa fa-search'
            aria-hidden='true'
          >
          </i>
          <StandaloneSearchBox
            onPlacesChanged={() => this.getGeocode(this.textInput.value)}
          >
            <input
              {...input}
              style={this.style.base.input}
              type='text'
              placeholder={this.state.isFindingPosition ?
                'Getting your location, please wait a moment...' :
                'Please enter a location...'
              }
              ref={input => this.textInput = input}
            />
          </StandaloneSearchBox>
          <button
            style={this.style.base.button}
            type='submit'
          >
            Submit
          </button>
        </div>
        {touched && error &&
          <span style={this.style.error.text}>
            {error}
          </span>
        }
      </div>
    );
  }
}

export default Radium(SearchBar);