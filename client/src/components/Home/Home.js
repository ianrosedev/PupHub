import React from 'react';
import ContentCentered from '../ContentCentered/ContentCentered';
import Radium from 'radium';

const Home = () => {
  return (
    <ContentCentered>
      <div>
        <h1>Home</h1>
      </div>
    </ContentCentered>
  );
};

export default Radium(Home);
