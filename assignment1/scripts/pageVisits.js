const pageVisits = document.querySelector('#pageVisits');

// Get the visit count.
let numVisits = Number(window.localStorage.getItem('visits-count'));

// Display the visit count.
if (numVisits !== 0) {
    pageVisits.textContent = numVisits;
} else {
    pageVisits.textContent = 0;
}

// Increase the number of visits and store it.
numVisits++;
localStorage.setItem('visits-count', numVisits);