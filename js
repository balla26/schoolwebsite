!(function (e, a) {
    function i(i, o) {
        i = e(i);
        var n = i.is("body"),
            d = i.data("LoadingOverlayCount");
        if ((d === a && (d = 0), 0 == d)) {
            var r = e("<div>", { class: "loadingoverlay", css: { "background-color": o.color, position: "relative", display: "flex", "flex-direction": "column", "align-items": "center", "justify-content": "center" } });
            if (
                (o.zIndex !== a && r.css("z-index", o.zIndex),
                o.image && r.css({ "background-image": "url(" + o.image + ")", "background-position": o.imagePosition, "background-repeat": "no-repeat", "background-size": "auto !important" }),
                o.fontawesome && e("<div>", { class: "loadingoverlay_fontawesome " + o.fontawesome }).appendTo(r),
                o.custom && e(o.custom).appendTo(r),
                n ? r.css({ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }) : r.css("position", "fixed" == i.css("position") ? "fixed" : "absolute"),
                t(i, r, o, n),
                o.resizeInterval > 0)
            ) {
                var s = setInterval(function () {
                    t(i, r, o, n);
                }, o.resizeInterval);
                i.data("LoadingOverlayResizeIntervalId", s);
            }
            o.fade ? (o.fade === !0 ? (o.fade = [400, 200]) : ("string" != typeof o.fade && "number" != typeof o.fade) || (o.fade = [o.fade, o.fade])) : (o.fade = [0, 0]),
                i.data({ LoadingOverlay: r, LoadingOverlayFadeOutDuration: o.fade[1] }),
                r.hide().appendTo("body").fadeIn(o.fade[0]);
        }
        d++, i.data("LoadingOverlayCount", d);
    }
    function o(i, o) {
        i = e(i);
        var t = i.data("LoadingOverlayCount");
        if (t !== a)
            if ((t--, o || 0 >= t)) {
                var n = i.data("LoadingOverlayResizeIntervalId");
                n && clearInterval(n),
                    i.data("LoadingOverlay").fadeOut(i.data("LoadingOverlayFadeOutDuration"), function () {
                        e(this).remove();
                    }),
                    i.removeData(["LoadingOverlay", "LoadingOverlayCount", "LoadingOverlayFadeOutDuration", "LoadingOverlayResizeIntervalId"]);
            } else i.data("LoadingOverlayCount", t);
    }
    function t(a, i, o, t) {
        if (!t) {
            var n = "fixed" == a.css("position") ? a.position() : a.offset();
            i.css({ top: n.top + parseInt(a.css("border-top-width"), 10), left: n.left + parseInt(a.css("border-left-width"), 10), width: a.innerWidth(), height: a.innerHeight() });
        }
        t ? e(window) : a;
    }
    var n = {
        color: "rgba(255, 255, 255, 0.8)",
        custom: "",
        fade: !0,
        fontawesome: "",
        image: "http://srichaitanyaschool.net/assets/images/loader.gif",
        imagePosition: "center center",
        maxSize: "100px",
        minSize: "20px",
        resizeInterval: 50,
        size: "50%",
        zIndex: 9999,
    };
    (e.LoadingOverlaySetup = function (a) {
        e.extend(!0, n, a);
    }),
        (e.LoadingOverlay = function (a, t) {
            switch (a.toLowerCase()) {
                case "show":
                    var d = e.extend(!0, {}, n, t);
                    i("body", d);
                    break;
                case "hide":
                    o("body", t);
            }
        }),
        (e.fn.LoadingOverlay = function (a, t) {
            switch (a.toLowerCase()) {
                case "show":
                    var d = e.extend(!0, {}, n, t);
                    return this.each(function () {
                        i(this, d);
                    });
                case "hide":
                    return this.each(function () {
                        o(this, t);
                    });
            }
        });
})(jQuery);
