const url = 'data/companies.json';
const cards = document.querySelector('#cards');

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    displayCompanies(data);
}
function displayCompanies(data) {
    data.companies.forEach(company => {
        const card = document.createElement('section');
        const companyName = document.createElement('h3');
        const companyAddress = document.createElement('p');
        const companyPhone = document.createElement('p');
        const companyWebsite = document.createElement('p');
        const membershipLevel = document.createElement('p');

        const portrait = document.createElement('img');

        portrait.setAttribute('src', company.image);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute("id", "listDisabled");
        companyName.textContent = `${company.name}`;
        companyName.setAttribute("id", "listEnabled");
        companyAddress.textContent = `${company.address}`;
        companyAddress.setAttribute("id", "listEnabled");
        companyPhone.textContent = `${company.phoneNumber}`;
        companyPhone.setAttribute("id", "listDisabled");
        companyWebsite.textContent = `${company.websiteURL}`;
        companyWebsite.setAttribute("id", "listDisabled");
        membershipLevel.textContent = `Membership Level: ${company.membership}`;
        membershipLevel.setAttribute("id", "listDisabled");
        
        card.appendChild(portrait);
        card.appendChild(companyName);
        card.appendChild(companyAddress);
        card.appendChild(companyPhone);
        card.appendChild(companyWebsite);
        card.appendChild(membershipLevel);

        card.setAttribute("id","company");
        
        cards.appendChild(card);
    });
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {
    console.log("Grid Button");
    var cardElements = document.querySelectorAll("#listDisabled");
    cardElements.forEach( (cardElement) => {
        cardElement.style.display = "inline";
    });
    document.getElementById("cards").style.gridColumn = "3 / 4";
});

listbutton.addEventListener("click", () => {
    console.log("List Button");
    var cardElements = document.querySelectorAll("#listDisabled");
    cardElements.forEach( (cardElement) => {
        cardElement.style.display = "none";
    });
    document.getElementById("cards").style.gridColumn = "3 / 5";
});

getCompanyData();