import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      input: {},
      meta: {},
      isDisabled: false,
      setMapOptions: jest.fn(),
      setActivePage: jest.fn(),
      searchDataFetch: jest.fn()
    };

    wrapper = shallow(<SearchBar {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
