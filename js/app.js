window.addEventListener('load', function () {
	// Inititing splide slider
	if (document.querySelector('.packages--slider')) {
		new Splide('.packages--slider', {
			type: 'loop',
			perPage: 3.5,
			perMove: 1,
			pagination: false,
			gap: '20px',
			speed: 1000,
			rewind: true,
		}).mount();
	}
});
