import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import SearchFormContainer from '../../containers/SearchFormContainer/SearchFormContainer';
import MapContainer from '../../containers/MapContainer/MapContainer';
import Radium from 'radium';
import colors from '../../media/styles/colors';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  distance: PropTypes.string,
  toggleSearchArea: PropTypes.func.isRequired,
  setMapOptions: PropTypes.func.isRequired,
  setActivePage: PropTypes.func.isRequired,
  searchDataFetch: PropTypes.func.isRequired
};

const SearchArea = ({
  isOpen,
  distance,
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
      display: isOpen ? 'block' : 'none',
      padding: '3vh 6vw'
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

  // Passed in to SearchForm instead of
  // declared inside beacuse re-renders
  // stop debounce from working correctly
  const handleFieldChange = debounce(() => {
    setActivePage(1);
    searchDataFetch();
  }, 1500);

  return (
    <div style={style.base}>
      <div style={style.content}>
        <SearchFormContainer
          initialValues={formInitialValues}
          distance={distance}
          setMapOptions={setMapOptions}
          handleFieldChange={handleFieldChange}
          setActivePage={setActivePage}
          searchDataFetch={searchDataFetch}
        />
        <MapContainer />
      </div>
      <div style={style.toggleControl}>
        <span style={style.toggleControl.icons}>
          <i
            className={`fa fa-caret-${isOpen ? 'up' : 'down'} fa-2x`}
            aria-hidden='true'
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
