import React from 'react';
import { shallow } from 'enzyme';
import scrollToTopOnMount from './scrollToTopOnMount';

describe(`scrollToTopOnMount`, () => {
  const MockComponent = () => <div>Foo</div>;
  const WithHOC = scrollToTopOnMount(MockComponent);
  const wrapper = shallow(<WithHOC />);

  it('renders without crashing', () => {
    wrapper;
  });

  it('renders the component passed in', () => {
    expect(wrapper.find(MockComponent)).toHaveLength(1);
  });
});
