//Check to see if script is linked properly.
console.log("This script is linked properly!")

//Write your JS code here...
function addBtn() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    result = n1 + n2;
    document.getElementById("result").innerHTML = `The result is ${result}.`;
}

function subBtn() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    result = n1 - n2;
    document.getElementById("result").innerHTML = `The result is ${result}.`;
}

function multiBtn() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    result = n1 * n2;
    document.getElementById("result").innerHTML = `The result is ${result}.`;
}

function divideBtn() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    result = n1 / n2;
    document.getElementById("result").innerHTML = `The result is ${result}.`;
}