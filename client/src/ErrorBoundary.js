import React from 'react';
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null

    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error,errorInfo);
  }

  render() {

    if (this.state.hasError) {
     return (
       <>
       <h1>Something went wrong .... please login again</h1>
       <h3>1. Enter your mouse into the website url/address.</h3>
       <h3>2. Delete just the part that says '/main'.</h3>
       <h3>3. Add instead this '/login'.</h3>
       </>
     )

   }

   return this.props.children;
  }
}

export default ErrorBoundary;
// window.history.go(-1)
