import React from 'react';
import { shallow } from 'enzyme';
import CheckboxArray from './CheckboxArray';

describe('CheckboxArray', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      input: {
        value: ['foo']
      },
      itemValue: 'bar'
    };

    wrapper = shallow(<CheckboxArray {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 `input` element', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('if input.value matches itemValue `checked` is true', () => {
    props.itemValue = 'foo';
    wrapper = shallow(<CheckboxArray {...props} />);

    expect(wrapper.find('input').prop('checked')).toBe(true);
  });

  it('if input.value DOESN\'T match itemValue `checked` is false', () => {
    expect(wrapper.find('input').prop('checked')).toBe(false);
  });
});
