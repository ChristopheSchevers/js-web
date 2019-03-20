//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
let pics = document.getElementById("picstore");

function randomCats() {
    for (i = pics.children.length; i >= 0; i--) {
        pics.appendChild(pics.children[Math.random() * i | 0]);
    }
}
