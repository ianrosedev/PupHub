import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from './NavBar';
import Radium from 'radium';

// Stops StyleRoot error
Radium.TestMode.enable();

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('the `NavLink` with the text `Home` links to `/`', () => {
    expect(wrapper.find({ to: '/'}).at(0).childAt(0).text()).toBe('Home');
  });

  it('the `NavLink` with the text `Search` links to `/search`', () => {
    expect(wrapper.find({ to: '/search'}).at(0).childAt(0).text()).toBe('Search');
  });

  it('the `NavLink` with the text `Resources` links to `/resources`', () => {
    expect(wrapper.find({ to: '/resources'}).at(0).childAt(0).text()).toBe('Resources');
  });

  it('contains 2 `NavLinks` to `Home`', () => {
    expect(wrapper.find({ to: '/' })).toHaveLength(2);
  });

  it('contains 2 `NavLinks` to `Search`', () => {
    expect(wrapper.find({ to: '/search' })).toHaveLength(2);
  });

  it('contains 2 `NavLinks` to `Resources`', () => {
    expect(wrapper.find({ to: '/resources' })).toHaveLength(2);
  });

  it('contains a hamburger icon', () => {
    expect(wrapper.find('.fa .fa-bars .fa-2x')).toHaveLength(1);
  });

  it('when you click on hamburger icon `state.isDropdownOpen` toggles', () => {
    wrapper.find('.fa .fa-bars .fa-2x').simulate('click');
    expect(wrapper.state('isDropdownOpen')).toBe(true);
    wrapper.find('.fa .fa-bars .fa-2x').simulate('click');
    expect(wrapper.state('isDropdownOpen')).toBe(false);
  });

  it('when you click on `Home` link `state.isDropdownOpen` is false', () => {
    wrapper.find({ to: '/' }).at(1).simulate('click');
    expect(wrapper.state('isDropdownOpen')).toBe(false);
  });

  it('when you click on `Search` link `state.isDropdownOpen` is false', () => {
    wrapper.find({ to: '/search' }).at(1).simulate('click');
    expect(wrapper.state('isDropdownOpen')).toBe(false);
  });

  it('when you click on `Resources` link `state.isDropdownOpen` is false', () => {
    wrapper.find({ to: '/resources' }).at(1).simulate('click');
    expect(wrapper.state('isDropdownOpen')).toBe(false);
  });
});
