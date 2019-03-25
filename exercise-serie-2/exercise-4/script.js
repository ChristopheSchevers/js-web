//Check to see if script is linked properly.
console.log("This script is linked properly!")


//Write your JS code here...
const page = document.getElementById('root');

axios.get('https://character-database.becode.xyz/characters/')
    .then(function(response){
        const table = document.createElement('table');
        table.setAttribute('class', 'table');

        const tableHead = document.createElement('thead');

        const rowHead = document.createElement('tr');

        const th1 = document.createElement('th');
        th1.setAttribute('scope', 'col');
        th1.textContent = "";

        const th2 = document.createElement('th');
        th2.setAttribute('scope', 'col');
        th2.textContent = "Name";

        const th3 = document.createElement('th');
        th3.setAttribute('scope', 'col');
        th3.textContent = "Description";

        const tableBody = document.createElement('tbody');

        page.appendChild(table);
        table.appendChild(tableHead);
        tableHead.appendChild(rowHead);
        rowHead.appendChild(th1);
        rowHead.appendChild(th2);
        rowHead.appendChild(th3);
        table.appendChild(tableBody);

        this.data = response.data;
        this.data.forEach((character) => {
            const row = document.createElement('tr');
            row.setAttribute('id', character.id);
            row.setAttribute('data-toggle', 'modal');
            row.setAttribute('data-target', '#theModal');

            const th = document.createElement('th');
            th.setAttribute('scope', 'row');

            const pic = document.createElement('img');
            pic.src = 'data:img/gif;base64,' + character.image;

            const td1 = document.createElement('td');
            td1.textContent = character.name;

            const td2 = document.createElement('td');
            td2.textContent = character.shortDescription;
            
            tableBody.appendChild(row);
            row.appendChild(th);
            th.appendChild(pic);
            row.appendChild(td1);
            row.appendChild(td2);

            // Modal
            const mName = document.getElementById('mName');
            const mPic = document.getElementById('mPic');
            const mDescrip = document.getElementById('mDescrip');

            mName.innerHTML = character.name;
            mPic.src = 'data:img/gif;base64,' + character.image;
            mDescrip.innerHTML = character.description;
        });
    });
