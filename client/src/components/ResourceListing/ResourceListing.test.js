import React from 'react';
import { shallow } from 'enzyme';
import ResourceListing from '../ResourceListing/ResourceListing';

describe('ResourceListing', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      url: 'https://example.com',
      linkText: 'Example.com',
      text: 'Lorem ipsum...'
    };

    wrapper = shallow(<ResourceListing {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 link to the `url` prop passed in', () => {
    expect(wrapper.find('a[href="https://example.com"]')).toHaveLength(1);
  });

  it('contains the `linkText` in the link', () => {
    expect(wrapper.find('a').text()).toBe('Example.com');
  });

  it('contains a `p` with the `text` prop passsed in', () => {
    expect(wrapper.find('p').text()).toBe('Lorem ipsum...');
  });
});
