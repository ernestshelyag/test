function header () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70 && $(window).width() > 880) {
            $('.header').addClass('active');
        }
        else {
            $('.header').removeClass('active');
        }
        // -
        if ($(window).scrollTop() > 70 && $('.sidebar').hasClass('active')) {
            $('#burger-btn').click();
        }
        // -
        if ($(window).scrollTop() + $(window).height() >= $(document).height() && $(window).height() + 10 < $(document).height()){
            $('.header').hide();
        } else {
            $('.header').show();
        }
    });
    // - - - - -
    $('#burger-btn').click(function () {
        $('.burger__lines-block, .burger__mid-line, .sidebar, .sidebar__link').toggleClass('active');
    });
    $('.sidebar').click(function () {
        $('#burger-btn').click();
    });
}

