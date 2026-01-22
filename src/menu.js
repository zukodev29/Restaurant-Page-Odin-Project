/**Code almost similar to index.js */
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
const content = document.querySelector("#content");

const header = document.createElement("h1");
header.classList.add("menu-header");
header.textContent = "Menu";

const menudiv = document.createElement("div");
menudiv.classList.add("menu-div");

const menuHeader = document.createElement("h2");
menuHeader.classList.add("menu-item-header");
menuHeader.textContent = "Our Specialties";

/*Only different is that we have created list here,unordered list */

const menuList = document.createElement("ul");
menuList.classList.add("menu-list");

/*Array of menu items */
const items = [
    "Spaghetti Carbonara - Classic Italian pasta with creamy sauce and pancetta.",
    "Margherita Pizza - Fresh tomatoes, mozzarella, and basil on a thin crust.",
    "Tiramisu - Traditional coffee-flavored Italian dessert.",
    "Caesar Salad - Crisp romaine lettuce with Caesar dressing and croutons.",
    "Minestrone Soup - Hearty vegetable soup with beans and pasta."
];

/*Function to create list items */

items.forEach(item => {
    const listItem = document.createElement("li");
    listItem.classList.add("menu-item");
    listItem.textContent = item;
    menuList.appendChild(listItem);
});

/*Loads all the elements to the page */

menuHeader.appendChild(menuList);

menudiv.append(menuHeader);

content.appendChild(header);
content.append(menudiv);




