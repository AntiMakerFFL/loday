$('<div id="helper"><div><div class="helper-content"></div><div class="helper-buttons"><button id="helper-nextbutton">Дальше</button><button id="helper-exitbutton">Закончить обучение</button></div></div></div>').appendTo(container);
var articleHeight = $("article").outerHeight()
  , helpHints = {
    "wait-players": "Подождите, когда наберется необходимое для игры число участников",
    "start-prefix": "Игра началась. Ваша роль - ",
    vote: "Посмотрим, что подозреваемый скажет в свое оправдание. Помните, что он может попытаться всех обмануть.",
    voteme: "Вы должны убедить всех в своей невиновности. Вы не обязаны раскрывать свою роль.",
    ffl: {
        "start-side1": ". Вы играете за студентов. ",
        "start-side2": ". Вы играете за похитителей. ",
        night1: "Ночью студенты спят. Общаться ночью можно только один на один с помощью галочки <b>Приватно</b>.",
        night2: "Чтобы победить, Вам нужно оставить студентов без подарков к празднику. Выберите игрока из списка и нажмите кнопку <b>Похитить</b>.",
        night3: "Вы можете за одну ночь <b>Запереть</b> одного игрока в списке, а также еще и <b>Похитить</b> подарок у студента.",
        night4: "Выберите из списка игроков одного участника и нажмите <b>Проверить</b>. Утром Вы узнаете его роль в этой партии.",
        night5: "Помогайте дежурному искать среди студентов похитителей подарков. Роли игроков, проверенных дежурным, будут Вам известны.",
        night6: "Выберите из списка игроков наиболее подозрительного и нажмите кнопку <b>Испортить подарок</b>. Будьте аккуратны, Вы можете случайно оставить без подарка дежурного.",
        night7: "Вы можете спасти подарок одного из студентов от кражи. Выберите в списке игроков любой ник и нажмите кнопку <b>Лунатить</b>",
        night8: "Выберите понравившегося игрока из списка и нажмите кнопку <b>Поиграть</b>. Этот игрок не сможет этой ночью ничего сделать. Будьте осторожнее, если он лишится подарка, игра для Вас закончится.",
        "day-side1": "Студенты включайте логику и постарайтесь вывести похитителей подарков на чистую воду. Выберите подозреваемого из списка и нажмите Голосовать. Помните, что у Вас есть 1 попытка изменить свое решение.",
        "day-side2": "Слейтесь с толпой и старайтесь не привлекать к себе внимания. Голосуйте против одного из студентов в списке."
    },
    maffia: {
        "start-side1": ". Вы играете за граждан. ",
        "start-side2": ". Вы играете за мафию. ",
        night1: "Ночью мирные граждане спят. Общаться ночью можно только один на один с помощью галочки <b>Приватно</b>.",
        night2: "Чтобы победить, Вам нужно избавиться от мирных граждан. Выберите жертву в списке игроков и нажмите кнопку <b>Убить</b>.",
        night3: "Вы можете за одну ночь <b>Заморозить</b> одного игрока в списке, а также еще одного <b>Убить</b> вместе с другими мафиози.",
        night4: "Выберите из списка игроков одного участника и нажмите <b>Проверить</b>. Утром Вы узнаете его роль в этой партии.",
        night5: "Помогайте комиссару искать среди игроков членов мафии. Роли игроков, проверенных комиссаром, будут Вам известны.",
        night6: "Выберите из списка игроков наиболее подозрительного и нажмите кнопку <b>Зарезать</b>. Будьте аккуратны, Вы можете случайно убить комиссара.",
        night7: "Вы можете спасти от смерти одного из игроков. Выберите в списке игроков его ник и нажмите кнопку <b>Лечить</b>",
        night8: "Выберите понравившегося игрока из списка и нажмите кнопку <b>Поиграть</b>. Этот игрок не сможет этой ночью ничего сделать. Будьте осторожнее, если он будет убит, Вас постигнет та же участь.",
        "day-side1": "Граждане включайте логику и постарайтесь вывести мафию на чистую воду. Выберите подозреваемого из списка и нажмите Голосовать. Помните, что у Вас есть 1 попытка изменить свое решение.",
        "day-side2": "Слейтесь с толпой, чтобы Вас никто не заподозрил. Голосуйте против одного из граждан в списке."
    }
}
  , helpWiki = {
    ".button-shop": {
        title: "Магазин",
        block: "header",
        info: 'В разделе Магазин ты сможешь купить перед игрой специальные предметы:<ul><li class="news"><span class="item1"> - чтобы подслушивать ночью других игроков</li><li class="news"><span class="item2"> - для защиты от непрошенных гостей в ночное время</li><li class="news"><span class="item3"> - чтобы чаще играть активными ролями</li><li class="news"><span class="item4"> - для поиска активных игроков в ночное время</li><li class="news"><span class="item5"> - чтобы покинуть неинтересную партию не с пустыми руками</li><li class="news"><span class="item6"> - для доступа к дополнительным возможностям.</li></ul>'
    },
    "#smiles": {
        title: "Смайлы",
        block: "footer",
        info: "Это набор замечательных смайлов, которые поднимут настроение не только тебе, но и твоим собеседникам."
    },
    "#statusbar": {
        title: "Статус",
        block: "aside",
        info: "Панель статуса нужна для указания короткого статусного сообщения в профиле и выбора значка для своего ника в списке игроков."
    },
    "#edit": {
        title: "Редактор профиля",
        block: "#left-panel",
        info: "В редакторе персонажей ты сможешь выбрать аватарку и пол персонажа, заполнить информацию о себе, анкетные данные для профиля, а также создавать, удалять дополнительных персонажей и переключаться между ними."
    },
    ".button-myprogress": {
        title: "Достижения",
        block: "#left-panel",
        info: "Под значком профиля расположены все твои достижения в игре. Тут выполняя несложные задания, ты сможешь получать награду. Если выполнишь одну из веток заданий полностью, получишь специальный бонус, который сделает еще более интересными для тебя игровые партии."
    },
    ".button-inventory": {
        title: "Инвентарь",
        block: "#left-panel",
        info: "Этот небольшой сейф поможет тебе сохранить накопленные запасы от посторонних глаз. Если ты только начинаешь свой путь на проекте, не удивляйся, что у тебя он пуст."
    },
    ".button-stat": {
        title: "Противостояние",
        block: "#left-panel",
        info: 'Локация под загадочным названием &quot;Противостояние&quot; содержит панель для быстрого старта всевозможных командных партий (так называемых стенок), а также статистику побед игроков/ботов, <span class="for-ffl">студентов/похитителей</span><span class="for-maffia">граждан/мафии</span>. Первое время тебе, наверно, не понадобится эта локация.'
    },
    ".button-areamap": {
        title: "Карта города",
        block: "#left-panel",
        info: "На карте города ты можешь посмотреть какие районы города контролируют те или иные кланы (на данный момент это игроки и боты)."
    },
    ".button-curgames": {
        title: "Текущие игры",
        block: "#left-panel",
        info: "Ты всегда можешь посмотреть как проходят текущие игры, не принимая в них участия. Для этого выбери в боковом меню значок в виде глаза, а потом выбирай понравившуюся игру (если на тот момент таковые будут)."
    },
    ".button-total": {
        title: "Тотализатор",
        block: "#left-panel",
        info: "Заработать быстро большую сумму денег ты можешь только тут, в тотализаторе. Правила тотализатора просты до безобразия - сделай ставку на правильный исход события и забирай всю собранную сумму ставок (сумма делится на всех участников с верно выбранным вариантом соразмерно сумме сделанной ставки). Например, если на правильный вариант сделали 3 ставки (1 000, 25 000 и 74 000), то каждый из участников получит 1%, 25% и 74% от суммы всех ставок."
    },
    ".button-auction": {
        title: "Аукцион",
        block: "#left-panel",
        info: 'На аукционе можно выиграть необычные предметы за <span class="money">игровую валюту</span>. Чтобы заветный лот достался именно тебе, твоя ставка должна продержаться 3 суток никем не перебитая (в противном случае ставка возвратится тебе).',
        novk: true
    },
    ".button-giftshop": {
        title: "Подарки",
        block: "#left-panel",
        info: "В магазине подарков ты можешь выбрать подарки для своих друзей и знакомых, снабдив их приятные пожеланиями или поздравлениями. Также можно отправить подарок анонимно, если не хватает смелости признаться в симпатиях открыто."
    },
    ".button-tournaments": {
        title: "История турниров",
        block: "#left-panel",
        info: "Архив прошедших турниров на проекте тебе вряд ли будет интересен. Это, скорее, информация для тех, кто в них уже участвовал. Ну может и ты когда-нибудь сыграешь... Будешь знать, где искать свой ник."
    },
    ".button-roll": {
        title: "Барабан чудес",
        block: "#left-panel",
        info: "Каждый день на этом барабане можно выигрывать подарки. Жаль, что бесплатна только первая попытка за сутки."
    },
    ".button-collect": {
        title: "Коллекции",
        block: "#left-panel",
        info: "В разделе Коллекции можно видеть сколько тебе осталось собрать недостающих элементов коллекций. Собрав каждую коллекцию польностью, ты получишь определенный бонус."
    },
    ".button-quiztop": {
        title: "Лидеры викторины",
        block: "#left-panel",
        info: 'В разделе &quot;Умники и умницы&quot; в режиме реального времени отображается статистика правильных ответов, данных игроками в викторине, которая постоянно проходит в <span class="for-ffl">розовом корпусе</span><span class="for-maffia">синем зале</span> при онлайне не ниже 5 человек.'
    }
}
  , helperData = {
    1: {
        name: "Добро пожаловать",
        text: '<p>Приветствую...</p><p>Я - <span class="helpwoman">мисс</span> <span class="helpman">мистер</span> Мо, мэр этого городка. Вижу ты первый раз в этом городе?! Тебе надо кое-что уяснить.</p><p>В нашем городе сейчас неспокойно. Мафия потихоньку прибирает к рукам всё. Мы отчаянно сражаемся, но что могут сделать мирные граждане против вооруженных бандитов? У них тут все схвачено: деньги, связи, прикрытие. Не подкопаешься... Но вместе мы сможем их всех вычислить и вернуть себе город..<br/>',
        elem: false,
        units: [[false, 'Каждая игровая партия представляет собой скрытое противостояние мирных жителей и мафии. Если ты когда-нибудь играл с друзьями в карточную мафию, то уже знаком с игровыми ролями и ходом партии.<br/> Или, может быть, ты хочешь принять участие в обучающей партии, где познакомишься с игровым процессом?<br/> <button id="startHelpGame" onclick="helper.stop();helper.helpGameStart()">Играть прямо сейчас</button><br/> А если хочешь, я могу познакомить тебя с интерфейсом игры.', "Интерфейс"], [false, "Сейчас я объясню тебе из каких основных элементов состоит игровой интерфейс."]],
        next: "Я готов",
        exit: "Мне не нужна помощь"
    },
    2: {
        name: "Таблица игровых заявок",
        text: "В списке заявок ты видишь все игры, которые еще не начались.",
        detail: "Игра начинается, как только в ней наберется необходимое число участников.",
        elem: "article>#main",
        units: [["article>#main", "Обрати внимание, что в списке можно выбрать игру в зависимости от ставки, типа игры и количества игроков в партии."], ["article>#main", "Чтобы посмотреть описание и всех игроков, которые уже присоединились к заявке, наведи указатель на выбранную игру в таблице."]],
        css: "top:" + (articleHeight * 0.4 + 145) + "px"
    },
    3: {
        name: "Игровой чат",
        text: "В чате отображаются сообщения игроков и вся информация обо всех событиях игровой партии",
        detail: "При входе в игру в чате отображаются последние игровые новости, а также информация об онлайне, сегодняшних именинниках и последних зарегистрированных игроках.",
        elem: "#messages",
        units: [["#messages", 'Приватные сообщения (которые видят только отправитель и получатель) выделяются <span class="private sendme">цветом и шрифтом</span>.']],
        css: "bottom:" + (articleHeight * 0.59 + 75) + "px"
    },
    4: {
        name: "Параметры чата",
        text: "Посмотри, внизу страницы расположена панель для отправки сообщений в чат",
        detail: "Сейчас я научу тебя правильно ей пользоваться.",
        elem: "footer",
        units: [["#adresat", "Поле &quot;Кому&quot; - это адресат личных и приватных сообщений.<br/> Чтобы выбрать кому отправить сообщение, сделайте двойной клик по нику игрока в списке участников комнаты или нажмите на ник игрока в чате.<br/> По умолчанию сообщение отправляется всем участникам комнаты."], [".clear-adresat", "Чтобы сбросить адресата сообщения, используй крестик справа от поле &quot;Кому&quot;"], ["#privat+label", "Переключатель в режим приватных сообщений (видимых только адресату и отправителю).<br/> Можно включить только, когда выбран адресат для сообщения."], ["#scrolling+label", "Кнопка для запрета автопрокрутки чата (для удобства чтения предыдущих сообщений)"], ["#input", "Поле для ввода текста сообщения. Для отправки используйте клавишу Enter или кнопку &quot;Отправить&quot; справа"], "#smiles", ["#shareButton", 'Последний элемент на нижней панели это кнопка &quot;Поделиться&quot;.<br/> С помощью нее можно получить ссылку для приглашения новых игроков на проект и разместить ее на своей странице, любом сайте в интернете или просто отправить своим друзьям по почте или в личном сообщении. Каждый зарегистрировавший по такой ссылке участник в случае пополнения своего счета будет автоматически пополнять и <span class="money">ваш игровой счет</span> на половину этой суммы.', true]],
        css: "bottom:72px"
    },
    5: {
        name: "Верхняя панель",
        text: "В верхнее части окна расположены основные элементы навигации и игровая информация.",
        detail: "Во время ожидания начала и внутри игровых партий сверху будет располагаться информация обо всех параметрах игры",
        elem: "header",
        units: [["#nick", "Рядом с аватаркой отбражается ник вашего текущего игрового персонажа"], ["#gamemoney", 'Прямо под ником отображается количество <span class="gamemoney">игровых монет</span> на аккаунте'], ["#money", 'И количество <span class="money">игровой валюты</span>. Пополнить счёт можно с помощью кнопки <b>+</b>, расположенной рядом. На выбор предоставляется 2 способа:<ul><li>через платежный агрегатор с различной комиссией для разных операторов (мгновенное зачисление)</li><li>через Яндекс-Деньги или карту Visa/MasterCard без комиссии (зачисление в течение 3 дней)</li></ul>', true], ["#options", "В правом углу по значку &quot;шестеренка&quot; можно вызвать окно настроек игры. Там ты можешь отключить/включить звуки, музыку, радио в игре, а также сменить режим игры Мафия/День Любви на противоположный. Посмотри потом остальные настройки."], ["header>a", "Если у тебя уже появились (или обязательно появятся) идеи по улучшению игры, оставляй их в официальной группе. Просто нажми на этот значок с &quot;желтым колобком&quot;."], [".button-heart", 'Давай расскажу и про остальные кнопки! <span class="for-ffl">Сердечко с крылышками</span> <span class="for-maffia">Кнопка с конвертом</span> расскажет обо всех видах игровых аккаунтов: обычный, клубный и vip. Потом обязательно посмотри на досуге, чем они отличаются. От себя добавлю, лучше всего это VIP-статус - сможешь создавать игры с любым набором ролей!'], [".button-newgame", "Кнопка &quot;Новая игра&quot;, как ты уже догадываешься, нужна чтобы создавать игры. При создании новой заявки ты сможешь выставить интересные для тебя параметры игры: ставка, количество игроков, набор ролей и многое другое. Так, например, запретить ботам (то есть не живым игрокам) присоединяться к партии. Я думаю, ты с этим прекрасно разберешься очень скоро!"], [".button-aboutgame", 'Кнопка со значком вопроса это справочная информация об игре, но тебе она не пригодится. Тебе очень повезло, что я тебя <span class="helpman">встретил</span> <span class="helpwoman">встретила</span> :) Я тебе итак все расскажу!'], ".button-shop", [".button-donatoptions", 'Раздел VIP пригодится не каждому (нужна <span class="money">игровая валюта</span>), но если задумаешь поменять ник, установить особенное фото для персонажа или поменять цвет своего ника в игровом чате, обязательно зайди туда. Там же можно получить VIP статус для своего аккаунта. С остальными возможностями ознакомишься, если будет время и желание.', true], [".button-findgame", "Кнопка &quot;Найти игру&quot; (аналог комбинации клавиш Ctrl+Ё) забросит тебя в случайную заявку из списка игр. Если нет ни одной доступной, заявка будет создана."], ["nav", 'Панель навигации по <span class="for-ffl">корпусам</span> <span class="for-maffia">залам</span> игры. Запомни, что последний, черный, доступен только для членов клуба <span class="clubname"></span>. При входе в игру ты автоматически будешь попадать в самый первый, <span class="for-ffl">розовый корпус</span> <span class="for-maffia">синий зал</span>.']],
        css: "top:130px"
    },
    6: {
        name: "Боковая панель",
        text: "С панелью справа всё очень просто.",
        detail: "Она состоит из 3 частей.",
        elem: "aside",
        units: [["#players", "Верхняя часть - список игроков в текущей комнате. Можно посмотреть информацию о любом игроке, просто наведя указатель на его ник в этом списке. С помощью двойного клика можно выставить выделенного игрока в качестве адресата для сообщений."], "#statusbar", ["#lists", "Нижний раздел это набор следующих вкладок: список друзей онлайн, первые 20 игроков на проекте по количестку монет на счете и игровому рейтингу, участники с наибольшей активностью в этом месяце и статистика по приглашениям новых участников."]],
        css: "right:240px"
    },
    7: {
        name: "Игровое меню",
        text: "Слева расположена панель навигации по дополнительным локациям игры",
        detail: "Запомнить их все сразу действительно тяжело...",
        elem: "#left-panel",
        units: ["#edit", ".button-myprogress", ".button-inventory", ".button-stat", ".button-areamap", ".button-curgames", ".button-total", ".button-auction", ".button-giftshop", ".button-tournaments", ".button-roll", ".button-collect", ".button-quiztop"],
        css: "left:55px"
    },
    8: {
        name: "Удачи",
        text: "Ну что стало немного понятнее?",
        detail: 'Я и <span class="helpman">сам</span> <span class="helpwoman">сама</span> еще не во всем <span class="helpman">разобрался</span><span class="helpwoman">разобралась</span>!',
        elem: false,
        units: [[false, "Ладно, мне пора бежать. Еще увидимся!"]],
        css: "",
        next: "Конечно",
        exit: "Спасибо за помощь"
    }
};
var helper = {
    timer: false,
    curBlock: 0,
    curStep: 0,
    curElem: false,
    obj: $("#helper"),
    nextButton: $("#helper-nextbutton"),
    exitButton: $("#helper-exitbutton")
};
helper.header = helper.obj.find("h6");
helper.main = helper.obj.find("div").find("div.helper-content");
helper.nextButton.bind("click touchstart", function(e) {
    helper.newStep();
});
helper.exitButton.bind("click touchstart", function(e) {
    helper.stop();
});
helper.randomNext = function() {
    return ["Тут все понятно", "Давай дальше", "Продолжай", "Я понимаю", "Еще что тут есть?", "Спасибо, ясно", "Хорошо"].randomValue();
}
;
helper.blinkStart = function() {
    if (!this.curElem) {
        return;
    }
    $(this.curElem).fadeOut("fast").fadeIn("fast", function() {
        $(this).css("display", "");
    });
    helper.timer = setTimeout(function() {
        helper.blinkStart();
    }, 1000);
}
;
helper.blinkStop = function() {
    if (helper.timer) {
        clearTimeout(helper.timer);
        helper.timer = false;
    }
}
;
helper.newBlock = function() {
    $(".help-active-item").removeClass("help-active-item");
    helper.curBlock++;
    if (helperData[helper.curBlock]) {
        var curBlock = helperData[helper.curBlock];
        helper.obj.attr("style", curBlock.css);
        $(curBlock.elem).addClass("help-active-item");
        helper.header.attr("data-name", curBlock.name);
        helper.main.html(curBlock.text);
        helper.nextButton.html(curBlock.next || helper.randomNext());
        helper.exitButton.html(curBlock.exit || "Закончить обучение");
        helper.curStep = 0;
    } else {
        helper.curBlock = 0;
        helper.curStep = 0;
        helper.stop();
    }
}
;
helper.newStep = function() {
    var curBlock = helperData[helper.curBlock];
    helper.blinkStop();
    if (curBlock.units && curBlock.units[helper.curStep]) {
        if (!Array.isArray(curBlock.units[helper.curStep])) {
            curBlock.units[helper.curStep] = [curBlock.units[helper.curStep], helpWiki[curBlock.units[helper.curStep]].info, helpWiki[curBlock.units[helper.curStep]].novk];
        }
        helper.curElem = curBlock.units[helper.curStep][0];
        if ((isAppVK && curBlock.units[helper.curStep][2] && curBlock.units[helper.curStep][2] === true) || (helper.isLocked() && locations_rating[helper.curElem] && locations_rating[helper.curElem] > u.rating)) {
            helper.curStep++;
            helper.newStep();
            return;
        }
        helper.main.html(curBlock.units[helper.curStep][1]);
        helper.nextButton.html(curBlock.units[helper.curStep][2] || helper.randomNext());
        helper.blinkStart();
        helper.curStep++;
    } else {
        helper.newBlock();
    }
}
;
helper.start = function() {
    if (container.hasClass("ingame")) {
        return;
    }
    if (u.sex == 1) {
        helper.obj.addClass("man");
    }
    helper.obj.addClass("helpmode");
    helper.curBlock = 0;
    helper.curStep = 0;
    helper.curElem = false;
    helper.newBlock();
}
;
helper.stop = function() {
    helper.obj.removeClass("helpmode");
    $(".help-active-item").removeClass("help-active-item");
    helper.blinkStop();
    alarm("Чтобы вызвать помощь в следующий раз, нажмите клавишу F1 или наберите в чате команду help");
}
;
helper.enabled = function() {
    return helper.obj.hasClass("helpmode");
}
;
var locations_rating = {
    ".button-shop": 1,
    ".button-roll": 4,
    "#smiles": 10,
    "#statusbar": 15,
    "#edit": 20,
    ".button-inventory": 28,
    ".button-total": 36,
    ".button-auction": 43,
    ".button-curgames": 50,
    ".button-stat": 70,
    ".button-areamap": 90
};
helper.rating = -1;
helper.isLocked = function() {
    return (u && u.rating < 90);
}
;
helper.hideLocation = function() {
    if (helper.isLocked) {
        for (var selector in locations_rating) {
            if (locations_rating.hasOwnProperty(selector)) {
                if (u.rating < locations_rating[selector]) {
                    $(selector).addClass("locked");
                }
            }
        }
        helper.rating = u.rating;
    }
}
;
helper.checkLocked = function(obj) {
    if (helper.isLocked() && obj.hasClass("locked")) {
        showMessage("Для доступа к локации недостаточно игрового рейтинга!");
        return true;
    } else {
        return false;
    }
}
;
helper.changeRate = function() {
    if (helper.rating > -1 && helper.rating < 90 && helper.rating != u.rating) {
        var selectors = [];
        for (var selector in locations_rating) {
            if (locations_rating.hasOwnProperty(selector)) {
                if (helper.rating < locations_rating[selector] && u.rating >= locations_rating[selector]) {
                    selectors.push(selector);
                }
            }
        }
        if (selectors.length > 0) {
            var curselector = selectors[0];
            $(curselector).removeClass("locked");
            helper.curElem = curselector;
            helper.blinkStart();
            if (isAppVK && helpWiki[curselector].novk) {
                helper.rating = locations_rating[curselector];
                helper.blinkStop();
                helper.changeRate();
            } else {
                if (selectors.length > 1) {
                    helper.rating = locations_rating[curselector];
                    warningWindow("Для тебя доступна новая локация - <b>" + helpWiki[curselector].title + "</b>!<hr/> " + helpWiki[curselector].info, function() {
                        helper.blinkStop();
                        helper.changeRate();
                    }, "А еще?", false, "newspaper");
                } else {
                    helper.rating = u.rating;
                    warningWindow("Для тебя доступна новая локация - <b>" + helpWiki[curselector].title + "</b>!<hr/> " + helpWiki[curselector].info, helper.blinkStop, "Ура!", false, "newspaper");
                }
            }
        }
    }
}
;
var hintQueue = []
  , hintTimer = false;
