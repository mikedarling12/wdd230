const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chapterArray = getChapterList() || [];

chapterArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function() {
    if (input.value != "") {
        displayList(input.value);
        chapterArray.push(input.value);
        setChapterList();
        //const li = document.createElement('li');
        //const deleteButton = document.createElement('button');
        //li.textContent = input.value;
        //deleteButton.textContent = 'X';
        //li.append(deleteButton);
        //list.append(li);
        //deleteButton.addEventListener('click', function() {
        //    list.removeChild(li);
        //    input.focus();
        //});
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter(item => item !== chapter);
    setChapterList;
}