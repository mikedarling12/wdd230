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

        const portrait = document.createElement('img');

        portrait.setAttribute('src', company.image);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        companyName.textContent = `${company.name}`;
        companyAddress.textContent = `${company.address}`;
        companyPhone.textContent = `${company.phoneNumber}`;
        companyWebsite.textContent = `${company.websiteURL}`;
        
        card.appendChild(portrait);
        card.appendChild(companyName);
        card.appendChild(companyAddress);
        card.appendChild(companyPhone);
        card.appendChild(companyWebsite);

        card.setAttribute("id","company");
        
        cards.appendChild(card);
    });
}

getCompanyData();