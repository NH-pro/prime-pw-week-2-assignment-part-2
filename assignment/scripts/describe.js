// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called 'name' and set it to 'Dane'.
// We check if 'name' is set to 'Mary'. 
// 'name' is set to 'Dane', so we console log 'How do you do?'.
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called 'secret'. We make another variable called 'code' and set it to '123'.
// We check to see if 'code' is set to '123'. 'secret' is set to 'super' and 'code' is set to '246'.
// We check to see if 'code' is greater than 250. 'secret' is set to 'duper'. 
// We console log 'duper'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called 'isStudent' and set it to the boolean 'true'.
// We make a variable called 'age' and set it to '34'. We make a variable called 'zip' and set it to '55407'.
// We check to see if 'isStudent' is set to 'true' and zip is greater than 80000; there are not, so we move to the next conditional.
// We check to see if 'isStudent' is set to 'false' or if 'age' is less than '30'; they are not, so me move to the next conditional.
// We check to see if 'isStudent' is set to 'true'; it is, so we console log 'Welcome to Prime!'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - 'colorOne' is set to 'red', but the instructions ask to set it to 'blue'.
// Should be let colorOne = 'blue'.
let colorOne = 'red';

// FIX - 'colorTwo' is set to 'blue', but instructions ask to set it to 'red'.
// Should be let colorTwo = 'red'.
let colorTwo = 'blue';

let mix = true;

if (mix === true) {
  colorOne = 'purple';
// FIX - The instructions say that colorTwo should be in this statement too.
// Should be colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX - Later on in the instructions, we are asked to check if 'time' is greater or equal to 4.
// This suggests that 'time' is meant to change so it is not a 'const', but a 'let' variable instead. 
const time = 4;

// FIX - Instructions ask to check 'temp' AND 'time'. The code below is checking 'temp' OR 'time'.
// Should be (temp > 39 && time >= 4).
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - Instructions ask to check if 'age' is greater than or equal to 'minAge', the code will work, but it is not formatted correctly.
// Should be (age >= minAge).
if(minAge <= age) {
  console.log('no entry');

// FIX - I think this is another format error. 'else' is on the wrong line.
// 'else' should be on it's own and start the next line .
} else {
  console.log('enter');
}
*/

