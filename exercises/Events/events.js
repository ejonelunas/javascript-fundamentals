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

function buyItem() {
  console.log('buying item');
}

function attachListenerBuyButton(buyButton) {
  console.log('binding the buy button');
  buyButton.addEventListener('click', buyItem);
}

buyButtons.forEach(attachListenerBuyButton);
