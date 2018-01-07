import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';
import { StyleRoot } from 'radium';

describe('NavBar', () => {
  const wrapper = shallow(
    <StyleRoot>
      <NavBar />
    </StyleRoot>
  );

  it('renders without crashing', () => {
    wrapper;
  });
});
