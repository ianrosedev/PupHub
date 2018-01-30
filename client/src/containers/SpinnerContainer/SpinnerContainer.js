import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';

const mapStateToProps = ({ search }) => ({
  isSearchOpen: search.isOpen
});

const SpinnerContainer = connect(
  mapStateToProps,
  null
)(Spinner);

export default SpinnerContainer;
