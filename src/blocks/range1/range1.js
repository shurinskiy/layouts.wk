import { tweakerRangeDouble } from "../../js/libs/tweakerRangeDouble";

(() => {
	document.querySelectorAll('.filter1__range').forEach((range) => {
		tweakerRangeDouble(range, { class: 'range1', input: true });
	});

})();
