var navh = $(".navbar").innerHeight();

$(".header").height($(window).height() - navh)

$(function() {  
    $("body").niceScroll({
        cursorcolor:"#3480E3",
        cursorwidth:"12px",
        cursorborderradius:"0"
    });
});


console.log($(".header").height());