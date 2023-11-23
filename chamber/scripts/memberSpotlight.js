const dataurl = 'data/companies.json';
const cards = document.querySelector('#spotlight-placeholder');

async function getCompanyData() {
    const response = await fetch(dataurl);
    const data = await response.json();
    highlightCompanies(data);
}
function highlightCompanies(data) {
    var quantityLimit = 2;
    var currentQuantity = 0;
    data.companies.forEach(company => {
        if (currentQuantity < quantityLimit) {
            const card = document.createElement('section');
            const companyName = document.createElement('a');
            const membershipLevel = document.createElement('p');
    
            const portrait = document.createElement('img');
    
            portrait.setAttribute('src', company.image);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '340');
            companyName.textContent = `${company.name}`;
            companyName.setAttribute("href", company.websiteURL);
            membershipLevel.textContent = `Membership Level: ${company.membership}`;
            
            card.appendChild(portrait);
            card.appendChild(companyName);
            card.appendChild(membershipLevel);
    
            card.setAttribute("id","company");
            
            cards.appendChild(card);
            currentQuantity++;
        }
    });
}

getCompanyData();