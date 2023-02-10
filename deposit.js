 document.getElementById("submitDeposit").addEventListener("click",function(){
const inputDeposit = getInputValue("inputDeposit");

const previousDeposit = getElementValue("deposit-total");

const newDeposit = previousDeposit + inputDeposit;

setElementValue("deposit-total",newDeposit);

const currentBalence = getElementValue("balance-total");

const newBalance =  currentBalence + inputDeposit;

setElementValue("balance-total",newBalance);
})

function getInputValue(inputId){
   const currentInput = document.getElementById(inputId);
   const currentInputValue= parseFloat(currentInput.value);
currentInput.value = '';
   return currentInputValue;
  
}

function getElementValue(elementId){
   const current = document.getElementById(elementId);
   const currentElementValue= parseFloat(current.innerText);
   return currentElementValue;
}

function setElementValue(element,newValue){
   const textElement = document.getElementById(element);
   textElement.innerText = newValue;
}
