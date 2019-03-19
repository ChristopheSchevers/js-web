//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function dayGen() {
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;

    if (year == "" || month == "") {
        document.getElementById("day").disabled = true;
    } else {
        let days = new Date(year, month, 0).getDate();
        document.getElementById("day").disabled = false;

        document.getElementById("day").innerHTML = "";

        for (i = 1; i <= days; i++) {
            document.getElementById("day").innerHTML += '<option value="' + i + '">' + i + '</option>';
        }
    }
}

function ageCalc() {
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value -1;
    let day = document.getElementById("day").value;

    let today = new Date();

    let result = today.getFullYear() - year;
    if (today.getMonth() <= month && today.getDate() < day) {
        result--;
    }
    document.getElementById("result").innerHTML = `Your age is ${result}.`;
}