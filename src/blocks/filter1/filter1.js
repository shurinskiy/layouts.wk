import { updateLocalStorage } from "../../js/libs/utils";
import slide from "../../js/libs/driveSlide";

(() => {
	const filters = document.querySelectorAll('.filter1');
	let storage = JSON.parse(localStorage.getItem('filters')) || [];

	filters?.forEach((filter, i) => {
		filter.classList.toggle('opened', storage.includes(i));

		filter.querySelector('.filter1__title')?.addEventListener('click', (e) => {
			const opened = slide.toggle(filter.querySelector('.filter1__body'), { duration: 300 });

			filter.classList.toggle('opened', opened);
			updateLocalStorage('filters', i, opened);
		});
	});

})();