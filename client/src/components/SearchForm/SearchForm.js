import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector, Field } from 'redux-form';
import { required } from '../../helpers/formValidation/formValidation';
import CheckboxArray from '../CheckboxArray/CheckboxArray';
import SearchBar from '../SearchBar/SearchBar';
import Radium from 'radium';
import colors from '../../media/styles/colors';
import sizes from '../../media/styles/sizes';

let SearchForm = ({ handleSubmit, sex, age, size, goodWith }) => {
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
    searchOptions: {
      display: 'flex',
      alignItems: 'flex-start',
      [`@media (max-width: ${sizes.small})`]: {
        flexDirection: 'column'
      },
      marginTop: 5,
      block: {
        margin: '2vh 5vw 2vh 0',
        [`@media (max-width: ${sizes.small})`]: {
          margin: '1vh 1vw'
        },
        padding: 5
      },
      h3: {
        display: 'block',
        textDecoration: 'underline',
        margin: '0 0 5px 0',
        padding: 0
      },
      span: {
        display: 'block',
        marginBottom: 5
      }
    },
    error: {
      border: {
        border: `1px solid ${colors.warning}`,
        borderRadius: 5
      },
      text: {
        display:'block',
        padding: '4px 0',
        color: colors.warning,
        fontSize: 18
      }
    }
  };

  return (
    <form
      style={style.base}
      onSubmit={handleSubmit}
    >
      <Field
        name='location'
        component={SearchBar}
        validate={required}
        isDisabled={
          (sex && sex.length === 0) ||
          (age && age.length === 0) ||
          (size && size.length === 0) ||
          (goodWith && goodWith.length === 0)
        }
      />
      <div style={style.searchOptions}>
        <div
          style={(sex && sex.length > 0) ?
            style.searchOptions.block :
            {
              ...style.searchOptions.block,
              ...style.error.border
            }
          }
        >
          <h3 style={style.searchOptions.h3}>Sex</h3>
          {['Male', 'Female'].map((item) => (
            <span
              key={'sex' + item}
              style={style.searchOptions.span}
            >
              <Field
                name='sex'
                component={CheckboxArray}
                itemValue={item}
              />
              {' ' + item + ' '}
            </span>
          ))}
          <span
            style={(sex && sex.length > 0) ?
              { display: 'none' } :
              style.error.text
            }
          >
            Required Field!
          </span>
        </div>
        <div
          style={(age && age.length > 0) ?
            style.searchOptions.block :
            {
              ...style.searchOptions.block,
              ...style.error.border
            }
          }
        >
          <h3 style={style.searchOptions.h3}>Age</h3>
          {['Baby', 'Young', 'Adult', 'Senior'].map((item) => (
            <span
              key={'age' + item}
              style={style.searchOptions.span}
            >
              <Field
                name='age'
                component={CheckboxArray}
                itemValue={item}
              />
              {' ' + item + ' '}
            </span>
          ))}
          <span
            style={(age && age.length > 0) ?
              { display: 'none' } :
              style.error.text
            }
          >
            Required Field!
          </span>
        </div>
        <div
          style={(size && size.length > 0) ?
            style.searchOptions.block :
            {
              ...style.searchOptions.block,
              ...style.error.border
            }
          }
        >
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
          <span
            style={(size && size.length > 0) ?
              { display: 'none' } :
              style.error.text
            }
          >
            Required Field!
          </span>
        </div>
        <div
          style={(goodWith && goodWith.length > 0) ?
            style.searchOptions.block :
            {
              ...style.searchOptions.block,
              ...style.error.border
            }
          }
        >
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
          <span
            style={(goodWith && goodWith.length > 0) ?
              { display: 'none' } :
              style.error.text
            }
          >
            Required Field!
          </span>
        </div>
      </div>
    </form>
  );
};

const selector = formValueSelector('searchForm');
SearchForm = reduxForm({ form: 'searchForm' })(Radium(SearchForm));

SearchForm = connect((state) => {
  const { sex, age, size, goodWith } = selector(state, 'sex', 'age', 'size', 'goodWith');

  return {
    sex,
    age,
    size,
    goodWith
  };
})(SearchForm);

export default SearchForm;
