import React from 'react';
import { shallow } from 'enzyme';
import SearchArea from './SearchArea';
import SearchFormContainer from '../../containers/SearchFormContainer/SearchFormContainer';
import MapContainer from '../../containers/MapContainer/MapContainer';
import Radium from 'radium';

// Stops StyleRoot error
Radium.TestMode.enable();

describe('SearchArea', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      isOpen: true,
      distance: '25',
      toggleSearchArea: jest.fn(),
      setActivePage: jest.fn(),
      searchDataFetch: jest.fn()
    };

    wrapper = shallow(<SearchArea {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 `SearchFormContainer`', () => {
    expect(wrapper.find(SearchFormContainer)).toHaveLength(1);
  });

  it('contains 1 `MapContainer`', () => {
    expect(wrapper.find(MapContainer)).toHaveLength(1);
  });

  it('if `isOpen` is true the caret points up', () => {
    expect(wrapper.find('.fa .fa-caret-up .fa-2x')).toHaveLength(1);
  });

  it('if `isOpen` is false the caret points up', () => {
    props.isOpen = false;
    wrapper = shallow(<SearchArea {...props} />);

    expect(wrapper.find('.fa .fa-caret-down .fa-2x')).toHaveLength(1);
  });
});
