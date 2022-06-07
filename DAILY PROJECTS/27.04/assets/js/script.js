$(document).ready(function(){


    $(".open-button").on("click", function() {
        $("html").addClass("content-visible");
        $(".open-button").addClass("hide");
        $(".close-button").removeClass("hide");
    });

    $(".open-button-about").on("click", function() {
        $("html").addClass("content-visible-about");
        $(".open-button-about").addClass("hide");
        $(".close-button-about").removeClass("hide");
    });
    
    $(".close-button").on("click", function() {
        $("html").removeClass("content-visible");
        $(".close-button").addClass("hide");
        $(".open-button").removeClass("hide");
    });

    $(".close-button-about").on("click", function() {
        $("html").removeClass("content-visible-about");
        $(".close-button-about").addClass("hide");
        $(".open-button-about").removeClass("hide");
    });

});