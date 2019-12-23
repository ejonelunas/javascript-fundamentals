const butts = document.querySelector('.butts');
const awesomeButton = document.querySelector('.awesome');

function handleClick() {
  console.log('it got clicked');
}

butts.addEventListener('click', handleClick);
awesomeButton.addEventListener('click', handleClick);

// to remove an event listener, you must have a named function
butts.removeEventListener('click', handleClick);

// listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  const button = event.target;
  // console.log(button.textContent);
  console.log('you are buying it');
  // console.log(parseFloat(event.target.dataset.price));
  // console.log(event.currentTarget);
  // stop this event from bubbling up
  event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function (event) {
    console.log('you clicked the window');
    event.stopPropagation();
});

const photEl = document.querySelector('.photo');

photEl.addEventListener('mouseenter', function (event) {
    console.log(event.currentTarget);
    console.log(this);
});

// function buyItem() {
//   console.log('buying item');
// }

// function attachListenerBuyButton(buyButton) {
//   console.log('binding the buy button');
//   buyButton.addEventListener('click', buyItem);
// }

// buyButtons.forEach(attachListenerBuyButton);
