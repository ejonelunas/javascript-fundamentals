// make a div
const myDiv = document.createElement('div');
// add wrapper class
myDiv.classList.add('wrapper');
// add to body
document.body.appendChild(myDiv);

// unordered list, add three items: one, two, three
const ul = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>
`;
// add this list to wrapper
myDiv.innerHTML = ul;

// vreate an image
const img = document.createElement('img');
// set the source
img.src = 'https://picsum.photos/500';
// set width and height to 250
img.width = 250;
img.height = 250;
// add a class
img.classList.add('adjustedImageSize');
// add alt
img.alt = 'smolPic';
myDiv.appendChild(img);

// div with 2 paragraphs inside it html string
const myHTML = `
    <div class='myDiv'>
    <p>paragraph One</p>
    <p>paragraph Two</p>
    </div>
`;

const ulElement = myDiv.querySelector('ul');
// console.log(ulElement);
// put this div before ul above
ulElement.insertAdjacentHTML('beforebegin', myHTML);
// add class of warning to second paragraph
const newDiv = myDiv.querySelector('.myDiv');
// console.log(newDiv);
newDiv.children[1].classList.add('warning');
// remove first paragraph
newDiv.firstElementChild.remove();

// create function for playerCard with args: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
    <div class='playerCard'>
    <h2>${name} - ${age}</h2>
    <p>Their height is ${height} inches and ${age} years old. In dog years this person would be ${age *
    7} inches.  That would be a tall dog!
    <button class='delete' type='button'>Delete</button>
    </p>
    </div>
  `;
  return html;
}

// new div with cards class
const cards = document.createElement('div');
cards.classList.add('cards');
let cardsHTML = generatePlayerCard('Eric', 37, 68);
cardsHTML += generatePlayerCard('Nicky', 37, 64);
cardsHTML += generatePlayerCard('Charlie', 1, 18);
cardsHTML += generatePlayerCard('Bosco', 6, 48);

cards.innerHTML = cardsHTML;
myDiv.insertAdjacentElement('beforebegin', cards);

const buttons = document.querySelectorAll('.delete');
function deleteCard(event) {
  const clickedButton = event.currentTarget;
  clickedButton.closest('.playerCard').remove();
}
buttons.forEach(button => button.addEventListener('click', deleteCard));
