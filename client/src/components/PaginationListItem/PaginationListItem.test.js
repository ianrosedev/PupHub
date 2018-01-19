import React from 'react';
import { shallow } from 'enzyme';
import PaginationListItem from './PaginationListItem';

describe('PaginationListItem', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      pageText: '1',
      pageNumber: 1,
      isFirstElement: false,
      isLastElement: false,
      isActive: true,
      isDisabled: true,
      setActivePage: jest.fn(),
      searchDataFetch: jest.fn()
    };

    wrapper = shallow(<PaginationListItem {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 `li`', () => {
    expect(wrapper.find('li')).toHaveLength(1);
  });

  it('contains 1 `button`', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('displays the pageText', () => {
    expect(wrapper.text()).toBe('1');
  });
});
