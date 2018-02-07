import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import {
  setMapOptions,
  setActivePage,
  searchDataFetch,
  searchDataError
} from '../../actions/actions';
import SearchForm from '../../components/SearchForm/SearchForm';

const selector = formValueSelector('searchForm');

const mapStateToProps = (state) => {
  const {
    sex,
    age,
    goodWith,
    distance = null
  } = selector(state, 'sex', 'age', 'goodWith', 'distance');

  return {
    sex,
    age,
    goodWith,
    distance
  };
};

const mapDispatchToProps = {
  setMapOptions,
  setActivePage,
  searchDataFetch,
  searchDataError
};

const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

export default SearchFormContainer;
