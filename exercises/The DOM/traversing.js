const eric = document.querySelector('.Eric');

console.log(eric.children);

console.log(eric.childNodes);

const p = document.createElement('p');
p.textContent = 'exterminate!';
document.body.appendChild(p);

// this removes the (p) from the document, but will still be logged in console because its in js memory
p.remove();

console.log(p);
