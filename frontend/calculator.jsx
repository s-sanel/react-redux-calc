import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "0",
    }

    this.addDigit = this.addDigit.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }

  addDigit(e) {
    e.preventDefault();
    const value = e.target.innerHTML;      
    console.log(value);
    const display = (this.state.display === "0") ? value : this.state.display += value;
    this.setState({display});
  }

  clearDisplay(e) {
    e.preventDefault();
    this.setState({ display: "0" });
  }

  render() {
    return(
      <div className="calc-container">

        <div className="calc-display">
          {this.state.display}
        </div>

        <div className="calc-row">
          <button className="" onClick={this.clearDisplay}>C</button>
          <button className="" onClick={this.addDigit}>+/-</button>
          <button className="" onClick={this.addDigit}>%</button>
          <button className="" onClick={this.addDigit}>/</button>
        </div>

        <div className="calc-row">
          <button className="" onClick={this.addDigit}>7</button>
          <button className="" onClick={this.addDigit}>8</button>
          <button className="" onClick={this.addDigit}>9</button>
          <button className="" onClick={this.addDigit}>*</button>
        </div>

        <div className="calc-row">
          <button className="" onClick={this.addDigit}>4</button>
          <button className="" onClick={this.addDigit}>5</button>
          <button className="" onClick={this.addDigit}>6</button>
          <button className="" onClick={this.addDigit}>-</button>
        </div>

        <div className="calc-row">
          <button className="" onClick={this.addDigit}>1</button>
          <button className="" onClick={this.addDigit}>2</button>
          <button className="" onClick={this.addDigit}>3</button>
          <button className="" onClick={this.addDigit}>+</button>
        </div>

        <div className="calc-row">
          <button className="" onClick={this.addDigit}>0</button>
          <button className="" onClick={this.addDigit}></button>
          <button className="" onClick={this.addDigit}>.</button>
          <button className="" onClick={this.addDigit}>=</button>
        </div>

      </div>
    );
  }
}

export default Calculator;
