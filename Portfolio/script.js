function scrollDown(){
    var currentPos = $(window).scrollTop();

    for(i = 1; i <= 99; i++){
        var oldPos = (i * 1000) - 1;
        var newPos = i * 1000;

        if(currentPos <= oldPos && currentPos >= newPos - 1000){
            window.scrollTo (0, newPos);
        }
    }
}




$(document).ready(function(){
    for (i = 1; i <= 100; i++)
    {
        var num1 = -500 + 1000 * (i - 1);
        scroll(i, num1);
    }
});



function scroll(num1, num2){
    var content = $("#" + num1);
    var oldID = num1 - 1;
    var contentPrev = $("#" + oldID);
    var pos = content.position();
    $(window).scroll(function () {
        var windowPos = $(window).scrollTop();
        if (windowPos >= num2) {
            content.addClass("scrollShown");
            content.removeClass("scrollHidden");
            contentPrev.addClass("scrollHidden");
            contentPrev.removeClass("scrollShown");
        }
        else {
            content.removeClass("scrollShown");
            content.addClass("scrollHidden");
        };
    });
}