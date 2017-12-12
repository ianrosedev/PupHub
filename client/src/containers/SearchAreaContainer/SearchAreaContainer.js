import { connect } from 'react-redux';
import { toggleSearchArea, searchDataFetch, setMapOptions } from '../../actions/actions';
import SearchArea from '../../components/SearchArea/SearchArea';

const mapStateToProps = ({ search }) => ({
  isOpen: search.isOpen
});

const mapDispatchToProps = {
  toggleSearchArea,
  searchDataFetch,
  setMapOptions
};

const SearchAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchArea);

export default SearchAreaContainer;
