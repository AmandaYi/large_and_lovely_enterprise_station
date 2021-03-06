$(function() {
    $(window).scroll(function() {
        var i = $(window).scrollTop(),
            a = $(window).height();
        $(".fade_mod").each(function() {
            var n = $(this),
                o = n.offset().top,
                e = n.height();
            if (i + a - 50 > o && i - e + 50 < o) {
                n.removeClass("fade_mod");
                var s = n.attr("fade-name"),
                    t = parseFloat(n.css("animation-delay"));
                t || (t = 0), s && (n.css({
                    "animation-name": s
                }), setTimeout(function() {
                    n.css({
                        visibility: "visible"
                    })
                }, 1e3 * t))
            }
        })
    }), $(".fade_block").each(function() {
        var i = $(this),
            a = i.css("animation-name");
        a && (i.attr("fade-name", a), i.addClass("fade_mod").css({
            visibility: "hidden",
            "animation-name": "none"
        }))
    }), $(window).scroll()
});