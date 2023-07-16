// main.js
import {calcMem, calcDisplay } from './storage.js';

calcDisplay.lowerDisplay("0");


//Constraints:
//Limit size of number




//BUTTONS
//Sets buttons 0-9
const numBtn = new Array(9);

for (let i = 0; i < 10; i++) {
  
  console.log(`Iteration number: ${i}`);

  const itemString = "#" + "b"+ i.toString();
  console.log(itemString);

  numBtn[i] = document.querySelector(itemString);
  numBtn[i].addEventListener('click', () => {

    numberButton(i);
  });
}

//Set "."
const dotBtn = document.querySelector("#b");
dotBtn.addEventListener('click', () => {
  dotButton();
});



//Set operators
let opBtn = {
  add: document.querySelector("#add"),
  subtract: document.querySelector("#subtract"),
  multiply: document.querySelector("#multiply"),
  divide: document.querySelector("#divide")
};

for (const key in opBtn) {
  console.log(key, opBtn[key]);

  opBtn[key].addEventListener('click', () => {
    opButton(key);
  });

}

//Set "="
const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener('click', () => {
  equalButton();
});

//Set Clear
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener('click', () => {

  clearButton();
  
});

//Set Delete
const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener('click', () => {
  deleteButton();
});
 





function numberButton(i) {
    calcMem.addDigit(i);
    calcDisplay.lowerDisplay(calcMem.currentInput());
}

function dotButton(){

}

function opButton(key) {
  calcDisplay.op = calcMem.selectOP(key);
  calcDisplay.higherDisplay(calcMem.lastInput());
  calcDisplay.lowerDisplay(calcMem.currentInput());



}

function equalButton(){

}

function clearButton(){
  calcDisplay.clear();
  calcMem.clear();

}


function deleteButton() {
  calcMem.removeDigit();
  calcDisplay.lowerDisplay(calcMem.currentInput())


}