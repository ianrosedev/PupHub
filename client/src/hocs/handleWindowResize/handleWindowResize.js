import React, { Component } from 'react';
import { getDisplayName } from '../../helpers/getDisplayName/getDisplayName';
import { throttle } from 'lodash';

const handleWindowResize = (WrappedComponent) => {
  return class HandleWindowResize extends Component {
    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }

    handleResize = throttle(() => this.forceUpdate(), 50);

    render() {
      HandleWindowResize.displayName = `HandleWindowResize(${getDisplayName(WrappedComponent)})`;

      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
};

export default handleWindowResize;
