import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CheckboxArray from '../CheckboxArray/CheckboxArray';
import SearchBarInput from '../SearchBarInput/SearchBarInput';
import Radium from 'radium';
import colors from '../../media/styles/colors';
import sizes from '../../media/styles/sizes';

const SearchForm = ({ handleSubmit }) => {
  const style = {
    base: {
      float: 'left',
      width: '55%',
      marginRight: '5vw',
      [`@media (max-width: ${sizes.medium})`]: {
        float: 'none',
        width: '100%'
      },
    },
    searchBar: {
      display: 'flex',
      border: `1px solid ${colors.secondary}`,
      borderRadius: 4,
      i: {
        backgroundColor: colors.secondary,
        padding: '8px 8px 10px 8px',
        color: 'white'
      },
      button: {
        backgroundColor: colors.secondary,
        width: 100,
        border: 0,
        borderRadius: 0,
        padding: 0,
        color: 'white',
        cursor: 'pointer'
      }
    },
    searchOptions: {
      display: 'flex',
      alignItems: 'flex-start',
      [`@media (max-width: ${sizes.small})`]: {
        flexDirection: 'column'
      },
      block: {
        margin: '2vh 5vw 2vh 0',
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
      <div style={style.searchBar}>
        <i
          style={style.searchBar.i}
          className='fa fa-search'
          aria-hidden='true'
        >
        </i>
        <Field
          name='location'
          component={SearchBarInput}
        />
        <button
          style={style.searchBar.button}
          type='submit'
        >
          Submit
        </button>
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
          {['Show All', 'Kids', 'Dogs', 'Cats'].map((item) => (
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
    </form>
  );
};

export default reduxForm({ form: 'search' })(Radium(SearchForm));
