// Let's create 4 functions!

// 1. Square of a number

// Create a function called `squared` that takes one argument
// The function will return the argument times itself (the square of the number)

function squared(victim) { // victim only exsits in function 
    if (typeof victim != "number") { //bonus check for typeof
        return 0;
    }
    //multiply the param by itself
    victim = victim * victim;

    // send back value
    return victim;
}
console.log(squared(2));
console.log(squared(5));
console.log(squared(-3));
console.log(squared("Parrots"));

// BONUS: Check if the argument is a number first! (Hint: conditionals - if statements)


// 2. Get string length!

// Create a function called `stringLength` that returns the length of a string (how many characters?)
// So: stringLength("hello") would return 5

function stringLength(x) {

    return x.length;


    // //create variable to hold string length

    // let theLength = 0;

    // //get the length of the string

    // theLength = x.length; //changing variable

    // //return x

    // return theLength;

}

console.log(stringLength("testing"))
console.log(stringLength("This is a longer string."))

// 3. Add two numbers together

// Create a function called addNumbers
// Takes two arguments and returns the sum of those arguments

function addNumbers(x, y){
    //validating input
    if(typeof x != "number"){
        x = parseFloat(x);
        if(isNaN(x)){
            return NaN;
        }
    }
    if(typeof y != "number"){
        x = parseFloat(y);
        if(isNaN(y)){
            return NaN;
        }
    }
    return x + y;
}

console.log(addNumbers(4, 2));
console.log(addNumbers(6, 3));

// 4. Create a function called sayHello
// Takes one argument
// Returns a string that is the combination of "Hello, " + the argument passed into the function
// So sayHello("Paul") would return "Hello, Paul";

function sayHello(theName){

    let output = "Hello, " + theName;

    return output;
}
console.log(sayHello("Paul"));