import { Component } from "react";

export default class ErrorHandeling extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError:false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError:true });
  }

  render() {
      if(this.state.hasError)
      {
          return <h1>Internal Error</h1>
      }
      return this.props.children;
    }
}