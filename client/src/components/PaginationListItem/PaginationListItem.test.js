import React from 'react';
import { shallow } from 'enzyme';
import PaginationListItem from './PaginationListItem';

describe('PaginationListItem', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      pageNumber: 1,
      setActivePage: jest.fn(),
      searchDataFetch: jest.fn()
    };

    wrapper = shallow(<PaginationListItem {...props} />);
  });
  
  it('renders without crashing', () => {
    wrapper;
  });
});
