import { textareaResize } from "../../js/libs/utils";
import { fieldValidate } from "../../js/libs/fieldValidate";
import Inputmask from "inputmask";

(() => {
	const form = document.querySelector('form.form1');
	if (! form) return;

	// маска для ввода телефона
	Inputmask({ 
		"mask": "+7 (999) 999-99-99", 
		showMaskOnHover: false 
	}).mask(form.querySelectorAll('input[type="tel"]'));

	// оформление для прикрепления файла	
	form.querySelectorAll('.form1__file input[type="file"]').forEach((input) => {
		input.addEventListener('change', (e) => {
			const file = e.currentTarget.files[0];
			const button = e.currentTarget.parentNode;
	
			if (file) {
				button.querySelector('span').innerText = file.name;
				button.classList.add('added');
			}
		});
	});

	// фукция валидации полей
	const validate = function(input) {
		const check = fieldValidate(input);
		const field = input.closest('.form1__field');
		field.classList.toggle('error', !check.valid);
		field.querySelector('.form1__error').innerText = check.message ?? '';

		return check.valid;
	}

	form.querySelectorAll('.form1__input input, .form1__input textarea').forEach(input => {
		// адаптивное поле ввода текста
		(input.tagName === 'TEXTAREA') && textareaResize(input);

		// валидация полей при заполнении
		['change', 'blur'].forEach(event => {
			input.addEventListener(event, e => validate(input));
		});
	});

	form.addEventListener('submit', async function(e) {
		e.preventDefault();
		let valid = true;

		// валидация полей при отправке
		this.querySelectorAll('[data-rules]').forEach(input => {
			const check = validate(input);
			valid &&= check;
		});

		if (valid) {
			this.classList.add('pending');

			try {
				// тут логика отправки формы
			} catch (error) {
				console.error(error);
			} finally {
				this.classList.remove('pending');
			}
		}
	});

})();
