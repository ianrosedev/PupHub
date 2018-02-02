import React from 'react';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import { store } from '../../reducers/index';
import { shallow } from 'enzyme';
import Radium from 'radium';
import { SearchForm } from './SearchForm';

// Stops StyleRoot error
Radium.TestMode.enable();

describe('SearchForm', () => {
  let props;
  const store = {
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: jest.fn()
  };
  const options = {
    context: { store },
    childContextTypes: { store: PropTypes.object.isRequired }
  };
  let wrapper;

  beforeEach(() => {
    props = {
      // redux-form
      anyTouched: false,
      asyncValidating: false,
      dirty: false,
      form: 'foo',
      invalid: false,
      initialized: false,
      pristine: false,
      pure: false,
      submitting: false,
      submitFailed: false,
      submitSucceeded: false,
      valid: false,
      asyncValidate: jest.fn(),
      autofill: jest.fn(),
      blur: jest.fn(),
      change: jest.fn(),
      clearAsyncError: jest.fn(),
      destroy: jest.fn(),
      dispatch: jest.fn(),
      handleSubmit: jest.fn(),
      initialize: jest.fn(),
      reset: jest.fn(),
      touch: jest.fn(),
      submit: jest.fn(),
      untouch: jest.fn(),
      clearSubmit: jest.fn(),
      // custom
      setMapOptions: jest.fn(),
      handleFieldChange: jest.fn(),
      setActivePage: jest.fn(),
      searchDataFetch: jest.fn(),
    };

    wrapper = shallow(<SearchForm {...props} />, options);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 `form` element', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });

  describe('`Search` field', () => {
    it('contains 1 field  with the name `location`', () => {
      expect(wrapper.find({ 'name': 'location' })).toHaveLength(1);
    });
  });

  describe('`Sex` field', () => {
    it('contains 1 `div` with `h3` text `Sex`', () => {
      expect(wrapper.find('div').at(1).find('h3').text()).toBe('Sex');
    });

    it('contains 1 field with the `itemValue`: `Male`', () => {
      expect(wrapper.find('div').at(1).find({ itemValue: 'Male' })).toHaveLength(1);
    });

    it('contains 1 field with the `itemValue`: `Female`', () => {
      expect(wrapper.find('div').at(1).find({ itemValue: 'Female' })).toHaveLength(1);
    });

    it('the last `span` contains the text `Required Field!`', () => {
      expect(wrapper.find('div').at(1).find('span').last().text()).toBe('Required Field!');
    });
  });

  describe('`Age` field', () => {
    it('contains 1 `div` with `h3` text `Age`', () => {
      expect(wrapper.find('div').at(3).find('h3').text()).toBe('Age');
    });

    it('contains 1 field with the `itemValue`: `Baby`', () => {
      expect(wrapper.find('div').at(3).find({ itemValue: 'Baby' })).toHaveLength(1);
    });

    it('contains 1 field with the `itemValue`: `Young`', () => {
      expect(wrapper.find('div').at(3).find({ itemValue: 'Young' })).toHaveLength(1);
    });

    it('contains 1 field with the `itemValue`: `Adult`', () => {
      expect(wrapper.find('div').at(3).find({ itemValue: 'Adult' })).toHaveLength(1);
    });

    it('contains 1 field with the `itemValue`: `Senior`', () => {
      expect(wrapper.find('div').at(3).find({ itemValue: 'Senior' })).toHaveLength(1);
    });

    it('the last `span` contains the text `Required Field!`', () => {
      expect(wrapper.find('div').at(3).find('span').last().text()).toBe('Required Field!');
    });
  });

  describe('`Good With` field', () => {
    it('contains 1 `div` with `h3` text `Good With`', () => {
      expect(wrapper.find('div').at(5).find('h3').text()).toBe('Good With');
    });

    it('contains 1 field with the `itemValue`: `Show All`', () => {
      expect(wrapper.find('div').at(5).find({ itemValue: 'Show All' })).toHaveLength(1);
    });

    it('contains 1 field with the `itemValue`: `Kids`', () => {
      expect(wrapper.find('div').at(5).find({ itemValue: 'Kids' })).toHaveLength(1);
    });

    it('contains 1 field with the `itemValue`: `Dogs`', () => {
      expect(wrapper.find('div').at(5).find({ itemValue: 'Dogs' })).toHaveLength(1);
    });

    it('contains 1 field with the `itemValue`: `Cats`', () => {
      expect(wrapper.find('div').at(5).find({ itemValue: 'Cats' })).toHaveLength(1);
    });

    it('the last `span` contains the text `Required Field!`', () => {
      expect(wrapper.find('div').at(5).find('span').last().text()).toBe('Required Field!');
    });
  });

  describe('`Distance` field', () => {
    it('contains 1 `div` with `h3` text `Max Distance`', () => {
      expect(wrapper.find('div').at(7).find('h3').text()).toBe('Max Distance');
    });

    it('contains 1 field with the `value`: `10`', () => {
      expect(wrapper.find('div').at(7).find({ value: '10' })).toHaveLength(1);
    });

    it('contains 1 field with the `value`: `25`', () => {
      expect(wrapper.find('div').at(7).find({ value: '25' })).toHaveLength(1);
    });

    it('contains 1 field with the `value`: `50`', () => {
      expect(wrapper.find('div').at(7).find({ value: '50' })).toHaveLength(1);
    });

    it('contains 1 field with the `value`: `100`', () => {
      expect(wrapper.find('div').at(7).find({ value: '100' })).toHaveLength(1);
    });
  });
});
