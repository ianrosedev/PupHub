import React from 'react';
import PropTypes from 'prop-types';
import ContentCentered from '../ContentCentered/ContentCentered';
import Card from '../Card/Card';
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

  if (isError) {
    return (
      <h3>Sorry, there was an error! Please refresh your browser.</h3>
    );
  } else if (isFetching) {
    return (
      <Spinner />
    );
  } else {
    return (
      <ContentCentered>
        <div style={style.base}>
          {(searchResults) ? (
            Object.keys(searchResults).map((key) => (
              <Card
                key={key}
                name={searchResults[key].animalName}
                thumbnail={searchResults[key].animalPictures[0].urlSecureThumbnail}
              />
            ))
          ) : (
            <h3>Hit <em>Submit</em> to see some pups!</h3>
          )}
        </div>
      </ContentCentered>
    );
  }
};

CardsFormatted.propTypes = propTypes;

export default Radium(CardsFormatted);
