import React from 'react';
import ContentCentered from '../ContentCentered/ContentCentered';
import Radium from 'radium';

const NotFound = () => {
  return (
    <ContentCentered>
      <div>
        <h1>Not Found!</h1>
      </div>
    </ContentCentered>
  );
};

export default Radium(NotFound);
