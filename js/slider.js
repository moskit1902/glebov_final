// Changes slider images
;(function () {
var slideLength = document.querySelectorAll('.slides li').length;
var x = 0;

var changerPrev = function() {
    if (x == 1) {
        x = slideLength - 1;
    }
    else if (x == 0) {
        x = slideLength - 2;
    }
    else {
        x -= 2;
    };
    changer();
};

var changer = function() {
    var sliders = document.querySelectorAll('.slides li');
    for (var i=0; i<slideLength; i++) {
        sliders[i].style.display = "none";
    };
    var sliderNext = document.querySelectorAll('.slides li')[x];
    sliderNext.style.display = "block";
    x++;
};

var applier = function() {
    if (x >= slideLength) {
        x=0;        
    };
    changer();
};

var timer = setInterval(applier, 5000);
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

next.onclick = function() {
    clearInterval(timer);
    applier();
    timer = setInterval(applier, 5000);
};

prev.onclick = function() {
    clearInterval(timer);
    changerPrev();
    timer = setInterval(applier, 5000);
};
})();