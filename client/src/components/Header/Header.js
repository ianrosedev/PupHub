import React from 'react';
import Brand from '../Brand/Brand';
import NavBar from '../NavBar/NavBar';
import Radium from 'radium';
import colors from '../../media/styles/colors';
import sizes from '../../media/styles/sizes';

const Header = () => {
  const style = {
    base: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 140,
      background: `linear-gradient(${colors.primary}, ${colors.primaryDark})`,
      [`@media (max-width: ${sizes.small})`]: {
        flexDirection: 'column',
        height: 180
      }
    },
    h2: {
      display: 'inline',
      fontFamily: 'Roboto',
      fontSize: '1.5rem',
      [`@media (max-width: ${sizes.large})`]: {
        display: 'none'
      }
    }
  };

  return (
    <div style={style.base}>
      <Brand />
      <h2 style={style.h2}>Find dogs in need of a forever home</h2>
      <NavBar />
    </div>
  );
};

export default Radium(Header);
