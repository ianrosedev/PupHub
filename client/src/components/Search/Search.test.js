import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';
import SearchAreaContainer from '../../containers/SearchAreaContainer/SearchAreaContainer';
import CardsFormattedContainer from '../../containers/CardsFormattedContainer/CardsFormattedContainer';

describe('Search - no window.google', () => {
  const wrapper = shallow(<Search />);

  it('if `window.google` is undefined show error', () => {
    expect(wrapper.find('h3').at(0).text()).toBe('Sorry, there was an error!');
    expect(wrapper.find('h3').at(1).text()).toBe('Check your internet connection and refresh the page.');
  });
});

describe('Search - with window.google', () => {
  global.google = {};

  const wrapper = shallow(<Search />);

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 `SearchAreaContainer` component', () => {
    expect(wrapper.find(SearchAreaContainer)).toHaveLength(1);
  });

  it('contains 1 `CardsFormattedContainer` component', () => {
    expect(wrapper.find(CardsFormattedContainer)).toHaveLength(1);
  });
});
