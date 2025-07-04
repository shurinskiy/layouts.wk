/* 
* В качестве исходной разметки, используется пара инпутов с типом "range",
* в обертке с любым классом или идентификатором. В результате создается 
* структура из двух полей с типом "range" и двух полей с типом "number", 
* связанных в соответствии с заданными опциями. А так-же элемента span, 
* ширина которого зависит от значений заданных движками или полями ввода.
* Стилизацию структуры, нужно производить самостоятельно.
* 
* @исходная разметка:
* 
<div class="someblock">
	<input type="range">
	<input type="range">
</div>
* 
* @результирующая разметка:
* 
<div class="someblock range">
	<div class="range__values">
		<input type="number">
		<input type="number">
	</div>
	<div class="range__slider" data-range-start-min="0" data-range-start-max="7500" data-range-max="10000">
		<input type="range" min="0" max="10000" step="100">
		<input type="range" min="0" max="10000" step="100">
		<span style="left: 25%; right: 25%;"></span>
	</div>
</div>
* 
* @вызов:
* 
import { tweakerRangeDouble } from "../../js/libs/tweakerRangeDouble";
tweakerRangeDouble(document.querySelector('.someblock'), {
	rangeMax: 10000,
	rangeStartMin: 2500,
	rangeStartMax: 7500,
	rangeStep: 100,
	rangeGap: 1000,
	input: false
});
*/

export const tweakerRangeDouble = (item, options = {}) => {
		
	class Range {
		constructor(item, options) {
			if(! (item instanceof Element)) return;

			this.options = {
				class: 'range',
				startMin: +item.dataset?.rangeStartMin || 1000,
				startMax: +item.dataset?.rangeStartMax || 7500,
				maxPrice: +item.dataset?.rangeMax || 10000,
				step: +item.dataset?.rangeStep || 100,
				gap: +item.dataset?.rangeGap || 1000,
				input: true,
				...options
			};

			this.$wrapper = item;
			this.$prices = [];
			this.$controls = [...item.children].filter(child => child.type === 'range');
			this.$progress = document.createElement('span');
			this.$slider = document.createElement('div');
			this.$top = document.createElement('div');
			this.render();
			this.init();
		}

		render() {
			if (! this.$controls || this.$controls.length !== 2) return;

			this.$wrapper.classList.add(this.options.class);
			this.$top.classList.add(`${this.options.class}__values`);
			this.$slider.classList.add(`${this.options.class}__slider`);
			
			this.$controls.forEach((control, i) => {
				const value = i ? this.options.startMax : this.options.startMin;
				
				this.$prices[i] = document.createElement('input');
				this.$prices[i].disabled = !this.options.input;
				this.$prices[i].type = 'number';
				this.$prices[i].value = value;
				
				control.min = 0;
				control.max = this.options.maxPrice;
				control.step = this.options.step;
				control.value = value;

				this.$top.append(this.$prices[i]);
				this.$slider.append(control);
			});
			
			this.$slider.append(this.$progress);
			this.$wrapper.append(this.$top, this.$slider);
		}

		#clampPrices(min, max, current = 'min') {
			const { gap, maxPrice } = this.options;

			min = Math.min(Math.max(0, min), maxPrice);
			max = Math.min(Math.max(0, max), maxPrice);

			if (max - min < gap) {
				if (current === 'min') {
					max = Math.min(maxPrice, min + gap);
					min = max - gap;
				} else {
					min = Math.max(0, max - gap);
					max = min + gap;
				}
			}

			return [min, max];
		}

		#updateValues(min, max) {
			this.$prices[0].value = min;
			this.$prices[1].value = max;
			this.$controls[0].value = min;
			this.$controls[1].value = max;

			this.$progress.style.left = (min / this.options.maxPrice * 100) + "%";
			this.$progress.style.right = (100 - max / this.options.maxPrice * 100) + "%";
		}

		setControls(e) {
			const current = e?.currentTarget === this.$controls[0] ? 'min' : 'max';
			let min = +this.$controls[0].value;
			let max = +this.$controls[1].value;

			this.#updateValues(...this.#clampPrices(min, max, current));
		}

		setPrices(e) {
			const current = e?.currentTarget === this.$prices[0] ? 'min' : 'max';
			let min = +this.$prices[0].value;
			let max = +this.$prices[1].value;

			this.#updateValues(...this.#clampPrices(min, max, current));
		}

		init() {
			this.$controls.forEach(control => {
				control.addEventListener("input", this.setControls.bind(this));
			});	
		
			this.options.input && this.$prices.forEach(price => {
				price.addEventListener("input", this.setPrices.bind(this));
				price.addEventListener("change", this.setPrices.bind(this));
			});
			
			this.setControls();
		}
	}
	return new Range(item, options);
}