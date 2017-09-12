import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "0",
      operand1: null,
      operand2: null,
      operation: null,
      waitingForOperand: false,
    }

    this.addDigit = this.addDigit.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.addDot = this.addDot.bind(this);
    this.toggleSign = this.toggleSign.bind(this);
    this.calculatePercent = this.calculatePercent.bind(this);
    this.addOperationAddition = this.addOperationAddition.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
  }

  calculateResult() {
    const operand1 = this.state.operand1;
    const operand2 = parseFloat(this.state.display);
    const display = (operand2 != null) ? operand1 + operand2 : operand1;
    this.setState({ display, operand1: display, operand2: null, operation: null });
  }

  addOperationAddition() {
    const operand1 = parseFloat(this.state.display);
    this.setState({ operand1, operation: "+", waitingForOperand: true });
  }

  calculatePercent() {
    const { display } = this.state;
    this.setState({ display: parseFloat(parseFloat(display) / 100)});
  }

  addDot() {
    const { display } = this.state;
    if(display.indexOf(".") === -1) {
      this.setState({ display: display + "."});
    }
  }

  toggleSign() {
    const { display } = this.state;
    if(parseFloat(display) > 0) {
      this.setState({ display: "-"+display });
    } else if (parseFloat(display) < 0){
      this.setState({ display: display.substr(1) });
    }
  }

  addDigit(e) {
    const value = e.target.innerHTML; 
    let display = "";
    let waitingForOperand = this.state.waitingForOperand;
    let operand2 = this.state.operand2;
    if(this.state.waitingForOperand) {
      display = value;
      waitingForOperand = false;
      operand2 = value;
    } else {
      display = (this.state.display === "0") ? value : this.state.display += value;
      operand2 = (operand2) ? this.state.display : null;
    }
    this.setState({display, waitingForOperand, operand2});
  }

  clearDisplay(e) {
    this.setState({ display: "0", operand1: null,
                    operand2: null, operation: null,
                    waitingForOperand: false, });
  }

  render() {
    return(
      <div className="calc-container">
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <div className="calc-display">
          {this.state.display}
        </div>

        <div className="calc-row">
          <button className="functions" onClick={this.clearDisplay}>C</button>
          <button className="functions" onClick={this.toggleSign}>+/-</button>
          <button className="functions" onClick={this.calculatePercent}>%</button>
          <button className="operations" onClick={this.addDigit}>/</button>
        </div>

        <div className="calc-row">
          <button className="" onClick={this.addDigit}>7</button>
          <button className="" onClick={this.addDigit}>8</button>
          <button className="" onClick={this.addDigit}>9</button>
          <button className="operations" onClick={this.addDigit}>*</button>
        </div>

        <div className="calc-row">
          <button className="" onClick={this.addDigit}>4</button>
          <button className="" onClick={this.addDigit}>5</button>
          <button className="" onClick={this.addDigit}>6</button>
          <button className="operations" onClick={this.addDigit}>-</button>
        </div>

        <div className="calc-row">
          <button className="" onClick={this.addDigit}>1</button>
          <button className="" onClick={this.addDigit}>2</button>
          <button className="" onClick={this.addDigit}>3</button>
          <button className="operations" onClick={this.addOperationAddition}>+</button>
        </div>

        <div className="calc-row">
          <button className="" onClick={this.addDigit}>0</button>
          <button className="" onClick={this.addDigit}></button>
          <button className="" onClick={this.addDot}>.</button>
          <button className="operations" onClick={this.calculateResult}>=</button>
        </div>

      </div>
    );
  }
}

export default Calculator;
