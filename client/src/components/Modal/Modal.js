import React from 'react';
import { PropTypes } from 'prop-types';
import ContentCentered from '../ContentCentered/ContentCentered';
import { Carousel } from 'react-responsive-carousel';
import Radium from 'radium';
import colors from '../../media/styles/colors';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const propTypes = {
  objKey: PropTypes.string.isRequired,
  searchResults: PropTypes.object.isRequired,
  closePortal: PropTypes.func.isRequired
};

const Modal = ({ objKey, searchResults, closePortal }) => {
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
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    base: {
      width: '80%',
      height: '90%',
      backgroundColor: 'white',
      borderRadius: 8
    },
    closeIcon: {
      float: 'right',
      margin: 20,
      color: colors.warning,
      cursor: 'pointer'
    },
    imgContainer: {
      width: 'auto',
      height: '40vh',
      margin: '10px auto 35px auto'
    },
    carousel: {
      width: 570,
      margin: '0 auto',
      borderRadius: 5,
      overflow: 'hidden'
    },
    img: {
      height: 'inherit',
      width: 'inherit'
    },
    h2: {
      textAlign: 'center'
    }
  };

  const name = searchResults[objKey].animalName;
  const imgArray = searchResults[objKey].animalPictures;

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
          <div style={style.carousel}>
            <Carousel
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={6000}
              infiniteLoop={true}
            >
              {imgArray.map((img) => (
                <div
                  key={searchResults[objKey].animalID}
                  style={style.imgContainer}
                >
                  <img
                    style={style.img}
                    src={img.urlSecureFullsize}
                    alt={name}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <h2 style={style.h2}>{name}</h2>
        </ContentCentered>
      </div>
    </div>
  );
};

Modal.propTypes = propTypes;

export default Radium(Modal);
