import React from 'react';
import { shallow } from 'enzyme';
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

    wrapper = shallow(<MarkerWithInfoWindow {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
