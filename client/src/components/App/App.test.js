import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 3 components', () => {
    expect(wrapper.children()).toHaveLength(3);
  });
});
