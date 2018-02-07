import React from 'react';
import scrollToTopOnMount from '../../hocs/scrollToTopOnMount/scrollToTopOnMount';
import handleWindowResize from '../../hocs/handleWindowResize/handleWindowResize';
import ContentCentered from '../ContentCentered/ContentCentered';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import colors from '../../media/styles/colors';
import sizes from '../../media/styles/sizes';
// Makes Radium work with react-router Link
const StyledLink = Radium(Link);

export const Home = () => {
  const style = {
    image: {
      float: 'right',
      width: '40vw',
      maxWidth: 500,
      margin: '0 0 4vh 3vw',
      borderRadius: 7,
      [`@media (min-width: ${sizes.xLarge})`]: {
        maxWidth: 600
      },
      [`@media (max-width: ${sizes.large})`]: {
        width: '36vw',
        margin: '0 0 0 3vw',
      },
      [`@media (max-width: ${sizes.medium})`]: {
        float: 'none',
        width: '100%',
        maxWidth: 'none',
        margin: '0 0 20px 0',
      },
    },
    section: {
      width: '49vw',
      fontSize: 20,
      [`@media (max-width: ${sizes.medium})`]: {
        width: 'inherit',
        textAlign: 'center'
      }
    },
    h1: {
      backgroundColor: colors.lightGray,
      margin: '0 0 2vh 0',
      padding: 30,
      borderRadius: 7,
      fontFamily: 'Roboto, sans-serif',
      lineHeight: 1.25,
      [`@media (max-width: ${sizes.medium})`]: {
        margin: '0 0 3vh 0',
        width: 'inherit'
      },
      [`@media (max-width: ${sizes.small})`]: {
        padding: 15,
        lineHeight: 1.1,
        fontSize: 36
      }
    },
    block: {
      margin: '4vh 0'
    },
    p: {
      marginBottom: 10,
      last: {
        marginBottom: 0
      }
    },
    link: {
      textDecoration: 'none',
      fancy: {
        display: 'inline-block',
        textDecoration: 'none',
        background: `linear-gradient(${colors.primary}, ${colors.primaryDark})`,
        padding: '3px 8px',
        borderRadius: 5,
        color: 'white',
        ':hover': {
          background: colors.primaryDark
        },
        ':active': {
          background: colors.primary
        }
      }
    }
  };

  return (
    <ContentCentered>
      <img
        style={style.image}
        src={window.innerWidth < Number(sizes.medium.slice(0, -2)) ?
              require('../../media/images/charlie-with-stick-cropped.jpg') :
              require('../../media/images/charlie-with-stick.jpg')
            }
        alt='Cute puppy'
      />
      <div style={style.section}>
        <h1 style={style.h1}>Thousands of dogs are in need of a forever home. Find one near you that matches your family's needs.</h1>
        <div style={style.block}>
          <p style={style.p}>With PupHub you can search through thousands of listings to find the perfect dog for you. Our handy search tool makes easy to find a dog matches your needs.</p>
          <StyledLink
            style={style.link.fancy}
            to='/search'
          >
            Search
          </StyledLink>
        </div>
        <div style={style.block}>
          <p style={style.p}>Unfortunately, this listing is just a small portion of the dogs that need a home. Check out our resources page to find out more about other organizations that help dogs in need.</p>
          <StyledLink
            style={style.link.fancy}
            to='/resources'
          >
            Resources
          </StyledLink>
        </div>
        <p>Special thanks to <a style={style.link} href='https://rescuegroups.org'>RescueGroups.org</a> for providing the data.</p>
        <p style={style.p.last}><em>*Currently only works for the U.S.</em></p>
      </div>
    </ContentCentered>
  );
};

export default scrollToTopOnMount(handleWindowResize(handleWindowResize(Home)));
