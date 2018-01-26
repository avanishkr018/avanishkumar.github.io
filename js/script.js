function initNavbar() {

    var SCROLL_SPEED = 750;
    var SCROLL_OFFSET = 50;
    var EASING = 'swing';

    var $navTop = $('#navbar-top');
    var $navExternal = $('.nav-external');

    $navTop.find('.navbar-default ul.nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: SCROLL_SPEED,
        scrollOffset: SCROLL_OFFSET,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: EASING
    });

    $navTop.find('.navbar-default').affix({
        offset: {
            top: $('#home').height()
        }
    });

    $navExternal.click(function(e) {
        e.preventDefault();

        $('html, body').stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - SCROLL_OFFSET
        }, SCROLL_SPEED, EASING);
    });
}

function initPortfolio() {

    var $portfolio = $('#portfolio');
    var $items = $portfolio.find('.items');
    var $filters = $portfolio.find('.filters li a');

    $items.imagesLoaded(function() {

        $items.isotope({
            //itemSelector: '.item',
            layoutMode: 'fitRows',
            transitionDuration: '0.7s'
        });
    });

    $filters.click(function() {

        var $el = $(this);

        $filters.removeClass('active');

        $el.addClass('active');

        var selector = $el.attr('data-filter');

        $items.isotope({
            filter: selector
        });

        return false;
    });

    $items.find('.item a').venobox({
        border: '0 10px',
        numeratio: true,
        infinigall: true
    });
}

function initAnimations() {
    var $animated = $('.animated');

    $animated.appear({
        force_process: true
    });

    $animated.on('appear', function() {

        var $el = $(this);

        var animation = $el.data('animation');
        var delay = $el.data('delay');

        if (delay) {

            setTimeout(function() {
                $el.addClass(animation);
                $el.addClass('showing');
                $el.removeClass('hiding');
            }, delay);
        } else {

            $el.addClass(animation);
            $el.addClass('showing');
            $el.removeClass('hiding');
        }
    });

    
}




(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();





$(document).ready(function() {

    initNavbar();
    initPortfolio();
    initAnimations();
});


