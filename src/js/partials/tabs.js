var tabSelect = $('.js-tab-select');

function toggleTabSelect() {
    if (window.innerWidth < 1024) {
        tabSelect.next().slideUp();
    } else {
        tabSelect.next().slideDown();
    }
}
toggleTabSelect();

$(window).resize(function () {
    toggleTabSelect();
});

$('.js-tabs').responsiveTabs({
    startCollapsed: false
});

tabSelect.click(function () {
    $(this).next().stop().slideToggle();
});


$('.b-tab__link').click(function () {
    var $text = $(this).text();
    tabSelect.text($text);
    if (window.innerWidth < 1024) {
        tabSelect.next().slideUp();
    }
});
