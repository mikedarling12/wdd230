let modeButton = document.querySelector("#mode");
let root = document.querySelector(":root");

modeButton.addEventListener('click', function() {
	if (modeButton.textContent.includes("Light Mode")) {
		root.style.setProperty('--primary-color', '#000');
		root.style.color = "#fff";
		modeButton.textContent = "Dark Mode";
	} else {
		root.style.setProperty('--primary-color', '#FB8500');
		root.style.color = "#000";
		modeButton.textContent = "Light Mode";
	}
});