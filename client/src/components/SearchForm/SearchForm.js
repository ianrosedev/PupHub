import React from 'react';
import { Field, reduxForm } from 'redux-form';
import CheckboxArray from '../CheckboxArray/CheckboxArray';
import Radium from 'radium';

const SearchForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Location
          <br />
          <Field
            name='location'
            component='input'
            type='text'
          />
        </label>
      </div>
      <div>
        <label>Sex</label>
        <br />
        {['Any', 'Male', 'Female'].map((item) => (
          <label key={'sex' + item}>
            <Field
              name='sex'
              component='input'
              type='radio'
              value={item}
            />
            {' ' + item + ' '}
          </label>
        ))}
      </div>
      <div>
        <label>Size</label>
        <br />
        {['Small', 'Medium', 'Large', 'X-Large'].map((item) => (
          <label key={'size' + item}>
            <Field
              name='size'
              component={CheckboxArray}
              itemValue={item}
            />
            {' ' + item + ' '}
          </label>
        ))}
      </div>
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Radium(reduxForm({ form: 'search' })(SearchForm));
