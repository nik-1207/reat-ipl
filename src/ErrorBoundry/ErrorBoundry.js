import React, { Component } from 'react'
import AllTeams from "../Pages/AllTeams"

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.data=props.data
        this.children=[props.children];
        this.state = { hasError: false };
      }
    
    static getDerivedStateFromError(error) {
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
          console.log(error)
      }
      render() {
        if (this.data) {
            return <AllTeams/>
        }
        return <h1>waiting</h1>;
    }
}
