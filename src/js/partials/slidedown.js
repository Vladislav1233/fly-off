$('.js-slidedown .b-slidedown__head').next().slideUp();

$('.js-slidedown .b-slidedown__head').click(function () {
    $(this).hasClass('active') ?
        $(this).removeClass('active') :
        $(this).addClass('active');

    $(this).next().slideToggle();
});
