"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = jQuery;
var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {
				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});

				_this.menuMobile.classList.toggle("active");

				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},
	closeMenu: function closeMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");
		});

		_this.menuMobile.classList.remove("active");

		_this.body.classList.remove("fixed");
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		_this.toggleMenu();

		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);

				_this.closeMenu();
			});
		});

		document.addEventListener('mouseup', function (event) {
			var container = event.target.closest(".menu-mobile--js.active"); // (1)

			if (!container) {
				_this.closeMenu();
			}
		});
	},
	// /mobileMenu
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).show().addClass('active');
		});
	},
	// /табы  
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	} // /inputMask

};

function eventHandler() {
	var _objectSpread2;

	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs'); //JSCCommon.mobileMenu();

	JSCCommon.inputMask(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect

	$(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/main-menu-agency.jpg);"></div>'); // /добавляет подложку для pixel perfect
	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {
	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {
	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {
	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 
	// /закрыть/открыть мобильное меню

	function heightses() {
		var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $("header ").innerHeight();
		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		}); // конец добавил

		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {//heightses();
	}); //heightses();
	// листалка по стр
	// .top-nav li a, .scroll-link

	$(".ancor-js").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var defaultSl = {};
	var swiper4 = new Swiper('.color-slider', _objectSpread(_objectSpread({}, defaultSl), {}, (_objectSpread2 = {
		slidesPerView: 'auto',
		watchOverflow: true,
		spaceBetween: 0,
		freeMode: true
	}, _defineProperty(_objectSpread2, "watchOverflow", true), _defineProperty(_objectSpread2, "slidesPerGroup", 3), _defineProperty(_objectSpread2, "loop", true), _defineProperty(_objectSpread2, "loopFillGroupWithBlank", true), _defineProperty(_objectSpread2, "touchRatio", 0.2), _defineProperty(_objectSpread2, "slideToClickedSlide", true), _defineProperty(_objectSpread2, "freeModeMomentum", true), _defineProperty(_objectSpread2, "navigation", {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}), _objectSpread2))); // modal window

	var gets = function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");

		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}

		return b;
	}(); // form


	var gets = function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");

		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}

		return b;
	}(); // form


	$("form").submit(function (e) {
		e.preventDefault();
		var th = $(this);
		var data = th.serialize();
		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
		$.ajax({
			url: 'action.php',
			type: 'POST',
			data: data
		}).done(function (data) {
			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-thanks',
				type: 'inline'
			}); // window.location.replace("/thanks.html");

			setTimeout(function () {
				// Done Functions
				th.trigger("reset"); // $.magnificPopup.close();
				// ym(53383120, 'reachGoal', 'zakaz');
				// yaCounter55828534.reachGoal('zakaz');
			}, 4000);
		}).fail(function () {});
	}); //header block
	//header

	$('.search-btn-js, .close-desctop-search-js').click(function () {
		$('.desctop-search-js').toggleClass('active');
	});
	$('.burger-js').click(function () {
		$('.burger-js, .header, .mob-menu-js').toggleClass('active');
		document.body.classList.toggle('fixed');
	}); //menu fix

	window.addEventListener('resize', function () {
		if (window.matchMedia("(min-width: 1200px)").matches) {
			//fix search visiable
			$('.desctop-search-js').removeClass('active'); //hide mob menu

			$('.burger-js, .header, .mob-menu-js').removeClass('active');
			document.body.classList.remove('fixed');
		}
	}, {
		passive: true
	}); //calculate triangle left and headersubMenuJs for desktop

	function calculateTiangleLeft() {
		var menuItem = this;
		var triangle = menuItem.querySelector('.menu-hover-popup-triangle');
		if (!triangle) return;
		var menuItemLeft = menuItem.offsetLeft;
		var menuItemWidth = menuItem.offsetWidth;
		var triangleWidth = triangle.offsetWidth;
		var triangleLeft = menuItemLeft + menuItemWidth / 2 - triangleWidth / 2;
		triangle.style.left = triangleLeft + 'px';
	} //


	$('.header-menu > li').mouseenter(function () {
		calculateTiangleLeft.call(this);
		$(this).addClass('hover');
	});
	$('.header-menu > li').mouseleave(function () {
		$(this).removeClass('hover');
	});
	$('.cross-btn-sub-menu-js').click(function () {
		var GrandParent = this.closest('.menu-hover-popup').closest('li');
		$(GrandParent).trigger('mouseleave');
	}); //
	//mob sub menu js

	$('.mob-menu > li').click(function () {
		var subMenu = this.querySelector('.mob-menu-sub-menu'); //let clickOnHeadline = event.target.closest('.sub-menu-box-mob-js');

		if (!subMenu) return;
		event.preventDefault(); //close all early opened

		$('.mob-menu > li > a').removeClass('active');
		$('.mob-menu > li .mob-menu-sub-menu').slideUp(function () {
			$(this).removeClass('active');
		}); //toggle current

		var thisLink = this.parentElement.querySelectorAll('.mob-menu > li > a')[$(this).index()];

		if (subMenu.classList.contains('active')) {
			$(subMenu).slideUp(function () {
				$(this).removeClass('active');
			});
			$(thisLink).removeClass('active');
		} else {
			$(subMenu).slideDown(function () {
				$(this).addClass('active');
			});
			$(thisLink).addClass('active');
		} //

	}); //

	window.addEventListener('scroll', setHeaderFixed, {
		passive: true
	});

	function setHeaderFixed() {
		if ($(window).scrollTop() > window.innerHeight) {
			$('header.header').addClass('fixed');
		} else {
			$('header.header').removeClass('fixed');
		}
	} //headerBl slider


	var headerBlSlider = new Swiper('.header-block-slider-js', {
		slidesPerView: 1,
		//direction: 'vertical',
		loop: true,
		//pagination
		//autoplay: {
		//	delay: 4000,
		//},
		pagination: {
			el: $(this).find('.header-bl-slider-js-pugin'),
			clickable: true
		}
	}); //sAPractice

	var AllParents = document.querySelectorAll('.agency-practice-slider-container');

	for (var _i = 0, _Object$entries = Object.entries(AllParents); _i < _Object$entries.length; _i++) {
		var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
				index = _Object$entries$_i[0],
				parent = _Object$entries$_i[1];

		var ApracticeSlider = new Swiper($(parent).find('.agency-practice-sw-cont-js'), {
			loop: true,
			slidesPerView: 'auto',
			//lazy load
			lazy: {
				loadPrevNext: true,
				loadPrevNextAmount: 5
			},
			//pugin
			pagination: {
				el: $(parent).find('.APractice-slider-js-pugin'),
				clickable: true
			} //autoplay
			//autoplay: {
			//	delay: 5000,
			//},

		});
	}

	var activeTabIndex = $('.sAgencyPractice__tabs-bar-item.active').index();
	$('.sAgencyPractice__tabs-bar-item').click(function () {
		if (this.classList.contains('active')) return;
		activeTabIndex = $(this).index();
		var thisSwiper = AllParents[activeTabIndex].querySelector('.agency-practice-sw-cont-js');
		window.setTimeout(function () {
			thisSwiper.swiper.update();
		}, 50);
	}); //sOurExp

	var ourExpSlider = new Swiper($('.our-exp-slider-container').find('.our-exp-sw-cont-js'), {
		loop: true,
		slidesPerView: 'auto',
		//lazy load
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5
		},
		//pugin
		pagination: {
			el: $(this).find('.OExp-slider-js-pugin'),
			clickable: true
		} //autoplay
		//autoplay: {
		//	delay: 5000,
		//},

	}); //sPortfolio

	var portfolioSlider = new Swiper($('.portfolio-slider-container').find('.portfolio-slider-js'), {
		loop: true,
		slidesPerView: 'auto',
		//lazy load
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5
		},
		//pugin
		pagination: {
			el: $(this).find('.portfolio-slider-js-pugin'),
			clickable: true
		} //autoplay
		//autoplay: {
		//	delay: 5000,
		//},

	}); //sSpecials

	var specialSlider = new Swiper('.special-swiper-js', {
		loop: true,
		//breakpoints
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			996: {
				slidesPerView: 2,
				spaceBetween: 31
			}
		},
		//pugin
		pagination: {
			el: $(this).find('.special-slider-pugin'),
			clickable: true
		}
	}); //sResult

	var resultSlider = new Swiper('.result-slider-js', {
		loop: true,
		navigation: {
			nextEl: '.result-slider-next',
			prevEl: '.result-slider-prev'
		}
	}); //bg js

	window.addEventListener('resize', setSResultBgSize, {
		passive: true
	});
	window.setTimeout(setSResultBgSize, 4000);

	function setSResultBgSize() {
		if (window.matchMedia("(max-width: 992px)").matches) {
			var sectionH = $('.sResult').outerHeight();
			var blackSecionH = $('.sResult__ten-plus-col').outerHeight();
			$('.sResult__bg-img-block').css({
				height: sectionH - blackSecionH + 'px'
			});
		} else {
			$('.sResult__bg-img-block').css({
				height: "100%"
			});
		}
	} //sWorkingProcess


	var workingPrSlider = new Swiper('.workinkg-pr-slider-js', {
		loop: true,
		//pugin
		pagination: {
			el: $(this).find('.workinkg-pr-slider-js-pugin'),
			clickable: true
		},
		//lazy load
		lazy: {
			loadPrevNext: true //loadPrevNextAmount: 5,

		},
		//bind slider to header
		on: {
			slideChange: function slideChange() {
				if (workingPrSlider) {
					//
					var headerItemIndOfCurrSlide = document.querySelector('.sWorkingProcess__header-item').parentElement.children[workingPrSlider.realIndex];
					setSlideEqToHeaderItem.call(headerItemIndOfCurrSlide);
				}
			}
		}
	});
	$('.sWorkingProcess__header-item').click(setSlideEqToHeaderItem);

	function setSlideEqToHeaderItem() {
		//disable in mob devices
		if (window.matchMedia("(max-width: 992px)").matches) return; //switch header index

		$('.sWorkingProcess__header-item').removeClass('active');
		$(this).addClass('active');
		var currHeaderItemIndex = $(this).index(); //switch slide

		if (currHeaderItemIndex !== workingPrSlider.realIndex) {
			workingPrSlider.slideTo(currHeaderItemIndex + 1);
		}
	} //sFAQ


	$('.sFAQ__faq-item-cont').click(function () {
		this.classList.toggle('active');
		$(this).find('p').slideToggle(function () {
			$(this).toggleClass('active');
		});
	}); //sProfit

	$('img.img-svg-js').each(function () {
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		$.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg'); // Add replaced image's classes to the new SVG

			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			} // Remove any invalid XML tags as per http://validator.w3.org


			$svg = $svg.removeAttr('xmlns:a'); // Check if the viewport is set, if the viewport is not set the SVG wont't scale.

			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
			} // Replace image with new SVG


			$img.replaceWith($svg);
		}, 'xml');
	}); // accordion
	//

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	if (isIE11) {
		$("body").prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
	} // First we get the viewport height and we multiple it by 1% to get a value for a vh unit


	var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

	document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

	window.addEventListener('resize', function () {
		// We execute the same script as before
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
	});
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
/*
let closeItself;
$('.header-menu > li').click(function () {
	let subMenuPopup = this.querySelector('.menu-hover-popup');
	if (!subMenuPopup) return

	//
	let crossBtn = event.target.closest('.cross-btn-sub-menu-js');
	if (crossBtn){
		$('.header-menu > li .menu-hover-popup').removeClass('active');
		$('.header-menu > li > a').removeClass('active');
		return
	}

	//we will need this later
	event.preventDefault();
	event.stopPropagation();

	//close menu other popups
	$('.header-menu > li .menu-hover-popup').removeClass('active');
	$('.header-menu > li > a').removeClass('active');

	//open curr popup
	subMenuPopup.classList.add('active');
	let thisLink = this.parentElement.querySelectorAll('.header-menu > li > a')[$(this).index()];
	thisLink.classList.add('active');

	//close popup on missclick
	//close popup on missclick

	//remove old listener
	document.body.removeEventListener('click', closeItself);

	closeItself = function() {
		//remove old listener (for case we will close popup)
		document.body.removeEventListener('click', closeItself);


		//if we didnt missclick nothing happens
		//(we get in loop, we removed event listeners but clicked inside pop up it means on "this")

		if (event.target.closest('.menu-hover-popup')) return

		//we missclicked close curr popup
		subMenuPopup.classList.remove('active');
		thisLink.classList.remove('active');
	}
	document.body.addEventListener('click', closeItself);

	//put triangle on its place
	calculateTiangleLeft.call(this);
});

 */