import React, { Component } from 'react';

const scrollToTopOnMount = (WrappedComponent) => {
  return class ScrollToTopOnMount extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render () {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
};

export default scrollToTopOnMount;
