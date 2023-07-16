
//DISPLAY
export function lowerDisplay(num) {
    const lowerDisplay = document.querySelector('#lowerDisplay');
    lowerDisplay.innerHTML = num;
  }
  
export function higherDisplay(num) {
    const higherDisplay = document.querySelector('#higherDisplay');
    higherDisplay.innerHTML = num;
  }

//Memory and Math function Caller (The brains)
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
        : this.op === "*"
        ? multiply(this.a, this.b)
        : this.op === "/"
        ? divide(this.a, this.b)
        : undefined;

    this.result = roundTo(answer, 2);
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
