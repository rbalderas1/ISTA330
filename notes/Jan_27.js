/*
1. how to define variables
2. what are the types
3. how to define conditionals (syntax of if)
4. how to repeat doing a thing (syntax of loops)
*/

var x = 1;
let y = 2;

var w;
let z;

// loops

/*
1. for loops
2. for/in loops is used for looping over objects
3. for/of is used for looping over arrays(and also for strings, sets, maps)
4. while
5. do/while
*/

// for looping over objects
let x = {firstName: 'Fred', lastName: 'Smith', age: 37};

// this gets the keys (firstName, lastName, age....)
for(let key in x) {
    console.log(key);
}

// this gets the value(s) assigned to the key (Fred, Smith, 37...)
for(let key in x) {
    console.log(x[key]);
}

// use this array for ALL the exampled below
let x = [2,4,6,8];

// gives the values in the array (not together) (traverses the array one by one)
for(let element of x) {
    console.log(element);
}

// initialize a variable
let i = 0;

//while loops
while(i < x.length) {
    console.log(x[i])
    // runs the function on each element and then adds 1;
    i++;
}

// do/while loops
do {
    console.log(x[i]);
    i++1;
    while(i < x.length)
}

/* 
The difference between a while and a do/while loop is that a while loop checks the condition
of the function first, while a do/while will atleast run the thing ONCE FIRST and then check the condition
*/

// prints something, like an array, as a string
console.log(x,toString());

// joins each element with the character specified
console.log(x.join('*'));

// add an element to the end of an array
x.push(10);
console.log(x);

// removes an element at the end
x.pop();

// removes 1st element
let x = [2,4,6,8];
x.shift();

// adds 1st element
x.unshift(0);

// gets a slice of the array
// you want to assign the new array to a new variable to not modify the og
y = x.slice(1);

// index starts at 0

// first number is inclusive and last number is exclusive
x.slice(1,3);

// sorts an array, only really works well with strings
let x = ['Banana', 'Apple', 'Orange'];
x.sort();

// sort an array numerically
// tells it to calculate the difference between two elements and if the sum is negative then that means a is smaller so put it first
// if the sum is positive then it must mean b is smaller so put b before a
x.sort((a,b) => a - b);

// sort from biggest to smallest
x.sort((a,b) => b - a);