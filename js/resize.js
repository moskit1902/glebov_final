// Function that counts #content height, depends on url
;
var resize = function() {
	var screenSize = document.body.clientHeight;
	var headerSize = getComputedStyle(document.getElementById('header')).height;
	var footerSize = getComputedStyle(document.getElementById('footer')).height;
	var contentSize = parseInt(screenSize) - parseInt(headerSize) - parseInt(footerSize) - 130;
	if (window.location.hash === '#/menu/regular' || window.location.hash === '#/menu/banquet' || window.location.hash === '#/menu/wine') {
		document.getElementById('content').style.height = contentSize + 'px';
		}
	else if (window.location.hash === '#/gallery') {
		document.getElementById('content').style.height = contentSize + 30 + 'px';
		}
	else if (window.location.hash === '#/') {
		document.getElementById('content').style.height = contentSize + 110 + 'px';
		}
	else {
		document.getElementById('content').style.height = contentSize + 60 + 'px';
	}
};
window.onload = resize;
window.onhashchange = resize;
