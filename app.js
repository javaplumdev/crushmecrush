const btnGenerate = document.querySelector('.btnGenerate');
const userName = document.querySelector('.userName');
const crushName = document.querySelector('.crushName');
const crushPercentage = document.querySelector('.crushPercentage');
const reminder = document.getElementsByClassName('reminder');
const crushMessage = document.querySelector('.crushMessage');

btnGenerate.addEventListener('click', function () {
	var crushChance = Math.floor(Math.random() * 100) + 1;
	var userNameValue = userName.value;
	var crushNameValue = crushName.value;

	for (let i = 0; i < reminder.length; i++) {
		if (userName.value == '' && crushName.value == '') {
			btnGenerate.parentElement.children[1].innerHTML =
				'Please enter your name';
			btnGenerate.parentElement.children[3].innerHTML =
				'Please enter your crush name';
		} else if (userName.value == '') {
			btnGenerate.parentElement.children[1].innerHTML =
				'Please enter your name';
		} else if (crushName.value == '') {
			btnGenerate.parentElement.children[3].innerHTML =
				'Please enter your crush name';
		} else {
			// window.location = 'result.html';
			btnGenerate.parentElement.children[1].style.opacity = '0';
			btnGenerate.parentElement.children[3].style.opacity = '0';
			userName.value = '';
			crushName.value = '';
			crushPercentage.textContent = `Hi ${userNameValue}! Your crush ${crushNameValue} has ${crushChance}% chance that likes you too!`;
			if (crushChance >= 1 && crushChance <= 20) {
				crushMessage.textContent = `You crush doesn't like you. Face it. :>`;
			} else if (crushChance >= 21 && crushChance <= 40) {
				crushMessage.textContent = `You have a chance. But it is one a million`;
			} else if (crushChance >= 41 && crushChance <= 60) {
				crushMessage.textContent = `GO OUT NOW!! YOU MIGHT HAVE A CHANCE!!`;
			} else if (crushChance >= 61 && crushChance <= 80) {
				crushMessage.textContent = `Your crush defenitely likes you. But you are too shy bruh`;
			} else if (crushChance >= 81 && crushChance <= 100) {
				crushMessage.textContent = `YOUR CRUSH REALLY REALLY LIKES YOU!! GO OUT NOW AND ASK YOUR CRUSH ON A DATE`;
			}
		}
	}
});
