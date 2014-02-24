 var s = 800;
 var ease = 'easeInOutQuad';
 var side;
 var existing = false;
 var loaded = false;

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

 //  function closeOuterPage() {
 //  	$('.inner').show();
 // 	$('.outer').show();
 // 	$('.outer').animate({
 // 		top: '0',
 // 		bottom: '0'
 // 	}, s, ease, function() {
 // 		$('.page').hide();
 // 	}); 
 // 	$('.inner').animate({
 // 		top: '0',
 // 		bottom: '0'
 // 	}, s, ease); 
 // }

 function showAbout() {
 	$('.page').hide();
 	$('.underline.on').removeClass('on').addClass('off').hide();
 	$('.navBarAbout').find('.underline').removeClass('off').addClass('on').show();
 	$('#aboutPage').show();
 	openOuterPage();
 }

 function showWork() {
 	$('.page').hide();
 	$('.underline.on').removeClass('on').addClass('off').hide();
 	$('.navBarWork').find('.underline').removeClass('off').addClass('on').show();
 	$('#workPage').show();
 	openInnerPage();
 }

 function showContact() {
 	$('.page').hide();
 	$('.underline.on').removeClass('on').addClass('off').hide();
 	$('.navBarContact').find('.underline').removeClass('off').addClass('on').show();
 	$('#contactPage').show();
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

 	// setTimeout(function() {
 	// 	if(!loaded) {
 	// 		closeInnerPage();
 	// 		loaded = true;
 	// 	}
  // 	}, 1000);

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
 	})

 	// if (window.location.pathname == '/') {
 	// 	console.log('noooo');
 	// 	window.location.replace('/#');
 	// }

 	// if (window.location.pathname == '/#about') {
 	// 	console.log('aboutttttt');
 	// }

 	$(window).trigger('hashchange');

 	// window.addEventListener('popstate', function(e) {
 	// 	if (location.pathname == '/') {
 	// 		location.replace('#home');
 	// 	}
 	// });

 	// function setupHistoryClicks() {
 	// 	addClicker($('#about'));
 	// 	addClicker($('#work'));
 	// }

 	// function addClicker(link) {
 	// 	link.on('click', function(e) {
 	// 		console.log('whoo');
 	// 		existing = true;
 	// 		getPage(link.attr('href'));
 	// 		history.pushState(null,null,link.attr('href'));
 	// 		console.log(link.attr('href'));
 	// 		e.preventDefault();
 	// 	});
 	// }

 	// function getPage(href) {
 	// 	var req = new XMLHttpRequest();
 	// 	req.open("GET", href, false);
 	// 	console.log(href);
 	// 	req.send(null);
		// if (req.status == 200) {
		// 	console.log(req.responseText);
		// 	$('body').append(req.responseText);
		// 	$('.page').show();
		// 	openInnerPage();
		// 	return true;
		// }
		// return false;
 	// }

//  	xmlhttp.open("GET", url , true);
// xmlhttp.onreadystatechange = function() {
//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//         var xmlDoc = xmlhttp.responseXML;
//         // Do something here
//     }
// }
// xmlhttp.send();

 // 	window.addEventListener("popstate", function(e) {
 //    	if (location.pathname == '/' || location.pathname == '/index.html') {
 //    		var req = new XMLHttpRequest();
 // 			req.open("GET", 'index.html', false);
 // 			req.send(null);
 // 			if (req.status == 200) {
 // 				if (side == 'inner') {
 // 					closeInnerPage();
 // 				} else if (side == 'outer') {
 // 					closeOuterPage();
 // 				}
 //    			console.log('whoooooooo');
 //    			return true;
 //  			}
 //    	}

 //    	if (location.pathname == '/about.html') {
 //    		var req = new XMLHttpRequest();
	//  		req.open("GET", '/about.html', false);
	//  		req.send(null);
	// 		if (req.status == 200) {
	// 			$('body').append(req.responseText);
	// 			$('.page').show();
	// 			openInnerPage();
	// 			return true;
	// 		}
 //    	}

 //    	if (location.pathname == '/work.html') {
 //    		var req = new XMLHttpRequest();
	//  		req.open("GET", '/work.html', false);
	//  		req.send(null);
	// 		if (req.status == 200) {
	// 			$('body').append(req.responseText);
	// 			$('.page').show();
	// 			openOuterPage();
	// 			return true;
	// 		}
 //    	}
 //    	return false;
	// });

 // 	setupHistoryClicks();

 	// $('#about').on('click', function(e) {
 	// 	e.preventDefault();
 	// 	$('#aboutPage').show();
 	// 	openInnerPage();
 	// 	history.pushState(data, event.target.textContent, event.target.href);
 	// });
 	// $('#work').on('click', function(e) {
 	// 	e.preventDefault();
 	// 	$('#workPage').show();
 	// 	openOuterPage();
 	// });
 });