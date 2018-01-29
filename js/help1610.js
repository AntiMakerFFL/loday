$('<div id="helper"><div><div class="helper-content"></div><div class="helper-buttons"><button id="helper-nextbutton">������</button><button id="helper-exitbutton">��������� ��������</button></div></div></div>').appendTo(container);
var articleHeight = $("article").outerHeight()
  , helpHints = {
    "wait-players": "���������, ����� ��������� ����������� ��� ���� ����� ����������",
    "start-prefix": "���� ��������. ���� ���� - ",
    vote: "���������, ��� ������������� ������ � ���� ����������. �������, ��� �� ����� ���������� ���� ��������.",
    voteme: "�� ������ ������� ���� � ����� ������������. �� �� ������� ���������� ���� ����.",
    ffl: {
        "start-side1": ". �� ������� �� ���������. ",
        "start-side2": ". �� ������� �� �����������. ",
        night1: "����� �������� ����. �������� ����� ����� ������ ���� �� ���� � ������� ������� <b>��������</b>.",
        night2: "����� ��������, ��� ����� �������� ��������� ��� �������� � ���������. �������� ������ �� ������ � ������� ������ <b>��������</b>.",
        night3: "�� ������ �� ���� ���� <b>��������</b> ������ ������ � ������, � ����� ��� � <b>��������</b> ������� � ��������.",
        night4: "�������� �� ������ ������� ������ ��������� � ������� <b>���������</b>. ����� �� ������� ��� ���� � ���� ������.",
        night5: "��������� ��������� ������ ����� ��������� ����������� ��������. ���� �������, ����������� ��������, ����� ��� ��������.",
        night6: "�������� �� ������ ������� �������� ��������������� � ������� ������ <b>��������� �������</b>. ������ ���������, �� ������ �������� �������� ��� ������� ���������.",
        night7: "�� ������ ������ ������� ������ �� ��������� �� �����. �������� � ������ ������� ����� ��� � ������� ������ <b>��������</b>",
        night8: "�������� �������������� ������ �� ������ � ������� ������ <b>��������</b>. ���� ����� �� ������ ���� ����� ������ �������. ������ ����������, ���� �� ������� �������, ���� ��� ��� ����������.",
        "day-side1": "�������� ��������� ������ � ������������ ������� ����������� �������� �� ������ ����. �������� �������������� �� ������ � ������� ����������. �������, ��� � ��� ���� 1 ������� �������� ���� �������.",
        "day-side2": "�������� � ������ � ���������� �� ���������� � ���� ��������. ��������� ������ ������ �� ��������� � ������."
    },
    maffia: {
        "start-side1": ". �� ������� �� �������. ",
        "start-side2": ". �� ������� �� �����. ",
        night1: "����� ������ �������� ����. �������� ����� ����� ������ ���� �� ���� � ������� ������� <b>��������</b>.",
        night2: "����� ��������, ��� ����� ���������� �� ������ �������. �������� ������ � ������ ������� � ������� ������ <b>�����</b>.",
        night3: "�� ������ �� ���� ���� <b>����������</b> ������ ������ � ������, � ����� ��� ������ <b>�����</b> ������ � ������� �������.",
        night4: "�������� �� ������ ������� ������ ��������� � ������� <b>���������</b>. ����� �� ������� ��� ���� � ���� ������.",
        night5: "��������� ��������� ������ ����� ������� ������ �����. ���� �������, ����������� ����������, ����� ��� ��������.",
        night6: "�������� �� ������ ������� �������� ��������������� � ������� ������ <b>��������</b>. ������ ���������, �� ������ �������� ����� ���������.",
        night7: "�� ������ ������ �� ������ ������ �� �������. �������� � ������ ������� ��� ��� � ������� ������ <b>������</b>",
        night8: "�������� �������������� ������ �� ������ � ������� ������ <b>��������</b>. ���� ����� �� ������ ���� ����� ������ �������. ������ ����������, ���� �� ����� ����, ��� ��������� �� �� ������.",
        "day-side1": "�������� ��������� ������ � ������������ ������� ����� �� ������ ����. �������� �������������� �� ������ � ������� ����������. �������, ��� � ��� ���� 1 ������� �������� ���� �������.",
        "day-side2": "�������� � ������, ����� ��� ����� �� ����������. ��������� ������ ������ �� ������� � ������."
    }
}
  , helpWiki = {
    ".button-shop": {
        title: "�������",
        block: "header",
        info: '� ������� ������� �� ������� ������ ����� ����� ����������� ��������:<ul><li class="news"><span class="item1"> - ����� ������������ ����� ������ �������</li><li class="news"><span class="item2"> - ��� ������ �� ����������� ������ � ������ �����</li><li class="news"><span class="item3"> - ����� ���� ������ ��������� ������</li><li class="news"><span class="item4"> - ��� ������ �������� ������� � ������ �����</li><li class="news"><span class="item5"> - ����� �������� ������������ ������ �� � ������� ������</li><li class="news"><span class="item6"> - ��� ������� � �������������� ������������.</li></ul>'
    },
    "#smiles": {
        title: "������",
        block: "footer",
        info: "��� ����� ������������� �������, ������� �������� ���������� �� ������ ����, �� � ����� ������������."
    },
    "#statusbar": {
        title: "������",
        block: "aside",
        info: "������ ������� ����� ��� �������� ��������� ���������� ��������� � ������� � ������ ������ ��� ������ ���� � ������ �������."
    },
    "#edit": {
        title: "�������� �������",
        block: "#left-panel",
        info: "� ��������� ���������� �� ������� ������� �������� � ��� ���������, ��������� ���������� � ����, �������� ������ ��� �������, � ����� ���������, ������� �������������� ���������� � ������������� ����� ����."
    },
    ".button-myprogress": {
        title: "����������",
        block: "#left-panel",
        info: "��� ������� ������� ����������� ��� ���� ���������� � ����. ��� �������� ��������� �������, �� ������� �������� �������. ���� ��������� ���� �� ����� ������� ���������, �������� ����������� �����, ������� ������� ��� ����� ����������� ��� ���� ������� ������."
    },
    ".button-inventory": {
        title: "���������",
        block: "#left-panel",
        info: "���� ��������� ���� ������� ���� ��������� ����������� ������ �� ����������� ����. ���� �� ������ ��������� ���� ���� �� �������, �� ���������, ��� � ���� �� ����."
    },
    ".button-stat": {
        title: "��������������",
        block: "#left-panel",
        info: '������� ��� ���������� ��������� &quot;��������������&quot; �������� ������ ��� �������� ������ ������������ ��������� ������ (��� ���������� ������), � ����� ���������� ����� �������/�����, <span class="for-ffl">���������/�����������</span><span class="for-maffia">�������/�����</span>. ������ ����� ����, �������, �� ����������� ��� �������.'
    },
    ".button-areamap": {
        title: "����� ������",
        block: "#left-panel",
        info: "�� ����� ������ �� ������ ���������� ����� ������ ������ ������������ �� ��� ���� ����� (�� ������ ������ ��� ������ � ����)."
    },
    ".button-curgames": {
        title: "������� ����",
        block: "#left-panel",
        info: "�� ������ ������ ���������� ��� �������� ������� ����, �� �������� � ��� �������. ��� ����� ������ � ������� ���� ������ � ���� �����, � ����� ������� ������������� ���� (���� �� ��� ������ ������� �����)."
    },
    ".button-total": {
        title: "�����������",
        block: "#left-panel",
        info: "���������� ������ ������� ����� ����� �� ������ ������ ���, � ������������. ������� ������������ ������ �� ���������� - ������ ������ �� ���������� ����� ������� � ������� ��� ��������� ����� ������ (����� ������� �� ���� ���������� � ����� ��������� ��������� ���������� ����� ��������� ������). ��������, ���� �� ���������� ������� ������� 3 ������ (1 000, 25 000 � 74 000), �� ������ �� ���������� ������� 1%, 25% � 74% �� ����� ���� ������."
    },
    ".button-auction": {
        title: "�������",
        block: "#left-panel",
        info: '�� �������� ����� �������� ��������� �������� �� <span class="money">������� ������</span>. ����� �������� ��� �������� ������ ����, ���� ������ ������ ������������ 3 ����� ����� �� ��������� (� ��������� ������ ������ ����������� ����).',
        novk: true
    },
    ".button-giftshop": {
        title: "�������",
        block: "#left-panel",
        info: "� �������� �������� �� ������ ������� ������� ��� ����� ������ � ��������, ������� �� �������� ����������� ��� ��������������. ����� ����� ��������� ������� ��������, ���� �� ������� �������� ���������� � ��������� �������."
    },
    ".button-tournaments": {
        title: "������� ��������",
        block: "#left-panel",
        info: "����� ��������� �������� �� ������� ���� ���� �� ����� ���������. ���, ������, ���������� ��� ���, ��� � ��� ��� ����������. �� ����� � �� �����-������ ��������... ������ �����, ��� ������ ���� ���."
    },
    ".button-roll": {
        title: "������� �����",
        block: "#left-panel",
        info: "������ ���� �� ���� �������� ����� ���������� �������. ����, ��� ��������� ������ ������ ������� �� �����."
    },
    ".button-collect": {
        title: "���������",
        block: "#left-panel",
        info: "� ������� ��������� ����� ������ ������� ���� �������� ������� ����������� ��������� ���������. ������ ������ ��������� ����������, �� �������� ������������ �����."
    },
    ".button-quiztop": {
        title: "������ ���������",
        block: "#left-panel",
        info: '� ������� &quot;������ � ������&quot; � ������ ��������� ������� ������������ ���������� ���������� �������, ������ �������� � ���������, ������� ��������� �������� � <span class="for-ffl">������� �������</span><span class="for-maffia">����� ����</span> ��� ������� �� ���� 5 �������.'
    }
}
  , helperData = {
    1: {
        name: "����� ����������",
        text: '<p>�����������...</p><p>� - <span class="helpwoman">����</span> <span class="helpman">������</span> ��, ��� ����� �������. ���� �� ������ ��� � ���� ������?! ���� ���� ���-��� �������.</p><p>� ����� ������ ������ ����������. ����� ���������� ��������� � ����� ��. �� �������� ���������, �� ��� ����� ������� ������ �������� ������ ����������� ��������? � ��� ��� ��� ��������: ������, �����, ���������. �� ������������... �� ������ �� ������ �� ���� ��������� � ������� ���� �����..<br/>',
        elem: false,
        units: [[false, '������ ������� ������ ������������ ����� ������� �������������� ������ ������� � �����. ���� �� �����-������ ����� � �������� � ��������� �����, �� ��� ������ � �������� ������ � ����� ������.<br/> ���, ����� ����, �� ������ ������� ������� � ��������� ������, ��� ������������� � ������� ���������?<br/> <button id="startHelpGame" onclick="helper.stop();helper.helpGameStart()">������ ����� ������</button><br/> � ���� ������, � ���� ����������� ���� � ����������� ����.', "���������"], [false, "������ � ������� ���� �� ����� �������� ��������� ������� ������� ���������."]],
        next: "� �����",
        exit: "��� �� ����� ������"
    },
    2: {
        name: "������� ������� ������",
        text: "� ������ ������ �� ������ ��� ����, ������� ��� �� ��������.",
        detail: "���� ����������, ��� ������ � ��� ��������� ����������� ����� ����������.",
        elem: "article>#main",
        units: [["article>#main", "������ ��������, ��� � ������ ����� ������� ���� � ����������� �� ������, ���� ���� � ���������� ������� � ������."], ["article>#main", "����� ���������� �������� � ���� �������, ������� ��� �������������� � ������, ������ ��������� �� ��������� ���� � �������."]],
        css: "top:" + (articleHeight * 0.4 + 145) + "px"
    },
    3: {
        name: "������� ���",
        text: "� ���� ������������ ��������� ������� � ��� ���������� ��� ���� �������� ������� ������",
        detail: "��� ����� � ���� � ���� ������������ ��������� ������� �������, � ����� ���������� �� �������, ����������� ����������� � ��������� ������������������ �������.",
        elem: "#messages",
        units: [["#messages", '��������� ��������� (������� ����� ������ ����������� � ����������) ���������� <span class="private sendme">������ � �������</span>.']],
        css: "bottom:" + (articleHeight * 0.59 + 75) + "px"
    },
    4: {
        name: "��������� ����",
        text: "��������, ����� �������� ����������� ������ ��� �������� ��������� � ���",
        detail: "������ � ����� ���� ��������� �� ������������.",
        elem: "footer",
        units: [["#adresat", "���� &quot;����&quot; - ��� ������� ������ � ��������� ���������.<br/> ����� ������� ���� ��������� ���������, �������� ������� ���� �� ���� ������ � ������ ���������� ������� ��� ������� �� ��� ������ � ����.<br/> �� ��������� ��������� ������������ ���� ���������� �������."], [".clear-adresat", "����� �������� �������� ���������, ��������� ������� ������ �� ���� &quot;����&quot;"], ["#privat+label", "������������� � ����� ��������� ��������� (������� ������ �������� � �����������).<br/> ����� �������� ������, ����� ������ ������� ��� ���������."], ["#scrolling+label", "������ ��� ������� ������������� ���� (��� �������� ������ ���������� ���������)"], ["#input", "���� ��� ����� ������ ���������. ��� �������� ����������� ������� Enter ��� ������ &quot;���������&quot; ������"], "#smiles", ["#shareButton", '��������� ������� �� ������ ������ ��� ������ &quot;����������&quot;.<br/> � ������� ��� ����� �������� ������ ��� ����������� ����� ������� �� ������ � ���������� �� �� ����� ��������, ����� ����� � ��������� ��� ������ ��������� ����� ������� �� ����� ��� � ������ ���������. ������ ������������������ �� ����� ������ �������� � ������ ���������� ������ ����� ����� ������������� ��������� � <span class="money">��� ������� ����</span> �� �������� ���� �����.', true]],
        css: "bottom:72px"
    },
    5: {
        name: "������� ������",
        text: "� ������� ����� ���� ����������� �������� �������� ��������� � ������� ����������.",
        detail: "�� ����� �������� ������ � ������ ������� ������ ������ ����� ������������� ���������� ��� ���� ���������� ����",
        elem: "header",
        units: [["#nick", "����� � ��������� ����������� ��� ������ �������� �������� ���������"], ["#gamemoney", '����� ��� ����� ������������ ���������� <span class="gamemoney">������� �����</span> �� ��������'], ["#money", '� ���������� <span class="money">������� ������</span>. ��������� ���� ����� � ������� ������ <b>+</b>, ������������� �����. �� ����� ��������������� 2 �������:<ul><li>����� ��������� ��������� � ��������� ��������� ��� ������ ���������� (���������� ����������)</li><li>����� ������-������ ��� ����� Visa/MasterCard ��� �������� (���������� � ������� 3 ����)</li></ul>', true], ["#options", "� ������ ���� �� ������ &quot;����������&quot; ����� ������� ���� �������� ����. ��� �� ������ ���������/�������� �����, ������, ����� � ����, � ����� ������� ����� ���� �����/���� ����� �� ���������������. �������� ����� ��������� ���������."], ["header>a", "���� � ���� ��� ��������� (��� ����������� ��������) ���� �� ��������� ����, �������� �� � ����������� ������. ������ ����� �� ���� ������ � &quot;������ ��������&quot;."], [".button-heart", '����� �������� � ��� ��������� ������! <span class="for-ffl">�������� � ����������</span> <span class="for-maffia">������ � ���������</span> ��������� ��� ���� ����� ������� ���������: �������, ������� � vip. ����� ����������� �������� �� ������, ��� ��� ����������. �� ���� �������, ����� ����� ��� VIP-������ - ������� ��������� ���� � ����� ������� �����!'], [".button-newgame", "������ &quot;����� ����&quot;, ��� �� ��� �������������, ����� ����� ��������� ����. ��� �������� ����� ������ �� ������� ��������� ���������� ��� ���� ��������� ����: ������, ���������� �������, ����� ����� � ������ ������. ���, ��������, ��������� ����� (�� ���� �� ����� �������) �������������� � ������. � �����, �� � ���� ��������� ����������� ����� �����!"], [".button-aboutgame", '������ �� ������� ������� ��� ���������� ���������� �� ����, �� ���� ��� �� ����������. ���� ����� �������, ��� � ���� <span class="helpman">��������</span> <span class="helpwoman">���������</span> :) � ���� ���� ��� ��������!'], ".button-shop", [".button-donatoptions", '������ VIP ���������� �� ������� (����� <span class="money">������� ������</span>), �� ���� ��������� �������� ���, ���������� ��������� ���� ��� ��������� ��� �������� ���� ������ ���� � ������� ����, ����������� ����� ����. ��� �� ����� �������� VIP ������ ��� ������ ��������. � ���������� ������������� ������������, ���� ����� ����� � �������.', true], [".button-findgame", "������ &quot;����� ����&quot; (������ ���������� ������ Ctrl+�) �������� ���� � ��������� ������ �� ������ ���. ���� ��� �� ����� ���������, ������ ����� �������."], ["nav", '������ ��������� �� <span class="for-ffl">��������</span> <span class="for-maffia">�����</span> ����. �������, ��� ���������, ������, �������� ������ ��� ������ ����� <span class="clubname"></span>. ��� ����� � ���� �� ������������� ������ �������� � ����� ������, <span class="for-ffl">������� ������</span> <span class="for-maffia">����� ���</span>.']],
        css: "top:130px"
    },
    6: {
        name: "������� ������",
        text: "� ������� ������ �� ����� ������.",
        detail: "��� ������� �� 3 ������.",
        elem: "aside",
        units: [["#players", "������� ����� - ������ ������� � ������� �������. ����� ���������� ���������� � ����� ������, ������ ������ ��������� �� ��� ��� � ���� ������. � ������� �������� ����� ����� ��������� ����������� ������ � �������� �������� ��� ���������."], "#statusbar", ["#lists", "������ ������ ��� ����� ��������� �������: ������ ������ ������, ������ 20 ������� �� ������� �� ���������� ����� �� ����� � �������� ��������, ��������� � ���������� ����������� � ���� ������ � ���������� �� ������������ ����� ����������."]],
        css: "right:240px"
    },
    7: {
        name: "������� ����",
        text: "����� ����������� ������ ��������� �� �������������� �������� ����",
        detail: "��������� �� ��� ����� ������������� ������...",
        elem: "#left-panel",
        units: ["#edit", ".button-myprogress", ".button-inventory", ".button-stat", ".button-areamap", ".button-curgames", ".button-total", ".button-auction", ".button-giftshop", ".button-tournaments", ".button-roll", ".button-collect", ".button-quiztop"],
        css: "left:55px"
    },
    8: {
        name: "�����",
        text: "�� ��� ����� ������� ��������?",
        detail: '� � <span class="helpman">���</span> <span class="helpwoman">����</span> ��� �� �� ���� <span class="helpman">����������</span><span class="helpwoman">�����������</span>!',
        elem: false,
        units: [[false, "�����, ��� ���� ������. ��� ��������!"]],
        css: "",
        next: "�������",
        exit: "������� �� ������"
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
    return ["��� ��� �������", "����� ������", "���������", "� �������", "��� ��� ��� ����?", "�������, ����", "������"].randomValue();
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
        helper.exitButton.html(curBlock.exit || "��������� ��������");
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
    alarm("����� ������� ������ � ��������� ���, ������� ������� F1 ��� �������� � ���� ������� help");
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
        showMessage("��� ������� � ������� ������������ �������� ��������!");
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
                    warningWindow("��� ���� �������� ����� ������� - <b>" + helpWiki[curselector].title + "</b>!<hr/> " + helpWiki[curselector].info, function() {
                        helper.blinkStop();
                        helper.changeRate();
                    }, "� ���?", false, "newspaper");
                } else {
                    helper.rating = u.rating;
                    warningWindow("��� ���� �������� ����� ������� - <b>" + helpWiki[curselector].title + "</b>!<hr/> " + helpWiki[curselector].info, helper.blinkStop, "���!", false, "newspaper");
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
        warningWindow(finalMsg(resultObj, true), goToRoom, "����� �� ����", resultObj.win);
        return;
    }
    switch (helper.timestep) {
    case 4:
        helper.textInfo('<div class="specialnews">������ ������� ������ ���������� � ���� - ��� �����, ����� ������ ������ �������� ����, � ��������� �������� ������ ������, � �������� ������� �����:</div><p>����� ������ ���� ��� ����� ���� �����.</p> <p>������� �� ����� � ���������� ��������� ���������� ��������������� ������ �� �������������� � ���������� �����.</p> <p>�a���� �������� ������, �������������� ������� ��������� � ��������.</p> <p>�o���� �������� � ������ �� �������, ����� � ������ ��������� �� ��� ����� ������ ���.</p> <p class="specialnews">�� � ���� ������ - ���������, ������� �������� ����������� ����, ������� �������������� � ������� � ������� ����� ��� ������ ���������������.</p>');
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
        helper.textInfo('���� ������ ������������� ����� ����� ������ ���� ������� � ��������� ������ (����� ������� � ��������) ��� ������� �� ������ ����, �� 9.00, ���� ���-�� �� "�������" ���� ����� ��������� ���� ���.');
        break;
    case 110:
        helper.textInfo("�������� �������� �� ������� ������, �� ������� ����� ������������ ������� ������ ���, � ����� ������� �����. � 9.00 �������� ����, � ����� ���������!");
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
        helper.textInfo('<div class="specialnews">������� ����� ��� �������� ��������! ������ ��� �������� ���� ����, ���������, ��������, �� ��������� � ������ (����� ������ ���������, � �������� �����, �� ������ ���). ������������ ������ ������ � ��� (� ������� ��������� ���������). �������� � ����� ���� �������, ����� �� ������ ��� ���� ����. ��� ������� ��������� ������ ���������� � ����.</p>');
        break;
    case 175:
        showNewMessage({
            message: "������� ������...",
            msgType: "public",
            from: helper.helpGamePlayerIL(14)
        });
        break;
    case 180:
        showNewMessage({
            message: "��� ���� ����� ���, �� �� �����������",
            msgType: "public",
            from: helper.helpGamePlayerIL(10)
        });
        break;
    case 185:
        showNewMessage({
            message: "� �������)",
            msgType: "public",
            from: helper.helpGamePlayerIL(11),
            to: helper.helpGamePlayerIL(3).id,
            toName: helper.helpGamePlayerIL(3).login
        });
        break;
    case 188:
        showNewMessage({
            message: "� ��������, ����� �������",
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
            message: "������, � ������, ��� ��������?",
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
            message: "����� ���..",
            msgType: "public",
            from: helper.helpGamePlayerIL(9)
        });
        break;
    case 250:
        showNewMessage({
            message: "�� ���� �����! � �",
            msgType: "public",
            msgStyle: "lastwords",
            from: helper.helpGamePlayerIL(5)
        });
        break;
    case 253:
        showNewMessage({
            message: "��",
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
            message: "��� �� �� ��",
            msgType: "public",
            from: helper.helpGamePlayerIL(2)
        });
        break;
    case 328:
        showNewMessage({
            message: "���, �� ����� ����?(",
            msgType: "public",
            from: helper.helpGamePlayerIL(6)
        });
        break;
    case 330:
        showNewMessage({
            message: "� ������ �� ����, ����� - ��",
            msgType: "private",
            from: helper.helpGamePlayerIL(11),
            to: u._id,
            toName: u.login
        });
        break;
    case 335:
        showNewMessage({
            message: "��� �� ����� ���� ������� �����?",
            msgType: "public",
            from: helper.helpGamePlayerIL(12)
        });
        break;
    case 339:
        showNewMessage({
            message: "�����, ��� ����",
            msgType: "public",
            from: helper.helpGamePlayerIL(2)
        });
        break;
    case 341:
        showNewMessage({
            message: "�� ����� ����",
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
            message: "��� ����������",
            msgType: "public",
            from: helper.helpGamePlayerIL(13)
        });
        break;
    case 484:
        showNewMessage({
            message: "����",
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
            message: "��� �����, � ���� �����",
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
            message: "����� � ��� ������ �� �����",
            msgType: "public",
            from: helper.helpGamePlayerIL(6)
        });
        break;
    case 642:
        showNewMessage({
            message: "����������� ���, ������ ���",
            msgType: "private",
            from: helper.helpGamePlayerIL(11),
            to: u._id,
            toName: u.login
        });
        break;
    case 644:
        helper.textInfo('<div class="specialnews">�������� �������� �������. �������� �� ���� ������� � ���� � ��������� ������ ����. ��� �������� �� ����� ����� �������, ����� �� ������ ���� ����� ���������� � ���� ��� ����� �������.</p>');
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
            message: "��� ����� �� ��� �����",
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
            message: "���� �� - �������� ����!",
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
            message: "��� ������������� �������� ����, ����� �� ������� �� �����",
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
            message: "��",
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
            message: "� ������� [drink]",
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
        login: "����",
        role: 7,
        sex: 1,
        image: 11,
        hide: true,
        bot: true,
        icon: 8,
        status: "",
        about: "����� ��� � ��� � ����� ���� �� ������� �� ����������. �� ��� ���-��?"
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
        login: "������",
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
        login: "��� � �����",
        role: 1,
        sex: 1,
        image: 6,
        hide: true,
        bot: true,
        icon: 4,
        status: "",
        about: "� ���� 100% �����"
    },
    testplayer6: {
        login: "Natikponch",
        role: 2,
        sex: 1,
        image: 7,
        hide: true,
        bot: true,
        icon: 2,
        status: "�����",
        about: "����, ����� ������ �����. ��� ������? �������� - ��� � �! �������� ����� � �������. ������� ����� ���"
    },
    testplayer7: {
        login: "������",
        role: 1,
        sex: 1,
        image: 9,
        hide: true,
        bot: true
    },
    testplayer8: {
        login: "��� �����",
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
        login: "������ �����",
        role: 1,
        sex: 2,
        image: 12,
        hide: true,
        bot: true
    },
    testplayer11: {
        login: "�������",
        role: 5,
        sex: 1,
        image: 16,
        hide: true,
        bot: true
    },
    testplayer12: {
        login: "������",
        role: 1,
        sex: 6,
        image: 14,
        hide: true,
        bot: true
    },
    testplayer13: {
        login: "��������",
        role: 1,
        sex: 20,
        image: 1,
        hide: true,
        bot: true
    },
    testplayer14: {
        login: "������������",
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
    modalWindow('�� ��������, ��� <b class="nickname" data-id="' + helper.helpGamePlayerIL(plnum).id + '">' + helper.helpGamePlayerIL(plnum).login + "</b><br/> ����� �������?", function() {
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
    gametitle.html("<span> " + gameStyle[0] + ' �� 15 �������</span> <span id="addedToGame">15</span> <span id="remainForGame">0</span> <span>C����� 2000</span>');
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
