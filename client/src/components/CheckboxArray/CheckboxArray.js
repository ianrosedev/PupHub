import React from 'react';

const CheckboxArray = ({ input, itemValue }) => {
  const onChange = (e) => {
    let oldValues;
    let newValues;

    if (itemValue === 'Show All') {
      oldValues = [];
      newValues = ['Show All'];
    } else {
      oldValues = input.value.filter(v => v !== 'Show All') || [];
      newValues = oldValues.filter(v => v !== itemValue);
    }

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
