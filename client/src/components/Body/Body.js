import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Search from '../Search/Search';
import Resources from '../Resources/Resources';
import NotFound from '../NotFound/NotFound';
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
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={Search} />
        <Route path='/resources' component={Resources} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Radium(Body);
