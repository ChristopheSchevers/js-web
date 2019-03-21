//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
// This code was inspired by NotJoey
let div = document.getElementById("img-container");

function catCyclerTwo() {
    axios.get('https://aws.random.cat/meow')
        .then(function (response) {
            div.style.backgroundImage = "url("+response['data']['file']+")";
            console.log(response['data']['file']);
            div.style.backgroundRepeat = "no-repeat";
            div.style.backgroundPosition = "center";
            div.style.backgroundSize = "cover";
            div.style.minHeight = "500px";
            div.style.maxHeight = "500px";
            div.style.minWidth = "500px";
            div.style.maxWidth = "500px";
        })
    setTimeout(function(){
        catCyclerTwo();
    }, 3000);
}