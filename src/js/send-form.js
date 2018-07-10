function sendForm() {
    

    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 400) {
            $('.form').addClass('active');
            console.log('ass');
        }
    });

    $('input[type=email]').on('input', function () {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (pattern.test($(this).val())) {
            $(this).parent().addClass('active');
        }
    });
    $('.inp').on('input', function () {
        console.log($(this).val().length);
        if ($(this).val().length > 5) {
            $(this).parent().addClass('active');
        }
    });

    $('.number-only').on('keyup', function () {

        var v = $(this).val(),
            r = v.replace(/[^\[0-9]*/giu, '');
        $(this).val(r);

    });

}