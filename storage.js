
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


//LOGIC
export const logic = {
  a: [],
  b: [],
  op: "",

  insert: function(num){

    let val = this.op === "" ? this.a : this.b;

    val.length < 6 ? val.push(num) : null;

    if (this.op===""){this.a=val;} else {this.b=val;}

    console.log(`this is a: ${val}`);


  },

  delete: function(){
    this.op === "" ? this.a.pop() : this.b.pop();
    console.log(`this is a: ${this.a}`);

  },

  disp: function(){
    //return this.op === "" ? arrayToString(this.a) : arrayToString(this.b);
    console.log('hi');
    if (this.op ==="") {
      return arrayToString(this.a);
    }
  }

  

}

















//MATH OPERATIONS

function operate(op,a,b) {
  let answer =
      op === "+"
      ? add(a,b)
      : op === "-"
      ? subtract(a, b)
      : op === "x"
      ? multiply(a,b)
      : op === "%"
      ? divide(a,b)
      : undefined;

    result = roundTo(answer, 2);
    return result;
}



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




function arrayToNum(arr){

  //find the "00"
  const splitPoint = arr.indexOf(10);

  if (splitPoint < 0) {
    let aInt = arr.reduce((sum, current) => sum*10 + current, 0);
    return aInt;

  } else {
  //split into integerArr and decimalArr
  let arrInt = arr.slice(0, splitPoint);
  let arrDec = arr.slice(splitPoint+1);
  //output aInt from integerArr
  let aInt = arrInt.reduce((sum, current) => sum*10 + current, 0);
  //output aDec from decimalArr
  let aDec = arrDec.reduce((sum, current) => sum*10+current, 0);
  aDec = aDec*(0.1**arrDec.length);
  aDec = roundTo(aDec,arrDec.length);
  //Sum both values
  console.log(`Output: ${aInt+aDec}`);

  return (aInt + aDec);
  }
}


function arrayToString(arr) {

  const index = arr.indexOf(10)+1;

  if (index === arr.length) {

    return arrayToNum(arr).toString() + ".";

  } else {

    return arrayToNum(arr).toString();

  }

 

}