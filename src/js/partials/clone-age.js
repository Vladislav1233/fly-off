var countClick = 1;
$('.js-button-more').click(function () {
    var $elem = $('.js-block-more').clone(true);
    countClick = countClick + 1;

    function changeAttr(attrFind, name) {
        $elem.find(attrFind).attr(name, function (index, value) {
            return `${value}${countClick}`;
        });
    }
    $elem.eq(0).removeClass('js-block-more');
    $elem.find('.js-count-traveler').text(countClick);
    changeAttr('.b-radio__field', 'id');
    changeAttr('.b-radio__field', 'name');
    changeAttr('.b-radio__label', 'for');

    $elem.appendTo('.js-place-more');
});
