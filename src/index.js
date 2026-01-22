/*In this part we are giving const's to every button and with window method 
we are enabling navigation between pages*/
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

/*Const for the content ID */
const content = document.getElementById('content');

/*Title history code,content.appendChild loads const first div,and 
history title has it's class,history-title*/

const firstdiv = document.createElement('div');
firstdiv.textContent = "History";
firstdiv.classList.add('history-title');  
content.appendChild(firstdiv);

const firstpparagraph = document.createElement('p');
firstpparagraph.textContent = "Our restaurant was founded in 1998 in Sarajevo, since then we provide our customers with finest cuisine.";
firstpparagraph.classList.add('history-text');  
const secondparagraph = document.createElement('p');
secondparagraph.textContent = "Over the years we have won numerous awards for our food and service.";
secondparagraph.classList.add('history-text');  
const thirdparagraph = document.createElement('p');
thirdparagraph.textContent = "We are committed to using fresh, locally sourced ingredients to create delicious and memorable dining experiences.";
thirdparagraph.classList.add('history-text');

/*Till this part you can see that it's all the same just different text */

/*Styling for history section,you can understand how you can use it,just add style and then
widhth,background color or something else,and when you setting widht or height value and unit need to be 
separated*/

firstpparagraph.style.width = 700 + 'px';
secondparagraph.style.width = 700 + 'px';
thirdparagraph.style.width = 700 + 'px';
firstdiv.style.width = 700 + 'px';

firstdiv.style.height = 100 + 'px';
firstpparagraph.style.height = 70 + 'px';
secondparagraph.style.height = 70 + 'px';
thirdparagraph.style.height = 70 + 'px';

firstdiv.style.marginLeft = 420 + 'px';
firstpparagraph.style.marginLeft = 420 + 'px';
secondparagraph.style.marginLeft = 420 + 'px';
thirdparagraph.style.marginLeft = 420 + 'px';

firstdiv.style.marginTop = 100 + 'px';


/*Img */

/*This is how you add an image to your page with DOM Manipulation*/

const divimg = document.createElement('div');

const img = document.createElement('img');
img.src = 'img/img2.jpg'
img.alt = 'Restaurant Image';
img.style.width = 700 + 'px';
img.style.height = 300 + 'px';
img.style.marginLeft = 420 + 'px';
img.style.marginTop = 50 + 'px';

/*Img */

/*Styling rest of the text,you have properties like textAlign and background color
it's very easy to understand*/

const locationheader = document.createElement('h2');
locationheader.textContent = "Location";
locationheader.classList.add('location-title');
locationheader.style.textAlign = 'center';
locationheader.style.marginTop = 40 + 'px';
locationheader.style.height = 50 + 'px';
locationheader.style.width = 500 + 'px';
locationheader.style.marginLeft = 520 + 'px';
locationheader.style.backgroundColor = 'rgb(3, 252, 227)';
locationheader.style.paddingTop = 10 + 'px';

const locationparagraph = document.createElement('p');
locationparagraph.textContent = "Located in the heart of Sarajevo, our restaurant offers a cozy and inviting atmosphere.";
locationparagraph.classList.add('location-text');
locationparagraph.style.textAlign = 'center';
locationparagraph.style.marginTop = 50 + 'px';
locationparagraph.style.marginLeft = 420 + 'px';
locationparagraph.style.width = 700 + 'px';
locationparagraph.style.height = 80 + 'px';
locationparagraph.style.backgroundColor = 'yellow';
locationparagraph.style.paddingTop = 40 + 'px';
locationparagraph.style.color = 'brown';

const imgparagraph = document.createElement('p');
imgparagraph.textContent = "Interior of our restaurant.";
imgparagraph.classList.add('image-text');  
imgparagraph.style.marginLeft = 520 + 'px';
imgparagraph.style.marginTop = 30 + 'px';
imgparagraph.style.width = 500 + 'px';
imgparagraph.style.height = 50 + 'px';
imgparagraph.style.backgroundColor = 'red';
imgparagraph.style.paddingTop = 20 + 'px';
imgparagraph.style.textAlign = 'center';
imgparagraph.style.color = 'rgb(3, 252, 227)';

/*Author text */

const author = document.createElement('h3');
author.textContent = "Zulfikar Kantic-2026-Odin Project Restaurant Page";
author.style.textAlign = 'center';
author.style.marginTop = 30 + 'px';
author.style.marginLeft = 80 + 'px';


/*This loads the code,that you coded on the page with content.appendChild() and then const or let 
that you defined in the code */

content.appendChild(firstpparagraph);
content.appendChild(secondparagraph);
content.appendChild(thirdparagraph);

divimg.appendChild(img);
content.appendChild(divimg);

divimg.appendChild(imgparagraph);

content.appendChild(locationheader);
content.appendChild(locationparagraph);

content.appendChild(author);

