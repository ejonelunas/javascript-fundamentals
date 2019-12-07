// console.log('Hello there');
// function definition

function calculateBill(billAmount, taxRate = 0.07, tipRate = 0.2) {
  // this is the function body
  // console.log('running calculate bill!');
  const total = billAmount * taxRate * tipRate;
  // console.log(total);
  return total;
}
// function call.  Or **run**
const myTotal = calculateBill(100, 0.07);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Bosco');
// console.log(greeting);

// const myTotal3 = calculateBill(20 + 15 + 33 + 52, 0.07);

function doctorize(name) {
  return `Dr. ${name}`;
}

// can set default arguments to empty type to not throw error.
function yell(name = '') {
  return `Hey ${name.toUpperCase()}`;
}
