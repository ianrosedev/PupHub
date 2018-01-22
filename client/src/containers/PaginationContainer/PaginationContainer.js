import { connect } from 'react-redux';
import { setActivePage, searchDataFetch } from '../../actions/actions';
import Pagination from '../../components/Pagination/Pagination';

const mapStateToProps = ({ search, pagination }) => ({
  totalItemsCount: search.searchResults.foundRows,
  activePage: pagination.activePage
});

const mapDispatchToProps = {
  setActivePage,
  searchDataFetch
};

const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);

export default PaginationContainer;
