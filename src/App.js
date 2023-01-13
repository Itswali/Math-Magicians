/* eslint-disable react/prefer-stateless-function */
import './style/style.scss';
// import React, { Component } from 'react';
import React from 'react';
import Calculator from './components/calculator';
import './components/logic/calculate';
import './components/logic/operate';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