helper.hint = function(text, special) {
    if (hintsNeed && text) {
        var msg;
        if (special) {
            msg = text;
        } else {
            if (text == "start") {
                msg = helpHints["start-prefix"] + roles(game.role).name + helpHints[gameMode()]["start-side" + (game.isRobber(game.role) ? "2" : "1")];
            } else {
                msg = (helpHints[text]) ? helpHints[text] : helpHints[gameMode()][text];
            }
        }
        if (!msg) {
            return;
        }
        if (hintQueue.length == 0) {
            showHint(msg);
        }
        hintQueue.push(msg);
    }
}
;
function showHint(text) {
    if (hintTimer) {
        clearTimeout(hintTimer);
    }
    var hint = w.find(".modal");
    hint.html(text);
    hint.unbind("click");
    w.addClass("showWindow");
    hintTimer = setTimeout(hideHint, 8000);
    hint.click(hideHint);
}
function hideHint() {
    hintQueue.shift();
    w.removeClass("showWindow");
    if (hintQueue.length > 0) {
        setTimeout(function() {
            showHint(hintQueue[0]);
        }, 500);
    }
}
helper.textInfo = function(text) {
    showNewMessage({
        message: text,
        msgStyle: "helper-infotext"
    });
}
;
helper.timestep = 1;
helper.helpGameCounter = function() {
    helper.timestep++;
    if (helper.timestep > 929) {
        helper.helpGameStop();
        var resultObj = {
            days: 5,
            event: {
                text: "end:studwin"
            },
            money: 0,
            msgType: "exit",
            rate: 0,
            roles: [[1, u.login]],
            win: true
        };
        for (var i in helper.helpGamePlayers) {
            if (helper.helpGamePlayers.hasOwnProperty(i)) {
                resultObj.roles.push([helper.helpGamePlayers[i].role, helper.helpGamePlayers[i].login]);
            }
        }
        warningWindow(finalMsg(resultObj, true), goToRoom, "Выйти из игры", resultObj.win);
        return;
    }
    switch (helper.timestep) {
    case 4:
        helper.textInfo('<div class="specialnews">Каждая игровая партия начинается с ночи - это время, когда мирные жители спокойно спят, а остальные выбирают одного игрока, к которому нанесут визит:</div><p>Мафия решает кого они убьют этой ночью.</p> <p>Полиция во главе с комиссаром проверяет очередного подозрительного игрока на принадлежность к мафиозному клану.</p> <p>Мaньяк выбирает жертву, руководствуясь личными желаниями и мотивами.</p> <p>Дoктор выезжает к одному из игроков, чтобы в случае покушения на его жизнь спасти его.</p> <p class="specialnews">Вы в этой партии - гражданин, поэтому спокойно дожидайтесь утра, попутно присматриваясь к игрокам и выбирая среди них самого подозрительного.</p>');
        break;
    case 28:
        game.event({
            text: "nightActions:2"
        });
        break;
    case 36:
        game.event({
            text: "nightActions:4"
        });
        break;
    case 44:
        game.event({
            text: "nightActions:6"
        });
        break;
    case 52:
        game.event({
            text: "nightActions:2"
        });
        break;
    case 60:
        game.event({
            text: "nightActions:7"
        });
        break;
    case 90:
        helper.textInfo('Ночь обычно заканчивается сразу после выхода всех игроков с активными ролями (кроме граждан и сержанта) или тянется до самого утра, до 9.00, если кто-то из "активов" этой ночью пропустит свой ход.');
        break;
    case 110:
        helper.textInfo("Обратите внимание на верхнюю панель, на которой слева отображается текущий период дня, а также игровое время. В 9.00 наступит утро, и город проснется!");
        break;
    case 144:
        game.setPeriod({
            period: 2,
            day: 1,
            msgArray: [{
                p: helper.helpGamePlayerIL(0),
                text: "morningInfo:4x"
            }, {
                p: helper.helpGamePlayerIL(0),
                text: "morningInfo:4"
            }, {
                p: helper.helpGamePlayerIL(12),
                text: "morningInfo:7"
            }, {
                p: helper.helpGamePlayerIL(7),
                replacedata: {
                    "[role]": helper.helpGamePlayerIL(12, true).role
                },
                text: "morningInfo:2"
            }, {
                replacedata: {
                    "[robbers]": 3,
                    "[students]": 11
                },
                text: "stat"
            }],
            del: [helper.helpGamePlayerIL(7).id]
        });
        break;
    case 150:
        helper.textInfo('<div class="specialnews">Сегодня ночью Вас проверял комиссар! Теперь ему известна Ваша роль, подождите, возможно, он отпишется в приват (чтобы другие участники, а особенно мафия, не узнали его). Постарайтесь играть сообща с ним (с помощью приватных сообщений). Позовите в общем чате доктора, чтобы он открыл Вам свою роль. Это поможет комиссару дольше оставаться в игре.</p>');
        break;
    case 175:
        showNewMessage({
            message: "хорошее начало...",
            msgType: "public",
            from: helper.helpGamePlayerIL(14)
        });
        break;
    case 180:
        showNewMessage({
            message: "ман уйди лучше сам, ты не компетентен",
            msgType: "public",
            from: helper.helpGamePlayerIL(10)
        });
        break;
    case 185:
        showNewMessage({
            message: "с днюшкой)",
            msgType: "public",
            from: helper.helpGamePlayerIL(11),
            to: helper.helpGamePlayerIL(3).id,
            toName: helper.helpGamePlayerIL(3).login
        });
        break;
    case 188:
        showNewMessage({
            message: "я комиссар, найди доктора",
            msgType: "private",
            from: helper.helpGamePlayerIL(3),
            to: u._id,
            toName: u.login
        });
        break;
    case 190:
        showNewMessage({
            message: "[flower]",
            msgType: "public",
            from: helper.helpGamePlayerIL(4),
            to: helper.helpGamePlayerIL(3).id,
            toName: helper.helpGamePlayerIL(3).login
        });
        break;
    case 230:
        showNewMessage({
            message: "Привет, я доктор, кто комиссар?",
            msgType: "private",
            from: helper.helpGamePlayerIL(1),
            to: u._id,
            toName: u.login
        });
        break;
    case 237:
        game.vote({
            target: helper.helpGamePlayerIL(5).id,
            from: helper.helpGamePlayerIL(9),
            targetLogin: helper.helpGamePlayerIL(5).login
        });
        break;
    case 240:
        game.setPeriod({
            period: 3,
            day: 1,
            msgArray: [{
                p: helper.helpGamePlayerIL(5),
                text: "mainvote:before"
            }]
        });
        break;
    case 245:
        showNewMessage({
            message: "думаю так..",
            msgType: "public",
            from: helper.helpGamePlayerIL(9)
        });
        break;
    case 250:
        showNewMessage({
            message: "эй лоха кусок! Я г",
            msgType: "public",
            msgStyle: "lastwords",
            from: helper.helpGamePlayerIL(5)
        });
        break;
    case 253:
        showNewMessage({
            message: "гр",
            msgType: "public",
            msgStyle: "lastwords",
            from: helper.helpGamePlayerIL(5)
        });
        break;
    case 264:
        helper.helpGamePeriod4(1, 5);
        break;
    case 266:
        game.kickVote({
            kick: 2,
            event: {
                p: helper.helpGamePlayerIL(14),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(5).login
                },
                text: "mainvote:kick-no"
            }
        });
        break;
    case 268:
        game.kickVote({
            kick: 2,
            event: {
                p: helper.helpGamePlayerIL(2),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(5).login
                },
                text: "mainvote:kick-no"
            }
        });
        break;
    case 272:
        game.kickVote({
            kick: 2,
            event: {
                p: helper.helpGamePlayerIL(4),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(5).login
                },
                text: "mainvote:kick-no"
            }
        });
        break;
    case 277:
        game.kickVote({
            kick: 2,
            event: {
                p: helper.helpGamePlayerIL(6),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(5).login
                },
                text: "mainvote:kick-no"
            }
        });
        break;
    case 285:
        game.kickVote({
            kick: 2,
            event: {
                p: helper.helpGamePlayerIL(8),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(5).login
                },
                text: "mainvote:kick-no"
            }
        });
        break;
    case 288:
        helper.helpGamePeriod4Result(1, 5, 0, 5);
        break;
    case 295:
        game.event({
            text: "nightActions:4"
        });
        break;
    case 299:
        game.event({
            text: "nightActions:2"
        });
        break;
    case 302:
        game.event({
            text: "nightActions:6"
        });
        break;
    case 305:
        game.event({
            text: "nightActions:2"
        });
        break;
    case 308:
        game.event({
            text: "nightActions:7"
        });
        break;
    case 310:
        game.event({
            text: "nightActions:2"
        });
        game.setPeriod({
            period: 2,
            day: 2,
            msgArray: [{
                p: helper.helpGamePlayerIL(6),
                text: "morningInfo:4"
            }, {
                p: helper.helpGamePlayerIL(0),
                text: "morningInfo:7"
            }, {
                p: helper.helpGamePlayerIL(10),
                replacedata: {
                    "[role]": helper.helpGamePlayerIL(10, true).role
                },
                text: "morningInfo:2"
            }, {
                p: helper.helpGamePlayerIL(3),
                replacedata: {
                    "[role]": helper.helpGamePlayerIL(3, true).role
                },
                text: "morningInfo:6"
            }, {
                replacedata: {
                    "[robbers]": 3,
                    "[students]": 9
                },
                text: "stat"
            }],
            del: [helper.helpGamePlayerIL(10).id, helper.helpGamePlayerIL(3).id]
        });
        game.event({
            text: "newDuty"
        });
        break;
    case 322:
        showNewMessage({
            message: "ман ты не оч",
            msgType: "public",
            from: helper.helpGamePlayerIL(2)
        });
        break;
    case 328:
        showNewMessage({
            message: "ком, ну зачем меня?(",
            msgType: "public",
            from: helper.helpGamePlayerIL(6)
        });
        break;
    case 330:
        showNewMessage({
            message: "я теперь за кома, Натик - гр",
            msgType: "private",
            from: helper.helpGamePlayerIL(11),
            to: u._id,
            toName: u.login
        });
        break;
    case 335:
        showNewMessage({
            message: "кто из мафов спал прошлой ночью?",
            msgType: "public",
            from: helper.helpGamePlayerIL(12)
        });
        break;
    case 339:
        showNewMessage({
            message: "думаю, что Нэтс",
            msgType: "public",
            from: helper.helpGamePlayerIL(2)
        });
        break;
    case 341:
        showNewMessage({
            message: "он вечно спит",
            msgType: "public",
            from: helper.helpGamePlayerIL(2)
        });
        break;
    case 345:
        game.vote({
            target: helper.helpGamePlayerIL(9).id,
            from: helper.helpGamePlayerIL(2),
            targetLogin: helper.helpGamePlayerIL(9).login
        });
        break;
    case 349:
        game.vote({
            target: helper.helpGamePlayerIL(9).id,
            from: helper.helpGamePlayerIL(11),
            targetLogin: helper.helpGamePlayerIL(9).login
        });
        break;
    case 355:
        game.vote({
            target: helper.helpGamePlayerIL(9).id,
            from: helper.helpGamePlayerIL(5),
            targetLogin: helper.helpGamePlayerIL(9).login
        });
        break;
    case 406:
        game.setPeriod({
            period: 3,
            day: 2,
            msgArray: [{
                p: helper.helpGamePlayerIL(9),
                text: "mainvote:before"
            }]
        });
        break;
    case 414:
        showNewMessage({
            message: "[maf]",
            msgType: "public",
            msgStyle: "lastwords",
            from: helper.helpGamePlayerIL(9)
        });
        break;
    case 430:
        helper.helpGamePeriod4(2, 9);
        break;
    case 436:
        game.kickVote({
            kick: 1,
            event: {
                p: helper.helpGamePlayerIL(14),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(9).login
                },
                text: "mainvote:kick-yes"
            }
        });
        break;
    case 444:
        game.kickVote({
            kick: 1,
            event: {
                p: helper.helpGamePlayerIL(2),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(9).login
                },
                text: "mainvote:kick-yes"
            }
        });
        break;
    case 450:
        game.kickVote({
            kick: 1,
            event: {
                p: helper.helpGamePlayerIL(12),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(9).login
                },
                text: "mainvote:kick-yes"
            }
        });
        break;
    case 454:
        helper.helpGamePeriod4Result(2, 9, 3, 0, [9, 2]);
        break;
    case 458:
        game.event({
            text: "nightActions:6"
        });
        break;
    case 463:
        game.event({
            text: "nightActions:2"
        });
        break;
    case 469:
        game.event({
            text: "nightActions:4"
        });
        break;
    case 470:
        game.event({
            text: "nightActions:2"
        });
        break;
    case 474:
        game.event({
            text: "nightActions:7"
        });
        game.setPeriod({
            period: 2,
            day: 3,
            msgArray: [{
                p: helper.helpGamePlayerIL(13),
                text: "morningInfo:4"
            }, {
                p: helper.helpGamePlayerIL(11),
                text: "morningInfo:7"
            }, {
                p: helper.helpGamePlayerIL(12),
                replacedata: {
                    "[role]": helper.helpGamePlayerIL(12, true).role
                },
                text: "morningInfo:2"
            }, {
                p: helper.helpGamePlayerIL(14),
                replacedata: {
                    "[role]": helper.helpGamePlayerIL(14, true).role
                },
                text: "morningInfo:6"
            }, {
                replacedata: {
                    "[robbers]": 2,
                    "[students]": 7
                },
                text: "stat"
            }],
            del: [helper.helpGamePlayerIL(12).id, helper.helpGamePlayerIL(14).id]
        });
        break;
    case 482:
        showNewMessage({
            message: "КОМ СПАСИБОЧКИ",
            msgType: "public",
            from: helper.helpGamePlayerIL(13)
        });
        break;
    case 484:
        showNewMessage({
            message: "ПИШИ",
            msgType: "public",
            from: helper.helpGamePlayerIL(13)
        });
        break;
    case 510:
        game.vote({
            target: helper.helpGamePlayerIL(2).id,
            from: helper.helpGamePlayerIL(5),
            targetLogin: helper.helpGamePlayerIL(2).login
        });
        break;
    case 515:
        showNewMessage({
            message: "кот мафия, у меня чуйка",
            msgType: "public",
            from: helper.helpGamePlayerIL(5)
        });
        break;
    case 530:
        game.vote({
            target: helper.helpGamePlayerIL(2).id,
            from: helper.helpGamePlayerIL(13),
            targetLogin: helper.helpGamePlayerIL(2).login
        });
        break;
    case 540:
        game.vote({
            target: helper.helpGamePlayerIL(2).id,
            from: helper.helpGamePlayerIL(4),
            targetLogin: helper.helpGamePlayerIL(2).login
        });
        break;
    case 570:
        game.setPeriod({
            period: 3,
            day: 3,
            msgArray: [{
                p: helper.helpGamePlayerIL(2),
                text: "mainvote:before"
            }]
        });
        break;
    case 580:
        showNewMessage({
            message: "[gr]",
            msgType: "public",
            msgStyle: "lastwords",
            from: helper.helpGamePlayerIL(2)
        });
        break;
    case 594:
        helper.helpGamePeriod4(3, 2);
        break;
    case 600:
        game.kickVote({
            kick: 1,
            event: {
                p: helper.helpGamePlayerIL(5),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(2).login
                },
                text: "mainvote:kick-yes"
            }
        });
        break;
    case 604:
        game.kickVote({
            kick: 1,
            event: {
                p: helper.helpGamePlayerIL(13),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(2).login
                },
                text: "mainvote:kick-yes"
            }
        });
        break;
    case 608:
        game.kickVote({
            kick: 2,
            event: {
                p: helper.helpGamePlayerIL(1),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(2).login
                },
                text: "mainvote:kick-no"
            }
        });
        break;
    case 612:
        game.kickVote({
            kick: 1,
            event: {
                p: helper.helpGamePlayerIL(8),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(2).login
                },
                text: "mainvote:kick-yes"
            }
        });
        break;
    case 618:
        helper.helpGamePeriod4Result(3, 2, 3, 1, [6, 2]);
        break;
    case 620:
        game.event({
            text: "nightActions:6"
        });
        break;
    case 625:
        game.event({
            text: "nightActions:2"
        });
        break;
    case 629:
        game.event({
            text: "nightActions:4"
        });
        break;
    case 631:
        game.event({
            text: "nightActions:2"
        });
        break;
    case 634:
        game.event({
            text: "nightActions:7"
        });
        game.setPeriod({
            period: 2,
            day: 4,
            msgArray: [{
                p: helper.helpGamePlayerIL(5),
                text: "morningInfo:7x"
            }, {
                p: helper.helpGamePlayerIL(8),
                text: "morningInfo:4"
            }, {
                p: helper.helpGamePlayerIL(13),
                replacedata: {
                    "[role]": helper.helpGamePlayerIL(13, true).role
                },
                text: "morningInfo:2"
            }, {
                replacedata: {
                    "[robbers]": 2,
                    "[students]": 5
                },
                text: "stat"
            }],
            del: [helper.helpGamePlayerIL(13).id]
        });
        break;
    case 638:
        showNewMessage({
            message: "чуйка у Чая вообще не очень",
            msgType: "public",
            from: helper.helpGamePlayerIL(6)
        });
        break;
    case 642:
        showNewMessage({
            message: "Проверенный маф, выводи его",
            msgType: "private",
            from: helper.helpGamePlayerIL(11),
            to: u._id,
            toName: u.login
        });
        break;
    case 644:
        helper.textInfo('<div class="specialnews">Комиссар проверил мафиози. Сообщите об этом игрокам в чате и голосуйте против него. Сам комиссар не может этого сделать, чтобы не выдать себя перед оставшимся в игре еще одним мафиози.</p>');
        break;
    case 670:
        game.vote({
            target: helper.helpGamePlayerIL(8).id,
            from: helper.helpGamePlayerIL(6),
            targetLogin: helper.helpGamePlayerIL(8).login
        });
        break;
    case 679:
        game.vote({
            target: helper.helpGamePlayerIL(8).id,
            from: helper.helpGamePlayerIL(1),
            targetLogin: helper.helpGamePlayerIL(8).login
        });
        break;
    case 688:
        game.vote({
            target: helper.helpGamePlayerIL(8).id,
            from: helper.helpGamePlayerIL(4),
            targetLogin: helper.helpGamePlayerIL(8).login
        });
        break;
    case 695:
        game.vote({
            target: helper.helpGamePlayerIL(8).id,
            from: helper.helpGamePlayerIL(11),
            targetLogin: helper.helpGamePlayerIL(8).login
        });
        break;
    case 710:
        showNewMessage({
            message: "ком зайди ко мне ночью",
            msgType: "public",
            from: helper.helpGamePlayerIL(1)
        });
        break;
    case 730:
        game.setPeriod({
            period: 3,
            day: 4,
            msgArray: [{
                p: helper.helpGamePlayerIL(8),
                text: "mainvote:before"
            }]
        });
        break;
    case 740:
        showNewMessage({
            message: "Зато мы - чемпионы года!",
            msgType: "public",
            msgStyle: "lastwords",
            from: helper.helpGamePlayerIL(8)
        });
        break;
    case 754:
        helper.helpGamePeriod4(4, 8);
        break;
    case 756:
        game.kickVote({
            kick: 1,
            event: {
                p: helper.helpGamePlayerIL(6),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(8).login
                },
                text: "mainvote:kick-yes"
            }
        });
        break;
    case 762:
        game.kickVote({
            kick: 2,
            event: {
                p: helper.helpGamePlayerIL(5),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(8).login
                },
                text: "mainvote:kick-no"
            }
        });
        break;
    case 766:
        game.kickVote({
            kick: 1,
            event: {
                p: helper.helpGamePlayerIL(1),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(8).login
                },
                text: "mainvote:kick-yes"
            }
        });
        break;
    case 772:
        game.kickVote({
            kick: 1,
            event: {
                p: helper.helpGamePlayerIL(4),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(8).login
                },
                text: "mainvote:kick-yes"
            }
        });
        break;
    case 778:
        helper.helpGamePeriod4Result(4, 8, 3, 1, [5, 1]);
        break;
    case 780:
        game.event({
            text: "nightActions:2"
        });
        break;
    case 782:
        game.event({
            text: "nightActions:7"
        });
        break;
    case 783:
        game.event({
            text: "nightActions:6"
        });
        break;
    case 784:
        game.event({
            text: "nightActions:4"
        });
        game.setPeriod({
            period: 2,
            day: 5,
            msgArray: [{
                p: helper.helpGamePlayerIL(11),
                text: "morningInfo:7x"
            }, {
                p: helper.helpGamePlayerIL(1),
                text: "morningInfo:4x"
            }, {
                p: helper.helpGamePlayerIL(1),
                text: "morningInfo:4"
            }, {
                replacedata: {
                    "[robbers]": 1,
                    "[students]": 5
                },
                text: "stat"
            }],
            del: false
        });
        break;
    case 799:
        showNewMessage({
            message: "Чай подозрительно миловала мафа, давай ее выведем на казнь",
            msgType: "private",
            from: helper.helpGamePlayerIL(11),
            to: u._id,
            toName: u.login
        });
        break;
    case 810:
        game.vote({
            target: helper.helpGamePlayerIL(5).id,
            from: helper.helpGamePlayerIL(11),
            targetLogin: helper.helpGamePlayerIL(5).login
        });
        break;
    case 815:
        game.vote({
            target: helper.helpGamePlayerIL(11).id,
            from: helper.helpGamePlayerIL(5),
            targetLogin: helper.helpGamePlayerIL(11).login
        });
        break;
    case 820:
        game.vote({
            target: helper.helpGamePlayerIL(5).id,
            from: helper.helpGamePlayerIL(1),
            targetLogin: helper.helpGamePlayerIL(5).login
        });
        break;
    case 835:
        game.vote({
            target: helper.helpGamePlayerIL(5).id,
            from: helper.helpGamePlayerIL(6),
            targetLogin: helper.helpGamePlayerIL(5).login
        });
        break;
    case 860:
        showNewMessage({
            message: "Эх",
            msgType: "public",
            from: helper.helpGamePlayerIL(5)
        });
        break;
    case 880:
        game.setPeriod({
            period: 3,
            day: 5,
            msgArray: [{
                p: helper.helpGamePlayerIL(5),
                text: "mainvote:before"
            }]
        });
        break;
    case 885:
        showNewMessage({
            message: "с победой [drink]",
            msgType: "public",
            msgStyle: "lastwords",
            from: helper.helpGamePlayerIL(5)
        });
        break;
    case 904:
        helper.helpGamePeriod4(5, 5);
        break;
    case 909:
        game.kickVote({
            kick: 1,
            event: {
                p: helper.helpGamePlayerIL(1),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(5).login
                },
                text: "mainvote:kick-yes"
            }
        });
        break;
    case 914:
        game.kickVote({
            kick: 1,
            event: {
                p: helper.helpGamePlayerIL(11),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(5).login
                },
                text: "mainvote:kick-yes"
            }
        });
        break;
    case 920:
        game.kickVote({
            kick: 1,
            event: {
                p: helper.helpGamePlayerIL(6),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(5).login
                },
                text: "mainvote:kick-yes"
            }
        });
        break;
    case 928:
        helper.helpGamePeriod4Result(5, 5, 3, 0, [5, 0]);
        break;
    }
}
;
helper.helpGamePlayers = {
    testplayer1: {
        login: "Лиса",
        role: 7,
        sex: 1,
        image: 11,
        hide: true,
        bot: true,
        icon: 8,
        status: "",
        about: "Зашла вот к вам и глаза чуть не вытекли от оформления. Ну как так-то?"
    },
    testplayer2: {
        login: "cat in box",
        role: 1,
        sex: 2,
        image: 4,
        hide: true,
        bot: true
    },
    testplayer3: {
        login: "Чипсик",
        role: 4,
        sex: 2,
        image: 5,
        hide: true,
        bot: true
    },
    testplayer4: {
        login: "Elenel2",
        role: 6,
        sex: 1,
        image: 22,
        hide: true,
        bot: true
    },
    testplayer5: {
        login: "Чай с мятой",
        role: 1,
        sex: 1,
        image: 6,
        hide: true,
        bot: true,
        icon: 4,
        status: "",
        about: "у меня 100% чуйка"
    },
    testplayer6: {
        login: "Natikponch",
        role: 2,
        sex: 1,
        image: 7,
        hide: true,
        bot: true,
        icon: 2,
        status: "Клофи",
        about: "Сижу, играю каждый вечер. Где пончик? Спросишь - вот и я! Задротом стану я навечно. Спасибо мафия моя"
    },
    testplayer7: {
        login: "Пикчаа",
        role: 1,
        sex: 1,
        image: 9,
        hide: true,
        bot: true
    },
    testplayer8: {
        login: "суд макса",
        role: 2,
        sex: 2,
        image: 9,
        hide: true,
        bot: true
    },
    testplayer9: {
        login: "Nats13",
        role: 2,
        sex: 2,
        image: 10,
        hide: true,
        bot: true
    },
    testplayer10: {
        login: "Лыжный спуск",
        role: 1,
        sex: 2,
        image: 12,
        hide: true,
        bot: true
    },
    testplayer11: {
        login: "Сластёна",
        role: 5,
        sex: 1,
        image: 16,
        hide: true,
        bot: true
    },
    testplayer12: {
        login: "Демиус",
        role: 1,
        sex: 6,
        image: 14,
        hide: true,
        bot: true
    },
    testplayer13: {
        login: "Машенька",
        role: 1,
        sex: 20,
        image: 1,
        hide: true,
        bot: true
    },
    testplayer14: {
        login: "Интеллектуал",
        role: 1,
        sex: 2,
        image: 11,
        hide: true,
        bot: true
    }
};
helper.helpGamePlayerIL = function(num, needrole) {
    var cu = (num == 0) ? u : helper.helpGamePlayers["testplayer" + num]
      , out = {
        id: cu._id,
        nick: cu.login,
        login: cu.login,
        sex: cu.sex,
        image: cu.image
    };
    if (needrole) {
        out.role = cu.role;
    }
    return out;
}
;
helper.helpGamePeriod4 = function(day, plnum) {
    helper.isKick = 0;
    game.setPeriod({
        period: 4,
        day: day,
        msgArray: [u._id, {
            p: helper.helpGamePlayerIL(plnum),
            text: "mainvote:question"
        }]
    });
    modalWindow('Вы считаете, что <b class="nickname" data-id="' + helper.helpGamePlayerIL(plnum).id + '">' + helper.helpGamePlayerIL(plnum).login + "</b><br/> нужно казнить?", function() {
        helper.isKick = 1;
        game.kickVote({
            kick: 1,
            event: {
                p: helper.helpGamePlayerIL(0),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(plnum).login
                },
                text: "mainvote:kick-yes"
            }
        });
    }, function() {
        helper.isKick = 2;
        game.kickVote({
            kick: 2,
            event: {
                p: helper.helpGamePlayerIL(0),
                replacedata: {
                    "[target]": helper.helpGamePlayerIL(plnum).login
                },
                text: "mainvote:kick-no"
            }
        });
    });
}
;
helper.helpGamePeriod4Result = function(day, plnum, kill, nokill, lost) {
    var isKill = (kill > nokill)
      , msgArr = [{
        p: helper.helpGamePlayerIL(plnum),
        text: "mainvote:result-stat",
        replacedata: {
            "[count0]": helper.isKick == 2 ? nokill + 1 : nokill,
            "[count1]": helper.isKick == 1 ? kill + 1 : kill
        }
    }];
    var secondMsg = {
        p: helper.helpGamePlayerIL(plnum),
        text: "mainvote:result" + (isKill ? "1" : "0")
    };
    if (isKill) {
        secondMsg.replacedata = {
            "[role]": helper.helpGamePlayerIL(plnum, true).role
        };
    }
    msgArr.push(secondMsg);
    if (isKill) {
        msgArr.push({
            replacedata: {
                "[robbers]": lost[1],
                "[students]": lost[0]
            },
            text: "stat"
        });
    }
    game.setPeriod({
        period: 1,
        day: day,
        msgArray: msgArr,
        del: isKill ? [helper.helpGamePlayerIL(plnum).id] : false
    });
}
;
helper.helpGameStart = function() {
    if (helper.helpGameTimer) {
        return;
    }
    sendToSocket({
        type: "testgame"
    });
    helper.timestep = 1;
    var players = JSON.parse(JSON.stringify(helper.helpGamePlayers));
    for (var i in players) {
        if (players.hasOwnProperty(i)) {
            delete players[i].role;
            helper.helpGamePlayers[i]["_id"] = i;
            players[i]["_id"] = i;
        }
    }
    players[u._id] = u;
    room = "testgame";
    gametitle.html("<span> " + gameStyle[0] + ' на 15 игроков</span> <span id="addedToGame">15</span> <span id="remainForGame">0</span> <span>Cтавка 2000</span>');
    showPlayersList(players, "testgame");
    game.start({
        banks: [0, 0, 0, 0],
        gamestyle: {
            style: 0,
            style1: 0,
            style2: 1,
            style3: 0,
            style4: 0
        },
        players: players,
        role: 1,
        roles: [2, 2, 2, 4, 5, 6, 7, 8]
    });
    helper.helpGameTimer = setInterval(function() {
        helper.helpGameCounter();
    }, 1000);
    game.setPeriod({
        banks: false,
        period: 1,
        day: 0,
        msgArray: [],
        del: []
    });
}
;
helper.helpGameStop = function() {
    window.clearInterval(helper.helpGameTimer);
    helper.helpGameTimer = false;
    mW.hide();
    game.finished();
}
;
