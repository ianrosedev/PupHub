import React from 'react';
import Radium from 'radium';
import colors from '../../media/styles/colors';

const Footer = () => {
  const style = {
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: 40,
      backgroundColor: colors.primaryDark,
      fontSize: 20,
      color: 'black',
      fontFamily: 'Roboto, sans-serif'
    },
    text: {
      fontSize: 20,
      color: 'black'
    },
    i: {
      margin: '0 5px',
      fontSize: 21
    },
    a: {
      color: 'black',
      textDecoration: 'none'
    }
  };

  return (
    <div style={style.base}>
      <div style={style.text}>
        Made with<i style={style.i} className='fa fa-paw'></i>
        by <a style={style.a} href='https://www.ianrosedev.com'>Ian Rose</a>
      </div>
    </div>
  );
};

export default Radium(Footer);
