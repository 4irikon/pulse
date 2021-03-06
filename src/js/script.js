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
		prevArrow: '<button type="button" class="prev"><img src="../icons/left.svg"></button>',
		nextArrow: '<button type="button" class="next"><img src="../icons/right.svg"></button>',
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
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	// $('.catalog-item__link').each(function(i) {
	// 	$(this).on('click', function(e) {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	})
	// });
	// $('.catalog-item__back').each(function(i) {
	// 	$(this).on('click', function(e) {
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
	// 	})
	// });

	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};
	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	// Modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});

	$('.button__mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});

	function validateForm(form){
		$(form).validate({
			rules: {
				// simple rule, converted to {required:true}
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				// compound rule
				email: {
					required: true,
					email: true,
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, укажите ваше имя",
					minlength: jQuery.validator.format("Требуется минимум {0} символа!")
				},
				phone: "Пожалуйста, укажите ваш № телефона",
				email: {
					required: "Нам нужен ваш адрес электронной почты, чтобы с вами связаться",
					email: "Пожалуйста, укажите правельный адрес электронной почты."
				}
			}
		});
	};

	validateForm('#consultation-form');
	validateForm('#consultation form');
	validateForm('#order form');

	$('input[name=phone]').mask("+7 (999) 999-99-99");

	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
		}).done(function() {
				$(this).find("input").val("");
				$('#consultation, #order').fadeOut();
				$('.overlay, #thenks').fadeIn('slow');

				$('form').trigger('reset');
		});
		return true;
	});

	// $('form').submit(function(e) {
	// 	e.preventDefault();
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mailer/smart.php",
	// 		data: $(this).serialize()
	// 	}).done(functin(),
	// 		$(this),find("input").val(""),
	// 		$('#consultation, #order').fadeOut(),
	// 		$('.overlay, #thanks').fadeIn('slow'),
	// 		$('form').trigger('reset'),
	// 	);
	// 	return false;
	// });

	// Smooth scroll and pageup

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href=#up]").click(function(){
				const _href = $(this).attr("href");
				$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
				return false;
	});

	new WOW().init();

});

// const slider = tns({
// 	container: '.carousel__inner',
// 	items: 1,
// 	slideBy: 'page',
// 	autoplay: false,
// 	controls: false,
// 	nav: false
// 	// controlsText: [
// 	// 	'<img src="../icons/left.svg">',
// 	// 	'<img src="../icons/right.svg">'
// 	// ]
// });

// document.querySelector('.prev').addEventListener('click', function () {
// 	slider.goTo('prev');
// });
// document.querySelector('.next').addEventListener('click', function () {
// 	slider.goTo('next');
// });

// $('.owl-carousel').owlCarousel({
// 	loop:true,
// 	margin:10,
// 	nav:true,
// 	responsive:{
// 		0:{
// 			items:1
// 		},
// 		600:{
// 			items:3
// 		},
// 		1000:{
// 			items:5
// 		}
// 	}
// })