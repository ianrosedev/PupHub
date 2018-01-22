import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import SearchForm from '../../components/SearchForm/SearchForm';

const selector = formValueSelector('searchForm');

const SearchFormContainer = connect((state) => {
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
})(SearchForm);

export default SearchFormContainer;
