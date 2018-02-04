import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { change } from 'redux-form';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import Radium from 'radium';
import colors from '../../media/styles/colors';

const propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  isDisabled: PropTypes.bool,
  distance: PropTypes.string,
  setMapOptions: PropTypes.func.isRequired,
  setActivePage: PropTypes.func.isRequired,
  searchDataFetch: PropTypes.func.isRequired
};

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
        cursor: 'pointer',
        ':hover': {
          backgroundColor: colors.secondaryDark
        },
        ':active': {
          backgroundColor: colors.secondaryLight
        }
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

  getGeocodeAndFetch = (location) => {
    const dispatch = this.props.meta.dispatch;
    const { setMapOptions, setActivePage, searchDataFetch } = this.props;

    this.geocoder.geocode({
      address: location,
      componentRestrictions: {
        country: 'US'
      }
    },
    (results, status) => {
      const { distance } = this.props;

      if (status === 'OK') {
        const address = results[0].formatted_address;
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();

        // Dispatch location
        dispatch(change('searchForm', 'location', address));

        // Dispatch coordinates
        dispatch(change('searchForm', 'locationCoords', { lat, lng }));

        // Fetch data
        setMapOptions({
          zoom: (
            distance === '10' ? 10 :
            distance === '25' ? 9 :
            distance === '50' ? 8 :
            7
          ),
          isMarkerShown: true
        });
        setActivePage(1);
        searchDataFetch();
      } else {
        return alert('Sorry, there was an error!\nPlease check your internet connection and try again.');
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
            this.getGeocodeAndFetch(results[0].formatted_address);
            this.setState({
              isFindingPosition: false
            });
          } else {
            return this.locationError();
          }
        }
      );
    };

    const locationError = () => {
      // Default to user input
      this.setState({
        isFindingPosition: false
      });
    };

    // Reverse geocode to get city
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => locationSuccess(position),
        error => locationError()
      );
    } else {
      return locationError();
    };
  };

  componentDidMount() {
    this.geocoder = new window.google.maps.Geocoder();
    this.getUserLocation();
  }

  render() {
    const { input, meta: { touched, error }, isDisabled } = this.props;

    return (
      <div style={(touched && error) ? this.style.error.border : null}>
        <div style={this.style.base}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.charCode === 13) {
              e.stopPropagation();
              e.preventDefault();
            }
          }}
        >
          <i
            style={this.style.base.i}
            className='fa fa-search'
            aria-hidden='true'
          >
          </i>
          <StandaloneSearchBox
            onPlacesChanged={() => this.getGeocodeAndFetch(this.textInput.value)}
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
              disabled={this.state.isFindingPosition ? true : false}
            />
          </StandaloneSearchBox>
          <button
            style={this.style.base.button}
            type='button'
            disabled={isDisabled || this.state.isFindingPosition}
            onClick={() => this.getGeocodeAndFetch(this.textInput.value)}
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

SearchBar.propTypes = propTypes;

export default Radium(SearchBar);
