import React from "react";
import { Error } from "components";

export class ErrorBoundary extends React.Component<any, any> {
  state = {
    error: null,
  };

  componentDidCatch(error: any, info: any) {
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return <Error error={this.state.error} />;
    }

    return this.props.children;
  }
}
