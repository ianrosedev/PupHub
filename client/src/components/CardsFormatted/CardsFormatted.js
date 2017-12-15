import React from 'react';
import PropTypes from 'prop-types';
import ContentCentered from '../ContentCentered/ContentCentered';
import Card from '../Card/Card';
import PaginationContainer from '../../containers/PaginationContainer/PaginationContainer';
import { PortalWithState } from 'react-portal';
import Modal from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';
import Radium from 'radium';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  searchResults: PropTypes.object
};

const CardsFormatted = ({ isFetching, isError, searchResults }) => {
  const style = {
    base: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  };

  if (searchResults && !isFetching) {
    return (
      <ContentCentered>
        <div style={style.base}>
          {Object.keys(searchResults).map((key) => (
            <PortalWithState
              key={'portal' + key}
              node={document.getElementById('portal')}
              closeOnEsc
            >
              {({ openPortal, closePortal, portal }) => [
                <Card
                  key={'card' + key}
                  name={searchResults[key].animalName}
                  img={(searchResults[key].animalPictures[0]) ?
                    searchResults[key].animalPictures[0].urlSecureFullsize :
                    require('../../media/images/no-photo-found.jpg')
                  }
                  isAdoptionPending={searchResults[key].animalAdoptionPending}
                  onClick={openPortal}
                />,
                portal(
                  <Modal
                    name={searchResults[key].animalName}
                    img={(searchResults[key].animalPictures[0]) ?
                      searchResults[key].animalPictures[0].urlSecureFullsize :
                      require('../../media/images/no-photo-found.jpg')
                    }
                    closePortal={closePortal}
                  />
                )
              ]}
            </PortalWithState>
          ))}
        </div>
        <PaginationContainer />
      </ContentCentered>
    );
  } else if (isFetching) {
    return (
      <Spinner />
    );
  } else if (isError) {
    return (
      <ContentCentered>
        <h3>Sorry, there was an error! Please try again.</h3>
      </ContentCentered>
    )
  } else {
    return (
      <ContentCentered>
        <h3>Hit <em>Submit</em> to see some pups!</h3>
      </ContentCentered>
    );
  }
};

CardsFormatted.propTypes = propTypes;

export default Radium(CardsFormatted);
