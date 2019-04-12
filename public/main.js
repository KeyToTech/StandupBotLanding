$(document).ready(function () {
    if (document.getElementById("home").onclick) {
        alert("Owen");
    }
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500)
    })

})

