document.addEventListener('DOMContentLoaded', heroHandler);
	
function heroHandler () {
	const images = [
		'./images/Adult-Book-Club.png',
		'./images/GMA_Main_BookClubMontage_March_v01_ks_1710354921581_hpMain_16x9_1600.jpg',
		'./images/Group-of-open-books-photographed-from-top-down.png',
		'./images/how-to-host-a-virtual-book-club2-1585775401.jpg',
		'./images/shutterstock_240069319.png'
	];

	let currentIndex = 0;
	const heroElement = document.getElementsByClassName('hero')[0];

	function changeBackgroundImage() {
		heroElement.style.background = `url(${images[currentIndex]}) no-repeat center center`;
		heroElement.style.backgroundSize = 'cover';
		currentIndex = (currentIndex + 1) % images.length;
	}
	setInterval(changeBackgroundImage, 4500);
	changeBackgroundImage();
};
