var domain = document.location.hostname
  , html = $("html")
  , b = $("body")
  , container = $("#container")
  , charDiv = $("#char")
  , regButton = $("#start")
  , header = $("header")
  , gamemoney = $("#gamemoney")
  , playersList = $("#players")
  , lists = $("#lists")
  , aside = $("aside")
  , messagesList = $("#messages")
  , mymessagesList = $("#mymessages")
  , allMessagesList = $(".messages")
  , mainDiv = $("#main")
  , gamesList = mainDiv.find("ul")
  , gametitle = $("#gametitle")
  , leftPanel = $("#left-panel")
  , wallpaper = $("#wallpaper")
  , win = $(".window")
  , winInfo = win.find(".info")
  , tp = $("#tooltip")
  , ptp = $("#playerInfo")
  , gameptp = $("#playerGameInfo")
  , wW = $(".warningWindow")
  , mW = $("#modalWindow")
  , oW = $("#optionsWindow")
  , actionButton = $("#playersButton")
  , inputField = $("#input")
  , privateCheck = $("#privat")
  , shop = $(".shop")
  , collectionWin = $(".collect")
  , outside = $("#outside")
  , submenu = $("#submenu")
  , onlineCounter = $("#online-counter")
  , lotteryDiv = $("#lottery").find("div")
  , lotteryWin = $(".lottery")
  , roulette = $("#roulette")
  , curatorWindow = $("#curatorWindow")
  , items = {
    s1: 1,
    g1: 1,
    s2: 1,
    g2: 2,
    s4: 3,
    g4: 6,
    s5: 1,
    g5: 1
}
  , gameStyle = {
    0: "Простая игра",
    1: "Игра без ботов",
    2: "Закрытая игра",
    3: "Игра против ботов",
    4: "Битва полов"
}
  , gameTypes = {
    1: "Сокращенная партия",
    2: "Обычная партия",
    3: "Расширенная партия",
    4: "Сокращенная партия (с маньяком)",
    13: "VIP-игра"
}
  , roleSmiles = ["", "stud", "poh", "glava", "dej", "pom", "rev", "lun", "cat", "adv"]
  , mafroleSmiles = ["", "gr", "maf", "boss", "kom", "ped", "man", "doc", "cat", "adv"]
  , room = 1
  , roomInHall = 1
  , zastavka = !1
  , mapAreas = !1
  , lastNews = 0
  , u = {}
  , gamesInfoArray = {}
  , playersInfoArray = {}
  , testMode = !1
  , lastMsg = ""
  , closedgame = !1
  , quizEnable = !0
  , fireworkEnable = !0
  , noconvert = !1
  , invitesToGame = !0
  , colNum = 1
  , sortType = 1
  , logs = [];
window.onerror = function(e, a, o, t, i) {
    return logs.push("ERR:" + i.stack + " URL:" + a + " L:" + o),
    console.error(i),
    sendToSocket({
        type: "error",
        data: {
            error: {
                text: e + "\n" + i.stack,
                url: a,
                line: o + "x" + t
            },
            browser: navigator.userAgent,
            page: document.location.href
        }
    }),
    !0
}
,
window.global_options || (window.global_options = {});
var mobile = global_options.mobile
  , isAppVK = global_options.isAppVK
  , mafApp = global_options.mafApp
  , server2 = global_options.server2
  , authDiv = global_options.authDiv
  , islocalStorage = function() {
    var e = "test";
    try {
        return localStorage.setItem(e, e),
        localStorage.removeItem(e),
        !0
    } catch (e) {
        return !1
    }
}()
  , lStorage = {
    setItem: function(e, a) {
        islocalStorage && (localStorage.setItem(e, a),
        this[e] = a)
    },
    getItem: function(e) {
        return !!islocalStorage && localStorage.getItem(e)
    },
    removeItem: function(e) {
        islocalStorage && localStorage.removeItem(e)
    }
}
  , reds = islocalStorage && localStorage.reds ? localStorage.reds.split(",") : []
  , smileBlock = $("#smiles")
  , smilesArr = ["mm", "sweat", "toivo", "wave", "evilgrin", "happy", "inlove", "S", "flex", "tmi", "smirk", "headbang", "bug", "chukle", "drink", "angel", "yawn", "star", "good", "h", "u", "handshake", "talk", "makeup", "bow", "nod", "blush", "dance", "rofl", "bandit", "angry", "puke", "heidy", "doh", "X", "fubar", "call", "emo", "drunk", "swear", "beer", "rain", "cash", "y", "kiss", "speechless", "phone", "cry", "sun", "rock", "bad", "music", "hug", "cake", "O", "mig", "whew", "sleep", "pizza", "clap", "P", "think", "movie", "n", "flower", "envy", "D", "punch", "shake", "coffee", "finger", "devil", "poolparty", "cool", "ninja", "wait", "smoking", "mooning", "time", "wasntme", "party", "facepalm", "laughcry", "dull", "wondering"]
  , textSmiles = {
    good: ":)",
    D: ":D",
    bad: ":(",
    cool: "8-)",
    O: ":O",
    mig: ";)",
    kiss: ":*",
    P: ":P",
    X: ":x"
}
  , hallTitles = ["", "Страну грёз", "Город любви", "Апельсиновый рай", "Солнечную аллею", "Парк друзей", "Обитель мрака"]
  , scrollCheck = $("#scrolling")
  , messagesDOM = document.getElementById("messages")
  , mymessagesDOM = document.getElementById("mymessages");
function doScroll() {
    scrollCheck.is(":checked") || (messagesDOM.scrollTop = messagesDOM.scrollHeight,
    mymessagesDOM.scrollTop = mymessagesDOM.scrollHeight)
}
function checkMarried(e, a) {
    !0 === e.married ? a.addClass("married") : (a.removeClass("married"),
    e.married && (e.cups || (e.cups = {}),
    e.cups["wed" + e.married.replace("-", "") + "-png"] = "women-item" === e.married ? "Завидная невеста" : "Завидный жених"))
}
var prices = {
    i1: 2e3,
    ir1: 1,
    i2: 3e3,
    ir2: 5,
    i3: 3e4,
    ir3: 150,
    i4: 1e3,
    ir4: 3,
    i5: 5e3,
    ir5: 10,
    i6: 3e5,
    ir6: 1e3
}
  , itemsArray = {
    7: "Сертификат на бесплатное объявление",
    8: "Элемент Коллекции Активист",
    9: "Элемент Клубной Коллекции",
    10: "Новогодняя игрушка",
    11: "VIP-абонемент на 1 день",
    12: "Сертификат на бесплатную суперигру",
    13: "Билет на Барабан чудес",
    14: "Кошелек с монетами (16 000)",
    15: "Купон на заказ праздничного салюта (не чаще 1 раза в 20 секунд)",
    16: "Сертификат на быструю суперигру",
    17: "Элемент Новогодней Коллекции 2017",
    18: "Снежинка",
    19: "Сертификат на создание СуперМикса",
    20: "Скидочная карта -50% на покупки в игровой партии",
    21: "Шубка деда мороза (+20% к бессмертию)",
    22: {
        ffl: "Морковка снеговика (+25% к шансу стать ревнивым студентом)",
        maffia: "Морковка снеговика (+25% к шансу стать маньяком)"
    },
    23: "Шапка снегурочки (+40% к интуиции)",
    24: "Для активации отправьте кому-то в личном сообщении слово &quot;бах&quot;",
    2018: "Элемент Новогодней Коллекции 2018",
    25: "Мафкойны - самая ценная валюта в игре",
    26: "Молот Тора (для коллекции Суперсила)"
}
  , noactiveItems = ["7", "12", "13", "18", "24", "25", "26"];
function getItemsArray(e) {
    return "object" == typeof itemsArray[e] ? isMaffia ? itemsArray[e].maffia : itemsArray[e].ffl : itemsArray[e]
}
var specGamesTime = {
    "17:00": {
        name: "Супермикс",
        link: "http://maffia-online.ru/games/supermix.html"
    },
    "19:00": {
        name: "Сотня",
        link: "http://maffia-online.ru/games/sotnya.html"
    },
    "20:00": {
        name: "Супермикс",
        link: "http://maffia-online.ru/games/supermix.html"
    },
    "20:30": {
        name: "Интуиция",
        link: "http://maffia-online.ru/games/intuition.html"
    },
    "21:00": {
        name: "Камикадзе",
        link: "http://maffia-online.ru/games/kamikadze.html"
    },
    "21:30": {
        name: "Битва полов",
        link: "http://maffia-online.ru/games/bitva-polov.html"
    },
    "22:00": {
        name: "Последний герой",
        link: "http://maffia-online.ru/games/poslednij-geroj.html"
    },
    "22:30": {
        name: "Перестрелка"
    },
    "00:05": {
        name: "Классическая мафия (каждый час)"
    }
};
function authorizeDone(i) {
    i.pingtime && 1e4 < i.pingtime && setInterval(function() {
        sendToSocket({
            type: "ping"
        })
    }, i.pingtime),
    date.diff = i.datenow - Date.now(),
    b.removeClass("unauthorized"),
    charDiv.removeClass("charEdit"),
    wallpaper.on("click", wallhide),
    u = i.user,
    u.items || (u.items = {}),
    u.rating < 4 && $("#roll-start").hide(),
    updateInterface(),
    room = i.room,
    f.onlineCount(i.onlineCount),
    i.statistics && showStatistics(i.statistics),
    showPlayersList(i.online, i.room),
    showGamesList(i.games),
    i.greens && showGreenList(i.greens),
    showTopLists(i),
    i.stip && "no" !== i.stip && showConvert(function() {
        var t = "Вам начислена " + (isMaffia ? "зарплата" : "стипендия") + ' в размере <span class="gamemoney">' + f.over1000(i.stip) + "</span>";
        if (u.vip) {
            var e = Math.ceil((u.vip - date.now()) / 864e5);
            0 < e && (t += '<br/><b class="red">Ещё ' + f.someThing(e, "день", "дня", "дней") + " VIP-статуса</b>")
        }
        showCash(t)
    }),
    setStatus();
    var a = !1;
    if (i.birthdays) {
        var t = '<div class="birthdays"> Сегодня отмечают свой день рождения следующие игроки: <ul> ';
        t = i.birthdays.reduce(function(t, e) {
            return e._id === u._id && (a = !0),
            t + '<li><strong data-id="' + e._id + '">' + e.login + "</strong></li>"
        }, t) + " </ul> <blockquote>Не забудьте поздравить!</blockquote></div>",
        showNewDiv(t)
    }
    if (u.dj && $('<script type="text/javascript" src="/js/dj.js"><\/script>').appendTo(b),
    (u.moder || u.moder2 && server2) && ($('<script type="text/javascript" src="/js/moder.js?220918"><\/script>').appendTo(b),
    i.statistics && i.statistics.valentin && b.append("<style>.ad-valentin{display:block !important}</style>")),
    shareMaffia(),
    i.regplayers) {
        var e = '<div class="news">Последние 10 новичков: '
          , s = ""
          , o = 0
          , n = 0;
        i.regplayers.forEach(function(t) {
            n = new Date(t.date).getDate(),
            o !== n ? (o = n,
            s += "<br/> " + date.rusDate(t.date, !1, "short") + ": ") : s += ", ",
            s += '<strong data-id="' + t._id + '">' + t.login + "</strong>"
        }),
        showNewDiv(e += s + "</div>")
    }
    if (i.was && showNewDiv('<div class="wastoday">Сегодня были в игре (' + i.was.length + '):<input type="checkbox" class="spoiler" id="showwasingame"/><label for="showwasingame"></label><div>' + i.was.map(function(t) {
        return '<strong data-id="' + t._id + '">' + t.login + "</strong>"
    }).join(", ") + "</div></div>"),
    a && showNewDiv('<div class="birthdays mybirthday">Администрация игры поздравляет Вас с днём рождения и желает, чтобы в жизни было как можно больше приятных минут! <blockquote><span class="imageLoader" data-title="Посмотреть открытку" onclick="showWall(\'card.gif\',{nohide:true})"></span></blockquote></div>'),
    !u.lottery || u.lottery < i.datenow ? lotteryDiv.find("button").fadeIn() : lotteryTimerStart(),
    u.slottime) {
        var r = u.slottime + 1e3 * slotInterval - date.now();
        0 < r && slotTimerStart(Math.round(r / 1e3))
    }
    u.rolldate && date.isToday(u.rolldate) && $("#roll-start").addClass("rolling-was"),
    helper.hideLocation(),
    u.rating < 100 && "0" !== lStorage.getItem("hints") && (hintsCheckBox.prop("checked", !0),
    hintsNeed = !0),
    !mobile && !isAppVK && 1200 < b.outerWidth() && gameWidth.prepend('<option value="default">оптимально</option>'),
    u.rating < 10 && helper.start(),
    (hintsNeed || u.curator) && curatorWindow.addClass("hide").show(),
    isAppVK || mobile || $.cachedScript("//vk.com/js/api/openapi.js?147").done(showGroupWidget),
    f.radioIframe()
}
function showStatistics(t) {
    var e = this
      , i = t.params;
    if (i) {
        if (i.banner && (showWall(i.banner, {
            external: !0
        }),
        zastavka = i.banner),
        i.bestplayer && !server2 && showNewDiv('<div class="alarm">Лучший игрок месяца - <strong data-id="' + i.bestplayer._id + '">' + i.bestplayer.login + "</strong></div>"),
        i.maxonline && onlineCounter.after('<div id="maxonline">' + i.maxonline.count + " (" + date.showDate(i.maxonline.time) + ")</div>"),
        i.support) {
            $("<div></div>", {
                class: "supportButton"
            }).html("Конкурс к Новому году").on("click", function() {
                return showWindow("support")
            }).insertBefore("#lottery");
            var a = winInfo.find(".support");
            a.find("button").on("click", function() {
                sendToSocket({
                    type: "support",
                    text: a.find("textarea").val().substring(0, 1e3)
                }),
                closewindow()
            })
        }
        if (i.gifts) {
            var s = $("<div></div>", {
                class: "buyGifts"
            }).html('<div><figure><img class="box1" src="/images/lots/box1.png" alt="Малый подарок"/><figcaption data-type="1">7 снежинок</figcaption></figure><figure><img class="box2" src="/images/lots/box2.png" alt="Средний подарок"/><figcaption data-type="2">18 снежинок</figcaption></figure><figure><img class="box3" src="/images/lots/box3.png" alt="Большой подарок"/><figcaption data-type="3">33 снежинки</figcaption></figure></div>');
            winInfo.append(s),
            $("<div></div>", {
                class: "buyGiftsButton"
            }).html("Новогодняя Распродажа").on("click", function() {
                return showWindow("buyGifts")
            }).insertBefore("#lottery"),
            s.find("figcaption").on("click", function() {
                return sendToSocket({
                    type: "buyGifts",
                    box: $(e).attr("data-type")
                })
            })
        }
        if (i.vkpoll && i.vkpoll.title && i.vkpoll.code && "undefined" != typeof VK && (messagesList.append('<div class="news"><em>' + i.vkpoll.title + '</em> <input type="checkbox" class="spoiler" id="showvkpoll"/><label for="showvkpoll"></label><div id="vk_poll" style="overflow:hidden"></div></div>'),
        VK.Widgets.Poll("vk_poll", {}, i.vkpoll.code)),
        date.isToday("14.2.2018")) {
            $("<div></div>", {
                class: "supportButton"
            }).css({
                width: "200px",
                height: "102px",
                background: "url(/images/holidays/f14send.png) center no-repeat",
                margin: 0,
                border: 0,
                "box-shadow": "none"
            }).attr("title", "Сделать анонимное признание...").on("click", function() {
                return showWindow("f14Win")
            }).insertBefore("#lottery");
            var o = $("<div></div>", {
                class: "f14Win"
            }).html('<p>Только 14 февраля у Вас есть уникальная возможность анонимно признаться кому-то в любви или просто поздравитьс Днем всех влюбленных!</p><textarea placeholder="Я люблю..." maxlength="1000"></textarea><button class="button">Отправить</button>').appendTo(winInfo);
            o.find("button").on("click", function() {
                var t = o.find("textarea");
                sendToSocket({
                    type: "f14msg",
                    text: t.val().substring(0, 1e3)
                }),
                t.val(""),
                closewindow()
            }),
            $.cachedScript("/js/hearts.js").done(function() {
                window.fall && !b.hasClass("noeffect") && fall()
            })
        }
        var n = $("<div></div>", {
            class: "newsWin"
        }).appendTo(winInfo);
        Object.keys(i.news).length ? Object.forEach(i.news, showNews) : n.prepend('<div class="news" data-newsid="0">На данный час нет новостей.</div>'),
        lastNews = Math.max.apply(Math, [0].concat(Object.keys(i.news))),
        $("<div></div>", {
            class: "newsButton"
        }).html("Новости").on("click", function() {
            return showWindow("newsWin")
        }).insertBefore(onlineCounter),
        newsCounter()
    }
    t.clans && (clan.saveAll(t.clans),
    windowTable("clanlist", t.clans));
    var r = function(t, e, i) {
        var a = $("<div></div>").addClass("percent")
          , s = $("<div></div>")
          , o = t + e
          , n = Math.round(100 * t / o)
          , r = Math.round(100 * e / o);
        return $("<em></em>").html(i).appendTo(a),
        $("<span></span>").html(t).css("width", n + "%").appendTo(s),
        $("<span></span>").html(e).css("width", r + "%").appendTo(s),
        s.appendTo(a),
        a
    }
      , l = t["game-bot"]
      , d = t["game-all"];
    statDiv.append("<div>Cтатистика игровых партий: " + f.over1000(d.count) + "</div><hr/>"),
    r(l.pl, l.bot, "Победы в Противостоянии: Игроки - Боты").appendTo(statDiv),
    r(d.win.stud, d.win.poh, "Победы игровых сторон: " + (isMaffia ? "Мирные граждане - Мафия" : "Студенты - Похитители")).appendTo(statDiv),
    t.map && (mapAreas = t.map.areas),
    t.roulette && rouletteInfo(t.roulette),
    t.tree && !0 === t.tree && !server2 && sendToSocket({
        type: "tree"
    })
}
var charObj = {
    sex: 2,
    image: 1,
    about: ""
}
  , imageChar = $("#imageChar");
function editProfileSize() {
    var a = .685
      , e = b.outerWidth()
      , r = b.outerHeight();
    if (r / e < a) {
        var i = Math.round((e - r / a) / 2);
        charDiv.css({
            top: 0,
            bottom: 0,
            left: i,
            right: i
        })
    } else {
        var c = Math.round((r - e * a) / 2);
        charDiv.css({
            top: c,
            bottom: c,
            left: 0,
            right: 0
        })
    }
}
function editProfile(a) {
    a ? (editProfileSize(),
    1 === u.sex ? $("#sex2").prop("checked", !0) : $("#sex1").prop("checked", !0),
    charObj.sex = u.sex,
    charObj.image = u.image,
    charObj.about = u.about,
    u.charNum ? Object.update(u.chars[u.charNum - 1], charObj) : u.mainChar && Object.update(u.mainChar, charObj),
    charObj.changeChar(),
    "addChar" === a ? (charDiv.addClass("addChar"),
    $("#charAbout").val("")) : $("#charAbout").val(u.about),
    charDiv.addClass("charEdit")) : charDiv.removeClass(),
    closewindow()
}
charDiv.find('input[type="radio"]').change(function() {
    charObj.sex = parseInt($(this).val()),
    charObj.changeChar()
}),
imageChar.find("span").on("click", function() {
    (!charObj.image || 2 < charObj.image.length) && (charObj.image = 0),
    charObj.image += "nextChar" === $(this).attr("id") ? 1 : -1,
    charObj.image < 1 && (charObj.image = 24),
    24 < charObj.image && (charObj.image = 1),
    charObj.changeChar()
}),
charObj.changeChar = function() {
    if (2 < charObj.image.length)
        imageChar.css({
            background: "url(/files/" + u._id + u.image + ") center center no-repeat",
            "background-size": "contain"
        });
    else {
        imageChar.removeAttr("style");
        var a = 1
          , e = 1 === charObj.sex ? -1 : -4;
        if (8 < charObj.image) {
            var r = Math.floor((charObj.image - 1) / 8);
            e -= r,
            a -= charObj.image - 8 * r
        } else
            a -= charObj.image;
        imageChar.css("background-position", (a ? 200 * a + "px " : "0 ") + 260 * e + "px")
    }
}
,
regButton.on("click", function() {
    var a = $("#login").val().trim()
      , e = $("#charAbout").val().trim()
      , r = {}
      , i = !0
      , c = !0;
    if (charDiv.hasClass("addChar")) {
        if (a.length < 4)
            return void showMessage("Минимальная длина НикНейма 4 символа");
        r = {
            type: "char",
            action: "create",
            login: a,
            sex: charObj.sex,
            image: charObj.image,
            about: e
        }
    } else if (u.login) {
        var t = !1;
        if (u.sex !== charObj.sex && (u.sex = charObj.sex,
        playersInfoArray[u._id] && (playersInfoArray[u._id].sex = charObj.sex),
        r.sex = charObj.sex,
        t = !0),
        u.image !== charObj.image && (u.image = charObj.image,
        playersInfoArray[u._id] && (playersInfoArray[u._id].image = charObj.image),
        r.image = charObj.image,
        t = !0),
        u.about !== e && (u.about = e,
        playersInfoArray[u._id] && (playersInfoArray[u._id].about = e),
        r.about = e,
        t = !0),
        !t)
            return c = !1,
            void alarm("Профиль не был изменен.");
        updateInterface(),
        r.type = "edit"
    } else {
        if (a.length < 4)
            return void showMessage("Минимальная длина НикНейма 4 символа");
        r = {
            type: "authorize",
            login: a,
            sex: charObj.sex,
            image: charObj.image,
            about: e
        };
        var h = getCookie("invite")
          , n = getCookie("invite-vk");
        void 0 !== h && 24 === h.length && (r.invite = h),
        n && (r["invite-vk"] = n),
        regButton.prop("disabled", !0),
        i = !1
    }
    c && sendToSocket(r),
    i && editProfile(!1)
}),
$("#cancel").on("click", function() {
    editProfile(!1)
}),
$("#datablank").on("click", function() {
    editProfile(!1),
    showBlank()
}),
$("#selectChar").on("click", function() {
    editProfile(!1),
    showSelectChar()
});
var selectCharDiv = $(".selectChar");
function showCharImage(a) {
    return "<span " + (2 < a.image.length ? 'style="background:url(/files/' + u._id + a.image + ") center center no-repeat;background-size:contain;" : 'class="i' + (1 === a.sex ? "w" : "m") + a.image) + '"></span>'
}
function showSelectChar() {
    var i = "";
    u.mainChar ? (i += '<input type="radio" name="selectedChar" id="selectedChar0" value="0"',
    u.charNum || (i += ' checked="checked"'),
    i += '/><label for="selectedChar0">' + showCharImage(u.mainChar) + u.mainChar.login + "</label>") : i += '<input type="radio" name="selectedChar" id="selectedChar0" value="0" checked="checked"/><label for="selectedChar0"><span class="i' + (1 === u.sex ? "w" : "m") + u.image + '"></span>' + u.login + "</label>",
    u.chars && u.chars.forEach(function(a, e) {
        var r = e + 1;
        i += '<input type="radio" name="selectedChar" id="selectedChar' + r + '" value="' + r + '"',
        u.charNum && u.charNum === r && (i += ' checked="checked"'),
        i += '/><label for="selectedChar' + r + '">' + showCharImage(a) + a.login + "</label>"
    }),
    selectCharDiv.find("div").html(i),
    selectCharDiv.find("input").change(function() {
        u.charNum = parseInt($(this).val()),
        sendToSocket({
            type: "char",
            action: "select",
            char: u.charNum
        })
    }),
    showWindow("selectChar")
}
$("#char-back").on("click", function() {
    editProfile(!0),
    closewindow()
}),
$("#char-create").on("click", function() {
    u.club || u.vip ? !u.vip && u.chars && 0 < u.chars.length ? showMessage("Для создания более 1 дополнительного персонажа нужно иметь VIP аккаунт") : u.chars && 4 < u.chars.length ? showMessage("Нельзя создать больше 5 дополнительных аккаунтов") : editProfile("addChar") : showMessage("Для создания дополнительных персонажей нужно состоять в клубе или иметь VIP аккаунт")
}),
$("#char-delete").on("click", function() {
    var a = selectCharDiv.find("input[name=selectedChar]:checked").val();
    "0" !== a ? a && u.chars[a - 1] && modalWindow("Вы действительно хотите удалить персонажа " + u.chars[a - 1].login + "?", function() {
        u.chars.splice(a - 1, 1),
        sendToSocket({
            type: "char",
            action: "delete",
            char: a
        }),
        closewindow()
    }) : showMessage("Нельзя удалить основной персонаж. Для смены ника воспользуйтесь разделом VIP")
});
var blankForm = $(".blank");
function showBlank() {
    u.blank && Object.forEach(u.blank, function(a, e) {
        a && $("#blank" + e).val(a)
    }),
    showWindow("blank")
}
blankForm.find("button").on("click", function() {
    var e = {};
    blankForm.find("input").each(function(a) {
        1 === a && date.isWrongDate($(this).val()) && $(this).val(""),
        e[a] = $(this).val()
    }),
    sendToSocket({
        type: "anketa",
        data: e
    }),
    closewindow()
});
var clan = {
    clanView: {
        id: !1,
        info: !1
    },
    all: {}
};
function clanProfile(n) {
    var a = n.attr("data-id");
    0 < a && (clan.clanView.id = a,
    sendToSocket({
        type: "clan",
        action: "info",
        id: clan.clanView.id
    }))
}
function joinToClan() {
    clan.clanView.id && modalWindow("Хотите подать заявку на вступление в клан " + clan.clanView.info.name + "?", function() {
        sendToSocket({
            type: "clan",
            action: "join",
            id: clan.clanView.id
        })
    })
}
function acceptToClan(n) {
    var a = "no" !== n.attr("data-param");
    modalWindow((a ? "Принять игрока" : "Отказать игроку во вступлении") + " в клан?", function() {
        sendToSocket({
            type: "clan",
            action: "accept",
            uid: n.attr("data-uid"),
            take: a
        })
    })
}
function leaveClan() {
    u.clan && modalWindow("Уверены, что хотите выйти из клана?", function() {
        sendToSocket({
            type: "clan",
            action: "exit"
        })
    })
}
function isMafcoins(n) {
    return !(!u.items[25] || u.items[25] < n) || (f.notEnough({
        action: "item25"
    }),
    !1)
}
clan.saveAll = function(n) {
    clan.all = {},
    n.forEach(function(n) {
        clan.all[n.id] = n
    })
}
,
clan.getIcon = function(n) {
    var a = clan.all[n].icon;
    return "url(/images/clans/" + (1 === a ? "standart/icon" + (isMaffia ? "2" : "1") + ".png" : n + "/icon.png?" + a) + ")"
}
,
clan.openWindow = function(n) {
    var a = "clan" === n
      , t = a ? clan.myclan : clan.clanView.info;
    if (t) {
        var l = winInfo.find("." + n)
          , i = l.find(".clan-members");
        l.css("backgroundImage", "url(/images/clans/" + (1 === t.logo ? "standart/logo" + (isMaffia ? "2" : "1") + ".png" : t.id + "/logo.jpg?" + t.logo) + ")"),
        l.find(".clan-name").html(t.name),
        l.find(".clan-slogan").html(t.slogan),
        l.find(".clan-info").html((a ? "" : "<mark>Клан создан: " + date.rusDate(t.date) + "</mark>") + t.info),
        i.empty(),
        Object.forEach(t.members, function(n, a) {
            a === t.leader ? l.find(".clan-leader").html('<strong data-id="' + a + '">' + n + "</strong>") : $("<strong></strong>", {
                "data-id": a
            }).html(n).appendTo(i)
        }),
        a ? (t.wishes && (i.append("<hr/><p>Кандидаты в клан:</p>"),
        Object.forEach(t.wishes, function(n, a) {
            $("<strong></strong>", {
                "data-id": a
            }).html(n).appendTo(i),
            $("<span></span>", {
                "data-action": "acceptToClan",
                "data-uid": a
            }).html("Принять в клан").appendTo(i),
            $("<span></span>", {
                "data-action": "acceptToClan",
                "data-uid": a,
                "data-param": "no"
            }).html("Отказать").appendTo(i)
        })),
        u.clan ? l.find("button").show() : l.find("button").hide()) : u.clan ? l.find("button").hide() : l.find("button").show()
    }
}
,
clan.showWindow = function(n) {
    if (!n) {
        if (u.clan)
            return void sendToSocket({
                type: "clan",
                action: "my"
            });
        n = {}
    }
    n.info ? n.my ? (clan.myclan = n.info,
    clan.myclan.leader === u._id && $(".clan", winInfo).find(".clan-slogan,.clan-info").on("dblclick touchmove", function() {
        $(this).attr("contentEditable", !0)
    }).on("blur", function() {
        $(this).attr("contentEditable", !1);
        var n, a = $(this).attr("class").replace("clan-", ""), t = $(this).text();
        clan.myclan.hasOwnProperty(a) && t !== clan.myclan[a] && (clan.myclan[a] = t,
        sendToSocket(((n = {
            type: "clan",
            action: "edit"
        })[a] = t,
        n)))
    }),
    showWindow("clan")) : (clan.clanView.info = n.info,
    showWindow("clan-window")) : ($("#clan-create").css({
        display: u.clan ? "none" : "block"
    }),
    showWindow("clanlist"))
}
,
clan.createForm = function() {
    winInfo.find(".clanlist").append('<div id="clan-create">\n\t\t<blockquote>Стоимость создания своего клана - <span class="goldmoney">500 мафкойнов</span>.</blockquote>\n\t\t<div>Администрация оставляет за собой право: <ol>\n\t\t\t<li>изменять информацию о клане (текстовую или графическую), если она несет оскорбление в адрес кого-либо</li>\n\t\t\t<li>применять штрафные санкции к клану или его членам в случае использования нечестных приемов развития клана (вплоть до обнуления или удаления)</li>\n\t\t\t<li>дополнять или ограничивать функциональность клановой локации в игре</li>\n\t\t</ol></div>\n\t\t<label>Название клана <input type="text" maxlength="25" placeholder="Обязательно для заполнения"/></label>\n\t\t<label>Девиз клана <input type="text" maxlength="50" placeholder="Мы круче всех, наверное..."/></label>\n\t\t<label>Информация о клане <textarea maxlength="500" placeholder="Например, условия приема в клан"></textarea></label>\n\t\t<input type="button" id="clan-create-button" value="Создать клан"/>\n\t</div>'),
    $("#clan-create-button").on("click", clan.create)
}
,
clan.create = function() {
    var n = $("#clan-create")
      , a = n.find('input[type="text"]')
      , t = n.find("textarea")
      , l = a.eq(0).val();
    l ? sendToSocket({
        type: "clan",
        action: "new",
        name: l,
        slogan: a.eq(1).val() || "",
        info: t.val() || ""
    }) : showMessage("У клана обязательно должно быть название!")
}
,
clan.loadingPicture = function(n, a) {
    var t = a[0]
      , l = a[1];
    return createFotoLoading(n, "/upload?clan=" + t, "Не удалось установить " + l + " клана")
}
,
winInfo.find(".clan").append('<div id="clan-files">\n\t<div class="goldmoney">\n\t\t<input type="file" accept="image/jpeg" id="clan-logo-file"/>\n\t\t<span>Изменить логотип клана</span><label class="button" for="clan-logo-file">5 мафкойнов</label>\n\t\t<sup>(квадратное изображение 200х200 в формате jpg)</sup>\n\t</div>\n\t<div class="goldmoney">\n\t\t<input type="file" accept="image/png" id="clan-icon-file"/>\n\t\t<span>Изменить значок клана </span><label class="button" for="clan-icon-file">5 мафкойнов</label><br/>\n\t\t<sup>(квадратное изображение 20х20 в формате png)</sup>\n\t</div>\n</div>'),
$("#clan-files").on("click", "input", function() {
    return isMafcoins(5)
}).on("change", "input", function() {
    var l = $(this).attr("id")
      , n = $("#" + l)[0];
    if (isMafcoins(5))
        if (n.files && n.files[0]) {
            var i = n.files[0];
            307200 < i.size ? showMessage("Размер файла превышает 300 КБ") : previewLoadPicture(this, function(n) {
                var a = "clan-logo-file" === l ? ["logo", "логотип"] : ["icon", "значок"]
                  , t = "clan-logo-file" === l ? "0" : "";
                modalWindow("Уверены, что хотите установить такой " + a[1] + ' для клана?<br/><img class="preloadFileImage" src="' + n + '" style="display:block;width:20' + t + "px;height:20" + t + 'px;margin:0 auto;"/>', function() {
                    return clan.loadingPicture(i, a)
                })
            })
        } else
            showMessage("Не выбран файл для загрузки")
});
function currentDomainUrl() {
    return document.location.protocol + "//" + domain
}
function serverPort(e) {
    var t = e ? currentDomainUrl() + ":" : "";
    return t += "https:" === document.location.protocol ? "808" + ("maffia-online.ru" === domain ? "2" : "1") : "8080"
}
function insertToInput(e) {
    inputField.val(inputField.val() + " [" + e + "]"),
    $("#showSmiles").prop("checked", !1),
    inputField.focus()
}
function createCookie(e, t, a) {
    var n;
    if (a) {
        var s = new Date;
        s.setTime(s.getTime() + 24 * a * 60 * 60 * 1e3),
        n = "; expires=" + s.toGMTString()
    } else
        n = "";
    document.cookie = e + "=" + t + n + "; path=/"
}
function getCookie(e) {
    var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return t ? decodeURIComponent(t[1]) : void 0
}
var socketTry = 0
  , lastSocketMsg = 0
  , socketStack = [];
function checkSocketStack() {
    var e = socketStack[0];
    if (e) {
        if (socketTry++,
        1 === ws.readyState && lastSocketMsg + 100 < Date.now()) {
            lastSocketMsg = Date.now();
            try {
                ws.send(JSON.stringify(e))
            } catch (e) {
                showNewMessage({
                    message: "Ошибка: сбой инициализации сокета. Не удалось соединиться с сервером.",
                    color: "#ff0000"
                })
            }
        }
        2 < socketTry && allMessagesList.addClass("offline"),
        setTimeout(checkSocketStack, 1e3 * socketTry)
    }
}
function sendToSocket(e) {
    e.timestamp = Date.now(),
    socketStack.push(e),
    1 === socketStack.length && checkSocketStack()
}
function changeNumberHtml(e, t, a) {
    var n = $("#" + e)
      , s = a ? t : parseInt(n.html()) + t;
    n.html(s.toString())
}
function roleReplace(a) {
    if (a) {
        a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = a.replace(/(^|\s)(рев|ревнивый студент|ман|маньяк)(\s|$)/gi, ' <span class="jeal"></span> ')).replace(/(^|\s)(студ|студент|гр|гражданин)(\s|$)/gi, ' <span class="stud"></span> ')).replace(/(^|\s)(лун|лунатик|док|доктор)(\s|$)/gi, ' <span class="sleep"></span> ')).replace(/(^|\s)(деж|дежурный|коп|комиссар)(\s|$)/gi, ' <span class="duty"></span> ')).replace(/(^|\s)(пом|помощник дежурного|серж|сержант)(\s|$)/gi, ' <span class="assis"></span> ')).replace(/(^|\s)(пох|похититель|маф|мафиози)(\s|$)/gi, ' <span class="robb"></span> ')).replace(/(^|\s)(глава похитителей|босс мафии|босс)(\s|$)/gi, ' <span class="hrobb"></span> ')).replace(/(^|\s)котик(\s|$)/gi, ' <span class="cat catm"></span> ')).replace(/(^|\s)кот(\s|$)/gi, ' <span class="cat"></span> ')).replace(/(^|\s)(вахтер|адвокат)(\s|$)/gi, ' <span class="law"></span> ')).replace(/\[(stud|gr)\]/gi, ' <span class="rolesmile role1"></span> ')).replace(/\[(poh|maf)\]/gi, ' <span class="rolesmile role2"></span> ')).replace(/\[(glava|boss)\]/gi, ' <span class="rolesmile role3"></span> ')).replace(/\[(dej|kom)\]/gi, ' <span class="rolesmile role4"></span> ')).replace(/\[(pom|ped)\]/gi, ' <span class="rolesmile role5"></span> ')).replace(/\[(rev|man)\]/gi, ' <span class="rolesmile role6"></span> ')).replace(/\[(lun|doc)\]/gi, ' <span class="rolesmile role7"></span> ')).replace(/\[cat\]/gi, ' <span class="rolesmile role8"></span> ')).replace(/\[adv\]/gi, ' <span class="rolesmile role9"></span> ');
        for (var e = 0, t = smilesArr.length; e < t; e++)
            a = a.split("[" + smilesArr[e] + "]").join(' <img src="/images/' + (isMaffia ? "maffia/" : "") + "smiles/" + smilesArr[e] + '.gif"/> ');
        Object.forEach(textSmiles, function(e, t) {
            a = a.split(e).join(' <img src="/images/' + (isMaffia ? "maffia/" : "") + "smiles/" + t + '.gif"/> ')
        })
    }
    return a
}
function matFilter(e) {
    if (!e)
        return "";
    var t = " [ой] ";
    return e = (e = e.replace(/(^|\s)(хуй|хуя|бля)/gi, t)).replace(/пизд|нахуй|похуй|уеб|хуй|хуе|хyй|хyе|xуй|xуе|аеб|(^|\s)еба|е6|((^|\s)манда(\s|$))|пидор/gi, t)
}
function searchImg(e) {
    return e = (e = e.replace(/(^|\s)http(\S)*(.jpg|.jpeg|.png|.gif)(\s|$)/gi, ' <span class="imageLoader" data-title="Посмотреть изображение" onclick="showWall(\'$&\',{external:true,nohide:true})"></span> ')).replace(/\{([a-z]{2})\}/gi, ' <span class="flag"><span style="background-image:url(/images/flags/$1.png)"></span></span> ')
}
function specials_in(e) {
    var t = e.from && !e.nofilter ? escapeHtml(e.message) : e.message;
    if (t) {
        if (-1 < t.indexOf("*time*") || -1 < t.indexOf("[date]")) {
            var a = e.time ? new Date(e.time) : new Date
              , n = a.getSeconds()
              , s = a.getMinutes()
              , i = a.getHours()
              , o = a.getDate()
              , l = a.getMonth() + 1
              , r = a.getFullYear()
              , c = {
                time: (i < 10 ? "0" + i : i) + (s < 10 ? ":0" + s : ":" + s) + (n < 10 ? ":0" + n : ":" + n),
                date: (o < 10 ? "0" + o : o) + (l < 10 ? ".0" + l + "." + r : ":" + l + "." + r)
            };
            t = (t = t.replace(/\*time\*/gim, c.time)).replace(/\[date\]/gim, c.date)
        }
        t = searchImg(t = matFilter(t = roleReplace(t = t.replace(/(^|\s)FFL($|\s)/gim, "Friends For Love"))))
    }
    return t
}
function specials_out(e) {
    return e.replace(/(^|\s)\/me($|\s)/, " " + u.login + " ")
}
function escapeHtml(e) {
    var t = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    };
    return e.replace(/[&<>"']/g, function(e) {
        return t[e]
    })
}
function warningWindow(e, t, a, n) {
    var s = wW.clone();
    s.appendTo(container),
    s.find(".modal3").html(e),
    s.show();
    var i = s.find("button");
    if (a ? i.css({
        padding: "0 10px"
    }).html(a) : i.html("ОК"),
    i.one("click", function() {
        s.fadeOut(400),
        t && t(),
        setTimeout(function() {
            return s.remove()
        }, 1e3)
    }),
    n)
        if (n instanceof Object && n.hasOwnProperty("win")) {
            if ($("<div></div>").addClass("button gameView").html("Посмотреть игру").on("click", function() {
                return s.remove()
            }).appendTo(s.find(".modal3")),
            game.style && 4 === game.style.style && container.hasClass("current")) {
                var o = n.win ? 1 === u.sex ? "women" : "men" : 1 === u.sex ? "men" : "women";
                s.addClass(o + "win")
            } else
                n.win && 430 < $(window).height() && s.addClass("win");
            s.addClass("showWindow")
        } else
            s.addClass(n),
            setTimeout(function() {
                return s.addClass("showWindow")
            }, 500);
    else
        s.addClass("showWindow")
}
function modalWindow(e, t, a) {
    mW.find(".modal").removeAttr("style"),
    mW.find(".modal3").html(e),
    mW.find("button").eq(0).unbind("click").one("click", function() {
        mW.hide(),
        t && t()
    }),
    mW.find("button").eq(1).unbind("click").one("click", function() {
        mW.hide(),
        a && a()
    }),
    mW.addClass("showWindow")
}
function showCash(e) {
    var t = $("#cash")
      , a = t.find(".modal2");
    t.removeClass().addClass("cash" + Math.floor(9 * Math.random())),
    a.html(e).unbind("click").on("click", function() {
        return t.removeClass("showCash")
    }),
    t.addClass("showCash")
}
function isset(e) {
    return !(void 0 === e || null === typeof e)
}
function updateInterface(e) {
    if (e) {
        if (e.inc)
            return void e.inc.forEach(function(e) {
                e.collection ? (u.collections || (u.collections = {}),
                u.collections[e.collection] || (u.collections[e.collection] = 0),
                u.collections[e.collection][e.item] || (u.collections[e.collection][e.item] = 0),
                u.collections[e.collection][e.item] += e.value) : (u.items[e.item] || (u.items[e.item] = 0),
                u.items[e.item] += e.value)
            });
        Object.update(u, e)
    } else
        e = u;
    e.login && $("#nick").html(e.login),
    e.image && e.sex && (2 < e.image.length ? $("#image").removeClass().css({
        background: "url(/files/" + u._id + e.image + ") center center no-repeat",
        "background-size": "contain"
    }) : $("#image").removeClass().removeAttr("style").addClass((1 === e.sex ? "iw" : "im") + e.image)),
    isset(e.money) && (animateNumber("gamemoney", e.money, !0),
    shop.find("p").find(".gamemoney").html(f.over1000(e.money))),
    isset(e.money2) && (animateNumber("money", e.money2, !0),
    shop.find("p").find(".money").html(f.over1000(e.money2)));
    for (var t = 1; t < 7; t++)
        if (e.hasOwnProperty("item" + t)) {
            var a = void 0
              , n = e["item" + t] || 0;
            if (t % 3 == 0) {
                var s = n - Date.now();
                a = !s || s < 1 ? 0 : Math.ceil(s / 36e5),
                6 === t && 0 < a && ($("#shop6").find("div:nth-of-type(2)").attr("data-title", f.someThing(a, "час", "часа", "часов")),
                a = Math.ceil(a / 24))
            } else
                a = n + "/" + (n >= items["s" + t] ? "0" : (items["s" + t] - n).toString());
            $("#shop" + t).find("div:nth-of-type(2)").html(a)
        }
    if (u.items) {
        var i = slotArray.reduce(function(e, t) {
            return u.items[t] && (e += '<input type="radio" name="slots" id="slot-bet' + t + '" value="' + t + '"/><label data-count="' + u.items[t] + '" class="items items-' + t + '" for="slot-bet' + t + '"></label>'),
            e
        }, "");
        i || (i = "К сожалению, Ваш инвентарь пуст. Вы не сможете сейчас сыграть на автомате."),
        $("#slot-bet").html(i)
    }
    winInfo.find(".inventory").is(":visible") && showInventory(),
    Boolean(u.vip) !== updateInterface.vip && (u.vip && u.vip > Date.now() ? (b.removeClass("noVip"),
    updateInterface.vip = !0) : (b.addClass("noVip"),
    updateInterface.vip = !1)),
    helper.changeRate && helper.changeRate()
}
function showMessage(e) {
    warningWindow(e)
}
function wallhide() {
    wallpaper.attr("style", ""),
    wallpaper.hide()
}
function showWall(e, t) {
    var a = void 0 === t ? {} : t
      , n = a.external
      , s = void 0 !== n && n
      , i = a.nohide
      , o = void 0 !== i && i
      , l = a.transparent
      , r = void 0 !== l && l
      , c = s ? e : "/images/walls/" + e;
    wallpaper.removeAttr("style"),
    wallpaper.css(r ? {
        background: "url(" + c + ") center no-repeat",
        "background-size": "contain"
    } : {
        "background-image": "url(" + c + ")"
    }),
    wallpaper.show(),
    o || setTimeout(function() {
        return wallpaper.fadeOut(3e3, wallhide)
    }, 2e3)
}
function showWindow(t) {
    switch (win.attr("class", "window"),
    winInfo.children("div").hide(),
    submenu.hide(),
    -1 < ["tournaments", "aboutgame"].indexOf(t) && winInfo.find("." + t).load("/html/" + t + ("aboutgame" === t && isMaffia ? "-maffia" : "") + ".html"),
    winInfo.find("." + t).show(),
    container.addClass("back"),
    win.addClass("openWindow"),
    t) {
    case "newgame":
        isAppVK || $("#about").focus();
        break;
    case "shop":
        [3, 6].forEach(function(e) {
            u.hasOwnProperty("item" + e) || (u["item" + e] = 0);
            var t = (u["item" + e] || 0) - date.now()
              , a = 3 === e ? 36e5 : 864e5
              , n = !t || t < 1 ? 0 : Math.ceil(t / a)
              , s = $("#shop" + e).find("div:nth-of-type(2)");
            s.html(n),
            6 === e && s.attr("data-title", f.someThing(Math.ceil(t / 36e5), "час", "часа", "часов"))
        });
        break;
    case "donatoptions":
        if (u.vip) {
            var e = u.vip - Date.now();
            0 < e && ($("#donat-vip").find(".money").html("2000"),
            vipButton.html("Продлить VIP-статус (ост. " + Math.round(e / 864e5) + " дн.)"),
            $("#donat-foto").find(".money").hide())
        }
        var a = u.items[7] ? f.someThing(u.items[7], "рупор", "рупора", "рупоров") : "Рассказать";
        $("#donat-allmessage").find("button").html(a);
        var n = u.items[12] ? f.someThing(u.items[12], "сертификат", "сертификата", "сертификатов") : "Создать";
        $("#donat-biggame").find("button").html(n);
        break;
    case "collect":
        collectRadio.attr("checked", !1),
        collectionWin.find("p").empty(),
        collectionWin.find("div").empty();
        break;
    case "inventory":
        showInventory();
        break;
    case "areamap":
        if (mapAreas) {
            var s = document.getElementById("citymap")
              , i = function(e) {
                var t = e.data
                  , a = $("#areaData");
                if (a.empty(),
                $("<h2>" + t.title + "</h2>").appendTo(a),
                t.own && (a.append("Контролируют: " + ("bots" === t.own ? "боты" : "игроки")),
                "bots" === t.own && $("<button></button>", {
                    class: "button",
                    "data-area": t.num
                }).html("Захватить").on("click", areaAttack).appendTo(a),
                "players" === t.own && $("<button></button>", {
                    class: "button",
                    "data-area": t.num
                }).html("Оборонять").on("click", areaAttack).appendTo(a)),
                t.win) {
                    var n = '<table><tr><th colspan="2">Статистика битв</th></tr>';
                    t.win.players && (n += "<tr><td>Победы игроков</td><td>" + t.win.players + "</td></tr>"),
                    t.win.bots && (n += "<tr><td>Победы ботов</td><td>" + t.win.bots + "</td></tr>"),
                    t.win.draw && (n += "<tr><td>Ничейные партии</td><td>" + t.win.draw + "</td></tr>"),
                    n += "</table>",
                    a.append(n)
                }
            }
              , o = function() {
                if ("contentDocument"in s)
                    for (var e = $(s.contentDocument), t = 1; t <= 8; t++) {
                        var a = $("#area" + t, e)
                          , n = mapAreas[t];
                        a.html("<title>" + n.title + "</title>"),
                        n.own && "bots" === n.own && a.attr("class", a.attr("class") + " " + n.own),
                        n.num = t,
                        a.click(n, i)
                    }
            };
            o(),
            s.onload = o
        }
        break;
    case "clan":
    case "clan-window":
        clan.openWindow(t);
        break;
    case "tree":
        if (u.items && u.items.nytoys) {
            var l = winInfo.find(".toybox");
            l.empty(),
            $.each(u.items.nytoys, function(e, t) {
                $('<span class="nytoy' + t + '" data-id="' + e + '"></span>').appendTo(l)
            }),
            l.on("mousedown", "span", NYtoyAdd)
        }
        break;
    case "lottery":
        lotteryQuery = !1,
        lotteryWin.empty();
        for (var r = "", c = 1; c <= 100; c++)
            r += "<span>" + c + "</span>",
            c % 10 == 0 && (r += "<br/>");
        $("<div></div>").html(r).appendTo(lotteryWin),
        lotteryWin.on("click", "div>span", function() {
            lotteryQuery || (lotteryQuery = !0,
            lotteryDiv.find("button").hide(),
            sendToSocket({
                type: "lottery",
                num: $(this).html()
            }),
            $(this).addClass("selectLottery"))
        });
        break;
    case "menu-editor":
        menuedit.window();
        break;
    case "newsWin":
        lStorage.setItem("lastnews", lastNews),
        newsCounter()
    }
    [["stat", "statwin", !0], ["clan", "myclanwin", !0], ["clan-window", "clanwin", !0], ["slotmachine", "slotwin", !0], ["tree", "treewin"], ["f14Win", "blackwin"], ["playerInfoBlock", "profileWindow"], ["buyGifts", "buyboxwin", !0], ["pay", "info_pay", !0]].forEach(function(e) {
        e[0] === t && (e[2] && win.addClass("nobefore"),
        win.addClass(e[1]))
    })
}
function closewindow() {
    win.removeClass("openWindow"),
    container.removeClass("back")
}
function showTooltip(e, t) {
    if (t) {
        var a = t.split("|")
          , n = parseInt(a[0])
          , s = parseInt(a[1])
          , i = html.width();
        n < i / 2 ? tp.css("left", n + "px") : (tp.css("left", ""),
        tp.css("right", i - n + "px")),
        tp.css("top", s + 10 + "px"),
        tp.html(gamesInfoArray[e]).show()
    } else
        tp.hide()
}
function tooltip(e, t, a) {
    var n = $(".tooltip")
      , s = isAppVK || kinderMode || mobile ? b : container;
    if (a) {
        var i = e.pageX - s.offset().left
          , o = e.pageY - s.offset().top
          , l = s.outerWidth()
          , r = s.outerHeight();
        if (i < l / 2 ? (n.css("left", i + "px"),
        n.css("right", "")) : (n.css("left", ""),
        n.css("right", l - i + "px")),
        r < o + 40 ? (n.css("top", ""),
        n.css("bottom", r - o + "px")) : (n.css("bottom", ""),
        n.css("top", o + 10 + "px")),
        0 < t.indexOf("|")) {
            var c = e.target.hasAttribute("data-club") ? u.club ? 1 : 0 : isMaffia ? 1 : 0;
            t = t.split("|")[c]
        }
        n.html(t.replace("<!", "&lt;!")).show()
    } else
        n.hide()
}
function showBox(e) {
    var n = '<div class="box">';
    Object.forEach(e.box, function(e, t) {
        var a = 0 < t && t < 7 ? roleText[gameMode()].items[t] : getItemsArray(t);
        n += '<div data-title="' + a + '" class="items-' + t + '">',
        1 < e && (n += "<span>" + e + "</span>"),
        n += "</div>"
    }),
    n += "</div>",
    warningWindow(e.text + ":<br/>" + n)
}
function windowByName(e) {
    $(e).parents(".warningWindow").fadeOut(400),
    showWindow($(e).attr("data-param"))
}
function plSort(e, t) {
    return e[0] > t[0] ? 1 : e[0] < t[0] ? -1 : 0
}
function sSort(e, t) {
    return e[colNum] > t[colNum] ? sortType : e[colNum] < t[colNum] ? -1 * sortType : 0
}
function iSort(e, t) {
    var a = parseInt(e[colNum])
      , n = parseInt(t[colNum]);
    return n < a ? sortType : a < n ? -1 * sortType : 0
}
function sortTable(e) {
    e ? (sound("shuffle"),
    colNum === e && (sortType *= -1),
    colNum = e) : e = colNum;
    var t = [];
    gamesList.find("li").each(function() {
        var e = [[$(this).attr("id"), $(this).attr("class")]];
        $(this).children("span").each(function() {
            e.push($(this).html())
        }),
        t.push(e)
    }),
    1 === e || 4 === e ? t.sort(sSort) : t.sort(iSort),
    t.forEach(function(e) {
        var t = e[0][0]
          , a = e[0][1];
        $("#" + t).remove();
        var n = document.createElement("li");
        n.id = t,
        a && (n.className = a),
        n.innerHTML = e.slice(1).map(function(e, t) {
            return '<span class="row' + (t + 1) + '">' + e + "</span>"
        }).join(""),
        gamesList.append(n)
    })
}
function showNewDiv(e) {
    messagesList.append(e),
    doScroll()
}
function inviteFriends() {
    isAppVK ? isset(VK) && VK.callMethod("showInviteBox") : warningWindow('<strong>Приглашайте в игру новых игроков и<br/> получайте 50% от их платежей на свой игровой счёт!</strong><hr/><a id="shareVkLink" target="_blank" title="Поделиться с друзьями ВКонтакте" href="' + getGameUrl(!0) + '">Рассказать друзьям ВКонтакте</a><br/><label>Ссылка для приглашения<br/> <input type="text" value="' + getGameUrl() + '" readonly="readonly" style="width:100%"/></label> ')
}
function windowTable(e, t) {
    var a = winInfo.find("." + e).find(".wintable-content>table")
      , n = "";
    switch (e) {
    case "allfriends":
        var s = {};
        t.forEach(function(e) {
            s[e._id] = e
        }),
        u.friends.forEach(function(e, t) {
            var a = s[e] || {
                login: "*удаленный персонаж*",
                sex: 2
            };
            n += "<tr><td>" + (t + 1) + "</td><td>" + (a.last ? '<strong data-id="' + e + '">' + a.login + "</strong>" : a.login + " (бот)") + '</td><td class="sex' + a.sex + '">' + (1 === a.sex ? "♀" : "♂") + '</td><td><button data-uid="' + e + '" data-login="' + a.login + '" class="button">Удалить</button></td><td>' + (a.last ? date.rusDate(a.last, !0, !0) : "Всегда в игре") + "</td></tr>"
        });
        break;
    case "clanlist":
        t.forEach(function(e) {
            n += "<tr><td>" + e.id + '</td><td class="pseudolink" data-action="clanProfile" data-id="' + e.id + '">' + e.name + '</td><td style="background:' + clan.getIcon(e.id) + ') center no-repeat"> </td><td>' + e.slogan + "</td><td>" + date.rusDate(e.date) + "</td></tr>"
        })
    }
    a.html(n)
}
function getProfile(e) {
    sendToSocket({
        type: "profile",
        uid: e
    })
}
function previewLoadPicture(e, t) {
    if (window.FileReader) {
        if (e.files && e.files[0]) {
            var a = new FileReader;
            a.onload = function(e) {
                t(e.target.result)
            }
            ,
            a.readAsDataURL(e.files[0])
        }
    } else
        showMessage("К сожалению, в вашем браузере не поддерживается предпросмотр загружаемых файлов.<br/> Если хотите посмотреть как будет выглядеть ваша аватарка перед загрузкой, воспользуйтесь другим браузером.")
}
function createFotoLoading(e, t, a) {
    var n = new FormData;
    n.append("uploadFile", e),
    $.ajax({
        url: currentDomainUrl() + ":" + serverPort(!1) + t,
        data: n,
        cache: !1,
        contentType: !1,
        processData: !1,
        type: "POST",
        success: function(e) {
            "ok" === e.status ? showMessage(e.text) : showMessage(a + ":<br/> " + e.errors)
        },
        xhrFields: {
            withCredentials: !0
        }
    }),
    closewindow()
}
function getRoleWallpaper(e) {
    if (!e)
        return "0.gif";
    if (isMaffia) {
        var t = 1100 < b.width() && 600 < b.height() ? "full/" : "";
        return e < 10 ? "maffia/" + t + e + ".jpg" : t + e + ".jpg"
    }
    return e + ".jpg"
}
updateInterface.vip = !0;
var date = {
    diff: 0,
    pluhTime: 0,
    now: function() {
        return Date.now() + date.diff
    },
    countdown: function(t) {
        var e = ""
          , n = Math.floor(t / 3600)
          , a = t % 3600
          , r = Math.floor(a / 60)
          , o = a % 60;
        return 0 < n && (e += n + ":"),
        e += (9 < r ? "" : "0") + r + ":" + (9 < o ? "" : "0") + o
    },
    showDate: function(t, e) {
        var n, a = (t = new Date(parseInt(t))).getDate(), r = t.getMonth() + 1;
        if (a < 10 && (a = "0" + a),
        r < 10 && (r = "0" + r),
        n = a + "." + r + "." + t.getFullYear(),
        e) {
            var o = t.getHours();
            o < 10 && (o = "0" + o);
            var u = t.getMinutes();
            u < 10 && (u = "0" + u),
            n += " " + o + ":" + u
        }
        return n
    },
    rusDate: function(t, e, n) {
        var a, r;
        return e ? !0 === n ? (r = t.split("."),
        a = new Date(r[2],+r[1] - 1,r[0])) : (r = t.split("-"),
        a = new Date(r[0],+r[1] - 1,r[2])) : a = new Date(parseInt(t)),
        "Invalid Date" === a.toString() ? "Неверная дата" : a.getDate() + " " + ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"][a.getMonth()] + ("short" === n ? "" : " " + a.getFullYear() + " (" + ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"][a.getDay()] + ")")
    },
    isToday: function(t) {
        var e = new Date(date.now() + 108e5);
        return t === (e.getUTCDate() + "." + (e.getUTCMonth() + 1) + "." + e.getUTCFullYear()).toString()
    },
    curTime: function() {
        var t, e, n = new Date;
        return (t = n.getHours()) < 10 && (t = "0" + t),
        (e = n.getMinutes()) < 10 && (e = "0" + e),
        t + ":" + e
    },
    isWrongDate: function(t) {
        return "Invalid Date" === new Date(t).toString()
    }
};
var payDiv = $(".pay")
  , donatInput = payDiv.find(".greenpay").find("input")
  , donatGoldInput = payDiv.find(".mafcoin").find("input")
  , minDonatSum = function() {
    var n = $(this).parent()
      , o = parseInt(n.find("input").val());
    return 10 <= (n.hasClass("mafcoin") ? o : o / 10) || (showMessage("Минимальная сумма - 10 рублей"),
    !1)
};
payDiv.find("#payeer-button").on("click", minDonatSum),
payDiv.find("#pay-button").on("click", minDonatSum),
payDiv.find("#goldpay-button").on("click", minDonatSum);
var sumChange = function() {
    var n = parseInt(donatInput.val()) / 10;
    1 <= n ? (payDiv.find("#pay-rouble").html(n),
    payDiv.find("#payeer-button").attr("href", serverPort(!0) + "/billing/?uid=" + u._id + "&sum=" + n.toFixed(2)),
    payDiv.find("#pay-button").attr("href", serverPort(!0) + "/billing/form?id=" + u._id + "&sum=" + n.toFixed(0))) : (payDiv.find("#pay-rouble").empty(),
    payDiv.find("#payeer-button").attr("href", "#"),
    payDiv.find("#pay-button").attr("href", "#"))
};
donatInput.change(sumChange).keyup(sumChange);
var sumGoldChange = function() {
    var n = parseInt(donatGoldInput.val());
    1 <= n ? (payDiv.find("#goldpay-rouble").html(n),
    payDiv.find("#goldpay-button").attr("href", serverPort(!0) + "/billing/form?id=_" + u._id + "&sum=" + n.toFixed(0))) : (payDiv.find("#goldpay-rouble").empty(),
    payDiv.find("#goldpay-button").attr("href", "#"))
};
donatGoldInput.change(sumGoldChange).keyup(sumGoldChange);
var vipButton = $("#donat-vip").find("button");
$("#showDonat").on("click", function() {
    showWindow("donatoptions")
}),
vipButton.on("click", function() {
    u.vip && 2e3 <= u.money2 || 3e3 <= u.money2 ? (sendToSocket({
        type: "donat",
        action: "vip"
    }),
    closewindow()) : f.notEnough({
        action: "money2"
    })
});
var donatNick = $("#donat-nick");
donatNick.find("button").on("click", function() {
    var n = donatNick.find("input").val().trim();
    4 <= n.length ? 100 <= u.money2 ? (sendToSocket({
        type: "donat",
        action: "nick",
        login: n
    }),
    closewindow()) : f.notEnough({
        action: "money2"
    }) : showMessage("Минимальная длина НикНейма 4 символа")
});
var donatChange = $("#donat-change")
  , donatChangeInput = donatChange.find("input")
  , changeChange = function() {
    var n = 300 * parseInt(donatChangeInput.val());
    300 <= n ? donatChange.find("span").eq(1).html(f.over1000(n)) : donatChangeInput.val(100)
};
donatChangeInput.change(changeChange).keyup(changeChange),
donatChange.find("button").on("click", function() {
    var n = parseInt(donatChangeInput.val());
    0 < n && n <= u.money2 ? (sendToSocket({
        type: "donat",
        action: "moneychange",
        money: n
    }),
    closewindow()) : f.notEnough({
        action: "money2"
    })
});
var donatNickColor = $("#donat-nickcolor");
donatNickColor.find("button").on("click", function() {
    var n = donatNickColor.find("input").val();
    500 <= u.money2 ? modalWindow('Уверены, что хотите установить цвет ника таким?<br/><div style="background:#000;padding:10px;"><b style="color:' + n + '">' + u.login + '</b> в режиме Мафии</div><div style="background:#fff;padding:10px;color:#000"><b style="color:' + n + '">' + u.login + "</b> в режиме День Любви</div>", function() {
        sendToSocket({
            type: "donat",
            action: "nickcolor",
            color: n
        }),
        closewindow()
    }) : f.notEnough({
        action: "money2"
    })
});
var donatAllMsg = $("#donat-allmessage")
  , sendToAllMsg = function(n) {
    u.items[7] ? (u.items[7] -= 1,
    sendToSocket({
        type: "items",
        action: "7",
        text: n
    }),
    closewindow()) : 200 <= u.money2 ? (sendToSocket({
        type: "toAll",
        action: "msgToAll",
        text: n
    }),
    closewindow()) : showMessage('Недостаточно <span class="money">баксов</span> для выполнения операции :(')
};
donatAllMsg.find("button").on("click", function() {
    sendToAllMsg(donatAllMsg.find("input").val().trim().substring(0, 300))
}),
$("#speaker").on("click", function() {
    modalWindow("Для отправки сообщения всем присутствующим в игре " + (u.items[7] ? "будет использован 1 сертификат на бесплатное объявление" : 'с вашего счета будет списано <span class="money">200</span>') + ". Хотите продолжить?", function() {
        sendToAllMsg(inputField.val().trim().substring(0, 300)),
        inputField.val("")
    })
});
var donatFoto = $("#donat-foto")
  , donatFotoFile = donatFoto.find("input")[0]
  , donatFotoFileImage = "";
$(donatFotoFile).change(function() {
    previewLoadPicture(this, function(n) {
        donatFotoFileImage = n
    })
}),
donatFoto.find("button").on("click", function() {
    if (!u.vip && u.money2 < 1e3)
        f.notEnough({
            action: "money2"
        });
    else if (donatFotoFile.files && donatFotoFile.files[0]) {
        var n = donatFotoFile.files[0];
        307200 < n.size ? showMessage("Размер файла превышает 300 КБ") : modalWindow('Уверены, что хотите установить эту аватарку?<br/><div class="preloadAvatar"><img class="preloadFileImage" src="' + donatFotoFileImage + '" /></div><div class="preloadAvatar"><img class="preloadFileImage" src="' + donatFotoFileImage + '" /></div>', function() {
            return createFotoLoading(n, "/upload", "Не удалось установить аватар")
        })
    } else
        showMessage("Не выбран файл для загрузки")
});
var donatBotnick = $("#donat-botnick");
donatBotnick.find("button").on("click", function() {
    var n = donatBotnick.find("input[type=text]").val().trim().substring(0, 20)
      , o = $("#botnick-sex").prop("checked") ? 1 : 2;
    u.items[25] && 2 <= u.items[25] ? (sendToSocket({
        type: "donat",
        action: "botnick",
        login: n,
        sex: o
    }),
    closewindow()) : f.notEnough({
        action: "item25"
    })
});
var donatBotwords = $("#donat-botwords");
donatBotwords.find("button").on("click", function() {
    var n = donatBotwords.find("input").val().trim().substring(0, 150);
    u.items[25] && 1 <= u.items[25] ? (sendToSocket({
        type: "donat",
        action: "botwords",
        text: n
    }),
    closewindow()) : f.notEnough({
        action: "item25"
    })
});
var donatBigGame = $("#donat-biggame");
donatBigGame.find("button").on("click", function() {
    var n = donatBigGame.find("input").val().trim().substring(0, 100);
    u.items[12] ? (u.items[12] -= 1,
    sendToSocket({
        type: "items",
        action: "12",
        title: n
    }),
    closewindow()) : 50 <= u.money2 ? (sendToSocket({
        type: "donat",
        action: "biggame",
        title: n
    }),
    closewindow()) : f.notEnough({
        action: "money2"
    })
});
$.cachedScript = function(e, t) {
    return t = $.extend(t || {}, {
        dataType: "script",
        cache: !0,
        url: e
    }),
    $.ajax(t)
}
,
Object.size = function(e) {
    return Object.keys(e).length
}
,
Object.update = function(o, e) {
    Object.forEach(e, function(e, t) {
        o[t] = e
    })
}
,
Object.forEach = function(e, t) {
    if (e)
        for (var o = Object.keys(e), r = o.length, n = 0; n < r; n++)
            t(e[o[n]], o[n])
}
,
Array.prototype.randomValue = function() {
    return this[Math.floor(Math.random() * this.length)]
}
,
Array.prototype.shuffle = function() {
    for (var e = this.length - 1; 0 < e; e--) {
        var t = Math.floor(Math.random() * (e + 1))
          , o = this[t];
        this[t] = this[e],
        this[e] = o
    }
    return this
}
;
var f = {
    randomInt: function(e) {
        return Math.floor(1 + Math.random() * e)
    },
    roundTwo: function(e) {
        return Math.round(100 * e) / 100
    },
    timeLost: function(e) {
        var t = (e - date.now()) / 864e5
          , o = f.someThing(Math.floor(t), "день", "дня", "дней");
        return t < 1 && (o = f.someThing(Math.floor(24 * t), "час", "часа", "часов")),
        o
    },
    onlineCount: function(e, t) {
        0 < e && onlineCounter.html(e),
        t && (t.text += "join" === t.action ? " входит в игру" : " покидает игру",
        t.text += " (" + e + ")",
        alarm(t.text, !0))
    },
    radioIframe: function(e) {
        isAppVK || (e ? ($("#enableRadioStream").remove(),
        $("<div></div>", {
            id: "disableRadioStream"
        }).html("Закрыть радио").on("click", function() {
            f.radioIframe(!1),
            lStorage.removeItem("radiostream"),
            $("#vk_groups").show()
        }).insertBefore(onlineCounter),
        onlineCounter.before('<iframe id="radioStream" src="/html/radio.html?' + encodeURIComponent(u.login) + '" frameborder="0" scrolling="no" style="width:200px;height:200px"></iframe>')) : !1 === e ? ($("#radioStream").remove(),
        $("#disableRadioStream").remove(),
        $("<div></div>", {
            id: "enableRadioStream"
        }).html("Слушать радио").on("click", function() {
            f.radioIframe(!0),
            lStorage.setItem("radiostream", !0),
            $("#vk_groups").hide()
        }).insertBefore(onlineCounter)) : f.radioIframe(!!lStorage.getItem("radiostream")))
    },
    someThing: function(e, t, o, r) {
        var n, a = e % 100;
        if (10 < a && a < 20)
            n = e + " " + r;
        else
            switch (e % 10) {
            case 1:
                n = e + " " + t;
                break;
            case 2:
            case 3:
            case 4:
                n = e + " " + o;
                break;
            default:
                n = e + " " + r
            }
        return n
    },
    notEnough: function(r) {
        var e = function(e, t, o) {
            return void 0 === t && (t = "средств"),
            void 0 === o && (o = ""),
            r.message || 'Недостаточно <span class="' + e + '">' + t + "</span> для выполнения этой операции. " + o
        };
        switch (r.action) {
        case "money2":
            modalWindow(e("money", "баксов", "<br/> Хотите пополнить счёт?"), function() {
                return showWindow("pay")
            });
            break;
        case "item25":
            modalWindow(e("goldmoney", "мафкойнов", "<br/> Хотите пополнить счёт?"), function() {
                return showWindow("pay")
            });
            break;
        default:
            showMessage(e("gamemoney"))
        }
    },
    over1000: function(e) {
        if (!e)
            return 0;
        var t = e.toString();
        if (0 < t.length) {
            e = "";
            for (var o = 1, r = t.length - 1; 0 <= r; r--,
            o++)
                o % 3 == 1 && (e = " " + e),
                e = t[r] + e
        } else
            e = t;
        return e
    },
    playerNick: function(e, t) {
        if (t) {
            var o = 1 === e.sex ? "♀ " + e.login : e.login + " ♂";
            return '<strong class="sex' + e.sex + '" data-id="' + e._id + '">' + o + "</strong>"
        }
        return '<strong data-id="' + e._id + '">' + e.login + "</strong>"
    }
};
var textRoles = {
    1: "stud",
    2: "poh",
    3: "poh",
    4: "dej",
    5: "dej",
    6: "rev",
    7: "lun",
    8: "cat",
    9: "law"
};
function roles(e) {
    return +e < 10 ? isMaffia ? {
        0: {
            name: "Свидетель",
            button: []
        },
        1: {
            name: "Гражданин",
            icon: "stud",
            button: []
        },
        2: {
            name: "Мафиози",
            icon: "robb",
            button: ["Убить"]
        },
        3: {
            name: "Босс мафии",
            icon: "hrobb",
            button: ["Заморозить", "Убить"]
        },
        4: {
            name: "Комиссар",
            icon: "duty",
            button: ["Проверить"]
        },
        5: {
            name: "Сержант",
            icon: "assis",
            button: []
        },
        6: {
            name: "Маньяк",
            icon: "jeal",
            button: ["Зарезать"]
        },
        7: {
            name: "Доктор",
            icon: "sleep",
            button: ["Лечить"]
        },
        8: {
            name: "Кот",
            icon: "cat",
            button: ["Поиграть"]
        },
        9: {
            name: "Адвокат",
            icon: "law",
            button: ["Защищать"]
        }
    }[e] : {
        0: {
            name: "Наблюдатель",
            button: []
        },
        1: {
            name: "Студент",
            icon: "stud",
            button: []
        },
        2: {
            name: "Похититель",
            icon: "robb",
            button: ["Похитить"]
        },
        3: {
            name: "Глава похитителей",
            icon: "hrobb",
            button: ["Запереть", "Похитить"]
        },
        4: {
            name: "Дежурный",
            icon: "duty",
            button: ["Проверить"]
        },
        5: {
            name: "Помощник дежурного",
            icon: "assis",
            button: []
        },
        6: {
            name: "Ревнивый студент",
            icon: "jeal",
            button: ["Испортить подарок"]
        },
        7: {
            name: "Лунатик",
            icon: "sleep",
            button: ["Лунатить"]
        },
        8: {
            name: "Котик",
            icon: "cat",
            button: ["Поиграть"]
        },
        9: {
            name: "Вахтёр",
            icon: "law",
            button: ["Оправдывать"]
        }
    }[e] : {
        none: {
            name: "[роль недоступна]",
            button: []
        },
        10: {
            name: "Палач",
            icon: "roleblock roleblock10",
            button: []
        },
        10.5: {
            name: "Жертва",
            icon: "roleblock roleblock10target",
            button: []
        }
    }[e]
}
var min10, gameMode = function() {
    return isMaffia ? "maffia" : "ffl"
}, roleText = {
    ffl: {
        roleinfo: {
            0: "Вы - наблюдатель, поэтому не мешайте играть участникам.",
            1: "Вы - студент.<br/> Днём голосуйте против похитителей, а ночью старайтесь не привлекать их внимания своим храпом.",
            2: "Вы - похититель.<br/> Чтобы выиграть, вам нужно сорвать День Любви, оставив студентов без подарков.",
            3: "Вы - глава похитителей.<br/> Вы выиграйте, оставив студентов без подарков к празднику. У вас есть уникальная возможность совершать 2 действия за 1 ночь.",
            4: "Вы - дежурный.<br/> Ночью ищите похителей, а днём подвергайте их справедливому изгнанию из общежития.",
            5: "Вы - помощник дежурного.<br/> Чтобы победить, вам нужно изгнать всех похитителей. Ждите своего часа, а пока... делайте вид, что активно помогаете дежурному.",
            6: "Вы - ревнивый студент.<br/> Ваша цель - избавиться от похитителей. Днём выводите их на голосование, а ночью изымайте у них подарки.",
            7: "Вы - лунатик.<br/> Ночью вместо кровати выбирайте себе место возле чьей-то двери. Может это помешает похитителям совершить кражу.",
            8: "Вы - котик.<br/> Ночью своими играми мешайте игрокам, а днем все-таки ищите похитителей.",
            9: "Вы - вахтер.<br/> Как вахтеру Вам очень хочется отменить предстоящий праздник, помогите похитителям его сорвать. Защищайте их от гнева и возмедия студентов с помощью кнопки <b>Защитить</b>.<br/> Помните, что Вы не можете обеспечить кому-то защиту на сутки 2 раза подряд.",
            10: "Вы - палач!<br/> Ваша задача на игру - предать казни свою жертву. Если &quot;жертва&quot; будет убита ночью или самостоятельно покинет игру - Вы проиграете."
        },
        nightActions: {
            1: "Студент спокойно спит.",
            2: "Похититель выбрал подходящую комнату для ограбления.",
            3: "Глава похитителей закрыл кого-то в комнате",
            4: "Дежурный решил проверить подозрительную комнату.",
            5: "Помощник дежурного спокойно спит.",
            6: "Ревнивый студент в порыве ревности ворвался в чью-то комнату.",
            7: "Лунатик отправился на ночную прогулку в известном только одному ему направлении.",
            8: "Неутомимый котик опять решил с кем-то поиграть.",
            9: "Вахтёр решил обеспечить кому-то из студентов алиби.",
            robbers: {
                msg: "[nick] хочет украсть подарок у студента [target]",
                self: "Похититель [nick] - альтруист.",
                his: "Похититель [nick] хочет украсть подарок у своего подельника. Как говорится, грабь награбленное!"
            }
        },
        morningInfo: {
            1: "Студент отлично выспался.",
            2: "Ночью [nick] - [role] - не сберег подарка.",
            3: "Глава похитителей запер на сутки игрока [nick] в своей комнате.",
            4: "Ночью дежурный проверил комнату игрока [nick]. Кем же оказался подозреваемый?",
            5: "Помощник дежурного всю ночь делал вид, что помогает дежурному.",
            6: "[role] [nick] попал под раздачу ревнивого студента.",
            7: "Всю ночь лунатик провел возле комнаты студента [nick].",
            8: "Из-за милого котика студент [nick] всю ночь не сомкнул глаз.",
            "4x": "Дежурный спугнул ночного гостя из комнаты студента [nick].",
            "7x": "Ночью лунатик лунатил не зря, не дав проникнуть злоумышленнику в комнату студента [nick].",
            "8x": "[role] - [nick], заигравшись с другом, не уберег своего подарка.",
            9: "[nick] получает иммунитет на следующие сутки.",
            "9x": "Студенту [nick] удалось сохранить свой подарок, благодаря полученному иммунитету.",
            lock: "Замок преградил путь ночному гостю в комнату одного из cтудентов",
            mylock: '<div class="green">Ваш замок был испорчен таинственным ночным посетителем!</div>'
        },
        periodStart: {
            1: "Наступила ночь. Студентам пора спать, тем временем похитители замышляют недоброе.",
            2: "Наступил день. Для студентов утро добрым не бывает...",
            3: "Последнее слово подозреваемому! Что же было на самом деле?",
            4: "Наступило время голосования! Пора принимать решение!"
        },
        mainvote: {
            simpleVote: '<span class="votemsg">[nick] подозревает в чём-то cтудента [target]</span>',
            no: "Сегодня студенты были очень нерешительны...",
            eq: "Сегодня студенты так и не определились...",
            protect: "Вахтёру удалось оправдать студента своими показаниями!",
            before: "Большинство игроков (из проголосовавших) считает, что [nick] причастен к похищениям подарков.",
            question: "Вы считаете, что cтудент [nick]<br/> способен на преступление?",
            "kick-yes": '[nick] считает, что во всем виноват <b class="nickname">[target]</b>',
            "kick-no": '[nick] думает, что <b class="nickname">[target]</b> не брал чужого',
            "result-sub": "<b>[YESVOTE]</b> проголосовал[YESs] за изгнание, <b>[NOVOTE]</b> посчитал[NOs], что cтудент обвинен напрасно.",
            "result-stat": "Результаты голосования: [count1] назвали подозреваемого преступником, [count0] посчитали, что [nick] не виноват.",
            result1: "[nick] - [role] - был признан виновным. Игра продолжится без него",
            result0: "[nick] был оправдан. Поздравляем."
        },
        itemUse: {
            5: "[nick] - [role] - не выдержал тяжелых студенческих будней и пустился во все тяжкие. А может просто жадность погубила?<br/>",
            cookieResult: {
                true: {
                    1: " почему-то не спала сегодня ночью. Может она принимала участие в краже?",
                    2: " почему-то не спал сегодня ночью. Может он принимал участие в краже?"
                },
                false: {
                    1: " сегодня отлично выспалась!",
                    2: " сегодня отлично выспался!"
                },
                no: {
                    1: " полакомилась своим печеньем",
                    2: " полакомился своим печеньем"
                }
            },
            cookie: {
                text: "Утром вы узнаете, [VERB] ли [nick] вашим угощением",
                verb1: "полакомилась",
                verb2: "полакомился"
            },
            cookieNo: "У Вас не осталось печенья :(",
            cookieNan: "Выберите игрока из списка, которому хотите подложить печенюшку",
            cookieDelete: "Ночью кто-то подбросил Вам печенье. К счастью, Вы утолили голод собственными запасами.",
            tour: "Утром борьба за подарки продолжится без вашего участия.",
            tourNo: "У Вас нет образца заявления на академический отпуск. Не получится написать его без ошибок :("
        },
        startText: "Борьба за праздник началась.",
        intuitionStart: 'В этой игре задача каждого участника - определить игрока с ролью противоположной стороны и проголосовать против него днем! Похитители голосуют против дежурного, его помощника и лунатика, а студенты - против похитителей.<br/> За каждую правильно угаданную роль игроки будут получать баллы: <blockquote>для студентов: <span class="hrobb"></span> - 3, <span class="robb"></span> - 2, <span class="law"></span> - 1, <span class="jeal"></span> - 1<br/> для похитителей: <span class="duty"></span> - 3, <span class="assis"></span> - 2, <span class="sleep"></span> - 2, <span class="jeal"></span> - 1 </blockquote>',
        newDuty: '<span class="important">Место дежурного занимает его помощник. Новый дежурный уж точно не оставит похитителям никаких шансов!</span>',
        bossChild: '<span class="important">Место главы похитителей занимает его незаконно рожденный ребенок!</span>',
        "bossChild-father": ", ваш отец возглавлял группу похитителей подарков. Теперь вы должны отомстить за него и сорвать праздник любви!",
        "bossChild-mother": ", ваша мать возглавляла группу похитителей подарков. Теперь вы должны отомстить за нее и сорвать праздник любви!",
        stealGift: "К сожалению, вы остались без подарка.",
        afterItem5: "С довольной ухмылкой Вы ушли в академический отпуск!",
        stat: "В игре осталось [students], [mans] и [robbers].",
        statCount: {
            "[students]": ["студент", "студента", "студентов"],
            "[robbers]": ["похититель", "похитителя", "похитителей"],
            "[mans]": ["ревнивый студент", "ревнивых студента", "ревнивых студентов"]
        },
        end: {
            studwin: "Победили cтуденты!",
            robwin: "Победили похитители",
            manwin: "Победила ревность",
            menwin: "Победили мальчики",
            womenwin: "Победили девочки",
            drawwin: "Победила дружба"
        },
        reward: {
            1: 'Даже простым студентом вы не теряете самообладания и жажды победы.<br/> За помощь в проведении праздника Дня Любви профком наградил вас <em>Активной ролью</em> на 1 час <div class="shop-item3"></div>',
            2: 'Вам это удалось!<br/> Вы успешно сорвали праздник, в благодарность Совет похитителей<br/> дарит вам прекрасную возможность отдохнуть в <em>Академическом отпуске</em> <div class="shop-item5"></div>',
            3: 'Вам это удалось!<br/> Вы успешно сорвали праздник, доказав, кто здесь главный.<br/> Теперь Вы можете отдохнуть в <em>Академическом отпуске</em> <div class="shop-item5"></div>',
            4: 'Прекрасная работа, дежурный!<br/> У похитителей не было шансов.<br/> Находить злоумышленников вдвое быстрее вам помогут вкусные <em>печеньки</em> <div class="shop-item4"></div>',
            5: 'Вы - отличный помощник дежурного!<br/> Без вас этот праздник Любви мог и не состояться.<br/> <em>Печеньки</em> помогут вам и в следующий раз отыскать похитителей <div class="shop-item4"></div>',
            6: 'Ваша несдержанность помогла студентам нарушить коварный замысел похитителей!<br/> Но в следующей игре постарайтесь держать свою ревность под <em>замком</em> <div class="shop-item2"></div>',
            7: 'Не зря вы не высыпались все эти дни!<br/> Праздник Любви состоится!<br/> Что об этом думают похитители?<br/> это вам подскажет чудо техники - <em>веб-камера</em>! <div class="shop-item1"></div>',
            8: 'Как иногда внешность бывает обманчива!<br/> Милому котику удалось остановить банду похитителей подарков.<br/> Чтобы их месть не настигла Вас, закройтесь на оба <em>замка</em> <div class="shop-item2">2</div>',
            9: 'Вам это удалось!<br/> Вы успешно сорвали праздник, в благодарность Совет похитителей<br/> дарит Вам тройку <em>замков</em> для вашей защиты <div class="shop-item2">3</div>'
        },
        items: {
            1: "Веб-камера в упаковке",
            2: "Замок в коробке",
            3: "Абонемент Активная роль на 1 час",
            4: "Пачка печенья",
            5: "Чистый бланк для академического отпуска",
            6: "Пропуск в Клуб ФФЛ на 1 день"
        }
    },
    maffia: {
        roleinfo: {
            0: "Вы - свидетель, поэтому не мешайте другим участникам.",
            1: "Вы - Честный гражданин!<br/> Вы выиграете, казнив всех мафиози. Днем с помощью кнопки <b>Голосовать</b> голосуйте против тех, кого подозреваете.",
            2: "Вы - Мафиози!<br/> Вы победите, убив всех граждан, а также маньяка. Ночью убивайте выбранную жертву с помощью кнопки <b>Убить</b>. Днем притворяйтесь гражданином и голосуйте против неугодных вам с помощью кнопки <b>Голосовать</b>.",
            3: "Вы - Босс мафии!<br/>  Вы победите, убив всех граждан, а также маньяка. Ночью кнопкой <b>Заморозить</b> Вы лишаете кого-то действий на сутки. И кнопкой <b>Убить</b> кого-то убивайте. Днем притворяйтесь гражданином и голосуйте против неугодных вам кнопкой <b>Голосовать</b>.",
            4: "Вы - Комиссар!<br/> Вы выиграете, если казните всех мафиози, проголосовав днем с помощью кнопки <b>Голосовать</b>. Ночью вы можете узнать роль персонажа с помощью кнопки <b>Проверить</b>.",
            5: "Вы - Сержант!<br/> Сотрудничайте с комиссаром. Вы выиграете, если казните всех мафиози, проголосовав днем с помощью кнопки <b>Голосовать</b>. Если комиссара убьют, его место займете Вы.",
            6: "Вы - Mаньяк!<br/> Вы выиграете, убив всех мафиози. Ночью с помощью кнопки <b>Убить</b> Вы расправляетесь с ненавистными персонажами. Днем голосуете против них с помощью кнопки <b>Голосовать</b>.",
            7: "Вы - Доктор!<br/> Вы выиграете, если казните всех мафиози, проголосовав днем с помощью кнопки <b>Голосовать</b>. Ночью с помощью кнопки <b>Лечить</b> Вы можете спасти одного из граждан.",
            8: "Вы - кот!<br/> Ночью вы можете лишить действий любого игрока, выбрав его объектом своих игр. Будьте осторожны, если он будет убит, вас ждет та же учесть. Вы выиграете, когда вся мафия будет уничтожена.",
            9: "Вы - адвокат!<br/> Вы играете на стороне мафии. Чтобы выиграть, постарайтесь найти членов мафии и с помощью кнопки <b>Защищать</b> спасти ее от расправы и возмездия жителей города.<br/> Помните, что Вы не можете обеспечить кому-то защиту на сутки 2 раза подряд.",
            10: "Вы - палач!<br/> Ваша задача на игру - предать казни свою жертву. Если &quot;жертва&quot; будет убита ночью или самостоятельно покинет игру - Вы проиграете."
        },
        nightActions: {
            1: "",
            2: "Один из мафиози выбрал гражданина для убийства.",
            3: "Босс мафии выбрал, кого заморозить.",
            4: "Комиссар выбрал, кому из граждан нанести визит. Надеемся, что он разоблачит мафиози или маньяка.",
            5: "",
            6: "Маньяк выбрал жертву. Ни сна ни отдыха измученной душе...",
            7: "Доктор выехал на вызов.",
            8: "Спокойно и вальяжно, как ему и подобает, кот направился к одному из граждан.",
            9: "Адвокат взял под свою защиту кого-то из граждан.",
            robbers: {
                msg: "[nick]: Надо убить [target]",
                self: "Мафиози [nick] - самоубийца.",
                his: "Бегемот [nick], зачем ты бьешь своего?"
            }
        },
        morningInfo: {
            1: "",
            2: "Ночью мафиози убили персонажа [nick] - [role].",
            3: "Ночью боссом мафии был заморожен на 1 сутки [nick]. Нам будет не хватать его мнения.",
            4: "Персонаж [nick] был проверен комиссаром. Кем же оказался проверяемый?",
            5: "",
            6: "Персонаж [nick] - [role] убит маньяком.",
            7: "Доктор посетил персонажа [nick]. Он оказался совершенно здоровым.",
            8: "Кот не давал спать всю ночь игроку [nick].",
            "4x": "Комиссар спугнул преступника, который хотел убить персонажа [nick].",
            "7x": "Ночью действиями реанимационной бригады был спасен от гибели персонаж [nick].",
            "8x": "Рядом с телом жертвы был обнаружен мёртвый [role] - [nick]",
            9: "[nick] благодаря своему адвокату получил неприкосновенность на следующие сутки.",
            "9x": "Благодаря адвокату и его работе [nick] сегодня остался жив.",
            lock: "В один из домов было произведено нелегальное проникновение. К счастью, персонажа спасла маскировка.",
            mylock: '<div class="green">Ваша маскировка была использована.</div>'
        },
        periodStart: {
            1: "Наступила ночь. Честные граждане спят. Всем остальным пора действовать.",
            2: "Наступил день. Честные граждане проснулись. Не дадим мафии прибрать к рукам наш город!",
            3: "Последнее слово - подозреваемому и его защитникам! А вы, уважаемые горожане, решайте - обвинить его или отпустить с миром. Будьте внимательны, подозреваемый может ввести вас в заблуждение!",
            4: "Наступило время голосования! Пора принимать решение!"
        },
        mainvote: {
            simpleVote: '<span class="votemsg">[nick] голосует против [target]</span>',
            no: "Сегодня горожане не нашли виновного...",
            eq: "Сегодня горожане так и не определились, кого следует казнить.",
            protect: "Адвокату удалось доказать невиновность своего подзащитного!",
            before: "[nick] подозревается в пособничестве мафии!",
            question: "Вы считаете, что [nick]<br/> нужно казнить?",
            "kick-yes": '[nick] считает, что <b class="nickname">[target]</b> следует казнить',
            "kick-no": '[nick] считает, что <b class="nickname">[target]</b> следует помиловать',
            "result-sub": "Казнить - <b>[YESVOTE]</b> голосов,  помиловать - <b>[NOVOTE]</b> голосов",
            "result-stat": "Результаты голосования: [count1] предложили казнить обвиняемого, [count0] посчитали, что [nick] должен быть оправдан.",
            result1: "Горожанами был казнен персонаж [nick] - [role].",
            result0: "Гражданин [nick] был оправдан."
        },
        itemUse: {
            5: "Ночью на машине покинул город [nick] - [role]. Осторожней на поворотах!<br/>",
            cookieResult: {
                true: {
                    1: " почему-то не спала сегодня ночью. Может она мафиози?",
                    2: " почему-то не спал сегодня ночью. Может он мафиози?"
                },
                false: {
                    1: " целую ночь провела дома.",
                    2: " целую ночь провел дома."
                },
                no: {
                    1: " смогла обнаружить Ваш жучок.",
                    2: " смог обнаружить Ваш жучок."
                }
            },
            cookie: {
                text: "Вы воспользовались жучком против [VERB] [nick]. Результат вы узнаете на следующее утро.",
                verb1: "синьоры",
                verb2: "синьора"
            },
            cookieNo: "Нет жучков",
            cookieNan: "Выберите игрока из списка, которому хотите подбросить жучок",
            cookieDelete: "Ночью Вам был подброшен жучок. К счастью, Вам удалось его обнаружить.",
            tour: "Утром вы покинете город на машине",
            tourNo: "У вас нет автомобиля"
        },
        startText: "Борьба за город началась.",
        intuitionStart: 'В этой игре задача каждого участника - определить игрока с ролью противоположной стороны и проголосовать против него днем! Мафиози голосуют против граждан, а мирные жители - против мафии.<br/> За каждую правильно угаданную роль игроки будут получать баллы: <blockquote>для мирных: <span class="hrobb"></span> - 3, <span class="robb"></span> - 2, <span class="law"></span> - 1, <span class="jeal"></span> - 1<br/> для мафии: <span class="duty"></span> - 3, <span class="assis"></span> - 2, <span class="sleep"></span> - 2, <span class="jeal"></span> - 1 </blockquote>',
        newDuty: '<span class="important">Место комиссара занял сержант. Мы верим в нашего нового комиссара!</span>',
        bossChild: '<span class="important">Место босса мафии занимает его внебрачный ребенок!</span>',
        "bossChild-father": ", ваш отец был боссом мафии и был убит. Теперь по мафиозному кодексу мафию города должны возглавить Вы.",
        "bossChild-mother": ", ваша мать была боссом мафии и была убита. Теперь по мафиозному кодексу мафию города должны возглавить Вы.",
        stealGift: "К сожалению, Вас убили.",
        afterItem5: "Вы покинули город на машине!",
        stat: "В игре осталось [students], [mans] и [robbers].",
        statCount: {
            "[students]": ["гражданин", "гражданина", "граждан"],
            "[robbers]": ["мафиози", "мафиози", "мафиози"],
            "[mans]": ["маньяк", "маньяка", "маньяков"]
        },
        end: {
            studwin: "Победили мирные граждане!",
            robwin: "Победила мафия!",
            manwin: "Победил маньяк!",
            menwin: "Мужчины показали, кто здесь главный!",
            womenwin: "Дамы были как всегда на высоте!",
            drawwin: "Ничья"
        },
        reward: {
            1: 'Вы порядочный гражданин, и городу повезло, что Вы живете в нем.<br/> Мэр города за ваше участие в борьбе с мафией наградил Вас <em>Активной ролью</em> на 1 час <div class="shop-item3"></div>',
            2: 'Мафия бессмертна!<br/> Вы в очередной раз это доказали,<br/> за это мафиозный клан подарил Вам <em>Автомобиль</em> <div class="shop-item5"></div>',
            3: 'Мафия бессмертна!<br/> В знак почтения члены клана преподнесли<br/> своему боссу новенький <em>Автомобиль</em> <div class="shop-item5"></div>',
            4: 'Городу повезло, что у него есть такой комиссар!<br/> Вам удалось сорвать коварные планы мафиозного клана по захвату города.<br/> Для борьбы с мафией используйте новейшие достижения технического прогресса. <div class="shop-item4"></div>',
            5: 'Славная работа, сержант!<br/> Город счастлив, что в полиции работают такие смелые люди.<br/> В вашем нелегком труде помогут <em>жучки</em>,<br/> которые сообщат Вам обо всех перемещениях злоумышленника <div class="shop-item4"></div>',
            6: 'Кто бы мог подумать?!<br/> Маньяк спас город от мафии.<br/> Однако, учитывая вашу репутацию, <em>маскировка</em> Вам не помешает <div class="shop-item2"></div>',
            7: 'За спасение жителей города от неминуемой смерти<br/> мэрия наградила Вас <em>личной рацией</em>, чтобы Вы всегда могли быстро прийти на выручку <div class="shop-item1"></div>',
            8: 'Мафии не удалось захватить город благодаря коту!<br/> Известие об этом быстро разнеслось по округе.<br/> Смелому животному пока лучше <em>замаскироваться</em>, да получше. <div class="shop-item2">2</div>',
            9: 'Благодаря Вам мафии удалось прибрать к рукам этот город!<br/> Помимо гонорара Вам пригодятся эти <em>маскировочные костюмы</em>, чтобы скрыться от правосудия. <div class="shop-item2">3</div>'
        },
        items: {
            1: "Рация в коробке",
            2: "Маскировочный набор",
            3: "Абонемент Активная роль на 1 час",
            4: "Жучок в упаковке",
            5: "Сертификат на покупку автомобиля",
            6: "Пропуск в Клуб Мафии на 1 день"
        }
    },
    all: {
        bonus: {
            intuit: '<div class="red">Интуиция подсказывает Вам, что [nick] - [role]!</div>',
            nokill: "[nick] использовал бонус бессмертия и остался в игре!",
            rev: "Бонус светлого кольца наделяет Вас новой ролью - [role]",
            poh: "Бонус тёмного кольца наделяет Вас новой ролью - [role]"
        },
        "startText-sex": "В принципиальном поединке сошлись 2 непримиримых соперника: добро и зло, свет и тьма... И сторону здесь никто не выбирает.",
        sex1: "Чтобы победить в Битве Полов, нужно расправиться со всей мужской половиной игроков.",
        sex2: "Если хотите выиграть в Битве Полов, нужно дружно мужским коллективом выбить из игры всю прекрасную половину.",
        rewardToy: "За проявленные успехи в игровой партии вы получаете замечательную новогоднюю игрушку!",
        snowflake: "В этой суматохе Ваше внимание неожиданно привлекла прекрасная снежинка, которую в новогодние праздники можно будет обменять на подарки!",
        greenVote: "[nick] подмигивает игроку [target]",
        intuitVote: "Кто-то бросил косой взгляд в сторону одного из присутствующих",
        leave1: "вышла из себя и из игры",
        leave2: "вышел из себя и из игры",
        zayavka: 'Играй чаще за роли <span class="robb"></span>, <span class="duty"></span> или <span class="jeal"></span> с помощью услуги Активная роль (ищи её в магазине)!'
    }
}, periodNames = {
    1: "Ночь",
    2: "День",
    3: "Вечер",
    4: "Голосование"
}, startHours = {
    1: 21,
    2: 9,
    3: 17,
    4: 19
}, lastKickVote = 0, game = {
    active: !1,
    closed: !1,
    finish: !1,
    style: {},
    botwall: !1,
    day: 0,
    period: 1,
    time: {
        h: 21,
        m: 0
    },
    role: 1,
    item2: 0,
    actions: [],
    kickVotes: {
        yes: 0,
        no: 0
    },
    hisvote: {},
    votes: {}
}, replaceLogins = {}, randomNicks = ["Аберто", "Авада Кедавра", "Авис", "Авифорс", "Агуаменти", "Адское пламя", "Аква Эрукто", "Акцио", "Аларте Аскендаре", "Алохомора", "Анапнео", "Апарекиум", "Араниа экзэми", "Аресто моментум", "Асцендио", "Баубиллиус ", "Бомбардо", "Бомбардо Максима", "Брахиабиндо", "Брахиам Эмендо", "Ваддивази", "Вердимилиус", "Верминкулюс", "Веселящие чары", "Взрывающее заклятие", "Вингардиум Левиоса", "Випера Эванеско", "Воздвигнись", "Вомитаре Виридис", "Воющие чары", "Вспыхни", "Вулнера санентур", "Гармония Нектере Пасус", "Гербивикус", "Гибель воров", "Глаз крысы, струна арфы, пусть вода превратится в ром", "Глиссео", "Глациус", "Гоменум ревелио", "Гомункуловы чары", "Губрайтов огонь", "Даклифорс", "Дантисимус", "Дезиллюминационное заклинание", "Делетриус", "Депримо", "Депульсо", "Десцендо", "Дефодио", "Джеминио", "Диминуендо", "Диссендиум", "Диффиндо", "Драконифорс", "Дуро", "Жалящее заклинание", "Ешь слизней", "Заклинание вечного приклеивания", "Заклинание головного пузыря", "Заклинание для очистки картофеля", "Заклинание замедленного падения", "Заклинание заметания следов", "Заклинание невидимого хлыста", "Заклятие ненаносимости", "Заклятие Неразбиваемости", "Заклинание Обращения", "Заклинание открытия дверей", "Заклинание пальцекусания", "Заклятие Пылающей руки", "Заклинание против списывания", "Заклинание роста ногтей на ногах", "Запирающие заклинания", "Затмись", "Зелёные искры", "Зелёное специальное заклинание", "Иммобулюс", "Импедимента", "Импервиус", "Империус", "Инаниматус Коньюрус", "Инкарцеро", "Инсендио", "Инфлэтус", "Информус", "Инкарсифорс", "Каве инимикум", "Калворио", "Кантис", "Капациус экстремис", "Карпе Ретрактум", "Квиетус", "Кишечно-опорожнительное заклятие", "Коллопортус", "Коллошио", "Колорум", "Конфундус", "Коньюнктивитус", "Круциатус", "Лакарнум Инфламаре", "Лапифорс", "Левикорпус", "Левиосо", "Легилименс", "Летучемышиный сглаз", "Либеракорпус", "Локомотор", "Пиертотум Локомотор", "Локомотор Мортис", "Локомотор Виббли", "Люмос", "Люмос Максима", "Люмос Солем", "Люмос Дуо", "Магикус экстримус", "Мелофорс", "Метео реканто", "Мимбл Вимбл", "Мобилиарбус", "Мобиликорпус", "Морсмордре", "Мукус Ад Нозем", "Мутацио Скулус", "Направление", "Нокс", "Обезъяз", "Облегчающие чары", "Обливиэйт", "Оглохни", "Оживи", "Окулус Репаро", "Оппуньо", "Орбис", "Орхидеус", "Остолбеней", "Остолбеней Дуо", "Остолбеней Триа", "Отключись", "Партис Темпорус", "Парящие чары", "Патентованные чары — грёзы наяву", "Перрикуллум", "Петрификус Тоталус", "Пескипикси Пестерноми", "Портоберто", "Портус", "Приори Инкантатем", "Проклятие воришки", "Протеевы чары", "Протего", "Протего Дуо", "Протего максима", "Протего тоталум", "Протего хоррибилис", "Пуллус", "Пэк", "Ревелио", "Редактум Скулус", "Редукто", "Редуцио", "Релашио", "Репарифарго", "Репаро", "Репелло Инимикум", "Репелло маглетум", "Ридикулус", "Риктусемпра", "Сальвио гексиа", "Сезам откройся", "Сектумсемпра", "Серпенсортиа", "Силенцио", "Синие искры", "Систем Аперио", "Сито из котла", "Скрибблифорс", "Скурж", "Снаффлифорс", "Сонорус", "Соппоро", "Спанджифай", "Стилклоу", "Таранталлегра", "Тергео", "Титилландо", "Тормозящие чары Хортона-Кейтча", "Трансмогрифианская Пытка", "Фианто Дури", "Финита", "Фините Инкантатем", "Фенестрам", "Фера Верто", "Ферула", "Флагрейт", "Флиппендо", "Флиппендо Дуо", "Флиппендо Триа", "Фульгари", "Фумос", "Фумос Дуо", "Фурункулус", "Хватательное заклинание", "Хербифорс", "Чары высушивания", "Чары подчинения", "Чары рессорной подушки", "Эбублио", "Эванеско", "Эверте Статум", "Экскуро", "Экспекто патронум", "Экспеллиармус", "Экспеллимеллиус", "Эктоматис", "Экспульсо", "Эманципаре", "Энгоргио", "Энгоргио Скулус", "Энтоморфиум", "Эпискеи", "Ябеда"], showTime = function() {
    var e = game.time.h
      , a = game.time.m;
    e = e < 10 ? "0" + e : e,
    a = a < 10 ? "0" + a : a,
    $("#gametime").html(e + ":" + a)
}, truncate = function(e, a) {
    return e && e.length > a ? e.substring(0, a) + "…" : e
}, addVote = function(e, a) {
    var t = $("#" + e);
    if (t) {
        var i = parseInt(t.find("b").html()) || 0
          , n = a ? i + 1 : i - 1;
        t.find("b").html(n.toString())
    }
};
function editPlayer(e, a) {
    if (playersList.find("#" + e._id).remove(),
    a)
        playersInfoArray[e._id] && (playersInfoArray[e._id].killed = !0);
    else {
        playersInfoArray[e._id] = e;
        var t = $('<div id="' + e._id + '"><b></b>' + (e.role ? truncate(e.login, 10) : e.login) + (e.role ? '<span class="visiblerole"> - <i class="' + roles(e.role).icon + '"></i></span>' : "") + "</div>");
        t.attr("data-nick", e.login),
        e.bot && t.addClass("bot"),
        game.style.style && 4 === game.style.style && e.sex && t.addClass("sex" + e.sex),
        t.appendTo("#players"),
        game.intuition || (t.mouseenter(function() {
            return showPlayerInfo(!0, $(this).attr("id")),
            !1
        }).mouseleave(function() {
            return showPlayerInfo(!1),
            !1
        }),
        u.friends && -1 < u.friends.indexOf(e._id) && t.addClass("green"),
        -1 < reds.indexOf(e._id) && t.addClass("red"))
    }
    aside.find(".blocktitle").html(" (" + playersList.find("div").length.toString() + ")")
}
function changeAction() {
    var e = "";
    0 < game.actions.length && (e = game.actions.shift()),
    actionButton.html(e)
}
game.isRobber = function(e) {
    return 2 === e || 3 === e
}
,
game.setRole = function(e) {
    game.intuition && playersInfoArray[e.id] && (e.login = playersInfoArray[e.id].login),
    playersList.find("#" + e.id).html("<b></b>" + (e.role ? truncate(e.login, 10) : e.login) + (e.role ? '<span class="visiblerole"> - <i class="' + roles(e.role).icon + '"></i></span>' : "")),
    playersInfoArray[e.id] && (playersInfoArray[e.id].role = e.role)
}
,
game.writeText = function(e, a, t, i) {
    var n = document.createElement("div")
      , s = document.createElement("div")
      , o = document.createElement("div");
    if (o.className = "message",
    a) {
        if ("anonim" === a)
            o.className += " gamemsg";
        else if ("radio" === a)
            o.className += " poh-radio";
        else if (a.role)
            o.className += " roleicon roleicon" + a.role;
        else if (a.bonus)
            o.className += " roleicon bonusicon-" + a.bonus;
        else if (a.id || (a.id = a._id),
        !a.image && playersInfoArray[a.id] && (a.sex = playersInfoArray[a.id].sex,
        a.image = playersInfoArray[a.id].image),
        game.intuition && (a.image = !1),
        a.image)
            if (2 < a.image.length) {
                o.className += " userimage";
                var l = document.createElement("div");
                l.className = "selfimg",
                l.style.backgroundImage = "url(/files/" + a.id + a.image + ")",
                o.appendChild(l)
            } else {
                var r = 1 === a.sex ? "w" : "m";
                r = a.image ? r + a.image : "",
                o.className += " " + r
            }
    } else
        o.className += " noimage";
    n.innerHTML = "",
    i || (e = roleReplace(e)),
    s.innerHTML = t ? '<div class="delimiter"></div><div class="important">' + e + '</div><div class="delimiter"></div>' : e,
    o.appendChild(n),
    o.appendChild(s),
    messagesDOM.appendChild(o),
    doScroll()
}
,
game.event = function(n, e, a) {
    var s = " " + function(e, a) {
        var t = {}
          , i = a.split(":");
        if ("all" === i[0] && (i.shift(),
        e = roleText.all),
        1 < i.length) {
            t = e;
            for (var n = 0; n < i.length; n++)
                t = t[i[n]]
        } else
            t = e[i.shift()];
        return t
    }(roleText[gameMode()], n.text);
    switch (n.p && (game.intuition && n.p.id && playersInfoArray[n.p.id] && (n.p.nick = playersInfoArray[n.p.id].login),
    s = s.replace("[nick]", '<b class="nickname"' + (n.p.id ? ' data-id="' + n.p.id + '"' : "") + ">" + n.p.nick + "</b>")),
    n.replacedata && (n.replacedata["[mans]"] ? n.replacedata["[mans]"] === n.replacedata["[students]"] ? s = s.replace("[students],", "") : n.replacedata["[students]"] -= n.replacedata["[mans]"] : s = s.replace(", [mans]", ""),
    Object.forEach(n.replacedata, function(e, a) {
        if ("[ROLE2]" === e && (e = roles(2).name),
        "stat" === n.text) {
            var t = roleText[gameMode()].statCount[a];
            s = s.replace(a, f.someThing(e, t[0], t[1], t[2]))
        } else if (s = "[role]" === a ? s.replace(a, roleReplace(roles(e).name)) : s.replace(a, e),
        game.active && "mainvote:result1" === n.text && "[role]" === a && lastKickVote) {
            var i = 2 === e || 3 === e || game.man && 6 === e;
            showNewDiv("<blockquote>" + (i && 1 === lastKickVote || !i && 2 === lastKickVote ? "Вы были правы!" : "Вы ошиблись...") + "</blockquote>")
        }
    })),
    n.text) {
    case "nightActions:2":
        sound("role2", !0),
        e = {
            role: 2
        };
        break;
    case "nightActions:3":
        sound("role3", !0),
        e = {
            role: 3
        };
        break;
    case "nightActions:4":
        sound("role4", !0),
        e = {
            role: 4
        };
        break;
    case "nightActions:6":
        sound("role6", !0),
        e = {
            role: 6
        };
        break;
    case "nightActions:7":
        sound("role7", !0),
        e = {
            role: 7
        };
        break;
    case "nightActions:8":
        sound("role8", !0),
        e = {
            role: 8
        };
        break;
    case "nightActions:9":
        sound("role9", !0),
        e = {
            role: 9
        };
        break;
    case "all:bonus:intuit":
        e = {
            bonus: "intuit"
        };
        break;
    case "all:bonus:nokill":
        e = {
            bonus: "nokill"
        };
        break;
    case "all:bonus:rev":
        e = {
            bonus: "rev"
        };
        break;
    case "all:bonus:poh":
        e = {
            bonus: "poh"
        }
    }
    return a ? s : (game.writeText('<div class="periodMsg"> ' + s + " </div>", e, !1, !0),
    !0)
}
,
game.kick = function(e) {
    lastKickVote = e ? 1 : 2,
    sendToSocket({
        type: "kick",
        iskick: e
    })
}
,
game.showPlaylist = function(e) {
    playersInfoArray = {},
    playersList.empty(),
    Object.forEach(e, function(e) {
        editPlayer(e, !1)
    }),
    container.removeClass("closedgame").addClass("current");
    var a = [];
    playersList.find("div").each(function() {
        var e = [$(this).html(), $(this)];
        a.push(e)
    }),
    a.sort(plSort),
    a.forEach(function(e) {
        playersList.append(e[1])
    })
}
,
game.updateInfoGame = function(e) {
    var a = u.login;
    if (a += $("div").is(".nickblock") ? "<br/>" : " - ",
    a += '<span class="rolesmile role' + game.role + '"></span>' + roles(game.role).name,
    $("#nick").html(a),
    $(".gamemakerinfo").html("<span>День " + game.day + "</span> ➣ <span>" + periodNames[game.period] + '</span> <span id="gametime"></span>').removeAttr("title"),
    showTime(),
    4 === game.period && (lastKickVote = 0),
    game.active && !game.closed) {
        switch (game.period) {
        case 1:
            mW.hide(),
            game.actions = roles(game.role).button.slice();
            break;
        case 2:
            game.actions = ["Голосовать", "Переголосовать"];
            break;
        case 3:
            game.actions = [];
            break;
        case 4:
            game.actions = [],
            e && modalWindow(e, function() {
                game.kick(!0)
            }, function() {
                game.kick(!1)
            })
        }
        changeAction()
    } else
        actionButton.empty();
    0 < game.role && 3 !== game.period && game.setRole({
        id: u._id,
        login: u.login,
        role: game.role
    })
}
;
var sortPoints = function(e) {
    var t = [];
    return Object.forEach(e, function(e, a) {
        t.push({
            id: a,
            points: e
        })
    }),
    t.sort(function(e, a) {
        return a.points - e.points
    }),
    t
};
game.setPeriod = function(a) {
    if (a.resultInfo) {
        if (a.resultInfo.points && a.resultInfo.logins) {
            var t = "Набрано баллов:<br/>";
            sortPoints(a.resultInfo.points).forEach(function(e) {
                a.resultInfo.logins[e.id] && (t += '<b class="nickname" data-id="' + e.id + '">' + a.resultInfo.logins[e.id] + "</b> - " + e.points + " , ")
            }),
            game.writeText(t.substring(0, t.length - 2), !1, !0)
        }
    } else {
        playersList.find("div").removeClass("voted"),
        2 === a.period ? sound("day", !0) : 1 === a.period ? sound("night", !0) : sound("notify", !0),
        3 !== a.period && playersList.find("b").empty(),
        game.day = a.day,
        game.period = a.period,
        game.time = {
            h: startHours[game.period],
            m: 0
        },
        game.hisvote = {},
        game.votes = {};
        var e = "";
        if (a.msgArray && 0 < a.msgArray.length) {
            var i = a.msgArray;
            if (4 === game.period)
                e = i[0] !== u._id && game.event(i[1], !1, !0);
            else {
                var n = "";
                i.forEach(function(e) {
                    n += game.event(e, !1, !0) + "<br/>"
                }),
                game.writeText(n, !1, 2 === game.period, !0)
            }
        }
        if (a.addInfo) {
            if (a.addInfo.roles) {
                var s = "";
                Object.forEach(a.addInfo.roles, function(e, a) {
                    s += '<b class="nickname" data-id="' + a + '">' + playersInfoArray[a].login + "</b> - " + roles(e).name + " , "
                }),
                game.writeText(s.substring(0, s.length - 2), !1, !0)
            }
            if (a.addInfo.points) {
                var o = "Набрано баллов:<br/>";
                if (sortPoints(a.addInfo.points).forEach(function(e) {
                    playersInfoArray[e.id] && (o += '<b class="nickname" data-id="' + e.id + '">' + (game.intuition ? replaceLogins[e.id] : playersInfoArray[e.id].login) + "</b> - " + e.points + " , ")
                }),
                game.writeText(o.substring(0, o.length - 2), !1, !0),
                game.intuition) {
                    var l = randomNicks.slice(0);
                    l.shuffle(),
                    playersList.empty(),
                    Object.forEach(playersInfoArray, function(e, a) {
                        e.login = l.shift(),
                        delete e.role,
                        playersInfoArray[a].killed || editPlayer(e, !1)
                    });
                    var r = [];
                    playersList.find("div").each(function() {
                        var e = [$(this).html(), $(this)];
                        r.push(e)
                    }),
                    r.sort(plSort),
                    r.forEach(function(e) {
                        playersList.append(e[1])
                    })
                }
            }
        }
        switch (game.period) {
        case 1:
            game.kickVotes = {
                yes: 0,
                no: 0
            },
            container.addClass("nightPeriod"),
            game.active && helper.hint("night" + game.role);
            break;
        case 2:
            game.closed = !(!a.closed || a.closed !== u._id),
            container.removeClass("nightPeriod"),
            game.active && helper.hint("day-side" + (game.isRobber(game.role) ? "2" : "1"));
            break;
        case 3:
            game.active && helper.hint(a.msgArray && a.msgArray[0] && a.msgArray[0].p && a.msgArray[0].p.id && a.msgArray[0].p.id === u._id ? "voteme" : "vote")
        }
        a.del && 0 < a.del.length && a.del.forEach(function(e) {
            editPlayer({
                _id: e
            }, !0)
        }),
        game.updateInfoGame(e),
        game.writeText('<div class="delimiter"></div><div class="periodMsg">' + roleText[gameMode()].periodStart[game.period] + '</div><div class="delimiter"></div> '),
        a.banks && game.recalculateBanks(a.banks)
    }
}
,
game.setTime = function() {
    game.time.m += game.botwall || game.fast ? 10 : 5,
    59 < game.time.m && (game.time.m = 0,
    game.time.h += 1),
    23 < game.time.h && (game.time.h = 0),
    showTime()
}
,
game.action = function() {
    if (game.active && actionButton.html())
        if (playersList.find("div").is(".select")) {
            var e = playersList.find("div.select");
            if ("testgame" === room) {
                var a = e.attr("id");
                return game.vote({
                    target: helper.helpGamePlayers[a]._id,
                    from: helper.helpGamePlayerIL(0),
                    targetLogin: helper.helpGamePlayers[a].login
                }),
                changeAction(),
                void sound("click", !0)
            }
            1 === game.period ? modalWindow("Уверены, что хотите это сделать?", function() {
                sendToSocket({
                    type: "game-action",
                    target: e.attr("id")
                }),
                changeAction()
            }) : (sendToSocket({
                type: "game-action",
                target: e.attr("id")
            }),
            changeAction()),
            sound("click", !0)
        } else
            showMessage("Сначала необходимо выбрать в списке одного из участников партии")
}
,
game.vote = function(e) {
    if (!(2 < game.period)) {
        if (game.votes[e.target] || (game.votes[e.target] = []),
        game.intuition && (playersInfoArray[e.from.id] && (e.from.login = playersInfoArray[e.from.id].login),
        e.target && playersInfoArray[e.target] && (e.targetLogin = playersInfoArray[e.target].login,
        e.event && e.event.replacedata && (e.event.replacedata["[target]"] = e.targetLogin))),
        game.votes[e.target].push(e.from.login),
        game.hisvote[e.from.id] = e.targetLogin,
        e.oldTarget && (addVote(e.oldTarget, !1),
        game.votes[e.oldTarget])) {
            var a = game.votes[e.oldTarget];
            a.splice(a.indexOf(e.from.login), 1)
        }
        addVote(e.target, !0),
        e.event ? game.event(e.event, e.from || "anonim") : (e.event = game.special ? {
            text: "all:greenVote"
        } : {
            text: "mainvote:simpleVote"
        },
        e.event.replacedata = {
            "[nick]": '<b class="nickname"' + (e.from.id ? ' data-id="' + e.from.id + '"' : "") + ">" + e.from.login + "</b>",
            "[target]": '<b class="nickname" data-id="' + e.target + '">' + e.targetLogin + "</b>"
        },
        game.intuition && (e.event = {
            text: "all:intuitVote"
        }),
        game.writeText(game.event(e.event, !1, !0), e.from)),
        e.from && e.from.id && !game.intuition && $("#" + e.from.id).addClass("voted")
    }
}
,
game.kickVote = function(e) {
    "1" === e.kick ? game.kickVotes.yes++ : game.kickVotes.no++;
    var a = game.event({
        text: "mainvote:result-sub",
        replacedata: {
            "[YESVOTE]": game.kickVotes.yes,
            "[NOVOTE]": game.kickVotes.no,
            "[YESs]": 1 === game.kickVotes.yes ? "" : "и",
            "[NOs]": 1 === game.kickVotes.no ? "" : "и"
        }
    }, !1, !0);
    game.writeText('<span class="important">' + game.event(e.event, !1, !0) + "</span><br/>" + a, e.event.p)
}
;
var finalMsg = function(t, e) {
    actionButton.empty();
    var i = ""
      , n = ""
      , a = t.item5 ? "afterItem5" : "stealGift";
    if (t.winners ? i += "Победа оказалась на стороне: <br><b>" + t.winners.join("</b><br/><b>") + "</b>" : i += t.event ? game.event(t.event, !1, !0) : roleText[gameMode()][a],
    i += "<br/> ",
    game.role && (t.days && (i += (e ? "Партия длилась " : "Вы продержались ") + f.someThing(t.days, "день", "дня", "дней") + "<br/> "),
    t.money && (i += 'Вы получили <span class="gamemoney">' + f.over1000(t.money) + "</span><br/> "),
    t.rate && (i += "<b>Рейтинг +" + t.rate + "</b><br/> ")),
    t.points ? (i += "<strong>Итоговые баллы:</strong> <blockquote>",
    sortPoints(t.points).forEach(function(e) {
        i += e.id + " - " + e.points + "<br/>"
    }),
    i += "</blockquote>") : t.roles && (i += "<strong>Роли исполняли:</strong> <blockquote>",
    t.roles.forEach(function(e, a) {
        "finish" === e ? a < t.roles.length - 1 && (i += "<b>Изменившиеся роли:</b><br/>") : (i += e[1] + " - " + roles(e[0]).name + "<br/>",
        n += e[1] + "-" + roles(e[0]).name + ",")
    }),
    i += "</blockquote>"),
    t.win) {
        sound("win", !0);
        var s = isMaffia ? "maffia/tickets/" + game.role + ".png" : "tickets/" + game.role + ".jpg";
        isAppVK || (i += '<a class="button share" target="_target" title="Поделиться с друзьями ВКонтакте" href="' + getGameUrl(!0) + "&amp;title=Мне удалось заработать " + f.over1000(t.money) + " за " + f.someThing(t.days, "день", "дня", "дней") + "!&amp;description=" + u.login + " в игре " + header.attr("data-name") + "!%0AВ игре принимали участие: " + n + "&amp;image=" + currentDomainUrl() + "/images/" + s + '&amp;noparse=true">Сохранить игру</a><br/>')
    }
    return i += e ? "" : "Хотите досмотреть игру до конца?"
};
game.killed = function(e) {
    game.active = !1,
    modalWindow(finalMsg(e, !1), function() {
        container.addClass("nogift")
    }, goToRoom)
}
,
game.newRole = function(e) {
    if (e.role) {
        if (game.role = e.role,
        e.bonus && game.event({
            text: "all:bonus:" + e.bonus,
            replacedata: {
                "[role]": e.role
            }
        }, !1),
        alarm("Теперь ты - " + roles(e.role).name + "!"),
        e.child) {
            var a = playersInfoArray[e.child] && 1 === playersInfoArray[e.child].sex ? "mother" : "father";
            game.writeText(u.login + roleText[gameMode()]["bossChild-" + a], !1, !0)
        }
        e.hasOwnProperty("bonus") && !e.bonus && (playersList.find(".visiblerole").remove(),
        Object.forEach(playersInfoArray, function(e, a) {
            a !== u._id && delete e.role
        })),
        e.roles && Object.forEach(e.roles, function(e, a) {
            game.setRole({
                id: a,
                login: playersInfoArray[a].login,
                role: e
            })
        }),
        game.updateInfoGame()
    }
}
;
var checksList = function(e) {
    var a = "";
    return Object.forEach(e, function(e) {
        a && (a += ", "),
        a += e[1] + " - " + roles(e[0]).name
    }),
    a
};
game.dejInfo = function(e) {
    var a = "Я - " + roles(e.role).name + "!";
    e.checks && 0 < Object.size(e.checks) && (a += " Мне стало известно, что " + checksList(e.checks) + " !");
    var t = {
        id: e.id,
        login: playersInfoArray[e.id].login,
        sex: playersInfoArray[e.id].sex,
        image: playersInfoArray[e.id].image,
        color: "#f00"
    };
    setTimeout(function() {
        showNewMessage({
            type: "message",
            message: a,
            msgType: "private",
            from: t,
            to: u._id,
            toName: u.login
        })
    }, 2e3)
}
;
var animateNumber = function(e, a, t) {
    var i;
    "gamemoney" === e ? (i = gamemoney,
    gamemoney.html() && gamemoney.html() !== f.over1000(a) && sound("money")) : i = $("#" + e),
    i.animate({
        num: a
    }, {
        duration: 2e3,
        step: function(e) {
            this.innerHTML = t ? f.over1000(e.toFixed()) : e.toFixed()
        }
    })
};
function getStatForRole(e, a) {
    var t = 0;
    return a < 10 ? (e[textRoles[a] + "0"] && (t += e[textRoles[a] + "0"]),
    e[textRoles[a] + "1"] && (t += e[textRoles[a] + "1"])) : e.roles && (e.roles[a][0] && (t += e.roles[a][0]),
    e.roles[a][1] && (t += e.roles[a][1])),
    t
}
function updateGameitems() {
    [1, 2, 4, 5].forEach(function(e) {
        var a = parseInt(game.items[e])
          , t = $("div.gameitem" + e + ">b", itemPanel);
        t.removeClass(),
        (!u["item" + e] || u["item" + e] < 0) && (u["item" + e] = 0);
        var i = 2 === e ? game.item2 : u["item" + e]
          , n = 2 === e ? game.item2limit : items["g" + e];
        i || t.addClass("noitem"),
        t.html(i + "/" + (n <= a ? "0" : (n - a).toString()))
    })
}
function doItem(e) {
    if (e)
        if (game.active) {
            if (game.style.style2)
                showMessage("Игра без предметов");
            else if (u["item" + e])
                switch (e) {
                case 4:
                    var a = playersList.find("div.select").attr("id");
                    a ? 0 < u.item4 ? sendToSocket({
                        type: "gameitem",
                        item: e,
                        target: a
                    }) : showMessage(roleText[gameMode()].itemUse.cookieNo) : showMessage(roleText[gameMode()].itemUse.cookieNan);
                    break;
                case 5:
                    0 < u.item5 ? modalWindow("Воспользовавшись этим предметом вы покинете игру, забрав с собой часть игрового банка. Хотите продолжить?", function() {
                        sendToSocket({
                            type: "gameitem",
                            item: e
                        })
                    }) : showMessage(roleText[gameMode()].itemUse.tourNo)
                }
        } else
            showMessage("Для Вас эта игровая партия уже завершена. Вы не можете повлиять на нее.")
}
function buyItem(e) {
    e && -1 < ["1", "2", "4", "5"].indexOf(e) && sendToSocket({
        type: "buy",
        item: e,
        money: 1
    })
}
game.recalculateBanks = function(e) {
    e && (animateNumber("studBank", e[0] || 0),
    animateNumber("robbBank", e[1] || 0),
    animateNumber("allBank", e[2] || 0),
    animateNumber("winBank", e[3] || 0))
}
,
game.start = function(a) {
    if (hideTickets(),
    messagesList.empty(),
    document.getElementById("playersButton").className = "my",
    mW.hide(),
    closewindow(),
    "undefined" != typeof specialDay) {
        if ("february23" === specialDay) {
            var e = f.randomInt(13)
              , t = "jpg";
            10 < e ? (e -= 10,
            t = "gif") : 10 === e && (t = "png"),
            showWall("february23/" + e + "." + t)
        }
        "march8" === specialDay && showWall("/images/holidays/march8/back.jpg", {
            external: !0
        })
    } else
        a.married ? showWall(a.role ? "wedding" + (2 === a.role ? "2" : "1") + ".jpg" : "0.gif") : showWall(getRoleWallpaper(a.role));
    game.active = !0,
    game.closed = !1,
    game.finish = !1,
    game.day = 0,
    game.period = 1,
    game.count = a.count,
    game.botwall = a.botwall,
    game.fast = a.fast,
    game.special = a.special,
    game.man = a.man,
    game.intuition = a.intuition,
    game.hisvote = {},
    game.votes = {},
    game.kickVotes = {
        yes: 0,
        no: 0
    },
    game.style = a.gamestyle,
    game.items = {
        1: u.item1,
        2: u.item2,
        4: u.item4,
        5: u.item5
    },
    game.item2limit = u.item2 && 2 < u.item2 ? 3 : 2,
    itemPanel.removeClass(),
    itemPanel.find("div").removeClass("itemoff");
    var i = ""
      , n = "";
    if (a.caption && (i = a.caption),
    a.gameinfo && (room = a.gameinfo._id,
    game.count = a.gameinfo.count,
    closedgame = 2 === a.gameinfo.style,
    gametitle.html("<span>" + gameStyle[a.gameinfo.style] + " на " + a.gameinfo.count + " игроков</span>"),
    showPlayersList({}, room),
    a.banks = a.gameinfo.banks,
    game.day = a.gameinfo.day,
    game.period = a.gameinfo.period,
    game.botwall = a.gameinfo.botwall,
    game.fast = a.gameinfo.fast,
    game.special = a.gameinfo.special,
    game.style.style2 = !0,
    game.active = !1,
    game.time = {
        h: startHours[game.period],
        m: 0
    },
    header.find(".gamestyle").find("span").each(function(e) {
        $(this).removeClass(),
        a.gameinfo["style" + (e + 1).toString()] && $(this).addClass("enabledoption")
    }),
    game.intuition = a.gameinfo.intuition),
    game.style.style2 && itemPanel.addClass("noactive"),
    a.params && (a.params.noitem4 && itemPanel.find(".gameitem4").addClass("itemoff"),
    a.params.hasOwnProperty("item2") && (game.item2limit = a.params.item2,
    0 === game.item2limit && itemPanel.find(".gameitem2").addClass("itemoff"))),
    game.item2 = u.item2 ? u.item2 > game.item2limit ? game.item2limit : u.item2 : 0,
    game.intuition && a.players) {
        var s = randomNicks.slice(0);
        s.shuffle(),
        replaceLogins = {},
        Object.forEach(a.players, function(e, a) {
            replaceLogins[a] = e.login,
            e.login = s.shift()
        })
    }
    if (game.role = a.role,
    game.updateInfoGame(),
    gametitle.html("<span>" + (game.count ? gameTypeInfo(game) : gametitle.find("span").eq(0).html()) + '</span> <span id="studBank" data-title="Банк студентов|Банк граждан"></span> <span id="robbBank" data-title="Банк похитителей|Банк мафии"></span> <span id="allBank" data-title="Общий банк"></span> <span id="winBank" data-title="Банк победы"></span>'),
    game.recalculateBanks(a.banks),
    a.married ? n += "Занимайте места поудобнее. Свадебная церемония начнется днем..." : a.intuition ? n += '<div class="important">' + roleText[gameMode()].intuitionStart + " Победа в этой партии ждет Вас через " + f.someThing(a.intuition, "день", "дня", "дней") + "!</div>" : (n += '<div class="startText">',
    n += 4 === game.style.style ? roleText.all["startText-sex"] : roleText[gameMode()].startText,
    n += '</div><div class="message noimage">',
    n += 4 === game.style.style ? roleText.all["sex" + u.sex] : roleText[gameMode()].roleinfo[game.role],
    n += "</div>"),
    game.man && (n += '<div class="important">Внимание! В этой партии ' + roles(6).name + " играет сам за себя!</div>"),
    ("пб" === i.substring(0, 2).toLowerCase() || game.botwall) && (n += '<div class="important">Внимание! Это партия против ботов!</div>'),
    isMaffia || $("#gift").show(),
    updateGameitems(),
    a.roles) {
        var o = "В этой партии присутствуют следующие роли: ";
        a.roles.forEach(function(e) {
            o += '<span class="rolesmile role' + e + '"></span>'
        }),
        n += "<div>" + o + "</div"
    }
    if (u.invite && playersInfoArray[u.invite] && (n += '<div class="red">В этой партии находится ваш наставник - <b data-id="' + u.invite + '">' + playersInfoArray[u.invite].login + "</b></div>"),
    u.invited) {
        var l = [];
        Object.forEach(playersInfoArray, function(e) {
            e.invite && e.invite === u._id && l.push(e.login)
        }),
        0 < l.length && (n += '<div class="red">В этой партии находятся ваши ученики: ' + l.join(", ") + "</div>")
    }
    showNewDiv('<div class="startgame">' + n + "</div>"),
    game.showPlaylist(a.players),
    clearInterval(min10),
    min10 = setInterval(function() {
        game.setTime()
    }, 1e3),
    game.role && (helper.hint("start"),
    getStatForRole(u, game.role) < 1 && helper.hint("Это твоя первая роль " + roles(game.role).name + ".<br/> Посмотрим, сможешь ли ты с ней справиться!", !0),
    u.money -= game.sum)
}
,
game.finished = function() {
    game.finish = !0,
    clearInterval(min10),
    "function" == typeof hideHint && hideHint()
}
,
game.itemUse = function(e) {
    if (e.item)
        switch (e.item) {
        case 4:
            u.item4 -= 1,
            updateGameitems(),
            e.uid && playersInfoArray[e.uid] && game.writeText(game.event({
                text: "itemUse:cookie:text",
                replacedata: {
                    "[VERB]": 1 === playersInfoArray[e.uid].sex ? roleText[gameMode()].itemUse.cookie.verb1 : roleText[gameMode()].itemUse.cookie.verb2,
                    "[nick]": '<b class="nickname" data-id="' + e.uid + '">' + playersInfoArray[e.uid].login + "</b>"
                }
            }, !1, !0)),
            sound("item4", !0);
            break;
        case 5:
            u.item5 -= 1,
            updateGameitems(),
            game.writeText('<div class="green">' + roleText[gameMode()].itemUse.tour + "</div>"),
            sound("item5", !0)
        }
}
,
game.buyAnswer = function(a) {
    [1, 2, 4, 5].forEach(function(e) {
        a["item" + e] && (u["item" + e] = a["item" + e],
        game.items[e]++,
        2 === e && game.item2++)
    }),
    a.price && (u.money -= a.price,
    gamemoney.html(f.over1000(u.money))),
    updateGameitems()
}
;
var itemPanel = $("#items");
$("div.gameitem4>div", itemPanel).click(function() {
    doItem(4)
}),
$("div.gameitem5>div", itemPanel).click(function() {
    doItem(5)
}),
$("div>span", itemPanel).click(function() {
    buyItem($(this).parent().attr("class").substring(8))
}),
game.deleteLock = function() {
    u.item2 && (u.item2 -= 1),
    game.item2--,
    updateGameitems(),
    game.event({
        text: "morningInfo:mylock"
    })
}
,
game.cookieResult = function(e) {
    if (e.result && Object.forEach(e.result, function(e, a) {
        var t = playersInfoArray[a];
        t && game.writeText('<div class="green"><b data-id="' + a + '">' + t.login + "</b>" + roleText[gameMode()].itemUse.cookieResult[e][t.sex] + "</div>")
    }),
    e.msg)
        for (var a = 0; a < parseInt(e.msg); a++)
            game.writeText('<div class="green">' + roleText[gameMode()].itemUse.cookieDelete + "</div>")
}
;
var snowball = {
    myside: 1,
    sides: {},
    active: !(game.notePlayer = function(n) {
        if (n && playersInfoArray[n]) {
            var s = playersList.find("#" + n);
            if (s) {
                for (var e = '<br/><label>Роль <select id="note-role"><option selected="selected"></option>', a = 1; a <= 9; a++)
                    e += '<option value="' + a + '">' + roles(a).name + "</option>";
                e += '</select></label><br/><label>Метка <input type="text" placeholder="Например, АКТИВ" id="note-text"/></label>',
                modalWindow("Заметка об игроке " + playersInfoArray[n].login + e, function() {
                    var e = $("#note-role")
                      , a = $("#note-text")
                      , t = s.find("b")
                      , i = "";
                    e && e.val() && (i += '<span class="rolesmile role' + e.val() + '"></span> '),
                    a && a.val() && (i += a.val()),
                    i && s.html(t[0].outerHTML + i + " " + playersInfoArray[n].login + (playersInfoArray[n].role ? '<span class="visiblerole"> - <i class="' + roles(playersInfoArray[n].role).icon + '"></i></span>' : ""))
                })
            }
        }
    }
    ),
    time: 0,
    timer: 0
}
  , battleWords = {
    100: {
        nodefend: "Выберите свою позицию - в первых рядах или позади?",
        noattack: "Выберите тип броска - на точность или на силу?",
        notarget: "Выберите соперника, в которого хотите бросить снежком",
        killed: "Вас забросали снегом :(<br/> Вам удастся продолжить борьбу, если ваша команда выиграет этот раунд и &quot;откопает&quot; Вас",
        shot: "../battle/snowball/shot.gif"
    },
    101: {
        nodefend: "Решайтесь! В атаку или в укрытие?",
        noattack: "Как будем стрелять?",
        notarget: "В кого будем стрелять?",
        killed: "Вы не в силах продолжить сражение :(<br/> Если Ваша команда выиграет, Вы сможете принять участие в следующем раунде",
        shot: "../battle/shot.gif"
    }
}
  , battleType = function() {
    return 100 === snowball.type ? "snow" : "battle"
}
  , battleDiv = $(".battleDiv")
  , snowPlayList1 = battleDiv.find(".playerlist").eq(0)
  , snowPlayList2 = battleDiv.find(".playerlist").eq(1)
  , battleMain = battleDiv.find(".battlemain")
  , snowSelect = $("#snowball-target");
battleDiv.find(".playerlist").bind("dblclick touchmove", function(e) {
    var a = e || window.event
      , t = a.target || a.srcElement;
    "DIV" === t.tagName && "playerlist" !== t.className && ($("#adresat-id").val(t.id),
    $("#adresat").val(t.getAttribute("data-nick")))
}),
$(".snowball-domove").click(function() {
    var e = battleMain.find("input[name=snowball-def]:checked").val()
      , a = battleMain.find("input[name=snowball-att]:checked").val()
      , t = snowSelect.val();
    e ? (101 === snowball.type && "2" === e && (a = "1",
    t = u._id),
    a ? t ? (sendToSocket({
        type: "snowball",
        defend: e,
        attack: a,
        target: t
    }),
    battleMain.addClass("battlewait")) : showMessage(battleWords[snowball.type].notarget) : showMessage(battleWords[snowball.type].noattack)) : showMessage(battleWords[snowball.type].nodefend)
}),
$(".battle101").find("input[name=snowball-def]").change(function() {
    $(this).parent().next("div").css({
        display: $("#battle-def2").prop("checked") ? "none" : "block"
    })
}),
snowball.action = function(e) {
    if (e.action)
        switch (e.action) {
        case "start":
            snowball.start(e);
            break;
        case "round":
            snowball.setRound(e);
            break;
        case "move":
            snowball.newMove(e);
            break;
        case "end":
            snowball.end(e.msg)
        }
}
,
snowball.start = function(e) {
    container.addClass("battle"),
    $(".battlemain").hide(),
    (battleMain = $(".battlemain.battle" + e.gtype)).show(),
    snowball.type = e.gtype,
    snowSelect = 100 === e.gtype ? $("#snowball-target") : $("#battle-target"),
    playersInfoArray = e.players,
    messagesList.empty(),
    mW.hide(),
    snowball.active = !0,
    snowball.timer = setInterval(function() {
        snowball.setTime()
    }, 1e3)
}
,
snowball.setRound = function(e) {
    if (e.round) {
        var a = "snows" + (e.round + 4);
        snowPlayList1.removeClass().addClass("playerlist " + a),
        snowPlayList2.removeClass().addClass("playerlist " + a)
    }
    -1 < e.sides[1].indexOf(u._id) ? (snowball.myside = 1,
    snowball.sides.we = e.sides[1],
    snowball.sides.they = e.sides[2]) : (snowball.myside = 2,
    snowball.sides.we = e.sides[2],
    snowball.sides.they = e.sides[1]),
    snowball.playerList(snowball.sides.we, snowPlayList1),
    snowball.playerList(snowball.sides.they, snowPlayList2);
    var t = [];
    snowSelect.empty(),
    snowball.sides.they.forEach(function(e) {
        t.push([playersInfoArray[e].login || "***", e])
    }),
    t.sort(plSort),
    t.forEach(function(e) {
        snowSelect.append('<option value="' + e[1] + '">' + e[0] + "</option>")
    }),
    showNewDiv('<br/><div class="important">' + snowball.roundName[e.round] + "</div>"),
    -1 === e.sides[1].indexOf(u._id) && -1 === e.sides[2].indexOf(u._id) ? (battleMain.addClass("killed"),
    snowball.active = !1) : (battleMain.removeClass("killed"),
    snowball.active = !0),
    snowball.time = 0,
    sound("notify")
}
,
snowball.playerList = function(e, i) {
    if (e) {
        i.empty(),
        e.forEach(function(e) {
            if (playersInfoArray[e]) {
                var a = playersInfoArray[e]
                  , t = $('<div id="' + a._id + '"></div>').html("<b></b>" + a.login);
                t.attr("data-nick", a.login),
                t.appendTo(i),
                t.mouseenter(function() {
                    return showPlayerInfo(!0, $(this).attr("id")),
                    !1
                }).mouseleave(function() {
                    return showPlayerInfo(!1),
                    !1
                }),
                -1 < reds.indexOf(a._id) && t.addClass("red"),
                t.find("b").addClass("status" + a.icon),
                $('<span class="' + battleType() + 'block"></span>').appendTo(t)
            }
        });
        var a = [];
        i.find("div").each(function() {
            var e = [$(this).attr("data-nick"), $(this)];
            a.push(e)
        }),
        a.sort(plSort),
        i.html(),
        a.forEach(function(e) {
            i.append(e[1])
        })
    }
}
,
snowball.newMove = function(e) {
    snowball.active && battleMain.removeClass("battlewait");
    var a = "Ход " + e.step + "<hr/>";
    e.msg && e.msg.forEach(function(e) {
        a += e.replace(u.login, '<span class="green">' + u.login + "</span>") + "<br/>"
    }),
    game.writeText(a),
    e.del && e.del.forEach(function(e) {
        e === u._id && (showWall(battleWords[snowball.type].shot),
        battleMain.addClass("killed"),
        showMessage(battleWords[snowball.type].killed),
        snowball.active = !1),
        battleDiv.find("#" + e).addClass("snowman"),
        snowSelect.find('option[value="' + e + '"]').remove()
    }),
    e.pl && Object.forEach(e.pl, function(e, a) {
        var t = battleDiv.find("#" + a).find("." + battleType() + "block");
        t.css("width", 100 === snowball.type ? parseInt(t.css("height")) * e + "px" : 20 * (5 - e) + "%")
    }),
    snowball.time = 0,
    sound("notify")
}
,
snowball.roundName = {
    1: "1/32 финала",
    2: "1/16 финала",
    3: "1/8 финала",
    4: "1/4 финала",
    5: "Полуфинал",
    6: "Финал"
},
snowball.setTime = function() {
    snowball.time++;
    var e = 30 - snowball.time
      , a = "0:" + (9 < e ? e : 0 < e ? "0" + e : "00");
    battleMain.find("b").html(a)
}
,
snowball.end = function(e) {
    clearInterval(snowball.timer),
    warningWindow(e, goToRoom)
}
;
for (var gifts = {
    1: {
        p: 12,
        t: 2
    },
    2: {
        p: 1e4,
        t: 1
    },
    3: {
        p: 1e4,
        t: 1
    },
    4: {
        p: 1e4,
        t: 1
    },
    5: {
        p: 1e4,
        t: 1
    },
    6: {
        p: 1e4,
        t: 1
    },
    7: {
        p: 1e4,
        t: 1
    },
    8: {
        p: 1e4,
        t: 1
    },
    9: {
        p: 11e3,
        t: 1
    },
    10: {
        p: 5e3,
        t: 1
    },
    11: {
        p: 8e3,
        t: 1
    },
    12: {
        p: 9e3,
        t: 1
    },
    13: {
        p: 25e3,
        t: 1
    },
    14: {
        p: 11e3,
        t: 1
    },
    15: {
        p: 7e3,
        t: 1
    },
    16: {
        p: 5500,
        t: 1
    },
    17: {
        p: 7777,
        t: 1
    },
    18: {
        p: 1e4,
        t: 1
    },
    19: {
        p: 13e3,
        t: 1
    },
    20: {
        p: 1e4,
        t: 1
    },
    21: {
        p: 1e4,
        t: 1
    },
    22: {
        p: 1e4,
        t: 1
    },
    23: {
        p: 12e3,
        t: 1
    },
    24: {
        p: 15e3,
        t: 1
    },
    25: {
        p: 17e3,
        t: 1
    },
    26: {
        p: 1e4,
        t: 1
    },
    27: {
        p: 14e3,
        t: 1
    },
    28: {
        p: 11e3,
        t: 1
    },
    29: {
        p: 12e3,
        t: 1
    },
    30: {
        p: 11e3,
        t: 1
    },
    31: {
        p: 15,
        t: 2
    },
    32: {
        p: 19e3,
        t: 1
    },
    33: {
        p: 1e4,
        t: 1
    },
    34: {
        p: 17e3,
        t: 1
    },
    35: {
        p: 14e3,
        t: 1
    },
    36: {
        p: 18e3,
        t: 1
    },
    37: {
        p: 33e3,
        t: 1
    },
    38: {
        p: 27e3,
        t: 1
    },
    39: {
        p: 1e4,
        t: 1
    },
    40: {
        p: 9999,
        t: 1
    },
    41: {
        p: 21e3,
        t: 1
    },
    42: {
        p: 18e3,
        t: 1
    },
    43: {
        p: 22e3,
        t: 1
    },
    44: {
        p: 33e3,
        t: 1
    },
    45: {
        p: 20,
        t: 2
    },
    46: {
        p: 41e3,
        t: 1
    },
    47: {
        p: 3e3,
        t: 1
    },
    48: {
        p: 44e3,
        t: 1
    },
    49: {
        p: 14,
        t: 2
    },
    50: {
        p: 24e3,
        t: 1
    },
    51: {
        p: 48e3,
        t: 1
    },
    52: {
        p: 29e3,
        t: 1
    },
    53: {
        p: 13,
        t: 2
    },
    54: {
        p: 16,
        t: 2
    },
    55: {
        p: 1e4,
        t: 1
    },
    56: {
        p: 15e3,
        t: 1
    },
    57: {
        p: 22,
        t: 2
    },
    58: {
        p: 66e3,
        t: 1
    },
    59: {
        p: 3300,
        t: 1
    },
    60: {
        p: 46e3,
        t: 1
    },
    61: {
        p: 38e3,
        t: 1
    },
    62: {
        p: 11,
        t: 2
    },
    63: {
        p: 50,
        t: 2
    },
    64: {
        p: 30,
        t: 2
    },
    65: {
        p: 17e3,
        t: 1
    },
    66: {
        p: 1e4,
        t: 1
    },
    67: {
        p: 55e3,
        t: 1
    },
    68: {
        p: 6e4,
        t: 1
    },
    69: {
        p: 19,
        t: 2
    },
    70: {
        p: 61e3,
        t: 1
    },
    71: {
        p: 51e3,
        t: 1
    },
    72: {
        p: 32e3,
        t: 1
    },
    73: {
        p: 22e3,
        t: 1
    },
    74: {
        p: 19e3,
        t: 1
    },
    75: {
        p: 28e3,
        t: 1
    },
    76: {
        p: 33e3,
        t: 1
    },
    77: {
        p: 77e3,
        t: 1
    },
    78: {
        p: 9e4,
        t: 1
    },
    79: {
        p: 27e3,
        t: 1
    },
    80: {
        p: 31e3,
        t: 1
    },
    81: {
        p: 14,
        t: 2
    },
    82: {
        p: 15,
        t: 2
    },
    83: {
        p: 46e3,
        t: 1
    },
    84: {
        p: 23e3,
        t: 1
    },
    85: {
        p: 43e3,
        t: 1
    },
    86: {
        p: 18,
        t: 2
    },
    87: {
        p: 33,
        t: 2
    },
    88: {
        p: 12,
        t: 2
    },
    89: {
        p: 41e3,
        t: 1
    },
    90: {
        p: 21e3,
        t: 1
    },
    91: {
        p: 62e3,
        t: 1
    },
    92: {
        p: 21e3,
        t: 1
    },
    93: {
        p: 47e3,
        t: 1
    },
    94: {
        p: 36e3,
        t: 1
    },
    95: {
        p: 16,
        t: 2
    },
    96: {
        p: 23,
        t: 2
    },
    97: {
        p: 33,
        t: 2
    },
    98: {
        p: 35e3,
        t: 1
    },
    99: {
        p: 68e3,
        t: 1
    },
    100: {
        p: 19,
        t: 2
    },
    101: {
        p: 5e3,
        t: 1
    },
    102: {
        p: 9999,
        t: 1
    },
    103: {
        p: 27,
        t: 2
    },
    104: {
        p: 21,
        t: 2
    },
    105: {
        p: 28,
        t: 2
    },
    106: {
        p: 100,
        t: 2
    },
    107: {
        p: 80,
        t: 2
    },
    108: {
        p: 20,
        t: 2
    },
    109: {
        p: 33,
        t: 2
    },
    110: {
        p: 55,
        t: 2
    },
    111: {
        p: 17,
        t: 2
    },
    112: {
        p: 99,
        t: 2
    },
    113: {
        p: 120,
        t: 2
    },
    114: {
        p: 58,
        t: 2
    },
    115: {
        p: 88,
        t: 2
    },
    116: {
        p: 27,
        t: 2
    },
    117: {
        p: 200,
        t: 2
    },
    118: {
        p: 30,
        t: 2
    },
    119: {
        p: 22,
        t: 2
    },
    120: {
        p: 28,
        t: 2
    },
    121: {
        p: 36,
        t: 2
    },
    122: {
        p: 25,
        t: 2
    },
    123: {
        p: 30,
        t: 2
    },
    124: {
        p: 77,
        t: 2
    },
    125: {
        p: 59,
        t: 2
    },
    126: {
        p: 17,
        t: 2
    },
    127: {
        p: 37,
        t: 2
    },
    128: {
        p: 31,
        t: 2
    },
    129: {
        p: 44,
        t: 2
    },
    130: {
        p: 23,
        t: 2
    },
    131: {
        p: 34,
        t: 2
    },
    132: {
        p: 16,
        t: 2
    },
    133: {
        p: 62,
        t: 2
    },
    134: {
        p: 125,
        t: 2
    },
    135: {
        p: 78,
        t: 2
    },
    136: {
        p: 35,
        t: 2
    },
    137: {
        p: 2e3,
        t: 1
    },
    138: {
        p: 7e3,
        t: 1
    },
    139: {
        p: 5e3,
        t: 1
    },
    140: {
        p: 8500,
        t: 1
    },
    141: {
        p: 3e3,
        t: 1
    },
    142: {
        p: 9e3,
        t: 1
    },
    143: {
        p: 2e4,
        t: 1
    },
    144: {
        p: 11e3,
        t: 1
    },
    145: {
        p: 31e3,
        t: 1
    },
    146: {
        p: 13e3,
        t: 1
    },
    147: {
        p: 13e3,
        t: 1
    },
    148: {
        p: 13e3,
        t: 1
    },
    149: {
        p: 13e3,
        t: 1
    },
    150: {
        p: 13e3,
        t: 1
    },
    151: {
        p: 13e3,
        t: 1
    },
    152: {
        p: 13e3,
        t: 1
    },
    153: {
        p: 8e3,
        t: 1
    },
    154: {
        p: 17,
        t: 2
    },
    155: {
        p: 25e3,
        t: 1
    },
    156: {
        p: 18e3,
        t: 1
    },
    157: {
        p: 14e3,
        t: 1
    },
    158: {
        p: 12e3,
        t: 1
    },
    159: {
        p: 22e3,
        t: 1
    },
    160: {
        p: 32e3,
        t: 1
    },
    161: {
        p: 25,
        t: 2
    },
    162: {
        p: 35,
        t: 2
    },
    163: {
        p: 41e3,
        t: 1
    },
    164: {
        p: 17e3,
        t: 1
    },
    165: {
        p: 11e3,
        t: 1
    },
    166: {
        p: 27e3,
        t: 1
    },
    167: {
        p: 66e3,
        t: 1
    },
    168: {
        p: 49e3,
        t: 1
    },
    169: {
        p: 35e3,
        t: 1
    },
    170: {
        p: 42e3,
        t: 1
    },
    171: {
        p: 16e3,
        t: 1
    },
    172: {
        p: 17e3,
        t: 1
    },
    173: {
        p: 25e3,
        t: 1
    },
    174: {
        p: 28e3,
        t: 1
    },
    175: {
        p: 5e4,
        t: 1
    },
    176: {
        p: 15,
        t: 2
    },
    177: {
        p: 15e3,
        t: 1
    },
    178: {
        p: 12e3,
        t: 1
    },
    179: {
        p: 25e3,
        t: 1
    },
    180: {
        p: 9e3,
        t: 1
    },
    181: {
        p: 17e3,
        t: 1
    },
    182: {
        p: 22e3,
        t: 1
    },
    183: {
        p: 14e3,
        t: 1
    },
    184: {
        p: 27e3,
        t: 1
    },
    185: {
        p: 5,
        t: 2
    },
    186: {
        p: 6e3,
        t: 1
    },
    187: {
        p: 8e3,
        t: 1
    },
    188: {
        p: 8,
        t: 2
    },
    189: {
        p: 11e3,
        t: 1
    },
    190: {
        p: 12e3,
        t: 1
    },
    191: {
        p: 12,
        t: 2
    },
    192: {
        p: 15e3,
        t: 1
    },
    193: {
        p: 15,
        t: 2
    },
    194: {
        p: 16e3,
        t: 1
    },
    195: {
        p: 18e3,
        t: 1
    },
    196: {
        p: 19e3,
        t: 1
    },
    197: {
        p: 2e4,
        t: 1
    },
    198: {
        p: 22e3,
        t: 1
    },
    199: {
        p: 23,
        t: 2
    },
    200: {
        p: 25,
        t: 2
    },
    201: {
        p: 25,
        t: 2
    },
    202: {
        p: 82e3,
        t: 1
    },
    203: {
        p: 30,
        t: 2
    },
    204: {
        p: 32e3,
        t: 1
    },
    205: {
        p: 33e3,
        t: 1
    },
    206: {
        p: 35e3,
        t: 1
    },
    207: {
        p: 45e3,
        t: 1
    },
    208: {
        p: 45e3,
        t: 1
    },
    209: {
        p: 45,
        t: 2
    },
    210: {
        p: 46e3,
        t: 1
    },
    211: {
        p: 56e3,
        t: 1
    },
    212: {
        p: 6e4,
        t: 1
    },
    213: {
        p: 1e5,
        t: 1
    },
    214: {
        p: 21e3,
        t: 1
    },
    215: {
        p: 15e3,
        t: 1
    },
    216: {
        p: 15,
        t: 2
    },
    217: {
        p: 15,
        t: 2
    },
    218: {
        p: 20,
        t: 2
    },
    219: {
        p: 22e3,
        t: 1
    },
    220: {
        p: 25,
        t: 2
    },
    221: {
        p: 33e3,
        t: 1
    },
    222: {
        p: 38e3,
        t: 1
    },
    223: {
        p: 40,
        t: 2
    },
    224: {
        p: 45e3,
        t: 1
    },
    225: {
        p: 6e4,
        t: 1
    },
    226: {
        p: 1e3,
        t: 1
    },
    227: {
        p: 3e3,
        t: 1
    },
    228: {
        p: 5,
        t: 2
    },
    229: {
        p: 5,
        t: 2
    },
    230: {
        p: 8e3,
        t: 1
    },
    231: {
        p: 8e3,
        t: 1
    },
    232: {
        p: 8e3,
        t: 1
    },
    233: {
        p: 12e3,
        t: 1
    },
    234: {
        p: 15e3,
        t: 1
    },
    235: {
        p: 15,
        t: 2
    },
    236: {
        p: 15,
        t: 2
    },
    237: {
        p: 15,
        t: 2
    },
    238: {
        p: 2e4,
        t: 1
    },
    239: {
        p: 22e3,
        t: 1
    },
    240: {
        p: 25e3,
        t: 1
    },
    241: {
        p: 25,
        t: 2
    },
    242: {
        p: 35e3,
        t: 1
    },
    243: {
        p: 35e3,
        t: 1
    },
    244: {
        p: 35e3,
        t: 1
    },
    245: {
        p: 42e3,
        t: 1
    },
    246: {
        p: 5e4,
        t: 1
    },
    247: {
        p: 75e3,
        t: 1
    },
    248: {
        p: 1e5,
        t: 1
    },
    249: {
        p: 1e3,
        t: 1
    },
    250: {
        p: 5e3,
        t: 1
    },
    251: {
        p: 7777,
        t: 1
    },
    252: {
        p: 8e3,
        t: 1
    },
    253: {
        p: 35e3,
        t: 1
    },
    254: {
        p: 20,
        t: 2
    },
    255: {
        p: 30,
        t: 2
    },
    256: {
        p: 12e3,
        t: 1
    },
    257: {
        p: 12,
        t: 2
    },
    258: {
        p: 2018,
        t: 1
    },
    259: {
        p: 5e4,
        t: 1
    },
    260: {
        p: 10,
        t: 2
    },
    261: {
        p: 18e3,
        t: 1
    },
    262: {
        p: 7e3,
        t: 1
    },
    263: {
        p: 10,
        t: 2
    },
    264: {
        p: 1e3,
        t: 1
    },
    265: {
        p: 25,
        t: 2
    },
    266: {
        p: 18,
        t: 2
    },
    267: {
        p: 18,
        t: 2
    },
    268: {
        p: 18,
        t: 2
    },
    269: {
        p: 12,
        t: 2
    },
    270: {
        p: 35e3,
        t: 1
    },
    271: {
        p: 5,
        t: 2
    },
    272: {
        p: 1500,
        t: 1
    },
    273: {
        p: 8e3,
        t: 1
    },
    274: {
        p: 1e4,
        t: 1
    },
    275: {
        p: 12e3,
        t: 1
    },
    276: {
        p: 14e3,
        t: 1
    },
    277: {
        p: 14,
        t: 2
    },
    278: {
        p: 14,
        t: 2
    },
    279: {
        p: 14,
        t: 2
    },
    280: {
        p: 14,
        t: 2
    },
    281: {
        p: 20,
        t: 2
    },
    282: {
        p: 22e3,
        t: 1
    },
    283: {
        p: 28e3,
        t: 1
    },
    284: {
        p: 35e3,
        t: 1
    },
    285: {
        p: 63e3,
        t: 1
    },
    286: {
        p: 69e3,
        t: 1
    },
    287: {
        p: 77e3,
        t: 1
    },
    288: {
        p: 8e4,
        t: 1
    },
    289: {
        p: 8e4,
        t: 1
    },
    290: {
        p: 1402,
        t: 1
    },
    291: {
        p: 7500,
        t: 1
    },
    292: {
        p: 14e3,
        t: 1
    },
    293: {
        p: 11e3,
        t: 1
    },
    294: {
        p: 2302,
        t: 1
    },
    295: {
        p: 2302,
        t: 1
    },
    296: {
        p: 5e3,
        t: 1
    },
    297: {
        p: 5,
        t: 2
    },
    298: {
        p: 8888,
        t: 1
    },
    299: {
        p: 1e4,
        t: 1
    },
    300: {
        p: 11e3,
        t: 1
    },
    301: {
        p: 12e3,
        t: 1
    },
    302: {
        p: 12e3,
        t: 1
    },
    303: {
        p: 15e3,
        t: 1
    },
    304: {
        p: 16e3,
        t: 1
    },
    305: {
        p: 17e3,
        t: 1
    },
    306: {
        p: 23e3,
        t: 1
    },
    307: {
        p: 23e3,
        t: 1
    },
    308: {
        p: 23e3,
        t: 1
    },
    309: {
        p: 23,
        t: 2
    },
    310: {
        p: 30,
        t: 2
    },
    311: {
        p: 45e3,
        t: 1
    },
    312: {
        p: 45,
        t: 2
    },
    313: {
        p: 47e3,
        t: 1
    },
    314: {
        p: 48e3,
        t: 1
    },
    315: {
        p: 5e4,
        t: 1
    },
    316: {
        p: 59e3,
        t: 1
    },
    317: {
        p: 6e4,
        t: 1
    },
    318: {
        p: 8e4,
        t: 1
    },
    319: {
        p: 1e5,
        t: 1
    },
    320: {
        p: 150,
        t: 2
    },
    321: {
        p: 5e3,
        t: 1
    },
    322: {
        p: 8e3,
        t: 1
    },
    323: {
        p: 8e3,
        t: 1
    },
    324: {
        p: 8e3,
        t: 1
    },
    325: {
        p: 1e4,
        t: 1
    },
    326: {
        p: 11e3,
        t: 1
    },
    327: {
        p: 17e3,
        t: 1
    },
    328: {
        p: 19e3,
        t: 1
    },
    329: {
        p: 22,
        t: 2
    },
    330: {
        p: 27e3,
        t: 1
    },
    331: {
        p: 32e3,
        t: 1
    },
    332: {
        p: 35e3,
        t: 1
    },
    333: {
        p: 41e3,
        t: 1
    },
    334: {
        p: 41e3,
        t: 1
    },
    335: {
        p: 30,
        t: 2
    },
    336: {
        p: 15,
        t: 2
    },
    337: {
        p: 30,
        t: 2
    },
    338: {
        p: 95e3,
        t: 1
    },
    339: {
        p: 21e3,
        t: 1
    },
    340: {
        p: 1e5,
        t: 1
    },
    341: {
        p: 8,
        t: 2
    },
    342: {
        p: 18,
        t: 2
    },
    343: {
        p: 18,
        t: 2
    },
    344: {
        p: 111,
        t: 2
    },
    345: {
        p: 1e3,
        t: 1
    },
    346: {
        p: 1,
        t: 2
    },
    347: {
        p: 2e4,
        t: 1
    },
    348: {
        p: 41e3,
        t: 1
    },
    349: {
        p: 5e4,
        t: 1
    },
    350: {
        p: 48e3,
        t: 1
    },
    351: {
        p: 1e4,
        t: 1
    },
    352: {
        p: 11e3,
        t: 1
    },
    353: {
        p: 15e3,
        t: 1
    },
    354: {
        p: 1e3,
        t: 1
    },
    355: {
        p: 17,
        t: 2
    },
    356: {
        p: 18e3,
        t: 1
    },
    357: {
        p: 7e3,
        t: 1
    },
    358: {
        p: 14e3,
        t: 1
    },
    359: {
        p: 7e4,
        t: 1
    },
    360: {
        p: 10,
        t: 2
    },
    361: {
        p: 1e3,
        t: 1
    },
    362: {
        p: 20,
        t: 2
    },
    363: {
        p: 15,
        t: 2
    },
    364: {
        p: 5e3,
        t: 1
    },
    365: {
        p: 35,
        t: 2
    },
    366: {
        p: 14,
        t: 2
    },
    367: {
        p: 25e3,
        t: 1
    },
    368: {
        p: 16e3,
        t: 1
    },
    369: {
        p: 56e3,
        t: 1
    },
    370: {
        p: 20,
        t: 2
    },
    371: {
        p: 27e3,
        t: 1
    },
    372: {
        p: 20,
        t: 2
    },
    373: {
        p: 7e3,
        t: 1
    },
    374: {
        p: 16e3,
        t: 1
    },
    375: {
        p: 1e4,
        t: 1
    },
    376: {
        p: 1e4,
        t: 1
    },
    377: {
        p: 10,
        t: 2
    },
    378: {
        p: 55e3,
        t: 1
    },
    379: {
        p: 13,
        t: 2
    },
    380: {
        p: 10,
        t: 2
    },
    381: {
        p: 32e3,
        t: 1
    },
    382: {
        p: 22e3,
        t: 1
    },
    383: {
        p: 14,
        t: 2
    },
    384: {
        p: 22e3,
        t: 1
    },
    385: {
        p: 3e4,
        t: 1
    },
    386: {
        p: 35e3,
        t: 1
    },
    387: {
        p: 3e3,
        t: 1
    },
    388: {
        p: 14e3,
        t: 1
    },
    389: {
        p: 55e3,
        t: 1
    },
    390: {
        p: 30,
        t: 2
    },
    391: {
        p: 30,
        t: 2
    },
    392: {
        p: 3e4,
        t: 1
    },
    393: {
        p: 8e3,
        t: 1
    },
    394: {
        p: 28e3,
        t: 1
    },
    395: {
        p: 75e3,
        t: 1
    },
    396: {
        p: 25,
        t: 2
    },
    397: {
        p: 52e3,
        t: 1
    },
    398: {
        p: 52e3,
        t: 1
    },
    399: {
        p: 5,
        t: 2
    },
    400: {
        p: 17e3,
        t: 1
    },
    401: {
        p: 18e3,
        t: 1
    },
    402: {
        p: 16e3,
        t: 1
    },
    403: {
        p: 12e3,
        t: 1
    },
    404: {
        p: 19e3,
        t: 1
    },
    405: {
        p: 1e4,
        t: 1
    },
    406: {
        p: 26e3,
        t: 1
    },
    407: {
        p: 1e3,
        t: 1
    }
}, isShowGiftType1 = !0, isShowGiftType2 = !0, giftSortOrder = !1, i = 1; i < 33; i++)
    gifts[-i] = {
        p: 3e3,
        t: 1,
        card: !0
    };
var giftShop = $(".giftshop")
  , giftList = win.find("#giftList")
  , sortGifts = function() {
    var e = []
      , p = [];
    return Object.forEach(gifts, function(t, p) {
        e.push([p, t])
    }),
    e.sort(function(t, p) {
        return t[1].p + 1e6 * (t[1].t - 1) - (p[1].p + 1e6 * (p[1].t - 1))
    }),
    e.forEach(function(t) {
        p.push(t[0])
    }),
    p
}()
  , getGiftClass = function(t) {
    var p = 1;
    return 344 < t ? p = 400 <= t && t <= 407 ? 2 : 5 : 272 < t ? p = 4 : 184 < t ? p = 3 : 96 < t && (p = 2),
    "gift-group" + p + " gift" + t
}
  , addGiftOnList = function(t) {
    if (gifts[t].card) {
        var p = Math.abs(t);
        isShowGiftType1 && $('<input type="radio" id="giftcard' + p + '" name="gift" value="' + p + '"/><label for="giftcard' + p + '" class="gift-cardgroup gift' + p + ' onlyvip" data-title="анимированная открытка (VIP)"><b class="gamemoney">' + f.over1000(gifts[t].p) + "</b></label>").appendTo(giftList)
    } else {
        if (t = parseInt(t),
        -1 < [295, 308, 322, 324].indexOf(t))
            return;
        if (142 === t || 252 < t && t < 273)
            return;
        var e = 1 === gifts[t].t;
        (isShowGiftType1 && e || isShowGiftType2 && !e) && $('<input type="radio" id="gift' + t + '" name="gift" value="' + t + '"/><label for="gift' + t + '" class="' + getGiftClass(t) + '" data-title="' + (e ? "на 30 дней" : "на память") + '"><b class="' + (e ? "game" : "") + 'money">' + f.over1000(gifts[t].p) + "</b></label>").appendTo(giftList)
    }
}
  , showGiftList = function() {
    if (giftList.empty(),
    giftSortOrder)
        if (1 === giftSortOrder)
            for (var t = 0, p = sortGifts.length; t < p; t++)
                addGiftOnList(sortGifts[t]);
        else
            for (var e = sortGifts.length - 1; 0 <= e; e--)
                addGiftOnList(sortGifts[e]);
    else
        Object.keys(gifts).forEach(addGiftOnList)
};
Object.keys(gifts).forEach(addGiftOnList),
$("#giftSortInc").on("change", function() {
    giftSortOrder = 1,
    showGiftList()
}),
$("#giftSortDec").on("change", function() {
    giftSortOrder = -1,
    showGiftList()
});
var selectGiftType = function(t) {
    var p = t.target
      , e = "giftSortType1" === p.id
      , i = e ? $("#giftSortType2") : $("#giftSortType1");
    e ? isShowGiftType1 = p.checked : isShowGiftType2 = p.checked,
    p.checked || i.prop("checked") || (i.prop("checked", !0),
    e ? isShowGiftType2 = !0 : isShowGiftType1 = !0),
    showGiftList()
};
$("#giftSortType1").on("change", selectGiftType),
$("#giftSortType2").on("change", selectGiftType),
giftShop.find("button").on("click", function() {
    var t = giftShop.find('input[type="text"]').eq(0).val().trim().substring(0, 20)
      , p = giftShop.find("#anonimGift").prop("checked")
      , e = giftShop.find('input[type="text"]').eq(1).val().trim().substring(0, 200)
      , i = $("input[name=gift]:checked", "#giftList")
      , f = i.val();
    f && gifts[f] ? t ? u.login !== t ? (2 === gifts[f].t ? u.money2 : u.money) >= gifts[f].p ? sendToSocket({
        type: "gift",
        whom: t,
        text: e,
        num: f,
        anonim: p,
        card: 0 < i.attr("id").indexOf("card")
    }) : showMessage("Недостаточно денег для такого шикарного подарка :(") : showMessage("Вы не можете подарить подарок себе, это будет не по-товарищески.") : showMessage("Вы забыли уточнить, кому хотите подарить подарок!") : showMessage("Вы забыли выбрать подарок для своего друга")
});
function createSmilePanel() {
    smileBlock.find("div").empty();
    for (var t = "", e = 1; e <= 9; e++)
        t += '<span class="role' + e + '"></span>';
    t += "<hr/>",
    smilesArr.forEach(function(e) {
        t += '<img src="/images/' + (isMaffia ? "maffia/" : "") + "smiles/" + e + '.gif" alt="' + e + '"/>'
    }),
    smileBlock.find("div").html(t),
    smileBlock.find("span").on("click", function() {
        var e = $(this).attr("class").substring(4)
          , t = isMaffia ? mafroleSmiles[e] : roleSmiles[e];
        insertToInput(t)
    }),
    smileBlock.find("img").on("click", function() {
        insertToInput($(this).attr("alt"))
    })
}
function createAudio(e) {
    var t = document.createElement("audio");
    return t.setAttribute("src", e),
    t.load(),
    t
}
var sounds = {}
  , soundExt = document.createElement("audio").canPlayType && document.createElement("audio").canPlayType("audio/mpeg") ? "mp3" : "ogg";
if (sounds.notify = createAudio("/media/notify." + soundExt),
sounds.signal = createAudio("/media/beep." + soundExt),
sounds.shuffle = createAudio("/media/shuffle." + soundExt),
sounds.money = createAudio("/media/money." + soundExt),
sounds.roll = createAudio("/media/roll." + soundExt),
sounds.music = createAudio("/media/music." + soundExt),
sounds.music.setAttribute("loop", !0),
sounds.music.addEventListener("loadedmetadata", music, !1),
sounds.all = {
    ffl: {},
    maffia: {}
},
["click", "day", "item4", "item5", "night", "notify", "role2", "role3", "role4", "role6", "role7", "role8", "role9", "win"].forEach(function(e) {
    sounds.all.ffl[e] = createAudio("/media/ffl/" + e + "." + soundExt),
    sounds.all.maffia[e] = createAudio("/media/maffia/" + e + "." + soundExt)
}),
!isAppVK) {
    sounds.radio = createAudio("");
    var radio = $("#radio");
    sounds.radio.onplay = function() {
        radio.show()
    }
    ,
    sounds.radio.onerror = sounds.radio.onended = function() {
        radio.hide()
    }
    ,
    radio.on("click", function() {
        modalWindow("Выключить данную композицию?", function() {
            sounds.radio.pause(),
            radio.hide()
        })
    })
}
function sound(t, e) {
    if (soundValue) {
        var a;
        if (e) {
            var n = isMaffia ? "maffia" : "ffl";
            a = sounds.all[n][t]
        } else
            a = sounds[t];
        try {
            a.volume = soundValue / 100,
            a.currentTime = 0,
            a.play()
        } catch (e) {
            console.log("sound.error: " + t + " - " + e)
        }
    }
}
function music() {
    try {
        if (musicValue) {
            sounds.music.currentTime = 0;
            var e = sounds.music.play();
            void 0 !== e && e.then(function() {
                window.removeEventListener("focus", music)
            }, function() {
                window.addEventListener("focus", music)
            })
        } else
            sounds.music.pause()
    } catch (e) {
        console.log("music.error: " + e)
    }
}
$('<button class="button usergameButton onlyvip"></button>').html("VIP-игра").on("click", function() {
    return showWindow("userGame")
}).appendTo(winInfo.find(".gameCreate")),
document.getElementById("input").onkeydown = function(e) {
    13 !== e.which || e.ctrlKey || e.shiftKey || sendMessage()
}
,
$("#sendMsg").on("click", sendMessage),
$("nav>h2").on("click", function() {
    var e = $(this).attr("class").substring(4);
    server2 && (e += "s"),
    goToRoom(e)
}).bind("mouseenter", function(e) {
    var t = parseInt($(this).attr("class").substring(4))
      , a = room === t ? "Вы здесь" : "Перейти в " + hallTitles[t];
    6 !== t || u.club || (a = hallTitles[t] + " только для членов клуба"),
    tooltip(e, a, !0)
}).bind("mouseleave", function(e) {
    tooltip(e, "", !1)
});
var defineTargetClick = function(e) {
    return "I" === e.tagName && (e = $(e).parent().parent()[0]),
    "DIV" !== e.tagName && (e = $(e).parent()[0]),
    e
};
playersList.bind("dblclick touchmove", function(e) {
    var t = e || window.event
      , a = t.target || t.srcElement;
    "players" !== a.id && "DIV" === (a = defineTargetClick(a)).tagName && a.id && ($("#adresat-id").val(a.id),
    $("#adresat").val(a.getAttribute("data-nick")))
}).bind("click", function(e) {
    showPlayerInfo("", !1);
    var t = e || window.event
      , a = t.target || t.srcElement;
    "SPAN" === a.tagName && a.getAttribute("data-id") ? clanProfile($(a)) : container.hasClass("ingame") && ("B" === a.tagName && container.hasClass("current") ? game.notePlayer(a.parentElement.id) : "players" !== a.id && "DIV" === (a = defineTargetClick(a)).tagName && a.id && selectPlayer(a.id))
}).bind("touchstart", function(e) {
    if (showPlayerInfo("", !1),
    container.hasClass("ingame")) {
        var t = e || window.event
          , a = t.target || t.srcElement;
        "DIV" === a.tagName && "players" !== a.id && selectPlayer(a.id)
    }
}),
allMessagesList.on("click", function(e) {
    var t = e || window.event
      , a = t.target || t.srcElement;
    "B" === a.tagName && a.getAttribute("data-id") && ($("#adresat-id").val(a.getAttribute("data-id")),
    $("#adresat").val(a.innerHTML))
}),
$("#label-panel").find("label").on("click", function() {
    setTimeout(doScroll, 200)
});
var lastClickTime = 0;
function clearAdresat() {
    $("#adresat-id").val(""),
    $("#adresat").animate({
        opacity: -.1
    }, 1e3, function() {
        $("#adresat").val("Всем").css("opacity", "0.9")
    }),
    privateCheck.prop("checked", !1)
}
actionButton.on("click", function() {
    var e = date.now();
    e < lastClickTime + 300 || (lastClickTime = e,
    container.hasClass("closedgame") && markPlayer(),
    container.hasClass("current") && game.action())
}),
privateCheck.change(function() {
    (!$("#adresat-id").val() || game.style && game.style.style1) && $(this).prop("checked", !1)
}),
$(".clear-adresat").on("click", clearAdresat);
var graphicCheckbox = $("#graphic")
  , soundRange = $("#sound")
  , musicRange = $("#music")
  , alarmCheckbox = $("#hideAlarm")
  , radioCheckbox = $("#radioCheck")
  , effectCheckbox = $("#effects")
  , gameNameInput = $("#gamename")
  , invertCheckbox = $("#invertAll")
  , hintsCheckBox = $("#showHints")
  , maffiaCheckbox = $("#maffiaMode")
  , fontCheckbox = $("#setFont")
  , fontOptions = $("#fontOptions").next("div")
  , fontSize = $("#fontSize")
  , fontWeight = $("#fontWeight")
  , fontSelect = $("#selectFont")
  , soundValue = 100
  , musicValue = 100
  , noAlarm = !1
  , hintsNeed = !1
  , isRadio = !0
  , isMaffia = 0 < window.location.href.indexOf("maffia");
function changeFavicon(e) {
    var t = $("[rel='icon']")
      , a = t.clone();
    a.attr("href", e),
    t.replaceWith(a)
}
function getGameUrl(e) {
    return document.location.protocol + (e ? "//vk.com/share.php?url=" + document.location.protocol + (isMaffia ? "//maffia-online.ru/" : "//loday.ru/") + "%23" + u._id : (isMaffia ? "//maffia-online.ru/" : "//loday.ru/") + "#" + u._id)
}
function shareMaffia() {
    changeFavicon(isMaffia ? "/images/mfavicon.png" : "/images/favicon.png")
}
function setGameName(e) {
    header.attr("data-name", e),
    gameNameInput.val(e),
    $("title").html(e)
}
function setRange(e) {
    e === musicRange ? (sounds.music.volume = musicValue / 100,
    musicValue || music()) : sounds.radio && (sounds.radio.volume = soundValue / 100);
    var t = e.next()
      , a = t.width();
    t.html(e.val()),
    t.css("left", e.val() * (200 - a) / 100),
    "0" === e.val() ? e.parent().css("opacity", .5) : e.parent().css("opacity", "")
}
function lStorageNumberValue(e, t) {
    var a = parseInt(lStorage.getItem(e));
    return isNaN(a) && (a = t),
    a
}
isMaffia && lStorage.setItem("maffia", 1),
$("#shareButton").on("click", inviteFriends),
("1" === lStorage.getItem("nographic") || mobile && null === lStorage.getItem("nographic")) && (allMessagesList.addClass("nographic"),
graphicCheckbox.prop("checked", !1)),
soundValue = lStorageNumberValue("sound", 75),
soundRange.val(soundValue),
setRange(soundRange),
musicValue = lStorageNumberValue("music", 50),
musicRange.val(musicValue),
setRange(musicRange),
"1" === lStorage.getItem("noalarm") && (noAlarm = !0,
alarmCheckbox.prop("checked", !0)),
"1" === lStorage.getItem("noradio") && (isRadio = !1,
radioCheckbox.prop("checked", !1)),
"1" === lStorage.getItem("noeffect") && (b.addClass("noeffect"),
effectCheckbox.prop("checked", !1)),
isAppVK ? (setGameName(mafApp ? "Мафия" : "День Любви"),
isMaffia = mafApp) : "1" === lStorage.getItem("maffia") && (isMaffia = !0,
setGameName("Мафия")),
isMaffia && (b.addClass("maffia"),
maffiaCheckbox.prop("checked", !0)),
lStorage.getItem("gamename") && setGameName(lStorage.getItem("gamename")),
isAppVK || "1" !== lStorage.getItem("invert") || (b.addClass("invert"),
invertCheckbox.prop("checked", !0)),
"1" === lStorage.getItem("hints") && (hintsNeed = !0,
hintsCheckBox.prop("checked", !0));
var fSize = lStorage.getItem("font-size")
  , fWeight = lStorage.getItem("font-weight")
  , fFamily = lStorage.getItem("font-family")
  , setFontParams = function() {
    fontsOff(),
    allMessagesList.addClass("font-size" + fontSize.val()),
    fontWeight.prop("checked") && allMessagesList.addClass("font-weight"),
    allMessagesList.addClass("font" + fontSelect.val())
};
function fontsOff(e) {
    e || (e = "font-size12 font-size14 font-size16 font-size18 font-size20 font1 font2 font3 font4 font5 font-weight"),
    allMessagesList.removeClass(e)
}
function setWidth(e) {
    isAppVK || mobile || (e ? 10 < e && e < 101 && (container.css({
        "max-width": "",
        width: e + "%"
    }),
    container.width() < 800 ? b.addClass("w800") : b.removeClass("w800"),
    container.width() < 690 ? b.addClass("w690") : b.removeClass("w690")) : container.css({
        "max-width": "1050px",
        width: ""
    }))
}
fSize && fontSize.val(fSize),
fWeight && fontWeight.prop("checked", !0),
fFamily && fontSelect.val(fFamily),
lStorage.getItem("font") ? (fontCheckbox.prop("checked", !0),
fontOptions.find("select,input").prop("disabled", !1),
setFontParams()) : fontOptions.css("opacity", "0.3"),
graphicCheckbox.on("click", function() {
    var e = graphicCheckbox.prop("checked");
    allMessagesList.toggleClass("nographic"),
    lStorage.setItem("nographic", e ? 0 : 1),
    doScroll()
}),
soundRange.on("change", function() {
    soundValue = parseInt(this.value),
    setRange(soundRange),
    lStorage.setItem("sound", soundValue)
}),
musicRange.on("change", function() {
    var e = parseInt(this.value);
    musicValue && !e || !musicValue && e ? (musicValue = e,
    music()) : musicValue = e,
    setRange(musicRange),
    lStorage.setItem("music", musicValue)
}),
alarmCheckbox.on("click", function() {
    var e = alarmCheckbox.prop("checked");
    noAlarm = e,
    lStorage.setItem("noalarm", e ? 1 : 0)
}),
radioCheckbox.on("click", function() {
    var e = radioCheckbox.prop("checked");
    (isRadio = e) || sounds.radio.pause(),
    lStorage.setItem("noradio", e ? 0 : 1)
}),
effectCheckbox.change(function() {
    var e = effectCheckbox.prop("checked");
    lStorage.setItem("noeffect", e ? 0 : 1),
    e ? b.removeClass("noeffect") : b.addClass("noeffect")
}),
gameNameInput.change(function() {
    var e = $(this).val();
    header.attr("data-name", e),
    lStorage.setItem("gamename", e)
}),
invertCheckbox.on("click", function() {
    var e = invertCheckbox.prop("checked");
    e ? b.addClass("invert") : b.removeClass("invert"),
    lStorage.setItem("invert", e ? 1 : 0)
}),
hintsCheckBox.on("click", function() {
    hintsNeed = hintsCheckBox.prop("checked"),
    lStorage.setItem("hints", hintsNeed ? 1 : 0)
}),
maffiaCheckbox.on("click", function() {
    (isMaffia = maffiaCheckbox.prop("checked")) ? (b.addClass("maffia"),
    lStorage.getItem("gamename") || header.attr("data-name", "Мафия")) : (b.removeClass("maffia"),
    lStorage.getItem("gamename") || header.attr("data-name", "День Любви")),
    shareMaffia(),
    progressTime = 0,
    lStorage.setItem("maffia", isMaffia ? 1 : 0),
    createSmilePanel(),
    showGroupWidget()
}),
fontCheckbox.on("click", function() {
    var e = $(this).prop("checked")
      , t = fontOptions.find("select,input");
    e ? (fontOptions.css("opacity", ""),
    t.prop("disabled", !1),
    lStorage.setItem("font", !0),
    setFontParams()) : (fontOptions.css("opacity", "0.3"),
    t.prop("disabled", !0),
    lStorage.removeItem("font"),
    fontsOff())
}),
fontSize.change(function() {
    var e = $(this).val();
    fontsOff("font-size12 font-size14 font-size16 font-size18 font-size20"),
    allMessagesList.addClass("font-size" + e),
    lStorage.setItem("font-size", e)
}),
fontWeight.on("click", function() {
    $(this).prop("checked") ? (allMessagesList.addClass("font-weight"),
    lStorage.setItem("font-weight", !0)) : (allMessagesList.removeClass("font-weight"),
    lStorage.removeItem("font-weight"))
}),
fontSelect.change(function() {
    var e = $(this).val();
    fontsOff("font1 font2 font3 font4 font5"),
    allMessagesList.addClass("font" + e),
    lStorage.setItem("font-family", e)
});
var gameWidth = $("#gameWidth");
lStorage.getItem("width") ? (setWidth(lStorage.getItem("width")),
gameWidth.val(lStorage.getItem("width"))) : (setWidth(),
gameWidth.val("")),
gameWidth.change(function() {
    var e = parseInt($(this).val());
    !e || 100 < e ? (setWidth(),
    lStorage.removeItem("width")) : (setWidth(e),
    lStorage.setItem("width", e))
}),
mW.hide = oW.hide = function() {
    $(this).removeClass("showWindow")
}
;
var greenUpdateButton = $("#greenRefresh");
greenUpdateButton.on("click", function() {
    greenUpdateButton.removeClass("show"),
    sendToSocket({
        type: "friends",
        action: "online"
    }),
    setTimeout(function() {
        greenUpdateButton.addClass("show")
    }, 5e3)
});
var greenlist = lists.find(".greenlist");
function showGreenList(e) {
    greenlist.empty(),
    e.forEach(function(e) {
        editGreen(e, !0)
    })
}
function editGreen(e, t) {
    if (t) {
        var a = 2 < e.room.length ? e.marked && 2 === e.marked ? "lock" : "open" : "greenroom" + e.room.substring(0, 1)
          , n = $('<div class="green' + e.sex + " " + a + '"' + (2 === e.marked ? "" : ' data-id="' + e._id + '"') + '><b data-room="' + e.room + '"><span class="lock2"></span></b><span>' + e.login + "</span></div>");
        n.find("span").on("click", function() {
            $("#adresat-id").val(e._id),
            $("#adresat").val(e.login),
            privateCheck.prop("checked", !0)
        }),
        n.find("b").on("click", function() {
            sendToSocket({
                type: "follow",
                uid: e._id
            })
        }),
        greenlist.append(n)
    }
}
function showTopLists(e) {
    if (e.topmoney) {
        var a = lists.find(".moneylist");
        e.topmoney.forEach(function(e, t) {
            $('<div data-id="' + e._id + '"><span>' + (t + 1) + ".</span><span>" + e.login + "</span><span>" + f.over1000(e.money) + "</span></div>").appendTo(a)
        })
    }
    if (e.toprating) {
        var n = lists.find(".ratinglist");
        e.toprating.forEach(function(e, t) {
            $('<div data-id="' + e._id + '"><span>' + (t + 1) + ".</span><span>" + e.login + "</span><span>" + f.over1000(e.rating) + "</span></div>").appendTo(n)
        })
    }
    if (e.topactiv) {
        var o = lists.find(".activlist");
        0 < e.topactiv.length ? e.topactiv.forEach(function(e, t) {
            var a = Object.keys(e.months)[0];
            e.activ = a ? e.months[a].activity : 0,
            $('<div data-id="' + e._id + '"><span>' + (t + 1) + ".</span><span>" + e.login + "</span><span>" + f.over1000(e.activ) + "</span></div>").appendTo(o)
        }) : $("<p>Станьте первым активным игроком этого месяца!</p>").appendTo(o)
    }
    if (e.toprefer) {
        var i = lists.find(".referlist");
        e.toprefer.forEach(function(e, t) {
            $('<div data-id="' + e._id + '"><span>' + (t + 1) + ".</span><span>" + e.login + "</span><span>" + f.over1000(e.invited) + "</span></div>").appendTo(i)
        })
    }
    lists.find("div:not(.greenlist)").find("[data-id]").on("click", showProfile)
}
$(".moneyblock").find("b").on("click", function() {
    sumChange(),
    sumGoldChange(),
    showWindow("pay")
}),
$("h3").on("click", function() {
    if (!helper.checkLocked || !helper.checkLocked($(this))) {
        var e = $(this).attr("class").substr(7);
        switch ("newgame" === e && checkGame(),
        e) {
        case "findgame":
            randomGame();
            break;
        case "leave":
            container.hasClass("current") && !game.finish ? modalWindow("Вы действительно хотите покинуть игру?", goToRoom) : goToRoom();
            break;
        default:
            showWindow(e)
        }
    }
});
var showWindowClick = function() {
    if (!helper.checkLocked || !helper.checkLocked($(this))) {
        if (submenu.hide(),
        $(this).hasClass("show-left-panel"))
            return $(this).hasClass("active-left-panel") ? $("article").css("left", "") : $("article").css("left", "55px"),
            void $(this).toggleClass("active-left-panel");
        var e = $(this).attr("class").replace("nobackground", "");
        if ("button-edit" !== e)
            if (-1 < e.indexOf("block-"))
                showSubmenuBlock(e.substr(6));
            else {
                var t = e.substr(7);
                if ("clan" === t)
                    return void clan.showWindow();
                switch (t) {
                case "total":
                    sendToSocket({
                        type: "tote",
                        action: "list"
                    });
                    break;
                case "curgames":
                    sendToSocket({
                        type: "curgames-list"
                    });
                    break;
                case "auction":
                    sendToSocket({
                        type: "auction",
                        action: "list"
                    });
                    break;
                case "quiztop":
                    sendToSocket({
                        type: "quiz-list"
                    });
                    break;
                case "myprogress":
                    Date.now() > progressTime && sendToSocket({
                        type: "progress-list"
                    });
                    break;
                case "allfriends":
                    sendToSocket({
                        type: "friends",
                        action: "list"
                    })
                }
                showWindow(t)
            }
        else
            editProfile(!0)
    }
};
function execDataAction(e) {
    var t = $(e.target)
      , a = t.attr("data-action");
    a && window[a] && window[a](t)
}
function gamesListener(e, t, a) {
    if ("UL" !== e.target.nodeName) {
        var n = $(e.target)
          , o = n.attr("id") || n.parent().attr("id") || n.parent().parent().attr("id")
          , i = a ? e.pageX + "|" + e.pageY : "";
        o && t(o, i)
    }
}
leftPanel.find("div").on("click", showWindowClick),
submenu.on("click", function(e) {
    "submenu" === e.target.id && submenu.hide()
}),
submenu.find("div>div").on("click", showWindowClick),
$(document).on("click", "strong[data-id]", showProfile).on("click", "[data-action]", execDataAction).on("mousemove touchmove", "[data-title]", function(e) {
    tooltip(e, $(this).attr("data-title"), !0)
}).on("mouseleave touchleave", "[data-title]", function(e) {
    tooltip(e, "", !1)
}).on("keypress", "textarea, input", function(e) {
    var t = e.which
      , a = $(this).attr("maxlength");
    return !a || (!($(this).val().length >= a && 8 !== t && 46 !== t) || (sound("signal"),
    !1))
}),
gamesList.bind("click touchstart", function(e) {
    showTooltip("", !1),
    gamesListener(e, goToRoom, !1)
}).bind("mousemove touchmove", function(e) {
    gamesListener(e, showTooltip, !0)
}).bind("mouseleave touchleave", function(e) {
    gamesListener(e, showTooltip, !1)
}),
$("<div/>", {
    class: "tooltip"
}).appendTo(isAppVK || mobile ? b : container),
shop.find("[data-item]").on("click", function() {
    if ($(this).attr("data-item")) {
        var e = $(this).attr("data-item").split("-")
          , t = parseInt(e[0])
          , a = parseInt(e[1]);
        0 < t && t < 7 ? sendToSocket({
            type: "buy",
            item: t,
            money: a
        }) : showMessage("Товара нет в наличии")
    } else
        showMessage("Товар не выбран")
}),
$("#options").on("click", function() {
    oW.addClass("showWindow")
}),
oW.find("button").on("click", function() {
    oW.removeClass("showWindow")
}),
oW.find(".close").on("click", function() {
    oW.removeClass("showWindow")
});
var statusSelect = $(".myselect");
function setStatus() {
    playersInfoArray[u._id].status = u.status,
    playersInfoArray[u._id].icon = u.icon,
    playersList.find("#" + u._id + ">b").removeClass().addClass("status" + u.icon);
    var e = u.icon ? ".myselect li.status" + u.icon : ".myselect li:nth-of-type(1)";
    statusSelect.find("label").removeClass().addClass("status" + u.icon).html($(e).html()),
    $("#statusText").val(u.status)
}
statusSelect.find("li").on("click", function() {
    var e = $(this).attr("class")
      , t = $(this).html();
    statusSelect.find("label").removeClass().addClass(e).html(t),
    statusSelect.find('input[type="checkbox"]').prop("checked", !1)
}),
$("#saveStatus").on("click", function() {
    var e = $("#statusText").val()
      , t = statusSelect.find("label").attr("class").substring(6) || 0;
    u.status === e && u.icon === t || (u.status = e,
    u.icon = t,
    sendToSocket({
        type: "status",
        icon: t,
        text: e
    }),
    setStatus())
});
var winTableData = {
    allfriends: {
        fields: ["№", "Основной ник", "⚥", "Вас обидели?", "Последний визит"],
        handler: deleteFriendFromTable
    },
    clanlist: {
        fields: ["№", "Название", "*", "Девиз", "Дата создания"],
        handler: null
    }
};
function winTableCreate(e) {
    var t = $("<div></div>", {
        class: e
    }).addClass("wintable").html('<div class="wintable-header"><table><tr><th>' + winTableData[e].fields.join("</th><th>") + '</th></tr></table></div><div class="wintable-content"><table></table></div>').appendTo(winInfo);
    winTableData[e].handler && t.on("click", "button", winTableData[e].handler)
}
function hotkey(e) {
    room.length < 3 && e.ctrlKey && 192 === e.keyCode && (closewindow(),
    randomGame()),
    27 === e.keyCode && closewindow()
}
function keyDown(e) {
    return 112 === e.which ? (e.preventDefault(),
    helper.start(),
    !1) : 122 === e.which ? (fullScreenToggle(),
    !1) : !(8 === e.keyCode && ("INPUT" !== e.target.tagName || e.target.readOnly) && "TEXTAREA" !== e.target.tagName && !e.target.getAttribute("contenteditable")) || (e.preventDefault(),
    !1)
}
function Unloader() {
    var e = this;
    this.unload = function(e) {
        var t = "Вы уверены, что хотите покинуть игру?";
        return void 0 === e && (e = window.event),
        e && (e.returnValue = t),
        t
    }
    ,
    this.resetUnload = function() {
        $(window).off("beforeunload", e.unload),
        setTimeout(function() {
            $(window).on("beforeunload", e.unload)
        }, 2e3)
    }
    ,
    this.init = function() {
        $(window).on("beforeunload", e.unload)
    }
    ,
    this.init()
}
Object.keys(winTableData).forEach(function(e) {
    return winTableCreate(e)
}),
clan.createForm(),
inputField.keydown(function(e) {
    return !(38 === e.which && !inputField.val()) || (e.preventDefault(),
    inputField.val(lastMsg),
    !1)
}),
document.body.onkeyup = hotkey,
document.body.onkeydown = keyDown;
var curtime = Date.now();
15357168e5 < curtime && curtime < 15359238e5 && b.append('<style type="text/css">#giftList label.onlyvip{display:block !important;}</style>');
var rolling = !1
  , rollItem = 1
  , rollCircle = 0
  , rollPrice = 50
  , roll_items = function(t) {
    return {
        ffl: {
            1: 'Активная роль + 2 часа <div class="shop-item3"></div>',
            2: 'Академический отпуск <div class="shop-item5"></div>',
            3: 'Навесной замок 3шт <div class="shop-item2"></div>',
            4: 'Клуб ФФЛ +3 дня <div class="shop-item6"></div>',
            5: 'Печенье 1шт <div class="shop-item4"></div>',
            6: "Сертификат на 1 объявление",
            7: 'Активная роль + 1 час <div class="shop-item3"></div>',
            8: 'Академический отпуск 3шт <div class="shop-item5"></div>',
            9: 'Навесной замок 2шт <div class="shop-item2"></div>',
            10: 'Клуб ФФЛ +1 день <div class="shop-item6"></div>',
            11: 'Печенье 2шт <div class="shop-item4"></div>',
            12: "Элемент коллекции <em>Активист</em>",
            13: '<span class="gamemoney">- 10 000</span>',
            14: '<span class="gamemoney">+ 10 000</span>',
            15: '<span class="money">+ 10</span>',
            16: 'Активная роль + 3 часа <div class="shop-item3"></div>',
            17: 'Академический отпуск 2шт <div class="shop-item5"></div>',
            18: 'Навесной замок 1шт <div class="shop-item2"></div>',
            19: 'Клуб ФФЛ +2 дня <div class="shop-item6"></div>',
            20: 'Печенье 3шт <div class="shop-item4"></div>',
            21: "Элемент коллекции <em>Клубная</em>",
            22: '<span class="gamemoney">- 5 000</span>',
            23: '<span class="gamemoney">+ 5 000</span>',
            24: 'Веб-камера <div class="shop-item1"></div>'
        },
        maffia: {
            1: 'Активная роль + 2 часа <div class="shop-item3"></div>',
            2: 'Автомобиль <div class="shop-item5"></div>',
            3: 'Маскировочный комплект 3шт <div class="shop-item2"></div>',
            4: 'Клуб Мафии +3 дня <div class="shop-item6"></div>',
            5: 'Жучок 1шт <div class="shop-item4"></div>',
            6: "Сертификат на 1 объявление",
            7: 'Активная роль + 1 час <div class="shop-item3"></div>',
            8: 'Автомобиль 3шт <div class="shop-item5"></div>',
            9: 'Маскировочный комплект 2шт <div class="shop-item2"></div>',
            10: 'Клуб Мафии +1 день <div class="shop-item6"></div>',
            11: 'Жучок 2шт <div class="shop-item4"></div>',
            12: "Элемент коллекции <em>Активист</em>",
            13: '<span class="gamemoney">- 10 000</span>',
            14: '<span class="gamemoney">+ 10 000</span>',
            15: '<span class="money">+ 10</span>',
            16: 'Активная роль + 3 часа <div class="shop-item3"></div>',
            17: 'Автомобиль 2шт <div class="shop-item5"></div>',
            18: 'Маскировочный комплект 1шт <div class="shop-item2"></div>',
            19: 'Клуб Мафии +2 дня <div class="shop-item6"></div>',
            20: 'Жучок 3шт <div class="shop-item4"></div>',
            21: "Элемент коллекции <em>Клубная</em>",
            22: '<span class="gamemoney">- 5 000</span>',
            23: '<span class="gamemoney">+ 5 000</span>',
            24: 'Рация <div class="shop-item1"></div>'
        }
    }[gameMode()][t]
};
function doRolling(t) {
    rollItem = t.item,
    rollCircle += 2,
    $(".roll>div").css("transform", "rotate(" + (15 * -rollItem + 7 + 360 * rollCircle) + "deg)");
    var e = '<div class="rollmsg">' + roll_items(rollItem);
    t.collect && (e += '<span class="collect' + t.collect.collect + " collect-element collect-element" + t.collect.element + '"></span>'),
    e += "</div>",
    b.hasClass("noeffect") ? (showMessage(e),
    rolling = !1) : (sound("roll"),
    setTimeout(function() {
        showMessage(e),
        rolling = !1
    }, 11e3)),
    $("#roll-start").addClass("rolling-was"),
    t.updateObj && updateInterface(t.updateObj)
}
$(".roll>div").click(function() {
    if (rolling)
        return !1;
    if (u.rolldate && date.isToday(u.rolldate))
        if (u.items[13])
            modalWindow("Использовать билет на бесплатную попытку?", function() {
                u.items[13] -= 1,
                rolling = !0,
                sendToSocket({
                    type: "rolling"
                })
            });
        else {
            if (u.money2 < rollPrice)
                return showMessage("Недостаточно денег для еще одной попытки"),
                !1;
            modalWindow('Вы хотите испытать удачу еще раз? Стоимость последующих попыток <span class="money">50</span>', function() {
                rolling = !0,
                sendToSocket({
                    type: "rolling"
                })
            })
        }
    else
        rolling = !0,
        sendToSocket({
            type: "rolling"
        });
    return !1
});
var collectRadio, collectionsData = {
    1: {
        name: "Активист",
        title: "Коллекция &quot;Активист&quot; <em>(услуга Активная роль приобретается на 30 часов)</em>",
        info: "Элемент коллекции активиста можно выиграть на барабане чудес и в лотерее."
    },
    2: {
        name: "Клубная",
        title: 'Клубная коллекция <em>(Клуб <u class="clubname"></u> активируется на 40 дней)</em>',
        info: "Элемент клубной коллекции можно выиграть на барабане чудес и в лотерее."
    },
    2017: {
        name: "2017",
        title: "Новогодняя коллекция 2017 <em>(+1% ко всем игровым бонусам)</em>",
        info: "Элементы новогодней коллекции 2017 можно выиграть в лотерее."
    },
    2018: {
        name: "2018",
        title: "Новогодняя коллекция 2018 <em>(+10% к шансу обмануть кота)</em>",
        info: "Элементы новогодней коллекции 2018 можно выиграть в лотерее."
    },
    3: {
        name: "Наставник",
        title: 'Коллекция наставника <em>(удвоение ежедневной <span class="for-ffl">стипендии</span> <span class="for-maffia">зарплаты</span>)</em>',
        info: "Элементы коллекции наставника можно получить за игровые достижения на проекте ваших учеников, зарегистрировавшихся по персональной ссылке (кнопка <em>Поделиться</em>)."
    },
    4: {
        name: "Суперскорость",
        title: "Коллекция &quot;Суперскорость&quot; <em>(быстрый набор суперигр на 100)</em>",
        multi: !0,
        info: "Элементы коллекции Суперскорость можно получить за победу в игре на 100 игроков.<br/> Коллекцию можно собирать неограниченное число раз. За полный набор элементов Вы получаете награду - 30 сертификатов на создание быстрой суперигры."
    },
    5: {
        name: "Суперсила",
        title: "Коллекция &quot;Суперсила&quot; <em>(удвоенный рейтинг на 24 часа)</em>",
        multi: !0,
        info: "Элементы коллекции Суперсила можно получить за участие в специальных партиях без ботов (с таймером). За полный набор элементов Вы получаете награду - на 100% больше рейтинга в играх."
    }
};
function showCollect(e) {
    if (e && collectionsData[e]) {
        var t = collectionWin.find("div");
        if (collectionWin.find("p").html(collectionsData[e].info),
        collectionsData[e].multi && u.collections && u.collections[e] && 15 === Object.size(u.collections[e]))
            Object.keys(u.collections[e]).every(function(t) {
                return 0 < u.collections[e][t]
            }) && $("<button></button>").css({
                display: "block",
                margin: "3px auto"
            }).html("Активировать коллекцию").on("click", function() {
                closewindow(),
                sendToSocket({
                    type: "collection",
                    collect: parseInt(e)
                })
            }).appendTo(collectionWin.find("p"));
        t.removeClass().addClass("collect" + e).empty();
        for (var o = 1; o <= 15; o++) {
            var s = $("<span></span>");
            u.collections && u.collections[e] && u.collections[e][o] ? 1 < u.collections[e][o] && s.html(u.collections[e][o]) : s.addClass("nocollect"),
            s.appendTo(t)
        }
    }
}
function itemAction(t) {
    var e = t.data.item;
    e && (-1 !== noactiveItems.indexOf(e) ? showMessage("Этот предмет пригодится Вам в соответствующей локации") : modalWindow("Активировать предмет?", function() {
        sendToSocket({
            type: "items",
            action: e
        })
    }))
}
function showInventory() {
    if (u.items) {
        var a = win.find(".inventory");
        if (a.empty(),
        0 < Object.size(u.items) || u.bonus) {
            if (Object.forEach(u.items, function(t, e) {
                if ("nytoys" !== e && 0 < t) {
                    var o = 0 < e && e < 7 ? roleText[gameMode()].items[e] : getItemsArray(e)
                      , s = $("<div></div>").attr("data-title", o).addClass("items-" + e + (-1 === noactiveItems.indexOf(e) ? "" : " noactiveItem"));
                    1 < t && s.html("<span>" + t + "</span>"),
                    s.click({
                        item: e
                    }, itemAction),
                    s.appendTo(a)
                }
            }),
            u.bonus || u.tempbonus) {
                var s = $("<section/>", {
                    class: "bonus-ring"
                });
                Object.forEach(u.bonus, function(t, e) {
                    var o = (u.tempbonus && u.tempbonus.deca ? "10x" : "") + t + "%";
                    $("<div></div>", {
                        class: "bonus-" + e,
                        "data-title": bonusRings[e]
                    }).css({
                        cursor: "auto"
                    }).html("<span>" + o + "</span>").appendTo(s)
                }),
                u.tempbonus && (u.tempbonus.all1 && $("<div/>", {
                    class: "items-17",
                    "data-title": "Новогодняя коллекция 2017 (до " + date.showDate(u.tempbonus.all1) + ")"
                }).css({
                    cursor: "auto"
                }).html("<span>+1%</span>").appendTo(s),
                u.tempbonus.anticat && $("<div/>", {
                    class: "items-2018",
                    "data-title": "Новогодняя коллекция 2018 (до " + date.showDate(u.tempbonus.anticat) + ")"
                }).css({
                    cursor: "auto"
                }).html("<span>+10%</span>").appendTo(s),
                u.tempbonus.discount && $("<div/>", {
                    class: "items-20",
                    "data-title": getItemsArray(20) + " (до " + date.showDate(u.tempbonus.discount, !0) + ")"
                }).css({
                    cursor: "auto"
                }).html("<span>-50%</span>").appendTo(s),
                u.tempbonus.nokill20 && $("<div/>", {
                    class: "items-21",
                    "data-title": getItemsArray(21) + " (до " + date.showDate(u.tempbonus.nokill20, !0) + ")"
                }).css({
                    cursor: "auto"
                }).html("<span>+20%</span>").appendTo(s),
                u.tempbonus.rev25 && $("<div/>", {
                    class: "items-22",
                    "data-title": getItemsArray(22) + " (до " + date.showDate(u.tempbonus.rev25, !0) + ")"
                }).css({
                    cursor: "auto"
                }).html("<span>+25%</span>").appendTo(s),
                u.tempbonus.intuit40 && $("<div/>", {
                    class: "items-23",
                    "data-title": getItemsArray(23) + " (до " + date.showDate(u.tempbonus.intuit40, !0) + ")"
                }).css({
                    cursor: "auto"
                }).html("<span>+40%</span>").appendTo(s),
                u.tempbonus.intuit100 && $("<div/>", {
                    class: "items-23",
                    "data-title": "100% бонус интуиции (до " + date.showDate(u.tempbonus.intuit100, !0) + ")"
                }).css({
                    cursor: "auto"
                }).html("<span>+100%</span>").appendTo(s),
                u.tempbonus.rating && $("<div/>", {
                    class: "items-26",
                    "data-title": "удвоенный рейтинг (до " + date.showDate(u.tempbonus.rating, !0) + ")"
                }).css({
                    cursor: "auto"
                }).html("<span>+100%</span>").appendTo(s)),
                s.appendTo(a)
            }
        } else
            a.append("<h5>У Вас пока нет ни одного полезного предмета.</h5>")
    }
}
var slotArray = [1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24]
  , slotCount = slotArray.length
  , slotInterval = 600
  , slotsRotating = 0
  , slotActive = !1;
function slotStart() {
    if (!slotActive) {
        var t = parseInt($("#slot-bet").find("input[name=slots]:checked").val()) || 0;
        if (zTimers.slots)
            return void showMessage("Следующую попытку можно сделать только после остановки таймера.");
        t ? (setTimeout(function() {
            $("#slot-handler").attr("src", "/images/slot-handle.gif").css({
                cursor: "wait"
            })
        }),
        slotActive = !0,
        sendToSocket({
            type: "slot",
            item: t
        }),
        u.items[t]--) : showMessage("Сначала выберите предмет из Вашего инвентаря, который Вы хотите использовать как ставку.")
    }
}
function slotTimerStart(t) {
    $("#timer-slots").attr("data-lost", t),
    zayavkaInTimer("slots"),
    zTimers.slots = setInterval(function() {
        zayavkaInTimer("slots")
    }, 3e3)
}
function slotAction(t) {
    var e = t.items;
    slotTimerStart(slotInterval),
    slotsRotating = 3;
    for (var o = 1; o < 4; o++) {
        var s = $("#slot" + o)
          , a = parseInt(s.css("top")) || 0;
        slotMotion(s, 60 * -slotArray.indexOf(e[o - 1]) - a + 60 * slotCount * 3 + 60, a)
    }
    t.win && ($.each(t.win, function(t, e) {
        u.items[t] || (u.items[t] = 0),
        u.items[t] += e
    }),
    slotActive = t.win)
}
function slotMotion(t, e, o) {
    if (0 < e) {
        var s = b.hasClass("noeffect") ? e : Math.floor(e / 500) + 1;
        for (e -= s,
        o += s; 0 < o; )
            o += 60 * -slotCount;
        t.css({
            top: o + "px"
        });
        var a = 500 < e ? 10 : 10 - Math.ceil(e / 50);
        setTimeout(slotMotion, a, t, e, o)
    } else
        --slotsRotating <= 0 && ($("#slot-handler").attr("src", "/images/slot-handle.png").css({
            cursor: "pointer"
        }),
        !0 === slotActive ? showMessage("Вам немного не повезло. Следующая попытка должна быть удачной!") : showBox({
            box: slotActive,
            text: "Вы выиграли"
        }),
        updateInterface(),
        slotActive = !1)
}
function areaAttack() {
    var t = $(this).attr("data-area");
    t && 2e3 <= u.money ? (sendToSocket({
        type: "area",
        num: t
    }),
    closewindow()) : showMessage("Недостаточно средств для начала битвы.")
}
lotteryDiv.find("button").click(function() {
    showWindow("lottery")
}),
lotteryDiv.find("p").click(function() {
    modalWindow("Скрыть обратный отсчёт до следующей лотереи?", function() {
        clearInterval(lotteryInterval),
        0 < u.lottery - date.now() ? (lotteryInterval = setInterval(lotteryTimer, 5e3),
        lotteryDiv.find("p").hide()) : lotteryTimer()
    })
});
var lotteryInterval, lotteryQuery = !1, lotteryTimerStart = function() {
    lotteryTimer(),
    lotteryDiv.find("p").fadeIn(),
    lotteryInterval = setInterval(lotteryTimer, 5e3)
}, lotteryTimer = function() {
    var t = Math.round((u.lottery - date.now()) / 1e3);
    if (0 < t) {
        var e = Math.floor(t / 60)
          , o = t % 60;
        e < 10 && (e = "0" + e),
        o < 10 && (o = "0" + o),
        lotteryDiv.find("p").html(e + ":" + o)
    } else
        clearInterval(lotteryInterval),
        lotteryDiv.find("button").show(),
        lotteryDiv.find("p").hide()
}, rouletteForm = $(".rouletteForm"), rouletteWas = function() {
    return u.roulette && date.isToday(u.roulette)
}, rouletteDisable = function(t) {
    t ? (rouletteForm.find("label").show(),
    rouletteForm.find("button").show(),
    rouletteForm.hide()) : (rouletteForm.show(),
    rouletteForm.find("label").hide(),
    rouletteForm.find("button").hide())
}, rouletteInfo = function(t) {
    var e = $("#rouletteResult").find("p");
    e.empty(),
    t.hasOwnProperty("sum") && e.eq(0).html("Сделано ставок на общую сумму: " + t.sum),
    t.hasOwnProperty("last") && e.eq(1).html("Результат вчерашнего розыгрыша: " + t.last),
    t.winners && 0 < t.winners.length && e.eq(2).html("Cчастливчики: " + t.winners.join(", "))
}, rouletteTable = function() {
    var t = $("#rouletteTable")
      , e = $("<tr/>")
      , o = $("<tr/>")
      , s = $("<tr/>");
    e.append('<th rowspan="3">0</th>');
    for (var a = 0; a < 12; a++)
        $("<td/>").html(3 * a + 3).appendTo(e),
        $("<td/>").html(3 * a + 2).appendTo(o),
        $("<td/>").html(3 * a + 1).appendTo(s);
    t.append(e).append(o).append(s),
    t.click(function(t) {
        if (rouletteWas())
            showMessage("Можно сделать только одну ставку в день. Приходите завтра.");
        else {
            var e = t || window.event
              , o = e.target || e.srcElement;
            "TD" !== o.tagName && "TH" !== o.tagName || (rouletteForm.find("span").html(o.innerHTML),
            rouletteForm.show())
        }
    })
};
function toteVariants(s, a, n) {
    Object.forEach(n[s].variants, function(t, e) {
        var o = "tote" + s + "_" + e;
        $('<input type="radio" id="' + o + '" name="tote' + s + '" class="check" value="' + e + '"/><label for="' + o + '" data-title="' + (n[s].bets[e].sum ? f.someThing(n[s].bets[e].count, "ставка", "ставки", "ставок") + " на общую сумму " + f.over1000(n[s].bets[e].sum) + (n[s].bets[e].mybet ? "(ваша ставка - " + f.over1000(n[s].bets[e].mybet) + ")" : "") : "Нет ставок") + '"></label>').html(t.text + (n[s].bets[e].sum ? " (" + f.roundTwo(n[s].sum / n[s].bets[e].sum) + ")" : "")).appendTo(a)
    })
}
function showToteList(t) {
    var e = win.find(".total");
    if (e.empty(),
    0 < t.length)
        for (var o = 0, s = t.length; o < s; o++) {
            var a = t[o]._id
              , n = $('<div id="tote' + t[o]._id + '"></div>');
            $("<h5>" + t[o].title + "</h5>").appendTo(n),
            $("<p>" + t[o].descr + "</p>").appendTo(n),
            toteVariants(o, n, t),
            $("<span>" + date.showDate(t[o].dateto, !0) + "</span>").appendTo(n),
            $('<br/><label class="gamemoney">Ваша ставка <input type="text" value="10" /> 000 </label>').appendTo(n),
            $('<button class="button">Сделать ставку</button>').appendTo(n).click({
                toteid: a
            }, doBet),
            $('<div>∑ = <span class="gamemoney">' + f.over1000(t[o].sum) + "</span></div>").appendTo(n),
            e.append(n)
        }
    else
        e.html("<div><h5>В тотализаторе нет ни одного предстоящего события</h5></div>")
}
function doBet(t) {
    var e = t.data.toteid
      , o = $("#tote" + e)
      , s = parseInt(o.find('input[type="text"]').val());
    if (!s || s < 1)
        showMessage('Минимальная ставка <span class="gamemoney">1 000</span>');
    else if (1e3 * s > u.money)
        showMessage("Для такой ставки недостаточно денег на вашем игровом счете");
    else {
        var a = o.find("h5").html()
          , n = o.find('input[type="radio"]:checked');
        if (n.val()) {
            var i = n.next().html();
            modalWindow('Уверены, что хотите сделать ставку в размере <span class="gamemoney">' + f.over1000(1e3 * s) + "</span> на вариант <b>" + i + "</b> в событии <em>" + a + "</em>?<br/> Отменить ставку будет невозможно!", function() {
                sendToSocket({
                    type: "tote",
                    action: "add",
                    id: e,
                    bet: s,
                    variant: n.val()
                })
            })
        } else
            showMessage("Не выбран возможный вариант события для ставки")
    }
}
function showAuctionList(t) {
    var e = win.find(".auction");
    if (e.empty(),
    0 < t.length) {
        e.append('<div class="specialnews">Каждая ставка продлевает время аукциона на 3 суток. Победителем становится игрок, чья ставка продержится 72 часа. Ставки, перебитые другими участниками, возвращаются их владельцам</div>');
        for (var o = 0, s = t.length; o < s; o++) {
            var a = t[o]._id
              , n = $('<div id="auction' + t[o]._id + '"></div>');
            $('<img src="/images/lots/' + t[o].img + '" alt="Изображение лота"/>').appendTo(n),
            $('<h5 class="money">' + t[o].bet + "</h5>").appendTo(n),
            $("<p>" + t[o].lot + "</p>").appendTo(n),
            $("<span>" + date.showDate(t[o].dateto, !0) + "</span>").appendTo(n),
            $('<br/><label class="money">Ваша ставка <input type="text" value="10" /></label>').appendTo(n),
            $("<button>Сделать ставку</button>").appendTo(n).click({
                aucid: a,
                min: t[o].bet
            }, doAuctionBet),
            t[o].login && $("<div>Последняя ставка: " + t[o].login + "</div>").appendTo(n),
            e.append(n)
        }
    } else
        e.html('<div><h5 class="nobefore">Нет доступных лотов</h5></div>')
}
function doAuctionBet(t) {
    var e = t.data.aucid
      , o = t.data.min + 1 || 1
      , s = $("#auction" + e)
      , a = parseInt(s.find('input[type="text"]').val());
    !a || a < o ? showMessage('Минимальная ставка <span class="money">' + o + "</span>") : a > u.money2 ? f.notEnough({
        action: "money2"
    }) : modalWindow('Уверены, что хотите сделать ставку в размере <span class="money">' + f.over1000(a) + "</span> на этот лот?<br/> Если вашу ставку перебьют другие участники, вся сумма будет возвращена на ваш счет!", function() {
        sendToSocket({
            type: "auction",
            lot: e,
            bet: a
        })
    })
}
function showQuiz(t) {
    $(".quiz").remove();
    for (var e = $('<div class="quiz">' + t.text + "</div>"), o = $("<p></p>"), s = 0; s < t.wordlen; s++) {
        var a = "<span";
        t.open && t.open[s] && " " === t.open[s] && (a += ' class="spaceLetter"'),
        a += ">" + (t.open && t.open[s] ? t.open[s] : "") + "</span>",
        $(a).appendTo(o)
    }
    o.appendTo(e),
    e.bind("click contextmenu selectstart", function(t) {
        return t.preventDefault(),
        !1
    }),
    $("<div/>").html("x").bind("click", function() {
        modalWindow("Хотите отключить викторину до конца текущего сеанса?", function() {
            quizEnable = !1,
            $(".quiz").remove(),
            showMessage("Чтобы вновь включить викторину, напишите в чате команду &quot;викторина+&quot; без кавычек и пробелов.")
        })
    }).appendTo(e),
    $("<div/>", {
        class: "quizabout"
    }).html("?").bind("click", function() {
        showMessage("Чтобы дать ответ в викторине необходимо написать слово (или слова) целиком в общий чат (или личным, но не приватным сообщением).")
    }).appendTo(e),
    e.appendTo(messagesList),
    e.clone().appendTo(mymessagesList),
    doScroll()
}
rouletteTable(),
rouletteForm.find("button").click(function() {
    var t = parseInt(rouletteForm.find("input").val());
    t ? 1e3 * t > u.money ? showMessage("Ставка превышает сумму ваших сбережений") : sendToSocket({
        type: "roulette",
        num: rouletteForm.find("span").html(),
        bet: t
    }) : showMessage('Ставка должна быть больше <span class="gamemoney">1 000</span>')
}),
roulette.click(function() {
    rouletteWas() && rouletteDisable(),
    showWindow("roulette")
});
var quizTop = $(".quiztop");
function showProfile() {
    var t = $(this).attr("data-id");
    t && sendToSocket({
        type: "profile",
        uid: t
    })
}
var quizRanks = {
    10: "Новичок",
    50: "Ученик",
    100: "Знаток",
    300: "Профи",
    500: "Мастер",
    1e3: "Гуру",
    3e3: "Мыслитель",
    5e3: "Мудрец",
    1e4: "Просветленный",
    15e3: "Оракул",
    3e4: "Гений",
    5e4: "Искусственный Интеллект",
    1e5: "Высший разум"
};
function showQuizList(t) {
    var s = '<table><tr class="quizHeader"><td></td><th>Игроки</th><td>Очки</td><td>Звания</td></tr>'
      , a = 0;
    t.forEach(function(e) {
        var o = "-";
        a++,
        Object.keys(quizRanks).every(function(t) {
            return o = quizRanks[t],
            e.quiz >= t
        }),
        s += "<tr><td>" + a + '</td><th data-id="' + e._id + '">' + e.login + "</th><td>" + e.quiz + "</td><td>" + o + "</td></tr>"
    }),
    s += "</table>",
    quizTop.html(s),
    quizTop.find("th").on("click", showProfile)
}
function errorText(e, a) {
    var s = $("#errorBlock");
    s.length || (s = $("<div/>", {
        id: "errorBlock"
    }).appendTo(b));
    var t = "<h1>" + e + "</h1>";
    a || (t += '<p>Попробуйте перезагрузить страницу. Если проблема повторяется, <a href="https://vk.com/im?media=&sel=-' + (isMaffia ? "109864615" : "39094155") + '" title="Написать сообщение" target="_blank">сообщите нам</a></p>'),
    s.html(t),
    s.show()
}
function showPlayersList(e, a) {
    playersInfoArray = {},
    playersList.empty(),
    battleDiv.find(".playerlist").empty(),
    a.length < 3 ? (container.removeClass().addClass("color" + parseInt(a)),
    roomInHall = a,
    actionButton.removeClass("my")) : container.removeClass().addClass("ingame"),
    Object.forEach(e, function(e) {
        editPlayerList(e, 0, !0)
    })
}
function gameTypeInfo(e) {
    var a = ""
      , s = e.hasOwnProperty("style") ? e.style.hasOwnProperty("style") ? e.style.style : e.style : 0;
    return e.selecting && (a += '<b class="selrolgame"></b>'),
    e.botwall && (a += '<b class="botwall"></b>'),
    e.shortnight && (a += '<b class="shortnight"></b>'),
    e.man && (a += '<b class="manmode"></b>'),
    a + " " + gameStyle[s] + " на " + e.count + " игроков"
}
function showGameInfo(a) {
    closedgame = 2 === a.style,
    gametitle.html("<span>" + gameTypeInfo(a) + '</span> <span id="addedToGame">' + a.add + '</span> <span id="remainForGame">' + (a.count - a.add) + "</span> <span>Cтавка " + a.sum + "</span>"),
    $("article").find(".blocktitle").find(".gamemakerinfo").html(a.creator + ": &laquo;" + a.caption + "&raquo;").attr("data-title", a.caption),
    header.find(".gamestyle").find("span").each(function(e) {
        $(this).removeClass(),
        a["style" + (e + 1).toString()] && $(this).addClass("enabledoption")
    });
    var e = document.getElementById("playersButton");
    e.className = "",
    closedgame && a.creator === u.login && (e.className = "my",
    e.innerHTML = "Принять"),
    game.sum = a.sum,
    gamemoney.html(f.over1000(u.money - a.sum));
    var s = roleText.all.zayavka;
    if (3 === a.style ? s = "Это необычная игра, а битва против ботов, где Вам вместе с другими игроками предстоит противостоять команде ботов!<br/> Дождитесь союзников, соперники прибудут позже." : a.married && (s = "Добро пожаловать на свадебную церемонию!<br/> Подождите, когда все гости соберутся..."),
    showNewDiv(s),
    5e3 < u.money && showNewDiv('<div id="inviteToGameDiv">За <span class="gamemoney">2 000</span> можно позвать всех свободных игроков сюда! <button data-action="inviteToGame">Позвать</button></div>'),
    a.specialRoles) {
        var t = "Создатель партии выбрал следующие роли: ";
        a.specialRoles.forEach(function(e) {
            t += '<span class="rolesmile role' + e + '"></span>'
        }),
        showNewDiv("<div>" + t + "</div")
    }
    if (a.params) {
        var i = [];
        a.params.noitem4 && i.push('<span class="for-ffl">без печенья</span><span class="for-maffia">без жуков</span>'),
        a.params.nobonus && i.push("без игровых бонусов"),
        a.params.hasOwnProperty("item2") && i.push('Лимит <span class="for-ffl">замков</span><span class="for-maffia">маскировок</span> - ' + a.params.item2),
        showNewDiv("<div>В этой партии создателем установлены следующие ограничения:<ul><li>" + i.join("</li><li>") + "</li></ul></div>")
    }
    if (showNewDiv('<div class="blue">Скучно играть одному ☹? ' + (isAppVK ? '<span class="pseudolink" data-action="inviteFriends">Пригласи друзей и знакомых</span>' : 'Скинь друзьям ссылку<br/> <input type="text" readonly="readonly" value="' + getGameUrl() + '" style="width:100%;background:none;color:#f00"/><br/>') + " и играй вместе с ними ☺!</div>"),
    helper.hint("wait-players"),
    closedgame ? container.addClass("closedgame") : container.removeClass("closedgame"),
    a.style1 ? (container.addClass("noprivate"),
    privateCheck.prop("checked", !1)) : container.removeClass("noprivate"),
    a.married ? (container.addClass("wedding"),
    game.married = a.married) : (container.removeClass("wedding"),
    game.married = !1),
    a.starttime) {
        zTimers[a._id] && clearInterval(zTimers[a._id]);
        var n = $("<span/>", {
            id: "timer-" + a._id,
            class: "timer",
            "data-lost": Math.floor((a.starttime - date.now()) / 1e3)
        });
        $("<div/>", {
            class: "lastwords"
        }).html("Игра начнется через: ").append(n).appendTo(messagesList),
        zayavkaInTimer(a._id),
        zTimers[a._id] = setInterval(function() {
            zayavkaInTimer(a._id)
        }, 3e3)
    }
}
function showGamesList(e) {
    gamesInfoArray = {},
    gamesList.empty(),
    Object.forEach(e, function(e) {
        editGameList(e)
    })
}
function showNewMessage(e) {
    var a = "#000022"
      , s = document.createElement("div")
      , t = document.createElement("div")
      , i = document.createElement("div")
      , n = e.from;
    if (i.className = "message",
    s.className = "writer",
    n || "Игра начинается" !== e.message || (n = "[server]",
    $("h3.leave").css({
        visibility: "hidden"
    }),
    setTimeout(function() {
        $("h3.leave").css({
            visibility: ""
        })
    }, 5e3)),
    n) {
        if (n.id && -1 < reds.indexOf(n.id) || server2 && !$("div").is("#" + n.id))
            return;
        if (!n.image && playersInfoArray[n.id] && (n.sex = playersInfoArray[n.id].sex,
        n.image = playersInfoArray[n.id].image),
        n.image)
            if (2 < n.image.length) {
                i.className += " userimage";
                var o = document.createElement("div");
                o.className = "selfimg",
                o.style.backgroundImage = "url(/files/" + n.id + n.image + ")",
                i.appendChild(o)
            } else {
                var r = 1 === n.sex ? "w" : "m";
                r = n.image ? r + n.image : "",
                i.className += " " + r
            }
        n.creator && playersInfoArray[n.creator] && (e.to = n.creator,
        e.toName = playersInfoArray[n.creator].login)
    } else
        i.className += " noimage",
        e.color && (i.style = "color:" + e.color);
    "private" === e.msgType && (i.className += " private");
    var l = u.color && u.color !== a ? ' style="color:' + u.color + ' !important"' : ' class="me"';
    if (!e.target) {
        e.color && "#000" === e.color && (e.color = a);
        var d = e.color && e.color !== a ? ' style="color:' + e.color + '"' : ""
          , m = n && n.id && n.login ? '<b data-id="' + n.id + '"' + d + (n.id === u._id ? l : "") + ">" + n.login + "</b>" + (e.to ? "->" : ": ") : "";
        if (e.to && e.toName && 0 < e.toName.length && !game.intuition) {
            if (m += ' <b data-id="' + e.to + '"',
            e.to === u._id) {
                if (!container.hasClass("ingame") && date.pluhTime < date.now() - 1e4)
                    switch (e.message) {
                    case "плюх":
                        showWall(battleWords[100].shot),
                        date.pluhTime = date.now();
                        break;
                    case "целую":
                        showWall("other/bearlove.gif"),
                        date.pluhTime = date.now();
                        break;
                    case "мяу":
                        showWall("other/cats.gif"),
                        date.pluhTime = date.now();
                        break;
                    case "ауау":
                        showWall("other/auau.gif"),
                        date.pluhTime = date.now();
                        break;
                    case ":-*":
                    case "чмок":
                    case "люблю":
                        var c = f.randomInt(13);
                        showWall("/images/holidays/love/" + c + ".gif", {
                            external: !0,
                            transparent: !0
                        }),
                        date.pluhTime = date.now()
                    }
                i.className += " sendme",
                m += l,
                sound("notify")
            }
            m += ">" + e.toName + "</b>: "
        }
        s.innerHTML = m,
        n && "[server]" === n && (t.style.color = "#f00",
        t.style.fontFamily = "Ubuntu Mono, Consolas, Monaco, monospace")
    }
    e.msgStyle && (t.className = e.msgStyle),
    t.innerHTML = specials_in(e),
    i.appendChild(s),
    i.appendChild(t),
    messagesList.append(i),
    (n && n.id && n.id === u._id || e.to && e.to === u._id) && mymessagesList.append($(i).clone()),
    doScroll()
}
var notextMsgCount = 0;
function sendMessage() {
    var e = inputField.val().trim().substring(0, 200)
      , a = e.toLowerCase().replace(/[.?!]/g, "").trim()
      , s = e.replace(/\[[A-z]+\]/g, "").trim()
      , t = !0;
    if (e && (!container.hasClass("current") || !game.finish && 4 !== game.period))
        if ("." !== e || u.vip) {
            3 < (notextMsgCount = "" === s ? notextMsgCount + 1 : 0) && (sounds.joke || (sounds.joke = createAudio("/media/joke." + soundExt)),
            notextMsgCount = 0,
            sound("joke"));
            var i = $("#adresat-id").val();
            switch (a) {
            case "хочу снега":
                b.addClass("snow"),
                t = !1;
                break;
            case "не надо снега":
                b.removeClass("snow"),
                t = !1;
                break;
            case "ёлка+":
                halltree && (halltree.show(),
                t = !1);
                break;
            case "ёлка-":
                halltree && (halltree.hide(),
                t = !1);
                break;
            case "очистить чат":
                $(".messages:visible").empty(),
                t = !1;
                break;
            case "давай дружить":
                0 < i.length && friendQuery("question", i);
                break;
            case "бах":
                0 < i.length && u.items[24] && (sendToSocket({
                    type: "items",
                    action: "24",
                    login: $("#adresat").val(),
                    uid: i
                }),
                t = !1);
                break;
            case "я хочу":
                showWall("other/fallstar.gif");
                break;
            case "конверт-":
                noconvert = !0,
                showNewDiv('<div class="browm">Анимация конвертов отключена</div>'),
                t = !1;
                break;
            case "конверт+":
                noconvert = !1,
                showNewDiv('<div class="browm">Анимация конвертов включена</div>'),
                t = !1;
                break;
            case "приглашения-":
                invitesToGame = !1,
                showNewDiv('<div class="browm">Приглашения в игры отключены</div>'),
                t = !1;
                break;
            case "приглашения+":
                invitesToGame = !0,
                showNewDiv('<div class="browm">Приглашения в игры включены</div>'),
                t = !1
            }
            if (!container.hasClass("ingame"))
                switch (a) {
                case "хочу стенку":
                    setStenka(),
                    t = !1;
                    break;
                case "хочу чп":
                    setCHP(),
                    t = !1;
                    break;
                case "help":
                    helper.start(),
                    t = !1;
                    break;
                case "викторина-":
                    quizEnable = !1,
                    showNewDiv('<div class="browm">Викторина отключена</div>'),
                    t = !1;
                    break;
                case "викторина+":
                    quizEnable = !0,
                    showNewDiv('<div class="browm">Викторина включена</div>'),
                    t = !1;
                    break;
                case "салют-":
                    fireworkEnable = !1,
                    showNewDiv('<div class="browm">Вы решили не смотреть праздничные фейерверки</div>'),
                    t = !1;
                    break;
                case "салют+":
                    fireworkEnable = !0,
                    showNewDiv('<div class="browm">Теперь Вы тоже не пропустите праздничные фейерверки</div>'),
                    t = !1;
                    break;
                case "редактор меню":
                    showWindow("menu-editor"),
                    t = !1;
                    break;
                case "киндер-сюрприз":
                    maffiaNEW()
                }
            if (t) {
                var n = privateCheck.prop("checked");
                if (!n && 0 < i.length && !$("div").is("#" + i))
                    return;
                var o = 0 < i.length ? $("#adresat").val() : "";
                if (n && o === $("#nick").html())
                    return;
                var r = 0 < i.length ? n ? "private" : "direct" : "public";
                lastMsg = e,
                "testgame" === room ? !game.period || u.vip || n || 1 !== game.period && 4 !== game.period ? showNewMessage({
                    message: specials_out(e),
                    from: {
                        id: u._id,
                        login: u.login,
                        image: u.image,
                        sex: u.sex
                    },
                    msgType: r,
                    to: i,
                    toName: o
                }) : showMessage("Мирные граждане могут пользоваться общим чатом только днём<br/> (или при наличии VIP-статуса)") : n && i && playersInfoArray[i] && playersInfoArray[i].bot ? (showNewMessage({
                    message: specials_out(e),
                    from: {
                        id: u._id,
                        login: u.login,
                        image: u.image,
                        sex: u.sex
                    },
                    msgType: r,
                    to: i,
                    toName: o
                }),
                showNewMessage({
                    message: specials_out("Привет, " + u.login + "! Я - бот, но мне все равно приятно твое внимание :)"),
                    from: playersInfoArray[i],
                    msgType: r,
                    to: u._id,
                    toName: u.login
                })) : sendToSocket({
                    type: "message",
                    msgType: r,
                    to: i,
                    toName: o,
                    message: specials_out(e)
                })
            }
            inputField.val("")
        } else
            showNewMessage({
                message: 'Не "точкай" :)',
                color: "#ff0000",
                from: "[server]"
            })
}
function userGoEvent(e, a) {
    if (container.hasClass("wedding")) {
        var s = 1 === e.sex ? "a гостья" : " гость";
        game.married && -1 < game.married.indexOf(e._id) && (s = 1 === e.sex ? 'a <span class="lastwords">невеста</span>' : ' <span class="lastwords">жених</span>'),
        a ? game.writeText('<div class="votemsg">Зал для свадебной церемонии покинул' + s + ' <b data-id="' + e._id + '">' + e.login + "</b></div>", e) : game.writeText('<div class="votemsg">На свадьбу прибыл' + s + ' <b data-id="' + e._id + '">' + e.login + "</b></div>", e)
    } else
        game.writeText('<div class="votemsg">' + (1 === e.sex ? a ? "Отсоединилась" : "Присоединилась" : a ? "Отсоединился" : "Присоединился") + ' <b data-id="' + e._id + '">' + e.login + "</b> " + (1 === e.sex ? " ♀" : " ♂") + "</div>", e)
}
function editPlayerList(e, a, s) {
    if (e && e._id) {
        var t = container.hasClass("current");
        if (playersList.find("#" + e._id).remove(),
        a)
            2 < room.length && (t ? playersInfoArray[e._id] ? e.role && (game.writeText('<div class="important"><b class="nickname" data-id="' + e._id + '">' + playersInfoArray[e._id].login + "</b> - " + roles(e.role).name + " - " + (1 === playersInfoArray[e._id].sex ? roleText.all.leave1 : roleText.all.leave2) + "</div>", {
                id: e._id
            }),
            playersInfoArray[e._id].killed = !0) : game.writeText('Кажется, <b class="nickname" data-id="' + e._id + '">кто-то</b> подглядывал за игрой', {
                id: e._id
            }) : playersInfoArray[e._id] && (userGoEvent(playersInfoArray[e._id], a),
            closedgame && !playersInfoArray[e._id].marked || (changeNumberHtml("addedToGame", -1),
            changeNumberHtml("remainForGame", 1)),
            delete playersInfoArray[e._id]));
        else {
            playersInfoArray[e._id] = e;
            var i = $("<div/>", {
                id: e._id
            }).html("<b></b>" + matFilter(e.login));
            i.attr("data-nick", e.login),
            i.mouseenter(function() {
                return showPlayerInfo(!0, $(this).attr("id")),
                !1
            }).mouseleave(function() {
                return showPlayerInfo(!1),
                !1
            }),
            u.friends && -1 < u.friends.indexOf(e._id) && i.addClass("green"),
            e.vip && i.addClass("vipPlayer"),
            e.curator ? i.addClass("curatorPlayer") : e.clan && clan.all[e.clan] ? (i.addClass("clanPlayer"),
            $("<span></span>", {
                "data-id": e.clan,
                class: "clan-icon"
            }).css("background", clan.getIcon(e.clan)).appendTo(i)) : room.length < 3 && i.addClass("mode" + e.mode),
            -1 < reds.indexOf(e._id) && i.addClass("red"),
            e.icon && i.find("b").addClass("status" + e.icon),
            1 === e.marked && i.addClass("marked"),
            i.appendTo(playersList),
            !s && 2 < room.length && !container.hasClass("current") && (userGoEvent(e, a),
            closedgame || (changeNumberHtml("addedToGame", 1),
            changeNumberHtml("remainForGame", -1)))
        }
        aside.find(".blocktitle").html(" (" + playersList.find("div").length.toString() + ")");
        var n = [];
        playersList.find("div").each(function() {
            var e = [$(this).attr("data-nick"), $(this)];
            n.push(e)
        }),
        n.sort(plSort),
        playersList.html(),
        $.each(n, function() {
            playersList.append(this[1])
        })
    }
}
var zTimers = {}
  , zayavkaTimer = function(e) {
    var a = $("#" + e).find(".timer");
    if (a) {
        var s = a.attr("data-lost");
        0 < (s -= 3) ? (a.attr("data-lost", s),
        a.html(date.countdown(s))) : (clearInterval(zTimers[e]),
        delete zTimers[e])
    }
}
  , zayavkaInTimer = function(e) {
    var a = $("#timer-" + e);
    if (a) {
        var s = a.attr("data-lost");
        0 < (s -= 3) ? (a.attr("data-lost", s),
        a.html(date.countdown(s))) : (clearInterval(zTimers[e]),
        delete zTimers[e],
        a.attr("data-lost", ""),
        a.empty())
    }
};
function editGameList(e) {
    if ($("#" + e._id).remove(),
    delete gamesInfoArray[e._id],
    !e.del) {
        var a = $("<li></li>");
        e.special && a.addClass("specialgame"),
        13 === e.gametype && a.addClass("important"),
        a.html('<span class="row1">' + (e.cat ? "&#128008;" : "") + e.creator + '</span><span class="row2">' + e.sum + '</span><span class="row3">' + e.count + '</span><span class="row4">' + (e.selecting ? '<b class="selrolgame"></b>' : "") + (e.botwall ? '<b class="botwall"></b>' : "") + (e.shortnight ? '<b class="shortnight"></b>' : "") + (e.man ? '<b class="manmode"></b>' : "") + gameStyle[e.style] + '</span><span class="row5">' + e.add + '</span><span class="row6">' + (e.count - e.add) + "</span>"),
        a.attr("id", e._id);
        for (var s = '<div class="gticons">', t = 1; t < 5; t++) {
            var i = "<span";
            1 === e["style" + t] && (i += ' class="enabled"'),
            s += i += "></span>"
        }
        s += '</div><div class="gtheader">' + (gameTypes[e.gametype] ? gameTypes[e.gametype] : "Нестандартная партия") + '</div><div class="gtcaption">' + e.caption + '</div><div class="gtplayers">' + (e.players ? e.players.join(", ") : "") + "</div>" + (e.bonus ? "<sub>За участие в этой игре можно получить подарок.</sub>" : ""),
        gamesInfoArray[e._id] = s,
        gamesList.append(a),
        e.starttime && (zTimers[e._id] && clearInterval(zTimers[e._id]),
        $("<b/>", {
            class: "timer",
            "data-lost": Math.round((e.starttime - date.now()) / 1e3)
        }).appendTo(a.find(".row1")),
        zayavkaTimer(e._id),
        zTimers[e._id] = setInterval(function() {
            zayavkaTimer(e._id)
        }, 3e3)),
        sortTable()
    }
}
function goToRoom(e) {
    "testgame" === room && helper.helpGameTimer && helper.helpGameStop();
    var a = e || roomInHall;
    3 !== ws.readyState && (helper && helper.enabled() && helper.stop(),
    6 != +a || u.club ? (showNewMessage({
        message: "Переходим..."
    }),
    sendToSocket({
        type: "go",
        room: a.toString()
    })) : showMessage('Только для членов Клуба <u class="clubname"></u>!'))
}
function randomGame() {
    var e = gamesList.find("li");
    if (0 < e.length) {
        var a = Math.floor(Math.random() * e.length);
        e.eq(a).click()
    } else
        showNewMessage({
            message: "Игра не найдена. Нужно создать свою игру!",
            color: "#ff0000"
        }),
        sendToSocket({
            type: "create",
            count: 16,
            sum: 1,
            gametype: "2",
            style: 0,
            selectRole: !0,
            about: "Чаще создавайте игры!"
        })
}
function selectPlayer(e) {
    e !== u._id && (playersList.find("div").removeClass("select"),
    $("#" + e).addClass("select"))
}
function markPlayer() {
    var e = playersList.find("div.select");
    0 < e.length ? sendToSocket({
        type: "mark",
        selected: e.attr("id"),
        kick: e.hasClass("marked")
    }) : modalWindow("Вы уверены, что хотите принять в игру всех желающих?", markAll)
}
function markAll() {
    var e = playersList.find("div:not(.marked)");
    if (container.hasClass("ingame") && 0 < e.length) {
        var a = e.eq(0).attr("id");
        if (24 !== a.length || parseInt($("#remainForGame").html()) < 2)
            return;
        sendToSocket({
            type: "mark",
            selected: a
        }),
        setTimeout(markAll, 1e3)
    }
}
function suggestedPlayer(e) {
    var a, s = e._id, t = $("#" + s);
    t && (playersInfoArray[s] || (playersInfoArray[s] = {
        login: "Котик"
    }),
    e.kick ? (a = "Игрок " + playersInfoArray[s].login + " исключен создателем.",
    t.removeClass("marked"),
    playersInfoArray[s].marked = 0) : (a = "Игрок " + playersInfoArray[s].login + " одобрен создателем.",
    t.addClass("marked"),
    playersInfoArray[s].marked = 1),
    game.writeText(a),
    changeNumberHtml("addedToGame", e.allmarked, !0),
    changeNumberHtml("remainForGame", e.all - e.allmarked, !0))
}
function showPlayerInfo(e, a) {
    ptp.queue("fx", []);
    var s = ptp.find("#playerInfo-stat")
      , t = playersInfoArray[a];
    if (e && t) {
        t.hide && a === u._id && (t = u),
        t.bot && t.creator && playersInfoArray[t.creator] && (t.icon = 2,
        t.status = playersInfoArray[t.creator].login);
        var i = function(e, a) {
            return (void 0 === e[a + "1"] ? t.bot || t.hide ? "-" : "0" : e[a + "1"]) + " / " + (void 0 === e[a + "0"] ? t.bot || t.hide ? "-" : "0" : e[a + "0"])
        };
        t.image && 2 < t.image.length ? ptp.find("#playerInfo-image").removeClass().css({
            background: "url(/files/" + a + t.image + ") center center no-repeat",
            "background-size": "contain"
        }) : ptp.find("#playerInfo-image").removeClass().removeAttr("style").addClass("i" + (1 === t.sex ? "w" : "m") + t.image),
        t.club ? ptp.addClass("club") : ptp.removeClass("club"),
        checkMarried(t, ptp),
        t.vip ? ptp.addClass("vipProfile") : ptp.removeClass("vipProfile");
        var n = t.login || "***"
          , o = t.hide ? t._id === u._id ? "*" + u.rating + "*" : "скрыт" : t.hasOwnProperty("rating") ? t.rating : "-"
          , r = t.hasOwnProperty("gamescount") ? t.gamescount : t.hide ? "-" : "∞";
        s.find(".nick").html(n),
        s.find(".rating").html(o),
        s.find(".cat").html(i(t, "cat")),
        s.find(".sleep").html(i(t, "lun")),
        s.find(".jeal").html(i(t, "rev")),
        s.find(".duty").html(i(t, "dej")),
        s.find(".robb").html(i(t, "poh")),
        s.find(".stud").html(i(t, "stud")),
        s.find(".gamecount").html(r),
        ptp.find("#player-status").removeClass().addClass("status" + t.icon).html(matFilter(t.status)),
        $("#playerInfo-about", ptp).html(matFilter(t.about));
        var l = "";
        if (Object.forEach(t.cups, function(e, a) {
            l += '<span data-title="' + e + '" style="background-image:url(/images/cups/' + a.replace("-", ".") + ')"></span>'
        }),
        ptp.find("#playerInfo-cups").html(l),
        ptp.delay(1e3).fadeTo(900, 1),
        container.hasClass("current") && 2 === game.period && !game.finish) {
            1 === t.sex ? gameptp.addClass("woman-gameinfo") : gameptp.removeClass("woman-gameinfo");
            var d = gameptp.find("div");
            game.hisvote[a] ? d.eq(0).html(game.hisvote[a]) : d.eq(0).empty(),
            game.votes[a] ? d.eq(1).html(game.votes[a].join(", ") + "<hr/> Голосов: " + game.votes[a].length) : d.eq(1).empty(),
            (game.hisvote[a] || game.votes[a]) && (gameptp.find("strong").html(n),
            gameptp.show())
        }
    } else
        ptp.hide(),
        ptp.removeClass(),
        ptp.find("#playerInfo-image").removeAttr("style"),
        gameptp.hide()
}
function showPlayerInfoBlock(e) {
    var a = $(".info").find(".playerInfoBlock")
      , s = a.find(".playerInfo-stat")
      , t = a.find(".playerInfo-gifts")
      , i = e._id === u._id
      , n = function(e, a) {
        return (void 0 === e[a + "1"] ? "0" : e[a + "1"]) + " / " + (void 0 === e[a + "0"] ? "0" : e[a + "0"])
    };
    i ? a.addClass("myProfile") : a.removeClass("myProfile"),
    2 < e.image.length ? a.find(".playerInfo-image").removeClass().addClass("playerInfo-image").css({
        background: "url(/files/" + e._id + e.image + ") center center no-repeat",
        "background-size": "contain"
    }) : a.find(".playerInfo-image").removeClass().removeAttr("style").addClass("playerInfo-image i" + (1 === e.sex ? "w" : "m") + e.image),
    e.club ? a.addClass("club") : a.removeClass("club"),
    checkMarried(e, a);
    var o = e.login || "***"
      , r = e.rating || "0";
    s.find(".nick").html(o),
    s.find(".rating").html(r),
    s.find(".cat").html(n(e, "cat")),
    s.find(".sleep").html(n(e, "lun")),
    s.find(".jeal").html(n(e, "rev")),
    s.find(".duty").html(n(e, "dej")),
    s.find(".robb").html(n(e, "poh")),
    s.find(".stud").html(n(e, "stud"));
    var l = s.find(".law");
    l.html(n(e, "adv")),
    s.find(".roles-stat").remove(),
    e.roles && $.each(e.roles, function(e, a) {
        $('<span class="roles-stat" data-text="' + roles(e).name + '">' + (a[1] || "0") + " / " + (a[0] || "0") + "</span>").insertAfter(l)
    }),
    s.find(".gamecount").html(e.gamescount),
    a.find(".player-status").removeClass().addClass("player-status status" + e.icon).html(matFilter(e.status)),
    a.find(".playerInfo-about").html(matFilter(e.about));
    var d = "";
    Object.forEach(e.cups, function(e, a) {
        d += '<span data-title="' + e + '" style="background-image:url(/images/cups/' + a.replace("-", ".") + ')"></span>'
    }),
    a.find(".playerInfo-cups").html(d);
    var m = e.date ? date.rusDate(e.date) : "До 14 июня 2015 года";
    if (e.room && "0" !== e.room ? 2 < e.room.length ? m += '<div class="green">В игре</div>' : m += '<div class="hall' + e.room.substring(0, 1) + '">' + (1 === e.room.indexOf("s") ? "*" : "") + "</div>" : m += '<div class="red">Вне игры</div>',
    e.last && (m += '<div class="lastvisit">' + (date.isToday(e.last) ? "Сегодня" : date.rusDate(e.last, !0, !0)) + "</div>"),
    e.vip && e.vip > date.now() && (m += '<div class="vipPlayer">VIP-статус до ' + date.showDate(e.vip, !0) + "</div>"),
    e.blank) {
        var c = '<div class="anketaInfo">';
        Object.forEach(e.blank, function(e, a) {
            var s = "1" === a && e ? date.rusDate(e, !0) : e;
            c += "<p>" + s + "</p>"
        }),
        m += c + "</div>"
    }
    if (e.clan && clan.all[e.clan] && (m += '<div data-action="clanProfile" data-id="' + e.clan + '" class="clan-status" style="background-image:' + clan.getIcon(e.clan) + '">Состоит в клане</div>'),
    $("#regdate").html(m),
    i ? $('<button class="onlyvip">' + (u.hide ? "Открыть профиль" : "Скрыть профиль") + "</button>").on("click", function() {
        $(this).hide(),
        sendToSocket({
            type: "anketa",
            data: {
                hide: !u.hide
            }
        })
    }).appendTo(a.find(".playerInfo-cups")) : $("<button>Сделать подарок</button>").on("click", function() {
        giftShop.find('input[type="text"]').eq(0).val(e.login),
        showWindow("giftshop")
    }).appendTo(a.find(".playerInfo-cups")),
    u.stat && u.stat.pay) {
        var p = u.vip && u.vip > date.now() ? 2e3 : 3e3;
        $('<button class="money">' + (i ? "Получить" : "Подарить") + " VIP (" + p + ")</button>").on("click", function() {
            u.money2 >= p ? modalWindow("Вы уверены, что хотите подарить игроку <b>" + o + "</b> VIP-статус на 30 дней?", function() {
                sendToSocket({
                    type: "donat",
                    action: "vip",
                    other: e._id
                })
            }) : f.notEnough({
                action: "money2",
                message: 'Для такого щедрого подарка у Вас должно быть <span class="money">' + p + "</span> на счету."
            })
        }).appendTo(a.find(".playerInfo-cups"))
    }
    if (t.empty(),
    e.gifts) {
        var g = function() {
            var e = $(this);
            modalWindow('Выбросить подарок?<br/> <div class="playerInfo-gifts singlegift"><div class="' + e.attr("class") + '" data-title="' + e.attr("data-title") + '"></div></div>', function() {
                sendToSocket({
                    type: "gift-delete",
                    gift: e.attr("data-giftid")
                }),
                e.remove()
            })
        };
        Object.forEach(e.gifts, function(e, a) {
            var s = $('<div data-giftid="' + a + '" class="' + getGiftClass(e.num) + '" data-title="' + (e.login ? e.login : "Аноним") + ": " + (e.text ? matFilter(e.text) : "без комментариев") + " (" + date.showDate(a, !0) + ')"></div>');
            i && s.on("click touchstart", g),
            s.appendTo(t)
        }),
        t.append('<br class="clearfix"/>')
    }
    showWindow("playerInfoBlock")
}
function showSubmenuBlock(e) {
    closewindow(),
    submenu.removeClass().addClass("sm-" + e).fadeIn(500)
}
function showCurGames(e) {
    var a = win.find(".curgames");
    if (a.empty(),
    0 < e.length)
        for (var s = 0, t = e.length; s < t; s++) {
            var i = e[s]._id
              , n = $('<div id="curgame' + e[s]._id + '"></div>');
            n.html("<time>" + date.showDate(e[s].time, !0) + "</time> <h5>" + e[s].creator + "</h5><em>" + e[s].caption + '</em><div class="curgame-info">' + (e[s].selecting ? '<b class="selrolgame"></b>' : "") + (e[s].botwall ? '<b class="botwall"></b>' : "") + (e[s].shortnight ? '<b class="shortnight"></b>' : "") + (e[s].man ? '<b class="manmode"></b>' : "") + gameStyle[e[s].style] + ' на <span class="red">' + e[s].count + '</span> игроков со ставкой <span class="brown">' + f.over1000(e[s].sum) + "</span></div><blockquote>" + e[s].players.join(", ") + "</blockquote> "),
            $("<button>Посмотреть игру</button>").appendTo(n).click({
                gameid: i
            }, enterToGame),
            a.append(n)
        }
    else
        a.html("<div><h5>В данный момент не проходит ни одной игры :(</h5></div>")
}
function enterToGame(e) {
    var a = e.data.gameid;
    a && (closewindow(),
    sendToSocket({
        type: "enter-game",
        game: a
    }))
}
function inviteToGame() {
    sendToSocket({
        type: "invite"
    }),
    $("#inviteToGameDiv").remove()
}
function newsCounter() {
    var e = +lStorage.getItem("lastnews") || 0
      , a = winInfo.find(".newsWin").children("div")
      , s = $(".newsButton")
      , t = 0;
    a.each(function() {
        this.getAttribute("data-newsid") > e && t++
    }),
    s.attr("data-count", t ? " (" + t + ")" : "")
}
function showNews(e, a) {
    winInfo.find(".newsWin").prepend('<div class="news specialnews" data-newsid="' + a + '">' + e.text + "<sup>" + date.rusDate(a) + "</sup></div>")
}
var newGame = {
    creating: !1,
    plCount: 8,
    stavka: 1,
    type: 1,
    style: 0,
    minStavka: 1,
    maxStavka: 2,
    countForType: {
        1: [8, 20],
        2: [15, 25],
        3: [20, 30],
        4: [8, 20]
    },
    checkLaw: function(e) {
        var t = {
            3: 21,
            4: 9
        };
        t[newGame.type] && (e >= t[newGame.type] ? gamePanel.find(".law").removeClass("hiddenclass") : gamePanel.find(".law").addClass("hiddenclass"))
    }
}
  , gamePanel = $("#gamePanel")
  , plC = $("#plCount")
  , st = $("#stavka");
function setCount(e) {
    var t = parseInt(plC.html()) + e;
    t >= newGame.countForType[newGame.type][0] && t <= newGame.countForType[newGame.type][1] && (newGame.plCount = t,
    plC.html(t)),
    newGame.checkLaw(t)
}
function setStavka(e) {
    var t = Math.floor(u.money / 1e3)
      , a = parseInt(st.html()) + e;
    t < a && (a = t,
    $("#about").html("Игра на последние деньги :)")),
    a >= newGame.minStavka && a <= newGame.maxStavka && (newGame.stavka = a),
    st.html(newGame.stavka)
}
$("#setCount1").on("click", function() {
    setCount(-1)
}),
$("#setCount2").on("click", function() {
    setCount(1)
}),
$("#setStavka1").on("click", function() {
    setStavka(-1)
}),
$("#setStavka2").on("click", function() {
    setStavka(1)
});
var ch1 = $("#check1")
  , ch2 = $("#check2")
  , ch3 = $("#check3")
  , ch4 = $("#check4")
  , ch5 = $("#check5")
  , ch6 = $("#check6");
function checkOptions() {
    var e = Math.floor(u.money / 1e3);
    1 !== u.club && (ch2.prop("checked", !1),
    ch3.prop("checked", !1),
    ch4.prop("checked", !1),
    ch5.prop("checked", !1),
    ch6.prop("checked", !1)),
    (ch3.is(":checked") || ch4.is(":checked") || ch5.is(":checked") || ch6.is(":checked")) && (ch1.prop("checked", "checked"),
    ch2.prop("checked", "checked")),
    ch2.is(":checked") && ch1.prop("checked", "checked");
    var t = 0
      , a = newGame.style;
    if (newGame.style = 0,
    ch1.is(":checked") && (t += 1,
    newGame.style += 1),
    ch2.is(":checked") && (t += 10,
    newGame.style += 10),
    ch3.is(":checked") && (t += 100,
    newGame.style += 100),
    ch4.is(":checked") && (t += 100,
    newGame.style += 1e3),
    ch5.is(":checked") && (t += 100,
    newGame.style += 1e4),
    ch6.is(":checked") && (t += 100,
    newGame.style += 1e5),
    t || (newGame.minStavka = 1,
    newGame.maxStavka = 2),
    1 === t && (newGame.minStavka = 1,
    newGame.maxStavka = 4),
    10 < t && (newGame.minStavka = 2,
    newGame.maxStavka = 16),
    100 < t && (newGame.minStavka = 4,
    newGame.maxStavka = 32),
    200 < t && (newGame.minStavka = 8,
    newGame.maxStavka = 64),
    300 < t && (newGame.minStavka = 16,
    newGame.maxStavka = 128),
    400 < t && (newGame.minStavka = 32,
    newGame.maxStavka = 500),
    newGame.stavka < newGame.minStavka && (newGame.stavka = newGame.minStavka),
    newGame.stavka > newGame.maxStavka && (newGame.stavka = newGame.maxStavka),
    newGame.stavka > e) {
        var c = $(this);
        c.prop("checked", !c.prop("checked")),
        newGame.stavka = e,
        newGame.style = a
    }
    st.html(newGame.stavka)
}
function setGame(e) {
    newGame.type = e ? parseInt(e) : parseInt(gamePanel.find("input:checked + label").attr("data-gametype")),
    1 === newGame.type || 4 === newGame.type ? $("#gametype1_4").addClass("checkedGameType") : $("#gametype1_4").removeClass("checkedGameType");
    var t = newGame.countForType[newGame.type][0];
    newGame.plCount = t,
    plC.html(t),
    newGame.checkLaw(t)
}
function checkGame() {
    newGame.type = gamePanel.find("input:checked + label").attr("data-gametype"),
    plC.html() < newGame.countForType[newGame.type][0] && (newGame.plCount = newGame.countForType[newGame.type][0],
    plC.html(newGame.plCount)),
    plC.html() > newGame.countForType[newGame.type][1] && (newGame.plCount = newGame.countForType[newGame.type][1],
    plC.html(newGame.plCount))
}
function createGame() {
    if (checkGame(),
    checkOptions(),
    newGame.plCount = parseInt(plC.html()) || 8,
    newGame.stavka = parseInt(st.html()) || 1,
    !newGame.creating) {
        newGame.creating = !0;
        var e = $("#about").val().trim()
          , t = {
            type: "create",
            count: newGame.plCount,
            sum: newGame.stavka,
            gametype: newGame.type,
            style: newGame.style,
            selectRole: $("#selectRole").prop("checked"),
            about: e
        };
        (-1 < e.toLowerCase().indexOf("мур") || -1 < e.toLowerCase().indexOf("мяу")) && (t.cat = !0),
        sendToSocket(t),
        closewindow(),
        setTimeout(function() {
            newGame.creating = !1
        }, 1e3)
    }
}
function setStenka() {
    gamePanel.find("label").eq(1).click(),
    ch1.prop("checked", !0),
    ch2.prop("checked", !0),
    ch3.prop("checked", !1),
    ch4.prop("checked", !0),
    ch5.prop("checked", !1),
    ch6.prop("checked", !0),
    plC.html("16"),
    st.html("8"),
    $("#about").val("0-0 играем?"),
    showWindow("newgame")
}
function setCHP() {
    gamePanel.find("label").eq(0).click(),
    ch1.prop("checked", !0),
    ch2.prop("checked", !0),
    ch3.prop("checked", !1),
    ch4.prop("checked", !0),
    ch5.prop("checked", !1),
    ch6.prop("checked", !0),
    plC.html("8"),
    st.html("8"),
    $("#about").val("ЧП"),
    showWindow("newgame")
}
function getRandomInt(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e
}
gamePanel.on("click", "label", function() {
    setGame($(this).attr("data-gametype"))
}),
$('.gameoptions input[type="checkbox"]').change(function(e) {
    return u.club || -1 === ["check2", "check3", "check4", "check5", "check6"].indexOf(e.target.id) ? (checkOptions(),
    !0) : (showMessage('Создавать закрытые игры могут только члены клуба <span class="clubname"></span>!'),
    e.stopPropagation(),
    e.preventDefault(),
    $(this).prop("checked", !1),
    !1)
});
var ticketK = .7
  , selectYet = !1
  , ticketBlock = $("#tickets");
function ticketClick() {
    if (!selectYet) {
        selectYet = !0;
        var e = $(this).attr("data-id");
        $(this).addClass("clicked-ticket"),
        sendToSocket({
            type: "ticket",
            ticket: e
        })
    }
}
function showTickets(e, t) {
    sound("notify");
    var a, c = container.width() - 40, n = container.height() - 40, i = n / c * ticketK, s = Math.ceil(Math.sqrt(e * i)), o = Math.floor(n / s), k = Math.floor(o * ticketK), h = !1;
    70 < k && (k = 70),
    100 < o && (o = 100),
    ticketBlock.html(""),
    30 < e ? (ticketBlock.css("padding-top", "25px"),
    a = ticketBlock) : (ticketBlock.css("padding-top", ticketBlock.outerHeight() / 2 - 200 + "px"),
    ticketBlock.append("<section></section>"),
    ticketBlock.append("<section></section>"),
    ticketBlock.append("<section></section>"),
    h = Math.floor((e - 10) / 2),
    a = ticketBlock.find("section").eq(0));
    for (var l = 0; l < e; l++) {
        var d = $('<div data-id="' + l + '" style="transform:rotate(' + getRandomInt(-5, 5).toString() + 'deg)"></div>');
        d.bind("click touchstart").click(ticketClick),
        t && -1 < t.indexOf(l) && d.addClass("studTicket"),
        a.append(d),
        h && l === h - 1 && (a = ticketBlock.find("section").eq(1)),
        h && l === h + 9 && (a = ticketBlock.find("section").eq(2))
    }
    ticketBlock.find("div").css("width", k + "px").css("height", o + "px"),
    selectYet = !1,
    ticketBlock.show()
}
function hideTickets() {
    ticketBlock.find("div").remove(),
    ticketBlock.hide()
}
function copyTicket(e) {
    var t = ticketBlock.find("div").eq(e);
    if (t.is(":visible")) {
        t.css("visibility", "hidden");
        var a = t.css("width")
          , c = t.css("height")
          , n = t.position()
          , i = $('<div class="newTicket"></div>').html("<div><div></div><div></div></div>");
        return i.css("width", c).css("height", a).css("left", n.left + "px").css("top", n.top + "px").css("font-size", Math.floor(parseInt(a) / 10) + "px"),
        ticketBlock.append(i),
        i
    }
}
function hideTicket(e) {
    var t = copyTicket(e)
      , a = " 1s 5ms 1 normal ease-in forwards"
      , c = {
        1: {
            animation: "hideTicket1" + a,
            webkitAnimation: "hideTicket1" + a
        },
        2: {
            animation: "hideTicket2" + a,
            webkitAnimation: "hideTicket2" + a
        },
        3: {
            animation: "hideTicket3" + a,
            webkitAnimation: "hideTicket3" + a
        },
        4: {
            animation: "hideTicket4" + a,
            webkitAnimation: "hideTicket4" + a
        }
    };
    t && (b.hasClass("noeffect") ? t.hide() : t.css(c[[1, 2, 3, 4].randomValue()]))
}
function ticketOpen(e, t) {
    if (t) {
        sound("signal");
        var a = copyTicket(e);
        a.addClass("activeTicket"),
        a.find("div>div").eq(1).addClass("ticket" + t),
        b.hasClass("noeffect") ? a.find("div>div").eq(0).addClass("ticket" + t) : setTimeout(function() {
            a.find("div>div").eq(0).addClass("ticket" + t)
        }, 1e3)
    } else
        hideTicket(e),
        selectYet = !1
}
var statDiv = $(".stat")
  , specGameAbout = $("#specialAbout");
function createSpecialGame() {
    if (!newGame.creating) {
        newGame.creating = !0;
        var e = {}
          , t = specGameAbout.val().trim();
        switch (statDiv.find("input[name=sgametype]:checked").val()) {
        case "1":
            e = {
                count: 8,
                stavka: 5,
                type: 2,
                style: 101011,
                botwall: !0
            };
            break;
        case "2":
            e = {
                ount: 5,
                stavka: 5,
                type: 6,
                style: 1011,
                botwall: !0
            };
            break;
        case "3":
            e = {
                ount: 16,
                stavka: 8,
                type: 2,
                style: 101011
            };
            break;
        case "4":
            e = {
                ount: 10,
                stavka: 4,
                type: 6,
                style: 1011
            };
            break;
        case "5":
            e = {
                ount: 14,
                stavka: 7,
                type: 11,
                style: 101011
            };
            break;
        case "6":
            e = {
                ount: 24,
                stavka: 5,
                type: 10,
                style: 101011
            };
            break;
        case "7":
            e = {
                ount: 8,
                stavka: 4,
                type: 4,
                style: 1011
            };
            break;
        default:
            e = {
                ount: 8,
                stavka: 2,
                type: 1,
                style: 0
            }
        }
        var a = {
            type: "create",
            count: e.count,
            sum: e.stavka,
            gametype: e.type,
            style: e.style,
            selectRole: $("#specialSelRole").prop("checked"),
            about: t
        };
        e.botwall && (a.botwall = !0),
        sendToSocket(a),
        closewindow(),
        setTimeout(function() {
            newGame.creating = !1
        }, 1e3)
    }
}
statDiv.find("button").on("click", createSpecialGame),
specGameAbout.keydown(function(e) {
    13 === e.which && createSpecialGame()
});
var UG = $(".userGame");
function UGinc(e, t) {
    var a = UG.find("#" + e)
      , c = parseInt(a.html()) + t;
    if (!(c < 0)) {
        switch (e) {
        case "UGplCount":
            c < 5 && (c = 5),
            30 < c && (c = 30);
            break;
        case "UGstavka":
            500 < c && (c = 500),
            2 < c && !UG.find("#UGcheck1").prop("checked") && !UG.find("#UGcheck2").prop("checked") && (c = 2);
            break;
        case "UGrobb":
            var n = Math.floor(parseInt(UG.find("#UGplCount").html()) / 2) - 1;
            UG.find("#UGhrobb").prop("checked") && (n -= 1),
            UG.find("#UGadv").prop("checked") && (n -= 1),
            n < c && (c = n),
            c < 1 && (c = 1);
            break;
        case "UGitem2":
            3 < c && (c = 3)
        }
        a.html(c)
    }
}
function createUserGame() {
    if (!newGame.creating) {
        var e = function(e) {
            newGame.creating = !0,
            sendToSocket(e),
            closewindow(),
            setTimeout(function() {
                newGame.creating = !1
            }, 1e3)
        }
          , t = UG.find("#UGabout").val().trim()
          , a = parseInt(UG.find("#UGplCount").html())
          , c = parseInt(UG.find("#UGstavka").html())
          , n = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0
        }
          , i = {}
          , s = {}
          , o = UG.find("#UGspecialGame").prop("checked")
          , k = UG.find("#UGselectRole").prop("checked");
        if (UG.find("#UGcheck1").is(":checked") && (n[0] = 1),
        UG.find("#UGcheck2").is(":checked") && (n[0] = 2),
        UG.find("#UGcheck3").is(":checked") && (n[1] = 1),
        UG.find("#UGcheck4").is(":checked") && (n[2] = 1),
        UG.find("#UGcheck5").is(":checked") && (n[3] = 1),
        UG.find("#UGcheck6").is(":checked") && (n[4] = 1),
        !n[2]) {
            var h = parseInt(UG.find("#UGitem2").html());
            h < 3 && (s.item2 = h),
            UG.find("#UGitem4").is(":checked") && (s.item4 = 1),
            UG.find("#UGbonus").is(":checked") && (s.bonus = 1)
        }
        if (i[2] = parseInt(UG.find("#UGrobb").html()),
        i[6] = parseInt(UG.find("#UGjeal").html()),
        UG.find("#UGhrobb").is(":checked") && (i[3] = 1),
        UG.find("#UGduty").is(":checked") && (i[4] = 1),
        UG.find("#UGassis").is(":checked") && (i[5] = 1),
        UG.find("#UGsleep").is(":checked") && (i[7] = 1),
        UG.find("#UGcat").is(":checked") && (i[8] = 1),
        UG.find("#UGadv").is(":checked") && (i[9] = 1),
        !i[5] || i[4]) {
            var l = 0;
            Object.forEach(i, function(e) {
                l += e
            });
            var d = {
                type: "userGame",
                about: t,
                count: a,
                sum: c,
                style: n,
                special: o,
                selectRole: k,
                roles: i
            };
            UG.find("#UGManModeGame").prop("checked") && (d.man = !0),
            UG.find("#UGShortNights").prop("checked") && (d.shortnight = !0),
            0 < Object.size(s) && (d.params = s),
            -1 < t.indexOf("#") && (d.ip = !0),
            i[6] || !d.man ? a < l ? modalWindow("Количество активных ролей (" + l + ") превышает количество игроков (" + a + ") в партии.<br/>Изменить количество игроков на " + l + "?", function() {
                d.count = l,
                e(d)
            }) : e(d) : showMessage('Хотя бы одна роль <span class="jeal"></span> обязательна для режима <span class="jeal"></span>-одиночка')
        } else
            showMessage('Для роли <span class="assis"></span> обязательно наличие в начале партии роли <span class="duty"></span>')
    }
}
UG.find("#UGcheck4").change(function() {
    var e = $("#UGitemsedit");
    return $(this).prop("checked") ? e.addClass("noactive") : e.removeClass("noactive"),
    !0
}),
$("#UGcreateGame").on("click", createUserGame),
newGame.loadSaves = function() {
    var a = "";
    $.each(newGame.saves, function(e, t) {
        t.UGabout || (t.UGabout = date.showDate(e, !0)),
        a = '<option value="' + e + '">' + (23 < t.UGabout.length ? t.UGabout.substring(0, 20) + "..." : t.UGabout) + "</option>" + a
    }),
    $("#UGsaves").html("<option>выбрать</option>" + a)
}
,
newGame.saves = lStorage.getItem("saves") ? JSON.parse(lStorage.getItem("saves")) : {},
newGame.loadSaves(),
UG.find("#UGdelete").click(function() {
    var e = $("#UGsaves").val();
    newGame.saves[e] ? (delete newGame.saves[e],
    lStorage.setItem("saves", JSON.stringify(newGame.saves)),
    newGame.loadSaves()) : showMessage("Выберите шаблон для удаления")
}),
UG.find("#UGsave").click(function() {
    var a = {};
    UG.find(":checkbox, span.svalue").each(function() {
        var e = $(this)
          , t = e.attr("id");
        t && (a[t] = e.hasClass("check") ? e.prop("checked") : e.html())
    }),
    a.UGabout = $("#UGabout").val(),
    newGame.saves[Date.now()] = a,
    lStorage.setItem("saves", JSON.stringify(newGame.saves)),
    newGame.loadSaves()
}),
UG.find("#UGsaves").change(function() {
    var e = $(this).val();
    newGame.saves[e] && $.each(newGame.saves[e], function(e, t) {
        var a = UG.find("#" + e);
        a && ("UGabout" == a.attr("id") ? a.val(t) : a.hasClass("check") ? a.prop("checked", t) : a.html(t))
    })
});
var halltree, nytree, treeProportion = .6536, dmAnimates = {
    1: {
        left: "-350px"
    },
    2: {
        top: "100%",
        left: "100%"
    },
    3: {
        left: "-400px"
    }
};
function enableTree(t) {
    var e = parseInt(mainDiv.height() * treeProportion);
    (halltree = $('<div class="halltree"><img src="/images/tree.png" data-title="Оставь свои пожелания на Новогодней ёлке" alt="Новогодняя ёлка"/></div>')).click(function() {
        showWindow("tree")
    }).appendTo(mainDiv),
    halltree.css({
        width: e
    }),
    nytree = $('<div class="nytreeblock"><div class="nytree"><img src="/images/tree.png" alt=""/></div></div>'),
    $('<div class="tree"></div>').append('<div class="toybox"></div>').append(nytree).appendTo(win.find(".info")),
    t.toys && t.toys.forEach(function(t) {
        drawToy(t)
    }),
    "2018" != u.isGift && $('<img src="/images/nygift.png" data-title="Подарок от Деда Мороза" alt=""/>').css({
        position: "absolute",
        width: "100px",
        height: "100px",
        bottom: "0",
        right: "15%",
        cursor: "pointer"
    }).click(function() {
        $(this).hide(),
        sendToSocket({
            type: "nygift"
        })
    }).appendTo(mainDiv),
    b.addClass("snow").addClass("newyear"),
    sounds.dedMoroz = createAudio("/media/ded-moroz.mp3"),
    inputField.val("не надо снега")
}
function drawToy(t) {
    var e = {
        left: t.x,
        top: t.y
    };
    t.t || (e.opacity = .5),
    $('<span class="nytoy' + t.c + '" data-title="' + t.u + '"></span>').css(e).click(function() {
        warningWindow("<blockquote>" + t.t + "</blockquote><em>" + t.u + "</em> (" + date.showDate(t.d, !0) + ")")
    }).appendTo(nytree);
    var o = "-" + Math.round(.5 * halltree.height() / 20) + "px"
      , n = {
        left: 100 * t.x / 1376 + "%",
        top: t.y / 20 + "%",
        width: 1e4 / 1376 + "%",
        height: "5%",
        marginLeft: o
    };
    t.t || (n.opacity = .5),
    $('<span class="nytoy' + t.c + '"></span>').css(n).appendTo(halltree)
}
function NYtoyAdd(t) {
    var i = $(this)
      , o = $(".tree")
      , e = function(t) {
        var e = o.offset();
        i.css({
            left: t.pageX - e.left + o.scrollLeft() - i.width() / 2,
            top: t.pageY - e.top + 1 + o.scrollTop() + 50
        })
    }
      , a = function() {
        i.css({
            position: "static"
        }).appendTo(win.find(".toybox")),
        document.onclick = null
    };
    i.css({
        position: "absolute"
    }).appendTo(o),
    e(t),
    document.onmousemove = function(t) {
        e(t)
    }
    ,
    document.onclick = a,
    nytree.click(function(t) {
        document.onmousemove = null,
        nytree.unbind("click"),
        document.onclick = null;
        var e = $(this).offset()
          , o = Math.round(t.pageX - e.left + $(this).scrollLeft())
          , n = Math.round(t.pageY - e.top + $(this).scrollTop());
        modalWindow('Не забудьте указать ваше личное сообщение к игрушке<br/> <textarea placeholder="Поздравление или пожелание"></textarea><br/> Повесить игрушку?', function() {
            var t = mW.find("textarea").val()
              , e = i.attr("data-id");
            sendToSocket({
                type: "nytoy",
                x: o,
                y: n,
                id: e,
                text: t
            }),
            i.hide(),
            delete u.items.nytoys[e]
        }, a)
    })
}
var NY = {
    event: function(t) {
        if (t.hasOwnProperty("count"))
            alarm(0 < t.count ? "Дед Мороз подарил " + f.someThing(t.count, "подарок", "подарка", "подарков") : "Никто не получил внеочередного подарка от Деда Мороза :(");
        else {
            var e = f.randomInt(3)
              , o = $('<img id="dm' + e + '" class="dedmoroz" src="/images/2017/dm' + e + '.gif"/>').appendTo(b);
            sound("dedMoroz"),
            o.animate(dmAnimates[e], 2e4, function() {
                $(this).remove(),
                sounds.dedMoroz.pause()
            })
        }
    }
};
var progressTime = 0
  , maxProgressRank = 7
  , quests = {
    1: {
        title: "Заходить в игру несколько дней",
        values: [3, 10, 20, 50, 100, 200, 500],
        prize: [{
            money: 5
        }, {
            money: 20
        }, {
            money: 50
        }, {
            money2: 10
        }, {
            money2: 1e3
        }, {
            money2: 5e3
        }, {
            money2: 1e4
        }],
        ranks: ["Случайный прохожий", "Посетитель", "Бывалый клиент", "Постоянный клиент", "Завсегдатай", "Частый гость", "Хозяин"]
    },
    2: {
        title: "Создавать игровые заявки",
        values: [10, 50, 100, 500, 1e3, 2e3, 5e3],
        prize: [{
            money: 3
        }, {
            money: 10
        }, {
            money: 30
        }, {
            money: 50
        }, {
            money: 100
        }, {
            money: 150
        }, {
            money2: 1e3
        }],
        ranks: ["Экспериментатор", "Энтузиаст", "Созидатель", "Креативный игрок", "Автор", "Творец", "Великий создатель"]
    },
    3: {
        title: "Купить услугу Активная роль",
        values: [1, 5, 10, 30, 70, 100, 300],
        prize: [{
            money: 5
        }, {
            money: 10
        }, {
            money: 50
        }, {
            money: 100
        }, {
            money2: 10
        }, {
            money2: 100
        }, {
            money2: 1e3
        }],
        ranks: ["Ленивец", "Инициатор", "Деловой человек", "Энергичный игрок", "Неудержимый", "Деятель", "Главный активист"]
    },
    4: {
        title: "Приобрести Клуб",
        values: [1, 2, 5, 10, 20, 30, 50],
        prize: [{
            money: 10
        }, {
            money: 20
        }, {
            money: 50
        }, {
            money: 300
        }, {
            money2: 100
        }, {
            money2: 500
        }, {
            money2: 2e3
        }],
        ranks: ["Лишний на празднике", "Случайный гость", "Визитер", "Член клуба", "Почетный участник", "Клубный заводила", "Элитный член"]
    },
    5: {
        title: 'Потратить в магазине <span class="gamemoney">деньги</span>',
        values: [3e3, 1e4, 5e4, 1e5, 5e5, 1e6, 3e7],
        prize: [{
            item2: 1
        }, {
            item5: 2
        }, {
            item4: 50
        }, {
            item2: 50
        }, {
            money2: 500
        }, {
            money2: 1e3
        }, {
            money2: 2e3
        }],
        ranks: ["Жмот", "Скряга", "Экономист", "Покупатель", "Оптовик", "Транжира", "Платиновый клиент"]
    },
    6: {
        title: 'Потратить в магазине <span class="money">валюту</span>',
        values: [5, 20, 50, 100, 1e3, 1e4, 3e4],
        prize: [{
            item2: 10
        }, {
            item4: 20
        }, {
            item4: 200
        }, {
            money: 500
        }, {
            money2: 500
        }, {
            item5: 100
        }, {
            money: 1e3
        }],
        ranks: ["Инвестор", "Богач", "Толстосум", "Буржуй", "Воротила", "Олигарх", "Мультимиллиардер"]
    },
    7: {
        title: 'Приобрести в магазине <span class="for-ffl">Веб-камеру</span> <span class="for-maffia">Рацию</span>',
        values: [1, 5, 10, 50, 100, 500, 1e3],
        prize: [{
            money: 1
        }, {
            item5: 2
        }, {
            item5: 5
        }, {
            item5: 10
        }, {
            money2: 50
        }, {
            item5: 50
        }, {
            money: 500
        }],
        ranks: ["Радиолюбитель", "Радист", "Инженер связи", "Сыщик", "Агент", "Разведчик", "Тайный агент"]
    },
    8: {
        title: "Сыграть в игровой партии",
        values: [10, 50, 100, 500, 1e3, 5e3, 1e4],
        prize: [{
            money: 2
        }, {
            money: 10
        }, {
            money: 20
        }, {
            money: 50
        }, {
            money: 100
        }, {
            money: 200
        }, {
            money: 300
        }],
        ranks: ["Нуб", "Новичок", "Начинающий игрок", "Опытный игрок", "Геймер", "Задрот", "Вся жизнь - игра!"]
    },
    9: {
        title: "Выиграть игровую партию",
        values: [5, 30, 50, 100, 500, 1e3, 5e3],
        prize: [{
            money: 5
        }, {
            money: 10
        }, {
            money: 50
        }, {
            money: 100
        }, {
            money2: 100
        }, {
            money2: 200
        }, {
            money2: 300
        }],
        ranks: ["Везунчик", "Победитель", "Триумфатор", "Герой", "Чемпион", "Непобедимый", "Легендарный игрок"]
    },
    10: {
        title: "Набрать рейтинг",
        values: [50, 100, 500, 1e3, 5e3, 1e4, 5e4],
        prize: [{
            money: 50
        }, {
            money: 100
        }, {
            money: 500
        }, {
            money2: 100
        }, {
            money2: 500
        }, {
            money2: 1e3
        }, {
            money2: 5e3
        }],
        ranks: ["Рядовой", "Сержант", "Лейтенант", "Капитан", "Майор", "Полковник", "Генерал"]
    },
    11: {
        title: "Сделать ставки в тотализаторе",
        values: [1, 3, 5, 10, 50, 100, 200],
        prize: [{
            money: 1
        }, {
            money: 5
        }, {
            money: 10
        }, {
            money: 20
        }, {
            money: 50
        }, {
            money2: 10
        }, {
            money2: 100
        }],
        ranks: ["Удачливый", "Азартный", "Рисковый", "Отчаянный", "Бесшабашный", "Безрассудный", "Экстрасенс"]
    },
    12: {
        title: "Дать правильный ответ в викторине",
        values: [5, 12, 30, 60, 120, 300, 500],
        prize: [{
            money: 5
        }, {
            money: 12
        }, {
            money: 30
        }, {
            money: 60
        }, {
            money: 120
        }, {
            money: 300
        }, {
            money: 500
        }],
        ranks: ["Вундеркинд", "Умник", "Знаток", "Интеллектуал", "Профессор", "Мудрец", "Пушкин"]
    },
    13: {
        title: "Подарить подарки",
        values: [1, 3, 5, 10, 30, 80, 200],
        prize: [{
            money2: 1
        }, {
            money2: 3
        }, {
            money2: 5
        }, {
            money2: 10
        }, {
            money2: 30
        }, {
            money2: 80
        }, {
            money2: 200
        }],
        ranks: ["Даритель", "Широкая душа", "Образец великодушия", "Щедрая душа", "Благотворитель", "Меценат", "Лучший друг"]
    },
    14: {
        title: "Вращать барабан",
        values: [2, 6, 15, 40, 80, 150, 300],
        prize: [{
            money: 5
        }, {
            money2: 10
        }, {
            item2: 5
        }, {
            item5: 10
        }, {
            item2: 10
        }, {
            item4: 20
        }, {
            money: 100
        }],
        ranks: ["Редкое вращение", "Я твой барабан вертел", "Частое кручение", "Циркуляция призов", "Кружок удачи", "Пируэт надежды", "Якубович"]
    },
    15: {
        title: 'Сыграть за роль <span class="for-ffl">студента</span> <span class="for-maffia">гражданина</span>',
        values: [10, 50, 100, 500, 1e3, 5e3, 1e4],
        prize: [{
            money: 1
        }, {
            money: 2
        }, {
            money: 5
        }, {
            money: 10
        }, {
            money: 15
        }, {
            money: 20
        }, {
            money: 30
        }],
        role: 1
    },
    16: {
        title: 'Сыграть за роль <span class="for-ffl">похитителя</span> <span class="for-maffia">мафиози</span>',
        values: [5, 25, 50, 300, 500, 2e3, 5e3],
        prize: [{
            money: 1
        }, {
            money: 2
        }, {
            money: 5
        }, {
            money: 10
        }, {
            money: 15
        }, {
            money: 20
        }, {
            money: 30
        }],
        role: 2
    },
    17: {
        title: 'Сыграть за роль <span class="for-ffl">дежурного</span> <span class="for-maffia">комиссара</span>',
        values: [3, 10, 30, 100, 300, 1e3, 3e3],
        prize: [{
            money: 1
        }, {
            money: 2
        }, {
            money: 5
        }, {
            money: 10
        }, {
            money: 15
        }, {
            money: 20
        }, {
            money: 30
        }],
        role: 4
    },
    18: {
        title: 'Сыграть за роль <span class="for-ffl">ревнивого студента</span> <span class="for-maffia">маньяка</span>',
        values: [3, 10, 20, 100, 300, 1e3, 2e3],
        prize: [{
            money: 1
        }, {
            money: 2
        }, {
            money: 5
        }, {
            money: 10
        }, {
            money: 15
        }, {
            money: 20
        }, {
            money: 30
        }],
        role: 6
    },
    19: {
        title: 'Сыграть за роль <span class="for-ffl">лунатика</span> <span class="for-maffia">доктора</span>',
        values: [3, 10, 20, 100, 300, 1e3, 2e3],
        prize: [{
            money: 1
        }, {
            money: 2
        }, {
            money: 5
        }, {
            money: 10
        }, {
            money: 15
        }, {
            money: 20
        }, {
            money: 30
        }],
        role: 7
    },
    20: {
        title: 'Выиграть за роль <span class="for-ffl">студента</span> <span class="for-maffia">гражданина</span>',
        values: [7, 40, 80, 400, 900, 4e3, 8e3],
        prize: [{
            money: 2
        }, {
            money: 10
        }, {
            money: 15
        }, {
            money: 40
        }, {
            money: 95
        }, {
            money: 150
        }, {
            money2: 1e3
        }],
        ranks: ["Абитуриент|Приезжий", "Первокурсник|Гастарбайтер", "Второкурсник|Турист", "Третьекурсник|Переселенец", "Четверокурсник|Коренной", "Пятикурсник|Уважаемый человек", "Аспирант|Почетный гражданин"]
    },
    21: {
        title: 'Выиграть за роль <span class="for-ffl">похитителя</span> <span class="for-maffia">мафиози</span>',
        values: [3, 20, 30, 100, 300, 1500, 3e3],
        prize: [{
            money: 2
        }, {
            money: 10
        }, {
            money: 15
        }, {
            money: 40
        }, {
            money: 95
        }, {
            money: 150
        }, {
            money2: 1e3
        }],
        ranks: ["Барсеточник|Рэкетир", "Жулик|Бандит", "Мошенник|Гангстер", "Вор|Элитный мафиозо", "Грабитель|Капитан мафии", "Вор в законе|Консильери", "Депутат|Крёстный отец"]
    },
    22: {
        title: 'Выиграть за роль <span class="for-ffl">дежурного</span> <span class="for-maffia">комиссара</span>',
        values: [2, 7, 20, 70, 200, 600, 2e3],
        prize: [{
            money: 2
        }, {
            money: 10
        }, {
            money: 15
        }, {
            money: 40
        }, {
            money: 95
        }, {
            money: 150
        }, {
            money2: 1e3
        }],
        ranks: ["Наблюдатель|Стажер полиции", "Дотошный зевака|Жандарм", "Помощник дежурного|Сержант", "Дежурный|Комиссар", "Проверяющий|Прокурор", "Комендант|Шеф полиции", "Гроза похитителей|Гроза мафии"]
    },
    23: {
        title: 'Выиграть за роль <span class="for-ffl">ревнивого студента</span> <span class="for-maffia">маньяка</span>',
        values: [3, 8, 16, 70, 150, 600, 1500],
        prize: [{
            money: 2
        }, {
            money: 10
        }, {
            money: 15
        }, {
            money: 40
        }, {
            money: 95
        }, {
            money: 150
        }, {
            money2: 1e3
        }],
        ranks: ["Тихоня|Подозрительный тип", "Флегматик|Странная личность", "Само спокойствие|Безумец", "Излишняя подозрительность|Шизик", "Настороже|Психопат", "Тлеющая искра|Одержимый", "Вулкан страсти|Виртуоз ножа"]
    },
    24: {
        title: 'Выиграть за роль <span class="for-ffl">лунатика</span> <span class="for-maffia">доктора</span>',
        values: [2, 6, 12, 50, 150, 500, 1e3],
        prize: [{
            money: 2
        }, {
            money: 10
        }, {
            money: 15
        }, {
            money: 40
        }, {
            money: 95
        }, {
            money: 150
        }, {
            money2: 1e3
        }],
        ranks: ["Засоня|Медик-практикант", "Сонная тетеря|Интерн", "Бодрствующий|Ординатор", "Жертва бессонницы|Врач", "Ночной охотник|Заведующий отделением", "Недремлющее око|Главный врач", "Несущий возмездие во имя Луны|Профессор медицины"]
    },
    25: {
        title: 'Вытянуть <span class="for-ffl">билет</span> <span class="for-maffia">карту</span> с ролью <span class="for-ffl">студента</span> <span class="for-maffia">гражданина</span>',
        values: [50, 100, 500, 1e3, 5e3, 1e4, 3e4],
        prize: [{
            money: 5
        }, {
            money: 10
        }, {
            money: 50
        }, {
            money: 100
        }, {
            money: 150
        }, {
            money2: 100
        }, {
            money2: 500
        }],
        role: 1
    },
    26: {
        title: 'Вытянуть <span class="for-ffl">билет</span> <span class="for-maffia">карту</span> с ролью <span class="for-ffl">похитителя</span> <span class="for-maffia">мафиози</span>',
        values: [20, 50, 200, 800, 2e3, 7e3, 12e3],
        prize: [{
            money: 5
        }, {
            money: 10
        }, {
            money: 50
        }, {
            money: 100
        }, {
            money: 150
        }, {
            money2: 100
        }, {
            money2: 500
        }],
        role: 2
    },
    27: {
        title: 'Вытянуть <span class="for-ffl">билет</span> <span class="for-maffia">карту</span> с ролью <span class="for-ffl">главы похитителей</span> <span class="for-maffia">босса мафии</span>',
        values: [1, 5, 10, 50, 100, 500, 1e3],
        prize: [{
            money: 5
        }, {
            money: 10
        }, {
            money: 50
        }, {
            money: 100
        }, {
            money: 150
        }, {
            money2: 100
        }, {
            money2: 500
        }],
        role: 3
    },
    28: {
        title: 'Вытянуть <span class="for-ffl">билет</span> <span class="for-maffia">карту</span> с ролью <span class="for-ffl">дежурного</span> <span class="for-maffia">комиссара</span>',
        values: [10, 30, 100, 500, 1e3, 5e3, 1e4],
        prize: [{
            money: 5
        }, {
            money: 10
        }, {
            money: 50
        }, {
            money: 100
        }, {
            money: 150
        }, {
            money2: 100
        }, {
            money2: 500
        }],
        role: 4
    },
    29: {
        title: 'Вытянуть <span class="for-ffl">билет</span> <span class="for-maffia">карту</span> с ролью <span class="for-ffl">помощника дежурного</span> <span class="for-maffia">сержанта</span>',
        values: [10, 30, 90, 400, 900, 4e3, 8e3],
        prize: [{
            money: 5
        }, {
            money: 10
        }, {
            money: 50
        }, {
            money: 100
        }, {
            money: 150
        }, {
            money2: 100
        }, {
            money2: 500
        }],
        role: 5
    },
    30: {
        title: 'Вытянуть <span class="for-ffl">билет</span> <span class="for-maffia">карту</span> с ролью <span class="for-ffl">ревнивого студента</span> <span class="for-maffia">маньяка</span>',
        values: [10, 30, 100, 500, 1e3, 5e3, 1e4],
        prize: [{
            money: 5
        }, {
            money: 10
        }, {
            money: 50
        }, {
            money: 100
        }, {
            money: 150
        }, {
            money2: 100
        }, {
            money2: 500
        }],
        role: 6
    },
    31: {
        title: 'Вытянуть <span class="for-ffl">билет</span> <span class="for-maffia">карту</span> с ролью <span class="for-ffl">лунатика</span> <span class="for-maffia">доктора</span>',
        values: [10, 30, 90, 400, 900, 4e3, 8e3],
        prize: [{
            money: 5
        }, {
            money: 10
        }, {
            money: 50
        }, {
            money: 100
        }, {
            money: 150
        }, {
            money2: 100
        }, {
            money2: 500
        }],
        role: 7
    }
}
  , bonusRings = {
    intuit: "Амулет &quot;Шестое чувство&quot;<br/> наделяет Вас способностями видеть роли игроков",
    nokill: "Кристалл вечной жизни<br/> может спасти вашу жизнь в самой безнадежной ситуации",
    poh: "Тёмное кольцо<br/> пробуждает в своем обладателе силы темной стороны",
    rev: "Светлое кольцо<br/> пробуждает в своем хозяине чрезмерную эмоциальность, сводит с ума"
};
function progressRewardType(e) {
    var s;
    switch (e) {
    case "money":
        s = "gamemoney";
        break;
    case "money2":
        s = "money";
        break;
    default:
        s = e + "-icon"
    }
    return s
}
function progressReward(e) {
    var n = "";
    return Object.forEach(e, function(e, s) {
        n += '<span class="' + progressRewardType(s) + '">' + ("money" === s ? f.over1000(1e3 * e) : e) + "</span>"
    }),
    n
}
function progressPersent(e, s, n) {
    var a = 0 < n ? quests[s].values[n - 1] : 0
      , o = maxProgressRank <= n ? 100 : Math.ceil(100 * (e[s] - a) / (quests[s].values[n] - a));
    return 100 < o && (o = 100),
    o + "%" + (100 === o && 7 !== n ? '" data-title="Чтобы получить достижение, выполните задание еще 1 раз' : "")
}
function progressRank(e, s) {
    var n = ""
      , a = ["Новичок", "Начинающий", "Бывалый", "Опытный", "Матерый", "Искушенный", "Постоянный"];
    switch (e = parseInt(e)) {
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        n = 0 === s ? roles(quests[e].role).name + "-" + a[s] : a[s] + " " + roles(quests[e].role).name.toLowerCase();
        break;
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
        n = ["Скромный", "Начинающий", "Известный", "Знаменитый", "Авторитетный", "Прославленный", "Идеальный"][s] + " " + roles(quests[e].role).name.toLowerCase();
        break;
    default:
        n = quests[e].ranks ? 0 < quests[e].ranks[s].indexOf("|") ? quests[e].ranks[s].split("|")[isMaffia ? 1 : 0] : quests[e].ranks[s] : "***"
    }
    return n
}
function showProgressList(r, e, y) {
    progressTime = Date.now() + 3e5,
    e && (u.progress = e),
    u.progress || (u.progress = {});
    var l = win.find(".myprogress");
    if (l.empty(),
    r) {
        var p = 0
          , i = {
            7: "intuit",
            14: "nokill",
            24: "poh",
            31: "rev"
        }
          , f = function(e) {
            sendToSocket({
                type: "progress-bonus",
                block: e.data
            }),
            progressTime = 0
        };
        Object.forEach(r, function(e, s) {
            var n, a = u.progress[s] || 0, o = $("<div/>").append('<div class="progress-image progress' + a + '"></div>').append('<div class="progress-content"></div>').append('<div class="progress-bar"><div style="width:' + progressPersent(r, s, a) + '"></div>');
            if (maxProgressRank <= a ? (n = "<div></div><div>" + quests[s].title + "</div><div></div><div>" + e + "/∞</div>",
            $(".progress-content", o).addClass("progress-done")) : n = "<div>" + progressRank(s, a) + "</div><div>" + quests[s].title + '</div><div data-title="Награда за выполнение">' + progressReward(quests[s].prize[a]) + "</div><div>" + e + "/" + quests[s].values[a] + "</div>",
            $(".progress-content", o).html(n),
            l.append(o),
            i.hasOwnProperty(s)) {
                p++;
                var m = $("<p/>", {
                    class: "button bonus-ring"
                }).html('<div class="bonus-' + i[s] + '"></div><span></span>');
                y && -1 < y.indexOf(p) ? ($("span", m).html(u.progress["block" + p] ? "Усилить предмет" : "Забрать бонус"),
                m.click(p, f)) : (m.addClass("progress-button-noactive"),
                $("span", m).html("Бонус недоступен")),
                m.appendTo(l)
            }
        })
    }
}
function socketEvent(e) {
    var s = JSON.parse(e.data);
    switch (testMode && console.log(s),
    s.type) {
    case "reply":
        socketStack.forEach(function(e, a) {
            s.time === e.timestamp && socketStack.splice(a, 1)
        }),
        socketTry = 0,
        allMessagesList.removeClass("offline"),
        checkSocketStack();
        break;
    case "logout":
        ws.onclose = function() {}
        ,
        b.removeClass("unauthorized"),
        authFalse(s);
        break;
    case "authorize":
        s.success ? authorizeDone(s) : (editProfileSize(),
        charDiv.addClass("charEdit"));
        break;
    case "message":
        showNewMessage(s),
        "exit" === s.msgType && (mW.hide(),
        warningWindow(s.message, goToRoom));
        break;
    case "infomessage":
        if (s.kick)
            game.kickVote(s);
        else {
            if (s.event ? game.event(s.event, s.from) : game.writeText(s.message, s.from || null, !0),
            "exit" === s.msgType) {
                mW.hide(),
                game.finished();
                var a = s.win
                  , t = s.message || finalMsg(s, !0);
                warningWindow(t, goToRoom, "Выйти из игры", {
                    win: a
                })
            }
            s.banks && game.recalculateBanks(s.banks)
        }
        break;
    case "isban":
        if (s.sec) {
            var o = Math.floor(s.sec / 3600)
              , r = s.sec % 3600
              , i = Math.floor(r / 60)
              , n = r % 60
              , l = "";
            0 < o && (l += f.someThing(o, "час", "часа", "часов") + " "),
            0 < i && (l += f.someThing(i, "минуту", "минуты", "минут") + " "),
            0 < n && (l += f.someThing(n, "секунду", "секунды", "секунд")),
            showNewDiv('<div class="ban">Вы не можете пользоваться чатом еще ' + l + "</div>"),
            inputField.blur()
        }
        break;
    case "reconnect":
        s.error ? ($("#errorBlock").hide(),
        warningWindow("Не удалось восстановить соединение", function() {
            return window.location.reload()
        }, "Обновить страницу")) : (mW.hide(),
        showNewMessage({
            message: "Соединенис с сервером было восстановлено!",
            color: "#ff0000"
        }),
        $("#errorBlock").hide(),
        ticketBlock.is(":visible") && hideTickets());
        break;
    case "register":
        regButton.prop("disabled", !1),
        "busy" === s.result ? showMessage("Этот логин уже занят, придумайте другой") : s.result ? setTimeout(function() {
            sendToSocket({
                type: "authorize"
            })
        }, 500) : errorText("Не удалось создать персонажа.");
        break;
    case "enter":
        messagesList.empty(),
        room = s.room,
        closedgame = !1,
        game.style = {},
        game.finish = !1,
        game.intuition = !1,
        s.user && Object.update(u, s.user),
        showPlayersList(s.online, s.room),
        s.gameInfo ? (showGameInfo(s.gameInfo),
        date.isToday(u.rolldate) || $(".button-roll").stop().animate({
            rotation: 360
        }, {
            duration: 3e3,
            start: function() {
                $(this).addClass("nobackground")
            },
            step: function(e) {
                $(this).css({
                    transform: "rotate(" + e + "deg)"
                })
            }
        }).animate({
            rotation: -360
        }, {
            duration: 3e3,
            step: function(e) {
                $(this).css({
                    transform: "rotate(" + e + "deg)"
                })
            },
            complete: function() {
                $(this).removeClass("nobackground").removeAttr("style")
            }
        })) : updateInterface(),
        s.games && showGamesList(s.games),
        s.greens && showGreenList(s.greens);
        break;
    case "standart":
        switch (s.action) {
        case "money":
        case "money2":
        case "item25":
            f.notEnough(s);
            break;
        case "hiddenprofile":
            showMessage('Профиль игрока скрыт.<br/> Хочешь также? Приобретай <span class="pseudolink" data-action="windowByName" data-param="donatoptions">VIP-статус</span>.');
            break;
        case "nocommonchat":
            showMessage("Сейчас Вы не можете отправлять сообщения в общий чат");
            break;
        case "onlyvip":
            showMessage("Данная операция доступна только для VIP-аккаунта");
            break;
        case "noclan":
            showMessage("Вы не состоите в клане.");
            break;
        case "error":
            showMessage("Операция недоступна.")
        }
        break;
    case "inform":
        editPlayerList(s.user, s.leave);
        break;
    case "inform-game":
        s.inviter ? invitesToGame ? modalWindow(s.inviter + " приглашает Вас в игру. Поиграем?", function() {
            goToRoom(s.gameid)
        }) : alarm(s.inviter + " приглашает всех в игру") : editGameList(s);
        break;
    case "wasmarked":
        suggestedPlayer(s);
        break;
    case "showmsg":
        showMessage(s.message);
        break;
    case "alarm":
        s.action ? f.onlineCount(s.online, s) : s.text && alarm(s.text);
        break;
    case "area-battle":
        if (s.winner && s.area) {
            mapAreas[s.area].win || (mapAreas[s.area].win = {}),
            mapAreas[s.area].win[s.winner] || (mapAreas[s.area].win[s.winner] = 0),
            mapAreas[s.area].win[s.winner] += 1;
            alarm("Завершена битва за район (" + mapAreas[s.area].title + "). " + {
                bots: "Боты одержали победу!",
                players: "Удача была на стороне игроков!",
                draw: "Победителя выявить не удалось"
            }[s.winner])
        }
        break;
    case "updateInfo":
        delete s.type,
        s.msg && (showMessage(s.msg),
        delete s.msg),
        updateInterface(s);
        break;
    case "profile":
        showPlayerInfoBlock(s.data);
        break;
    case "buyingame":
        game.buyAnswer(s);
        break;
    case "friend-query":
        var c = function(e) {
            -1 !== reds.indexOf(e.fromId) || u.server2 || showConvert(function() {
                modalWindow(e.from + " хочет добавить вас в друзья. Вы согласны?", function() {
                    friendQuery("answer", e.fromId, !0)
                }, function() {
                    friendQuery("answer", e.fromId, !1)
                })
            })
        };
        if (s.multi) {
            var d = 0;
            s.from.forEach(function(e) {
                setTimeout(function() {
                    c({
                        from: e.login,
                        fromId: e._id
                    })
                }, d),
                d += 1e3
            })
        } else
            c(s);
        break;
    case "friend-new":
        addFriend(s.fid, s.add);
        break;
    case "greenlist":
        s.greens && showGreenList(s.greens);
        break;
    case "startgame":
        game.start(s);
        break;
    case "setPeriod":
        game.setPeriod(s);
        break;
    case "quiz":
        if (quizEnable && 9 < u.rating)
            if (s.login) {
                var m = '<div class="alarm">Игрок <b>' + s.login + "</b> дал" + (1 === s.sex ? "а" : "") + " правильный ответ - <em>" + s.answer + "</em>";
                s.rank && (m += " и достиг" + (1 === s.sex ? "ла" : "") + " нового звания - <strong>" + s.rank + "</strong>"),
                m += "</div>",
                showNewDiv(m),
                mymessagesList.find(".quiz").remove()
            } else
                showQuiz(s);
        break;
    case "vote":
        game.vote(s);
        break;
    case "dej-info":
        game.dejInfo(s);
        break;
    case "setrole":
        game.setRole(s.user);
        break;
    case "newrole":
        game.newRole(s);
        break;
    case "giftSteal":
        game.killed(s);
        break;
    case "sysmsg":
        s.immediate ? (warningWindow(s.filter ? escapeHtml(matFilter(s.message)) : s.message),
        inputField.blur()) : showConvert(function() {
            warningWindow(s.filter ? escapeHtml(matFilter(s.message)) : s.message)
        });
        break;
    case "gameitem":
        game.itemUse(s);
        break;
    case "lock-delete":
        game.deleteLock(s.message);
        break;
    case "cookie":
        game.cookieResult(s);
        break;
    case "showTickets":
        showTickets(s.count, s.noactive);
        break;
    case "hideTicket":
        hideTicket(s.ticket);
        break;
    case "isticket":
        ticketOpen(s.ticket, s.result);
        break;
    case "totes":
        showToteList(s.arr);
        break;
    case "curgames":
        showCurGames(s.games);
        break;
    case "auctions":
        showAuctionList(s.arr);
        break;
    case "gift":
        if (s.data)
            if (s.data.card)
                (new Image).src = "/images/walls/gifts/" + s.data.num + ".gif",
                showConvert(function() {
                    warningWindow('<blockquote class="giftCite"><p>' + (s.data.text ? escapeHtml(matFilter(s.data.text)) : "считает, что Вы всё поймете без слов.") + "</p><cite>" + (s.data.login || "Кто-то из Ваших поклонников") + "</cite></blockquoteclass>", function() {
                        showWall("gifts/" + s.data.num + ".gif", {
                            nohide: !0,
                            transparent: !0
                        }),
                        49 == s.data.num && wallpaper.css({
                            "background-color": "#330906"
                        })
                    }, "Открыть")
                }, !0);
            else if (s.data.pid && -1 < reds.indexOf(s.data.pid))
                modalWindow((s.data.login ? s.data.login : "Аноним") + " из вашего игнор-листа прислал Вам подарок. Хотите его удалить?", function() {
                    sendToSocket({
                        type: "gift-delete",
                        gift: s.data.time
                    })
                });
            else {
                var g = "Вам подарок от ";
                g += s.data.login ? s.data.login : "неизвестного доброжелателя",
                s.data.text && (g += " с пожеланиями:<br/> <em>" + escapeHtml(matFilter(s.data.text)) + "</em>"),
                g += '<div class="giftdiv ' + getGiftClass(s.data.num) + '"></div>',
                showConvert(function() {
                    warningWindow(g, !1, !1, "opencard")
                })
            }
        break;
    case "box":
        updateInterface({
            inc: s.inc,
            items: s.items
        }),
        showBox(s);
        break;
    case "rolling":
        doRolling(s);
        break;
    case "quiz-list":
        s.players && showQuizList(s.players);
        break;
    case "news":
        s.del ? (winInfo.find(".newsWin").find('div[data-newsid="' + s.del + '"]').remove(),
        newsCounter()) : s.data && (showNews(s.data, s.id, !0),
        alarm("Опубликована очередная новость"),
        lastNews = s.id,
        newsCounter());
        break;
    case "audio":
        if (!isAppVK && isRadio && s.src) {
            var w = s.src;
            sounds.radio.volume = soundValue / 100,
            sounds.radio.setAttribute("src", w),
            radio.attr("data-title", s.singer + " - " + s.title),
            sounds.radio.play()
        }
        break;
    case "reward":
        s.num && warningWindow('<div class="reward">' + roleText[gameMode()].reward[s.num] + "</div>", !1, !1, "newspaper"),
        s.toy && warningWindow('<div class="reward">' + roleText.all.rewardToy + '<div class="nytoy' + s.toy + '"></div></div>', !1, !1, "newspaper"),
        s.snowflake && !server2 && (warningWindow('<div class="reward">' + roleText.all.snowflake + '<div class="snowflake"></div></div>'),
        u.items[18] ? u.items[18]++ : u.items[18] = 1),
        s.collect && warningWindow('<div class="reward">Вы нашли элемент коллекции &quot;' + collectionsData[s.collect].name + '&quot;: <span class="collect' + s.collect + " collect-element collect-element" + s.element + '"></span></div>', !1, !1, "newspaper"),
        s.item && (warningWindow('<div>В ваш инвентарь добавлена награда: <div class="items items-' + s.item + '" data-count="' + s.count + '"></div></div>'),
        updateInterface(s.update));
        break;
    case "newtoy":
        drawToy(s.toy);
        break;
    case "lottery":
        if (s.itemnum) {
            var k = {
                text: "Ваша удача не прошла мимо",
                box: {}
            };
            k.box[s.itemnum] = 1,
            showBox(k),
            updateInterface({
                items: s.items
            })
        } else
            showMessage("В следующий раз Вам обязательно повезет!");
        u.lottery = s.time,
        lotteryTimerStart();
        var p = lotteryWin.find("div").find("span");
        p.unbind("click"),
        s.data && $.each(s.data, function(e, a) {
            p.eq(e - 1).empty().addClass("openLottery items-" + a)
        });
        break;
    case "roulette":
        u.money = s.money,
        u.roulette = s.roulette,
        rouletteDisable(),
        updateInterface(),
        showMessage("Вы сделали ставку на " + s.num + ".<br/> Возможно, завтра Вас ждет приятный сюрприз.");
        break;
    case "roulette-result":
        rouletteDisable(!0),
        rouletteInfo(s, !0);
        break;
    case "progress":
        if (s.login)
            alarm(s.login + " получает достижение - " + progressRank(s.num, s.value));
        else {
            var h = progressReward(quests[s.num].prize[s.value]);
            warningWindow('<div class="progress">Вы получили новое достижение - <u>' + progressRank(s.num, s.value) + "</u><br/>Ваша награда - " + h + "</div>"),
            progressTime = 0,
            Object.forEach(quests[s.num].prize[s.value], function(e, a) {
                u[a] += "money" === a ? 1e3 * e : e
            }),
            updateInterface()
        }
        break;
    case "progress-list":
        showProgressList(s.list, s.progress, s.already);
        break;
    case "bonus":
        if (s.role)
            switch (s.bonus) {
            case "intuit":
                game.event({
                    text: "all:bonus:intuit",
                    replacedata: {
                        "[nick]": s.login,
                        "[role]": s.role
                    }
                }, !1)
            }
        break;
    case "firework":
        if (game.writeText('<div class="firework-text">' + s.login + " запускает фейерверк в честь праздника!</div>", !1, !0),
        !ticketBlock.is(":visible") && !container.hasClass("ingame") && fireworkEnable) {
            var v = f.randomInt(11);
            showWall("firework/" + v + ".gif", {
                nohide: !0,
                transparent: 9 <= v
            })
        }
        break;
    case "gif":
        !container.hasClass("ingame") && date.pluhTime < date.now() - 1e4 && (date.pluhTime = date.now(),
        showWall("other/bah.gif"));
        break;
    case "collect":
        s.data && (u.collections = s.collections,
        showMessage('На ёлке совершенно случайно Вы заметили фрагмент Новогодней коллекции <div class="collect' + s.data.collect + " collect-element collect-element" + s.data.element + '"><div>'));
        break;
    case "clan":
        clan.showWindow(s);
        break;
    case "slot":
        slotAction(s);
        break;
    case "friends":
        windowTable("allfriends", s.list);
        break;
    case "tree":
        enableTree(s.data);
        break;
    case "dedmoroz":
        NY.event(s);
        break;
    case "battle":
        snowball.action(s);
        break;
    case "infomoder":
        "function" == typeof showInfoModer && showInfoModer(s.data);
        break;
    case "moder":
        "function" == typeof moderAnswer && moderAnswer(s);
        break;
    case "admin":
        var y = "";
        s.data.forEach(function(e) {
            Object.forEach(e, function(e) {
                y += e + " "
            }),
            y += "<br/>"
        }),
        showNewMessage({
            message: y
        });
        break;
    case "draw-result":
        if (s.sex) {
            var T = "";
            s.winner && (T = 1 === s.sex ? 'Под восхищенные мужские взгляды <b data-id="' + s.winnerId + '">' + s.winner + "</b> изящно ловит букет, не оставив соперницам ни шанса!" : 'Ловким движением <b data-id="' + s.winnerId + '">' + s.winner + "</b> хватает подвязку своими сильными руками, что не остается без внимания присутствующих на празднике девушек!"),
            game.writeText('<img src="/images/cups/wed' + (1 === s.sex ? "wo" : "") + 'menitem.png" alt="" style="float:left"/> ' + T, !1, !0)
        } else {
            var x = '<div class="draw-result">' + s.moder.login + " провел" + (1 === s.moder.sex ? "а" : "") + " жеребьевку. Результаты представлены ниже:<br/> ";
            if (1 < s.count)
                for (var I = 0, W = 0, M = s.arr.length; I < M; I++)
                    I === W * s.count && (x += "<u>Группа " + ++W + "</u><br/><ol>"),
                    x += "<li>" + s.arr[I] + "</li>",
                    I + 1 !== W * s.count && I + 1 !== M || (x += "</ol>");
            else
                s.arr.forEach(function(e) {
                    x += e + "<br/>"
                });
            x += "</div>",
            showNewDiv(x)
        }
        break;
    case "css":
        s.add ? b.append("<style>" + s.style.replace("'", '"') + "</style>") : s.el && $(s.el).attr("style", s.style);
        break;
    case "f14pairs":
        if (s.pairs) {
            var N = $('<img id="amur" src="/images/holidays/september1/schollbell.gif"/>').appendTo(b);
            sounds.schoolbell || (sounds.schoolbell = createAudio("/media/special/schoolbell." + soundExt)),
            setTimeout(function() {
                sound("schoolbell")
            }, 1e3),
            N.animate({
                left: "-350px"
            }, 1e4, function() {
                $(this).remove(),
                sounds.schoolbell.pause();
                var a = "Учитель рассадил всех за парты парами:<br/><ol>";
                s.pairs.forEach(function(e) {
                    e[1] && e[2] && (a += "<li>" + f.playerNick(e[1], !0) + ' <span class="green">+</span> ' + f.playerNick(e[2], !0) + "</li>")
                }),
                a += "</ol>",
                s.lost && (a += "<hr/><p>Пока все хитро переглядываются со своими соседями по парте, одиноко на &quot;камчатке&quot; сидит " + f.playerNick(s.lost, !0) + "</p>"),
                showNewDiv('<div class="september1-pairs">' + a + "</div>"),
                mymessagesList.append('<div class="september1-pairs">' + a + "</div>")
            })
        }
        s.task && setTimeout(function(e) {
            showNewMessage({
                message: "Хочешь получить поощрение за примерное поведение? Тогда выполни задание вместе со своим соседом по парте - сыграй до конца следующую партию:<br/><ul><li>" + gameStyle[e.task.style] + "</li><li>не менее чем на " + e.task.count + " игроков</li></ul>",
                msgType: "private",
                from: !1,
                to: u._id,
                toName: u.login
            })
        }, 5e3, s);
        break;
    case "pairs3":
        if (s.pairs)
            $('<img class="tripleBD" src="/images/holidays/3/' + f.randomInt(5) + '.gif"/>').appendTo(b).animate({
                left: "100%"
            }, 5e3, function() {
                if ($(this).remove(),
                s.pairs && 0 < s.pairs.length) {
                    var a = "Смотрите, какие замечательные компании друзей у нас сегодня собрались:<br/><ol>";
                    s.pairs.forEach(function(e) {
                        e[1] && e[2] && e[3] && (a += '<li><strong data-id="' + e[1]._id + '">' + e[1].login + '</strong>, <strong data-id="' + e[2]._id + '">' + e[2].login + '</strong> и <strong data-id="' + e[3]._id + '">' + e[3].login + "</strong></li>")
                    }),
                    a += "</ol>",
                    showNewDiv('<div class="pairs3">' + a + "</div>")
                }
            });
        s.task && showNewMessage({
            message: "Хочешь получить подарок в честь трехлетия игры? Тогда сыграй с двумя своими друзьями в игру &quot;Без ботов&quot; на <i>" + s.task.count + "</i> игроков",
            msgType: "private",
            from: !1,
            to: u._id,
            toName: u.login
        });
        break;
    case "curator":
        if (s.action)
            switch (s.action) {
            case "msg":
            case "answer":
                curator.msg(s.text, s);
                break;
            case "online":
                curator.msg(s.text, s),
                curator.msg("Кураторов онлайн: " + s.count);
                break;
            case "takeq":
                curator.answer(s);
                break;
            case "busyq":
                curator.msg("Вопрос уже принят другим куратором.");
                break;
            case "flood":
                curator.msg("Вопросы можно задавать не чаще, чем раз в " + s.text)
            }
        break;
    case "console":
        sendToSocket({
            type: "console",
            logs: logs
        });
        break;
    default:
        console.log("unknown event:", s)
    }
}
var curator = {
    qid: 0
};
curatorWindow.find("div.output").append("<div>Есть вопрос по игре? Напиши его куратору прямо сейчас!</div>"),
curatorWindow.on("click", function() {
    $(this).hasClass("hide") && $(this).removeClass("hide")
}),
curatorWindow.find("div.curatorHide").on("click", function(e) {
    return curatorWindow.toggleClass("hide"),
    e.preventDefault(),
    !1
}),
curatorWindow.find("input").keydown(function(e) {
    if (13 === e.which) {
        var t = $(this).val().trim();
        curator.qid ? (sendToSocket({
            type: "curator",
            action: "answer",
            qid: curator.qid,
            text: t
        }),
        curatorWindow.find("curator-qid" + curator.qid).removeAttr("style"),
        curator.qid = 0) : t && 5 < t.length ? sendToSocket({
            type: "curator",
            action: "question",
            text: t
        }) : curator.msg("Пожалуйста, напишите свой вопрос куратору!"),
        $(this).val("")
    }
}),
curator.msg = function(e, t) {
    var n = curatorWindow.find("div.output")
      , a = $("<div/>");
    curatorWindow.hasClass("hide") && curatorWindow.removeClass("hide"),
    sound("notify"),
    $("<p/>").html(date.curTime()).appendTo(a),
    t ? t.qid ? (a.addClass("curator-qid" + t.qid),
    $("<strong/>").attr("data-id", t.uid).html(t.login + ":").appendTo(a),
    $("<span/>").html(e).appendTo(a),
    $("<button/>").html("Ответить").click(function() {
        curator.takeQid(t.qid)
    }).appendTo(a)) : ($("<b/>").attr("data-id", t.uid).attr("title", "Написать куратору в игровом чате").html(t.login + ":").click(function() {
        $("#adresat-id").val(t.uid),
        $("#adresat").val(t.login),
        privateCheck.prop("checked", !0),
        inputField.focus()
    }).appendTo(a),
    $("<span/>").html(e).appendTo(a)) : (a.addClass("gray"),
    a.html(e)),
    a.appendTo(n)
}
,
curator.takeQid = function(e) {
    sendToSocket({
        type: "curator",
        action: "get",
        qid: e
    })
}
,
curator.answer = function(e) {
    var t = curatorWindow.find(".curator-qid" + e.qid);
    t.find("button").remove(),
    e.uid === u._id ? (t.css({
        background: "#cfc"
    }),
    curator.qid = e.qid,
    curator.msg("Вопрос закреплен за Вами. Не забудьте ответить!"),
    curatorWindow.find("input").focus()) : (t.css({
        opacity: .2
    }),
    t.append("<div>Вопрос закреплен за куратором " + e.login + "</div>"))
}
;
var alarmWin = $('<div id="alarm"></div>').appendTo(container);
function showAlarms() {
    showMessage('<div class="alarmlist">' + alarmWin.html() + "</div>");
    var e = $(".alarmlist").parents(".modal");
    e.scrollTop(e[0].scrollHeight)
}
function alarm(e, t) {
    noAlarm || ($("<div/>", {
        "data-time": date.showDate(Date.now(), !0),
        html: e
    }).appendTo(alarmWin).click(showAlarms).fadeIn(600).delay(4e3).fadeOut(500),
    t || sound("notify"))
}
function convertAnimate(e) {
    var t = html.height()
      , n = html.width();
    e.x -= .5;
    var a = e.x
      , i = a * Math.sin(a) + .3 * a * a;
    e.y = 100 - Math.floor(i / 28),
    i = Math.floor(t * e.y / 100) - 80,
    (a = Math.floor(n * a / 100)) < 1 ? (clearInterval(e.timer),
    e.x = 100,
    e.y = 0) : (e.scale = 1.5 - Math.abs(50 - e.x) / 100,
    e.obj.css("transform", "scale(" + e.scale + ")"),
    e.obj.css("top", i + "px"),
    e.obj.css("left", a + "px"))
}
function showConvert(e, t) {
    var n = $('<div class="envelope"></div>').appendTo(container);
    t && n.addClass("animatedGift");
    var a = {
        obj: n,
        x: 100,
        y: 0,
        scale: 1,
        timer: 0
    };
    a.obj.show(),
    noconvert ? (a.x = 1,
    convertAnimate(a)) : a.timer = setInterval(function() {
        convertAnimate(a)
    }, 50),
    a.obj.click(function() {
        clearInterval(a.timer),
        $(this).remove(),
        e && e()
    })
}
function friendQuery(e, t, n) {
    if (t === u._id)
        return showMessage("Вам грустно и одиноко? Но это не повод зацикливаться на себе! Поглядите вокруг.."),
        void (-1 < u.friends.indexOf(t) && sendToSocket({
            type: "friends",
            action: "del",
            fid: t
        }));
    "answer" === e && n && addFriend(t, !0);
    var a = {
        type: "friends",
        action: e,
        fid: t
    };
    n && (a.success = n),
    sendToSocket(a)
}
function addFriend(e, t) {
    t ? (u.friends.push(e),
    playersList.find("#" + e).addClass("green")) : (u.friends.splice(u.friends.indexOf(e), 1),
    playersList.find("#" + e).removeClass("green"))
}
function addRed(e, t) {
    t ? (reds.push(e),
    playersList.find("#" + e).addClass("red")) : (reds.splice(reds.indexOf(e), 1),
    playersList.find("#" + e).removeClass("red")),
    lStorage.setItem("reds", reds)
}
function deleteFriendFromTable() {
    var e = $(this);
    modalWindow("Хотите удалить <b>" + e.attr("data-login") + "</b> из друзей?", function() {
        e.parents("tr").remove(),
        addFriend(e.attr("data-uid"), !1),
        sendToSocket({
            type: "friends",
            action: "del",
            fid: e.attr("data-uid")
        })
    })
}
var plMenu = $("#playersMenu");
function defPosition(e) {
    var t = 0
      , n = 0;
    return null !== document.attachEvent ? (t = e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft),
    n = e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop)) : !document.attachEvent && document.addEventListener && (t = e.clientX + window.scrollX,
    n = e.clientY + window.scrollY),
    {
        x: t,
        y: n
    }
}
plMenu.find("span").eq(0).click(function() {
    getProfile($(this).parent().attr("data-id"))
}),
plMenu.find("span").eq(1).click(function() {
    var e = $(this).parent().attr("data-id");
    e && -1 === e.indexOf("testplayer") && friendQuery("question", e)
}),
plMenu.find("span").eq(2).click(function() {
    var e = $(this).parent().attr("data-id");
    e && (addFriend(e, !1),
    friendQuery("del", e))
}),
plMenu.find("span").eq(3).click(function() {
    var e = $(this).parent().attr("data-id");
    e && addRed(e, !0)
}),
plMenu.find("span").eq(4).click(function() {
    var e = $(this).parent().attr("data-id");
    e && addRed(e, !1)
});
var hiddenCommands = [{
    name: "help",
    about: "помощь по игре"
}, {
    name: "очистить чат",
    about: "очистить полностью общий чат"
}, {
    name: "редактор меню",
    about: "пользовательская настройка главного меню и блоков подменю"
}, {
    name: "давай дружить",
    about: "отправить конверт адресату"
}, {
    name: "я хочу",
    about: "загадать желание"
}, {
    name: "конверт-",
    about: "отключить анимацию движения информационных конвертов"
}, {
    name: "викторина-",
    about: "отключение викторины в чате"
}, {
    name: "салют-",
    about: "отключить анимацию фейерверков"
}, {
    name: "приглашения-",
    about: "запретить принимать приглашения игроков в игровые наборы"
}, {
    name: "хочу чп",
    about: "вызов окна создания ЧП на 8 игроков"
}, {
    name: "хочу стенку",
    about: 'вызов окна создания классической "стенки" 8 на 8'
}, {
    name: "не надо снега",
    about: "отключение анимации снегопада (для новогодних праздников)"
}, {
    name: "хочу снега",
    about: "включение анимации снегопада"
}, {
    name: "ёлка-",
    about: "отключение новогодней ёлки"
}, {
    animate: !0
}, {
    name: "плюх",
    about: "запустить снежком в адреса сообщения"
}, {
    name: "целую",
    about: "отправить воздушный поцелуй адресату"
}, {
    name: "люблю",
    about: "отправить признание в любви адресу.<br/> Также действуют команды <ol><li>чмок</li><li>:-*</li></ol>"
}, {
    name: "мяу",
    about: "отправить анимацию котиков адресату"
}, {
    name: "ауау",
    about: "отправить анимацию тюленя адресату"
}];
function showHiddenCommands() {
    var t = '<table class="hidden-commands"><tr><th>команда</th><th>описание</th></tr>';
    hiddenCommands.forEach(function(e) {
        t += e.animate ? '<tr><td colspan="2" style="padding-top:10px">Команды для отправки анимации (не чаще, чем 1 раз в 10 секунд)</td></tr>' : "<tr><td>" + e.name + "</td><td>" + e.about + "</td></tr> "
    }),
    showMessage(t + "</table><hr/> Наберите выбранную команду в чат")
}
var menuedit = {
    submenuElements: {},
    getOptions: function() {
        try {
            return JSON.parse(lStorage.getItem("menu"))
        } catch (e) {
            return !1
        }
    },
    check: function(e) {
        e || (e = menuedit.getOptions()),
        submenu.find("div").removeClass("hiddenclass"),
        leftPanel.children("div").show(),
        leftPanel.find(".button-giftshop").nextAll("div").hide(),
        e && (e.blocks && e.blocks.forEach(function(e) {
            e && ("block" === e.substring(0, 5) ? leftPanel.find("." + e).hide() : submenu.find("." + e).addClass("hiddenclass"))
        }),
        e.show && e.show.forEach(function(e) {
            leftPanel.find("." + e).show()
        }))
    },
    save: function() {
        var e = {
            blocks: [],
            show: []
        };
        $.each($("#submenuEdit-block1").find("input:not(:checked)"), function() {
            e.blocks.push(-1 < this.value.indexOf("block") ? this.value : menuedit.submenuElements[this.value])
        }),
        $.each($("#submenuEdit-block2").find("input:checked"), function() {
            e.show.push(menuedit.submenuElements[this.value])
        }),
        0 < e.blocks.length || 0 < e.show.length ? lStorage.setItem("menu", JSON.stringify(e)) : lStorage.removeItem("menu"),
        menuedit.check(e),
        closewindow()
    },
    window: function() {
        var i = ""
          , o = "<p>Включить следующие элементы в главное меню:</p>"
          , d = 0
          , r = menuedit.getOptions();
        $.each(submenu.children("div"), function(e, t) {
            var n = e + 1
              , a = $(t).attr("class").replace("submenu", "block");
            i += '<p><input type="checkbox" class="check" id="submenuEditorBlock' + n + '" value="' + a + '"' + (r && r.blocks && -1 < r.blocks.indexOf(a) ? "" : ' checked="checked"') + '/><label for="submenuEditorBlock' + n + '">Блок №' + n + "</p>",
            $.each($(t).children("div"), function() {
                d++,
                menuedit.submenuElements[d] = $(this).attr("class").replace(" hiddenclass", ""),
                i += '<input type="checkbox" class="check" id="submenuEditorItem' + d + '" value="' + d + '"' + (r && r.blocks && -1 < r.blocks.indexOf(menuedit.submenuElements[d]) ? "" : ' checked="checked"') + '/><label for="submenuEditorItem' + d + '">' + $(this).attr("data-title") + "</label>",
                o += '<input type="checkbox" class="check" id="submenuItem' + d + '" value="' + d + '"' + (r && r.show && -1 < r.show.indexOf(menuedit.submenuElements[d]) ? ' checked="checked"' : "") + '/><label for="submenuItem' + d + '">' + $(this).attr("data-title") + "</label>"
            })
        }),
        win.find(".menu-editor").html('<div id="submenuEdit-block1">' + i + '</div><hr/><div id="submenuEdit-block2">' + o + "</div>"),
        $("<button/>", {
            class: "button"
        }).html("Сохранить").on("click", menuedit.save).insertAfter("#submenuEdit-block2")
    }
};
function menu(e, t) {
    if (game.intuition)
        return !1;
    (t = t || window.event).stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
    var n = e ? document.getElementById("playersMenu") : document.getElementById("contextMenu");
    if (e) {
        if (!t.target.id || "players" === t.target.id)
            return !1;
        n.setAttribute("data-id", t.target.id);
        var a = "";
        reds && -1 < reds.indexOf(t.target.id) && (a += "isred"),
        u.friends && -1 < u.friends.indexOf(t.target.id) && (a += " isgreen"),
        u._id === t.target.id && (a += " iam"),
        playersInfoArray[t.target.id] && playersInfoArray[t.target.id].bot && (a += " bot"),
        n.className = a
    } else {
        var i = "";
        if (isAppVK)
            return !0;
        isMaffia || (i += 'Игра &quot;День Любви&quot; beta<br/>по мотивам Friends For Love<br/> Проблемы с игрой? <a href="http://vk.com/igraffl" target="_blank">Вам сюда</a><br/><sub>Для правильной работы игры используйте браузер Google Chrome или Mozilla Firefox</sub>'),
        i += '<button data-action="showAlarms">Лог уведомлений</button> <button data-action="showHiddenCommands">Скрытые команды чата</button>',
        n.innerHTML = i
    }
    return n.style.top = defPosition(t).y + "px",
    n.style.left = defPosition(t).x + "px",
    !(n.style.display = "block")
}
leftPanel.on("contextmenu", function() {
    return showWindow("menu-editor"),
    !1
}),
menuedit.check();
var isFullScreen = !1;
function fullScreen(e) {
    e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
}
function fullScreenCancel() {
    document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
}
function fullScreenToggle() {
    isFullScreen ? (isFullScreen = !1,
    fullScreenCancel()) : (isFullScreen = !0,
    fullScreen(document.documentElement))
}
function addHandler(e, t, n, a) {
    e.addEventListener ? e.addEventListener(t, n, a || !1) : e.attachEvent && e.attachEvent("on" + t, n)
}
$("#fullScreen").click(fullScreenToggle),
$("#contextMenu").on("click", execDataAction),
addHandler(document, "contextmenu", function() {
    document.getElementById("contextMenu").style.display = "none",
    plMenu.hide(),
    tp.hide(),
    ptp.hide()
}),
addHandler(document, "click", function(e) {
    document.getElementById("contextMenu").style.display = "none",
    3 === e.which && e.target && e.target.parentElement && e.target.parentElement.id && "players" === e.target.parentElement.id || plMenu.hide(),
    tp.hide(),
    ptp.hide()
}),
header.on("contextmenu touchcancel", function(e) {
    return menu(!1, e)
}),
playersList.on("contextmenu", function(e) {
    return menu(!0, e)
}),
$("output").on("contextmenu", function(e) {
    if (("B" === e.target.nodeName || "STRONG" === e.target.nodeName) && e.target.getAttribute("data-id")) {
        var t = e.target.getAttribute("data-id");
        if (e.target.textContent && t !== u._id) {
            var n = -1 === reds.indexOf(t);
            modalWindow("Хотите " + (n ? "игнорировать" : "видеть") + " сообщения игрока " + e.target.textContent + "?", function() {
                addRed(e.target.getAttribute("data-id"), n)
            })
        }
        return !1
    }
    return !0
});
window.WebSocket || errorText("Ваш браузер не поддерживает технологию веб-сокетов. Пожалуйста, установите последнюю версию браузера Google Chrome или Mozilla Firefox.", !0);
var ws, parseQueryString = function(e) {
    for (var a = e.substr(1), o = /([^=]+)=([^&]+)&?/gi, i = o.exec(a), t = {}; null !== i; )
        t[i[1]] = i[2],
        i = o.exec(a);
    return t
};
function showGroupWidget() {
    if ("undefined" != typeof VK) {
        var e = isMaffia ? 109864615 : 39094155;
        $("#vk_groups").empty(),
        isMaffia && u.groupMember ? $("<a></a>", {
            href: "https://vk.com/maffia.online",
            target: "_blank",
            id: "vk-group-button"
        }).appendTo("#vk_groups") : VK.Widgets.Group("vk_groups", {
            mode: 0,
            width: "200",
            height: "216",
            color1: isMaffia ? "000000" : "fcf9f9",
            color2: isMaffia ? "FFFFFF" : "000000",
            color3: isMaffia ? "5E81A8" : "827c99"
        }, e)
    } else
        console.log("not VK")
}
function appSocialButton() {
    if ("undefined" != typeof VK) {
        var e = isMaffia ? 109864615 : 39094155
          , a = isMaffia ? 5206919 : 5065752
          , o = isMaffia ? "Мафия Онлайн" : "День Любви"
          , i = currentDomainUrl() + (isMaffia ? "/images/maffia/applogo.png" : "/images/gift.png");
        VK.init(function() {
            VK.callMethod("setTitle", o),
            VK.Widgets.Like("vk_like", {
                height: 24,
                pageUrl: "http://vk.com/app" + a,
                pageTitle: o,
                pageImage: i,
                type: "button"
            }),
            $("#vk_share").html(VK.Share.button({
                url: "http://vk.com/app" + a,
                title: o,
                image: i
            }, {
                type: "custom",
                text: "Рассказать друзьям"
            })),
            VK.Widgets.ContactUs("vk_contact_us", {
                text: "Задать вопрос",
                height: 24
            }, -e),
            VK.Widgets.Subscribe("vk_subscribe", {
                soft: 1
            }, -e),
            VK.api("friends.get", {}, function(u) {
                VK.api("friends.getAppUsers", {}, function(e) {
                    var r = e.response || []
                      , a = u.response || []
                      , o = a.length
                      , l = r.length;
                    if (l < o)
                        for (var i = 0; i < l; i++)
                            for (var t = 0; t < o; t++)
                                if (r[i] === a[t]) {
                                    a.splice(t, 1);
                                    break
                                }
                    var c = a.length
                      , n = r;
                    if (c < 4)
                        n = n.concat(a);
                    else {
                        for (var s = [], d = 0; d < 5; d++) {
                            var p = a.length - 1
                              , f = Math.floor(Math.random() * p);
                            s.push(a[f]),
                            a.splice(f, 1)
                        }
                        n = n.concat(s)
                    }
                    var m = n.join(",");
                    VK.api("getProfiles", {
                        uids: m,
                        fields: "first_name,last_name,photo_medium"
                    }, function(e) {
                        for (var a = e.response ? e.response.length : 0, o = "", i = "", t = 0; t < a; t++) {
                            var n = -1 < r.indexOf(e.response[t].uid)
                              , s = '<a href="http://vk.com/id' + e.response[t].uid + '" title="Открыть профиль" target="_blank"><figure' + (n ? "" : ' class="noinstall"') + '><img src="' + e.response[t].photo_medium + '" /><figcaption>' + e.response[t].first_name + " " + e.response[t].last_name + "</figcaption></figure></a> ";
                            n ? o += s : i += s
                        }
                        win.find(".info").append('<div class="vkfriends"></div>'),
                        $(".vkfriends").html("<p>Уже установили приложение (" + l + "):</p>" + o + "<hr/><p>Еще не знают о Мафии Онлайн (" + c + ")</p>" + i + "<hr/>"),
                        $("<div/>", {
                            id: "vkfriends-button"
                        }).click(function() {
                            showWindow("vkfriends")
                        }).appendTo(outside)
                    })
                })
            })
        }, function() {
            console.log("vkapp failed"),
            logs && logs.push("vkapp failed")
        })
    }
}
if (isAppVK) {
    var qStr = parseQueryString(window.location.search);
    qStr.viewer_id && qStr.auth_key || (errorText("Ошибка подключения аккаунта ВКонтакте: " + document.cookie),
    window.errorText = function() {}
    ),
    createCookie("vid", qStr.viewer_id, 7),
    createCookie("auth", qStr.auth_key, 7),
    qStr.user_id && qStr.user_id !== qStr.viewer_id && createCookie("invite-vk", qStr.user_id, 7),
    mafApp ? createCookie("mafApp", 1, 1) : createCookie("mafApp", "", -1),
    "mobile" === isAppVK ? $.cachedScript("//vk.com/js/api/mobile_sdk.js").done(function() {
        payDiv.find(".pay-item").click(function() {
            var e = {
                type: "item",
                item: $(this).attr("data-item")
            };
            VK.callMethod("showOrderBox", e)
        })
    }) : $.cachedScript("//vk.com/js/api/xd_connection.js?2").done(function() {
        $.cachedScript("//vk.com/js/api/share.js?95").done(function() {
            appSocialButton(),
            payDiv.find(".pay-item").click(function() {
                var e = {
                    type: "item",
                    item: $(this).attr("data-item")
                };
                VK.callMethod("showOrderBox", e)
            })
        })
    })
} else
    createCookie("vid", "", -1);
function authFalse(e) {
    isAppVK ? errorText("Ошибка авторизации: " + e.text + ". Обновите страницу") : authDiv ? $("#authDiv").fadeIn(500) : mobile ? (wallhide(),
    showMessage("Пожалуйста, пройдите авторизацию повторно.")) : (console.log(e),
    createCookie("sid", "", -1),
    warningWindow("Ошибка авторизации", function() {
        $(window).off("beforeunload", Unloader.unload),
        window.location.href = "/"
    }, "Авторизоваться", "showOnTop"),
    console.log(e.text))
}
function socketConnect(a) {
    try {
        console.log("connecting..."),
        ws = new WebSocket("ws" + ("https:" === window.location.protocol ? "s://" + domain + ":909" + ("maffia-online.ru" === domain ? "1" : "0") : "://" + domain + ":9000")),
        a || (ws.onerror = function(e) {
            errorText("Произошла ошибка при установке соединения " + (e.target ? e.target.url : "no target") + ". Проверьте настройки браузера, фаервола и интернет-соединения. Отключите, если используете, сервис VPN или прокси-сервер."),
            ws.close()
        }
        ),
        ws.onclose = function(e) {
            allMessagesList.addClass("offline");
            var a = "";
            switch (e.code) {
            case 1e3:
                a = "Браузер закрыл соединение";
                break;
            case 1001:
                a = "Переход со страницы";
                break;
            case 1006:
                a = "Соединение прервано (обрыв связи)";
                break;
            case 4e3:
                a = "Соединение разорвано (обнаружена чрезмерная активность)";
                break;
            case 4001:
                a = "К сожалению, ваш аккаунт заблокирован";
                break;
            case 4002:
                a = "Только что в ваш аккаунт был выполнен еще один вход";
                break;
            case 4003:
                a = "Сбой интернет-соединения";
                break;
            case 4004:
                a = "Сервер исключил Вас из-за неактивности соединения";
                break;
            case 4005:
                a = "Соединение разорвано из-за повторного подключения";
                break;
            case 4006:
                a = "Ошибка авторизации",
                authFalse(e);
                break;
            default:
                a = "Обрыв связи (" + e.code + ")"
            }
            console.log(e);
            var o = {
                message: a,
                color: "#ff0000",
                from: "[server]"
            };
            e.wasClean && 1006 !== e.code ? 4e3 === e.code || 4001 === e.code ? warningWindow(o.message, function() {
                return errorText(a)
            }) : modalWindow(o.message + "<br/> Обновить страницу?", function() {
                window.obUnloader && window.obUnloader.resetUnload(),
                window.location.reload()
            }) : (showNewDiv('<div class="blue">Идет попытка восстановить соединение...<br/></div>'),
            setTimeout(function() {
                socketConnect(!0)
            }, 3e3)),
            showNewMessage(o)
        }
        ,
        ws.onopen = function() {
            allMessagesList.removeClass("offline");
            var e = {
                type: "authorize",
                reconnect: a,
                mode: isMaffia
            };
            isAppVK && !getCookie("vid") && (e.data = {
                vid: qStr.viewer_id,
                auth: qStr.auth_key,
                mafApp: qStr.maffia
            }),
            server2 && (e.server2 = !0),
            setTimeout(sendToSocket, 500, e),
            $(function() {
                isAppVK || mobile || "object" == typeof window.obUnloader || (window.obUnloader = new Unloader)
            }),
            ws.onerror = function() {}
        }
        ,
        console.log("connected")
    } catch (e) {
        console.log(e),
        warningWindow("Невозможно установить соединение с сервером.")
    }
    ws.onmessage = socketEvent
}
function loadImageFiles() {
    for (var e = 0; e <= 10; e++)
        (new Image).src = "/images/walls/" + getRoleWallpaper(e);
    ["/images/avatars.png", "/images/avatars-max.png", "/images/avatars-min.png", "/images/gifts1.png", "/images/gifts2.png?210818", "/images/gifts3.png?251217", "/images/gifts4.png?50318", "/images/gifts5.png?240618", "/images/maffia/char-background.jpg", "/images/maffia/roll.png", "/images/roll.svg", "/images/walls/wedding1.jpg", "/images/walls/wedding2.jpg"].forEach(function(e) {
        (new Image).src = e
    })
}
showWall(isMaffia ? "maffia/start.jpg" : "start.jpg"),
$(document).ready(function() {
    createSmilePanel(),
    $(".gamesheader>.row1").click(function() {
        sortTable(1)
    }),
    $(".gamesheader>.row2").click(function() {
        sortTable(2)
    }),
    $(".gamesheader>.row3").click(function() {
        sortTable(3)
    }),
    $(".gamesheader>.row4").click(function() {
        sortTable(4)
    }),
    $(".gamesheader>.row5").click(function() {
        sortTable(5)
    }),
    $(".gamesheader>.row6").click(function() {
        sortTable(6)
    });
    for (var e = 1; e < 7; e++) {
        var a = prices["i" + e]
          , o = .8 * prices["i" + e]
          , i = prices["ir" + e];
        $("#shop" + e + " .gamemoney").html(f.over1000(a) + '<hr/><span class="gamemoney">' + f.over1000(o) + "</span>"),
        $("#shop" + e + " .money").html(f.over1000(i))
    }
    if (Object.forEach(collectionsData, function(e, a) {
        collectionWin.append('<input id="collect' + a + '" type="radio" name="collects" value="' + a + '"/><label for="collect' + a + '">' + e.title + "</label>")
    }),
    collectionWin.append("<p></p><div></div>"),
    collectRadio = collectionWin.find('input[type=radio][name="collects"]'),
    collectRadio.change(function() {
        showCollect(this.value)
    }),
    socketConnect ? mobile || socketConnect() : console.log("socketConnect undefined"),
    $.cachedScript("https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js").done(function() {
        $('<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">').appendTo(b),
        mW.find(".modal").draggable()
    }),
    isAppVK)
        outside.append('<div id="roll-start" class="button-roll"></div>'),
        $("#roll-start").click(function() {
            showWindow("roll")
        });
    else {
        var t = "<p>Ежедневно</p>";
        $.each(specGamesTime, function(e, a) {
            t += "<div><time>" + e + "</time> " + (a.link ? '<a href="' + a.link + '" target="_blank">' + a.name + "</a>" : a.name) + "</div>"
        }),
        outside.append('<div id="calendar">' + t + "<sup>* московское время</sup></div>")
    }
    loadImageFiles();
    var n = slotArray.reduce(function(e, a) {
        return e + '<div class="itembox items-' + a + '"></div>'
    }, "");
    n += '<div class="itembox items-' + slotArray[0] + '"></div><div class="itembox items-' + slotArray[1] + '"></div>',
    $(".slots").html('<div id="slot1" class="slot">' + n + '</div><div id="slot2" class="slot">' + n + '</div><div id="slot3" class="slot">' + n + "</div>"),
    $(".slot").css({
        top: "-360px"
    }),
    $("#slot2").css({
        top: "-480px"
    }),
    islocalStorage || showNewDiv('<div class="important">В вашем браузере запрещено сохранение данных от веб-сайтов, поэтому некоторые настройки и функции будут недоступны</div>')
});
var kinderMode = !1;
function maffiaNEW() {
    b.hasClass("maffianew") || mobile || (inputField.attr("placeholder", ""),
    $("#statusText").attr("placeholder", "введите описание"),
    $("header>h3.button-findgame").html("Мне повезет!"),
    $("#selectChar").appendTo(header),
    scrollCheck.next("label").prependTo(".panel-top"),
    scrollCheck.prependTo(".panel-top"),
    $("#smiles").appendTo(".panel-top"),
    $(".tooltip").appendTo(b),
    $("#gameWidth").parent().hide(),
    $("article>h2").html("Набор в игру"),
    $("<div/>").addClass("nickblock").append($("#nick")).append($("header>.moneyblock")).appendTo(header),
    f.over1000 = function(e) {
        return e
    }
    ,
    game.setBankLines = function(e) {
        $(".studBank").css("width", Math.round(e[0] / game.startBanks * 100) + "%"),
        $(".robbBank").css("width", Math.round(e[1] / game.startBanks * 100) + "%"),
        $(".allBank").css("width", Math.round(e[2] / game.startBanks * 100) + "%"),
        $(".winBank").css("width", Math.round(e[3] / game.startBanks * 100) + "%")
    }
    ,
    game.recalculateBanks = function(e, a) {
        e && (a && (gametitle.append('<div class="studBank"></div><div class="robbBank"></div><div class="allBank"></div><div class="winBank"></div>'),
        game.startBanks = e[0] + e[1] + e[2] + e[3]),
        game.setBankLines(e),
        e[0] && animateNumber("studBank", e[0]),
        e[1] && animateNumber("robbBank", e[1]),
        e[2] && animateNumber("allBank", e[2]),
        e[3] && animateNumber("winBank", e[3]))
    }
    ,
    container.removeAttr("style"),
    $('<link rel="stylesheet" href="/css/maffia-new.css?50518">').appendTo(b),
    maffiaCheckbox.prop("checked", !0),
    isMaffia = !0,
    showGroupWidget(),
    updateInterface(),
    b.addClass("maffia maffianew"),
    kinderMode = !0)
}
$(window).resize(function() {
    editProfileSize(),
    halltree && halltree.css({
        width: parseInt(.6536 * mainDiv.height())
    })
});
var supportsColorInput = function() {
    var e = document.createElement("input");
    return e.setAttribute("type", "color"),
    "text" !== e.type
}();
supportsColorInput || $('<script type="text/javascript" src="/js/jscolor.js"><\/script>').appendTo(b);
