import React, { Component } from 'react';
import { getDisplayName } from '../../helpers/getDisplayName/getDisplayName';

const scrollToTopOnMount = (WrappedComponent) => {
  return class ScrollToTopOnMount extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }

    render () {
      ScrollToTopOnMount.displayName = `ScrollToTopOnMount(${getDisplayName(WrappedComponent)})`;

      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
};

export default scrollToTopOnMount;
