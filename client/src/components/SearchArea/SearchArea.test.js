import React from 'react';
import { shallow } from 'enzyme';
import SearchArea from './SearchArea';

describe('SearchArea', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      isOpen: true,
      toggleSearchArea: jest.fn(),
      setMapOptions: jest.fn(),
      setActivePage: jest.fn(),
      searchDataFetch: jest.fn()
    };

    wrapper = shallow(<SearchArea {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
