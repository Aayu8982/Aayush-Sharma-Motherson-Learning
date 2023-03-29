/*
Closure is a combination of functions bundled together in a lexical scope. 
The inner function has access to an outer function scope, variables and parameters 
even after the outer function has returned.
*/

//notice use of double parenthesis
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
outer()(); // output 10
