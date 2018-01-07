import React from 'react';
import { shallow, mount } from 'enzyme';
import CardsFormatted from './CardsFormatted';
import Spinner from '../Spinner/Spinner';
import { StyleRoot } from 'radium';

describe('CardsFormatted', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      isFetching: false,
      isError: false,
      searchResults: null
    };

    wrapper = shallow(<CardsFormatted {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 component', () => {
    expect(wrapper.children()).toHaveLength(1);
  });

  it('if searchResults is `true` & isFetching is `false` shows cards', () => {
    props = { ...props, searchResults: {} };

    wrapper = shallow(
      <StyleRoot>
        <CardsFormatted {...props} />
      </StyleRoot>
    );

    expect(wrapper.contains(<CardsFormatted {...props} />)).toBe(true);
  });

  it('if isFetching is `true` shows spinner', () => {
    props = { ...props, isFetching: true };

    wrapper = mount(
      <CardsFormatted {...props} />
    );

    expect(wrapper.contains(<Spinner />)).toBe(true);
  });

  it('if isError is `true` shows error text', () => {
    props = { ...props, isError: true };

    wrapper = mount(
      <CardsFormatted {...props} />
    );

    expect(wrapper.contains(<h3>Sorry, there was an error! Please try again.</h3>)).toBe(true);
  });

  it('else shows `hit submit` message', () => {
    wrapper = mount(
      <CardsFormatted {...props} />
    );

    expect(wrapper.contains(<h3 data-radium={true}>Hit <em>Submit</em> to see some pups!</h3>)).toBe(true);
  });
});
