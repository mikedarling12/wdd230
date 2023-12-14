const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');

hambutton.addEventListener('click', () => {
    console.log("Click");
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open');
});