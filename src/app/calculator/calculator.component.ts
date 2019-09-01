import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  waitingForSecondOperand: boolean = false;
  expression: string;
  result: string = '0';

  constructor() { }

  calculate(): void {
    if (this.expression != null) {
      this.expression += this.result;
      this.result = eval(this.expression);
      this.expression = null;
    }
  }

  reset(): void {
    this.result = '0';
    this.expression = null;
  }

  addOperator(operand: string): void {

    // if this is not the first operation
    if (this.expression != null) {
      this.expression += this.result;
      this.result = eval(this.expression);
    }

    this.expression = this.result + operand;
    this.waitingForSecondOperand = true;

  }

  display(val: string): void {
    if (this.waitingForSecondOperand) {
      if (val === '.') {
        this.result = '0.';
      } else {
        this.result = val;
      }

      this.waitingForSecondOperand = false;
    } else {
      if (val === '.') {
        if (!this.result.includes('.')) {
          this.result += '.';
        }
      } else {
        if (this.result === '0') {
          this.result = val;
        } else {
          this.result += val;
        }
      }

    }
  }
}