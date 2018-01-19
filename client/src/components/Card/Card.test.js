import React from 'react';
import { mount } from 'enzyme';
import Card from './Card';

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

    wrapper = mount(<Card {...props} />);
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
    props.isAdoptionPending = 'Yes';

    wrapper = mount(
      <Card {...props} />
    );

    expect(wrapper.html()).toContain('Adoption<br>Pending');
  });

  it('if isAdoptionPending is NOT `Yes`, don\'t show ribbon', () => {
    expect(wrapper.html()).not.toContain('Adoption<br>Pending');
  });

  it('clicking on component fires `onClick`', () => {
    (wrapper.find('div').at(1)).simulate('click');
    expect(props.onClick).toBeCalled();
  });
});
