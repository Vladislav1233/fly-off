function addValueInput(data) {
    data.input
        .closest('.b-range-group__range-wrapper')
        .next()
        .find('.js-range-input').val(data.from_pretty);
}

$('.js-range-slider').ionRangeSlider({
    skin: 'flat',
    postfix: '&#8381;',
    block: true,
    onStart: function (data) {
        addValueInput(data);
    },
    onChange: function (data) {
        addValueInput(data);
    }
});

$('.js-toggle-range .b-checkbox__input').on('change', function () {
    var myRange = $(this)
        .closest('.b-range-group__check')
        .next()
        .find('.js-range-slider')
        .data('ionRangeSlider');

    var inputForRangeValue = $(this)
        .closest('.b-range-group__check')
        .nextAll('.b-range-group__input')
        .find('.b-input__input-field');

    if ($(this).is(':checked')) {

        myRange.update({
            block: false
        });
        inputForRangeValue.prop('disabled', false);
    } else {
        myRange.update({
            block: true
        });
        inputForRangeValue.prop('disabled', true);
    }
});

$('.js-range-input').on('change', function () {

    $(this)
        .closest('.b-range-group__input')
        .prev()
        .find('.js-range-slider')
        .data('ionRangeSlider')
        .update({
            from: $(this).val().replace(/\s/g, '')
        });
});
