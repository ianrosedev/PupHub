import React from 'react';
import { shallow } from 'enzyme';
import Map from './Map';

describe('Map', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      defaultCenter: { lat: 37, lng: -96 },
      zoom: 3,
      isMarkerShown: false,
      distance: '25'
    };

    wrapper = shallow(<Map {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('renders 3 `div` elements', () => {
    expect(wrapper.find('div')).toHaveLength(3);
  });
});
