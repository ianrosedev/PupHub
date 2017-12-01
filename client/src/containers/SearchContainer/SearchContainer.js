import { connect } from 'react-redux';
import { searchDataFetch } from '../../actions/actions';
import Search from '../../components/Search/Search';

const mapStateToProps = ({ search }) => ({
  ...search
});

const mapDispatchToProps = {
  searchDataFetch
};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
