// Hides and displays menu button (if screen devices < 768px)
;(function (){
var menu  =document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
menu.onclick = function() {
	if (document.body.clientWidth < 768) {
	menu.style.display = "none";
	}
};
menuBtn.onclick = function() {
	if (getComputedStyle(menu).display == 'none') {
		menu.style.display = "block";
	}
	else {
		menu.style.display = "none";
	}
};
})();

