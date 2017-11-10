import React from 'react';
import Radium from 'radium';

const ContentCentered = ({ children }) => {
  const style = {
    base: {
      padding: '3vh 6vw'
    }
  };

  return (
    <div style={style.base}>
      {children}
    </div>
  );
};

export default Radium(ContentCentered);
