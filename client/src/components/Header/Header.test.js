import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleRoot } from 'radium';

describe('Header', () => {
  const wrapper = shallow(
    <StyleRoot>
      <Header />
    </StyleRoot>
  );

  it('renders without crashing', () => {
    wrapper;
  });
});
