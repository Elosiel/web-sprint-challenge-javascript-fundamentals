// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: The function cannot find the variable in its own scope so it will look for a variable in the function that is nested.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


function summation(num){
  let counter = 0;
  function adder(){
    for (let i = 0; i <= num; i++){
      counter += i;
    }
  }
 adder()
 return counter; 
}

console.log(summation(4));













