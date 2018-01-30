import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';
import ContentCentered from '../ContentCentered/ContentCentered';
import { Carousel } from 'react-responsive-carousel';
import Radium from 'radium';

// Stops StyleRoot error
Radium.TestMode.enable();

describe('Modal', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      individualResult: {
        animalID: '12345',
        animalName: 'Charlie',
        animalSex: 'Male',
        animalGeneralAge: 'Adult',
        animalBreed: 'Mutt',
        animalOKWithCats: 'No',
        animalOKWithDogs: 'Yes',
        animalOKWithKids: 'Yes',
        animalPictures: [{
          urlSecureFullsize: 'http://via.placeholder.com/350x150'
        },
        {
          urlSecureFullsize: 'http://via.placeholder.com/350x150'
        },
        {
          urlSecureFullsize: 'http://via.placeholder.com/350x150'
        }],
        animalDescription: 'Lorem ipsum...'
      },
      closePortal: jest.fn()
    };

    wrapper = shallow(<Modal {...props} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('contains a close button', () => {
    expect(wrapper.find('i .fa .fa-times .fa-lg')).toHaveLength(1);
  });

  it('if images are given renders `Carousel`', () => {
    expect(wrapper.find(Carousel)).toHaveLength(1);
  });

  it('if images are not given DOESN\'T render `Carousel`', () => {
    props = { ...props, individualResult: { animalPictures: [] } };
    wrapper = shallow(<Modal {...props} />);

    expect(wrapper.find(Carousel)).toHaveLength(0);
  });

  it('the Carousel renders one image per object given', () => {
    expect(wrapper.find('img')).toHaveLength(3);
  });

  it('contains 1 `h1` element with the dogs name', () => {
    expect(wrapper.find('h1').at(0).text()).toBe('Charlie');
  });

  it('contains 1 `li` element with the dogs `Sex` and its value', () => {
    expect(wrapper.find('li').at(0).text()).toBe('Sex: Male');
  });

  it('contains 1 `li` element with the dogs `Age` and its value', () => {
    expect(wrapper.find('li').at(1).text()).toBe('Age: Adult');
  });

  it('contains 1 `li` element with the dogs `Breed` and its value', () => {
    expect(wrapper.find('li').at(2).text()).toBe('Breed: Mutt');
  });

  it('contains 1 `li` element with the dogs `Good With Dogs` and its value', () => {
    expect(wrapper.find('li').at(3).text()).toBe('Good With Dogs: Yes');
  });

  it('contains 1 `li` element with the dogs `Good With Cats` and its value', () => {
    expect(wrapper.find('li').at(4).text()).toBe('Good With Cats: No');
  });

  it('contains 1 `li` element with the dogs `Good With Kids` and its value', () => {
    expect(wrapper.find('li').at(5).text()).toBe('Good With Kids: Yes');
  });

  it('if the dogs `Sex` value is unknown show `Unknown`', () => {
    props.individualResult.animalSex = '';
    wrapper = shallow(<Modal {...props} />);

    expect(wrapper.find('li').at(0).text()).toBe('Sex: Unknown');
  });

  it('if the dogs `Age` value is unknown show `Unknown`', () => {
    props.individualResult.animalGeneralAge = '';
    wrapper = shallow(<Modal {...props} />);

    expect(wrapper.find('li').at(1).text()).toBe('Age: Unknown');
  });

  it('if the dogs `Breed` value is unknown show `Unknown`', () => {
    props.individualResult.animalBreed = '';
    wrapper = shallow(<Modal {...props} />);

    expect(wrapper.find('li').at(2).text()).toBe('Breed: Unknown');
  });

  it('if the dogs `Good With Dogs` value is unknown show `Unknown`', () => {
    props.individualResult.animalOKWithDogs = '';
    wrapper = shallow(<Modal {...props} />);

    expect(wrapper.find('li').at(3).text()).toBe('Good With Dogs: Unknown');
  });

  it('if the dogs `Good With Cats` value is unknown show `Unknown`', () => {
    props.individualResult.animalOKWithCats = '';
    wrapper = shallow(<Modal {...props} />);

    expect(wrapper.find('li').at(4).text()).toBe('Good With Cats: Unknown');
  });

  it('if the dogs `Good With Kids` value is unknown show `Unknown`', () => {
    props.individualResult.animalOKWithKids = '';
    wrapper = shallow(<Modal {...props} />);

    expect(wrapper.find('li').at(5).text()).toBe('Good With Kids: Unknown');
  });

  it('if a description is given render its text', () => {
    expect(wrapper.find('#testing-description')).toHaveLength(1);
  });

  it('if NO description is given render fallback text', () => {
    props.individualResult.animalDescription = '';
    wrapper = shallow(<Modal {...props} />);

    expect(wrapper.find('h3').text()).toBe('Sorry, there is no description for this dog.');
  });
});
