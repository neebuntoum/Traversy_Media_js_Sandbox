// alert('Hello World')

// HOW TO LOG TO CONSOLE

console.log('Hello World');
console.log(123);
console.log(true);
console.log('Hello World');

let greeting = 'Hello';
console.log(greeting);

console.log([1,2,3,4,5]);

console.log({a:1, b:2});

console.table({a:1, b:2});
  
console.error('This is an error');

console.clear();

console.warn('This is a warning');

console.time('Hello');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
console.timeEnd('Hello')

// VAR, CONST, LET

//"name" is deprecated. do not use it for name variable. cannot start with a number

// var name01 = 'John Doe';
// console.log(name01);
// name01 ='Steve Smith';
// console.log(name01);

//INIT VAR

var greet;
console.log(greet);
greet = 'hello'
console.log(greet)

//var can include letters, numbers, _ , and $ also cannot start with number

//multi word vars use camelCase

var firstName = 'John'; //camecase
var first_name = 'sara'; //underscore
var FirstName = 'tom'; //pascal case 
var firstName;

console.clear();

// LET

// let name01;
// name01 = 'John Doe';
// console.log(name01);
// name01 ='Steve Smith';
// console.log(name01);

//CONST

// const fName = 'John';
// console.log(fName);

//cannot reassign const
//fname = 'Sara';
//you have to assign a value
//const greeting;

const person = {
  fName: 'John',
  age: 30
}

person.fName = 'sara';
person.age = 32;

// console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);



