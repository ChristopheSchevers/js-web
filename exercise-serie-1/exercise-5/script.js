//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
let slideIndex = 0;
catCycler();

function catCycler() {
    let i;
    let x = document.getElementsByClassName("gallery-img");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(catCycler, 1000);
}