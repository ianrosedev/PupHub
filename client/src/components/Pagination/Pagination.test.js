import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('Pagination', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      totalItemsCount: 210,
      itemsCountPerPage: 20,
      activePage: 1,
      pageRangeDisplayed: 5,
      hideDisabled: false,
      setActivePage: jest.fn(),
      setLastPage: jest.fn(),
      searchDataFetch: jest.fn()
    };

    wrapper = shallow(<Pagination {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 `ul`', () => {
    expect(wrapper.find('ul')).toHaveLength(1);
  });

  it('displays 1 `PaginationListItem` with the pageText `First`', () => {
    expect(wrapper.find({ pageText: 'First' })).toHaveLength(1);
  });

  it('`First` is the first element', () => {
    expect(wrapper.children().at(0).prop('isFirstElement')).toBe(true);
  });

  it('`First` has a pageNumber `1`', () => {
    expect(wrapper.children().at(0).prop('pageNumber')).toBe(1);
  });

  it('if activePage is lowest `First` is disabled', () => {
    expect(wrapper.children().at(0).prop('isDisabled')).toBe(true);
  });

  it('displays 1 `PaginationListItem` with the pageText `Last`', () => {
    expect(wrapper.find({ pageText: 'Last' })).toHaveLength(1);
  });

  it('`Last` is the last element', () => {
    expect(wrapper.children().at(8).prop('isLastElement')).toBe(true);
  });

  it('`Last` has a pageNumber `11` given the totalItemsCount of 210', () => {
    expect(wrapper.children().at(8).prop('pageNumber')).toBe(11);
  });

  it('if activePage is highest `Last` is disabled', () => {
    props.activePage = 11;
    wrapper = shallow(<Pagination {...props} />);

    expect(wrapper.children().at(8).prop('isDisabled')).toBe(true);
  });

  it('displays a `⟨` second in order', () => {
    expect(wrapper.children().at(1).prop('pageText')).toBe('⟨');
  });

  it('if activePage is lowest `⟨` is disabled', () => {
    expect(wrapper.children().at(1).prop('isDisabled')).toBe(true);
  });

  it('if activePage is `4`, `⟨` has a pageNumber `3`', () => {
    props.activePage = 4;
    wrapper = shallow(<Pagination {...props} />);

    expect(wrapper.children().at(1).prop('pageNumber')).toBe(3);
  });

  it('displays a `⟩` second to last in order', () => {
    expect(wrapper.children().at(7).prop('pageText')).toBe('⟩');
  });

  it('if activePage is highest `⟩` is disabled', () => {
    props.activePage = 11;
    wrapper = shallow(<Pagination {...props} />);

    expect(wrapper.children().at(7).prop('isDisabled')).toBe(true);
  });

  it('if activePage is `4`, `⟩` has a pageNumber `5`', () => {
    props.activePage = 4;
    wrapper = shallow(<Pagination {...props} />);

    expect(wrapper.children().at(7).prop('pageNumber')).toBe(5);
  });

  it('displays 5 pages in order', () => {
    expect(wrapper.children().at(2).prop('pageNumber')).toBe(1);
    expect(wrapper.children().at(3).prop('pageNumber')).toBe(2);
    expect(wrapper.children().at(4).prop('pageNumber')).toBe(3);
    expect(wrapper.children().at(5).prop('pageNumber')).toBe(4);
    expect(wrapper.children().at(6).prop('pageNumber')).toBe(5);
  });
});
