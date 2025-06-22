(() => {

	document.querySelectorAll('.card1').forEach((card) => {
		// const { clear } = window.getComputedStyle(card);
		// if (clear !== 'none') return;

		card.addEventListener('mouseenter', (e) => {
			const { height } = card.children[0]?.getBoundingClientRect();
			card.style.setProperty('--height', `${height}px`);
		});
		
		card.addEventListener('mouseleave', (e) => {
			card.style.removeProperty('--height');
		});
	});

})();