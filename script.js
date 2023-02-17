'use strict'

const btn = document.querySelector('#btn'),
	input = document.querySelector('#text'),
	square = document.querySelector('#square'),
	eBtn = document.querySelector('#e_btn'),
	range = document.querySelector('#range'),
	rangeSpan = document.querySelector('#range-span'),
	circle = document.querySelector('#circle');

btn.addEventListener('click', () => {
	square.style.backgroundColor = `${input.value.trim(' ')}`;
	input.value = '';
});

eBtn.addEventListener('click', () => {
	eBtn.style.display = 'none';
});

range.value = 50;
rangeSpan.textContent = '50';

range.addEventListener('input', () => {
	rangeSpan.textContent = range.value;

	circle.style.width = `${range.value}%`;
	circle.style.height = `${range.value}%`;
});