import { connect } from 'react-redux';
import { toggleSearchArea, setMapOptions, setActivePage, searchDataFetch } from '../../actions/actions';
import SearchArea from '../../components/SearchArea/SearchArea';

const mapStateToProps = ({ search, form }) => ({
  isOpen: search.isOpen,
  distance: form.searchForm ? form.searchForm.values.distance : null
});

const mapDispatchToProps = {
  toggleSearchArea,
  setMapOptions,
  setActivePage,
  searchDataFetch
};

const SearchAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchArea);

export default SearchAreaContainer;
