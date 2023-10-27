const pageVisits = document.querySelector('#visitMsg');

// Get the visit count.
let lastVisit = window.localStorage.getItem('last-visit');

// Display a message based on when they last viewed the site.
if (lastVisit == "") {
    pageVisits.textContent = "Welcome! Let us know if you have any questions.";
} else {
    let currentDate = Date.now();
    let dateDifference = currentDate - lastVisit;
    let dayDifference = dateDifference / (1000 * 3600 * 24);
    if (dayDifference < 1.0) {
        pageVisits.textContent = "Back so soon! Awesome!";
    } else {
        pageVisits.textContent = "You last visited n days ago.";
    }
}

// Update the new last visit date to now.
localStorage.setItem('last-visit', Date.now());