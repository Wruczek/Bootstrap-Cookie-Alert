$(function () {
    "use strict";

    if (!Cookies.get("acceptCookies")) {
        $(".cookiealert").addClass("show");
    }

    $(".acceptcookies").click(function () {
        Cookies.set("acceptCookies", true, { expires: 60 });
        $(".cookiealert").removeClass("show");
    });
});
