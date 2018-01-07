import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner', () => {
  const wrapper = shallow(<Spinner />);

  it('renders without crashing', () => {
    wrapper;
  });

  it('renders the spinner', () => {
    expect(wrapper.find('i .fa .fa-spinner .fa-pulse .fa-3x .fa-fw')).toHaveLength(1);
  });

  it('has screen reader text', () => {
    expect(wrapper.find('span .sr-only')).toHaveLength(1);
  });
});
