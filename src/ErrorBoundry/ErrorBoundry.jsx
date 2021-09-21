import React, { Component } from 'react'
import NotFound from "../components/NotFound"
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
            return <NotFound/>
        }
        return this.props.children

    }
}
