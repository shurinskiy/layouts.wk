import { updateLocalStorage } from "../../js/libs/utils";
import slide from "../../js/libs/driveSlide";

(() => {
	const storage = JSON.parse(localStorage.getItem('ladder1')) || [];

	document.querySelectorAll('.ladder1__item')?.forEach((item, i) => {
		item.classList.toggle('opened', storage.includes(i));

		item.querySelector('button')?.addEventListener('click', (e) => {
			const opened = slide.toggle(item.querySelector('.ladder1__level'), { duration: 300 });

			item.classList.toggle('opened', opened);
			updateLocalStorage('ladder1', i, opened);
		});
	});

})();