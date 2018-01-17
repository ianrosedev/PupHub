import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  const wrapper = shallow(<Home />);

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 image', () => {
    expect(wrapper.find('img').length).toBe(1);
  });

  it('contains 1 `H1`', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('contains a link to `/search`', () => {
    expect(wrapper.find('Link[to="/search"]').length).toBe(1);
  });

  it('contains a link to `/resources`', () => {
    expect(wrapper.find('Link[to="/resources"]').length).toBe(1);
  });

  it('contains a link to `rescuegroups.org`', () => {
    expect(wrapper.find('a[href="https://rescuegroups.org"]').length).toBe(1);
  });
});
