import React from 'react';
import { mount } from 'enzyme';
import Pagination from './Pagination';

describe('Pagination', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      totalItemsCount: 30,
      itemsCountPerPage: 20,
      setActivePage: jest.fn(),
      searchDataFetch: jest.fn()
    };

    wrapper = mount(<Pagination {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
