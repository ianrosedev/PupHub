import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import colors from '../../media/styles/colors';

const propTypes = {
  pageText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  pageNumber: PropTypes.number.isRequired,
  isFirstElement: PropTypes.bool,
  isLastElement: PropTypes.bool,
  isActive: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  setActivePage: PropTypes.func.isRequired,
  searchDataFetch: PropTypes.func.isRequired
};

const defaultProps = {
  isActive: false,
  isDisabled: false
};

const PaginationListItem = ({
  pageText,
  pageNumber,
  isFirstElement,
  isLastElement,
  isActive,
  isDisabled,
  setActivePage,
  searchDataFetch
}) => {
  const style = {
    base: {
      display: 'inline-block'
    },
    button: {
      float: 'left',
      border: `1px solid ${colors.secondary}`,
      marginLeft: -1,
      padding: '6px 12px',
      color: colors.secondaryDark,
      fontSize: 18,
      textDecoration: 'none',
      cursor: (isDisabled || isActive) ? 'default' : 'pointer',
      ':hover': {
        backgroundColor: colors.secondary
      },
      isFirstElement: {
        borderRadius: '4px 0 0 4px',
        backgroundColor: colors.secondary,
        color: 'white'
      },
      isLastElement: {
        borderRadius: '0 4px 4px 0',
        backgroundColor: colors.secondary,
        color: 'white'
      },
      isActive: {
        border: `1px solid ${colors.secondaryDark}`,
        backgroundColor: colors.secondaryDark,
        color: 'white',
        ':hover': {
          backgroundColor: colors.secondaryDark
        }
      }
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setActivePage(pageNumber);
    searchDataFetch();
  };

  const buildStyle = () => {
    if (isFirstElement) {
      return { ...style.button, ...style.button.isFirstElement };
    } else if (isLastElement) {
      return { ...style.button, ...style.button.isLastElement };
    } else if (isActive) {
      return { ...style.button, ...style.button.isActive };
    } else {
      return style.button;
    }
  };

  return (
    <li
      style={style.base}
      onClick={(e) => handleClick(e)}
    >
      <button
        type='button'
        style={buildStyle()}
        disabled={isDisabled || isActive}
      >
        {pageText}
      </button>
    </li>
  );
}

PaginationListItem.propTypes = propTypes;
PaginationListItem.defaultProps = defaultProps;

export default Radium(PaginationListItem);
