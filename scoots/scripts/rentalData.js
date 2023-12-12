const baseURL = "https://mikedarling12.github.io/wdd230/";
const linksURL = "https://mikedarling12.github.io/wdd230/scoots/data/rentals.json";

async function getRentalData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayRentalData(data);
}

function displayRentalData(data) {
    console.log(data);
    console.log(data["Honda"]);
    let rentalOptions = document.getElementById("table-additions");
    data["Honda"].forEach( (rental) => {
        console.log(rental.make + " " + rental.model)
        let row = document.createElement('tr');

        let makeCell = document.createElement('td');
        makeCell.innerHTML = rental.make;
        
        let modelCell = document.createElement('td');
        modelCell.innerHTML = rental.model;
        
        let numPersonsCell = document.createElement('td');
        numPersonsCell.innerHTML = rental.people;

        row.appendChild(makeCell);
        row.appendChild(modelCell);
        row.appendChild(numPersonsCell);
        rentalOptions.appendChild(row);
    });
    data["ATVs"].forEach( (rental) => {
        console.log(rental.make + " " + rental.model)
        let row = document.createElement('tr');

        let makeCell = document.createElement('td');
        makeCell.innerHTML = rental.make;
        
        let modelCell = document.createElement('td');
        modelCell.innerHTML = rental.model;
        
        let numPersonsCell = document.createElement('td');
        numPersonsCell.innerHTML = rental.people;

        row.appendChild(makeCell);
        row.appendChild(modelCell);
        row.appendChild(numPersonsCell);
        rentalOptions.appendChild(row);
    });
    data["Jeeps"].forEach( (rental) => {
        console.log(rental.make + " " + rental.model)
        let row = document.createElement('tr');

        let makeCell = document.createElement('td');
        makeCell.innerHTML = rental.make;
        
        let modelCell = document.createElement('td');
        modelCell.innerHTML = rental.model;
        
        let numPersonsCell = document.createElement('td');
        numPersonsCell.innerHTML = rental.people;

        row.appendChild(makeCell);
        row.appendChild(modelCell);
        row.appendChild(numPersonsCell);
        rentalOptions.appendChild(row);
    });
}

getRentalData();