$(function() {
    function setRem() {
        var clientWidth = $(window).width();
        // console.log(clientWidth);
        var nowRem = (clientWidth / 750 * 100);
        $("html").css("font-size", parseInt(nowRem, 10) + "px");
    };
    setRem();
    $(function() {
        var timer;
        $(window).on("resize", function() {
            clearInterval(timer);
            timer = setTimeout(function() {
                setRem();
            }, 100);
        });
    });
});