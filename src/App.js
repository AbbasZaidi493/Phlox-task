import React, { Component } from 'react';
import Signin from  './components/signin/signin';
import RouteComponent from './components/route/route';
import { withRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.location.pathname === "/" ? 
         <Signin /> :
         <RouteComponent /> }
      </div>
    );
  }
}

export default withRouter(App);