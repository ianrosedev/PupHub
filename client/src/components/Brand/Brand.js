import React from 'react';
import Radium from 'radium';
import colors from '../../media/styles/colors';
import sizes from '../../media/styles/sizes';

const Brand = () => {
  const style = {
    base: {
      background: colors.secondaryLight,
      padding: '4px 8px 6px 8px',
      border: `7px solid ${colors.secondaryDark}`,
      borderRadius: 13,
      boxShadow: '0 0 0 3px white'
    },
    logo: {
      width: 'auto',
      height: 60,
      filter: 'drop-shadow(-3px 4px white)',
      [`@media (max-width: ${sizes.small})`]: {
        height: 50
      }
    },
    h1: {
      display: 'inline',
      margin: '0 2px 0 0',
      fontFamily: 'Pacifico, cursive',
      fontSize: 70,
      textShadow: '-3px 4px white',
      [`@media (max-width: ${sizes.small})`]: {
        fontSize: 60
      }
    }
  };

  return (
    <div style={style.base}>
      <h1 style={style.h1}>PupHub</h1>
      <img
        style={style.logo}
        src={require('../../media/images/paw-logo.svg')}
        alt='Paw logo'
      />
    </div>
  );
};

export default Radium(Brand);
