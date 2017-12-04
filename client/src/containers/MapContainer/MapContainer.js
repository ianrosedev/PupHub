import { connect } from 'react-redux';
import { setMapOptions } from '../../actions/actions';
import Map from '../../components/Map/Map';

const mapStateToProps = ({ map, form }) => ({
  ...map,
  locationCoords: form.searchForm.values.locationCoords
});

const mapDispatchToProps = {
  setMapOptions
};

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

export default MapContainer;
