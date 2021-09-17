import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
    static getDerivedStateFromError(error) {
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
          console.log(error)
      }
      render() {
        if (this.state.hasError) 
        {
            return <h1>Error </h1>
        }
        return this.props.children

    }
}
