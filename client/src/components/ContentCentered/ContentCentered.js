import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import sizes from '../../media/styles/sizes';

const propTypes = {
  children: PropTypes.node.isRequired
};

const ContentCentered = ({ children }) => {
  const style = {
    base: {
      padding: '6vh 6vw',
      [`@media (max-width: ${sizes.medium})`]: {
        padding: '3vh 4vw'
      }
    }
  };

  return (
    <div style={style.base}>
      {children}
    </div>
  );
};

ContentCentered.propTypes = propTypes;

export default Radium(ContentCentered);
