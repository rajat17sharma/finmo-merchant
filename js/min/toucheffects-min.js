! function(e) {
    function n(e) {
        return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
    }

    function t(e, n) {
        var t = s(e, n) ? i : a;
        t(e, n)
    }
    if (Modernizr.touch) {
        var s, a, i;
        "classList" in document.documentElement ? (s = function(e, n) {
            return e.classList.contains(n)
        }, a = function(e, n) { e.classList.add(n) }, i = function(e, n) { e.classList.remove(n) }) : (s = function(e, t) {
            return n(t).test(e.className)
        }, a = function(e, n) { s(e, n) || (e.className = e.className + " " + n) }, i = function(e, t) { e.className = e.className.replace(n(t), " ") });
        var c = { hasClass: s, addClass: a, removeClass: i, toggleClass: t, has: s, add: a, remove: i, toggle: t };
        "function" == typeof define && define.amd ? define(c) : e.classie = c, [].slice.call(document.querySelectorAll("ul.grid > li > figure")).forEach(function(e, n) { e.querySelector("figcaption").addEventListener("touchstart", function(e) { e.stopPropagation() }, !1), e.addEventListener("touchstart", function(e) { c.toggle(this, "visible") }, !1) })
    }
}(window);
