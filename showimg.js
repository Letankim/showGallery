var img = document.querySelectorAll('.img');
var show = document.querySelector('.show');
var closeImg = document.querySelector('.close');
var overplay = document.querySelector('.overplay');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var gallery = document.querySelector('.show__img');
var close = [closeImg, overplay];
var imgs = [...img];
var currentIndex = 0;
// function show Img
imgs.forEach(function(item, index) {
    item.onclick = function() {
        show.classList.add('cancelShow');
        currentIndex = index;
        controlShow();
        closeShow();
    };
});
//  close show
function closeShow() {
    close.forEach(function(item) {
        item.onclick = function() {
            show.classList.remove('cancelShow');
        };
    });
// close by esc
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 27) {
            show.classList.remove('cancelShow');
        };
    });
};

// next and prev
function controlShow() {
    // hide and show control 
    if(currentIndex == 0) {
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
    }
    if(currentIndex == imgs.length - 1) {
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }
    // show img
    src = imgs[currentIndex].children[0].src;
    gallery.innerHTML = `<img src="${src}" alt="">`;
};


next.onclick = function() {
    if (currentIndex < imgs.length - 1) {
        currentIndex++;
        controlShow();
    }
};

prev.onclick = function() {
    if (currentIndex > 0) {
        currentIndex--;
        controlShow();
    }
};



