import React from 'react';
import Radium from 'radium';
import sizes from '../../media/styles/sizes';

const PageCount = ({ activePage, lastPage }) => {
  const style = {
    base: {
      margin: '-4vh 0 8vh 0',
      [`@media (max-width: ${sizes.medium})`]: {
        margin: '0 0 8vh 0'
      }
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
