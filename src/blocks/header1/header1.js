import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import { driveMenu } from "../../js/libs/driveMenu";

(() => {
	const header = document.querySelector('.header1');
	if (! header) return;

	const navi = header.querySelector('.header1__navi');
	const toggle = header.querySelector('.header1__toggle');
	const close = header.querySelector('.header1__close');

	const menu = driveMenu(navi, [toggle, close], {
		omitToClose: '.modal',
		class: 'opened',
		open: function() {
			disablePageScroll();
			toggle.classList.add('opened');
			document.body.classList.add('underlay');

		},
		close: function() {
			enablePageScroll();
			toggle.classList.remove('opened');
			document.body.classList.add('underlay_closing');
			
			this.addEventListener('transitionend', e => {
				document.body.classList.remove('underlay', 'underlay_closing');
			}, { once: true });
		}
	});
	
	window.addEventListener('scroll', () => {
		header.classList[window.scrollY < 30 ? 'remove': 'add']('header1_scrolled');
	});

	// чтобы не перекрывались с сайдбаром
	document.querySelector('button.sidebar1__toggle')
		?.addEventListener('click', (e) => menu.menuClose(e, () => {
			toggle.classList.remove('opened');
			enablePageScroll();
		}));

	navi.addEventListener('swiped-left', (e) => menu.menuClose(e));

})();