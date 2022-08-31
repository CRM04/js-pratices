/**
 * var and let allow us to create mutable variables
const allow us to create inmutable variables
 * 
 */

var x = 10;
x = 20;


let y = 15;
y = 26;

const z = 15;
// z = 0;
console.log('I cannot update z now because its a constant, it will throw an error');

console.log('this will work in global scope', x,y,z);

// in this case this variables are 'global' becase they can be acces by any function in this file.. 

function foo() {
    // you can overwrite variables inside of a function that is called scope, JS has 3 types of scope, Block scope, Function scope, Global scope
    const z = 100;
    x = 26;
    console.log('this will work', x,z);

    const myNewVariable = 20;
    console.log('my new varaible', myNewVariable);

    console.log('Variables defined with let cannot be redeclared. They are block scope variable ES6');

    let y = 35;
    console.log('here Y is', y, 'althoug above was 26');
}

foo();

// console.log(myNewVariable);
console.log('this will return undefined, because this variable is outside of the socped it was created in');