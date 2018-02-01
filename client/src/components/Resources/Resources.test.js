import React from 'react';
import { shallow } from 'enzyme';
import { Resources } from './Resources';
import ResourceListing from '../ResourceListing/ResourceListing';

describe('Resources', () => {
  const wrapper = shallow(<Resources />);

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains 1 `h1` with the text `Additional Resources`', () => {
    expect(wrapper.find('h1').text()).toBe('Additional Resources');
  });

  it(`contains 1 link to the Google search
       \`https://www.google.com/search?q=local+dog+shelters+OR+rescues\``, () => {
    expect(wrapper.find({
      href: 'https://www.google.com/search?q=local+dog+shelters+OR+rescues'
    })).toHaveLength(1);
  });

  it('contains 5 `ResourceListing`s', () => {
    expect(wrapper.find(ResourceListing)).toHaveLength(5);
  });

  it('contains 1 link to `https://www.petfinder.com` with the text `Petfinder`', () => {
    expect(wrapper.find({ url: 'https://www.petfinder.com' }).prop('linkText')).toBe('Petfinder')
  });

  it('contains 1 link to `https://www.adoptapet.com` with the text `Adopt-a-Pet`', () => {
    expect(wrapper.find({ url: 'https://www.adoptapet.com' }).prop('linkText')).toBe('Adopt-a-Pet')
  });

  it('contains 1 link to `https://bestfriends.org` with the text `Best Friends Animal Society`', () => {
    expect(wrapper.find({ url: 'https://bestfriends.org' }).prop('linkText')).toBe('Best Friends Animal Society')
  });

  it(`contains 1 link to
       \`https://www.petcofoundation.org/put-your-love-into-action/learn-about-adoption\`
        with the text \`Petco Foundation\``, () => {
    expect(wrapper.find({ url: 'https://www.petcofoundation.org/put-your-love-into-action/learn-about-adoption' }).prop('linkText')).toBe('Petco Foundation')
  });

  it(`contains 1 link to
       \`https://www.petsmart.com/adoption/people-saving-pets/ca-adoption-landing.html\`
        with the text \`PetSmart\``, () => {
    expect(wrapper.find({ url: 'https://www.petsmart.com/adoption/people-saving-pets/ca-adoption-landing.html' }).prop('linkText')).toBe('PetSmart')
  });
});
