import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import colors from '../../media/styles/colors';

const propTypes = {
  url: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isFirstElement: PropTypes.bool,
  isLastElement: PropTypes.bool
};

const ResourceListing = ({ url, linkText, text, isFirstElement, isLastElement }) => {
  const style = {
    base: {
      backgroundColor: colors.secondaryLight,
      marginBottom: 2,
      padding: 30,
      fontSize: 18
    },
    a: {
      fontSize: 20
    },
    isFirstElement: {
      borderRadius: '7px 7px 0 0'
    },
    isLastElement: {
      borderRadius: '0 0 7px 7px'
    }
  };

  const buildStyle = () => {
    if (isFirstElement) {
      return [style.base, style.isFirstElement];
    } else if (isLastElement) {
      return [style.base, style.isLastElement];
    } else {
      return style.base;
    }
  };

  return (
    <div style={buildStyle()}>
      <a
        style={style.a}
        href={url}
      >
        {linkText}
      </a>
      <p>{text}</p>
    </div>
  );
};

ResourceListing.propTypes = propTypes;

export default Radium(ResourceListing);
