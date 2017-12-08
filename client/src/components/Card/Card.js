import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import colors from '../../media/styles/colors';

const propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
};

const Card = ({ name, thumbnail }) => {
  const style = {
    base: {
      width: 200,
      height: 230,
      margin: 20,
      borderRadius: 5,
      backgroundColor: colors.primaryLightest,
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.3)'
    },
    imgContainer: {
      width: 200,
      height: 200,
      overflow: 'hidden'
    },
    img: {
      minWidth: 200,
      minHeight: 200,
      borderRadius: '4px 4px 0 0'
    },
    name: {
      margin: 0,
      paddingTop: 5,
      textAlign: 'center'
    }
  };

  return (
    <div style={style.base}>
      <div style={style.imgContainer}>
        <img
          style={style.img}
          src={thumbnail}
          alt={name}
        />
      </div>
      <h3 style={style.name}>{name}</h3>
    </div>
  );
};

Card.propTypes = propTypes;

export default Radium(Card);
