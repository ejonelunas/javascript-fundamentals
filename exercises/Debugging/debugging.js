const people = [
  { name: 'Eric', employed: true, country: 'United States' },
  { name: 'Nicky', employed: true, country: 'Canada' },
  { name: 'Charlie', employed: false, country: 'Underworld' },
];

// Console Methods

people.forEach((person, index) => {
  console.info(person.name);
});

// console.table(people);

// Callstack
// Learn to read the call stack.  Most errors will tell you where they happened and which function called them.

// Grabbing Elements
// $0 will return what you currently have selected

// Breakpoints
// debugger keyword can be placed anywhere.  manually continue running JS with play button.

// Scope

// Network Requests
// another that will take practice to understand, look at the network tab on console.

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Nicky'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(event) {
  const newFontSize =
    parseFloat(getComputedStyle(event.currentTarget).fontSize) + 1;
  event.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad Joke Fetch
async function fetchDadJoke() {
  const result = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await result.text();
  console.log(joke);
  return joke;
}
