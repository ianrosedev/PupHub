import React from 'react';
import { PropTypes } from 'prop-types';
import ContentCentered from '../ContentCentered/ContentCentered';
import { Carousel } from 'react-responsive-carousel';
import Radium from 'radium';
import colors from '../../media/styles/colors';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const propTypes = {
  individualResult: PropTypes.object.isRequired,
  closePortal: PropTypes.func.isRequired
};

const Modal = ({ individualResult, closePortal }) => {
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
      overflow: 'auto'
    },
    topBar: {
      width: '100%',
      height: 56,
      backgroundColor: colors.primaryDark
    },
    closeIcon: {
      float: 'right',
      margin: '20px 25px 20px 20px',
      color: 'black',
      cursor: 'pointer'
    },
    infoContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: colors.lightGray
    },
    carousel: {
      width: 570,
      margin: '30px auto 0 auto',
      borderRadius: 7,
      overflow: 'hidden'
    },
    imgContainer: {
      width: 'auto',
      height: '40vh',
      margin: '10px auto 35px auto'
    },
    img: {
      height: 'inherit',
      width: 'inherit'
    },
    h1: {
      margin: '20px 0 0 0',
      paddingBottom: 5,
      textAlign: 'center'
    },
    listContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 20
    },
    list: {
      margin: '0 25px',
      padding: 0,
      listStyle: 'none'
    },
    listItem: {
      fontSize: 18,
      margin: 7
    },
    p: {
      margin: 20
    }
  };

  const {
    animalName,
    animalSex,
    animalGeneralAge,
    animalBreed,
    animalOKWithCats,
    animalOKWithDogs,
    animalOKWithKids,
    animalPictures,
    animalDescription
  } = individualResult;

  return (
    <div style={style.background}>
      <div style={style.base}>
        <div style={style.topBar}>
          <i
            style={style.closeIcon}
            className='fa fa-times fa-lg'
            onClick={closePortal}
          >
          </i>
        </div>
        <div style={style.infoContainer}>
          <div style={style.carousel}>
            <Carousel
              showThumbs={false}
              showStatus={false}
              showArrows={animalPictures.length > 1}
              showIndicators={animalPictures.length > 1}
              autoPlay={true}
              interval={4000}
              infiniteLoop={true}
            >
              {animalPictures.map((img) => (
                <div
                  key={individualResult.animalID}
                  style={style.imgContainer}
                >
                  <img
                    style={style.img}
                    src={img.urlSecureFullsize}
                    alt={animalName}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <h1 style={style.h1}>{animalName ? animalName : 'Name Not Known'}</h1>
          <div style={style.listContainer}>
            <ul style={style.list}>
              <li style={style.listItem}>Sex: {animalSex ? animalSex : 'Unknown'}</li>
              <li style={style.listItem}>Age: {animalGeneralAge ? animalGeneralAge : 'Unknown'}</li>
              <li style={style.listItem}>Breed: {animalBreed ? animalBreed : 'Unknown'}</li>
            </ul>
            <ul style={style.list}>
              <li style={style.listItem}>Good With Dogs: {animalOKWithDogs ? animalOKWithDogs : 'Unknown'}</li>
              <li style={style.listItem}>Good With Cats: {animalOKWithCats ? animalOKWithCats : 'Unknown'}</li>
              <li style={style.listItem}>Good With Kids: {animalOKWithKids ? animalOKWithKids : 'Unknown'}</li>
            </ul>
          </div>
        </div>
        <ContentCentered>
          <p
            style={style.p}
            dangerouslySetInnerHTML={{ __html: animalDescription }}
          />
        </ContentCentered>
      </div>
    </div>
  );
};

Modal.propTypes = propTypes;

export default Radium(Modal);
