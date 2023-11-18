document.getElementById("banner-button").addEventListener("click", hideBanner);

function hideBanner() {
    var banner = document.getElementById("banner");
    banner.style.display = "none";
}

function displayBanner() {
    var currentDay =  new Date().getDay();
    if (currentDay == 1 || currentDay == 2 || currentDay == 3) {
        var banner = document.getElementById("banner");
        banner.style.display = "flex";
    } else {
        hideBanner();
    }
}

displayBanner();