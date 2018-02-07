import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import Radium from 'radium';

// Stops StyleRoot error
Radium.TestMode.enable();

describe('SearchBar', () => {
  global.google = {
    maps: {
      Geocoder: jest.fn()
    }
  };
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      input: {},
      meta: {},
      isDisabled: false,
      setMapOptions: jest.fn(),
      setActivePage: jest.fn(),
      searchDataFetch: jest.fn(),
      searchDataError: jest.fn()
    };

    wrapper = shallow(<SearchBar {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 `search` icon', () => {
    expect(wrapper.find('.fa .fa-search')).toHaveLength(1);
  });

  it('contains 1 `StandaloneSearchBox` component', () => {
    expect(wrapper.find(StandaloneSearchBox)).toHaveLength(1);
  });

  it('contains 1 `input` element', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('contains 1 `button` element with the text `Submit`', () => {
    expect(wrapper.find('button').text()).toBe('Submit');
  });

  it('the `button` has a type of `button`', () => {
    expect(wrapper.find('button').prop('type')).toBe('button');
  });

  it('if `isDisabled` is true button is disabled', () => {
    props.isDisabled = true;
    wrapper = shallow(<SearchBar {...props} />);

    expect(wrapper.find('button').prop('disabled')).toBe(true);
  });

  it('if `isDisabled` is false button is NOT disabled', () => {
    expect(wrapper.find('button').prop('disabled')).toBe(false);
  });
});
