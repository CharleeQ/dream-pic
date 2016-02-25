$(document).ready(function () {
    $(".top_overlay").mousemove(function (e) {
        var moveX = (e.pageX * -1 / 25);
        $(this).css("background-position", moveX + "px ");
    });
});