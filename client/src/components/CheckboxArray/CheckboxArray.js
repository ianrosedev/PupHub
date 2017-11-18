import React from 'react';
import _without from 'lodash/without';

const CheckboxArray = ({ input, itemValue }) => {
  const onChange = (e) => {
    const oldValues = input.value || [];
    let newValues = _without(oldValues, itemValue);

    if (e.target.checked) {
      newValues = [...oldValues, itemValue];
    }
    input.onChange(newValues);
  };

  return (
    <input
      type='checkbox'
      checked={input.value.includes(itemValue)}
      onChange={onChange}
    />
  );
};

export default CheckboxArray;
