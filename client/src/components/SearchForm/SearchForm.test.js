import React from 'react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import { store } from '../../reducers/index';
import { shallow } from 'enzyme';
import { StyleRoot } from 'radium';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let props;
  let wrapper;
  const store = {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {}
  };
  const options = {
    context: { store },
    childContextTypes: { store: PropTypes.object.isRequired }
  };

  beforeEach(() => {
    props = {
      handleSubmit: jest.fn(),
      setMapOptions: jest.fn(),
      setActivePage: jest.fn(),
      searchDataFetch: jest.fn(),
    };

    wrapper = shallow(
      <StyleRoot>
        <SearchForm {...props} />
      </StyleRoot>,
      options
    );
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
