// *** Write your code here***
class Calculator {
    constructor(previousOperandTextElement,currentOperandTextelement){
     this.previousOperandTextElement = previousOperandTextElement
     this.currentOperandTextelement = currentOperandTextelement
     this.clear()
    }


clear( ) {
this.currentOperand = ''
this.previousOperand =''
this.operation = undefined

}

delete( ) {
  
    
}

appendNumber(number){
    if(number === '-'&& this.currentOperand.includes('.'))
    this.currentOperand = this.currentOperand.toString() + number.tostring()

}

chooseOperation(operation)
{
 
}

Compute(){

}
updateDisplay(){
    this.currentOperandTextelement.innerText = this.currentOperand.

}
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationsButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextelement = document.querySelector('[data-current-operand]')

const Calculator = new Calculator (previousOperandTextElement,currentOperandTextelement)

numberButtons.forEach(button =>
{
    button.addEventListener('click',() => 
    {
        Calculator.appendNumber(button.innerText)
        Calculator.updateDisplay()
    })
})