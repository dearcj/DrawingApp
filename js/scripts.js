window.relPath = 'http://188.227.16.35/wp-content/themes/mmoma/Assets/';
window.selectedSurface = 1;
jQuery(document).ready(function($) {



	//--------------ROUTING---------------

	var mainUrl = 'http://188.227.16.35/';
	var href = window.location.href;
	var stateObj = { home: "screen" };

	function addURL(pageName) {
		var newHref = mainUrl + '?p=' + pageName;
		var currentHref = window.currentState;
		history.replaceState(stateObj, pageName, newHref);
	}

	function pagesTransition(pageName, prevPage, nextPage) {
			$('#' + prevPage + '-wrapper').fadeOut(500).addClass('hidden');
			$('#' + nextPage + '-wrapper').fadeOut(500).addClass('hidden');
			$('#' + pageName + '-wrapper').fadeIn(1000).removeClass('hidden');
			$('#' + pageName + '-canvas p').delay(500).fadeIn(1500);
	}

	function openPage(pageName, prevPage, nextPage) {
		event.preventDefault();

		if (href.indexOf(pageName) + 1) {
			history.pushState(stateObj, pageName, mainUrl + '?p=' + pageName);
		} else {
			addURL(pageName);
		}

		pagesTransition(pageName, prevPage, nextPage);
	}

	function isItHome(pageName, prevPage, nextPage) {
		if (pageName.indexOf('index') > 0) {
			history.pushState(stateObj, "redirect", "index.php");
		} else if (href.indexOf(pageName) > 0) {
			openPage(pageName, prevPage, nextPage);
		}
	}

	$('.go-to-surface').click(function() {
		openPage('surface', 'index', 'painting');
	});

	$('.go-to-museum').click(function() {
		openPage('museum', 'index', 'publication');
	});

	$('.go-to-tools').click(function() {
		window.currentState = window.location.href;
		openPage('painting', 'index', 'surface');
	});

	$('.go-to-filters').click(function() {
		openPage('filters', 'index', 'painting');
	});

	$('.go-to-publication').click(function() {
		openPage('publication', 'painting', 'filters');
	});

	$('.go-to-home').click(function() {
		openPage('index', 'surface', 'museum');
	});

	window.addEventListener("popstate", function(e) {
		console.log('hi');
	}, false);

	isItHome('surface', 'index', 'painting');
	isItHome('museum', 'index', 'publication');
	isItHome('painting', 'index', 'surface');
	isItHome('filters', 'index', 'painting');
	isItHome('publication', 'painting', 'filters');
	isItHome('index', 'surface', 'museum');


	// ---------ELEMENTS FADE IN---------

	function hidingHelpers(div)
	{
		$(window).mouseup(function (e)
		{
		    var container = $(div);

		    if (!container.is(e.target) && container.has(e.target).length === 0)
		    {
		        container.fadeOut(500).css('display', 'block');
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

	$('ul.surfaces li.wood').click(function() {
		$('#surface-canvas').removeAttr('class').addClass('wood-texture').fadeIn(1000);
		window.selectedSurface = 1;
	});

	$('ul.surfaces li.board').click(function() {
		$('#surface-canvas').removeAttr('class').addClass('board-texture').fadeIn(1000);
		window.selectedSurface = 2;
	});

	$('ul.surfaces li.canvas').click(function() {
		$('#surface-canvas').removeAttr('class').addClass('canvas-texture');
		window.selectedSurface = 3;
	});

	$('ul.surfaces li.brick').click(function() {
		$('#surface-canvas').removeAttr('class').addClass('brick-texture');
		window.selectedSurface = 4;
	});

	$('ul.surfaces li.cardboard').click(function() {
		$('#surface-canvas').removeAttr('class').addClass('cardboard-texture');
		window.selectedSurface = 5;
	});
	
	$('ul.surfaces li.wall').click(function() {
		$('#surface-canvas').removeAttr('class').addClass('wall-texture');
		window.selectedSurface = 6;
	});

	$('ul.surfaces li.metal').click(function() {
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

	$('ul#buttons li#button-3 a').mouseover(function() {
		$(this).parents('ul#buttons').next().find('li#helper-6 span').css('display', 'block');
	});

	$('ul#buttons li#button-3 a').mouseout(function() {
		$(this).parents('ul#buttons').next().find('li#helper-6 span').css('display', 'none');
	});

	$('ul#buttons li#button-4 a').mouseover(function() {
		$(this).parents('ul#buttons').next().find('li#helper-6s span').css('display', 'block');
	});

	$('ul#buttons li#button-4 a').mouseout(function() {
		$(this).parents('ul#buttons').next().find('li#helper-6s span').css('display', 'none');
	});
	


	$('ul#buttons li#button-4 a').click(function(event) {
		event.preventDefault();

		//LOAD IMAGE FROM SERVER
		getLastImage(1, function (res) {
			document.getElementById('post-fb').addEventListener('click', function() {
				FB.ui(
					{  method: 'feed',
						link: 'www.museum',
						picture: window.currentImgPic,
						name: "asdasd",
						caption: "asdasd",
						description: "asdasdasd",
					},

					function(response) {
						if (response && response.post_id) {
							alert('Post was published.');
						} else {
							alert('Post was not published.');
						}
					}
				);
			});

			window.currentImgPic = res.file;
			document.getElementById('your-painting').src = res.image;
			document.getElementById('painting-title').textContent = res.name;
			document.getElementById('painting-author').textContent = "фывфыв";
			document.getElementById('painting-materials').textContent = res.tags;
		});
	});

	$('li.send-to-museum').click(function(event) {
		window.savedImage = window.mainCanvasObject.saveImage();
		document.getElementById('painting-img').src = window.savedImage;

	});

	$('li.add-filter').click(function(event) {
		event.preventDefault();

		window.savedImage = window.mainCanvasObject.saveImage();

		drawImageToCanvas("filters-canvas", window.savedImage);

		//$('#filter-image')[0].src =  window.savedImage;
	});

	$('ul#buttons li a').click(function(event) {
		$(this).parents('#wrapper').prev().css('position', 'relative');
	});

	$('.save-and-send').click(function(event) {

		window.savedImage = window.mainCanvasObject.saveImage();
		document.getElementById('your-painting').src = window.savedImage;

		window.mainCanvasObject.sendPic();


		vent.preventDefault();
		if ($(this).prev().find("input").val() == "" || $(this).prev().find("input").val() == "Напишите название работы") {
			$(this).prev().find("input").css("color", "#FF0000");
			$(this).prev().find("input").css("border", "1px solid #FF0000");
		return false;
		} else {


		//	$('#museum-wrapper .painting-info span.title').html($(this).prev().find('input').val());
		}
	});
	
	$(".group1").colorbox({rel:'group1', title: function() {
			return 'Никита Алексеев. «Фонарик». 1991. Холст, акрил, пастель<br><span>В темноте ярко светит фонарик. Он настолько маленький, что освещает совсем немного – видно только как вокруг него идёт снег или дождь. Фонарик висит где-то на улице, и не смотря на свои размеры наверняка будет хорошо виден издалека. Эта небольшая история нарисована художником при помощи всего лишь мелка, который на темном холсте оставляет яркий контрастный след – не зря и для школьных досок используется сочетание белых значков на тёмном фоне – чтобы всем было хорошо видно!';
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
			paintingRatio = paintingRatio(850, 571),
			darkSideMuseum = $('.dark-side.museum'),
			newPaintingButton = $('.new-painting'),
			newPaintingButtonRatio = function(width, height) {
				return width/height;
			},
			newPaintingButtonRatio = newPaintingButtonRatio(148, 81),
			backyardButton = $('.at-the-backyard'),
			paintingInfo = $('.painting-info'),
			socialButtons = $('.social-buttons');


		objHeight('#museum-wrapper', width/museumRatio);

		mainPainting.css({width: width/2.5 + 'px', 'margin-top': width/30 + 'px'});

		paintingWidth = parseInt(mainPainting.css('width'));

		paintingInfo.css('width', paintingWidth/100 * 65 + 'px');

		var paintingInfoWidth = parseInt(paintingInfo.css('width'));

		paintingInfo.css('height', paintingInfoWidth/4.54 + 'px');

		paintingInfo.find('span.title').css('font-size', paintingInfoWidth/2.25 + '%');

		paintingInfo.find('span.author').css('font-size', paintingInfoWidth/2.75 + '%');

		paintingInfo.find('span.materials').css('font-size', paintingInfoWidth/3.25 + '%');

		paintingInfo.find('span').css('padding-bottom', paintingInfo.height()/36.27 + 'px');

		socialButtons.find('span').css('font-size', paintingInfoWidth/3.75 + '%');

		socialButtons.css('width', (paintingWidth - paintingInfoWidth)/2 + 'px');

		var socialButtonsWidth = parseInt(socialButtons.css('width'));

		socialButtons.find('ul li').css({width: socialButtonsWidth/2.78 + 'px', height: socialButtonsWidth/2.55 + 'px'});

		var socialButtonsLiWidth = parseInt(socialButtons.find('ul li').css('width'));

		socialButtons.find('ul').css('width', (socialButtonsLiWidth + 3)*2 + 1 + 'px');

		darkSideMuseum.css('width', paintingWidth + 'px');

		var paintingHeight = parseInt(mainPainting.css('height'));

		darkSideMuseum.css({height: paintingHeight/15 + 'px', top: -paintingHeight/15 + 'px'});

		var newPaintingButtonWidth = paintingWidth/4.5;

		newPaintingButton.css({width: newPaintingButtonWidth + 'px', height: newPaintingButtonWidth/newPaintingButtonRatio + 'px'});

		var newPaintingButtonHeight = parseInt(newPaintingButton.css('height')),
			darkSideMuseumHeight = parseInt(darkSideMuseum.css('height')),
			backyardButtonHeight = newPaintingButtonHeight,
			backyardButtonWidth = newPaintingButtonWidth;

		newPaintingButton.css({top: (paintingHeight - newPaintingButtonHeight)/2 + darkSideMuseumHeight + 'px', right: (width - paintingWidth - newPaintingButtonWidth * 2)/4 + 'px'});

		backyardButton.css({width: backyardButtonWidth + 'px', height: backyardButtonHeight + 'px', top: width/100 + 'px', left: width/100 + 'px'});
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
				return $('ul#helpers #helper-' + helperNum).css({left: width/100 * leftPercent + 'px', top: surfaceCanvasHeight/100 * topPercent + 'px'});	
			},
			surfaceBackgroundHeight = width/wrapperRatio;

		surfaceBackyard.css({top: width/75 + 'px', left: width/75 + 'px'});

		surfaceWrapper.css({'background-size': 'auto 100%', height: surfaceBackgroundHeight + 'px'});

		surfaceCanvas.css({width: width/2.5 + 'px', 'margin-top': width/22 + 'px'});

		var surfaceCanvasWidth = parseInt(surfaceCanvas.css('width'));

		objHeight(surfaceCanvas, surfaceCanvasWidth/surfaceRatio);

		darkSideSurface.css('width', surfaceCanvasWidth + 'px');

		var surfaceCanvasHeight = parseInt(surfaceCanvas.css('height'));

		darkSideSurface.css({height: surfaceCanvasHeight/15 + 'px', top: -surfaceCanvasHeight/15 + 'px'});
		
		var surfacesLiWidth = surfaceCanvasWidth/3.26;

		surfacesLi.css({width: surfacesLiWidth + 'px', height: surfacesLiWidth/surfaceLiRatio + 'px'});

		var sideMargins = (width - surfacesLiWidth*2 - surfaceCanvasWidth)/3,
			surfaceBackyardLeft = parseInt(surfaceBackyard.css('left'));

		$('ul.surfaces').css({width: surfacesLiWidth*2 + 'px', height: surfacesLi.height()*2 + 'px', 'margin-left': sideMargins + 'px'});

		$('ul.surfaces li:nth-child(7)').css('margin-left', surfacesLiWidth/2 + 'px');

		surfaceCanvas.css('margin-right', sideMargins + 'px');

		var surfaceCanvasText = surfaceCanvas.find('p'),
			surfaceTextWidth = surfaceCanvasWidth/2,
			surfaceTextBorderRadius = surfaceTextWidth/20,
			surfaceTextPadding = surfaceTextWidth/12;

		surfaceCanvasText.css({width: surfaceTextWidth + 'px', 'border-radius': surfaceTextBorderRadius + 'px', 'font-size': surfaceCanvasHeight/2.2 + '%', 'padding': 6 * surfaceTextPadding/7 + 'px ' + '0 ' + surfaceTextPadding + 'px', top: 3 * surfaceCanvasHeight/8 + 'px'});
		
		forwardButton.css('width', surfaceCanvasWidth/7.612 + 'px');

		forwardButton.css('height', forwardButton.width()/pnButtonRatio + 'px');

		surfacesLiP.css({'font-size': surfacesLiWidth/1.333 + '%', bottom: surfacesLi.height()/4.7592 + 'px'});

		var forwardButtonWidth = parseInt(forwardButton.css('width')),
			forwardButtonHeight = parseInt(forwardButton.css('height'));

		$('ul.tools-buttons.surface-tb').css({left: surfaceCanvasWidth/2 + forwardButtonWidth/2 + 'px', top: surfaceCanvasHeight + forwardButtonHeight*1.5 + 'px'});

		$('ul#helpers.surface').css('top', 0);

		coordinate(7, -1.1, -3.3);

		hidingHelpers('#surface-canvas p');
	}

	function toolsResponsive () {
		var width = $(window).width(),
			height = $(window).height(),
			toolsCanvas = $('.main-canvas'),
			toolsWrapper = $('#painting-wrapper'),
			darkSideTools = $('.dark-side.tools'),
			toolsLiP = $('ul.tools li p'),
			toolsBackgroundHeight = width/wrapperRatio,
			interfaceButtons = $('ul.interface'),
			interfaceButtonLiBack = $('ul.interface li.back'),
			interfaceButtonLiRefresh = $('ul.interface li.refresh'),
			interfaceButtonsRatio = function (width, height) {
				return width/height;
			},
			interfaceButtonsRatio = interfaceButtonsRatio(22, 30);
			toolsButtons = $('ul.tools-buttons.tools-tb'),
			toolsRatio = function (width, height) {
				return width/height;
			},
			toolsRatio = toolsRatio(200, 175),
			prevNextButtons = $('ul.tools-buttons.tools-tb li'),
			sendToMuseum = $('.send-to-museum');

		toolsWrapper.css({'background-size': 'auto 100%', height: toolsBackgroundHeight + 'px'});

		toolsCanvas.css({width: width/2.5 + 'px', 'margin-top': width/18 + 'px'});

		var toolsCanvasWidth = toolsCanvas.width();

		objHeight(toolsCanvas, toolsCanvasWidth/surfaceRatio);

		darkSideTools.css('width', toolsCanvasWidth + 'px');

		var toolsCanvasHeight = toolsCanvas.height(),
			toolsCanvasMarginTop = parseInt(toolsCanvas.css('margin-top'));

		darkSideTools.css({height: toolsCanvasHeight/15 + 'px', top: toolsCanvasHeight + toolsCanvasMarginTop + 'px'});

		var interfaceButtonLiWidth = toolsCanvasWidth/34.6;

		interfaceButtonLiBack.css({width: interfaceButtonLiWidth + 'px', height: interfaceButtonLiWidth + 'px', 'margin-right': interfaceButtonLiWidth + 'px'});

		interfaceButtonLiRefresh.css({width: interfaceButtonLiWidth + 'px', height: interfaceButtonLiWidth/interfaceButtonsRatio + 'px'});

		interfaceButtons.css('top', toolsCanvasHeight + interfaceButtonLiWidth + 'px');

		var mainCanvas = $('#main-canvas');
		var mainCanvasTop = toolsWrapper.height()/100 * 10;

		toolsButtons.css({width: 430 + 'px', top: mainCanvasTop + darkSideTools.height() + 530 + 'px'});

		toolsButtonsWidth = parseInt(toolsButtons.css('width'));

		toolsButtons.css('margin-left', -toolsButtonsWidth/2 + 'px');
		
		var toolsCanvasText = toolsCanvas.find('p');
			toolsTextWidth = toolsCanvasWidth/2,
			toolsTextBorderRadius = toolsTextWidth/20,
			toolsTextPadding = toolsTextWidth/12;

		toolsCanvasText.css({width: toolsTextWidth + 'px', 'border-radius': toolsTextBorderRadius + 'px', 'font-size': toolsCanvasHeight/2.5 + '%', 'padding': 6 * toolsTextPadding/7 + 'px ' + '0 ' + toolsTextPadding + 'px', top: 3 * toolsCanvasHeight/8 + 'px'});
	
		var toolsCanvasTextHeight = toolsCanvasText.innerHeight();
		var tools = $('ul.tools');

		if (width <= '1420') {
			tools.css({left: 0, 'margin-left': 0});
		} else {
			tools.css({left: 50 + '%', 'margin-left': -705 + 'px'});
		}

		hidingHelpers('.main-canvas p');
	}


	function filtersResponsive () {
		var width = $(window).width(),
			height = $(window).height(),
			filtersCanvas = $('.filters-canvas'),
			filtersWrapper = $('#filters-wrapper'),
			darkSideFilters = $('.dark-side.filters'),
			filtersBackgroundHeight = width/wrapperRatio,
			filtersButtons = $('.filters-canvas ul.tools-buttons'),
			prevNextButtons = $('ul.tools-buttons.filters-tb li'),
			wand = $('#wand'),
			itsDone = $('.its-done'),
			wandRatio = function (width, height) {
				return width/height;
			},
			wandRatio = wandRatio(800, 178);


		document.getElementById("wand").addEventListener('click', function () {

			if (!window.currentFilter || window.currentFilter >= filterOrder.length) window.currentFilter = 0;
			applyFilter("filters-canvas", window.savedImage, filterOrder[window.currentFilter]);
			window.currentFilter++;
		});

		filtersWrapper.css({'background-size': 'auto 100%', height: filtersBackgroundHeight + 'px'});

		filtersCanvas.css('width', width/2.5 + 'px');

		var filtersCanvasWidth = filtersCanvas.width();

		objHeight(filtersCanvas, filtersCanvasWidth/surfaceRatio);

		darkSideFilters.css('width', filtersCanvasWidth + 'px');

		var filtersCanvasHeight = filtersCanvas.height();

		darkSideFilters.css({height: filtersCanvasHeight/15 + 'px', top: 14*filtersCanvasHeight/15 + 'px'});

		wand.css('height', filtersCanvasHeight*1.508 + 'px');

		wand.css('width', wand.height()/wandRatio + 'px');

		var wandWidth = wand.width(),
			sideMargins = (width - 4*filtersCanvasWidth/3 - wandWidth)/2;

		filtersCanvas.css({'margin-right': sideMargins + 'px', 'margin-top': width/12.5 + 'px'});
		wand.css({'margin-left': sideMargins + 'px', 'margin-top': width/54 + 'px'});
		darkSideFilters.css('margin-left', filtersCanvasWidth + 'px');

		var filtersCanvasText = filtersCanvas.find('p');
			filtersTextWidth = filtersCanvasWidth/2,
			filtersTextBorderRadius = filtersTextWidth/20,
			filtersTextPadding = filtersTextWidth/12;

		filtersCanvasText.css({width: filtersTextWidth + 'px', 'border-radius': filtersTextBorderRadius + 'px', 'font-size': filtersCanvasHeight/2.2 + '%', 'padding': 6 * filtersTextPadding/7 + 'px ' + '0 ' + filtersTextPadding + 'px'});
	
		prevNextButtons.css('width', filtersCanvasWidth/7.612 + 'px');

		prevNextButtons.css('height', prevNextButtons.width()/pnButtonRatio + 'px');

		var darkSideFiltersHeight = parseInt(darkSideFilters.css('height')),
			prevNextButtonsHeight = parseInt(prevNextButtons.css('height')),
			filtersCanvasTextWidth = parseInt(filtersCanvasText.css('width'));

		filtersCanvasText.css({top: 3*filtersCanvasHeight/8 - darkSideFiltersHeight - prevNextButtonsHeight + 'px', left: (filtersCanvasWidth - filtersCanvasTextWidth)/2 + 'px'});

		itsDone.css('width', prevNextButtons.height()*doneButtonRatio + 'px');

		filtersButtons.css({top: filtersCanvasHeight + 'px', 'margin-left': 30 + 'px'});

		var toolsButtons = $('ul.tools-buttons.filters-tb');

		toolsButtons.css('width', prevNextButtons.width() + itsDone.width() + 22 + 'px');

		toolsButtons.css('top', darkSideFiltersHeight*2 + 'px');

		toolsButtonsWidth = parseInt(toolsButtons.css('width'));

		toolsButtons.css('margin-left', (filtersCanvasWidth - toolsButtonsWidth)/2 + 'px');

		$(window).mouseup(function (e) {
		    var container = $('.filters-canvas p');

		    if (!container.is(e.target) && container.has(e.target).length === 0)
		    {
		        container.fadeOut(500).css('display', 'inline-block');
		    }
		});
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

		sendingWrapper.css({'background-size': 'auto 100%', height: sendingBackgroundHeight + 'px'});

		sendingCanvas.css({width: width/2.5 + 'px', 'margin-top': width/15 + 'px'});

		var sendingCanvasWidth = sendingCanvas.width();

		objHeight(sendingCanvas, sendingCanvasWidth/surfaceRatio);

		darkSideSending.css('width', sendingCanvasWidth + 'px');

		var sendingCanvasHeight = sendingCanvas.height();

		sendingForm.css('width', sendingCanvasWidth + 'px');
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

		paintingsLi.css({width: sendingCanvasWidth/3 + 'px', 'margin-bottom': 5.66*sendingCanvasHeight/100 + 'px'});
		$('ul.paintings').css('margin-top', width/15 + 'px');

		var paintingsLiMarginBot = parseInt(paintingsLi.css('margin-bottom')),
			paintingsLiLeft = $('ul.paintings.left-side li'),
			paintingsLiRight = $('ul.paintings.right-side li');

		paintingsLi.css('height', (sendingCanvasHeight - paintingsLiMarginBot*2)/3 + 'px');

		paintingsLiLeft.css('margin-left', (width - sendingCanvasWidth - 2*paintingsLi.width())/4 + 'px');
		paintingsLiRight.css('margin-right', (width - sendingCanvasWidth - 2*paintingsLi.width())/4 + 'px');


		paintingsLiText.find('span.title').css({'font-size': paintingsLi.height() + '%'});
		paintingsLiText.find('span.author').css({'font-size': paintingsLi.height()/1.3 + '%'});
		paintingsLiText.find('span.materials').css({'font-size': paintingsLi.height()/1.4 + '%'});
		paintingsLiText.find('span').css({'padding-bottom': paintingsLi.width()/42.66 + 'px'});


		darkSideSending.css({height: sendingCanvasHeight/15 + 'px', top: sendingCanvasHeight - sendingCanvasHeight/15 + width/12.5 + 'px'});

		var sendingCanvasText = sendingCanvas.find('p');
			sendingTextWidth = 65*sendingCanvasWidth/100,
			sendingTextBorderRadius = sendingTextWidth/20,
			sendingTextPadding = sendingTextWidth/12;

		sendingCanvasText.css({width: sendingTextWidth + 'px', 'border-radius': sendingTextBorderRadius + 'px', 'font-size': sendingCanvasHeight/3.5 + '%', 'padding': 6 * sendingTextPadding/7 + 'px ' + '0 ' + sendingTextPadding + 'px', top: 3 * sendingCanvasHeight/8 + 'px'});

		hidingHelpers('.main-painting p');
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
			
		setPercents(26.4, 45.2, 13.35, 30);
	}


	// ---------HELPERS TEXT PROPERTIES CHANGING---------

	function helpersTextProperties() {
		var span = $('ul#helpers li span'),
			width = $(window).width();
		
		span.css({width: width/100 * 20 + 'px'});
		
		var spanWidth = parseInt(span.css('width'));
		
		span.css({'font-size': spanWidth/3 + '%'});
		
		var spanPadding = spanWidth/10;
		
		span.css({padding: spanPadding/7 * 6 + 'px ' + spanPadding + 'px ' + spanPadding + 'px'});
		
		span.css({'border-radius': spanPadding/1.5 + 'px'});

		var spanTopPos = -spanWidth/5;

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
		$('ul#helpers li#helper-13 span').css({left: -spanWidth/2 + 'px', top: spanTopPos * 1.35 + 'px'});
		$('ul#helpers li#helper-14 span').css({left: -spanWidth + 'px', top: spanTopPos * 1.35 + 'px'});
		$('ul#helpers li#helper-15 span').css({left: -spanWidth/2 + 'px', top: spanTopPos * 1.35 + 'px'});
	}


	// ---------HELPERS TEXT PROPERTIES CHANGING---------

	function buttonHelpersPosition() {
		var spanup = $('ul#buttons li span.up'),
			spandown = $('ul#buttons li span.down'),
			buttonHeight = parseInt($('ul#buttons li.hor').css('height')),
			bothSpanWidth = $('ul#buttons li span').width(),
			bothSpanHeight = $('ul#buttons li span').height(),
			paddingTopRatio = 214/15,
			paddingTop = bothSpanWidth/paddingTopRatio,
			paddingBottomRatio = 214/20,
			paddingBottom = bothSpanWidth/paddingBottomRatio;

		$('ul#buttons li span').css({'font-size': bothSpanWidth/1.5 + '%', 'padding': paddingTop + 'px ' + '0 ' + paddingBottom + 'px'});

		spanup.css('top', -(bothSpanHeight + paddingTop * 1.65 + paddingBottom) + 'px');
		spandown.css('top', buttonHeight + 'px');
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
		coordinate(9, 1, 60);
		coordinate(10, -1.7, 7.7);
		coordinate(11, 86.75, 2);
		coordinate(12, 10, 20);
		coordinate(13, 12.25, 43);
		coordinate(14, 94.5, 38);
		coordinate(15, 75.8, 44.7);

		$('#index-wrapper').css('height', artHeight + 'px');

		var helper = $('ul#helpers li'),
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
		momandson.find('span').css({left: -specialSpanWidth/2 + 'px', top: -(width/100) * 23.75 + 'px'});
		couple.find('span').css({left: -specialSpanWidth + 'px', top: -(width/100) * 15.87 + 'px'});
	}

	$(window).resize(function(){
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

	$(window).load(function(){
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
	
});