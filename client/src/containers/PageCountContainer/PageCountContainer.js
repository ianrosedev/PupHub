import { connect } from 'react-redux';
import PageCount from '../../components/PageCount/PageCount';

const mapStateToProps = ({
  pagination: {
    activePage,
    lastPage
  }
}) => ({
  activePage,
  lastPage
});

const PageCountContainer = connect(
  mapStateToProps,
  null
)(PageCount);

export default PageCountContainer;
