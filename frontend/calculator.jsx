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
    this.addOperationSubtraction = this.addOperationSubtraction.bind(this);
    this.addOperationDivision = this.addOperationDivision.bind(this);
    this.addOperationMultiplication = this.addOperationMultiplication.bind(this);
    this.calculateResult = this.calculateResult.bind(this);
  }

  calculateResult() {
    const operations = {
      "+" : (operand1, operand2) => parseFloat(operand1) + parseFloat(operand2),
      "-" : (operand1, operand2) => parseFloat(operand1) - parseFloat(operand2),
      "*" : (operand1, operand2) => parseFloat(operand1) * parseFloat(operand2),
      "/" : (operand1, operand2) => parseFloat(operand1) / parseFloat(operand2)
    }

    const operand1 = this.state.operand1;
    let operand2 = this.state.operand2;
    if(this.state.waitingForOperand) {
      operand2 = (this.state.operand2 === null)? operand1 : this.state.operand2;
    } else {
      operand2 = this.state.operand2;
    }
    const display = operations[this.state.operation](operand1, operand2);
    this.setState({ display, operand1: display, operand2 });
  }

  addOperationAddition() {
    const operand1 = (this.state.operand1===null)? parseFloat(this.state.display) : this.state.operand1;
    const operand2 = operand1;
    this.setState({ operand1, operand2, operation: "+", waitingForOperand: true });
  }
  addOperationSubtraction() {
    const operand1 = (this.state.operand1===null)? parseFloat(this.state.display) : this.state.operand1;
    const operand2 = operand1;
    this.setState({ operand1, operand2, operation: "-", waitingForOperand: true });
  }

  addOperationDivision() {
    const operand1 = (this.state.operand1===null)? parseFloat(this.state.display) : this.state.operand1;
    const operand2 = operand1;
    this.setState({ operand1, operand2, operation: "/", waitingForOperand: true });
  }

  addOperationMultiplication() {
    const operand1 = (this.state.operand1===null)? parseFloat(this.state.display) : this.state.operand1;
    const operand2 = operand1;
    this.setState({ operand1, operand2, operation: "*", waitingForOperand: true });
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
    const { display, operand1 } = this.state;
    let operand1Val = null;
    if (operand1 !== null){
        operand1Val = parseFloat(-operand1);
    }
    if(parseFloat(display) > 0) {
      this.setState({ display: "-"+display, operand1: operand1Val});
    } else if (parseFloat(display) < 0){
      this.setState({ display: display.substr(1), operand1: operand1Val });
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
      display = (this.state.display == "0") ? value : this.state.display += value;
      operand2 = (operand2) ? this.state.display : null;
    }
    this.setState({display, waitingForOperand, operand2});
  }

  clearDisplay(e) {
    this.setState({ display: "0", operand1: null, operand2: null, operation: null, waitingForOperand: false, });
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
          <button className="operations" onClick={this.addOperationDivision}>/</button>
        </div>

        <div className="calc-row">
          <button className="" onClick={this.addDigit}>7</button>
          <button className="" onClick={this.addDigit}>8</button>
          <button className="" onClick={this.addDigit}>9</button>
          <button className="operations" onClick={this.addOperationMultiplication}>*</button>
        </div>

        <div className="calc-row">
          <button className="" onClick={this.addDigit}>4</button>
          <button className="" onClick={this.addDigit}>5</button>
          <button className="" onClick={this.addDigit}>6</button>
          <button className="operations" onClick={this.addOperationSubtraction}>-</button>
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
