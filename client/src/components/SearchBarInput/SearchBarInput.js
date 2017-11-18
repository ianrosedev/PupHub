import React, { Component } from 'react';
import { change } from 'redux-form';
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

  onChange = () => {
    this.props.meta.dispatch(change('search', 'location', this.textInput.value));
  };

  render() {
    return (
      <StandaloneSearchBox onPlacesChanged={this.onChange}>
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
