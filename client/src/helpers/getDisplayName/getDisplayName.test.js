import React, { Component } from 'react';
import { mount } from 'enzyme';
import { getDisplayName } from './getDisplayName';

describe(`getDisplayName`, () => {
  const MockComponent = () => <div>Foo</div>;
  const mockHOC = (WrappedComponent) => {
    return class MockHOC extends Component {
      render() {
        MockHOC.displayName = `MockHOC(${getDisplayName(WrappedComponent)})`;

        return (
          <WrappedComponent {...this.props} />
        );
      }
    }
  };
  const WithHOC = mockHOC(MockComponent);
  const wrapper = mount(<WithHOC />);

  it('renders without crashing', () => {
    wrapper;
  });

  it('the name of the HOC includes the name of the component passed in', () => {
    expect(wrapper.name()).toBe('MockHOC(MockComponent)');
  });
});
