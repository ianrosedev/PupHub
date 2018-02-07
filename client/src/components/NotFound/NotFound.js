import React from 'react';
import ContentCentered from '../ContentCentered/ContentCentered';
import Radium from 'radium';

const NotFound = () => {
  return (
    <ContentCentered>
      <div>
        <h3>Sorry, the page you are looking for isn't here!</h3>
      </div>
    </ContentCentered>
  );
};

export default Radium(NotFound);
