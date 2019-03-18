var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColorButton = document.querySelector("#randomColorButton");

// Checking variables on load:
// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);
// console.log(randomColourButton);

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function getRandomColor() {
	var characters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += characters[Math.floor(Math.random() * 16)];
		//Math.random to generate a float between 0 & 1.  Mutiply by 16 (number of character options for Hex code). Math.floor to turn it into an integer.
	}
	return color;
}

function setRandomColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

setGradient();  // This function is run to make the initial linear gradient information display in the <h3>

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomColorButton.addEventListener("click", setRandomColors);