import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('Modal', () => {
  const props = {
    individualResult: {
      animalPictures: []
    },
    closePortal: jest.fn()
  };

  const wrapper = shallow(<Modal {...props} />);

  it('renders without crashing', () => {
    wrapper;
  });
});
