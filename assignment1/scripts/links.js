const baseURL = "https://mikedarling12.github.io/wdd230/";
const linksURL = "https://mikedarling12.github.io/wdd230/assignment1/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data);
}

function displayLinks(data) {
    const lessons = data.lessons;
    let activitiesList = document.getElementById("activitiesList");
    lessons.forEach(lesson => {
        let week = document.createElement('li');
        week.textContent = `Week ${lesson.lesson}:`;

        lesson.links.forEach(assignment => {
            let link = document.createElement('a');

            let linkText = document.createTextNode(assignment.title);
            link.appendChild(linkText);
            //link.textContent = assignment.title;
            link.href = assignment.url;
            //week.textContent += " " + link;
            week.appendChild(link);
        });
        activitiesList.appendChild(week);
    });
}

getLinks();