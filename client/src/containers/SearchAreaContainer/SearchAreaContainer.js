import { connect } from 'react-redux';
import { toggleSearchArea, setActivePage, searchDataFetch } from '../../actions/actions';
import SearchArea from '../../components/SearchArea/SearchArea';

const mapStateToProps = ({ search }) => ({
  isOpen: search.isOpen
});

const mapDispatchToProps = {
  toggleSearchArea,
  setActivePage,
  searchDataFetch
};

const SearchAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchArea);

export default SearchAreaContainer;
