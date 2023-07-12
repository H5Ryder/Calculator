//MATH OPERATIONS

const add = (a, b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;


function operate(a, b, type) {
  let result = (type === "+") ? add(a,b) :
  (type === "-") ? subtract(a,b) :
  (type === "*") ? multiply(a,b) :
  (type === "/") ? divide(a,b):
  undefined;
  
  return roundTo(result,2);
;
}

function roundTo(n, place) {    
    return +(Math.round(n + "e+" + place) + "e-" + place);
}




console.log(operate(0.3333,2,"*"));

