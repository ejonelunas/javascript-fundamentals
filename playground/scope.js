// const age = 37;

// function go() {
//   const myAge = 38;
//   const hair = 'none';
//   console.log(age);
//   console.log(myAge);
//   console.log(hair);
// }
// // if the first const variable has same name in the function, only the one in the function will be called. the og cost is shadowed and overridden.
// // curly brackets can be considered fences. do not allow variable to leak into global scope.
// go();
// /* eslint-disable */

// function isOld(name) {
//     if (name = 'Eric') {
//         var old = true;
//     }
//     console.log(old);
//     return old;
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// };

const dog = 'Bosco';

function logDog(dog) {
  console.log(dog);
}
function go(params) {
  const dog = 'Olive';
  logDog();
}

go();

function yell() {
  console.log(name.toUpperCase());
}

function sayHi(name) {
  yell();
}

yell();
