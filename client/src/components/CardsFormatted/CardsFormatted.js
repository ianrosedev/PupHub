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
  searchResults: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

const CardsFormatted = ({ isFetching, isError, searchResults }) => {
  const style = {
    base: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
  };

  if (Array.isArray(searchResults)) {
    return (
      <ContentCentered>
        <h3>Sorry there were no results!</h3>
        <h3>Try searching a larger area and checking more options.</h3>
      </ContentCentered>
    );
  } else if (searchResults && typeof searchResults === 'object' && !isFetching) {
    return (
      <ContentCentered>
        <div style={style.base}>
          {Object.keys(searchResults).map((key) => (
            <PortalWithState
              key={'portal' + key}
              node={document.getElementById('portal')}
              closeOnEsc
            >
              {({ openPortal, closePortal, portal }) => {
                const individualResult = searchResults[key];

                return [
                  <Card
                    key={'card' + key}
                    name={individualResult.animalName}
                    img={(individualResult.animalPictures[0]) ?
                      individualResult.animalPictures[0].urlSecureFullsize :
                      require('../../media/images/no-photo-found.jpg')
                    }
                    isAdoptionPending={individualResult.animalAdoptionPending}
                    onClick={openPortal}
                  />,
                  portal(
                    <Modal
                      individualResult={individualResult}
                      closePortal={closePortal}
                    />
                  )
                ];
              }}
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
