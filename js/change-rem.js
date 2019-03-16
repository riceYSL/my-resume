$(function () {
    function setRem() {
        var clientWidth = $(window).width();
        var nowRem = (clientWidth / 750 * 100);
        $("html").css("font-size", parseInt(nowRem, 10) + "px");
    };
    setRem();

    $(function () {
        var timer;
        $(window).on("resize", function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                setRem();
            }, 100)
        })
    });
});