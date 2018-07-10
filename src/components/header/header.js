function header () {

    $('#burger-btn').click(function () {
        $('.burger__lines-block, .burger__mid-line, .sidebar, .sidebar__link').toggleClass('active');
    });
    $('.sidebar').click(function () {
        $('#burger-btn').click();
    });

}

