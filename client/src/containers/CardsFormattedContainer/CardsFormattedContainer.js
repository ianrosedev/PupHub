import { connect } from 'react-redux';
import CardsFormatted from '../../components/CardsFormatted/CardsFormatted';

const mapStateToProps = ({
  search: {
    isFetching,
    isError,
    searchResults: { data }
  }
}) => ({
  isFetching,
  isError,
  searchResults: data
});

const CardsFormattedContainer = connect(
  mapStateToProps,
  null
)(CardsFormatted);

export default CardsFormattedContainer;
