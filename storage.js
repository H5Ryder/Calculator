
//DISPLAY



export const calcDisplay = {

  lowerDisplay(num) {
    const lowerDisplay = document.querySelector('#lowerDisplay');
    lowerDisplay.innerHTML = num;
  },
  
  higherDisplay(num) {
    const higherDisplay = document.querySelector('#higherDisplay');
    higherDisplay.innerHTML = num;
  },

  clear(){
    const higherDisplay = document.querySelector('#higherDisplay');
    higherDisplay.innerHTML = "0";

    const lowerDisplay = document.querySelector('#lowerDisplay');
    lowerDisplay.innerHTML = "0";
  },

};


//MEMORY -  and Math function Caller (The brains)
export const calcMem = {
  //Calculator Memory Class - holds the data
  a: 0,
  b: undefined,
  result: undefined,
  op: undefined, //operator (=,-,%,*)

  operate: function () {
    let answer =
      this.op === "+"
        ? add(this.a, this.b)
        : this.op === "-"
        ? subtract(this.a, this.b)
        : this.op === "x"
        ? multiply(this.a, this.b)
        : this.op === "%"
        ? divide(this.a, this.b)
        : undefined;

    this.result = roundTo(answer, 2);
  },

  clear: function(){
    this.a = 0;
    this.b = undefined;
    this.result = undefined;
    this.op = undefined;

  },

  addDigit: function(num) {
    if ((this.op === undefined && this.b > 100000) || this.a > 100000) {
      return;
    }
  
    if (this.op === undefined) {
      this.a = this.a * 10 + num;
    } else {
      this.b = this.b * 10 + num;
    }
  },

  removeDigit: function() {
    if (this.op === undefined) {
      this.a = Math.floor(this.a/10);
    } else {
      this.b = Math.floor(this.b/10);
    }
  },

  currentInput: function() {
    if (this.op ===undefined ) {
      return this.a.toString();
    } else {
      return "";
    }
  },

  lastInput: function() {
    if (this.op === undefined) {
      return;
    } else {
      return this.a.toString() + this.op;
    }
  },

  selectOP: function(key){

    this.op =
      key.toString() === "add"
        ? "+"
        : key.toString() === "subtract"
        ? "-"
        : key.toString() === "multiply"
        ? "x"
        : key.toString() === "divide"
        ? "%"
        : undefined;

  },
  

};

//MATH OPERATIONS
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//ROUND OPERATION - TWO DECIMAL PLACES
function roundTo(n, place) {
  return +(Math.round(n + "e+" + place) + "e-" + place);
}
