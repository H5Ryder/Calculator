// main.js
import {calcMem, lowerDisplay, higherDisplay } from './storage.js';

calcMem.a = 2;
calcMem.b = 0.3215;
calcMem.op = "*";
calcMem.operate();

console.log(calcMem.result);



lowerDisplay(60);
higherDisplay(70);

//Constraints:
//Limit size of number


//Sets buttons 0-9
const numBtn = new Array(9);

for (let i = 0; i < 10; i++) {
  
  console.log(`Iteration number: ${i}`);

  const itemString = "#" + "b"+ i.toString();
  console.log(itemString);

  numBtn[i] = document.querySelector(itemString);
  numBtn[i].addEventListener('click', () => {
    alert(itemString);
  });
}

//Set "."
const dotBtn = document.querySelector("#b");
dotBtn.addEventListener('click', () => {
  alert(".");
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
    alert(`${key}`);
  });

}

//Set "="
const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener('click', () => {
  alert("=");
});

//Set Clear
const clearBtn = document.querySelector("#clear");
equalBtn.addEventListener('click', () => {
  alert("clear");
});

//Set Delete
const deleteBtn = document.querySelector("#delete");
equalBtn.addEventListener('click', () => {
  alert("delete");
});



