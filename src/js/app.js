

import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {

	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const elements = document.querySelectorAll('.acardion-title');
const accardions = document.querySelectorAll('.acardion-item');
const accardionsTitle = document.querySelectorAll('.acardion-title');
const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu-body');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const startedLink = document.querySelector('.started-link');



/* нумерация аккардиона  */
elements.forEach(function (item, i) {
	item.prepend(i + 1 + '.');
});
/* ... */
/* аккардион */
accardionsTitle.forEach(function (title) {

	title.addEventListener('click', () => {
		let parent = title.parentNode;
		if (parent.classList.contains('active')) {
			parent.classList.remove('active');
		} else {
			accardions.forEach(function (i) {
				i.classList.remove('active');
			})
			parent.classList.add('active');
		}

	})
	/* ... */

});

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('is-active');
	menuList.classList.toggle('is-active');

})

