// how Javascript works, behind the scenes

var name = 'John';

function first() {
    var a = 'Hello!';
    second();
    var x = a + name;
}

function second() {
    var b = 'Hi!';
    third();
    var z = b + name;
}

function third() {
    var c = 'Hey!';
    var z = c + name;
}

first();

///////////////////////////////////////
// Lecture: Hoisting

// functions

calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
} // function declaration hoists the function definition so that calling it before the function is declared still results in the function being used properly

// hoisting only works for function declarations, not function expressions
// SEE HERE - if placed first, this returns an error because retirement has not been declared a function yet.

//retirement(1990); 

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1990); //returns the correct value to the console of 39

// variables

console.log(age); // returns 'undefined,' which is how hoisting works with variables

var age = 23
console.log(age); // if you log this to console before declaring the variable, it returns undefined because, as far as the background process is concerned, it is waiting for the variable to be defined. it's not an error, just an empty variable.

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age); // so in this order, it prints 23 to the console because the variable of 23, above, gets stored in the global execution context object, so the function foo doesn't get it's definition of age called to the console

// BIG TAKEAWAY: we can use function declarations before we actually declare them in our code.

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// this return works because the second function has access to the a and b because of the scoping chain, so it can return all three to us
// this does not work backwards. global scope will not have access to b or c unless we return their values from the function

// Example to show the differece between execution stack and scope chain
*/

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(c);
}

// execution stack is different from scope chain - so third does not have access to c. the order doesn't matter, because third is in a different scope than the c variable and cannot access it's definition.
// the only definitions available to third are the ones within it's scope, so a and d

///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

/*calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}*/

// regular function - this always points to the window

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        /*function innerFunction() {
            console.log(this); //points to the window because innerFunction doesn't have a function defined
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
}

mike.calculateAge = john.calculateAge; // an example of method borrowing, simply declaring that mike.calculateAge is the same as the function described in the john object and VOILA!
// super cool because the "this" only gets defined when the method gets called, so the borrowing works because "this" refers to whomever the method is borrowed to
mike.calculateAge();
