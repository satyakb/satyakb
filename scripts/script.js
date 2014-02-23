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

 function closeInnerPage() {
 	$('.inner').show();
 	$('.outer').show();
 	console.log('close');
 	$('.inner').animate({
 		top: '0',
 		bottom: '0'
 	}, s, ease, function() {;
 		$('.page').remove();
 	}); 
 	$('.outer').animate({
 		top: '0',
 		bottom: '0'
 	}, s, ease); 
 }

  function closeOuterPage() {
  	$('.inner').show();
 	$('.outer').show();
 	$('.outer').animate({
 		top: '0',
 		bottom: '0'
 	}, s, ease, function() {
 		$('.page').remove();
 	}); 
 	$('.inner').animate({
 		top: '0',
 		bottom: '0'
 	}, s, ease); 
 }

 $(document).ready(function() {

 	setTimeout(function() {
 		if(!loaded) {
 			closeInnerPage();
 			loaded = true;
 		}
  	}, 1000);

 	$('.panel').hover(function() {
 		var panel = $(this).attr('id');
 		var ease = 'easeInOutQuad';
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
 		var panel = $(this).attr('id');
 		var ease = 'easeInOutQuad';
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


 	function setupHistoryClicks() {
 		addClicker($('#about'));
 		addClicker($('#work'));
 	}

 	function addClicker(link) {
 		link.on('click', function(e) {
 			console.log('whoo');
 			existing = true;
 			getPage(link.attr('href'));
 			history.pushState(null,null,link.attr('href'));
 			console.log(link.attr('href'));
 			e.preventDefault();
 		});
 	}

 	function getPage(href) {
 		var req = new XMLHttpRequest();
 		req.open("GET", href, false);
 		console.log(href);
 		req.send(null);
		if (req.status == 200) {
			console.log(req.responseText);
			$('body').append(req.responseText);
			$('.page').show();
			openInnerPage();
			return true;
		}
		return false;
 	}

//  	xmlhttp.open("GET", url , true);
// xmlhttp.onreadystatechange = function() {
//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//         var xmlDoc = xmlhttp.responseXML;
//         // Do something here
//     }
// }
// xmlhttp.send();

 	window.addEventListener("popstate", function(e) {
    	if (location.pathname == '/' || location.pathname == '/index.html') {
    		var req = new XMLHttpRequest();
 			req.open("GET", 'index.html', false);
 			req.send(null);
 			if (req.status == 200) {
 				if (side == 'inner') {
 					closeInnerPage();
 				} else if (side == 'outer') {
 					closeOuterPage();
 				}
    			console.log('whoooooooo');
    			return true;
  			}
    	}

    	if (location.pathname == '/about.html') {
    		var req = new XMLHttpRequest();
	 		req.open("GET", '/about.html', false);
	 		req.send(null);
			if (req.status == 200) {
				$('body').append(req.responseText);
				$('.page').show();
				openInnerPage();
				return true;
			}
    	}

    	if (location.pathname == '/work.html') {
    		var req = new XMLHttpRequest();
	 		req.open("GET", '/work.html', false);
	 		req.send(null);
			if (req.status == 200) {
				$('body').append(req.responseText);
				$('.page').show();
				openOuterPage();
				return true;
			}
    	}
    	return false;
	});

 	setupHistoryClicks();

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