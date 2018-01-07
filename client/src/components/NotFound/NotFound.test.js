import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('NotFound', () => {
  const wrapper = shallow(<NotFound />);

  it('renders without crashing', () => {
    wrapper;
  });
});
