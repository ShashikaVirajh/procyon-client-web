import { Component, ErrorInfo, ReactNode } from 'react';

import { ErrorPage } from 'pages';
import Logger from 'library/logger.library';

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    Logger.log('Error Boundary', error?.message, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) return <ErrorPage />;
    return this.props.children;
  }
}

interface State {
  hasError: boolean;
}

interface Props {
  children?: ReactNode;
}

export default ErrorBoundary;
