/* eslint-disable*/
const name = 'Eric';
const middle = "James";
const last = `Jonelunas`;


const sentence = 'She\'s so cool';
//single quote needs escape(\) with apostrophes
const sentence2 = `She's so "cool"`;
//backtics need no escape, can use apostrophes or double quote inside them


const song = `Mahna mahna

ba dee bedebe

mahna mahna

ba debe dee

mahna mahna

ba dee bedebe badebe badebe dee dee de-de de-de-de`
// Backtics also allow for multi line strings to maintain line breaks with out escapes


const hello = "Hello my name is " + name + ". Nice to meet you"
//concatination 

const hello2 = `hello my name is ${name}. Nice to meet you. I am ${1 + 36} years old`
//interpolation can be used with backtics,
//allows for variable or statements to be run inside strings.L

const html = `
    <div>
        <h2>${name}</h2>
        <p>${hello}</p>
    </div>
`;

document.body.innerHTML = html;
/* Dont build websites like this
innerHTML is for example purposes only
*/