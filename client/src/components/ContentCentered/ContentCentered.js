import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const propTypes = {
  children: PropTypes.node.isRequired
};

const ContentCentered = ({ children }) => {
  const style = {
    base: {
      padding: '6vh 6vw'
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
