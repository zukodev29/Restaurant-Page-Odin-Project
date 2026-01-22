/*Code almost the same as index.js,except text and div difference that includes styling */
const homebtn = document.querySelector('#Home-btn');
homebtn.addEventListener('click', () => {
    window.location.href = 'template.html';
});

const aboutbtn = document.querySelector('#About-btn');
aboutbtn.addEventListener('click', () => {
     window.location.href = 'about.html';
});

const menubtn = document.querySelector('#Menu-btn');
menubtn.addEventListener('click', () => {
     window.location.href = 'menu.html';
});
const content = document.querySelector('#content');

const aboutheader = document.createElement('h1');
aboutheader.textContent = "About the Restaurant";
aboutheader.style.textAlign = 'center';
aboutheader.style.marginTop = 60 + 'px';
aboutheader.style.marginLeft = 150 + 'px';

const div = document.createElement('div');
div.style.width = 900 + 'px';
div.style.height = 500 + 'px';
div.classList.add('about-div');
div.style.backgroundColor = 'lightgray';
div.style.marginLeft = 380 + 'px';
div.style.marginTop = 30 + 'px';
div.style.padding = 40 + 'px';

const paragraph = document.createElement('p');
paragraph.textContent = "Welcome to our restaurant! We pride ourselves on offering a unique dining experience that combines exquisite cuisine with exceptional service. Our chefs use only the freshest ingredients to create dishes that are both delicious and visually stunning. Whether you're here for a romantic dinner, a family gathering, or a business lunch, we strive to make every visit memorable. Thank you for choosing our restaurant, and we look forward to serving you!";
paragraph.style.fontSize = 20 + 'px';
paragraph.style.lineHeight = 1.6;
paragraph.style.color = 'darkblue';
paragraph.style.textAlign = 'center';


div.appendChild(paragraph);
content.appendChild(aboutheader);
content.appendChild(div);