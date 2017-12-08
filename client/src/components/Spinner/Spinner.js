import React from 'react';
import Radium from 'radium';
import colors from '../../media/styles/colors';

const Spinner = () => {
  const style = {
    base: {
      marginTop: '15vh',
      textAlign: 'center'
    },
    i: {
      color: colors.secondaryDark
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

export default Radium(Spinner);
