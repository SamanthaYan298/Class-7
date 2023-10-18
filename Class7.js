// Example 1:
// 15-2
// write the function to call the initialised function in one line.
// The function should be called myShoppingList. Call the variable shopping.
// Have the fisrt value be 12 then the second value be 4
// Multiply quantity time price in the function. Return the answer.
// Then console log the value below the function
// Add the answer as a comment.
// Write a comment above the function to describe it.

var shopping = myShoppingList(12,4); // initialize and set up in one line.

/**
 * @ desc Figuring out the cost of the shopping list
 * @param {*} quantity the quanity of items
 * @param {*} price the price of the products
 * @returns returning the total cost of shopping
 */
function myShoppingList(quantity, price) { // want to reduce the amount of changes we have to do in our codes
    return quantity * price; // never put numbers,
};

console.log(shopping); // 48

// Example 2:
// 6-5-2 Initialise the variable addition to a function
// called addition function with the 3 and 4. Add the two numbers
// Console log the variable addition afterwards
// Then the answer on the same line as the console log using //.

var addition = additionFunction(3,4);

/**
 * @ desc addtion function to add numbers together
 * @param {*} numOne the first value
 * @param {*} numTwo the second value
 * @returns the addition of the first and second value // better to documentary for developers
 */
function additionFunction(numOne, numTwo) { // parameter is important and separate by comma
    return numOne + numTwo;
};

console.log(addition);

// Example 3:
// 6-5-3 Initialise the variable subtraction to a function called
//subtraction function with the values 10 and 4. Subtract 4 from 10.
//Console log the variable substraction afterwards.
// Then the answer on the same line as the console log using //.

var subtraction = subtractionFunction(10,4);

/**
 * @desc the subtraction function
 * @param {*} numOne the first value
 * @param {*} numTwo the second value
 * @returns the subtracted value of numTwo from numOne
 */
function subtractionFunction(numOne, numTwo) {
    return numOne - numTwo;
};

console.log(subtraction); // 6

// Example 4:
// 6-5-4 Initialise the variable divide to a function called
// divide function with the values 12 and 4. Calculate 12 divided by 4
// in the function created. Console log the variable divide afterwards.
// Then the answer on the same line as the console log using //.

var divide = divideFunction(12,4);

/**
 * @desc the divide function
 * @param {*} numOne the first value
 * @param {*} numeTwo the second value
 * @returns the divided value of numOne by numTwo
 */
function divideFunction(numOne, numeTwo) {
    return numOne / numeTwo;
};

console.log(divide); // 3

// Example 5:
// 15-5 Initialise a function in one line using the variable x
// The function should be called myFunction. Have the function
// take in the number 5 and 6. Run the answer a multipled by b.
// The console log the value below the function.
// Add the answer as a comment. Write a comment above the function to describe it.

// Next, create a variable d and give it the value of 5. Initialise variable z to the function
// called addingFive. Make addingFive take in the varibale x and d.
// Then inside the function add the variable g and h. 
// After the function console log out the variable z.
// Write a comment above the function to describe it. Add a comment to give the answer.

/**
 * @desc the multipled function
 * @param {*} a the first value
 * @param {*} b the second value
 * @returns the multipled value of a by b
 */
function myFunction (a, b) {
    return a * b;
}; 

/**
 * @desc adding two values
 * @param {*} g the first value
 * @param {*} h the second value
 * @returns the adding of the first and second value
 */
function addingFive(g,h) {
    return g + h;
};

var d = 5;
var x = myFunction (5,6);
var z = addingFive(x,d); // have all variable and initialise on the top always

console.log(x) // 30
console.log(z); // 35

// Example 6:
// 15-6 Take the question 15-5 we just did above and organise
// it in terms of having the variables at the top, then the function
// followed by the console log each time.

// Notes:  organized all variables and intinalise and put them 
// on the top so the coworkers can see and fix the problems easiliy

// Example 7:
// 15-7 Take the queston 15-5 we just did above and organise it in term
// of having both the functions at the top then the variables after.
// Lastly, have the console logs display the answer.

// Notes: always put the functions above the initialise and console log


// Example 8:
// 15-8 Intialise a function called sentenceFunction that takes
// in the name and age. This will return the sentence;
// My name is _name_ and I am _age_ years old.
// write a variable called person one and make it equal to
// the sentenceFunction that has the values George Smith and 25.
// Then console log out person one.

function sentenceFunction(name,age) {
    return `My name is ${name} and I am ${age} years old.`;
}; // "My name is " + name + "and I am " + age + " years old."

var personOne = sentenceFunction("George Smith", 25);

console.log(personOne);


// Example 9:
// 15-9 Inialise a function in one line using the variable first name.
// This function should be called name fix. This will take in the value
// george which is all lowercase.

// Initialise the second function to the variable person one.
// This function should be called sentence function.
// This will take in the value of the first name we just created and also the number 25

// Below the variables just created write the function for sentence
// function which takes in the values first name and age. Then have
// it return the sentence saying: My name is _firstName_ and I am _age_ years old.

// Initialise the second function that is called name fix and have it
// take in the first name. Then have it return the name formatted the 
// proper way with the first letter being capitalised.

// Lastly, at the bottom console log out person one. Write the output
// in a single line comment.

var firstName = nameFix("george");
var personOne = sentenceFunction(firstName, 25);

/**
 * @desc creating the sentences
 * @param {*} firstName the first name of the person 
 * @param {*} age the age in years
 * @returns the sentence containing the first name and age 
 */
function sentenceFunction(firstName,age) {
    return "My name is " + firstName + " and I am " + age + " years old.";
};

/**
 * @desc to format the name with the first letter capitalized
 * @param {*} first the first name of the person 
 * @returns the first letter of the name as capitalized
 */
function nameFix(first) {
    return first[0].toUpperCase() + first.substring(1);
};

console.log(personOne);
