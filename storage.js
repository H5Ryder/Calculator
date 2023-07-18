
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

    let val = this.op === "" ? this.a : this.b; //select if we need a or b to add numbers on 

    if (num === 10 && val.includes(10)) {  //check if we have "." already and ignore adding another
      return;
    }

    if (num === 0 && val.length < 1) {
      return;
    }

    val.length < 9 ? val.push(num) : null;

    if (this.op===""){this.a=val;} else {this.b=val;} //inserts new val to a or b



  },

  delete: function(){
    this.op === "" ? this.a.pop() : this.b.pop();
    console.log(`this is a: ${this.a}`);

  },

  dispCurrent: function(){
    if (this.op ==="") {
      console.log(`help: ${this.a}`);
      return arrayToString(this.a);
    } else {
      return arrayToString(this.b);
    }
  },

  dispHistory: function(){
    if (this.op ==="") {
      return "";
    } else if(this.b !== []) {
      return arrayToString(this.a) + this.op + arrayToString(this.b);


    } else {
      return arrayToString(this.a) + this.op;
    }


  },

  clear: function(){
    this.a = [];
    this.b = [];
    this.op = ""
 
  },

  selectOp: function(key){
    this.op = key;
    console.log(`This is op: ${key}`);

  },


  check: function(){
    console.log(`a[]: ${this.a}  |  operator: ${this.op}  |  b[]: ${this.b}`);
    console.log(`a: ${arrayToString(this.a)} | b: ${arrayToString(this.b)}`)
  },

  calculate: function(){
    let first = arrayToNum(this.a);
    let second = arrayToNum(this.b);

    let result = operate(this.op,first,second);
    console.log(`Yeet ${result}`);
    return numToArray(result);
    //console.log(`The asnwer is => ${result}`);

  },

  convert: function(){
    return numToArray(1);

  },

  str: function(num){
    return convertToString(num);
  }

  

}

















//MATH OPERATIONS

function numToArray(num) {

  let arr = num.toString().split('');
  let numArr = [];

  for(let i = 0; i< arr.length; i++){
    //write a switch statement

    switch (arr[i]) {
      case "0":
        numArr.push(0);
       break;
      case "1":
        numArr.push(1);
        break;
      case "2":
        numArr.push(2);
        break;

      case "3":
        numArr.push(3);
        break;

      case "4":
        numArr.push(4);
        break;
      case "5":
        numArr.push(5);
        break;

      case "6":
        numArr.push(6);
        break;

      case "7":
        numArr.push(7);
        break;

      case "8":
        numArr.push(8);
        break;

        case "9":
          numArr.push(9);
          break;

          case ".":
            numArr.push(10);
            break;
      default:
        console.log("Invalid");

  }


}

return numArr;

}


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

    let result = roundTo(answer, 2);
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

  console.log(`This map is fucked: ${arr}`);
  
  arr = arr.map((element) => (element === 10 ? "." : element.toString()));
    return arr.reduce((sum, current) => sum + current, "");
  

}
