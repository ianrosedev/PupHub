import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentCentered from '../ContentCentered/ContentCentered';
import SearchForm from '../SearchForm/SearchForm';
import MapContainer from '../../containers/MapContainer/MapContainer';
import Radium from 'radium';
import colors from '../../media/styles/colors';

const propTypes = {
  setMapOptions: PropTypes.func.isRequired,
  searchDataFetch: PropTypes.func.isRequired
};

class SearchArea extends Component {
  state = {
    isOpen: true
  };

  formInitialValues = {
    sex: ['Male', 'Female'],
    age: ['Baby', 'Young', 'Adult', 'Senior'],
    goodWith: ['Show All'],
    distance: '25 Miles'
  };

  searchAreaToggle = () => (
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }))
  );

  onSubmit = (values) => {
    this.props.setMapOptions({
      zoom: 9,
      isMarkerShown: true
    });
    this.props.searchDataFetch({
      zipcode: values.locationZip,
      sex: values.sex,
      age: values.age,
      goodWith: values.goodWith,
      distance: values.distance.slice(0, values.distance.indexOf(' '))
    });
  };

  render() {
    const style = {
      base: {
        backgroundColor: colors.primaryLightest
      },
      content: {
        display: this.state.isOpen ? 'block' : 'none'
      },
      toggleControl: {
        width: '100vw',
        height: 35,
        backgroundColor: colors.primaryDark,
        borderTop: `1px solid ${colors.primaryLight}`,
        borderBottom: `1px solid ${colors.primaryLight}`,
        icons: {
          float: 'right',
          marginRight: '6vw',
          ':hover': {
            cursor: 'pointer'
          }
        }
      }
    };

    return (
      <div style={style.base}>
        <div style={style.content}>
          <ContentCentered>
            <SearchForm
              onSubmit={this.onSubmit}
              initialValues={this.formInitialValues}
            />
            <MapContainer />
          </ContentCentered>
        </div>
        <div style={style.toggleControl}>
          <span style={style.toggleControl.icons}>
            <i
              className={`fa fa-caret-${this.state.isOpen ? 'up' : 'down'} fa-2x aria-hidden=true`}
              onClick={this.searchAreaToggle}
            >
            </i>
          </span>
        </div>
      </div>
    );
  }
}

SearchArea.propTypes = propTypes;

export default Radium(SearchArea);
