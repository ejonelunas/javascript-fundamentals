// // const p = document.querySelector('p');
// // console.log(p);
// // const imgs = document.querySelectorAll('.item img');
// // console.log(imgs);
// // const item2 = document.querySelector('.item2');
// // const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');
// // set the textContent property on selected element
// // heading.textContent = 'Eric is 20 days into 100 days of code';
// console.log(heading.textContent);
// console.log(heading.innerText);
// // textContent selects all elements, including script and style tags
// // innerText only shows human readable elements.
// console.log(heading.innerHTML);

// const tangerineList = document.querySelector('.Tangerine');
// console.log(tangerineList.textContent);

// tangerineList.insertAdjacentText('beforeend', '🍊 ');

// Classes
const pic = document.querySelector('.bigUn');
console.log(pic.classList);
pic.classList.add('open');
pic.classList.toggle('round');

function toggleRound(params) {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);
