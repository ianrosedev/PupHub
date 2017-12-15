import React from 'react';
import { PropTypes } from 'prop-types';
import ContentCentered from '../ContentCentered/ContentCentered';
import Radium from 'radium';
import colors from '../../media/styles/colors';

const propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  closePortal: PropTypes.func.isRequired
};

const Modal = ({ name, img, closePortal }) => {
  const style = {
    background: {
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    base: {
      width: '80%',
      height: '90%',
      backgroundColor: 'white',
      borderRadius: 10
    },
    closeIcon: {
      float: 'right',
      margin: 20,
      color: colors.warning,
      cursor: 'pointer'
    },
    imgContainer: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'black',
      width: '60%',
      height: '50%',
      margin: '0 auto',
      border: '1px solid black',
      borderRadius: 5
    },
    img: {
      width: 'auto',
      height: 300
    },
    h2: {
      textAlign: 'center'
    }
  };

  return (
    <div style={style.background}>
      <div style={style.base}>
        <i
          style={style.closeIcon}
          className='fa fa-times fa-lg'
          onClick={closePortal}
        >
        </i>
        <ContentCentered>
          <div style={style.imgContainer}>
            <img
              style={style.img}
              src={img}
              alt={name}
            />
          </div>
          <h2 style={style.h2}>{name}</h2>
        </ContentCentered>
      </div>
    </div>
  );
};

Modal.propTypes = propTypes;

export default Radium(Modal);
