
"use strict"

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

$(document).ready(function(){
	$('.slider').slick({
		arrows: false,
		dots: true,
		centerMode: true,
		slidesToShow: 1,
		variableWidth: true
	});
});