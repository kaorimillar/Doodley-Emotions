
let button = document.querySelector("#lulu_wheels");
let heart = document.querySelector("#heart");
let fast = document.querySelector("#fast");
let loveYou = document.querySelector("#loveYou")


button.addEventListener('click', () => {
	if (heart.style.display === 'none') {
		heart.style.display = 'block';
		
	} else {
		heart.style.display = 'none';
	}
})

button.addEventListener('dblclick', () => {
	if (loveYou.style.display === 'none') {
		loveYou.style.display = 'block';
		
	} else {
		loveYou.style.display = 'none';
	}
})






