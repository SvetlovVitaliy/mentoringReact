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
    if (this.state.hasError) {
      return (
        <h1>
          An error has occurred.
        </h1>
      );
    }

    return this.props.children;
  }
}