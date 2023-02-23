import React from "react";

export default class MyErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log('Erro capturado:', error, errorInfo);
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Ops! Algo deu errado.</h1>;
      }
      return this.props.children;
    }
  }