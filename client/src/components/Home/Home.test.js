import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  const wrapper = shallow(<Home />);

  it('renders without crashing', () => {
    wrapper;
  });
});
