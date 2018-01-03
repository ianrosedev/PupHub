import React from 'react';
import PropTypes from 'prop-types';
import ContentCentered from '../ContentCentered/ContentCentered';
import SearchForm from '../SearchForm/SearchForm';
import MapContainer from '../../containers/MapContainer/MapContainer';
import Radium from 'radium';
import colors from '../../media/styles/colors';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSearchArea: PropTypes.func.isRequired,
  setMapOptions: PropTypes.func.isRequired,
  setActivePage: PropTypes.func.isRequired,
  searchDataFetch: PropTypes.func.isRequired
};

const SearchArea = ({
  isOpen,
  toggleSearchArea,
  setMapOptions,
  setActivePage,
  searchDataFetch
}) => {
  const style = {
    base: {
      backgroundColor: colors.primaryLightest
    },
    content: {
      display: isOpen ? 'block' : 'none'
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

  const formInitialValues = {
    sex: ['Male', 'Female'],
    age: ['Baby', 'Young', 'Adult', 'Senior'],
    goodWith: ['Show All'],
    distance: '25'
  };

  const onSubmit = () => {
    setMapOptions({
      zoom: 9,
      isMarkerShown: true
    });
    setActivePage(1);
    searchDataFetch();
  };

  return (
    <div style={style.base}>
      <div style={style.content}>
        <ContentCentered>
          <SearchForm
            onSubmit={onSubmit}
            initialValues={formInitialValues}
            setMapOptions={setMapOptions}
            setActivePage={setActivePage}
            searchDataFetch={searchDataFetch}
          />
          <MapContainer />
        </ContentCentered>
      </div>
      <div style={style.toggleControl}>
        <span style={style.toggleControl.icons}>
          <i
            className={`fa fa-caret-${isOpen ? 'up' : 'down'} fa-2x aria-hidden=true`}
            onClick={toggleSearchArea}
          >
          </i>
        </span>
      </div>
    </div>
  );
};

SearchArea.propTypes = propTypes;

export default Radium(SearchArea);
