import React from 'react';
import { shallow } from 'enzyme';
import CardsFormatted from './CardsFormatted';
import Spinner from '../Spinner/Spinner';
import Radium, { StyleRoot } from 'radium';

// Stops StyleRoot error
Radium.TestMode.enable();

describe('CardsFormatted', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      isOpen: true,
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

  it('if searchResults is an object & isFetching is `false` shows cards', () => {
    props.searchResults = {};
    props.isFetching = false;

    wrapper = shallow(
      <StyleRoot>
        <CardsFormatted {...props} />
      </StyleRoot>
    );

    expect(wrapper.contains(<CardsFormatted {...props} />)).toBe(true);
  });
  it('if isFetching is `true` shows spinner', () => {
    props.isFetching = true;
    wrapper = shallow(<CardsFormatted {...props} />);

    expect(wrapper.contains(<Spinner isOpen={props.isOpen} />)).toBe(true);
  });

  it('if isError is `true` shows error text', () => {
    props.isError = true;
    wrapper = shallow(<CardsFormatted {...props} />);

    expect(wrapper.contains(<h3>Sorry, there was an error!</h3>)).toBe(true);
    expect(wrapper.contains(<h3>Please try again.</h3>)).toBe(true);
  });

  it('else shows `hit submit` message', () => {
    expect(wrapper.contains(<h3>Let&#39;s find some pups!</h3>)).toBe(true);
  });
});
