let modeButton = document.querySelector("#mode");
let root = document.querySelector(":root");

modeButton.addEventListener('click', function() {
    console.log("Boop");
	if (modeButton.textContent.includes("🕶️")) {
		root.style.setProperty('--primary-color', '#000');
		root.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		root.style.setProperty('--primary-color', '#FB8500');
		root.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});