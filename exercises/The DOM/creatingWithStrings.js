const item = document.querySelector('.item');

const src = `https://picsum.photos/232`;
const desc = `smallPic`;
const myHTML = `
    <div className = 'wrapper'>
    <h2>proper ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
    </div>
`;

item.innerHTML = myHTML;
