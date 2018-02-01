import React from 'react';
import { shallow } from 'enzyme';
import handleWindowResize from './handleWindowResize';

describe(`handleWindowResize`, () => {
  const MockComponent = () => <div>Foo</div>;
  const WithHOC = handleWindowResize(MockComponent);
  const wrapper = shallow(<WithHOC />);

  it('renders without crashing', () => {
  });

  it('renders the component passed in', () => {
    expect(wrapper.find(MockComponent)).toHaveLength(1);
  });
});
