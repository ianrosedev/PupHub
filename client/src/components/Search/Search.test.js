import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search', () => {
  const wrapper = shallow(<Search />);

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 2 components', () => {
    expect(wrapper.children()).toHaveLength(2);
  });
});
