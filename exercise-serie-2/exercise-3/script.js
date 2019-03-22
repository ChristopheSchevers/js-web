//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function cookieClicker() {
    const page = document.getElementById('root');
    
    const card = document.createElement('div');
    card.setAttribute('class', 'card d-flex flex-row');
    
    const cardHead = document.createElement('div');
    cardHead.setAttribute('class', 'card-header');

    const cookieBtn = document.createElement('button');

    const pic = document.createElement('img');
    pic.setAttribute('src', 'images/cookie.png');

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body d-flex justify-content-center align-items-center');

    const count = document.createElement('h1');
    count.setAttribute('class', 'bg-success text-light font-weight-bold text-center rounded col-8 p-3');
    
    page.appendChild(card);
    card.appendChild(cardHead);
    cardHead.appendChild(cookieBtn);
    cookieBtn.appendChild(pic);
    card.appendChild(cardBody);
    cardBody.appendChild(count);

    let counter = 0;
    let multiPrice = 50;

    cookieBtn.addEventListener('click', btnClick);
    cookieBtn.addEventListener('mousedown', btnBump);
    count.textContent = counter;
    
    function btnClick() {
        pic.style.transition = "1s ease-out";
        pic.style.transform = "scale(1)";
        counter += 1;
        count.textContent = counter;
    }

    function btnBump() {
        pic.style.transform = "scale(1.1)";
    }

    if (counter == multiPrice) {
        const multiBtn = document.createElement('button');
        multiBtn.textContent = "Buy Multiplier";

        cardBody.appendChild(multiBtn);
        console.log("There should be a button");
    }
}
