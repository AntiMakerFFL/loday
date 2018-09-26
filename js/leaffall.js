!function() {
    var e = document.createElement("style");
    e.type = "text/css",
    e.appendChild(document.createTextNode(".leaf{position:absolute;top:-200px;left:0;width:5%;}.leafOnTop>.leaf{z-index:1998;}.leafControl{position:absolute;z-index:1999;left:10px;bottom:5px;width:20px;height:20px;font:700 18px monospace;text-align:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.maffia .leafControl{color:#fff;}")),
    document.head.appendChild(e);
    for (var o = [], r = [], d = [], i = [], l = [], c = [], f = !1, s = 50, m = 0, a = !1, t = 0; t < 6; t++)
        (new Image).src = o[t] = "/images/holidays/leaffall/" + (t + 1) + ".gif";
    function n() {
        if (a) {
            var e = m
              , t = Math.floor(Math.random() * o.length)
              , n = document.createElement("img");
            n.id = "leaf" + e,
            n.src = o[t],
            n.className = "leaf",
            document.body.appendChild(n),
            r[e] = Math.round(Math.random() * window.innerHeight),
            d[e] = Math.round(Math.random() * window.innerWidth),
            i[e] = 5 * Math.random() + 3,
            c[e] = 0,
            l[e] = .1 * Math.random() + .05,
            m++
        }
    }
    function u() {
        a = !0;
        for (var e = 0; e < 30; e++)
            n();
        s = 50,
        h()
    }
    function h() {
        for (var e = window.innerHeight, t = window.innerWidth, n = document.body.scrollTop, o = 0; o < m; o++) {
            r[o] += i[o] * Math.sin(90 * Math.PI / 180),
            d[o] += i[o] * Math.cos(c[o]),
            r[o] > e && (r[o] = -60,
            d[o] = Math.round(Math.random() * t),
            i[o] = 5 * Math.random() + 3);
            var a = document.getElementById("leaf" + o);
            a.style.left = Math.min(t, d[o]) + "px",
            a.style.top = r[o] + n + "px",
            c[o] += l[o]
        }
        f = setTimeout(h, s)
    }
    function p() {
        if (a && m) {
            var e = --m
              , t = document.getElementById("leaf" + e);
            t.parentNode.removeChild(t),
            delete r[e],
            delete d[e],
            delete i[e],
            delete c[e],
            delete l[e]
        }
    }
    function v() {
        a ? (clearTimeout(f),
        [].forEach.call(document.querySelectorAll(".leaf"), p),
        a = !1,
        y.innerHTML = "o") : (u(),
        y.innerHTML = "x")
    }
    function M() {
        document.body.classList.toggle("leafOnTop"),
        w.innerHTML = "^" === w.innerHTML ? "v" : "^"
    }
    function x(e, t, n) {
        var o = document.createTextNode(e)
          , a = document.createElement("span");
        if (a.appendChild(o),
        a.className = "leafControl",
        t)
            for (var r in t)
                t.hasOwnProperty(r) && (a.style[r] = t[r] + "px");
        if (document.body.appendChild(a),
        !n)
            return a;
        a.addEventListener("mousedown", function() {
            a.timer = window.setInterval(n, 100)
        }, !1),
        a.addEventListener("mouseup", function() {
            clearInterval(a.timer)
        }, !1)
    }
    u(),
    x("<", {
        bottom: 55
    }, p),
    x(">", {
        left: 35,
        bottom: 55
    }, n),
    x("≪", {
        bottom: 30
    }, function() {
        s < 1e3 && s++
    }),
    x("≫", {
        left: 35,
        bottom: 30
    }, function() {
        0 < s && s--
    });
    var w = x("^", {})
      , y = x("x", {
        left: 35
    });
    w.addEventListener("click", M, !1),
    w.addEventListener("touchstart", M, !1),
    y.addEventListener("click", v, !1),
    y.addEventListener("touchstart", v, !1)
}();
