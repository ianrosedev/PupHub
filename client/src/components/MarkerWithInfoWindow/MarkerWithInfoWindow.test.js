import React from 'react';
import { shallow } from 'enzyme';
import { Marker, InfoWindow } from 'react-google-maps';
import { PortalWithState } from 'react-portal';
import Modal from '../Modal/Modal';
import MarkerWithInfoWindow from './MarkerWithInfoWindow';
import Radium from 'radium';

// Stops StyleRoot error
Radium.TestMode.enable();

describe('MarkerWithInfoWindow - with window.google', () => {
  global.google = {};
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      data: [{
        animalLocationCoordinates: '80, 30'
      }],
      label: {}
    };

    wrapper = shallow(<MarkerWithInfoWindow {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('renders a `Marker` component', () => {
    expect(wrapper.name()).toBe('Marker');
  });
});
