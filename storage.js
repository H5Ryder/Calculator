
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
    this.a = [];
    this.aDecimal = 0;
    this.b = undefined;
    this.result = undefined;
    this.op = undefined;
    this.decimal = false;

  },

  addDigit: function(num) {

    //If number is maxed out
    if ((this.op === undefined && this.b > 100000) || this.a > 100000) {
      return;
    }



    if (this.op === undefined) {
      this.a = this.a*10 + num;
    } else {
      if (this.b === undefined) { this.b = 0;}
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

      if (this.b === undefined) { return "";}
      return this.b.toString();
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

  arrayToNum: function(arr){

    //find the "00"
    const splitPoint = arr.indexOf(10);
    console.log(`Split point: ${splitPoint}`);
  
    //split into integerArr and decimalArr
    let arrInt = arr.slice(0, splitPoint);
    console.log(`ArrInt: ${arrInt}`);
    let arrDec = arr.slice(splitPoint+1);
    console.log(`arrDec: ${arrDec}`);
    //output aInt from integerArr
    let aInt = arrInt.reduce((sum, current) => sum*10 + current, 0);
    console.log(`aInt: ${aInt}`);
    //output aDec from decimalArr
    let aDec = arrDec.reduce((sum, current) => sum*10+current, 0);
    
    aDec = aDec*(0.1**arrDec.length);
    aDec = roundTo(aDec,arrDec.length);
    console.log(`aDec2 : ${aDec}`);
    //Sum both values
    return aInt + aDec;
  },

  arrayToString: function(arr) {
    return this.arrayToNum(arr).toString();

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

//ADD A DECIMAL NUMBER
function addNumAfterDot(num, add) {
  const multiplier = 10 ** getDecimalPlaces(num);
  const wholeNum = num * multiplier * 10 + add;
  return wholeNum / (multiplier * 10);
}

//Gives the number of decimal places in a number -> feeds into addNumAfterDot Func
function getDecimalPlaces(num) {
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}

//Checks if a number has a decimal
function hasDecimal(number) {
  return number.toString().includes(".");
}






function arrayToString(){


}