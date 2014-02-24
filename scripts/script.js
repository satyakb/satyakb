 var s = 800;
 var ease = 'easeInOutQuad';
 var side;
 var existing = false;
 var loaded = false;
 var main = true;

 function openInnerPage() {
 	side = 'inner';
 	$('.inner').animate({
 		top: '100%',
 		bottom: '-100%'
 	}, s, ease, function() {
 		$('.inner').hide();
 	}); 
 	$('.outer').animate({
 		top: '-100%',
 		bottom: '100%'
 	}, s, ease, function() {
 		$('.outer').hide();
 	}); 
 }

  function openOuterPage() {
  	side = 'outer';
 	$('.outer').animate({
 		top: '100%',
 		bottom: '-100%'
 	}, s, ease, function() {
 		$('.outer').hide();
 	}); 
 	$('.inner').animate({
 		top: '-100%',
 		bottom: '100%'
 	}, s, ease, function() {
 		$('.inner').hide();
 	}); 
 }

 function closePage() {
 	$('.inner').show();
 	$('.outer').show();
 	main = true;
 	console.log('close');
 	$('.inner').animate({
 		top: '0',
 		bottom: '0'
 	}, s, ease, function() {;
 		$('.page').hide();
 	}); 
 	$('.outer').animate({
 		top: '0',
 		bottom: '0'
 	}, s, ease); 
 }

 function showAbout() {
 	if (main) {
 		$('.page').hide();
 	} else {
 		$('.page').fadeOut();
 	}
 	$('.underline.on').removeClass('on').addClass('off').hide();
 	$('.navBarAbout').find('.underline').removeClass('off').addClass('on').show();
 	$('#aboutPage').css({'opacity': '1'});
 	if (main) {
 		$('#aboutPage').show();
 		main = false;
 	} else {
 		$('#aboutPage').fadeIn();
 	}
 	openOuterPage();
 }

 function showWork() {
 	if (main) {
 		$('.page').hide();
 	} else {
 		$('.page').fadeOut();
 	}
 	$('.underline.on').removeClass('on').addClass('off').hide();
 	$('.navBarWork').find('.underline').removeClass('off').addClass('on').show();
 	if (main) {
 		$('#workPage').show();
 		main = false;
 	} else {
 		$('#workPage').fadeIn();
 	}
 	openInnerPage();
 }

 function showContact() {
 	if (main) {
 		$('.page').hide();
 	} else {
 		$('.page').fadeOut();
 	}
 	$('.underline.on').removeClass('on').addClass('off').hide();
 	$('.navBarContact').find('.underline').removeClass('off').addClass('on').show();
 	if (main) {
 		$('#contactPage').show();
 		main = false;
 	} else {
 		$('#contactPage').fadeIn();
 	}
 	openOuterPage();
 }

 function showProject(x) {
 	$('.page').fadeOut();
 	$('.panel').hide();
 	if (x === 1) {
 		$('#soundqPage').fadeIn();
 	} else if (x === 2) {
 		$('#impulsePage').fadeIn();
 	}
 }

 $(document).ready(function() {

 	$('.panel').on('click', function(e) {
 		e.preventDefault();
 		var h = $(this).attr('href');
 		window.location.hash = h;
 	});

 	$('.navBarNew').on('click', function(e) {
 		e.preventDefault();
 		var h = $(this).attr('href');
 		window.location.hash = h;
 	})

 	$('.item.linked').on('click', function(e) {
 		e.preventDefault();
 		var h = $(this).attr('href');
 		window.location.hash = h;
 	})

 	$(window).bind('hashchange', function() {
 		var h = location.hash;
 		if (h === '#about') {
 			showAbout();
 		}
 		if (h === '#work') {
 			showWork();
 		}
 		if (h === '#contact') {
 			showContact();
 		}
 		if (h === '#soundq') {
 			showProject(1);
 		}
 		if (h === '#impulse') {
 			showProject(2);
 		}
 		if (h === '') {
 			closePage();
 		}
 	});

 	$('.panel').hover(function() {
 		var panel = $(this).attr('href');
 		$('#' + panel + 'Name').animate({
 			opacity: 0
 		}, 150, ease);
 		$('#' + panel + 'Blurb').animate({
 			opacity: 1
 		}, 400, ease);
 		$('#' + panel + 'Button').animate({
 			opacity: 1
 		}, 400, ease);
 	}, function() {
 		var panel = $(this).attr('href');
 		$('#' + panel + 'Blurb').stop().animate({
 			opacity: 0
 		}, 200, ease, function() {
 			$('#' + panel + 'Name').stop().animate({
 			opacity: 1
 		}, 200, ease);
 		});
 		$('#' + panel + 'Button').stop().animate({
 			opacity: 0
 		}, 200, ease);
 	});

 	$('.navBarNew').hover(function() {
 		$(this).find('.underline.off').show();
 	}, function() {
 		$(this).find('.underline.off').hide();
 	});

 	$('.item').hover(function() {
 		$(this).css({'background': '#f5f5f5'});
 	}, function() {
 		$(this).css({'background': 'white'});
 	});

 	$('.itemPic').hover(function() {
 		$(this).find('.imageOverlay').show();
 	}, function() {
 		$(this).find('.imageOverlay').hide();
 	});

 	$('.projPics').css({'height': $(window).height()-200});
 	$('.contactContainer').css({'height': $(window).height()-75});

 	$(window).resize(function() {
 		var h = $(window).height();
 		$('.projPics').css({'height': h-200});
 		$('.contactContainer').css({'height': h-75});
 	});

 	$(window).trigger('hashchange');

 });