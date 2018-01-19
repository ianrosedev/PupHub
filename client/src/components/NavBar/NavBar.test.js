import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';
import Radium from 'radium';

// Stops StyleRoot error
Radium.TestMode.enable();

describe('NavBar', () => {
  const wrapper = shallow(<NavBar />);

  it('renders without crashing', () => {
    //console.log(wrapper.debug());
    wrapper;
  });
});
