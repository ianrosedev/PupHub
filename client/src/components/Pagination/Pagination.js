import React, { Component } from 'react';
import PropTypes from 'prop-types';
import handleWindowResize from '../../hocs/handleWindowResize/handleWindowResize';
import paginator from 'paginator';
import PaginationListItem from '../PaginationListItem/PaginationListItem';
import Radium from 'radium';
import sizes from '../../media/styles/sizes';

const propTypes = {
  totalItemsCount: PropTypes.number.isRequired,
  itemsCountPerPage: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
  setLastPage: PropTypes.func.isRequired,
  searchDataFetch: PropTypes.func.isRequired
};

const defaultProps = {
  itemsCountPerPage: 20,
  activePage: 1
};

export class Pagination extends Component {
  componentWillMount() {
    this.setPaginationInfo();
    this.props.setLastPage(this.paginationInfo.total_pages);
  }

  componentDidUpdate() {
    this.setPaginationInfo();
  }

  setPaginationInfo = () => (
    this.paginationInfo = new paginator(this.props.itemsCountPerPage, (window.innerWidth < Number(sizes.small.slice(0, -2))) ? 3 : 5)
      .build(this.props.totalItemsCount, this.props.activePage)
  );

  render() {
    const {
      activePage,
      setActivePage,
      searchDataFetch
    } = this.props;

    const style = {
      base: {
        marginTop: '4vh',
        padding: 0,
        textAlign: 'center'
      }
    };

    const buildPages = () => {
      const pages = [];

      for (let i = this.paginationInfo.first_page; i <= this.paginationInfo.last_page; i++) {
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
          key={'prev' + this.paginationInfo.previous_page}
          pageNumber={this.paginationInfo.previous_page}
          pageText='⟨'
          isDisabled={!this.paginationInfo.has_previous_page}
          setActivePage={setActivePage}
          searchDataFetch={searchDataFetch}
        />
      );

      pages.unshift(
        <PaginationListItem
          key='first'
          pageNumber={1}
          pageText='First'
          isDisabled={!this.paginationInfo.has_previous_page}
          isFirstElement
          setActivePage={setActivePage}
          searchDataFetch={searchDataFetch}
        />
      );

      pages.push(
        <PaginationListItem
          key={'next' + this.paginationInfo.next_page}
          pageNumber={this.paginationInfo.next_page}
          pageText='⟩'
          isDisabled={!this.paginationInfo.has_next_page}
          setActivePage={setActivePage}
          searchDataFetch={searchDataFetch}
        />
      );

      pages.push(
        <PaginationListItem
          key='last'
          pageNumber={this.paginationInfo.total_pages}
          pageText='Last'
          isDisabled={this.paginationInfo.current_page === this.paginationInfo.total_pages}
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
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default handleWindowResize(Radium(Pagination));
