import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ContentCentered from '../ContentCentered/ContentCentered';
import { Carousel } from 'react-responsive-carousel';
import Radium from 'radium';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import colors from '../../media/styles/colors';
import sizes from '../../media/styles/sizes';

const propTypes = {
  individualResult: PropTypes.object.isRequired,
  closePortal: PropTypes.func.isRequired
};

class Modal extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', this.handleEscapeKeyDown);
  }

  componentWillUnmount() {
    document.body.style.overflow = 'visible';
    document.removeEventListener('keydown', this.handleEscapeKeyDown);
  }

  handleEscapeKeyDown = (e) => {
    if (e.key === 'Escape' || e.keyCode === 27) {
      this.props.closePortal();
    }
  };

  checkValue = (value, text = 'Unknown') => {
    if(!value) {
      return text;
    }

    return value;
  };

  render() {
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
        overflow: 'auto',
        [`@media (max-width: ${sizes.medium})`]: {
          width: '90%',
          height: '96%'
        },
        [`@media (max-width: ${sizes.small})`]: {
          width: '100%',
          height: '100%'
        }
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
        overflow: 'hidden',
        [`@media (max-width: ${sizes.medium})`]: {
          width: 500
        },
        [`@media (max-width: ${sizes.small})`]: {
          width: '88vw'
        },
        [`@media screen and (max-width: ${sizes.small}) and (orientation: landscape)`]: {
          width: '70vw'
        }
      },
      imgContainer: {
        width: 'auto',
        height: '40vh',
        margin: '10px auto 35px auto',
        [`@media screen and (max-width: ${sizes.small}) and (orientation: landscape)`]: {
          height: '70vh'
        }
      },
      img: {
        height: 'inherit',
        width: 'inherit'
      },
      h1: {
        margin: '20px 0 0 0',
        paddingBottom: 10,
        fontFamily: 'Roboto',
        textAlign: 'center'
      },
      listContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20,
        [`@media (max-width: ${sizes.small})`]: {
          display: 'block'
        },
        [`@media screen and (max-width: ${sizes.small}) and (orientation: landscape)`]: {
          marginLeft: '10vw'
        }
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
      description: {
        margin: 20
      },
      noImageFound: {
        width: 300,
        height: 'inherit',
        margin: '30px auto'
      }
    };

    const {
      closePortal,
      individualResult: {
        animalID,
        animalName,
        animalSex,
        animalGeneralAge,
        animalBreed,
        animalOKWithCats,
        animalOKWithDogs,
        animalOKWithKids,
        animalPictures,
        animalDescription
      }
    } = this.props;

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
            {(animalPictures.length > 0) ? (
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
                      key={animalID}
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
            ) : (
              <img
                style={style.noImageFound}
                src={require('../../media/images/no-photo-found.jpg')}
                alt='None found'
              />
            )}
            <h1 style={style.h1}>{this.checkValue(animalName, 'Name Not Known')}</h1>
            <div style={style.listContainer}>
              <ul style={style.list}>
                <li style={style.listItem}>Sex: {this.checkValue(animalSex)}</li>
                <li style={style.listItem}>Age: {this.checkValue(animalGeneralAge)}</li>
                <li style={style.listItem}>Breed: {this.checkValue(animalBreed)}</li>
              </ul>
              <ul style={style.list}>
                <li style={style.listItem}>Good With Dogs: {this.checkValue(animalOKWithDogs)}</li>
                <li style={style.listItem}>Good With Cats: {this.checkValue(animalOKWithCats)}</li>
                <li style={style.listItem}>Good With Kids: {this.checkValue(animalOKWithKids)}</li>
              </ul>
            </div>
          </div>
          <ContentCentered>
            {(animalDescription) ? (
              <div
                id='testing-description'
                style={style.description}
                dangerouslySetInnerHTML={{ __html: animalDescription }}
              />
            ) : (
              <h3>Sorry, there is no description for this dog.</h3>
            )}
          </ContentCentered>
        </div>
      </div>
    );
  }
}

Modal.propTypes = propTypes;

export default Radium(Modal);
