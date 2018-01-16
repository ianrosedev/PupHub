import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import colors from '../../media/styles/colors';

const propTypes = {
  isOpen: PropTypes.bool.isRequired
};

const Spinner = ({ isOpen }) => {
  const style = {
    base: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: isOpen ? '38vh' : '88vh'
    },
    i: {
      color: colors.secondaryDark,
    }
  };

  return (
    <div style={style.base}>
      <i
        className='fa fa-spinner fa-pulse fa-3x fa-fw'
        style={style.i}
      >
      </i>
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

Spinner.propTypes = propTypes;

export default Radium(Spinner);
