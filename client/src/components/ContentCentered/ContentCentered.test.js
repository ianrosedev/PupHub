import React from 'react';
import { shallow } from 'enzyme';
import ContentCentered from './ContentCentered';
import Radium from 'radium';

// Stops StyleRoot error
Radium.TestMode.enable();

describe('ContentCentered', () => {
  const wrapper = shallow(
    <ContentCentered>
      <div>
        <div>
          foo
        </div>
        <div>
          bar
        </div>
      </div>
    </ContentCentered>
  );

  it('renders without crashing', () => {
    wrapper;
  });

  it('renders 1 child component', () => {
    expect(wrapper.children()).toHaveLength(1);
  });
});
