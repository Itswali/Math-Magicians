import { Component } from 'react';
import calculate from './logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

  buttonClicked = (event) => {
    const btnName = event.target.innerText;
    const answer = calculate(this.state, btnName);
    this.setState(answer);
  };

  render() {
    const { total, sign, next } = this.state;
    return (
      <div className="first">
        <div className="calculator-wrap">
          <div className="calculator-display">
            {total}
            {sign}
            {next}
          </div>
          <div className="calculator-keys">
            <button
              type="button"
              onClick={this.buttonClicked}
              className="all-clear"
              value="all-clear"
            >
              AC
            </button>
            <button
              type="button"
              onClick={this.buttonClicked}
              className="operator"
              value="+/-"
            >
              +/-
            </button>
            <button
              type="button"
              onClick={this.buttonClicked}
              className="operator"
              value="%"
            >
              %
            </button>
            <button
              type="button"
              onClick={this.buttonClicked}
              className="operator"
              value="/"
            >
              &divide;
            </button>
            <button type="button" onClick={this.buttonClicked} value="7">
              7
            </button>
            <button type="button" onClick={this.buttonClicked} value="8">
              8
            </button>
            <button type="button" onClick={this.buttonClicked} value="9">
              9
            </button>
            <button
              type="button"
              onClick={this.buttonClicked}
              className="operator"
              value="x"
            >
              x
            </button>
            <button type="button" onClick={this.buttonClicked} value="4">
              4
            </button>
            <button type="button" onClick={this.buttonClicked} value="5">
              5
            </button>
            <button type="button" onClick={this.buttonClicked} value="6">
              6
            </button>
            <button
              type="button"
              onClick={this.buttonClicked}
              className="operator"
              value="-"
            >
              -
            </button>
            <button type="button" onClick={this.buttonClicked} value="1">
              1
            </button>
            <button type="button" onClick={this.buttonClicked} value="2">
              2
            </button>
            <button type="button" onClick={this.buttonClicked} value="3">
              3
            </button>
            <button
              type="button"
              onClick={this.buttonClicked}
              className="operator"
              value="+"
            >
              +
            </button>
          </div>
          <div className="last-three">
            <button
              type="button"
              onClick={this.buttonClicked}
              className="decimal"
              value="0"
            >
              0
            </button>
            <button type="button" onClick={this.buttonClicked} value=".">
              .
            </button>
            <button
              type="button"
              onClick={this.buttonClicked}
              className="operator"
              value="="
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
