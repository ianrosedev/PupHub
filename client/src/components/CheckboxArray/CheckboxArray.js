import React, { Component } from 'react';
import _without from 'lodash/without';

class CheckboxArray extends Component {
  onChange = (e) => {
    const { input, itemValue } = this.props;
    const oldValues = input.value || [];
    let newValues = _without(oldValues, itemValue);

    if (e.target.checked) {
      newValues = [...oldValues, itemValue];
    }

    input.onChange(newValues);
  }

  render() {
    const { input, itemValue } = this.props;

    return (
      <input
        type='checkbox'
        checked={input.value.includes(itemValue)}
        onChange={this.onChange}
      />
    );
  }
}

export default CheckboxArray;
