const $ = jQuery;
const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		$.fancybox.defaults.backFocus = false;
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
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

	closeMenu() {
		let _this = this;
		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove("on");

		});
		_this.menuMobile.classList.remove("active");
		_this.body.classList.remove("fixed");

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;

		_this.toggleMenu();
		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);
				_this.closeMenu();

			});
		})
		document.addEventListener('mouseup', function (event) {
			let container = event.target.closest(".menu-mobile--js.active"); // (1)
			if (!container) {
				_this.closeMenu();

			}
		});
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	//JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/main-menu-agency.jpg);"></div>')
	// /добавляет подложку для pixel perfect



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

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		//heightses();
	});

	//heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	let defaultSl = {

	}
	const swiper4 = new Swiper('.color-slider', {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 'auto',
		watchOverflow: true,
		spaceBetween: 0,
		freeMode: true,
		watchOverflow: true,
		slidesPerGroup: 3,

		// centeredSlides: true,
		loop: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});
	// modal window

	var gets = (function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");
		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}
		return b;
	})();
	// form


	var gets = (function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");
		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}
		return b;
	})();
	// form
	$("form").submit(function (e) {
		e.preventDefault();
		const th = $(this);
		var data = th.serialize();
		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
		$.ajax({
			url: 'action.php',
			type: 'POST',
			data: data,
		}).done(function (data) {

			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-thanks',
				type: 'inline'
			});
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
				// ym(53383120, 'reachGoal', 'zakaz');
				// yaCounter55828534.reachGoal('zakaz');
			}, 4000);
		}).fail(function () { });

	});

	//header block
	//header
	$('.search-btn-js, .close-desctop-search-js').click(function () {
		$('.desctop-search-js').toggleClass('active');
	});

	$('.burger-js').click(function () {
		$('.burger-js, .header, .mob-menu-js').toggleClass('active');
		document.body.classList.toggle('fixed');
	});

	//menu fix
	window.addEventListener('resize', function () {
		if (window.matchMedia("(min-width: 1200px)").matches) {
			//fix search visiable
			$('.desctop-search-js').removeClass('active');
			//hide mob menu
			$('.burger-js, .header, .mob-menu-js').removeClass('active');
			document.body.classList.remove('fixed');

		}
	}, {passive: true});

	//calculate triangle left and headersubMenuJs for desktop
	function calculateTiangleLeft() {
			let menuItem = this;
			let triangle = menuItem.querySelector('.menu-hover-popup-triangle');
			if (!triangle) return

			let menuItemLeft = menuItem.offsetLeft;
			let menuItemWidth = menuItem.offsetWidth;
			let triangleWidth = triangle.offsetWidth;

			let triangleLeft = menuItemLeft + (menuItemWidth / 2) - (triangleWidth / 2);
			triangle.style.left = triangleLeft + 'px';
	}
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

			/*
			 if we didnt missclick nothing happens
			(we get in loop, we removed event listeners but clicked inside pop up it means on "this")
			*/
			if (event.target.closest('.menu-hover-popup')) return

			//we missclicked close curr popup
			subMenuPopup.classList.remove('active');
			thisLink.classList.remove('active');
		}
		document.body.addEventListener('click', closeItself);

		//put triangle on its place
		calculateTiangleLeft.call(this);
	});

	//mob sub menu js
	$('.mob-menu > li').click(function () {
		let subMenu = this.querySelector('.mob-menu-sub-menu');
		//let clickOnHeadline = event.target.closest('.sub-menu-box-mob-js');
		if (!subMenu) return

		event.preventDefault();

		//close all early opened
		$('.mob-menu > li > a').removeClass('active');
		$('.mob-menu > li .mob-menu-sub-menu').slideUp(function () {
			$(this).removeClass('active');
		});
		//toggle current
		let thisLink =  this.parentElement.querySelectorAll('.mob-menu > li > a')[$(this).index()];

		if (subMenu.classList.contains('active')){
			$(subMenu).slideUp(function () {
				$(this).removeClass('active');
			});
			$(thisLink).removeClass('active');
		}
		else{
			$(subMenu).slideDown(function () {
				$(this).addClass('active');
			});
			$(thisLink).addClass('active');
		}
		//
	});

	//
	window.addEventListener('scroll',setHeaderFixed , {passive: true});
	function setHeaderFixed() {
		if ($(window).scrollTop() > window.innerHeight){
			$('header.header').addClass('fixed');
		}
		else{
			$('header.header').removeClass('fixed');
		}
	}

	//headerBl slider
	const headerBlSlider = new Swiper('.header-block-slider-js', {
		slidesPerView: 1,
		//direction: 'vertical',
		loop: true,

		//pagination

		autoplay: {
			delay: 4000,
		},
		pagination: {
			el: $(this).find('.header-bl-slider-js-pugin'),
			clickable: true,
		},
	});

	//sAPractice
	let AllParents = document.querySelectorAll('.agency-practice-slider-container');
	for (let [index, parent] of Object.entries(AllParents)){
		let ApracticeSlider = new Swiper($(parent).find('.agency-practice-sw-cont-js'), {
			loop: true,
			slidesPerView: 'auto',
			//lazy load
			lazy: {
				loadPrevNext: true,
				loadPrevNextAmount: 5,
			},
			//pugin
			pagination: {
				el: $(parent).find('.APractice-slider-js-pugin'),
				clickable: true,
			},
			//autoplay
			//autoplay: {
			//	delay: 5000,
			//},
		});
	}
	let activeTabIndex = $('.sAgencyPractice__tabs-bar-item.active').index();
	$('.sAgencyPractice__tabs-bar-item').click(function () {
		if (this.classList.contains('active')) return

		activeTabIndex = $(this).index();
		let thisSwiper = AllParents[activeTabIndex].querySelector('.agency-practice-sw-cont-js');

		window.setTimeout(function () {
			thisSwiper.swiper.update();
		}, 50);
	});
	//sOurExp
	let ourExpSlider = new Swiper($('.our-exp-slider-container').find('.our-exp-sw-cont-js'), {
		loop: true,
		slidesPerView: 'auto',
		//lazy load
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5,
		},
		//pugin
		pagination: {
			el: $(this).find('.OExp-slider-js-pugin'),
			clickable: true,
		},
		//autoplay
		//autoplay: {
		//	delay: 5000,
		//},
	});
	//sPortfolio
	let portfolioSlider = new Swiper($('.portfolio-slider-container').find('.portfolio-slider-js'), {
		loop: true,
		slidesPerView: 'auto',
		//lazy load
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5,
		},
		//pugin
		pagination: {
			el: $(this).find('.portfolio-slider-js-pugin'),
			clickable: true,
		},
		//autoplay
		//autoplay: {
		//	delay: 5000,
		//},
	});

	//sSpecials
	let specialSlider = new Swiper('.special-swiper-js', {
		loop: true,
		//breakpoints
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			996: {
				slidesPerView: 2,
				spaceBetween: 31,
			},
		},
		//pugin
		pagination: {
			el: $(this).find('.special-slider-pugin'),
			clickable: true,
		},
	});
	//sResult
	let resultSlider = new Swiper('.result-slider-js', {
		loop: true,
		navigation: {
			nextEl: '.result-slider-next',
			prevEl: '.result-slider-prev',
		},
	});

	//bg js
	window.addEventListener('resize', setSResultBgSize, {passive: true});
	window.setTimeout(setSResultBgSize, 4000);

	function setSResultBgSize() {
		if (window.matchMedia("(max-width: 992px)").matches) {
			let sectionH = $('.sResult').outerHeight();
			let blackSecionH = $('.sResult__ten-plus-col').outerHeight();
			$('.sResult__bg-img-block').css({ height: (sectionH - blackSecionH) + 'px' });
		}
		else{
			$('.sResult__bg-img-block').css({ height: "100%" });
		}
	}
	//sWorkingProcess

	let workingPrSlider = new Swiper('.workinkg-pr-slider-js', {
		loop: true,
		//pugin
		pagination: {
			el: $(this).find('.workinkg-pr-slider-js-pugin'),
			clickable: true,
		},
		//lazy load
		lazy: {
			loadPrevNext: true,
			//loadPrevNextAmount: 5,
		},

		//bind slider to header
		on: {
			slideChange: function () {
				if (workingPrSlider){
					//
					let headerItemIndOfCurrSlide = document.querySelector('.sWorkingProcess__header-item').parentElement.children[workingPrSlider.realIndex];
					setSlideEqToHeaderItem.call(headerItemIndOfCurrSlide);
				}
			},
		},
	});
	$('.sWorkingProcess__header-item').click(setSlideEqToHeaderItem);

	function setSlideEqToHeaderItem() {
		//disable in mob devices
		if (window.matchMedia("(max-width: 992px)").matches) return

		//switch header index
		$('.sWorkingProcess__header-item').removeClass('active');
		$(this).addClass('active');
		let currHeaderItemIndex = $(this).index();

		//switch slide
		if (currHeaderItemIndex !== workingPrSlider.realIndex){
			workingPrSlider.slideTo(currHeaderItemIndex + 1);
		}
	}
	//sFAQ
	$('.sFAQ__faq-item-cont').click(function () {
		this.classList.toggle('active');
		$(this).find('.sFAQ__responce-bl').slideToggle(function () {
			$(this).toggleClass('active');
		});
	});

	//

		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
		if (isIE11) {
			$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)

		}

		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
	};
	if (document.readyState !== 'loading') {
		eventHandler();
	} else {
		document.addEventListener('DOMContentLoaded', eventHandler);
	}
