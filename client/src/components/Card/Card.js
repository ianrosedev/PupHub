import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import colors from '../../media/styles/colors';
import sizes from '../../media/styles/sizes';

const propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  isAdoptionPending: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const Card = ({ name, img, isAdoptionPending, onClick }) => {
  const style = {
    base: {
      position: 'relative',
      width: 200,
      height: (name.length < 20) ? 230 : 'auto',
      margin: '0 20px 40px 0px',
      paddingBottom: 5,
      borderRadius: 5,
      backgroundColor: colors.primaryLightest,
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.3)',
      overflow: 'hidden',
      cursor: 'pointer',
      [`@media (max-width: ${sizes.small})`]: {
        width: 300,
        height: 'auto',
        margin: '0 0 40px 0'
      }
    },
    imgContainer: {
      width: 200,
      height: 200,
      backgroundColor: 'black',
      borderRadius: '5px 5px 0 0',
      [`@media (max-width: ${sizes.small})`]: {
        width: 300,
        height: 300
      }
    },
    img: {
      position: 'absolute',
      left: -999,
      right: -999,
      margin: '0 auto',
      height: 200,
      [`@media (max-width: ${sizes.small})`]: {
        height: 300
      }
    },
    name: {
      margin: 0,
      padding: '8px 8px 0 8px',
      textAlign: 'center'
    },
    ribbon: {
      position: 'absolute',
      zIndex: 10,
      transform: 'rotate(-45deg)',
      top: 12,
      left: -40,
      width: 150,
      height: 40,
      padding: '4px 0 0 0',
      backgroundColor: colors.pending,
      textAlign: 'center',
      color: 'white'
    }
  };

  return (
    <div
      style={style.base}
      onClick={onClick}
    >
      {(isAdoptionPending === 'Yes') &&
        <div style={style.ribbon}>Adoption<br />Pending</div>
      }
      <div style={style.imgContainer}>
        <img
          style={style.img}
          src={img}
          alt={name}
        />
      </div>
      <h3 style={style.name}>{name}</h3>
    </div>
  );
};

Card.propTypes = propTypes;

export default Radium(Card);
