$('.js-rent-check input').closest('.b-calculator-page__group')
    .next()
    .find('input')
    .prop('disabled', true);

$('.js-rent-check input').on('change', function () {
    var check = $(this).closest('.b-calculator-page__group')
        .next()
        .find('input');

    if ($(this).is(':checked')) {
        check.prop('disabled', false);
    } else {
        check.prop('disabled', true);
    }
});
