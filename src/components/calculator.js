import React, { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [display, newDisplay] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const buttonClicked = (event) => {
    const btnName = event.target.innerText;
    const answer = calculate(display, btnName);
    newDisplay(answer);
  };
  const { total, next, operation } = display;

  return (
    <div>
      <div className="calculator-wrap">
        <div className="calculator-display">
          {total}
          {operation}
          {next}
        </div>
        <div className="calculator-keys">
          <button
            type="button"
            onClick={buttonClicked}
            className="all-clear"
            value="all-clear"
          >
            AC
          </button>
          <button
            type="button"
            onClick={buttonClicked}
            className="operator"
            value="+/-"
          >
            +/-
          </button>
          <button
            type="button"
            onClick={buttonClicked}
            className="operator"
            value="%"
          >
            %
          </button>
          <button
            type="button"
            onClick={buttonClicked}
            className="operator"
            value="/"
          >
            &divide;
          </button>
          <button type="button" onClick={buttonClicked} value="7">
            7
          </button>
          <button type="button" onClick={buttonClicked} value="8">
            8
          </button>
          <button type="button" onClick={buttonClicked} value="9">
            9
          </button>
          <button
            type="button"
            onClick={buttonClicked}
            className="operator"
            value="x"
          >
            x
          </button>
          <button type="button" onClick={buttonClicked} value="4">
            4
          </button>
          <button type="button" onClick={buttonClicked} value="5">
            5
          </button>
          <button type="button" onClick={buttonClicked} value="6">
            6
          </button>
          <button
            type="button"
            onClick={buttonClicked}
            className="operator"
            value="-"
          >
            -
          </button>
          <button type="button" onClick={buttonClicked} value="1">
            1
          </button>
          <button type="button" onClick={buttonClicked} value="2">
            2
          </button>
          <button type="button" onClick={buttonClicked} value="3">
            3
          </button>
          <button
            type="button"
            onClick={buttonClicked}
            className="operator"
            value="+"
          >
            +
          </button>
        </div>
        <div className="last-three">
          <button
            type="button"
            onClick={buttonClicked}
            className="decimal"
            value="0"
          >
            0
          </button>
          <button type="button" onClick={buttonClicked} value=".">
            .
          </button>
          <button
            type="button"
            onClick={buttonClicked}
            className="operator"
            value="="
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
