import React from 'react';
import scrollToTopOnMount from '../../hocs/scrollToTopOnMount/scrollToTopOnMount';
import SearchAreaContainer from '../../containers/SearchAreaContainer/SearchAreaContainer';
import CardsFormattedContainer from '../../containers/CardsFormattedContainer/CardsFormattedContainer';
import ContentCentered from '../ContentCentered/ContentCentered';

export const Search = () => {
  // Make sure Google Maps API is loaded
  if (!window.google) {
    return (
      <ContentCentered>
        <h3>Sorry, there was an error!</h3>
        <h3>Check your internet connection and refresh the page.</h3>
      </ContentCentered>
    );
  }
  return (
    <div>
      <SearchAreaContainer />
      <CardsFormattedContainer />
    </div>
  );
};

export default scrollToTopOnMount(Search);
