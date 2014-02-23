// if (!existing) {
// 	var req = new XMLHttpRequest();
//  		req.open("GET", 'index.html', false);
//  		req.send(null);
//  		if (req.status == 200) {
//     		$(document).html(req.responseText);
//     		return true;
//   		}
//   		return false;
// }

console.log('running');

// if (typeof existing=== 'undefined') {
// 	console.log('test');
// 	window.location.replace('index.html');
// }

// setTimeout(function() {
// 		console.log('redirect');
// 		$("#about")[0].click();
// }, 2000);

$(document).ready(function() {
	if(typeof existing === 'undefined') {
		$('.page').show();
	}
})