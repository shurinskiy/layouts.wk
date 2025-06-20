import { tweakerRangeSingle } from "../../js/libs/tweakerRangeSingle";

(() => {
	document.querySelectorAll('.filter1__range2').forEach((range) => {
		tweakerRangeSingle(range, { class: 'range2' });
	});


})();