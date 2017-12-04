import { connect } from 'react-redux';
import { searchDataFetch, setMapOptions } from '../../actions/actions';
import SearchArea from '../../components/SearchArea/SearchArea';

const mapStateToProps = ({ search }) => search;

const mapDispatchToProps = {
  searchDataFetch,
  setMapOptions
};

const SearchAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchArea);

export default SearchAreaContainer;
