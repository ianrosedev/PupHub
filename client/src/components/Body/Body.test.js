import React from 'react';
import { shallow } from 'enzyme';
import Body from './Body';

describe('Body', () => {
  const wrapper = shallow(<Body />);

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 component', () => {
    expect(wrapper.children()).toHaveLength(1);
  });
});
