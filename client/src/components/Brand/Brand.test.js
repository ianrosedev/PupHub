import React from 'react';
import { shallow } from 'enzyme';
import Brand from './Brand';
import Radium from 'radium';

// Stops StyleRoot error
Radium.TestMode.enable();

describe('Brand', () => {
  const wrapper = shallow(<Brand />);

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 `H1` element', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('contains 1 `img` element', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });
});
