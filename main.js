/*1) Change Background project:
- create a HTML file with a button in the center of the page
- each time user clicks the button the entire page background color should be updated to a random color
- background colors should be predefined in your JS code and should have next values: yellow, red, green, blue, black, orange, pink.
*/
const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red', 'green', 'blue', 'yellow', 'black', 'orange', 'pink'];
body.style.backgroundColor = 'violet';
button.addEventListener('click', changeB );

function changeB(){
 const colorIndex = parseInt(Math.random()*color.length);
 body.style.backgroundColor = color[colorIndex];
};