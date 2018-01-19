import React from 'react';
import { mount } from 'enzyme';
import MarkerWithInfoWindow from './MarkerWithInfoWindow';

describe('MarkerWithInfoWindow', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      data: [{
        animalLocationCoordinates: '80, 30'
      }],
      label: {}
    };

    wrapper = mount(<MarkerWithInfoWindow {...props} />);
  });

  it('renders without crashing', () => {
    console.log(wrapper.debug());
    wrapper;
  });
});
