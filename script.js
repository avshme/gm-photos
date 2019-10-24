$(document).ready(function () {
    var video = $(".video-slider__item");
    var containerWidth = (video.length-1)*(video.width()+30);
    var buttons = $(".video-section__slider-btn").children();
    var offset = 0;
    buttons.eq(0).click(function () {
        if (offset !=0) {
            video.animate({'left': '+=' + (video.width()+30) +"px"},500);
            offset -= video.width()+30;
        }
        else{
            offset = containerWidth;
            video.animate({'left': "-=" + (offset) +"px"},400 );
        }
    });
    buttons.eq(1).click(function () {
        if (offset != containerWidth) {
            video.animate({'left': "-=" + (video.width()+30) +"px"},500 );
            offset += video.width()+30;
        }
        else{
            video.animate({'left': "+=" + (offset) +"px"},400 );
            offset = 0;
        }
    });
    $( window ).resize(function(){
        if (offset !=0) {
            video.animate({'left': "+=" + (offset) +"px"},400 );
            offset= 0;
        }
    });
});