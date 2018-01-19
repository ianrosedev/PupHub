import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  const wrapper = shallow(<Footer />);

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains a link to `ianrosedev.com`', () => {
    expect(wrapper.find('a[href="https://www.ianrosedev.com"]')).toHaveLength(1);
  });
});
