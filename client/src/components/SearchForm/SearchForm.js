import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CheckboxArray from '../CheckboxArray/CheckboxArray';
import Radium from 'radium';
import sizes from '../../media/styles/sizes';

const SearchForm = ({ handleSubmit }) => {
  const style = {
    base: {
      width: '60%',
      [`@media (max-width: ${sizes.medium})`]: {
        width: '100%'
      }
    },
    searchBar: {
      width: '100%'
    },
    searchOptions: {
      display: 'flex',
      alignItems: 'flex-start',
      [`@media (max-width: ${sizes.small})`]: {
        flexDirection: 'column'
      },
      block: {
        margin: '1vh 5vw 2vh 0',
        [`@media (max-width: ${sizes.small})`]: {
          margin: '1vh 1vw'
        }
      },
      h3: {
        display: 'block',
        textDecoration: 'underline',
        marginBottom: 5,
        padding: 0
      },
      span: {
        display: 'block',
        marginBottom: 5
      }
    }
  };

  return (
    <form
      style={style.base}
      onSubmit={handleSubmit}
    >
      <div>
        <Field
          style={style.searchBar}
          name='location'
          component='input'
          type='text'
        />
      </div>
      <div style={style.searchOptions}>
        <div style={style.searchOptions.block}>
          <h3 style={style.searchOptions.h3}>Sex</h3>
          {['Any', 'Male', 'Female'].map((item) => (
            <span
              key={'sex' + item}
              style={style.searchOptions.span}
            >
              <Field
                name='sex'
                component='input'
                type='radio'
                value={item}
              />
              {' ' + item + ' '}
            </span>
          ))}
        </div>
        <div style={style.searchOptions.block}>
          <h3 style={style.searchOptions.h3}>Age</h3>
          {['Any', 'Young', 'Adult'].map((item) => (
            <span
              key={'age' + item}
              style={style.searchOptions.span}
            >
              <Field
                name='age'
                component='input'
                type='radio'
                value={item}
              />
              {' ' + item + ' '}
            </span>
          ))}
        </div>
        <div style={style.searchOptions.block}>
          <h3 style={style.searchOptions.h3}>Size</h3>
          {['Small', 'Medium', 'Large', 'X-Large'].map((item) => (
            <span
              key={'size' + item}
              style={style.searchOptions.span}
            >
              <Field
                name='size'
                component={CheckboxArray}
                itemValue={item}
              />
              {' ' + item + ' '}
            </span>
          ))}
        </div>
        <div style={style.searchOptions.block}>
          <h3 style={style.searchOptions.h3}>Good With</h3>
          {['Doesn\'t Matter', 'Kids', 'Dogs', 'Cats'].map((item) => (
            <span
              key={'goodWith' + item}
              style={style.searchOptions.span}
            >
              <Field
                name='goodWith'
                component={CheckboxArray}
                itemValue={item}
              />
              {' ' + item + ' '}
            </span>
          ))}
        </div>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default reduxForm({ form: 'search' })(Radium(SearchForm));
