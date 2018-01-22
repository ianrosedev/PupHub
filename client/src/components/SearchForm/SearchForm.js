import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field, propTypes as reduxFormPropTypes } from 'redux-form';
import { searchFormValidation } from '../../helpers/searchFormValidation/searchFormValidation';
import CheckboxArray from '../CheckboxArray/CheckboxArray';
import SearchBar from '../SearchBar/SearchBar';
import Radium from 'radium';
import colors from '../../media/styles/colors';
import sizes from '../../media/styles/sizes';

const propTypes = {
  setMapOptions: PropTypes.func.isRequired,
  setActivePage: PropTypes.func.isRequired,
  searchDataFetch: PropTypes.func.isRequired,
  ...reduxFormPropTypes
};

export const SearchForm = ({
  sex,
  age,
  goodWith,
  distance,
  setMapOptions,
  setActivePage,
  searchDataFetch
}) => {
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

  const handleFieldChange = () => {
    setActivePage(1);
    searchDataFetch();
  };

  return (
    <form style={style.base}>
      <Field
        name='location'
        component={SearchBar}
        validate={searchFormValidation}
        isDisabled={
          (sex && sex.length === 0) ||
          (age && age.length === 0) ||
          (goodWith && goodWith.length === 0)
        }
        distance={distance}
        setMapOptions={setMapOptions}
        setActivePage={setActivePage}
        searchDataFetch={searchDataFetch}
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
          onChange={handleFieldChange}
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
          onChange={handleFieldChange}
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
          style={(goodWith && goodWith.length > 0) ?
            style.searchOptions.block :
            {
              ...style.searchOptions.block,
              ...style.error.border
            }
          }
          onChange={handleFieldChange}
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
        <div
          style={style.searchOptions.block}
          onChange={handleFieldChange}
        >
          <h3 style={style.searchOptions.h3}>Max Distance</h3>
          {['10', '25', '50', '100'].map((item) => (
            <span
              key={'distance' + item}
              style={style.searchOptions.span}
            >
              <Field
                name='distance'
                component='input'
                type='radio'
                value={item}
                onChange={() => setMapOptions({
                  zoom: (
                    item === '10' ? 10 :
                    item === '25' ? 9 :
                    item === '50' ? 8 :
                    7
                  ),
                  isMarkerShown: true
                })}
              />
              {' ' + item + ' Miles '}
            </span>
          ))}
        </div>
      </div>
    </form>
  );
};

SearchForm.propTypes = propTypes;

export default reduxForm({ form: 'searchForm' })(Radium(SearchForm));
