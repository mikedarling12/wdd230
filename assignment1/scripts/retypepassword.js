const pw1 = document.querySelector("#password1");
const pw2 = document.querySelector("#password2");
//const message = document.querySelector("#formmessage");

pw2.addEventListener("focusout", () => {
    if (pw1.value !== pw2.value) {
		pw2.style.backgroundColor = "#fff0f3";
		pw2.value = "";
		pw2.focus();
	} else {
		pw2.style.backgroundColor = "#fff";
		pw2.style.color = "#000";
	}
});

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}