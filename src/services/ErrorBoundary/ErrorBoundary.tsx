import React, { Component, ErrorInfo } from 'react';

export class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    const errorElement = (
      <h1>
        An error has occurred.
    </h1>
    );

    return hasError ? errorElement : children;
  }
}