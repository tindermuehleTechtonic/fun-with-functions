//DO NOT REMOVE this is just to hide the empty solution and feedback div that we will add after grading
//Please enter your name for the assignment below
document.getElementById('user').innerHTML =
  'Tim Indermuehle'

//problem-1
function addNumbers(firstNumber, secondNumber) {
  return  Number(firstNumber) + Number(secondNumber);
}


// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign

document.getElementById("problem-1").innerHTML = addNumbers(3, 5);


//problem-2
function subtractNumbers(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-2").innerHTML = subtractNumbers(10, 8);

//problem-3
function showResultsInBody(prameterName) {
  console.log("The result of your calculation is " + prameterName);
}

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-3").innerHTML = showResultsInBody(5);


//problem-4
function showResults(prameterName) {
  return "The result of your calculation is " + prameterName + ".";
}
// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-4").innerHTML = showResults(5);


//problem-5
function multiplyNumbers(firstNumber, secondNumber) {
  return Math.round (firstNumber * 1000) / 1000  * Math.round (secondNumber * 1000) / 1000;
}
// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-5").innerHTML = multiplyNumbers(5, 10);

//problem-6
function divideNumbers(firstNumber, secondNumber) {
  // return firstNumber / secondNumber;
  return Math.round (firstNumber * 10000)  / Math.round (secondNumber * 10000) ;
}
// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-6").innerHTML = divideNumbers(20, 4);


//problem-7
function showResults(prameterName) {

  return "The result of your calculation is " + prameterName + ".";
}

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-7").innerHTML = showResults(addNumbers(3, 5));


//problem-8



// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-8").innerHTML = addNumbers(5, 6) + addNumbers(7, 3);


//problem-9

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
document.getElementById("problem-9").innerHTML = multiplyNumbers(15, 4) - divideNumbers(10, 2);


//challenge-1

// place functions and supporting code here.  Uncomment line below and place answer the to right of = sign
// document.getElementById("challenge-11").innerHTML = addTheWorld(5,2,8)
// document.getElementById("challenge-12").innerHTML = addTheWorld(10,5,3,2)
// document.getElementById("challenge-13").innerHTML = addTheWorld(25)
