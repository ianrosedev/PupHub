import React from 'react';
import { mount } from 'enzyme';
import CheckboxArray from './CheckboxArray';

describe('CheckboxArray', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      input: {
        value: 'foo'
      },
      itemValue: 'Foo'
    };

    wrapper = mount(<CheckboxArray {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 `input` element', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });
});
