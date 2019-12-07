const people = [
  { name: 'Eric', employed: true, country: 'United States' },
  { name: 'Nicky', employed: true, country: 'Canada' },
  { name: 'Charlie', employed: false, country: 'Underworld' },
];

people.forEach((person, index) => {
  console.group(`${person.name}`);
  console.groupEnd(`${person.name}`);

});

console.table(people);

// Console Methods

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

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
