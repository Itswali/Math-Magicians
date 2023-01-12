import './style/style.scss';
import React, { Component } from 'react';
import Calculator from './components/calculator';
import './components/logic/calculate';
import './components/logic/operate';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
