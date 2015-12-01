// navigation.js

var menu = document.querySelector('.nav_list');
var burger = document.querySelector('.burger');
var doc = $(document);
var l = $('.scrolly');
var panel = $('.panel');
var vh = $(window).height();

var openMenu = function() {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('nav_list--active');
};

// reveal content of first panel by default
// panel.eq(0).find('.panel_content').addClass('panel_content--active');

var scrollFx = function() {
    var ds = doc.scrollTop();
    var of = vh / 4;

    // if the panel is in the viewport, reveal the content, if not, hide it.
    for (var i = 0; i < panel.length; i++) {
        if (panel.eq(i).offset().top < ds + of) {
            panel
                .eq(i)
                .find('.panel_content')
                .addClass('panel_content--active');
        } 
        else {
            panel
                .eq(i)
                .find('.panel_content')
                .removeClass('panel_content--active');
        }
    }
};

var scrolly = function(e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 300, 'swing', function() {
        window.location.hash = target;
    });
};

var init = function() {
    burger.addEventListener('click', openMenu, false);
    window.addEventListener('scroll', scrollFx, false);
    window.addEventListener('load', scrollFx, false);
    $('a[href^="#"]').on('click', scrolly);
};

doc.on('ready', init);

// end navigation
//
// start spotify
//
//
//
var importScript = (function(oHead) {

    function loadError(oError) {
        throw new URIError("The script " + oError.target.src + " is not accessible.");
    }

    return function(sSrc, fOnload) {
        var oScript = document.createElement("script");
        oScript.type = "text\/javascript";
        oScript.onerror = loadError;
        if (fOnload) {
            oScript.onload = fOnload;
        }
        oHead.appendChild(oScript);
        oScript.src = sSrc;
    };

})(document.head || document.getElementsByTagName("head")[0]);

// importScript("textfield.js", /* onload function: */ function () { alert("You read this alert because the script \"myScript2.js\" has been correctly loaded."); });
