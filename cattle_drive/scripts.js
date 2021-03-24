


let eyes = document.querySelector(".blinking_eyes");


function setRandomDuration() {

	eyes.style.animationDuration = Math.floor(Math.random()*10 + 1) + "s";
} 

eyes.addEventListener("animationiteration", setRandomDuration);








function bovine() {
	document.getElementById("scenery1").src = "tenor.gif";
}

function follow() {
	document.getElementById("scenery1").src = "drive_scenery.gif";
}

function follow2() {
	document.getElementById("scenery1").src = "motorbike.gif";
}

function stars() {
	document.getElementById("scenery1").src = "giphy2.gif";
}