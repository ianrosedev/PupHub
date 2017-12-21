import { connect } from 'react-redux';
import { setMapOptions } from '../../actions/actions';
import Map from '../../components/Map/Map';

const mapStateToProps = ({ map, form, search }) => ({
  ...map,
  locationCoords: form.searchForm.values.locationCoords,
  distance: form.searchForm.values.distance,
  searchResults: search.searchResults.data
});

const mapDispatchToProps = {
  setMapOptions
};

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

export default MapContainer;
