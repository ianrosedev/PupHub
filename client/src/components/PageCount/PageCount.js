import React from 'react';
import Radium from 'radium';

const PageCount = ({ activePage, lastPage }) => {
  const style = {
    base: {
      margin: '-4vh 0 6vh 0'
    }
  };

  if (activePage && lastPage) {
    return (
      <div style={style.base}>
        Page <b>{activePage}</b> of <b>{lastPage}</b>
      </div>
    );
  }
};

export default Radium(PageCount);
