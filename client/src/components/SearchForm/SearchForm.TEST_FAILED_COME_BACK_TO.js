import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
  
    };

    wrapper = shallow(<SearchForm {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
