import React from 'react';
import ContentCentered from '../ContentCentered/ContentCentered';
import ResourceListing from '../ResourceListing/ResourceListing';
import Radium from 'radium';
import colors from '../../media/styles/colors';

const Resources = () => {
  const style = {
    heading: {
      backgroundColor: colors.lightGray,
      marginBottom: '4vh',
      padding: 30,
      borderRadius: 7,
      h1: {
        margin: '0 0 2vh 0',
        fontFamily: 'Roboto, sans-serif',
        lineHeight: 1.25
      },
      p: {
        fontSize: 20
      }
    }
  };

  return (
    <ContentCentered>
      <div style={style.heading}>
        <h1 style={style.heading.h1}>Additional Resources</h1>
        <p style={style.heading.p}>Unfortunately, PupHub contains just a small portion of the dogs that need a home. Here are some other national organizations that help dogs in need.</p>
        <p style={style.heading.p}>There are also many more local resources such as the animal control, rescues, and the SPCA. Here is a <a href='https://www.google.com/search?q=local+dog+shelters+OR+rescues'>Google Search</a> to get you started looking for them.</p>
      </div>
      <ResourceListing
        url='https://www.petfinder.com'
        linkText='Petfinder'
        text='Petfinder has helped more than 25 million pets find their families through adoption. Search our extensive list of dogs, cats and other pets available for adoption and rescue near you.'
        isFirstElement
      />
      <ResourceListing
        url='https://www.adoptapet.com'
        linkText='Adopt-a-Pet'
        text="Adopt-a-Pet is North America's largest non-profit pet adoption website"
      />
      <ResourceListing
        url='https://bestfriends.org'
        linkText='Best Friends Animal Society'
        text='Best Friends is nationwide animal rescue and advocacy organization, with spay neuter, TNR (trap neuter return), pet adoption and no-kill programs.'
      />
      <ResourceListing
        url='https://www.petcofoundation.org/put-your-love-into-action/learn-about-adoption'
        linkText='Petco Foundation'
        text='Every day, you can adopt a pet in a Petco store. We help find homes for thousands of dogs, cats, rabbits and other pets every week. Search Online or Come In.'
      />
      <ResourceListing
        url='https://www.petsmart.com/adoption/people-saving-pets/ca-adoption-landing.html'
        linkText='PetSmart'
        text='At PetSmart, we never sell dogs or cats. Together with PetSmart Charities, we help save over 1,300 pets every day through adoption.'
        isLastElement
      />
    </ContentCentered>
  );
};

export default Radium(Resources);
