//Check to see if script is linked properly.
console.log("This script is linked properly!")


// Write your JS code here...
let counter = 0;
let countBonus = 1;
let multiPrice = 50;
const incrPrice = 1.5;
let autoPrice = 100;

// Main program
function cookieClicker() {
    // Page elements build-up    
    const page = document.getElementById('root');

    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    
    const card = document.createElement('div');
    card.setAttribute('class', 'card d-flex flex-row');
    
    const cardHead = document.createElement('div');
    cardHead.setAttribute('class', 'card-header');

    const cookieBtn = document.createElement('button');

    const pic = document.createElement('img');
    pic.setAttribute('src', 'images/cookie.png');

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body d-flex flex-column justify-content-center align-items-center');

    const cntContainer = document.createElement('div');
    cntContainer.setAttribute('class', 'container');
    
    const count = document.createElement('h1');
    count.setAttribute('class', 'bg-success text-light font-weight-bold text-center rounded p-3');
    
    const multiBtn = document.createElement('button');
    multiBtn.setAttribute('class', 'btn btn-secondary m-3');
    multiBtn.textContent = "Buy Multiplier";
    multiBtn.style.visibility = "hidden";
    
    const autoBtn = document.createElement('button');
    autoBtn.setAttribute('class', 'btn btn-secondary m-3');
    autoBtn.textContent = "Buy Auto Clicker";
    autoBtn.style.visibility = "hidden";
    
    page.appendChild(container);
    container.appendChild(card);
    card.appendChild(cardHead);
    cardHead.appendChild(cookieBtn);
    cookieBtn.appendChild(pic);
    card.appendChild(cardBody);
    cardBody.appendChild(cntContainer);
    cntContainer.appendChild(count);
    cardBody.appendChild(multiBtn);
    cardBody.appendChild(autoBtn);
    
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    
    // Animation
    cookieBtn.addEventListener('mousedown', btnBump);
    count.textContent = counter;    
    
    function btnBump() {
        pic.style.transform = "scale(1.1)";
    }
    
    // Function on click event
    cookieBtn.onclick = function() {
        pic.style.transition = "1s ease-out";
        pic.style.transform = "scale(1)";
        parseInt(counter += 1 * countBonus);
        count.textContent = counter;
        costCheck();
        
        multiBtn.onclick = function() {
            countBonus *= 2;
            counter -= multiPrice;
            multiPrice = parseInt(multiPrice * incrPrice);
            count.textContent = counter;
            this.style.visibility = "hidden";
            costCheck();
        };

        autoBtn.onclick = function() {
            autoClicker();
            counter -= autoPrice;
            autoPrice = parseInt(autoPrice * incrPrice);
            count.textContent = counter; 
            this.style.visibility = "hidden";   
            costCheck();        
        };        
        
        function autoClicker() {
                setInterval(() => {
                  parseInt(counter += 1 * countBonus);
                  count.textContent = counter;
                  costCheck();
                }, 100);
        }

        // Function to manage visibility of buttons
        function costCheck() {
            if (counter >= multiPrice) {
                multiBtn.style.visibility = "visible";
            } else if (counter < multiPrice) {
                multiBtn.style.visibility = "hidden";
            }
    
            if (counter >= autoPrice) {
                autoBtn.style.visibility = "visible";
            } else if (counter < autoPrice) {
                autoBtn.style.visibility = "hidden";
            }
        }
    };    

}
