import React, { Component } from 'react';
import { change } from 'redux-form';
import zips from 'zips';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import Radium from 'radium';
import colors from '../../media/styles/colors';

class SearchBar extends Component {
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

    // Dispatch location
    dispatch(change('search', 'location', location));

    this.geocoder.geocode({ address: location }, (results, status) => {
      if (status === 'OK') {
        // Dispatch coordinates
        dispatch(change('search', 'locationCoords', {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        }));

        // Dispatch zipcode
        dispatch(change('search', 'locationZip', zips.getByLocation(
          results[0].geometry.location.lat(),
          results[0].geometry.location.lng()
        ).zip));
      } else {
        console.log(status);
      }
    });
  };

  getUserLocation = () => {
    // Reverse geocode to get city
    navigator.geolocation.getCurrentPosition((position) => {
      this.geocoder.geocode({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      },
        (results, status) => {
          if (status === 'OK') {
            this.getGeocode(results[3].formatted_address);
          }
        }
      );
    });
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
              placeholder='Please enter a location...'
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
