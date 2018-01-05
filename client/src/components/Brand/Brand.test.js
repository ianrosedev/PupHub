import React from 'react';
import { mount } from 'enzyme';
import Brand from './Brand';
import { StyleRoot } from 'radium';

describe('Brand', () => {
  const wrapper = mount(
    <StyleRoot>
      <Brand />
    </StyleRoot>
  );

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
