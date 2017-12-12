import React from 'react';
import Search from '../Search/Search';
import Radium from 'radium';

const Body = () => {
  const style = {
    base: {
      // View height - (header height + footer height)
      minHeight: 'calc(100vh - 180px)'
    }
  };

  return (
    <div style={style.base}>
      <Search />
    </div>
  );
};

export default Radium(Body);
