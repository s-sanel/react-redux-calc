import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "0",
    }
  }

  render() {
    return(
      <div className="calc-container">

        <div className="calc-display">
          {this.state.display}
        </div>

        <div className="calc-row">
          <button className="">C</button>
          <button className="">+/-</button>
          <button className="">%</button>
          <button className="">/</button>
        </div>

        <div className="calc-row">
          <button className="">7</button>
          <button className="">8</button>
          <button className="">9</button>
          <button className="">*</button>
        </div>

        <div className="calc-row">
          <button className="">4</button>
          <button className="">5</button>
          <button className="">6</button>
          <button className="">-</button>
        </div>

        <div className="calc-row">
          <button className="">1</button>
          <button className="">2</button>
          <button className="">3</button>
          <button className="">+</button>
        </div>

        <div className="calc-row">
          <button className="">0</button>
          <button className=""></button>
          <button className="">.</button>
          <button className="">=</button>
        </div>

      </div>
    );
  }
}

export default Calculator;
