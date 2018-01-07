import React from 'react';
import { shallow } from 'enzyme';
import Resources from './Resources';

describe('Resources', () => {
  const wrapper = shallow(<Resources />);

  it('renders without crashing', () => {
    wrapper;
  });
});
