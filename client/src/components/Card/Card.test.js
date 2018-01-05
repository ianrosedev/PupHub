import React from 'react';
import { mount } from 'enzyme';
import Card from './Card';
import { StyleRoot } from 'radium';

describe('Card', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      name: 'Foo',
      img: 'foo.jpg',
      isAdoptionPending: 'No',
      onClick: jest.fn()
    };

    wrapper = mount(
      <StyleRoot>
        <Card {...props} />
      </StyleRoot>
    );
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 `img` element', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('contains 1 `H3` element', () => {
    expect(wrapper.find('h3')).toHaveLength(1);
  });

  it('if isAdoptionPending is `Yes`, show ribbon', () => {
    props = { ...props, isAdoptionPending: 'Yes' };

    wrapper = mount(
      <StyleRoot>
        <Card {...props} />
      </StyleRoot>
    );

    expect(wrapper.html()).toContain('Pending');
  });

  it('if isAdoptionPending is NOT `Yes`, don\'t show ribbon', () => {
    expect(wrapper.html()).not.toContain('Pending');
  });

  it('clicking on component fires `onClick`', () => {
    (wrapper.find('div').at(1)).simulate('click');
    expect(props.onClick).toBeCalled();
  });
});
