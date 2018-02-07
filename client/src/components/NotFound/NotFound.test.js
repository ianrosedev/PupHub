import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('NotFound', () => {
  const wrapper = shallow(<NotFound />);

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 `h3` element', () => {
    expect(wrapper.find('h3')).toHaveLength(1);
  });

  it('displays the correct message', () => {
    expect(wrapper.find('h3').text()).toBe(
      'Sorry, the page you are looking for isn\'t here!'
    );
  });
});
