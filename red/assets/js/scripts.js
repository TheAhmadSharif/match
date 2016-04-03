//Sticky nav on scroll 
$(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
        $("#fixedNav").addClass('sticky-nav');
    } else {
        $('#fixedNav').removeClass('sticky-nav');
    }
});

// Dropdown Effect 
if ($(window).width() > 767) {

    $('.dropdown-toggle').click(function() {
        $(this).next('.dropdown-menu').slideToggle(400);
    });

} else {
    $('.dropdown-toggle').click(function() {
        $(this).next('.dropdown-menu').slideToggle(10);
    });
}


/*scroll to top*/
jQuery(document).ready(function($) {


    $(function() {
        $.localScroll();
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $("a.scrollToTop").fadeIn();
        } else {
            $("a.scrollToTop").fadeOut();
        }
    });


    // Animation Initialization

    new WOW().init();


});



