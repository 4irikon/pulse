// var name = "Ivan";

// let number = 7;
// const pi = 3.14;

// number = 4;

// let leftBorderWidth = 200;

// number
//string - "" , '' , ``
// terue/fals
//null
//undefined
// {
// 	name: 'apple',
// 	color: 'green',
// 	weight: 200
// }
// simbol
//alert(1234)
//console.log(number);
// let answer = confirm("Вам есть 18?");
// console.log(answer);


// let answer = prompt("Вам есть 18?", "");
// console.log(answer);

// console.log(4+'fdd');

// let isChecked = true,
// 	isClose = false;

// console.log(isChecked && isClose);

// console.log(isChecked || isClose);

// if (2*6 == 8*1) {
// 	console.log('верно')
// } else {
// 	console.log('ошибка')
// }

// let answer = confirm("Вам есть 18?");
// if (answer) {
// 	console.log('проходите')
// } else {
// 	console.log('уходи')
// }

// const num = 50;

// if (num < 49) {
// 	console.log('Неправильно')
// } else if (num > 100) {
// 	console.log('Много')
// } else {
// 	console.log('Верно')
// }

// for (let i = 1; i < 8; i++) {
// 	console.log(i);
// }

// function logging(a, b) {
// 	console.log(a + b)
// }

// logging(3, 5);

// logging(6, 8);

$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		// adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
		
	});
});