//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
function getBeers() {
    const page = document.getElementById('root');

    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    
    page.appendChild(container);

    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://api.punkapi.com/v2/beers', true);
    
    xhr.onload = function(){
        var data = JSON.parse(this.response);

        if (this.status == 200) {
            data.forEach(beer => {
                const card = document.createElement('div');
                card.setAttribute('class', 'card d-flex flex-md-row flex-column col-md-10 col-12 mx-auto my-5 px-0');

                const cardHead = document.createElement('div');
                cardHead.setAttribute('class', 'card-header text-center');

                const pic = document.createElement('img');
                pic.setAttribute('src', beer.image_url);
                pic.setAttribute('width', '50px');

                const cardBody = document.createElement('div');
                cardBody.setAttribute('class', 'card-body d-flex flex-column flex-md-row align-items-center justify-content-around');

                const p1 = document.createElement('p');
                p1.setAttribute('class', 'bg-secondary text-light p-3');
                p1.textContent = beer.name;

                const p2 = document.createElement('p');
                p2.setAttribute('class', 'bg-secondary text-light p-3');
                p2.textContent = beer.tagline;

                const p3 = document.createElement('p');
                p3.setAttribute('class', 'bg-secondary text-light p-3');
                p3.textContent = beer.first_brewed;
                
                container.appendChild(card);
                card.appendChild(cardHead);
                cardHead.appendChild(pic);
                card.appendChild(cardBody);
                cardBody.appendChild(p1);
                cardBody.appendChild(p2);
                cardBody.appendChild(p3);
            });

        } else if (this.status == 404) {
            var errorMessage = document.createElement('p');
            errorMessage.textContent = 'Not found';
        }
    };

    xhr.send();
}