import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import { driveSidebar } from "../../js/libs/driveSidebar";
import { driveMenu } from "../../js/libs/driveMenu";

(() => {
	const sidebar = document.querySelector('.sidebar1');
	if(!sidebar) return;

	const toggles = sidebar.querySelectorAll('.sidebar1__toggle, .sidebar1__close');

	const aside = driveMenu(sidebar, toggles, {
		omitToClose: '.modal',
		class: 'opened',
		open: function() {
			disablePageScroll();
			document.body.classList.add('underlay');

		},
		close: function() {
			enablePageScroll();
			document.body.classList.add('underlay_closing');
			
			this.addEventListener('transitionend', e => {
				document.body.classList.remove('underlay', 'underlay_closing');
			}, { once: true });
		}
	});

	sidebar.addEventListener('swiped-right', (e) => aside.menuClose(e));
	driveSidebar(sidebar.querySelector('.sidebar1__inner'));

})();