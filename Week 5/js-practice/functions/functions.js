// function expressions:
// simply means create a function and put it into a variable

function sum(a, b) {
    var total = a + b;
    console.log(total);
}
var funExp = sum(5, 15);

// function expressions - create function arguments and save it inside of a variable
// this variable can then be used elsewhere


// return function:

function sum(a, b) {
    return total = a + b;
}
var funExp = sum(5, 25);
console.log('the sum of two no is ' + funExp);

// When JavaScript reaches a return statement, the function will stop executing.
// functions often compute a return value.
// the return value is "returned" back to the "caller"


// anonymous function:

// A function expression is similar to and has the same syntax as a function declaration 
// one can define "named" function expressions (where the name of the expression might be used in the call stack for example)
// or "anonymous" function expressions


var funExp = function (a, b) {
    return total = a + b;
}
var sum = funExp(15, 15);
var sum1 = funExp(20, 15);
console.log(sum > sum1);
