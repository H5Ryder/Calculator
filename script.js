// main.js
import { logic, calcDisplay } from "./storage.js";

calcDisplay.lowerDisplay("0");

//Constraints:
//Limit size of number

//BUTTONS
//Sets buttons 0-9
const numBtn = new Array(9);

for (let i = 0; i < 10; i++) {
  console.log(`Iteration number: ${i}`);

  const itemString = "#" + "b" + i.toString();
  console.log(itemString);

  numBtn[i] = document.querySelector(itemString);
  numBtn[i].addEventListener("click", () => {
    numberButton(i);
  });
}

//Set "."
const dotBtn = document.querySelector("#b");
dotBtn.addEventListener("click", () => {
  dotButton();
});

//Set operators
let opBtn = {
  add: document.querySelector("#add"),
  subtract: document.querySelector("#subtract"),
  multiply: document.querySelector("#multiply"),
  divide: document.querySelector("#divide"),
};

for (const key in opBtn) {
  // console.log(key, opBtn[key]);

  opBtn[key].addEventListener("click", (event) => {
    let operator = key;
    if (key === "add") {
      operator = "+";
      console.log("it works");
    }
    if (key === "subtract") {
      operator = "-";
      console.log("it works");
    }
    if (key === "multiply") {
      operator = "x";
      console.log("it works");
    }
    if (key === "divide") {
      operator = "%";
      console.log("it works");
    }

    opButton(operator);
  });
}

//Set "="
const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", () => {
  equalButton();
});

//Set Clear
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  clearButton();
});

//Set Delete
const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", () => {
  deleteButton();
});








//Function Call outs





function numberButton(i) {
  logic.insert(i);
  calcDisplay.lowerDisplay(logic.dispCurrent());
  logic.check();
}

function dotButton() {
  logic.insert(10);
  calcDisplay.lowerDisplay(logic.dispCurrent());

  logic.check();
}

function opButton(key) {
  if (logic.op === ""){
  logic.selectOp(key);
  calcDisplay.lowerDisplay(logic.dispCurrent());
  calcDisplay.higherDisplay(logic.dispHistory());

  logic.check();
  } else if (logic.op !== "" && logic.b.length !== 0) {
    logic.a = logic.calculate();
    logic.b = [];
    logic.selectOp(key);
    calcDisplay.higherDisplay(logic.dispHistory());
    calcDisplay.lowerDisplay("");

   // logic.a = 
  }
}

function equalButton() {

  if (logic.op !== "" && logic.b.length !==0){
    calcDisplay.higherDisplay(logic.dispHistory());
    logic.a = logic.calculate();
    logic.b = [];
    logic.op = "";
    calcDisplay.lowerDisplay(logic.dispCurrent());
  }




}

function clearButton() {
  logic.clear();
  calcDisplay.lowerDisplay("0");
  calcDisplay.higherDisplay("0");

  logic.check();
}

function deleteButton() {
  logic.delete();
  calcDisplay.lowerDisplay(logic.dispCurrent());

  logic.check();
}
