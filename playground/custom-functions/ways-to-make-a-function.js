// console.log('hello there');

// ANON function
// function (firstName) {
//     return `DR. ${firstName}`;
// }

// Function expression
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

// Arrow functions are anon functions
/* eslint-disable */
// const inchToCM = /* function */ inches => inches * 2.54
    // arrow function allow implicit returns, no return keyword necessary
    // if only one parameter(argument) exists, parens are not necessary
    // return inches * 2.54
   // calling return is an explicit return
    // const CM = inches * 2.54;
  // return CM; a function is done as soon as it hits the first return

// const add = (a, b = 3) => a + b;

// Returning an object

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 1.5
//     }
//     return baby;
// }

// parens around curly brackets to return an object
// const makeABaby = (first, last) => ({name: `${first} ${last}`, age: 1.5})

// IIFE
// Immediately Invoked Function Experssion
// parens around entire function and a set at the end
(function() {
    // console.log('Running ANON function');
    return 'Learning about IIFE';
})();

// Methods = function inside object

const eric = {
    name: 'Eric Jonelunas',
    // regular method
    sayHi: function (params) {
        return 'Hi Eric';
    },
    // short hand method
    yellHi() {
        console.log('HEY YOU GUYS!!!!');
    },
    // arrow method
    whisperHi: () => {
        console.log('whispers come from mice');
    }
}

// callback functions

// click callback

const button = document.querySelector('.clickMe');

button.addEventListener('click', eric.whisperHi);

// timer callback
setTimeout(eric.yellHi, 1000);