import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    wrapper;
  });

  it('renders 1 `Header` component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('renders 1 `Body` component', () => {
    expect(wrapper.find(Body)).toHaveLength(1);
  });

  it('renders 1 `Footer` component', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
