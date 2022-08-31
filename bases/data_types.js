// Primitive vs Objects
// Numbers, string, boolean, null and undefined.
// in JS all the privites values are passs value, not for reference like Objects
// so chaning the value of any of the variables will not affect other variables

var x = 30;
var y = x;

x = 20;

console.log(x);
console.log(y);

console.log('In primitives its value is not being affected when channing the value');
var myString = 'this is a string';
var mySecondString = myString;

myString = 'new value';

console.log('In primitives its value is not being affected when channing the value');
console.log(myString);
console.log(mySecondString);

// Kinds of objects in JS are functions, Arrays, and objects...
// To create an object we can use {} 
// in objects value is pass by reference, so variables point at the memory direction.
var person = {
    name : 'Cristian',
    age: 27
}

var person2 = person;

person.name = 'Cristian Alberto';

// this 2 will print the same although, we just updated person and not person2.
console.log('this 2 will print the same although, we just updated person and not person2.');
console.log(person);
console.log(person2);

// Equality check
console.log('Primivite - Equality check');
x = 10
y = 10
console.log('In primivites,  operator will check for its value to make a comparation', x == y);


console.log('Object - Equality check');

var person3 = {
    name: 'Cristian',
    age: 27
}

var person4 = {
    name: 'Cristian',
    age: 27
}

console.log('In Objects,  operator will check for its reference to make a comparation', person3 == person4);

var numbers = [1,2,3,4];
var numbers2 = [1,2,3,4];

console.log('In Objects,  operator will check for its reference to make a comparation', numbers == numbers2);