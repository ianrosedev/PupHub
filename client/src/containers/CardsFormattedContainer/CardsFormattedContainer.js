import { connect } from 'react-redux';
import CardsFormatted from '../../components/CardsFormatted/CardsFormatted';

const mapStateToProps = ({
  search: {
    isOpen,
    isFetching,
    isError,
    searchResults: { data }
  }
}) => ({
  isOpen,
  isFetching,
  isError,
  searchResults: data
});

const CardsFormattedContainer = connect(
  mapStateToProps,
  null
)(CardsFormatted);

export default CardsFormattedContainer;
