//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function formDisplay() {
    // Store input data in variables
    let sName = document.getElementById("sName").value;
    let sPower = document.getElementById("sPower").value;
    let moti = document.getElementById("moti").value;
    let evilPlan = document.getElementById("evilPlan").value;

    // Remove all form elements from page
    let form = document.getElementById("villForm");
    while (form.hasChildNodes()) {
        form.removeChild(form.firstChild);
    }

    // Display data to page
    let x1 = document.createElement("H2");
    let t1 = document.createTextNode("You submitted: ");
    x1.appendChild(t1);
    x1.setAttribute("class", "text-center mb-3");
    form.appendChild(x1);

    let x2 = document.createElement("H5");
    let t2 = document.createTextNode("Super Villain Name");
    x2.appendChild(t2);
    form.appendChild(x2);

    let x3 = document.createElement("H3");
    let t3 = document.createTextNode(sName);
    x3.appendChild(t3);
    x3.setAttribute("class", "offset-1 mb-4");
    form.appendChild(x3);

    let x4 = document.createElement("H5");
    let t4 = document.createTextNode("Super Power");
    x4.appendChild(t4);
    form.appendChild(x4);

    let x5 = document.createElement("H3");
    let t5 = document.createTextNode(sPower);
    x5.appendChild(t5);
    x5.setAttribute("class", "offset-1 mb-4");
    form.appendChild(x5);

    let x6 = document.createElement("H5");
    let t6 = document.createTextNode("Your Motivation");
    x6.appendChild(t6);
    form.appendChild(x6);

    let x7 = document.createElement("H3");
    let t7 = document.createTextNode(moti);
    x7.appendChild(t7);
    x7.setAttribute("class", "offset-1 mb-4");
    form.appendChild(x7);

    let x8 = document.createElement("H5");
    let t8 = document.createTextNode("Your Plan To Conquer The World");
    x8.appendChild(t8);
    form.appendChild(x8);

    let x9 = document.createElement("H3");
    let t9 = document.createTextNode(evilPlan);
    x9.appendChild(t9);
    x9.setAttribute("class", "offset-1 mb-4");
    form.appendChild(x9);
}