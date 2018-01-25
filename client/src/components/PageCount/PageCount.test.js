import React from 'react';
import { shallow } from 'enzyme';
import PageCount from './PageCount';

describe(`PageCount`, () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      activePage: 1,
      lastPage: 20
    };

    wrapper = shallow(<PageCount {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('renders the `activePage` in bold text', () => {
    expect(wrapper.find('b').at(0).text()).toBe('1');
  });

  it('renders the `lastPage` in bold text', () => {
    expect(wrapper.find('b').at(1).text()).toBe('20');
  });
});
