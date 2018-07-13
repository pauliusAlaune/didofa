$(document).ready(function() { 
    $("#menuToggle").click(function(){
        $("#nav-icon").toggleClass("open");
        if($("#nav-icon").hasClass("open")) {
//            $(".navWrapper").delay(300).css({"transform": "translateX(0%)"});
            $(".navWrapper").delay(300).addClass('active');
        } else {
//            $(".navWrapper").delay(1000).css({"transform": "translateX(-100%)"});
            $(".navWrapper").delay(300).removeClass('active');
        }
    });
});

