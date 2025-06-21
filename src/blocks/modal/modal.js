import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import { makeModal } from "../../js/libs/makeModal";

(() => {

	const modal = makeModal({
		preserve: true,
		init(underlay) {

		},
		open(modal, source) {
			disablePageScroll();

		},
		close() {
			enablePageScroll();

		}
	});

})();