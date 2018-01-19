import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Brand from '../Brand/Brand';
import NavBar from '../NavBar/NavBar';
import Radium from 'radium';

// Stops StyleRoot error
Radium.TestMode.enable();

describe('Header', () => {
  const wrapper = shallow(<Header />);

  it('renders without crashing', () => {
    wrapper;
  });

  it('renders the `Brand` component', () => {
    expect(wrapper.find(Brand)).toHaveLength(1);
  });

  it('contains 1 `h2` element', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  it('renders the `NavBar` component', () => {
    expect(wrapper.find(NavBar)).toHaveLength(1);
  });
});
