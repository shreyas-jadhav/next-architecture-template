import React from "react";
import ErrorMessage from "./ErrorMessage";
type Props = {
  children: React.ReactNode;
};
export class ErrorBoundary extends React.Component<Props> {
  state: {
    hasError: boolean;
  };
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // log to database if you want
  }
  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }
    return this.props.children;
  }
}
