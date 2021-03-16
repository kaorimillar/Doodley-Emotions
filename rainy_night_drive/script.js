


let eyes = document.querySelector(".lulu_eyes_blinking");


function setRandomDuration() {

	eyes.style.animationDuration = Math.floor(Math.random()*10 + 1) + "s";
} 

eyes.addEventListener("animationiteration", setRandomDuration);