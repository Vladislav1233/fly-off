var hamburger = $('.js-hamburger');
var menu = $('.js-nav');

hamburger.click(function (e) {
    if (hamburger.hasClass('active')) {
        menu.removeClass('active');
        hamburger.removeClass('active');
        $('html').css({overflow: ''});
    } else {
        menu.addClass('active');
        hamburger.addClass('active');
        $('html').css({overflow: 'hidden'});
    }
});
