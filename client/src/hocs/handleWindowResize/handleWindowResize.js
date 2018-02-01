import React, { Component } from 'react';
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
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
};

export default handleWindowResize;
