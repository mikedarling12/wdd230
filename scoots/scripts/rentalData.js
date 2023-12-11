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
    data["Honda"].forEach( (make) => {
        make.forEach( (model) => {
            console.log(make + " " + model)
            let row = document.createElement('tr');

            let makeCell = document.createElement('td');
            makeCell.innerHTML = make;
            
            let modelCell = document.createElement('td');
            modelCell.innerHTML = model;
            
            let numPersonsCell = document.createElement('td');
            numPersonsCell.innerHTML = 1;

            row.appendChild(makeCell);
            row.appendChild(modelCell);
            row.appendChild(numPersonsCell);
            rentalOptions.appendChild(row);
        });
    });
}

getRentalData();