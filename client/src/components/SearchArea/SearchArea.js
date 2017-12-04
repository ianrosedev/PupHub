import React, { Component } from 'react';
import ContentCentered from '../ContentCentered/ContentCentered';
import SearchForm from '../SearchForm/SearchForm';
import MapContainer from '../../containers/MapContainer/MapContainer';
import Radium from 'radium';
import colors from '../../media/styles/colors';

class SearchArea extends Component {
  state = {
    isOpen: true
  };

  formInitialValues = {
    sex: 'Any',
    age: 'Any',
    size: ['Small', 'Medium', 'Large', 'X-Large'],
    goodWith: ['Show All']
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
    this.props.searchDataFetch(values.locationZip);
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

export default Radium(SearchArea);
