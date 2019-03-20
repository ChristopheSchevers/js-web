//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
let counter = 0;

document.addEventListener("click", function() {
    counter += 1;
    switch (counter) {
        case 7:
            alert("What's the matter, buddy? Clicking a button too hard for you?");
            break;
        case 15:
            alert("Come on, slowpoke! What are you waiting for? Click the button!");
            break;
        case 27:
            alert("Oh my God! Seriously?");
            break;
        case 35:
            alert("NOOOOOOOOOOOOOOB!!!");
            break;
    }
});

function initTroll() {

    let btn = document.getElementById("troll");

    let btn_V = btn.clientHeight;
    let btn_H = btn.clientWidth;

    let availSpace_V = window.innerHeight - btn_V;
    let availSpace_H = window.innerWidth - btn_H;

    btn.style.top = Math.round(Math.random() * availSpace_V) + "px";
    btn.style.left = Math.round(Math.random() * availSpace_H) + "px";    
}

/*function clickR() {
    counter += 1;
}*/
