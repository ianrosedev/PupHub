import React from 'react';
import PropTypes from 'prop-types';
import paginator from 'paginator';
import PaginationListItem from '../PaginationListItem/PaginationListItem';
import Radium from 'radium';

const propTypes = {
  totalItemsCount: PropTypes.number.isRequired,
  itemsCountPerPage: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  pageRangeDisplayed: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
  setLastPage: PropTypes.func.isRequired,
  searchDataFetch: PropTypes.func.isRequired
};

const defaultProps = {
  itemsCountPerPage: 20,
  pageRangeDisplayed: 5,
  activePage: 1
};

const Pagination = ({
  totalItemsCount,
  itemsCountPerPage,
  activePage,
  pageRangeDisplayed,
  setActivePage,
  setLastPage,
  searchDataFetch
}) => {
  const style = {
    base: {
      display: 'block',
      marginTop: '4vh',
      textAlign: 'center',
      padding: 0
    }
  };

  const buildPages = () => {
    const pages = [];

    const paginationInfo = new paginator(itemsCountPerPage, pageRangeDisplayed)
      .build(totalItemsCount, activePage);

    setLastPage(paginationInfo.total_pages);

    for (let i = paginationInfo.first_page; i <= paginationInfo.last_page; i++) {
      pages.push(
        <PaginationListItem
          key={'page' + i}
          pageNumber={i}
          pageText={String(i)}
          isActive={(i === activePage) ? true : false}
          setActivePage={setActivePage}
          searchDataFetch={searchDataFetch}
        />
      );
    }

    pages.unshift(
      <PaginationListItem
        key={'prev' + paginationInfo.previous_page}
        pageNumber={paginationInfo.previous_page}
        pageText='⟨'
        isDisabled={!paginationInfo.has_previous_page}
        setActivePage={setActivePage}
        searchDataFetch={searchDataFetch}
      />
    );

    pages.unshift(
      <PaginationListItem
        key='first'
        pageNumber={1}
        pageText='First'
        isDisabled={!paginationInfo.has_previous_page}
        isFirstElement
        setActivePage={setActivePage}
        searchDataFetch={searchDataFetch}
      />
    );

    pages.push(
      <PaginationListItem
        key={'next' + paginationInfo.next_page}
        pageNumber={paginationInfo.next_page}
        pageText='⟩'
        isDisabled={!paginationInfo.has_next_page}
        setActivePage={setActivePage}
        searchDataFetch={searchDataFetch}
      />
    );

    pages.push(
      <PaginationListItem
        key='last'
        pageNumber={paginationInfo.total_pages}
        pageText='Last'
        isDisabled={paginationInfo.current_page === paginationInfo.total_pages}
        isLastElement
        setActivePage={setActivePage}
        searchDataFetch={searchDataFetch}
      />
    );

    return pages;
  };

  return (
    <ul style={style.base}>{buildPages()}</ul>
  );
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Radium(Pagination);
