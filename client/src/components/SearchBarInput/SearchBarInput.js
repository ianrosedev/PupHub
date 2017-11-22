import React, { Component } from 'react';
import { change } from 'redux-form';
import zips from 'zips';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import Radium from 'radium';

class SearchBarInput extends Component {
  style = {
    base: {
      width: '100%',
      border: 0,
      padding: '0 10px',
      // Fix rounded corners on Safari mobile
      borderRadius: 0,
      WebkitAppearance: 'none'
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
    return (
      <StandaloneSearchBox
        onPlacesChanged={() => this.getGeocode(this.textInput.value)}
      >
        <input
          {...this.props.input}
          style={this.style.base}
          type='text'
          placeholder='Please enter a location...'
          ref={input => this.textInput = input}
        />
      </StandaloneSearchBox>
    );
  }
}

export default Radium(SearchBarInput);
