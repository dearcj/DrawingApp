window.relPath = './wp-content/themes/mmoma/Assets/';
window.imgPath = './wp-content/themes/mmoma/imgs/';
window.basePath = './wp-content/themes/mmoma/';
window.selectedSurface = 1;

ZSound.Init([
	{id: 'scotch', src: "scotch.ogg"},

	{id: 'click', src: "click.ogg"},
	{id: 'filter', src: "filter.ogg"},
	{id: 'complete', src: "complete.ogg"},
	{id: 'stage', src: "stage.ogg"},
	{id: 'street', src: "street.ogg"},
	{id: 'coal', src: "coal chalk.ogg"},
	{id: 'grass', src: "grass.ogg"},
	{id: 'gun', src: "gun.ogg"},
	{id: 'jeans', src: "jeans.ogg"},
	{id: 'needle', src: "needle.ogg"},
	{id: 'orange', src: "orange.ogg"},
]);
window.eventType = $.support.touch ? "tap" : "click";

ZSound.soundLoadedFunction = function() {
	ZSound.PlayMusic('street');
}

jQuery(document).ready(function($) {

	/////check device type
	/////set canvas W and H

	window.GLOB_CANV_W = 750;
	window.GLOB_CANV_H = 530;

	document.getElementById('main-canvas').width = GLOB_CANV_W;
	document.getElementById('main-canvas').height = GLOB_CANV_H;
	document.getElementById('back-canvas').width = GLOB_CANV_W;
	document.getElementById('back-canvas').height = GLOB_CANV_H;
	document.getElementById('cursor-canvas').width = GLOB_CANV_W;
	document.getElementById('cursor-canvas').height = GLOB_CANV_H;
	document.getElementById('filters-canvas').width = GLOB_CANV_W;
	document.getElementById('filters-canvas').height = GLOB_CANV_H;

	if ($(window).width() < 700) {
		$('#wrapper').css('overflow', 'visible');
		$('.header').css('display', 'none');
		$('.podval_new').css('display', 'none');

		$('#surface-wrapper').animate('height', 100 + '%');
		$('#surface-canvas').css({width: 240 + 'px', height: 165 + 'px', 'margin': '20px auto 0'});
		$('#surface-wrapper p').css({'opacity': 0, height: 0});
		$('ul.tools-buttons.surface-tb').css('width', 65 + 'px');
		$('.surface-button.at-the-backyard').css('display', 'none');
		$('ul#helpers li').css('display', 'none');
		$('ul.surfaces li').css({width: 75 + 'px', height: 50 + 'px', 'margin-top': 0 + 'px'});
		$('ul.surfaces li:nth-child(2n+2)').css('margin-left', -8 + 'px');
		$('ul.surfaces li.metal').css('left', -55 + 'px');

		$('ul.tools-buttons li').css({width: 65 + 'px', height: 65 + 'px', 'margin-top': 15 + 'px'});
		$('ul.tools-buttons li p').css({'font-size': 8 + 'pt', bottom: 20 + 'px'});
		$('#back-canvas').css({width: 240 + 'px', height: 165 + 'px', 'margin-left': -80 + 'px'});
		$('#main-canvas').css({width: 240 + 'px', height: 165 + 'px', 'margin-left': -80 + 'px'});
		$('#cursor-canvas').css({width: 240 + 'px', height: 165 + 'px', 'margin-left': -80 + 'px'});
		$('ul.tools').css({width: 144 + 'px', height: 288 + 'px', left: 44 + '%', top: 0});
		$('ul.tools > li').css({width: 72 + 'px', height: 72 + 'px'});
		$('ul.tools > li#coal > ul').css({width: 50 + 'px', height: 80 + 'px'});
		$('ul.tools > li#coal > ul li').css({width: 25 + 'px', height: 80 + 'px'});
		$('ul.tools > li#scotch > ul').css({width: 72 + 'px', height: 72 + 'px'});
		$('ul.tools li#btn-scotch').css({width: 70 + 'px', height: 44 + 'px'});
		$('ul.tools li#btn-scotch-1').css({width: 60 + 'px', height: 10 + 'px', 'margin-top': 4 + 'px', 'margin-right': 2 + 'px'});
		$('ul.tools li#btn-scotch-2').css({width: 60 + 'px', height: 10 + 'px', 'margin-top': 5 + 'px', 'margin-right': 2 + 'px'});
		$('ul.tools li#btn-grass').css({top: 10 + 'px', 'margin-left': 3 + 'px'});
		$('ul.tools li#btn-orange').css({width: 68 + 'px', height: 86 + 'px', 'margin-right': 0});
		$('ul.tools > li#denim > ul').css({width: 80 + 'px', height: 74 + 'px'});
		$('ul.tools li#btn-denim-1').css({width: 40 + 'px', height: 40 + 'px', 'margin-top': 0, 'margin-left': 0});
		$('ul.tools li#btn-denim-2').css({width: 40 + 'px', height: 40 + 'px', 'margin-top': 0, 'margin-right': 0});
		$('ul.tools li#btn-denim-3').css({width: 40 + 'px', height: 40 + 'px', top: -6 + 'px'});
		$('ul.tools li#btn-catchup').css({width: 70 + 'px', height: 72 + 'px', 'margin-top': 0, 'margin-right': -6 + 'px'});
		$('ul.tools li#btn-needle').css({width: 72 + 'px', height: 52 + 'px', 'margin': '8px + auto + 2px'});
		$('ul.tools > li#needle > ul').css('width', 92 + 'px');
		$('ul.tools li.needle-color').css({width: 15 + 'px', height: 15 + 'px', 'margin-left': -2 + 'px'});
		$('ul.tools li#btn-pistol').css({width: 56 + 'px', height: 84 + 'px', 'margin-right': 2 + 'px'});
		$('li.send-to-museum').css('width', 150 + 'px');
		$('ul.tools-buttons.tools-tb').css({width: 232 + 'px', top: 225 + 'px', 'margin-left': -90 + 'px'});

		$('.filters-canvas').css({width: 240 + 'px', height: 165 + 'px'});
		$('#filters-canvas').css({width: 240 + 'px', height: 165 + 'px'});
		$('.filters-canvas p').css({'opacity': 0, height: 0});
		$('li.its-done').css('width', 150 + 'px');
		$('ul.tools-buttons.filters-tb').css({width: 205 + 'px', height: 65 + 'px'});
		$('ul.tools-buttons.filters-tb li').css({'margin-top': 0 + 'px'});
		$('#main-image').css({width: 240 + 'px', height: 165 + 'px'});
		$('#painting-img').css({width: 240 + 'px', height: 165 + 'px'});
		$('.paintings').css('display', 'none');

		$('.museum-painting').css({width: 240 + 'px', height: 165 + 'px', top: -90 + 'px'});
		$('#main-image p').css({'opacity': 0, height: 0});
		$('.museum-button.at-the-backyard').css({width: 100 + 'px', height: 55 + 'px', 'margin-top': 60 + 'px'});
		$('.social-buttons').css({right: 6 + '%', top: -52 + '%'});
	} else {
		$('li.send-to-museum').css('width', 226 + 'px');
		$('li.its-done').css('width', 226 + 'px');
	}

	// Free from resize

	$('ul.surfaces').css('margin-left', -350 + 'px');
	$('ul.tools').css('margin-left', -1500 + 'px');
	$('#go-to-tools').css('top', 150 + 'px');
	$('.surface-button.at-the-backyard').css('left', -150 + 'px');
	$('.museum-button.at-the-backyard').css('left', -150 + 'px');
	$('li.send-to-museum').css('top', 100 + 'px');
	$('li.back-to-surface').css('top', -75 + 'px');
	$('li.add-filter').css('top', -75 + 'px');
	$('li.back-to-tools').css('top', 100 + 'px');
	$('li.its-done').css('top', 100 + 'px');
	$('ul.paintings.left-side').css('margin-left', -15 + '%');
	$('ul.paintings.right-side').css('margin-right', -15 + '%');
	$('form.sending-form').css('top', 200 + 'px');
	$('.painting-info').css('top', 200 + 'px');
	$('#main-image').css('top', -500 + 'px');

	//

	if (window.location.href.indexOf('#') < 0 || window.location.href.indexOf('index') > 0) {
		$('.podval_new').css('top', 0);
	} else {
		$('.podval_new').css('top', 660 + 'px');
	}

	$('ul.tools > li#btn-orange').addClass('active orange-active');

	$('#undo').on(window.eventType, function(event) {
		window.mainCanvasObject.makeUndo();
	});

	$('#refresh').on(window.eventType, function(event) {
		window.mainCanvasObject.resetCanvas();
	});

	$('#btn-sound').on(window.eventType, function(event) {
		ZSound.available = !ZSound.available;
		ZSound.playSounds = !ZSound.playSounds;
	});

	$('ul.tools li#btn-scotch').on(window.eventType, function(event) {
		ZSound.Play('click');
		$('ul.tools li').removeClass('active');
		$(this).addClass('active scotch-active');
	});

	$('ul.tools li#btn-scotch-1').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active scotch-1-active');
	});

	$('ul.tools li#btn-scotch-2').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active scotch-2-active');
	});

	$('ul.tools li#btn-coal-1').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active coal-1-active');
	});

	$('ul.tools li#btn-coal-2').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active coal-2-active');
	});

	$('ul.tools li#btn-grass').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active grass-active');
	});

	$('ul.tools li#btn-orange').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active orange-active');
	});

	$('ul.tools li#btn-denim-1').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active denim-1-active');
	});

	$('ul.tools li#btn-denim-2').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active denim-2-active');
	});

	$('ul.tools li#btn-denim-3').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active denim-3-active');
	});

	$('ul.tools li#btn-catchup').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active catchup-active');
	});

	$('ul.tools li#btn-needle').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active needle-active');
	});

	$('ul.tools li#btn-thread-1').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active thread-1-active');
	});

	$('ul.tools li#btn-thread-2').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active thread-2-active');
	});

	$('ul.tools li#btn-thread-3').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active thread-3-active');
	});

	$('ul.tools li#btn-thread-4').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active thread-4-active');
	});

	$('ul.tools li#btn-thread-5').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active thread-5-active');
	});

	$('ul.tools li#btn-thread-6').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active thread-6-active');
	});

	$('ul.tools li#btn-thread-7').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active thread-7-active');
	});

	$('ul.tools li#btn-pistol').on(window.eventType, function(event) {
		ZSound.Play('click');

		$('ul.tools li').removeClass('active');
		$(this).addClass('active pistol-active');
	});

	function setRandomImgs() {

		var leftAbsPath = '', rightAbsPath = '', leftImgTitle = '', rightImgTitle = '', leftImgAuthor = '', rightImgAuthor = '', leftImgMats = '', rightImgMats = '', j = imgs.length - 1;

		for (var i = 0; i < 3; i++) {
			leftAbsPath = relPath + imgs[i].pic;
			rightAbsPath = relPath + imgs[j-i].pic;
			leftImgTitle = imgs[i].title;
			rightImgTitle = imgs[j-i].title;
			leftImgAuthor = imgs[i].author;
			rightImgAuthor = imgs[j-i].author;
			leftImgMats = imgs[i].materials;
			rightImgMats = imgs[j-i].materials;

			$('ul.paintings.left-side a:nth-child(' + (i + 1) + ') span.title').innerText = leftImgTitle;
			$('ul.paintings.left-side a:nth-child(' + (i + 1) + ') span.author').css('display', 'none');
			$('ul.paintings.left-side a:nth-child(' + (i + 1) + ') span.materials').innerText = imgs[i].materials;
			$('ul.paintings.left-side a:nth-child(' + (i + 1) + ')').attr('href', leftAbsPath);
			$('ul.paintings.left-side a:nth-child(' + (i + 1) + ') li').css('background', 'linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0)), url(' + leftAbsPath + ') no-repeat');
			$('ul.paintings.left-side a:nth-child(' + (i + 1) + '):hover li').css('background', 'linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(' + leftAbsPath + ') no-repeat');

			$('ul.paintings.right-side a:nth-child(' + (i + 1) + ') span.title').textContent = rightImgTitle;
			$('ul.paintings.right-side a:nth-child(' + (i + 1) + ') span.author').textContent = rightImgAuthor;
			$('ul.paintings.right-side a:nth-child(' + (i + 1) + ') span.materials').textContent = rightImgMats;
			$('ul.paintings.right-side a:nth-child(' + (i + 1) + ')').attr('href', rightAbsPath);
			$('ul.paintings.right-side a:nth-child(' + (i + 1) + ') li').css('background', 'linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0)), url(' + rightAbsPath + ') no-repeat');
			$('ul.paintings.right-side a:nth-child(' + (i + 1) + '):hover li').css('background', 'linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(' + rightAbsPath + ') no-repeat');
		}
	}

	//--------------ROUTING---------------

	var mainUrl = '/';
	var hash = window.location.hash;

	function addURL(pageName) {
		var stateObj = { hash: pageName };
		var newHref = mainUrl + '#' + pageName;
		history.pushState(stateObj, pageName, newHref);
	}

	function openPage(pageName) {
		event.preventDefault();

		if (hash.indexOf(pageName) > 0) {
			var stateObj = { hash: hashBeforeReload.hash };
			history.pushState(stateObj, pageName, mainUrl + '#' + pageName);
		} else {
			addURL(pageName);
		}
	}

	function isItHome(pageName) {
		if (window.location.hash == '') {
			ZSound.PlayMusic('street');
			var stateObj = { hash: 'index' };
			history.pushState(stateObj, "redirect", "#index");
		} else if (hash.indexOf(pageName) > 0) {
			openPage(pageName);
		}
	}

	function surfaceAnimation() {
		$('#index-wrapper').fadeOut(500).addClass('hidden');
		$('#painting-wrapper').delay(1000).animate({'opacity': 0}, 100).css('z-index', '100');
		$('#museum-wrapper').delay(1000).animate({'opacity': 0}, 100).css('z-index', '100');

		$('#painting-wrapper').each(function(){
			$(this).children().css({'z-index': '100', 'opacity': 0});
		});
		$('#museum-wrapper').each(function(){
			$(this).children().css({'z-index': '100', 'opacity': 0});
		});

		var surfaceWidth = $(window).width()/10.666;
		var surfaceHeight = $(window).width()/16.134;

		if ($(window).width() < 700) {
			$('#surface-wrapper').fadeIn(300).removeClass('hidden').animate({
				'opacity': 1,
				'height': 100 + '%'
			}, 200).css('z-index', '200');
			$('#go-to-tools').delay(1500).animate({'top': -20 + 'px'}, 500);
			$('ul.surfaces').css({width: surfaceWidth*2 + 'px', height: surfaceHeight*4 + 'px'}).delay(500).animate({'margin-left': ($(window).width() - 240) /3.8 - surfaceWidth + 'px', 'margin-top': (165 - surfaceHeight*4)/2 + 'px'}, 1500);
		} else {
			$('#surface-wrapper').fadeIn(500).removeClass('hidden').animate({
				'opacity': 1,
				'height': 660 + 'px'
			}, 200).css('z-index', '200');
			$('#go-to-tools').delay(1500).animate({'top': 0 + 'px'}, 500);
			$('ul.surfaces').css({width: surfaceWidth*2 + 'px', height: surfaceHeight*4 + 'px'}).delay(500).animate({'margin-left': ($(window).width() - 700)/3.8 - surfaceWidth + 'px', 'margin-top': (495 - surfaceHeight*4)/2 + 'px'}, 1500);
		}

		$('ul#undo-refresh li').delay(500).animate({'opacity': 1}, 2000);

		$('.surface-button.at-the-backyard').css({width: surfaceWidth/1.216 + 'px', height: surfaceHeight/1.469 + 'px'});

		$('#surface-wrapper').each(function () {
			$(this).children().css({'opacity': 1, 'z-index': '200'});
		});

		$('ul#helpers').css('z-index', '300');

		if (window.location.href.indexOf('#') < 0 || window.location.href.indexOf('index') > 0) {
			$('.podval_new').css('top', 0);
		} else {
			$('.podval_new').css('top', 660 + 'px');
		}

		$('ul.surfaces li').css({width: surfaceWidth + 'px', height: surfaceHeight + 'px'});
		$('#surface-canvas').delay(500).animate({'background-size': '100%'}, 1500);
		$('ul#helpers li#helper-7').delay(2000).animate({'opacity': 1}, 500);
		$('.surface-button.at-the-backyard').delay(1500).animate({'left': $(window).width() / 100 + 'px'}, 500);
		$('#surface-canvas p').delay(2500).fadeIn(1000);
	}

	function paintingAnimation() {
		$('ul.surfaces').animate({'margin-left': -$(window).width()/5.28 + 'px'}, 500);
		$('.go-to-tools').animate({'top': 100 + 'px'}, 500);
		$('#surface-wrapper').delay(500).animate({'opacity': 0}, 100).css('z-index', '100');
		$('#filters-wrapper').delay(500).animate({'opacity': 0}, 100).css('z-index', '100');
		$('#surface-wrapper').each(function(){
			$(this).children().css({'z-index': '100', 'opacity': 0});
		});
		$('#filters-wrapper').each(function(){
			$(this).children().css({'z-index': '100', 'opacity': 0});
		});

		var toolsWidth = parseInt($('ul.tools').css('width'));

		if ($(window).width() < 700) {
			$('#painting-wrapper').delay(300).animate({'opacity': 1, 'height': 100 + '%'}, 100).css('z-index', '200');
			$('ul.tools').delay(500).animate({'margin-left': 3*(($(window).width() - 240)/2 - toolsWidth)/2 + 'px'}, 1000);
		} else {
			$('#painting-wrapper').delay(300).animate({'opacity': 1, 'height': 660 + 'px'}, 100).css('z-index', '200');
			$('ul.tools').delay(500).animate({'margin-left': 3*(($(window).width() - 700)/2 - toolsWidth)/4 + 'px'}, 1000);
		}

		$('#painting-wrapper').each(function(){
			$(this).children().css({'opacity': 1, 'z-index': '200'});
		});

		$('ul#helpers li#helper-8').delay(2000).animate({'opacity': 1}, 500);

		$('ul#helpers').css('z-index', '300');

		if (window.location.href.indexOf('#') < 0 || window.location.href.indexOf('index') > 0) {
			$('.podval_new').css('top', 0);
		} else {
			$('.podval_new').css('top', 660 + 'px');
		}

		$('#painting-wrapper ul#helpers').css('z-index', '250');
		$('li.send-to-museum').delay(1000).animate({'top': 0}, 500);
		$('li.back-to-surface').delay(1000).animate({'top': 0}, 500);
		$('li.add-filter').delay(1000).animate({'top': 0}, 500);
		$('#painting-wrapper > p').css('z-index', 250).fadeIn(2000).removeClass('hidden');
	}

	function filtersAnimation() {
		if ($(window).width() < 700) {
			$('#wand').css({width: 55 + 'px', height: 260 + 'px', right: 3*(($(window).width() - 240)/2 - 55)/4 + 'px', 'z-index': 250}).delay(1500).animate({'background-size': '100%'}, 1000);;
		} else {
			$('#wand').css({width: 120 + 'px', height: 575 + 'px', right: 3*(($(window).width() - 700)/2 - 120)/4 + 'px', 'z-index': 250}).delay(1500).animate({'background-size': '100%'}, 1000);;
		}

		$('ul.tools').animate({'margin-left': -$(window).width()/5.28 + 'px'}, 500);
		$('#painting-wrapper').delay(500).animate({'opacity': 0}, 100).css('z-index', '100');
		$('#painting-wrapper').each(function(){
			$(this).children().css({'z-index': '100', 'opacity': 0});
		});
		$('#filters-wrapper').delay(200).animate({'opacity': 1, 'height': 660 + 'px'}, 100).css('z-index', '200');
		$('#filters-wrapper').each(function(){
			$(this).children().css({'opacity': 1, 'z-index': '200'});
		});

		$('ul#helpers li#helper-9').delay(2000).animate({'opacity': 1}, 500);

		$('ul#helpers').css('z-index', '300');

		if (window.location.href.indexOf('#') < 0 || window.location.href.indexOf('index') > 0) {
			$('.podval_new').css('top', 0);
		} else {
			$('.podval_new').css('top', 660 + 'px');
		}

		$('#filters-wrapper ul#helpers').css('z-index', '250');
		$('li.back-to-tools').delay(1500).animate({'top': 0 + 'px'}, 500);
		$('li.its-done').delay(1500).animate({'top': 0 + 'px'}, 500);
		$('.filters-canvas p').delay(2500).fadeIn(1000);
	}

	function publicationAnimation() {
		$('#wand').animate({'margin-left': -1000 + 'px'}, 500);
		$('#painting-wrapper').delay(500).animate({'opacity': 0}, 100).css('z-index', '100');
		$('#filters-wrapper').delay(500).animate({'opacity': 0}, 100).css('z-index', '100');
		$('#painting-wrapper').each(function(){
			$(this).children().css('z-index', '100');
		});
		$('#filters-wrapper').each(function(){
			$(this).children().css('z-index', '100');
		});

		$('#main-image').delay(500).animate({'opacity': 1, top: 0 + 'px'}, 1000);
		$('#publication-wrapper').delay(300).animate({'opacity': 1, 'height': 660 + 'px'}, 100).css('z-index', '200');
		$('#publication-wrapper').each(function(){
			$(this).children().css({'opacity': 1, 'z-index': '200'});
		});

		$('ul#helpers').css('z-index', '300');

		if (window.location.href.indexOf('#') < 0 || window.location.href.indexOf('index') > 0) {
			$('.podval_new').css('top', 0);
		} else {
			$('.podval_new').css('top', 660 + 'px');
		}

		$('#main-image').delay(500).animate({top: 0}, 1000);
		$('#main-image p').css('display', 'block').delay(1000).animate({'opacity': 1}, 2000).removeClass('hidden');

		if ($(window).width() < 700) {
			$('#main-image').delay(500).animate({'opacity': 1, 'width': 240 + 'px', 'height': 165 + 'px'}, 1000);
			$('#main-image p').css({width: 145 + 'px', 'font-size': 100 + '%', 'padding': '18px 18px 22px', 'border-radius': 12 + 'px', top: -225 + 'px'});
		} else {
			$('#main-image').delay(500).animate({'opacity': 1, 'width': 600 + 'px', 'height': 424 + 'px'}, 1000);
			$('#main-image p').css({width: 350 + 'px', 'font-size': 150 + '%', 'padding': '25px 25px 30px', 'border-radius': 25 + 'px', top: 105 + 'px'});
		}

		if ($(window).width() > 1535) {
			$('ul.paintings.left-side').delay(1500).animate({'margin-left': 12 + '%'}, 1000);
			$('ul.paintings.right-side').delay(1500).animate({'margin-right': 12 + '%'}, 1000);
		} else {
			$('ul.paintings.left-side').delay(1500).animate({'margin-left': 6 + '%'}, 1000);
			$('ul.paintings.right-side').delay(1500).animate({'margin-right': 6 + '%'}, 1000);
		}
		$('form.sending-form').delay(2000).animate({'top': 0}, 1000);
	}

	function museumAnimation() {
		$('#index-wrapper').fadeOut(500).addClass('hidden');
		$('#publication-wrapper').delay(500).animate({'opacity': 0}, 100).css('z-index', '100');
		$('#publication-wrapper').each(function(){
			$(this).children().css('z-index', '100');
		});

		if ($(window).width() < 700) {
			$('#museum-wrapper').delay(300).animate({'opacity': 1, 'height': 100 + '%'}, 100).css('z-index', '200');
			$('.painting-info').css('width', 350 + 'px').delay(500).animate({'top': -70 + 'px'}, 500);
		} else {
			$('#museum-wrapper').delay(300).animate({'opacity': 1, 'height': 660 + 'px'}, 100).css('z-index', '200');
			$('.painting-info').delay(500).animate({'top': -180 + 'px'}, 500);
		}

		$('#museum-wrapper').each(function(){
			$(this).children().css({'opacity': 1, 'z-index': '200'});
		});

		$('#museum-wrapper > p').css('opacity', 0);

		if ($(window).width() < 700) {
			$('.new-painting').css({width: 110 + 'px', height: 40 + 'px'}).delay(500).animate({'top': -140 + 'px'}, 500);
			$('#museum-wrapper > p').css({width: 145 + 'px', 'font-size': 100 + '%', 'padding': '18px 18px 22px', 'border-radius': 12 + 'px', top: -225 + 'px'});

		} else {
			$('.new-painting').css({width: 150 + 'px', height: 50 + 'px'}).delay(500).animate({'top': -195 + 'px'}, 500);
			$('#museum-wrapper > p').css({width: 300 + 'px', 'font-size': 230 + '%', 'padding': '25px 25px 30px', 'border-radius': 25 + 'px', top: -350 + 'px'});
		}

		$('ul#helpers').css('z-index', '300');

		if (window.location.href.indexOf('#') < 0 || window.location.href.indexOf('index') > 0) {
			$('.podval_new').css('top', 0);
		} else {
			$('.podval_new').css('top', 660 + 'px');
		}

		$('.museum-button.at-the-backyard').delay(1500).animate({'left': $(window).width()/100 + 'px'}, 500);
		$('.social-buttons').delay(1000).animate({'opacity': 1}, 1000);
	}

	$('.go-to-surface').on(window.eventType, function(event) {
		ZSound.stopMusic('street');
		ZSound.Play('click');
		window.currentHash = history.state;
		openPage('surface');
		surfaceAnimation();
	});

	$('.go-to-museum').on(window.eventType, function(event) {
		ZSound.stopMusic('street');
		if (window.location.hash != '' && window.location.hash != "#index") {
			document.getElementById('your-painting').src = window.savedImage;
			ZSound.Play('complete');
			window.hideHint = true;
			window.mainCanvasObject.sendPic(openMyMuseum, window.savedImage)
		} else {
			ZSound.Play('stage');
			openMyMuseum();
		}

		window.currentHash = history.state;
		openPage('museum');

		museumAnimation();
	});

	$('.go-to-tools').on(window.eventType, function(event) {
		ZSound.Play('stage');
		window.currentHash = history.state;
		openPage('painting');
		paintingAnimation();
	});

	$('.go-to-filters').on(window.eventType, function(event) {
		ZSound.Play('stage');
		window.currentHash = history.state;
		openPage('filters');
		filtersAnimation();
	});


	$('.its-done').on(window.eventType, function(event) {
		if (window.filterTag && window.filterTag != '') {
			window.mainCanvasObject.tags.push(window.filterTag);
		}
	});

	$('.go-to-publication').on(window.eventType, function(event) {
		ZSound.Play('stage');
		window.currentHash = history.state;
		document.getElementById('painting-img').src = window.savedImage;
		window.imgs = getImagesByTags(window.mainCanvasObject.tags);

		setRandomImgs();

		openPage('publication');

		$('#in-author').val('');
		$('#in-label').val('');

		publicationAnimation();
	});

	$('.go-to-home').on(window.eventType, function(event) {
		ZSound.Play('stage');

		window.currentHash = history.state;
		openPage('index');

		$('.inside').animate({'opacity': 0, 'height': 0}, 200).css('z-index', '100');
		$('.inside').each(function(){
			$(this).children().css('z-index', '100');
		});
		$('#index-wrapper').fadeIn(500).animate({'opacity': 1}, 200).removeClass('hidden').css('z-index', '200');
		$('#index-wrapper').each(function(){
			$(this).children().css('z-index', '200');
		});

		$('ul#helpers').css('z-index', '300');

		$('#dog').css('z-index', '250');
		$('#momandson').css('z-index', '250');
		$('#couple').css('z-index', '250');

		if (window.location.href.indexOf('#') < 0 || window.location.href.indexOf('index') > 0) {
			$('.podval_new').css('top', 0);
		} else {
			$('.podval_new').css('top', 660 + 'px');
		}
	});

	window.addEventListener("popstate", function(e) {
		console.log(currentHash.hash);
		if (currentHash.hash.indexOf('index') > 0) {
			openPage('index');
		}
	}, false);

	window.addEventListener("popstate", function(e) {
		console.log(currentHash.hash);
		if (currentHash.hash == 'surface') {
			console.log('hi');
			openPage('surface');
		}
	}, false);

	window.addEventListener("popstate", function(e) {
		console.log(currentHash.hash);
		if (currentHash.hash.indexOf('painting') > 0) {
			openPage('painting');
		}
	}, false);

	window.addEventListener("popstate", function(e) {
		console.log(currentHash.hash);
		if (currentHash.hash.indexOf('filters') > 0) {
			openPage('filters');
		}
	}, false);

	window.addEventListener("popstate", function(e) {
		if (currentHash.hash.indexOf('publication') > 0) {
			openPage('publication');
		}
	}, false);

	window.addEventListener("popstate", function(e) {
		if (currentHash.hash.indexOf('museum') > 0) {
			openPage('museum');
		}
	}, false);

	$(window).load(function() {
		if (location.hash != '') {
			window.hashBeforeReload = history.state;
		}
		isItHome('index');
		isItHome('surface');
		isItHome('museum');
		isItHome('painting');
		isItHome('filters');
		isItHome('publication');
	});


	$('.save-and-send').click(function(event) {

		event.preventDefault();
		if ($(this).prev().find("input").val() == "" || $(this).prev().find("input").val() == "Напишите название работы") {
			$(this).prev().find("input").css("color", "#FF0000");
			$(this).prev().find("input").css("border", "1px solid #FF0000");
			return false;
		} else {

			//	$('#museum-wrapper .painting-info span.title').html($(this).prev().find('input').val());
		}
	});

	// ---------ELEMENTS FADE IN---------

	function hidingHelpers(div)
	{
		$(window).mouseup(function (e)
		{
			var container = $(div);

			if (!container.is(e.target) && container.has(e.target).length === 0)
			{
				container.fadeOut(500);
			}
		});
	}

	// ------------SURFACES-----------

	$('div.special').mouseover(function() {
		$(this).find('span').css('display', 'inline-block');
	});

	$('div.special').mouseout(function() {
		$(this).find('span').css('display', 'none');
	});

	$('ul.surfaces li.wood').on(window.eventType, function(event) {
		ZSound.Play('click');///
		$('ul.surfaces li').removeClass('active');
		$(this).addClass('active wood-active');
		$('#surface-canvas').removeAttr('class').addClass('wood-texture').fadeIn(1000);
		window.selectedSurface = 1;
	});

	$('ul.surfaces li.board').on(window.eventType, function(event) {
		ZSound.Play('click');
		$('ul.surfaces li').removeClass('active');
		$(this).addClass('active board-active');
		$('#surface-canvas').removeAttr('class').addClass('board-texture').fadeIn(1000);
		window.selectedSurface = 2;
	});

	$('ul.surfaces li.canvas').on(window.eventType, function(event) {
		ZSound.Play('click');
		$('ul.surfaces li').removeClass('active');
		$(this).addClass('active canvas-active');
		$('#surface-canvas').removeAttr('class').addClass('canvas-texture');
		window.selectedSurface = 3;
	});

	$('ul.surfaces li.brick').on(window.eventType, function(event) {
		ZSound.Play('click');
		$('ul.surfaces li').removeClass('active');
		$(this).addClass('active brick-active');
		$('#surface-canvas').removeAttr('class').addClass('brick-texture');
		window.selectedSurface = 4;
	});

	$('ul.surfaces li.cardboard').on(window.eventType, function(event) {
		ZSound.Play('click');
		$('ul.surfaces li').removeClass('active');
		$(this).addClass('active cardboard-active');
		$('#surface-canvas').removeAttr('class').addClass('cardboard-texture');
		window.selectedSurface = 5;
	});

	$('ul.surfaces li.wall').on(window.eventType, function(event) {
		ZSound.Play('click');
		$('ul.surfaces li').removeClass('active');
		$(this).addClass('active wall-active');
		$('#surface-canvas').removeAttr('class').addClass('wall-texture');
		window.selectedSurface = 6;
	});

	$('ul.surfaces li.metal').on(window.eventType, function(event) {

		ZSound.Play('click');
		$('ul.surfaces li').removeClass('active');
		$(this).addClass('active metal-active');
		$('#surface-canvas').removeAttr('class').addClass('metal-texture');
		window.selectedSurface = 7;
	});

	$('ul.surfaces li').mouseover(function() {
		$(this).find('p').css('display', 'block');
	});

	$('ul.surfaces li').mouseout(function() {
		$(this).find('p').css('display', 'none');
	});

	$('ul.tools li').mouseover(function() {
		$(this).find('p').css('display', 'block');
	});

	$('ul.tools li').mouseout(function() {
		$(this).find('p').css('display', 'none');
	});

	$('ul.surfaces li').fadeIn(1500).removeClass('hidden');

	$('ul.tools-buttons li').fadeIn(1500).removeClass('hidden');


	$('ul#buttons li#button-4 a').click(function(event) {
		event.preventDefault();

		//LOAD IMAGE FROM SERVER
	});

	$('li.send-to-museum').click(function(event) {
		window.savedImage = window.mainCanvasObject.saveImage();
		document.getElementById('painting-img').src = window.savedImage;
	});


	function openMyMuseum() {
		var imageId = localStorage.getItem('imageId');
		getLastImage(imageId, function (res) {
			var message  = res.name + ': ' + res.description + ' ' +  "Я экспериментирую вместе с Московским музеем современного искусства. Заходи в мастерскую PLAYMMOMA, используй необычные инструменты создай свою картину!";
			document.getElementById('post-vk').addEventListener('click', function() {
				vkpost(message, res.image, res.file);
			});

			document.getElementById('post-fb').addEventListener('click', function() {
				fbpost('asdasd', res.image, res.file);
			});

			window.currentImgPic = res.file;
			document.getElementById('your-painting').src = res.image;
			document.getElementById('painting-title').textContent = res.description;
			document.getElementById('painting-author').textContent = res.name;
			document.getElementById('painting-materials').textContent = '(' + res.tags.replace(/;/g, ', ') + ')';
		});

		if (imageId === null) {
			$('.new-painting').css('display', 'block');
			$('.painting-info').css('display', 'none');
			$('#museum-wrapper > p').delay(500).animate({opacity: 1}, 1000);
		} else {
			$('.new-painting').css('display', 'none');
			$('.painting-info').css('display', 'block');
			$('#museum-wrapper > p').css('opacity', 0);
		}
	}

	$('li.add-filter').click(function(event) {
		event.preventDefault();

		window.savedImage = window.mainCanvasObject.saveImage();
		window.filterSavedImage = window.savedImage;
		drawImageToCanvas("filters-canvas", window.savedImage);

		//$('#filter-image')[0].src =  window.savedImage;
	});

	$('ul#buttons li a').click(function(event) {
		$(this).parents('#wrapper').prev().css('position', 'relative');
	});


	$(".group1").colorbox({rel:'group1', title: function() {
		return 'Никита Алексеев. «Фонарик». 1991. Холст, акрил, пастель<br><span>В темноте ярко светит фонарик. Он настолько маленький, что освещает совсем немного – видно только как вокруг него идёт снег или дождь. Фонарик висит где-то на улице, и не смотря на свои размеры наверняка будет хорошо виден издалека.';
	}
	});

	// ---------FRONT PAGE BACKGROUND HEIGHT---------

	var ratio = function (width, height) {
			return width/height;
		},
		ratio = ratio(1728, 1089),
		wrapperRatio = function (width, height) {
			return width/height;
		},
		wrapperRatio = wrapperRatio(1903, 955),
		museumRatio = function (width, height) {
			return width/height;
		},
		museumRatio = museumRatio(1728, 959),
		surfaceRatio = function (width, height) {
			return width/height;
		},
		surfaceRatio = surfaceRatio(928, 641),
		pnButtonRatio = function (width, height) {
			return width/height;
		},
		pnButtonRatio = pnButtonRatio(100, 87),
		doneButtonRatio = function (width, height) {
			return width/height;
		},
		doneButtonRatio = doneButtonRatio(226, 87)
	width = $(window).width(),
		objHeight = function (obj, num) {
			return $(obj).css('height', num + 'px');
		},
		objLeft = function (obj, num) {
			return $(obj).css('left', num + 'px');
		},
		objTop = function (obj, num) {
			return $(obj).css('top', num + 'px');
		};

	function setBgImageSize () {
		var width = $(window).width();

		objHeight('#art', width/ratio),
			objHeight('#sky', width/ratio);

		uxButtonsLiWidth = $('ul.ux-buttons li').width();

		$('ul.ux-buttons').css('width', uxButtonsLiWidth*2 + 5 + 'px');
	}


	// ------------------MUSEUM PAGE-------------------

	function museumResponsive () {
		var width = $(window).width(),
				mainPainting = $('.museum-painting'),
				paintingRatio = function(width, height) {
					return width/height;
				},
				paintingRatio = paintingRatio(750, 530),
				darkSideMuseum = $('.dark-side.museum'),
				paintingInfo = $('.painting-info'),
				socialButtons = $('.social-buttons');

		paintingInfo.css('width', 750/100 * 65 + 'px');

		var paintingInfoWidth = parseInt(paintingInfo.css('width'));

		paintingInfo.find('span.title').css('font-size', paintingInfoWidth/2.25 + '%');

		paintingInfo.find('span.author').css('font-size', paintingInfoWidth/2.75 + '%');

		paintingInfo.find('span.materials').css('font-size', paintingInfoWidth/3.25 + '%');

		paintingInfo.find('span').css('padding-bottom', paintingInfo.height()/36.27 + 'px');

		socialButtons.find('span').css('font-size', paintingInfoWidth/3.75 + '%');

		darkSideMuseum.css('width', 750 + 'px');

		darkSideMuseum.css({height: 530/15 + 'px', top: -530/15 + 'px'});

		var darkSideMuseumHeight = parseInt(darkSideMuseum.css('height'));
	}


	// ------------------MUSEUM PAGE-------------------


	function surfaceResponsive () {
		var width = $(window).width(),
			height = $(window).height(),
			surfaceCanvas = $('#surface-canvas'),
			surfaceWrapper = $('#surface-wrapper'),
			surfaceBackyard = $('.surface-button.at-the-backyard');
		forwardButton = $('ul.tools-buttons.surface-tb li'),
			surfacesLi = $('ul.surfaces li'),
			surfacesLiP = $('ul.surfaces li p'),
			surfaceLiRatio = function (width, height) {
				return width/height;
			},
			surfaceLiRatio = surfaceLiRatio(180, 119),
			darkSideSurface = $('.dark-side.surface'),
			coordinate = function (helperNum, leftPercent, topPercent) {
				return $('ul#helpers #helper-' + helperNum).css({left: width/100 * leftPercent + 'px', top: 530/100 * topPercent + 'px'});
			},
			surfaceBackgroundHeight = width/wrapperRatio;

		surfaceBackyard.css({top: width/75 + 'px'});

		if (width < 1641) {
			$('.screens').css('background-size', 'auto 100%');
		} else {
			$('.screens').css('background-size', '100% auto');
		}

		var surfaceBackyardLeft = parseInt(surfaceBackyard.css('left'));

		$('ul.surfaces li:nth-child(7)').css('margin-left', 90 + 'px');

		var surfaceCanvasText = surfaceCanvas.find('p'),
			surfaceTextWidth = 375,
			surfaceTextBorderRadius = surfaceTextWidth/20,
			surfaceTextPadding = surfaceTextWidth/12;

		surfaceCanvasText.css({width: surfaceTextWidth + 'px', 'border-radius': surfaceTextBorderRadius + 'px', 'font-size': 530/2.2 + '%', 'padding': 6 * surfaceTextPadding/7 + 'px ' + '0 ' + surfaceTextPadding + 'px', top: 3 * 530/8 + 'px'});

		surfacesLiP.css({'font-size': 180/1.333 + '%', bottom: 25 + 'px'});

		window.forwardButtonHeight = 100;

		$('ul#helpers.surface').css('top', 0);

		coordinate(7, -1.1, -3.3);

		hidingHelpers('#surface-canvas p');
	}

	function toolsResponsive () {
		var width = $(window).width(),
			toolsCanvas = $('.main-canvas'),
			darkSideTools = $('.dark-side.tools'),
			toolsRatio = function (width, height) {
				return width/height;
			},
			toolsRatio = toolsRatio(200, 175);

		toolsCanvas.css({width: width/2.5 + 'px', 'margin-top': width/18 + 'px'});

		var toolsCanvasWidth = toolsCanvas.width();

		objHeight(toolsCanvas, toolsCanvasWidth/surfaceRatio);

		hidingHelpers('#painting-wrapper p');
	}

	document.getElementById("wand").addEventListener(window.eventType, function () {
		if (!window.currentFilter || window.currentFilter >= filterOrder.length) window.currentFilter = 0;
		applyFilter("filters-canvas", window.filterSavedImage, filterOrder[window.currentFilter]);
		window.currentFilter++;
	});

	function filtersResponsive () {
		var width = $(window).width(),
			height = $(window).height(),
			filtersCanvas = $('.filters-canvas'),
			filtersWrapper = $('#filters-wrapper'),
			darkSideFilters = $('.dark-side.filters'),
			filtersBackgroundHeight = width/wrapperRatio,
			filtersButtons = $('.filters-canvas ul.tools-buttons'),
			prevNextButtons = $('ul.tools-buttons.filters-tb li'),
			wand = $('#wand');

		var darkSideFiltersHeight = parseInt(darkSideFilters.css('height')),
			prevNextButtonsHeight = parseInt(prevNextButtons.css('height'));

		var toolsButtons = $('ul.tools-buttons.filters-tb');

		hidingHelpers('.filters-canvas p');
	}


	function sendingResponsive () {
		var width = $(window).width(),
				height = $(window).height(),
				sendingCanvas = $('#main-image'),
				sendingWrapper = $('#publication-wrapper'),
				sendingForm = $('form.sending-form'),
				sendingFormButton = $('form.sending-form button'),
				sendingFormInput = $('form.sending-form input'),
				sendingFormP = $('form.sending-form .work-author p'),
				paintingsLi = $('ul.paintings li'),
				paintingsLiText = $('ul.paintings a li div'),
				darkSideSending = $('.dark-side.sending'),
				sendingBackgroundHeight = width/wrapperRatio;

		sendingWrapper.css({'background-size': '100% auto'});

		sendingForm.css('height', sendingForm.width()/5.907 + 'px');

		var sendingFormHeight = sendingForm.height();

		sendingFormButton.css({height: sendingFormHeight + 'px', 'font-size': sendingFormHeight*1.6 + '%', 'padding-top': 8*sendingFormHeight/100 + 'px', 'border-radius': '0 ' + 10*sendingFormHeight/100 + 'px ' + 10*sendingFormHeight/100 + 'px 0'})

		sendingFormInput.css({height: sendingFormHeight/4.35 + 'px', 'font-size': sendingFormHeight + '%'});

		$('form.sending-form .work-author .item-field').css('height', sendingFormHeight/3.65 + 'px');

		var itemFieldHeight = parseInt($('form.sending-form .work-author .item-field').css('height')),
				itemFieldSecondMarginTop = sendingFormHeight/9.13;

		$('form.sending-form .work-author .item-field').css('margin-top', (sendingFormHeight - itemFieldHeight*2 - itemFieldSecondMarginTop)/2 + 'px');

		$('form.sending-form .work-author .item-field:last-child').css('margin-top', itemFieldSecondMarginTop + 'px');

		sendingFormP.css('font-size', sendingFormHeight + '%');

		sendingForm.css('border-radius', 10*sendingFormHeight/100 + 'px');

		paintingsLi.css({width: 750/3 + 'px', 'margin-bottom': 5.66*530/100 + 'px'});

		var paintingsLiMarginBot = parseInt(paintingsLi.css('margin-bottom')),
				paintingsLiLeft = $('ul.paintings.left-side li'),
				paintingsLiRight = $('ul.paintings.right-side li');

		paintingsLi.css('height', (530 - paintingsLiMarginBot*2)/3 + 'px');

		paintingsLiText.find('span.title').css({'font-size': paintingsLi.height() + '%'});
		paintingsLiText.find('span.author').css({'font-size': paintingsLi.height()/1.3 + '%'});
		paintingsLiText.find('span.materials').css({'font-size': paintingsLi.height()/1.4 + '%'});
		paintingsLiText.find('span').css({'padding-bottom': paintingsLi.width()/42.66 + 'px'});


		darkSideSending.css({height: 530/15 + 'px', top: 530 - 530/15 + width/12.5 + 'px'});

		hidingHelpers('#main-image p');
	}

	// ---------HOUSE MENU PLACE CHANGING---------

	function coordinateHouseMenu () {
		var artHeight = parseInt($('#art').css('height')),
			width = $(window).width();

		function setPercents (houseMenuLeftPercent, houseMenuTopPercent, horizontalButtonsHeightPercent, verticalButtonsHeightPercent) {
			return	objLeft('ul#buttons', width/100 * houseMenuLeftPercent),
				objTop('ul#buttons', artHeight/100 * houseMenuTopPercent),
				objHeight('ul#buttons li.hor', artHeight/100 * horizontalButtonsHeightPercent),
				objHeight('ul#buttons li.vert', artHeight/100 * verticalButtonsHeightPercent);
		}

		setPercents(26.4, 45.5, 13.35, 30);
	}


	// ---------HELPERS TEXT PROPERTIES CHANGING---------

	function helpersTextProperties() {
		var span = $('ul#helpers li span'),
			width = $(window).width();

		span.css({width: width/100 * 20 + 'px'});

		var spanWidth = parseInt(span.css('width'));

		span.css({'font-size': spanWidth/2.93 + '%'});

		window.spanPadding = spanWidth/13.6;

		span.css({padding: spanPadding*0.89 + 'px ' + spanPadding + 'px ' + spanPadding + 'px'});

		span.css({'border-radius': spanPadding/1.5 + 'px'});

		window.spanTopPos = -spanWidth/5;

		$('ul#helpers li#helper-1 span.down').css({left: -spanWidth/2 + 'px', top: spanTopPos * 3.6 + 'px'});
		$('ul#helpers li#helper-2 span.down').css({left: -spanWidth/2 + 'px', top: spanTopPos * 2.75 + 'px'});
		$('ul#helpers li#helper-3 span.up').css({left: -spanWidth + 'px', top: spanTopPos * 5.25 + 'px'});
		$('ul#helpers li#helper-4 span.up').css({left: -spanWidth/2 + 'px', top: spanTopPos * 4.35 + 'px'});
		$('ul#helpers li#helper-5 span.up').css({left: -spanWidth/2 + 'px', top: spanTopPos * 3.8 + 'px'});
		$('ul#helpers li#helper-6 span').css({top: -spanTopPos + 'px', width: width/100 * 15 + 'px'});
		$('ul#helpers li#helper-6s span').css({top: -spanTopPos + 'px', width: width/100 * 15 + 'px'});
		$('ul#helpers li#helper-7 span').css({left: -spanWidth/2 + 'px', top: -spanTopPos + 'px'});
		$('ul#helpers li#helper-8 span').css({left: -spanWidth/2 + 'px', top: -spanTopPos * 1.05 + 'px', width: width/100 * 20 + 'px'});
		$('ul#helpers li#helper-9 span').css({left: spanWidth/4.655 + 'px', top: spanTopPos * 0.5 + 'px', width: width/100 * 15 + 'px'});
		$('ul#helpers li#helper-10 span').css({left: -spanWidth/2 + 'px', top: spanTopPos * 3.4 + 'px'});
		$('ul#helpers li#helper-11 span').css({left: -spanWidth + 'px', top: -spanTopPos + 'px'});
		$('ul#helpers li#helper-12 span').css({left: 0 + 'px', top: spanTopPos * 1.35 + 'px'});
		$('ul#helpers li#helper-13 span').css({left: 0 + 'px', top: spanTopPos * 1.35 + 'px'});
		$('ul#helpers li#helper-14 span').css({left: -spanWidth + 'px', top: spanTopPos * 1.35 + 'px'});
		$('ul#helpers li#helper-15 span').css({left: -spanWidth/2 + 'px', top: spanTopPos * 1.7 + 'px'});

		window.homeSpanWidth = parseInt($('ul#helpers li#helper-6 span').css('width'));
	}


	// ---------HELPERS TEXT PROPERTIES CHANGING---------

	function buttonHelpersPosition() {
		var buttonHeight = parseInt($('ul#buttons li.hor').css('height')),
			bothSpanWidth = $('ul#buttons li span').width(),
			bothSpanHeight = $('ul#buttons li span').height(),
			paddingTopRatio = 214/15,
			paddingTop = bothSpanWidth/paddingTopRatio,
			paddingBottomRatio = 214/20,
			paddingBottom = bothSpanWidth/paddingBottomRatio;

		$('ul#buttons li span').css({'font-size': bothSpanWidth/1.5 + '%', 'padding': paddingTop + 'px ' + '0 ' + paddingBottom + 'px'});
	}


	// ---------HELPERS PLACE CHANGING---------

	function coordinateHelpers() {

		var artHeight = parseInt($('#art').css('height')),
			width = $(window).width(),
			coordinate = function(helperNum, leftPercent, topPercent) {
				return $('ul#helpers #helper-' + helperNum).css({left: width/100 * leftPercent + 'px', top: artHeight/100 * topPercent + 'px'});
			};

		coordinate(1, 74.5, 32);
		coordinate(2, 18.5, 30.5);
		coordinate(3, 91, 52);
		coordinate(4, 74.25, 52);
		coordinate(5, 18.5, 55);
		coordinate(10, -1.7, 10.7);

		$('#index-wrapper').css({height: artHeight - artHeight/6.48 + 'px', 'top': -artHeight/6.48 + 'px'});

		var helper = $('ul.index li'),
			dog = $('#dog'),
			momandson = $('#momandson'),
			couple = $('#couple'),
			specialSpan = $('div.special span');



		specialSpan.css({width: width/100 * 20 + 'px'});
		$('#dog').find('span').css({width: width/100 * 8 + 'px'});

		var specialSpanWidth = width/100 * 20;

		specialSpan.css({'font-size': specialSpanWidth/3 + '%'});

		var specialSpanPadding = specialSpanWidth/10;

		specialSpan.css({padding: specialSpanPadding/7 * 6 + 'px ' + specialSpanPadding + 'px ' + specialSpanPadding + 'px'});

		specialSpan.css({'border-radius': specialSpanPadding/1.5 + 'px'});

		helper.css('width', width/29.27 + 'px');

		helper.css('height', helper.width() + 1 + 'px');

		dog.css({width: width/21.625 + 'px', height: width/30.693 + 'px', left: (width/100) * 5.78 + 'px', top: (width/100) * 60.01 + 'px'});
		momandson.css({width: width/20.685 + 'px', height: width/12.519 + 'px', left: (width/100) * 48.6 + 'px', top: (width/100) * 51.23 + 'px'});
		couple.css({width: width/13.124 + 'px', height: width/11.464 + 'px', left: (width/100) * 83.97 + 'px', top: (width/100) * 43.46 + 'px'});

		dog.find('span').css({left: specialSpanWidth/6.34 + 'px', top: -(width/100) * 24.69 + 'px'});
		momandson.find('span').css({left: -specialSpanWidth/2 + 'px', top: -(width/100) * 24 + 'px'});
		couple.find('span').css({left: -specialSpanWidth + 'px', top: -(width/100) * 15.87 + 'px'});
	}

	$(window).resize(function(){
		if (window.location.href.indexOf('surface') > 0) {
			surfaceAnimation();
		} else if (window.location.href.indexOf('painting') > 0) {
			paintingAnimation();
		} else if (window.location.href.indexOf('filters') > 0) {
			filtersAnimation();
		} else if (window.location.href.indexOf('publication') > 0) {
			publicationAnimation();
		} else if (window.location.href.indexOf('museum') > 0) {
			museumAnimation();
		}
		setBgImageSize();
		museumResponsive();
		surfaceResponsive();
		toolsResponsive();
		filtersResponsive();
		sendingResponsive();
		coordinateHouseMenu();
		helpersTextProperties();
		buttonHelpersPosition();
		coordinateHelpers();
	});

	setBgImageSize();
	museumResponsive();
	surfaceResponsive();
	toolsResponsive();
	filtersResponsive();
	sendingResponsive();
	coordinateHouseMenu();
	helpersTextProperties();
	buttonHelpersPosition();
	coordinateHelpers();
});