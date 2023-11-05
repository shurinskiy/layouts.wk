import scrollLock from 'scroll-lock';
import { menuToggle } from "../../js/libs/menuToggle";

(() => {
	const aside = document.querySelector('.aside_blind');
	if(!aside) return;
	
	const toggles = aside.querySelectorAll('.aside__toggle, .aside__close');

	const sidebar = menuToggle(aside, toggles, {
		scrollLock: scrollLock,
		omitToClose: '.modal',
		class: 'opened'
	});
	
	// открытие и закрытие меню, свайпом на мобильных устройствах
	aside.addEventListener('swiped-right', (e) => sidebar.menuClose(e));

})();
