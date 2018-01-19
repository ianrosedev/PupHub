import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  const wrapper = shallow(<Home />);

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 image element', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('contains 1 `H1` element', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('contains a link to `/search`', () => {
    expect(wrapper.find('Link[to="/search"]')).toHaveLength(1);
  });

  it('contains a link to `/resources`', () => {
    expect(wrapper.find('Link[to="/resources"]')).toHaveLength(1);
  });

  it('contains a link to `rescuegroups.org`', () => {
    expect(wrapper.find('a[href="https://rescuegroups.org"]')).toHaveLength(1);
  });
});
