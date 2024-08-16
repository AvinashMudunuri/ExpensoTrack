// ErrorBoundary.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      // You can render any custom fallback UI
      return <h2>Something went wrong.</h2>;
    }

    return children;
  }
}

ErrorBoundary.defaultProps = {
  children: null,
};
ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
