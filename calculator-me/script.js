// class calculator 
class Calculator {
  constructor(previousOperandElement,currentOperandElement){
    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement
    this.clearAll()
  }
 // method untik menghapus tampilan tampilan lada output
  clearAll(){
    this.previousOperand = '';
    this.currentOperand = '';
    this.operation = undefined;
  }
  // method untuk menghapus karakter di index pertama
  delete(){
    this.currentOperand = this.currentOperand.toString().slice(0,-1);
  }
  // menambahkan karakter number pada output
  appendNumber(number){
   // cek apakah tanda titik sudah dimasukkan jika sudah maka keluar dari function
  if (number === "." && this.currentOperand.includes(".")) return  
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  
  choseOperation(operation){
    if (this.currentOperand === "") return
    if(this.previousOperand !== "") {
      this.compute()
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand
    this.currentOperand = ""
  }
  compute(){
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break;
       case '-':
         computation = prev - current
         break;
       case '*':
         computation = prev * current
         break;
       case '÷':
        computation = prev / current
       break;
      default:
       return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }
  getDisplayNumber(number){
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
   
    const decimalDigits = stringNumber.split('.')[1];
    
    const floatNumber = parseFloat(number);
    let displayInteger;
    if (isNaN(integerDigits)) {
      displayInteger = ''
    }else{
      displayInteger = integerDigits.toLocaleString('en',{ maximumFractionDigits:0})
    }
    if(decimalDigits != null) {
       return `${displayInteger}.${decimalDigits}`
    }else{
      return displayInteger
    }
  }
  updateDisplay(){
    this.currentOperandElement.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != undefined) {
     this.previousOperandElement.innerText = `${this.getDisplayNumber(this.previousOperand) + this.operation}`;
    }else {
      this.previousOperandElement.innerText = ''
    }
  }
}
const numberButton = document.querySelectorAll('.number');
const operationButton = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const deleteButton = document.querySelector('#delete');
const allClearButton = document.querySelector('#all-clear');
const previousOperandElement = document.querySelector('#previous-operand');
const currentOperandElement = document.querySelector('#current-operand');

const calculator = new Calculator (previousOperandElement,currentOperandElement);

numberButton.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
operationButton.forEach(button => {
  button.addEventListener("click",(e) => {
    e.preventDefault()
    calculator.choseOperation(button.innerText);
    calculator.updateDisplay();
  });
});
equalsButton.addEventListener("click", (e) => {
  e.preventDefault()
  calculator.compute();
  calculator.updateDisplay();
});
allClearButton.addEventListener("click",(e) => {
  e.preventDefault()
  calculator.clearAll()
  calculator.updateDisplay()
})
deleteButton.addEventListener("click",(e) => {
  e.preventDefault()
  calculator.delete()
  calculator.updateDisplay()
})