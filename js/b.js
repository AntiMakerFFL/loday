var domain = "loday.ru"
  , room = 1
  , roomInHall = 1
  , u = {}
  , mapAreas = false
  , gamesInfoArray = {}
  , playersInfoArray = {}
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
  , win = $(".window")
  , tp = $("#tooltip")
  , ptp = $("#playerInfo")
  , gameptp = $("#playerGameInfo")
  , wW = $(".warningWindow")
  , mW = $("#modalWindow")
  , w = $("#infomessage")
  , oW = $("#optionsWindow")
  , actionButton = $("#playersButton")
  , inputField = $("#input")
  , privateCheck = $("#privat")
  , shop = $(".shop")
  , collectionWin = $(".collect")
  , outside = $("#outside")
  , onlineCounter = $("#online-counter")
  , lotteryDiv = $("#lottery").find("div")
  , lotteryWin = $(".lottery")
  , roulette = $("#roulette")
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
  , testMode = false
  , server2 = (typeof (server2) !== "undefined")
  , lastMsg = ""
  , closedgame = false
  , quizEnable = true
  , fireworkEnable = true
  , noconvert = false
  , colNum = 1
  , sortType = 1
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
  , gifts = {
    1: {
        p: 12,
        t: 2
    },
    2: {
        p: 10000,
        t: 1
    },
    3: {
        p: 10000,
        t: 1
    },
    4: {
        p: 10000,
        t: 1
    },
    5: {
        p: 10000,
        t: 1
    },
    6: {
        p: 10000,
        t: 1
    },
    7: {
        p: 10000,
        t: 1
    },
    8: {
        p: 10000,
        t: 1
    },
    9: {
        p: 11000,
        t: 1
    },
    10: {
        p: 5000,
        t: 1
    },
    11: {
        p: 8000,
        t: 1
    },
    12: {
        p: 9000,
        t: 1
    },
    13: {
        p: 25000,
        t: 1
    },
    14: {
        p: 11000,
        t: 1
    },
    15: {
        p: 7000,
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
        p: 10000,
        t: 1
    },
    19: {
        p: 13000,
        t: 1
    },
    20: {
        p: 10000,
        t: 1
    },
    21: {
        p: 10000,
        t: 1
    },
    22: {
        p: 10000,
        t: 1
    },
    23: {
        p: 12000,
        t: 1
    },
    24: {
        p: 15000,
        t: 1
    },
    25: {
        p: 17000,
        t: 1
    },
    26: {
        p: 10000,
        t: 1
    },
    27: {
        p: 14000,
        t: 1
    },
    28: {
        p: 11000,
        t: 1
    },
    29: {
        p: 12000,
        t: 1
    },
    30: {
        p: 11000,
        t: 1
    },
    31: {
        p: 15,
        t: 2
    },
    32: {
        p: 19000,
        t: 1
    },
    33: {
        p: 10000,
        t: 1
    },
    34: {
        p: 17000,
        t: 1
    },
    35: {
        p: 14000,
        t: 1
    },
    36: {
        p: 18000,
        t: 1
    },
    37: {
        p: 33000,
        t: 1
    },
    38: {
        p: 27000,
        t: 1
    },
    39: {
        p: 10000,
        t: 1
    },
    40: {
        p: 9999,
        t: 1
    },
    41: {
        p: 21000,
        t: 1
    },
    42: {
        p: 18000,
        t: 1
    },
    43: {
        p: 22000,
        t: 1
    },
    44: {
        p: 33000,
        t: 1
    },
    45: {
        p: 20,
        t: 2
    },
    46: {
        p: 41000,
        t: 1
    },
    47: {
        p: 3000,
        t: 1
    },
    48: {
        p: 44000,
        t: 1
    },
    49: {
        p: 14,
        t: 2
    },
    50: {
        p: 24000,
        t: 1
    },
    51: {
        p: 48000,
        t: 1
    },
    52: {
        p: 29000,
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
        p: 10000,
        t: 1
    },
    56: {
        p: 15000,
        t: 1
    },
    57: {
        p: 22,
        t: 2
    },
    58: {
        p: 66000,
        t: 1
    },
    59: {
        p: 3300,
        t: 1
    },
    60: {
        p: 46000,
        t: 1
    },
    61: {
        p: 38000,
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
        p: 17000,
        t: 1
    },
    66: {
        p: 10000,
        t: 1
    },
    67: {
        p: 55000,
        t: 1
    },
    68: {
        p: 60000,
        t: 1
    },
    69: {
        p: 19,
        t: 2
    },
    70: {
        p: 61000,
        t: 1
    },
    71: {
        p: 51000,
        t: 1
    },
    72: {
        p: 32000,
        t: 1
    },
    73: {
        p: 22000,
        t: 1
    },
    74: {
        p: 19000,
        t: 1
    },
    75: {
        p: 28000,
        t: 1
    },
    76: {
        p: 33000,
        t: 1
    },
    77: {
        p: 77000,
        t: 1
    },
    78: {
        p: 90000,
        t: 1
    },
    79: {
        p: 27000,
        t: 1
    },
    80: {
        p: 31000,
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
        p: 46000,
        t: 1
    },
    84: {
        p: 23000,
        t: 1
    },
    85: {
        p: 43000,
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
        p: 41000,
        t: 1
    },
    90: {
        p: 21000,
        t: 1
    },
    91: {
        p: 62000,
        t: 1
    },
    92: {
        p: 21000,
        t: 1
    },
    93: {
        p: 47000,
        t: 1
    },
    94: {
        p: 36000,
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
        p: 35000,
        t: 1
    },
    99: {
        p: 68000,
        t: 1
    },
    100: {
        p: 19,
        t: 2
    },
    101: {
        p: 5000,
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
        p: 2000,
        t: 1
    },
    138: {
        p: 7000,
        t: 1
    },
    139: {
        p: 5000,
        t: 1
    },
    140: {
        p: 8500,
        t: 1
    },
    141: {
        p: 3000,
        t: 1
    },
    142: {
        p: 9000,
        t: 1
    },
    143: {
        p: 20000,
        t: 1
    },
    144: {
        p: 11000,
        t: 1
    },
    145: {
        p: 31000,
        t: 1
    },
    146: {
        p: 13000,
        t: 1
    },
    147: {
        p: 13000,
        t: 1
    },
    148: {
        p: 13000,
        t: 1
    },
    149: {
        p: 13000,
        t: 1
    },
    150: {
        p: 13000,
        t: 1
    },
    151: {
        p: 13000,
        t: 1
    },
    152: {
        p: 13000,
        t: 1
    },
    153: {
        p: 8000,
        t: 1
    },
    154: {
        p: 17,
        t: 2
    },
    155: {
        p: 25000,
        t: 1
    },
    156: {
        p: 18000,
        t: 1
    },
    157: {
        p: 14000,
        t: 1
    },
    158: {
        p: 12000,
        t: 1
    },
    159: {
        p: 22000,
        t: 1
    },
    160: {
        p: 32000,
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
        p: 41000,
        t: 1
    },
    164: {
        p: 17000,
        t: 1
    },
    165: {
        p: 11000,
        t: 1
    },
    166: {
        p: 27000,
        t: 1
    },
    167: {
        p: 66000,
        t: 1
    },
    168: {
        p: 49000,
        t: 1
    },
    169: {
        p: 35000,
        t: 1
    },
    170: {
        p: 42000,
        t: 1
    },
    171: {
        p: 16000,
        t: 1
    },
    172: {
        p: 17000,
        t: 1
    },
    173: {
        p: 25000,
        t: 1
    },
    174: {
        p: 28000,
        t: 1
    },
    175: {
        p: 50000,
        t: 1
    },
    176: {
        p: 15,
        t: 2
    },
    177: {
        p: 15000,
        t: 1
    },
    178: {
        p: 12000,
        t: 1
    },
    179: {
        p: 25000,
        t: 1
    },
    180: {
        p: 9000,
        t: 1
    },
    181: {
        p: 17000,
        t: 1
    },
    182: {
        p: 22000,
        t: 1
    },
    183: {
        p: 14000,
        t: 1
    },
    184: {
        p: 27000,
        t: 1
    },
    185: {
        p: 5,
        t: 2
    },
    186: {
        p: 6000,
        t: 1
    },
    187: {
        p: 8000,
        t: 1
    },
    188: {
        p: 8,
        t: 2
    },
    189: {
        p: 11000,
        t: 1
    },
    190: {
        p: 12000,
        t: 1
    },
    191: {
        p: 12,
        t: 2
    },
    192: {
        p: 15000,
        t: 1
    },
    193: {
        p: 15,
        t: 2
    },
    194: {
        p: 16000,
        t: 1
    },
    195: {
        p: 18000,
        t: 1
    },
    196: {
        p: 19000,
        t: 1
    },
    197: {
        p: 20000,
        t: 1
    },
    198: {
        p: 22000,
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
        p: 82000,
        t: 1
    },
    203: {
        p: 30,
        t: 2
    },
    204: {
        p: 32000,
        t: 1
    },
    205: {
        p: 33000,
        t: 1
    },
    206: {
        p: 35000,
        t: 1
    },
    207: {
        p: 45000,
        t: 1
    },
    208: {
        p: 45000,
        t: 1
    },
    209: {
        p: 45,
        t: 2
    },
    210: {
        p: 46000,
        t: 1
    },
    211: {
        p: 56000,
        t: 1
    },
    212: {
        p: 60000,
        t: 1
    },
    213: {
        p: 100000,
        t: 1
    },
    214: {
        p: 21000,
        t: 1
    },
    215: {
        p: 15000,
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
        p: 22000,
        t: 1
    },
    220: {
        p: 25,
        t: 2
    },
    221: {
        p: 33000,
        t: 1
    },
    222: {
        p: 38000,
        t: 1
    },
    223: {
        p: 40,
        t: 2
    },
    224: {
        p: 45000,
        t: 1
    },
    225: {
        p: 60000,
        t: 1
    },
    226: {
        p: 1000,
        t: 1
    },
    227: {
        p: 3000,
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
        p: 8000,
        t: 1
    },
    231: {
        p: 8000,
        t: 1
    },
    232: {
        p: 8000,
        t: 1
    },
    233: {
        p: 12000,
        t: 1
    },
    234: {
        p: 15000,
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
        p: 20000,
        t: 1
    },
    239: {
        p: 22000,
        t: 1
    },
    240: {
        p: 25000,
        t: 1
    },
    241: {
        p: 25,
        t: 2
    },
    242: {
        p: 35000,
        t: 1
    },
    243: {
        p: 35000,
        t: 1
    },
    244: {
        p: 35000,
        t: 1
    },
    245: {
        p: 42000,
        t: 1
    },
    246: {
        p: 50000,
        t: 1
    },
    247: {
        p: 75000,
        t: 1
    },
    248: {
        p: 100000,
        t: 1
    },
    249: {
        p: 1000,
        t: 1
    },
    250: {
        p: 5000,
        t: 1
    },
    251: {
        p: 7777,
        t: 1
    },
    252: {
        p: 8000,
        t: 1
    },
    253: {
        p: 35000,
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
        p: 12000,
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
        p: 50000,
        t: 1
    },
    260: {
        p: 10,
        t: 2
    },
    261: {
        p: 18000,
        t: 1
    },
    262: {
        p: 7000,
        t: 1
    },
    263: {
        p: 10,
        t: 2
    },
    264: {
        p: 1000,
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
        p: 35000,
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
        p: 8000,
        t: 1
    },
    274: {
        p: 10000,
        t: 1
    },
    275: {
        p: 12000,
        t: 1
    },
    276: {
        p: 14000,
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
        p: 22000,
        t: 1
    },
    283: {
        p: 28000,
        t: 1
    },
    284: {
        p: 35000,
        t: 1
    },
    285: {
        p: 63000,
        t: 1
    },
    286: {
        p: 69000,
        t: 1
    },
    287: {
        p: 77000,
        t: 1
    },
    288: {
        p: 80000,
        t: 1
    },
    289: {
        p: 80000,
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
        p: 14000,
        t: 1
    },
    293: {
        p: 11000,
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
        p: 5000,
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
        p: 10000,
        t: 1
    },
    300: {
        p: 11000,
        t: 1
    },
    301: {
        p: 12000,
        t: 1
    },
    302: {
        p: 12000,
        t: 1
    },
    303: {
        p: 15000,
        t: 1
    },
    304: {
        p: 16000,
        t: 1
    },
    305: {
        p: 17000,
        t: 1
    },
    306: {
        p: 23000,
        t: 1
    },
    307: {
        p: 23000,
        t: 1
    },
    308: {
        p: 23000,
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
        p: 45000,
        t: 1
    },
    312: {
        p: 45,
        t: 2
    },
    313: {
        p: 47000,
        t: 1
    },
    314: {
        p: 48000,
        t: 1
    },
    315: {
        p: 50000,
        t: 1
    },
    316: {
        p: 59000,
        t: 1
    },
    317: {
        p: 60000,
        t: 1
    },
    318: {
        p: 80000,
        t: 1
    },
    319: {
        p: 100000,
        t: 1
    },
    320: {
        p: 150,
        t: 2
    }
};
var logs = [];
window.onerror = function(error, url, line) {
    logs.push("ERR:" + error + " URL:" + url + " L:" + line);
}
;
if (typeof mobile == "undefined") {
    mobile = false;
}
var islocalStorage = function() {
    var test = "test";
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}()
  , lStorage = {
    setItem: function(key, val) {
        if (islocalStorage) {
            localStorage.setItem(key, val);
            this[key] = val;
        }
    },
    getItem: function(key) {
        return islocalStorage ? localStorage.getItem(key) : false;
    },
    removeItem: function(key) {
        if (islocalStorage) {
            localStorage.removeItem(key);
        }
    }
};
var reds = (islocalStorage && localStorage.reds) ? localStorage.reds.split(",") : [];
function serverPort(fullUrl) {
    var url = fullUrl ? document.location.protocol + "//loday.ru:" : "";
    url += (document.location.protocol == "https:") ? "8081" : "8080";
    return url;
}
var smileBlock = $("#smiles")
  , allSmiles = ""
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
};
function createSmilePanel() {
    smileBlock.find("div").html("");
    allSmiles = "";
    for (var role = 1; role <= 9; role++) {
        allSmiles += '<span class="role' + role + '"></span>';
    }
    allSmiles += "<hr/>";
    smilesArr.forEach(function(el) {
        allSmiles += '<img src="/images/' + (isMaffia ? "maffia/" : "") + "smiles/" + el + '.gif" alt="' + el + '"/>';
    });
    smileBlock.find("div").html(allSmiles);
    smileBlock.find("span").click(function() {
        var rt = $(this).attr("class").substring(4)
          , sm = (isMaffia) ? mafroleSmiles[rt] : roleSmiles[rt];
        insertToInput(sm);
    });
    smileBlock.find("img").click(function() {
        insertToInput($(this).attr("alt"));
    });
}
function insertToInput(add) {
    var text = inputField.val();
    inputField.val(text + " [" + add + "]");
    $("#showSmiles").prop("checked", false);
    inputField.focus();
}
function randomInt(max) {
    return Math.floor(1 + Math.random() * max);
}
function roundTwo(num) {
    return Math.round(num * 100) / 100;
}
Object.size = function(obj) {
    var size = 0;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            size++;
        }
    }
    return size;
}
;
Object.update = function(obj, addObj) {
    for (var key in addObj) {
        if (addObj.hasOwnProperty(key)) {
            obj[key] = addObj[key];
        }
    }
}
;
Array.prototype.randomValue = function() {
    return this[Math.floor(Math.random() * this.length)];
}
;
Array.prototype.shuffle = function() {
    for (var i = this.length - 1; i > 0; i--) {
        var num = Math.floor(Math.random() * (i + 1))
          , d = this[num];
        this[num] = this[i];
        this[i] = d;
    }
    return this;
}
;
function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function someThing(count, first, some, many) {
    var out, tmp = count % 100;
    if (tmp > 10 && tmp < 20) {
        out = count + " " + many;
    } else {
        switch (count % 10) {
        case 1:
            out = count + " " + first;
            break;
        case 2:
        case 3:
        case 4:
            out = count + " " + some;
            break;
        default:
            out = count + " " + many;
            break;
        }
    }
    return out;
}
var socketTry = 0
  , socketStack = []
  , checkSocketStack = function() {
    var obj = socketStack[0];
    if (obj) {
        socketTry++;
        try {
            if (ws.readyState == 1) {
                ws.send(JSON.stringify(obj));
            }
        } catch (e) {
            showNewMessage({
                message: "Ошибка: сбой инициализации сокета. Не удалось соединиться с сервером.",
                color: "#ff0000"
            });
        }
        if (socketTry > 2) {
            showNewMessage({
                message: "Возможно, потеряна связь с сервером! Убедитесь в наличии интернет-соединения.",
                color: "#990000"
            });
        }
        setTimeout(checkSocketStack, socketTry * 1000);
    }
};
function sendToSocket(obj) {
    obj.timestamp = datenow();
    socketStack.push(obj);
    if (socketStack.length == 1) {
        checkSocketStack();
    }
}
function gebi(a) {
    return document.getElementById(a);
}
function changeNumberHtml(id, val, doset) {
    var obj = $("#" + id)
      , value = obj.html()
      , newValue = (doset) ? val : parseInt(value) + val;
    obj.html(newValue.toString());
}
var datediff = 0
  , pluhTime = 0;
function datenow() {
    return Date.now() + datediff;
}
function countdown(secs) {
    var out = ""
      , h = Math.floor(secs / 3600)
      , min = secs % 3600
      , m = Math.floor(min / 60)
      , s = min % 60;
    if (h > 0) {
        out += h + ":";
    }
    out += (m > 9 ? "" : "0") + m + ":" + (s > 9 ? "" : "0") + s;
    return out;
}
function showDate(date, time) {
    date = new Date(parseInt(date));
    var out, h, m, dd = date.getDate(), mm = date.getMonth() + 1, yyyy = date.getFullYear();
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    out = dd + "." + mm + "." + yyyy;
    if (time) {
        h = date.getHours();
        if (h < 10) {
            h = "0" + h;
        }
        m = date.getMinutes();
        if (m < 10) {
            m = "0" + m;
        }
        out += " " + h + ":" + m;
    }
    return out;
}
function rusDate(str, text, withpoints) {
    var monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"], weekdays = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"], d, dateArr;
    if (text) {
        if (withpoints === true) {
            dateArr = str.toString().split(".");
            d = new Date(dateArr[2],parseInt(dateArr[1]) - 1,dateArr[0]);
        } else {
            dateArr = str.toString().split("-");
            d = new Date(dateArr[0],parseInt(dateArr[1]) - 1,dateArr[2]);
        }
    } else {
        d = new Date(parseInt(str));
    }
    if (d == "Invalid Date") {
        return "Неверная дата";
    }
    return d.getDate() + " " + monthNames[d.getMonth()] + (withpoints == "short" ? "" : " " + d.getFullYear() + " (" + weekdays[d.getDay()] + ")");
}
function isToday(str) {
    var d = new Date(datenow() + 10800000);
    return (str == (d.getUTCDate() + "." + (d.getUTCMonth() + 1) + "." + d.getUTCFullYear()).toString());
}
function curDate() {
    var date = new Date()
      , d = date.getDate().toString()
      , m = date.getMonth()
      , y = date.getFullYear().toString();
    if (m < 10) {
        m = "0" + m;
    }
    return d + m + y;
}
function roleReplace(message) {
    if (message) {
        message = message.replace(/(^|\s)(рев|ревнивый студент|ман|маньяк)(\s|$)/gi, ' <span class="jeal"></span> ');
        message = message.replace(/(^|\s)(студ|студент|гр|гражданин)(\s|$)/gi, ' <span class="stud"></span> ');
        message = message.replace(/(^|\s)(лун|лунатик|док|доктор)(\s|$)/gi, ' <span class="sleep"></span> ');
        message = message.replace(/(^|\s)(деж|дежурный|коп|комиссар)(\s|$)/gi, ' <span class="duty"></span> ');
        message = message.replace(/(^|\s)(пом|помощник дежурного|серж|сержант)(\s|$)/gi, ' <span class="assis"></span> ');
        message = message.replace(/(^|\s)(пох|похититель|маф|мафиози)(\s|$)/gi, ' <span class="robb"></span> ');
        message = message.replace(/(^|\s)(глава похитителей|босс мафии|босс)(\s|$)/gi, ' <span class="hrobb"></span> ');
        message = message.replace(/(^|\s)котик(\s|$)/gi, ' <span class="cat catm"></span> ');
        message = message.replace(/(^|\s)кот(\s|$)/gi, ' <span class="cat"></span> ');
        message = message.replace(/(^|\s)(вахтер|адвокат)(\s|$)/gi, ' <span class="adv"></span> ');
        message = message.replace(/\[(stud|gr)\]/gi, ' <span class="rolesmile role1"></span> ');
        message = message.replace(/\[(poh|maf)\]/gi, ' <span class="rolesmile role2"></span> ');
        message = message.replace(/\[(glava|boss)\]/gi, ' <span class="rolesmile role3"></span> ');
        message = message.replace(/\[(dej|kom)\]/gi, ' <span class="rolesmile role4"></span> ');
        message = message.replace(/\[(pom|ped)\]/gi, ' <span class="rolesmile role5"></span> ');
        message = message.replace(/\[(rev|man)\]/gi, ' <span class="rolesmile role6"></span> ');
        message = message.replace(/\[(lun|doc)\]/gi, ' <span class="rolesmile role7"></span> ');
        message = message.replace(/\[cat\]/gi, ' <span class="rolesmile role8"></span> ');
        message = message.replace(/\[adv\]/gi, ' <span class="rolesmile role9"></span> ');
        for (var i = 0, len = smilesArr.length; i < len; i++) {
            message = message.split("[" + smilesArr[i] + "]").join(' <img src="/images/' + (isMaffia ? "maffia/" : "") + "smiles/" + smilesArr[i] + '.gif"/> ');
        }
        for (var sm in textSmiles) {
            if (textSmiles.hasOwnProperty(sm)) {
                message = message.split(textSmiles[sm]).join(' <img src="/images/' + (isMaffia ? "maffia/" : "") + "smiles/" + sm + '.gif"/> ');
            }
        }
    }
    return message;
}
function matFilter(message) {
    var mat = " [ой] ";
    message = message.replace(/(^|\s)(хуй|хуя|бля)/gi, mat);
    message = message.replace(/пизд|нахуй|похуй|уеб|хуй|хуе|хyй|хyе|xуй|xуе|аеб|(^|\s)еба|е6|((^|\s)манда(\s|$))|пидор/gi, mat);
    return message;
}
function searchImg(message) {
    message = message.replace(/(^|\s)http(\S)*(.jpg|.jpeg|.png|.gif)(\s|$)/gi, ' <span class="imageLoader" data-title="Посмотреть изображение" onclick="showWall(\'$&\',true,true)"></span> ');
    message = message.replace(/\{([a-z]{2})\}/gi, ' <span class="flag"><span style="background-image:url(/images/flags/$1.png)"></span></span> ');
    return message;
}
function specials_in(event) {
    var message = (event.from && !event.nofilter) ? escapeHtml(event.message) : event.message;
    if (message) {
        if (message.indexOf("*time*") > -1 || message.indexOf("[date]") > -1) {
            var moment = event.time ? new Date(event.time) : new Date
              , s = moment.getSeconds()
              , i = moment.getMinutes()
              , h = moment.getHours()
              , d = moment.getDate()
              , m = moment.getMonth() + 1
              , y = moment.getFullYear()
              , tdreplace = {
                time: ((h < 10) ? "0" + h : h) + ((i < 10) ? ":0" + i : ":" + i) + ((s < 10) ? ":0" + s : ":" + s),
                date: ((d < 10) ? "0" + d : d) + ((m < 10) ? ".0" + m + "." + y : ":" + m + "." + y)
            };
            message = message.replace(/\*time\*/gim, tdreplace.time);
            message = message.replace(/\[date\]/gim, tdreplace.date);
        }
        message = message.replace(/(^|\s)FFL($|\s)/gim, "Friends For Love");
        message = roleReplace(message);
        message = matFilter(message);
        message = searchImg(message);
    }
    return message;
}
function specials_out(message) {
    return message.replace(/\s*\/me\s/, " " + u.login + " ");
}
function escapeHtml(text) {
    var map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    };
    return text.replace(/[&<>"']/g, function(m) {
        return map[m];
    });
}
function warningWindow(text, callback, buttext, win, specialclass) {
    var newWW = wW.clone();
    newWW.appendTo(container);
    newWW.find("span").html(text);
    if (buttext == "Выйти из игры") {
        $("<div/>").addClass("button").html("Посмотреть игру").click(newWW, function(e) {
            e.data.remove();
        }).appendTo(newWW.find("p>span"));
    }
    newWW.show();
    var wb = newWW.find("button");
    if (buttext) {
        wb.css({
            width: "auto",
            padding: "0 10px"
        }).html(buttext);
    } else {
        wb.html("ОК");
    }
    wb.one("click", function() {
        $(this).parents(".warningWindow").fadeOut(400);
        if (callback) {
            callback();
        }
        setTimeout(function(newWW) {
            newWW.remove();
        }, 1000, $(this).parents(".warningWindow"));
    });
    if (win != undefined && game.style && game.style.style == 4 && container.hasClass("current")) {
        var whowin = (win) ? (u.sex == 1 ? "women" : "men") : (u.sex == 1 ? "men" : "women");
        newWW.addClass(whowin + "win");
    } else {
        if (win && $(window).height() > 430) {
            newWW.addClass("win");
        }
    }
    if (specialclass) {
        newWW.addClass(specialclass);
        setTimeout(function(newWW) {
            newWW.addClass("showWindow");
        }, 500, newWW);
    } else {
        newWW.addClass("showWindow");
    }
}
mW.hide = oW.hide = function() {
    $(this).removeClass("showWindow");
}
;
function modalWindow(text, callback, callback2) {
    mW.find(".modal").removeAttr("style");
    mW.find("span").html(text);
    mW.find("button").eq(0).unbind("click").one("click", function() {
        mW.hide();
        if (callback) {
            callback();
        }
    });
    mW.find("button").eq(1).unbind("click").one("click", function() {
        mW.hide();
        if (callback2) {
            callback2();
        }
    });
    mW.addClass("showWindow");
}
function showCash(text) {
    var cW = $("#cash")
      , p = cW.find("p");
    cW.removeClass().addClass("cash" + Math.floor(Math.random() * 9));
    p.html(text);
    p.unbind("click");
    cW.addClass("showCash");
    p.click(function() {
        cW.removeClass("showCash");
    });
}
function isset(par) {
    return !(typeof (par) === "undefined" || typeof (par) === "Null");
}
function updateInterface(udata) {
    if (udata) {
        if (udata.inc) {
            udata.inc.forEach(function(el) {
                if (el.collection) {
                    if (!u.collections) {
                        u.collections = {};
                    }
                    if (!u.collections[el.collection]) {
                        u.collections[el.collection] = 0;
                    }
                    if (!u.collections[el.collection][el.item]) {
                        u.collections[el.collection][el.item] = 0;
                    }
                    u.collections[el.collection][el.item] += el.value;
                } else {
                    if (!u.items) {
                        u.items = {};
                    }
                    if (!u.items[el.item]) {
                        u.items[el.item] = 0;
                    }
                    u.items[el.item] += el.value;
                }
            });
            return;
        }
        Object.update(u, udata);
    } else {
        udata = u;
    }
    if (udata.login) {
        $("#nick").html(udata.login);
    }
    if (udata.image && udata.sex) {
        if (udata.image.length > 2) {
            $("#image").removeClass().css({
                background: "url(/files/" + u._id + udata.image + ") center center no-repeat",
                "background-size": "contain"
            });
        } else {
            $("#image").removeClass().removeAttr("style").addClass(((udata.sex == 1) ? "iw" : "im") + udata.image);
        }
    }
    if (isset(udata.money)) {
        animateNumber("gamemoney", udata.money, true);
        shop.find("p").find(".gamemoney").html(udata.money);
    }
    if (isset(udata.money2)) {
        animateNumber("money", udata.money2, true);
        shop.find("p").find(".money").html(udata.money2);
    }
    for (var i = 1; i < 7; i++) {
        if (!udata.hasOwnProperty("item" + i)) {
            continue;
        }
        var v, cc = udata["item" + i] || 0;
        if (i % 3 == 0) {
            var diff = cc - Date.now()
              , delit = (i == 3) ? 3600000 : 86400000;
            v = (!diff || diff < 1) ? 0 : Math.ceil(diff / delit);
        } else {
            v = cc + "/" + ((cc >= items["s" + i]) ? "0" : (items["s" + i] - cc).toString());
        }
        $("#shop" + i).find("div:nth-of-type(2)").html(v);
        if (i == 6 && diff > 0) {
            $("#shop6").find("div:nth-of-type(2)").attr("data-title", someThing(Math.ceil(diff / 3600000), "час", "часа", "часов"));
        }
    }
    if (win.find(".inventory").is(":visible")) {
        showInventory();
    }
    if (helper.changeRate) {
        helper.changeRate();
    }
}
function showPlayersList(players, roomid) {
    playersInfoArray = {};
    playersList.html("");
    battleDiv.find(".playerlist").html("");
    if (roomid.length < 3) {
        container.removeClass().addClass("color" + parseInt(roomid));
        roomInHall = roomid;
        actionButton.removeClass("my");
    } else {
        container.removeClass().addClass("ingame");
    }
    for (var index in players) {
        if (players.hasOwnProperty(index)) {
            editPlayerList(players[index], 0, true);
        }
    }
}
function gameTypeInfo(info) {
    var addIcon = ""
      , styleObj = info.hasOwnProperty("style") ? (info.style.hasOwnProperty("style") ? info.style.style : info.style) : 0;
    if (info.selecting) {
        addIcon += '<b class="selrolgame"></b>';
    }
    if (info.botwall) {
        addIcon += '<b class="botwall"></b>';
    }
    if (info.shortnight) {
        addIcon += '<b class="shortnight"></b>';
    }
    if (info.man) {
        addIcon += '<b class="manmode"></b>';
    }
    return addIcon + " " + gameStyle[styleObj] + " на " + info.count + " игроков";
}
function showGameInfo(info) {
    closedgame = (info.style == 2);
    gametitle.html("<span>" + gameTypeInfo(info) + '</span> <span id="addedToGame">' + info.add + '</span> <span id="remainForGame">' + (info.count - info.add) + "</span> <span>Cтавка " + info.sum + "</span>");
    $("article").find(".blocktitle").find(".gamemakerinfo").html(info.creator + ": &laquo;" + info.caption + "&raquo;").attr("data-title", info.caption);
    header.find(".gamestyle").find("span").each(function(index) {
        $(this).removeClass();
        if (info["style" + (index + 1).toString()]) {
            $(this).addClass("enabledoption");
        }
    });
    var sb = gebi("playersButton");
    sb.className = "";
    if (closedgame && info.creator == u.login) {
        sb.className = "my";
        sb.innerHTML = "Принять";
    }
    game.sum = info.sum;
    gamemoney.html(over1000(u.money - info.sum));
    var firstText = roleText.all.zayavka;
    if (info.style == 3) {
        firstText = "Это необычная игра, а битва против ботов, где Вам вместе с другими игроками предстоит противостоять команде ботов!<br/> Дождитесь союзников, соперники прибудут позже.";
    } else {
        if (info.married) {
            firstText = "Добро пожаловать на свадебную церемонию!<br/> Подождите, когда все гости соберутся...";
        }
    }
    showNewDiv(firstText);
    if (info.specialRoles) {
        var allRoles = "Создатель партии выбрал следующие роли: ";
        info.specialRoles.forEach(function(el) {
            allRoles += '<span class="rolesmile role' + el + '"></span>';
        });
        showNewDiv("<div>" + allRoles + "</div");
    }
    if (info.params) {
        var gParams = [];
        if (info.params.noitem4) {
            gParams.push('<span class="for-ffl">без печенья</span><span class="for-maffia">без жуков</span>');
        }
        if (info.params.nobonus) {
            gParams.push("без игровых бонусов");
        }
        if (info.params.hasOwnProperty("item2")) {
            gParams.push('Лимит <span class="for-ffl">замков</span><span class="for-maffia">маскировок</span> - ' + info.params.item2);
        }
        showNewDiv("<div>В этой партии создателем установлены следующие ограничения:<ul><li>" + gParams.join("</li><li>") + "</li></ul></div>");
    }
    showNewDiv('<div class="blue">Скучно играть одному ☹? ' + (isAppVK ? "Пригласи друзей и знакомых" : 'Скинь друзьям ссылку<br/> <input type="text" readonly="readonly" value="' + getGameUrl() + '" style="width:100%;background:none;color:#f00"/><br/>') + " и играй вместе с ними ☺!</div>");
    helper.hint("wait-players");
    if (closedgame) {
        container.addClass("closedgame");
    } else {
        container.removeClass("closedgame");
    }
    if (info.style1) {
        container.addClass("noprivate");
        privateCheck.prop("checked", false);
    } else {
        container.removeClass("noprivate");
    }
    if (info.married) {
        container.addClass("wedding");
        game.married = info.married;
    } else {
        container.removeClass("wedding");
        game.married = false;
    }
}
function showGamesList(gamesObj) {
    gamesInfoArray = {};
    gamesList.html("");
    for (var index in gamesObj) {
        if (gamesObj.hasOwnProperty(index)) {
            editGameList(gamesObj[index]);
        }
    }
}
function showNewMessage(event) {
    var defaultColor = "#000022"
      , name = document.createElement("div")
      , body = document.createElement("div")
      , root = document.createElement("div")
      , udata = event.from;
    root.className = "message";
    name.className = "writer";
    if (!udata && event.message == "Игра начинается") {
        udata = "[server]";
        $("h3.leave").css({
            visibility: "hidden"
        });
        setTimeout(function() {
            $("h3.leave").css({
                visibility: ""
            });
        }, 5000);
    }
    if (udata) {
        if ((udata.id && reds.indexOf(udata.id) > -1) || (server2 && !$("div").is("#" + udata.id))) {
            return;
        }
        if (!udata.image && playersInfoArray[udata.id]) {
            udata.sex = playersInfoArray[udata.id].sex;
            udata.image = playersInfoArray[udata.id].image;
        }
        if (udata.image) {
            if (udata.image.length > 2) {
                root.className += " userimage";
                var uIm = document.createElement("div");
                uIm.className = "selfimg";
                uIm.style.backgroundImage = "url(/files/" + udata.id + udata.image + ")";
                root.appendChild(uIm);
            } else {
                var nclass = (udata.sex == 1) ? "w" : "m";
                nclass = (udata.image) ? nclass + udata.image : "";
                root.className += " " + nclass;
            }
        }
        if (udata.creator && playersInfoArray[udata.creator]) {
            event.to = udata.creator;
            event.toName = playersInfoArray[udata.creator].login;
        }
    } else {
        root.className += " noimage";
        if (event.color) {
            root.style = "color:" + event.color;
        }
    }
    if (event.msgType === "private") {
        root.className += " private";
    }
    var colorMe = (u.color && u.color != defaultColor) ? ' style="color:' + u.color + ' !important"' : ' class="me"';
    if (!event.target) {
        if (event.color && event.color == "#000") {
            event.color = defaultColor;
        }
        var colorClass = (event.color && event.color !== defaultColor) ? ' style="color:' + event.color + '"' : "";
        var caption = (udata && udata.id && udata.login) ? '<b data-id="' + udata.id + '"' + colorClass + ((udata.id == u._id) ? colorMe : "") + ">" + udata.login + "</b>" + ((event.to) ? "->" : ": ") : "";
        if (event.to && event.toName && event.toName.length > 0 && !game.intuition) {
            caption += ' <b data-id="' + event.to + '"';
            if (event.to == u._id) {
                if (!container.hasClass("ingame") && pluhTime < datenow() - 10000) {
                    switch (event.message) {
                    case "плюх":
                        showWall("//loday.ru/images/snowball/shot.gif", true);
                        pluhTime = datenow();
                        break;
                    case "целую":
                        showWall("other/bearlove.gif");
                        pluhTime = datenow();
                        break;
                    case "мяу":
                        showWall("other/cats.gif");
                        pluhTime = datenow();
                        break;
                    case "ауау":
                        showWall("other/auau.gif");
                        pluhTime = datenow();
                        break;
                    case ":-*":
                    case "чмок":
                    case "люблю":
                        var randLove = randomInt(12);
                        if (randLove > 10) {
                            showWall("/images/holidays/love/" + randLove + ".gif", true);
                        } else {
                            showPattern("/images/holidays/love/" + randLove + ".gif");
                        }
                        pluhTime = datenow();
                        break;
                    }
                }
                root.className += " sendme";
                caption += colorMe;
                sound("notify");
            }
            caption += ">" + event.toName + "</b>: ";
        }
        name.innerHTML = caption;
        if (udata && udata == "[server]") {
            body.style.color = "#f00";
            body.style.fontFamily = "Ubuntu Mono, Consolas, Monaco, monospace";
        }
    }
    if (event.msgStyle) {
        body.className = event.msgStyle;
    }
    body.innerHTML = specials_in(event);
    root.appendChild(name);
    root.appendChild(body);
    messagesList.append(root);
    if ((udata && udata.id && udata.id == u._id) || (event.to && event.to == u._id)) {
        mymessagesList.append($(root).clone());
    }
    doScroll();
}
function showNewDiv(text) {
    messagesList.append(text);
    doScroll();
}
var notextMsgCount = 0;
function sendMessage() {
    var msgStr = inputField.val().trim().substring(0, 200)
      , strForSwitch = msgStr.toLowerCase().replace(/[.?!]/g, "").trim()
      , nosmileStr = msgStr.replace(/\[[A-z]+\]/g, "").trim()
      , needsend = true;
    if (msgStr == "" || (container.hasClass("current") && (game.finish || game.period == 4))) {
        return;
    }
    if (msgStr == "." && u._id != "554f490f8771f1d015807b59" && u.login != "Kinder" && !u.vip) {
        showNewMessage({
            message: 'Не "точкай" :)',
            color: "#ff0000",
            from: "[server]"
        });
        return;
    }
    notextMsgCount = (nosmileStr == "") ? notextMsgCount + 1 : 0;
    if (notextMsgCount > 3) {
        if (!sounds.joke) {
            sounds.joke = createAudio("/media/joke." + soundExt);
        }
        notextMsgCount = 0;
        sound("joke");
    }
    var adresat = $("#adresat-id").val();
    switch (strForSwitch) {
    case "хочу снега":
        b.addClass("snow");
        needsend = false;
        break;
    case "не надо снега":
        b.removeClass("snow");
        needsend = false;
        break;
    case "ёлка+":
        if (halltree) {
            halltree.show();
            needsend = false;
        }
        break;
    case "ёлка-":
        if (halltree) {
            halltree.hide();
            needsend = false;
        }
        break;
    case "очистить чат":
        $(".messages:visible").html("");
        needsend = false;
        break;
    case "давай дружить":
        if (adresat.length > 0) {
            friendQuery("friend-question", adresat);
        }
        break;
    case "я хочу":
        showWall("other/fallstar.gif");
        break;
    case "конверт-":
        noconvert = true;
        showNewDiv('<div class="browm">Анимация конвертов отключена</div>');
        needsend = false;
        break;
    case "конверт+":
        noconvert = false;
        showNewDiv('<div class="browm">Анимация конвертов включена</div>');
        needsend = false;
        break;
    }
    if (!container.hasClass("ingame")) {
        switch (strForSwitch) {
        case "хочу стенку":
            setStenka();
            needsend = false;
            break;
        case "хочу чп":
            setCHP();
            needsend = false;
            break;
        case "help":
            helper.start();
            needsend = false;
            break;
        case "викторина-":
            quizEnable = false;
            showNewDiv('<div class="browm">Викторина отключена</div>');
            needsend = false;
            break;
        case "викторина+":
            quizEnable = true;
            showNewDiv('<div class="browm">Викторина включена</div>');
            needsend = false;
            break;
        case "салют-":
            fireworkEnable = false;
            showNewDiv('<div class="browm">Вы решили не смотреть праздничные фейерверки</div>');
            needsend = false;
            break;
        case "салют+":
            fireworkEnable = true;
            showNewDiv('<div class="browm">Теперь Вы тоже не пропустите праздничные фейерверки</div>');
            needsend = false;
            break;
        case "киндер-сюрприз":
            maffiaNEW();
            if (!isAppVK) {
                showNewDiv('<div class="important">Если Вам не нравятся шоколадные яйца, можно воспользоваться прямой ссылкой <a href="//loday.ru/main-maffia.html">loday.ru/main-maffia.html</a></div>');
            }
            break;
        }
    }
    if (needsend) {
        var isPrivate = privateCheck.prop("checked");
        if (!isPrivate && adresat.length > 0 && !($("div").is("#" + adresat))) {
            return;
        }
        var adresatName = (adresat.length > 0) ? $("#adresat").val() : "";
        if (isPrivate && adresatName == $("#nick").html()) {
            return;
        }
        var msgType = (adresat.length > 0) ? ((isPrivate) ? "private" : "direct") : "public";
        lastMsg = msgStr;
        if (room == "testgame") {
            if (game.period && !u.vip && !isPrivate && (game.period == 1 || game.period == 4)) {
                showMessage("Мирные граждане могут пользоваться общим чатом только днём<br/> (или при наличии VIP-статуса)");
            } else {
                showNewMessage({
                    message: specials_out(msgStr),
                    from: {
                        id: u._id,
                        login: u.login,
                        image: u.image,
                        sex: u.sex
                    },
                    msgType: msgType,
                    to: adresat,
                    toName: adresatName
                });
            }
        } else {
            if (isPrivate && adresat && playersInfoArray[adresat] && playersInfoArray[adresat].bot) {
                showNewMessage({
                    message: specials_out(msgStr),
                    from: {
                        id: u._id,
                        login: u.login,
                        image: u.image,
                        sex: u.sex
                    },
                    msgType: msgType,
                    to: adresat,
                    toName: adresatName
                });
                showNewMessage({
                    message: specials_out("Привет, " + u.login + "! Я - бот, но мне все равно приятно твое внимание :)"),
                    from: playersInfoArray[adresat],
                    msgType: msgType,
                    to: u._id,
                    toName: u.login
                });
            } else {
                sendToSocket({
                    type: "message",
                    msgType: msgType,
                    to: adresat,
                    toName: adresatName,
                    message: specials_out(msgStr)
                });
            }
        }
    }
    inputField.val("");
}
var userGoEvent = function(user, leave) {
    if (container.hasClass("wedding")) {
        var userText = (user.sex == 1) ? "a гостья" : " гость";
        if (game.married && game.married.indexOf(user._id) > -1) {
            userText = (user.sex == 1) ? 'a <span class="lastwords">невеста</span>' : ' <span class="lastwords">жених</span>';
        }
        if (leave) {
            game.writeText('<div class="votemsg">Зал для свадебной церемонии покинул' + userText + ' <b data-id="' + user._id + '">' + user.login + "</b></div>", user);
        } else {
            game.writeText('<div class="votemsg">На свадьбу прибыл' + userText + ' <b data-id="' + user._id + '">' + user.login + "</b></div>", user);
        }
    } else {
        game.writeText('<div class="votemsg">' + ((user.sex == 1) ? (leave ? "Отсоединилась" : "Присоединилась") : (leave ? "Отсоединился" : "Присоединился")) + ' <b data-id="' + user._id + '">' + user.login + "</b> " + (user.sex == 1 ? " ♀" : " ♂") + "</div>", user);
    }
};
function editPlayerList(user, leave, multi) {
    if (!user._id) {
        return;
    }
    playersList.find("#" + user._id).remove();
    if (!playersInfoArray[user._id]) {
        playersInfoArray[user._id] = {
            login: "Кто-то",
            sex: 2
        };
    }
    if (leave) {
        if (room.length > 2) {
            if (container.hasClass("current")) {
                if (playersInfoArray[user._id] && user.role) {
                    game.writeText('<div class="important"><b class="nickname" data-id="' + user._id + '">' + playersInfoArray[user._id].login + "</b> - " + roles(user.role).name + " - " + ((playersInfoArray[user._id].sex == 1) ? roleText.all.leave1 : roleText.all.leave2) + "</div>", {
                        id: user._id
                    });
                    playersInfoArray[user._id].killed = true;
                }
            } else {
                userGoEvent(playersInfoArray[user._id], leave);
                if (!closedgame || playersInfoArray[user._id].marked) {
                    changeNumberHtml("addedToGame", -1);
                    changeNumberHtml("remainForGame", 1);
                }
                delete playersInfoArray[user._id];
            }
        }
    } else {
        playersInfoArray[user._id] = user;
        var newPl = $('<div id="' + user._id + '"><b></b>' + user.login + "</div>");
        newPl.attr("data-nick", user.login);
        newPl.appendTo(playersList);
        newPl.mouseenter(function() {
            showPlayerInfo(true, $(this).attr("id"));
            return false;
        }).mouseleave(function() {
            showPlayerInfo(false);
            return false;
        });
        if (u.friends && u.friends.indexOf(user._id) > -1) {
            newPl.addClass("green");
        }
        if (user.vip) {
            newPl.addClass("vipPlayer");
        }
        if (room.length < 3) {
            newPl.addClass("mode" + user.mode);
        }
        if (user._id == "554f5adab84448cc1819490e") {
            newPl.addClass("djPlayer");
        }
        if (reds.indexOf(user._id) > -1) {
            newPl.addClass("red");
        }
        newPl.find("b").addClass("status" + user.icon);
        if (user.marked == 1) {
            newPl.addClass("marked");
        }
        if (!multi && room.length > 2 && !container.hasClass("current")) {
            userGoEvent(user, leave);
            if (!closedgame) {
                changeNumberHtml("addedToGame", 1);
                changeNumberHtml("remainForGame", -1);
            }
        }
    }
    aside.find(".blocktitle").html(" (" + playersList.find("div").length.toString() + ")");
    var str = [];
    playersList.find("div").each(function() {
        var sustr = [$(this).attr("data-nick"), $(this)];
        str.push(sustr);
    });
    str.sort(plSort);
    playersList.html();
    $.each(str, function(key, value) {
        playersList.append(value[1]);
    });
}
var zTimers = {}
  , zayavkaTimer = function(gid) {
    var curtimer = $("#" + gid).find(".timer");
    if (curtimer) {
        var lost = curtimer.attr("data-lost");
        lost--;
        if (lost > 0) {
            curtimer.attr("data-lost", lost);
            curtimer.html(countdown(lost));
        } else {
            clearInterval(zTimers[gid]);
            delete zTimers[gid];
        }
    }
};
function editGameList(event) {
    $("#" + event._id).remove();
    delete gamesInfoArray[event._id];
    if (!event.del) {
        var newGame = $("<li></li>");
        if (event.special) {
            newGame.addClass("specialgame");
        }
        if (event.gametype == 13) {
            newGame.addClass("important");
        }
        newGame.html('<span class="row1">' + (event.cat ? "&#128008;" : "") + event.creator + '</span><span class="row2">' + event.sum + '</span><span class="row3">' + event.count + '</span><span class="row4">' + (event.selecting ? '<b class="selrolgame"></b>' : "") + (event.botwall ? '<b class="botwall"></b>' : "") + (event.shortnight ? '<b class="shortnight"></b>' : "") + (event.man ? '<b class="manmode"></b>' : "") + gameStyle[event.style] + '</span><span class="row5">' + event.add + '</span><span class="row6">' + (event.count - event.add) + "</span>");
        newGame.attr("id", event._id);
        var thisInfo = '<div class="gticons">';
        for (var i = 1; i < 5; i++) {
            var newSpan = "<span";
            if (event["style" + i] == 1) {
                newSpan += ' class="enabled"';
            }
            newSpan += "></span>";
            thisInfo += newSpan;
        }
        thisInfo += '</div><div class="gtheader">' + (gameTypes[event.gametype] ? gameTypes[event.gametype] : "Нестандартная партия") + '</div><div class="gtcaption">' + event.caption + '</div><div class="gtplayers">' + (event.players ? event.players.join(", ") : "") + "</div>";
        gamesInfoArray[event._id] = thisInfo;
        gamesList.append(newGame);
        if (event.starttime) {
            if (zTimers[event._id]) {
                clearInterval(zTimers[event._id]);
            }
            $("<b/>", {
                "class": "timer",
                "data-lost": Math.round((event.starttime - datenow()) / 1000)
            }).appendTo(newGame.find(".row1"));
            zayavkaTimer(event._id);
            zTimers[event._id] = setInterval(function() {
                zayavkaTimer(event._id);
            }, 1000);
        }
        sortTable();
    }
}
var greenUpdateButton = $("#greenRefresh");
greenUpdateButton.click(function() {
    greenUpdateButton.removeClass("show");
    sendToSocket({
        type: "getGreens"
    });
    setTimeout(function() {
        greenUpdateButton.addClass("show");
    }, 5000);
});
function showGreenList(greens) {
    var greenlist = lists.find(".greenlist");
    greenlist.html("");
    greens.forEach(function(el) {
        editGreen(el, true);
    });
}
function editGreen(green, add) {
    var thislist = lists.find(".greenlist");
    if (add) {
        var roomClass = (green.room.length > 2) ? ((green.marked && green.marked == 2) ? "lock" : "open") : "greenroom" + green.room.substring(0, 1);
        var newGreen = $('<div class="green' + green.sex + " " + roomClass + '"' + (green.marked == 2 ? "" : ' data-id="' + green._id + '"') + '><b data-room="' + green.room + '"><span class="lock2"></span></b><span>' + green.login + "</span></div>");
        newGreen.find("span").click(function() {
            $("#adresat-id").val(green._id);
            $("#adresat").val(green.login);
            privateCheck.prop("checked", true);
        });
        newGreen.find("b").click(function() {
            sendToSocket({
                type: "follow",
                uid: green._id
            });
        });
        thislist.append(newGreen);
    }
}
function showTopLists(data) {
    var num = 0;
    if (data.topmoney) {
        var list1Div = lists.find(".moneylist");
        data.topmoney.forEach(function(el) {
            $('<div data-id="' + el._id + '"><span>' + (++num) + ".</span><span>" + el.login + "</span><span>" + over1000(el.money) + "</span></div>").appendTo(list1Div);
        });
    }
    num = 0;
    if (data.toprating) {
        var list2Div = lists.find(".ratinglist");
        data.toprating.forEach(function(el) {
            $('<div data-id="' + el._id + '"><span>' + (++num) + ".</span><span>" + el.login + "</span><span>" + over1000(el.rating) + "</span></div>").appendTo(list2Div);
        });
    }
    num = 0;
    if (data.topactiv) {
        var list3Div = lists.find(".activlist");
        if (data.topactiv.length > 0) {
            data.topactiv.forEach(function(el) {
                try {
                    el.activ = el.months[Object.keys(el.months)[0]]["activity"];
                    $('<div data-id="' + el._id + '"><span>' + (++num) + ".</span><span>" + el.login + "</span><span>" + over1000(el.activ) + "</span></div>").appendTo(list3Div);
                } catch (e) {}
            });
        } else {
            $("<p>Станьте первым активным игроком этого месяца!</p>").appendTo(list3Div);
        }
    }
    num = 0;
    if (data.toprefer) {
        var list4Div = lists.find(".referlist");
        data.toprefer.forEach(function(el) {
            $('<div data-id="' + el._id + '"><span>' + (++num) + ".</span><span>" + el.login + "</span><span>" + over1000(el.invited) + "</span></div>").appendTo(list4Div);
        });
    }
    lists.find("div:not(.greenlist)").find("[data-id]").click(showProfile);
}
function goToRoom(roomStr) {
    if (room == "testgame" && helper.helpGameTimer) {
        helper.helpGameStop();
    }
    var r = (roomStr) ? roomStr : roomInHall;
    if (ws.readyState == 3) {
        return;
    }
    if (helper && helper.enabled()) {
        helper.stop();
    }
    if (r == 6 && u.club == 0) {
        showMessage('Только для членов Клуба <u class="clubname"></u>!');
    } else {
        showNewMessage({
            message: "Переходим..."
        });
    }
    sendToSocket({
        type: "go",
        room: r.toString()
    });
}
function randomGame() {
    var games = gamesList.find("li");
    if (games.length > 0) {
        var rNum = Math.floor(Math.random() * games.length);
        var select = games.eq(rNum);
        select.click();
    } else {
        showNewMessage({
            message: "Игра не найдена. Нужно создать свою игру!",
            color: "#ff0000"
        });
        sendToSocket({
            type: "create",
            count: 16,
            sum: 1,
            gametype: "2",
            style: 0,
            selectRole: true,
            about: "Чаще создавайте игры!"
        });
    }
}
function selectPlayer(target) {
    if (target == u._id) {
        return;
    }
    playersList.find("div").removeClass("select");
    $("#" + target).addClass("select");
}
function markPlayer() {
    var selectedPl = playersList.find("div.select");
    if (selectedPl.length > 0) {
        sendToSocket({
            type: "mark",
            selected: selectedPl.attr("id"),
            kick: (selectedPl.hasClass("marked"))
        });
    } else {
        modalWindow("Вы уверены, что хотите принять в игру всех желающих?", markAll);
    }
}
function markAll() {
    var nomarked = playersList.find("div:not(.marked)");
    if (container.hasClass("ingame") && nomarked.length > 0) {
        var uid = nomarked.eq(0).attr("id");
        if (uid.length != 24 || parseInt($("#remainForGame").html()) < 2) {
            return;
        }
        sendToSocket({
            type: "mark",
            selected: uid
        });
        setTimeout(markAll, 1000);
    }
}
function suggestedPlayer(data) {
    var uid = data._id, selPl = $("#" + uid), eventText;
    if (selPl) {
        if (data.kick) {
            eventText = "Игрок " + selPl.html() + " исключен создателем.";
            selPl.removeClass("marked");
            playersInfoArray[uid].marked = 0;
        } else {
            eventText = "Игрок " + selPl.html() + " одобрен создателем.";
            selPl.addClass("marked");
            playersInfoArray[uid].marked = 1;
        }
        game.writeText(eventText);
        changeNumberHtml("addedToGame", data.allmarked, true);
        changeNumberHtml("remainForGame", (data.all - data.allmarked), true);
    }
}
function showWall(pic, external, nohide) {
    var wp = $("#wallpaper")
      , isrc = (external) ? pic : "/images/walls/" + pic;
    wp.removeAttr("style");
    wp.css("background-image", "url(" + isrc + ")");
    wp.show();
    wp.click(function() {
        $("#wallpaper").hide();
    });
    if (!nohide) {
        setTimeout(function() {
            $("#wallpaper").fadeOut(3000);
        }, 2000);
    }
}
function showPattern(pic) {
    var wp = $("#wallpaper");
    wp.css({
        background: "url(" + pic + ") center/contain no-repeat"
    });
    wp.show();
    wp.click(function() {
        $("#wallpaper").hide();
    });
    setTimeout(function() {
        $("#wallpaper").fadeOut(3000);
    }, 2000);
}
function createAudio(src) {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", src);
    audioElement.load();
    return audioElement;
}
var sounds = {}
  , soundExt = (document.createElement("audio").canPlayType && document.createElement("audio").canPlayType("audio/mpeg")) ? "mp3" : "ogg";
sounds.notify = createAudio("/media/notify." + soundExt);
sounds.signal = createAudio("/media/beep." + soundExt);
sounds.shuffle = createAudio("/media/shuffle." + soundExt);
sounds.money = createAudio("/media/money." + soundExt);
sounds.roll = createAudio("/media/roll." + soundExt);
sounds.music = createAudio("/media/music." + soundExt);
sounds.music.setAttribute("loop", true);
sounds.music.addEventListener("loadedmetadata", music, false);
sounds.all = {
    ffl: {},
    maffia: {}
};
["click", "day", "item4", "item5", "night", "notify", "role2", "role3", "role4", "role6", "role7", "role8", "role9", "win"].forEach(function(el) {
    sounds.all.ffl[el] = createAudio("/media/ffl/" + el + "." + soundExt);
    sounds.all.maffia[el] = createAudio("/media/maffia/" + el + "." + soundExt);
});
if (!isAppVK) {
    sounds.radio = createAudio("");
    var radio = $("#radio");
    sounds.radio.onplay = function() {
        radio.show();
    }
    ;
    sounds.radio.onerror = sounds.radio.onended = function() {
        radio.hide();
    }
    ;
    radio.click(function() {
        modalWindow("Выключить данную композицию?", function() {
            sounds.radio.pause();
            radio.hide();
        });
    });
}
function sound(type, fm) {
    if (!soundValue) {
        return;
    }
    var curSound;
    if (fm) {
        var gmode = isMaffia ? "maffia" : "ffl";
        curSound = sounds.all[gmode][type];
    } else {
        curSound = sounds[type];
    }
    try {
        curSound.volume = soundValue / 100;
        curSound.currentTime = 0;
        curSound.play();
    } catch (e) {
        console.log("sound.error: " + type + " - " + e);
    }
}
function music() {
    try {
        if (!musicValue) {
            sounds.music.pause();
        } else {
            sounds.music.currentTime = 0;
            sounds.music.play();
        }
    } catch (e) {
        console.log("music.error: " + e);
    }
}
function errorText(text) {
    var errorBlock = $("#errorBlock");
    if (!errorBlock.length) {
        errorBlock = $("<div/>", {
            id: "errorBlock"
        }).css({
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            background: "url(/images/fail.jpg) center no-repeat #fff"
        }).appendTo(b);
    }
    errorBlock.html("<h1>" + text + '</h1><p>Попробуйте перезагрузить страницу. Если проблема повторяется, <a href="https://vk.com/im?media=&sel=-' + (isMaffia ? "109864615" : "39094155") + '" title="Написать сообщение" target="_blank">сообщите нам</a></p>');
    errorBlock.show();
}
function socketEvent(message) {
    var event = JSON.parse(message.data);
    if (testMode) {
        console.log(event);
    }
    switch (event.type) {
    case "reply":
        socketStack.shift();
        socketTry = 0;
        checkSocketStack();
        break;
    case "logout":
        ws.onclose = function() {}
        ;
        if (isAppVK) {
            errorText("Ошибка авторизации: " + event.text + ". Обновите страницу");
        } else {
            if (typeof (authDiv) !== "undefined") {
                $("#authDiv").fadeIn(500);
            } else {
                if (mobile) {
                    showMessage("Пожалуйста, пройдите авторизацию повторно.");
                } else {
                    warningWindow("Ошибка авторизации", function() {
                        $(window).off("beforeunload", Unloader.unload);
                        window.location.href = isMaffia ? "http://maffia-online.ru/" : "/";
                    }, "Авторизоваться");
                    console.log(event.text);
                }
            }
        }
        break;
    case "message":
        showNewMessage(event);
        if (event.msgType == "exit") {
            mW.hide();
            warningWindow(event.message, goToRoom);
        }
        break;
    case "infomessage":
        if (event.kick) {
            game.kickVote(event);
        } else {
            if (event.event) {
                game.event(event.event, event.from);
            } else {
                game.writeText(event.message, event.from || null, true);
            }
            if (event.msgType == "exit") {
                mW.hide();
                game.finished();
                var win = (event.win);
                var msgText = event.message || finalMsg(event, true);
                warningWindow(msgText, goToRoom, "Выйти из игры", win);
            }
            if (event.banks) {
                game.recalculateBanks(event.banks);
            }
        }
        break;
    case "isban":
        if (event.sec) {
            var bh = Math.floor(event.sec / 3600)
              , bmin = (event.sec % 3600)
              , bm = Math.floor(bmin / 60)
              , bs = bmin % 60
              , btext = "";
            if (bh > 0) {
                btext += someThing(bh, "час", "часа", "часов") + " ";
            }
            if (bm > 0) {
                btext += someThing(bm, "минуту", "минуты", "минут") + " ";
            }
            if (bs > 0) {
                btext += someThing(bs, "секунду", "секунды", "секунд");
            }
            showNewDiv('<div class="ban">Вы не можете пользоваться чатом еще ' + btext + "</div>");
            inputField.blur();
        }
        break;
    case "authorize":
        if (event.success) {
            if (event.pingtime && event.pingtime > 10000) {
                setInterval(function() {
                    sendToSocket({
                        type: "ping"
                    });
                }, event.pingtime);
            }
            datediff = event.datenow - Date.now();
            b.removeClass("unauthorized");
            charDiv.removeClass("charEdit");
            u = event.user;
            if (u.rating < 4) {
                $("#roll-start").hide();
            }
            if (!u.items) {
                u.items = {};
            }
            updateInterface();
            room = event.room;
            showPlayersList(event.online, event.room);
            showGamesList(event.games);
            if (event.greens) {
                showGreenList(event.greens);
            }
            showTopLists(event);
            if (event.stip && event.stip != "no") {
                showConvert(function() {
                    var stipText = "Вам начислена " + (isMaffia ? "зарплата" : "стипендия") + ' в размере <span class="gamemoney">' + over1000(event.stip) + "</span>";
                    if (u.vip) {
                        var vipDays = Math.ceil((u.vip - datenow()) / 86400000);
                        if (vipDays > 0) {
                            stipText += '<br/><b class="red">Ещё ' + someThing(vipDays, "день", "дня", "дней") + " VIP-статуса</b>";
                        }
                    }
                    showCash(stipText);
                });
            }
            setStatus();
            var mybirthday = false;
            if (event.birthdays) {
                var bdStr = '<div class="birthdays"> Сегодня отмечают свой день рождения следующие игроки: <ul> ';
                event.birthdays.forEach(function(el) {
                    bdStr += '<li><strong data-id="' + el._id + '">' + el.login + "</strong></li>";
                    if (el._id == u._id) {
                        mybirthday = true;
                    }
                });
                bdStr += " </ul> <blockquote>Не забудьте поздравить!</blockquote></div>";
                showNewDiv(bdStr);
            }
            if (event.onlineCount) {
                onlineCounter.html(event.onlineCount);
            }
            if (event.statistics) {
                showStatistics(event.statistics);
            }
            if (u.dj) {
                $('<script type="text/javascript" src="/js/dj.js"><\/script>').appendTo(b);
            }
            if (u.moder || (u.moder2 && server2)) {
                $('<script type="text/javascript" src="/js/moder.js?190118"><\/script>').appendTo(b);
                if (event.statistics && event.statistics.valentin) {
                    b.append("<style>.ad-valentin{display:block !important}</style>");
                }
            }
            shareMaffia();
            if (event.news) {
                event.news.forEach(function(el) {
                    showNewDiv('<div class="news specialnews">' + el + "</div>");
                });
            }
            if (event.regplayers && event.regplayers.length > 0) {
                var regList = '<div class="news">Последние 10 новичков: '
                  , lastPl = ""
                  , dnum = 0
                  , dcur = 0;
                event.regplayers.forEach(function(el, index) {
                    dcur = new Date(el.date).getDate();
                    if (dnum != dcur) {
                        dnum = dcur;
                        lastPl += "<br/> " + rusDate(el.date, false, "short") + ": ";
                    } else {
                        lastPl += ", ";
                    }
                    lastPl += '<strong data-id="' + el._id + '">' + el.login + "</strong>";
                });
                regList += lastPl + "</div>";
                showNewDiv(regList);
            }
            if (event.was) {
                var wasText = '<div class="wastoday">Сегодня были в игре (' + event.was.length + '):<input type="checkbox" class="spoiler" id="showwasingame"/><label for="showwasingame"></label><div>';
                event.was.forEach(function(el) {
                    wasText += '<strong data-id="' + el._id + '">' + el.login + "</strong>, ";
                });
                showNewDiv(wasText.substr(0, wasText.length - 2) + "</div></div>");
            }
            if (mybirthday) {
                showNewMessage({
                    message: "Администрация игры поздравляет Вас с днём рождения и желает, чтобы в жизни было как можно больше приятных минут! <blockquote> http://loday.ru/images/walls/card.gif </blockquote>",
                    msgStyle: "birthdays mybirthday"
                });
            }
            messagesList.find("strong").click(showProfile);
            if (!u.lottery || u.lottery < event.datenow) {
                lotteryDiv.find("button").fadeIn();
            } else {
                lotteryTimerStart();
            }
            if (u.rolldate && isToday(u.rolldate)) {
                $("#roll-start").addClass("rolling-was");
            }
            helper.hideLocation();
            if (u.rating < 100 && lStorage.getItem("hints") != 0) {
                hintsCheckBox.prop("checked", true);
                hintsNeed = true;
            }
            if (!lStorage.getItem("width") && !lStorage.getItem("recomwidth") && b.outerWidth() > 1200) {
                var recomWidth = Math.round(1200 / b.outerWidth() * 100);
                if (recomWidth < 95) {
                    modalWindow("Рекомендуемая ширина игрового окна при данном разрешении - " + recomWidth + "%. Установить предполагаемые размеры?<br/> Изменить ширину  игры Вы всегда сможете в настройках игры.", function() {
                        lStorage.setItem("recomwidth", true);
                        lStorage.setItem("width", recomWidth);
                        setWidth(recomWidth);
                        gameWidth.val(recomWidth);
                        if (u.rating < 10) {
                            helper.start();
                        }
                    }, function() {
                        lStorage.setItem("recomwidth", true);
                        if (u.rating < 10) {
                            helper.start();
                        }
                    });
                }
            } else {
                if (u.rating < 10) {
                    helper.start();
                }
            }
            if (u.login == "Kinder") {
                showQuiz({
                    text: "Что исполняет сразу 3 желания – сюрприз, игрушка, шоколад?",
                    wordlen: 14,
                    open: {
                        6: "-"
                    }
                });
            }
            if (u.status && u.status.toLowerCase() == "kinder") {
                setTimeout(maffiaNEW, 2000);
            }
        } else {
            editProfileSize();
            charDiv.addClass("charEdit");
        }
        break;
    case "reconnect":
        if (event.error) {
            $("#errorBlock").hide();
            warningWindow("Не удалось восстановить соединение", function() {
                window.location.reload();
            }, "Обновить страницу");
        } else {
            mW.hide();
            showNewMessage({
                message: "Соединенис с сервером было восстановлено!",
                color: "#ff0000"
            });
            $("#errorBlock").hide();
            if (ticketBlock.is(":visible")) {
                hideTickets();
            }
        }
        break;
    case "register":
        regButton.prop("disabled", false);
        if (event.result == "busy") {
            showMessage("Этот логин уже занят, придумайте другой");
        } else {
            if (event.result) {
                setTimeout(function() {
                    sendToSocket({
                        type: "authorize"
                    });
                }, 500);
            } else {
                errorText("Не удалось создать персонажа.");
            }
        }
        break;
    case "enter":
        messagesList.html("");
        room = event.room;
        closedgame = false;
        game.style = {};
        game.finish = false;
        game.intuition = false;
        if (event.user) {
            Object.update(u, event.user);
        }
        showPlayersList(event.online, event.room);
        if (event.gameInfo) {
            showGameInfo(event.gameInfo);
            if (!isToday(u.rolldate)) {
                $(".button-roll").stop().animate({
                    rotation: 360
                }, {
                    duration: 3000,
                    start: function() {
                        $(this).addClass("nobackground");
                    },
                    step: function(now, fx) {
                        $(this).css({
                            transform: "rotate(" + now + "deg)"
                        });
                    }
                }).animate({
                    rotation: -360
                }, {
                    duration: 3000,
                    step: function(now, fx) {
                        $(this).css({
                            transform: "rotate(" + now + "deg)"
                        });
                    },
                    complete: function() {
                        $(this).removeClass("nobackground").removeAttr("style");
                    }
                });
            }
        } else {
            updateInterface();
        }
        if (event.games) {
            showGamesList(event.games);
        }
        if (event.greens) {
            showGreenList(event.greens);
        }
        break;
    case "inform":
        editPlayerList(event.user, event.leave);
        break;
    case "addgame":
        editGameList(event);
        break;
    case "wasmarked":
        suggestedPlayer(event);
        break;
    case "showmsg":
        showMessage(event.message);
        break;
    case "alarm":
        if (event.action) {
            event.text += (event.action == "join") ? " входит в игру" : " покидает игру";
            if (event.online) {
                event.text += " (" + event.online + ")";
                onlineCounter.html(event.online);
            }
            alarm(event.text, true);
        } else {
            if (event.text) {
                alarm(event.text);
            }
        }
        break;
    case "area-battle":
        if (event.winner && event.area) {
            if (!mapAreas[event.area].win) {
                mapAreas[event.area]["win"] = {};
            }
            if (!mapAreas[event.area].win[event.winner]) {
                mapAreas[event.area].win[event.winner] = 0;
            }
            mapAreas[event.area].win[event.winner] += 1;
            var winText = {
                bots: "Боты одержали победу!",
                players: "Удача была на стороне игроков!",
                draw: "Победителя выявить не удалось"
            };
            alarm("Завершена битва за район (" + mapAreas[event.area].title + "). " + winText[event.winner]);
        }
        break;
    case "updateInfo":
        delete event.type;
        updateInterface(event);
        break;
    case "profile":
        showPlayerInfoBlock(event.data);
        break;
    case "buyingame":
        game.buyAnswer(event);
        break;
    case "friend-query":
        var frQ = function(data) {
            if (reds.indexOf(data.fromId) == -1 && !u.server2) {
                showConvert(function() {
                    modalWindow(data.from + " хочет добавить вас в друзья. Вы согласны?", function() {
                        friendQuery("friend-answer", data.fromId, true);
                    }, function() {
                        friendQuery("friend-answer", data.fromId, false);
                    });
                });
            }
        };
        if (event.multi) {
            var step = 0;
            event.from.forEach(function(el) {
                setTimeout(function() {
                    frQ({
                        from: el.login,
                        fromId: el._id
                    });
                }, step);
                step += 1000;
            });
        } else {
            frQ(event);
        }
        break;
    case "friend-new":
        addFriend(event.fid, event.add);
        break;
    case "greenlist":
        if (event.greens) {
            showGreenList(event.greens);
        }
        break;
    case "startgame":
        game.start(event);
        break;
    case "setPeriod":
        game.setPeriod(event);
        break;
    case "quiz":
        if (quizEnable) {
            if (event.login) {
                var quizMsg = '<div class="alarm">Игрок <b>' + event.login + "</b> дал" + (event.sex == 1 ? "а" : "") + " правильный ответ - <em>" + event.answer + "</em>";
                if (event.rank) {
                    quizMsg += " и достиг" + (event.sex == 1 ? "ла" : "") + " нового звания - <strong>" + event.rank + "</strong>";
                }
                quizMsg += "</div>";
                showNewDiv(quizMsg);
                mymessagesList.find(".quiz").remove();
            } else {
                showQuiz(event);
            }
        }
        break;
    case "vote":
        game.vote(event);
        break;
    case "dej-info":
        game.dejInfo(event);
        break;
    case "setrole":
        game.setRole(event.user);
        break;
    case "newrole":
        game.newRole(event);
        break;
    case "giftSteal":
        game.killed(event);
        break;
    case "sysmsg":
        if (event.immediate) {
            warningWindow((event.filter) ? escapeHtml(matFilter(event.message)) : event.message);
            inputField.blur();
        } else {
            showConvert(function() {
                var str = (event.filter) ? escapeHtml(matFilter(event.message)) : event.message;
                warningWindow(str);
            });
        }
        break;
    case "gameitem":
        game.itemUse(event);
        break;
    case "lock-delete":
        game.deleteLock(event.message);
        break;
    case "cookie":
        game.cookieResult(event);
        break;
    case "showTickets":
        showTickets(event.count, event.noactive);
        break;
    case "hideTicket":
        hideTicket(event.ticket);
        break;
    case "isticket":
        ticketOpen(event.ticket, event.result);
        break;
    case "totes":
        showToteList(event.arr);
        break;
    case "curgames":
        showCurGames(event.games);
        break;
    case "auctions":
        showAuctionList(event.arr);
        break;
    case "gift":
        if (event.data) {
            var giftInfo = "Вам подарок от ";
            giftInfo += (event.data.login) ? event.data.login : "неизвестного доброжелателя";
            if (event.data.text) {
                giftInfo += " с пожеланиями:<br/> <em>" + escapeHtml(matFilter(event.data.text)) + "</em>";
            }
            giftInfo += '<div class="giftdiv ' + getGiftClass(event.data.num) + '"></div>';
            showConvert(function() {
                warningWindow(giftInfo, false, false, false, "opencard");
            });
        }
        break;
    case "box":
        updateInterface({
            inc: event.inc,
            items: event.items
        });
        showBox(event);
        break;
    case "rolling":
        doRolling(event);
        break;
    case "quiz-list":
        if (event.players) {
            showQuizList(event.players);
        }
        break;
    case "audio":
        if (!isAppVK && isRadio && event.src) {
            var src = event.src;
            sounds.radio.volume = soundValue / 100;
            sounds.radio.setAttribute("src", src);
            radio.attr("data-title", event.singer + " - " + event.title);
            sounds.radio.play();
        }
        break;
    case "reward":
        if (event.num) {
            warningWindow('<div class="reward">' + roleText[gameMode()]["reward"][event.num] + "</div>", false, false, false, "newspaper");
        }
        if (event.toy) {
            warningWindow('<div class="reward">' + roleText.all.rewardToy + '<div class="nytoy' + event.toy + '"></div></div>', false, false, false, "newspaper");
        }
        if (event.snowflake && !server2) {
            warningWindow('<div class="reward">' + roleText.all.snowflake + '<div class="snowflake"></div></div>', false, false, false);
            if (u.items[18]) {
                u.items[18]++;
            } else {
                u.items[18] = 1;
            }
        }
        if (event.collect) {
            warningWindow('<div class="reward">Вы нашли элемент коллекции &quot;Суперскорость&quot;: <span class="collect' + event.collect + " collect-element collect-element" + event.element + '"></span></div>', false, false, false, "newspaper");
        }
        if (event.item) {
            warningWindow('<div>В ваш инвентарь добавлена награда: <div class="items items-' + event.item + '" data-count="' + event.count + '"></div></div>');
            updateInterface(event.update);
        }
        break;
    case "newtoy":
        drawToy(event.toy);
        break;
    case "lottery":
        if (event.itemnum) {
            var data = {
                text: "Ваша удача не прошла мимо",
                box: {}
            };
            data.box[event.itemnum] = 1;
            showBox(data);
            updateInterface({
                items: event.items
            });
        } else {
            showMessage("В следующий раз Вам обязательно повезет!");
        }
        u.lottery = event.time;
        lotteryTimerStart();
        var lotteryNums = lotteryWin.find("div").find("span");
        lotteryNums.unbind("click");
        if (event.data) {
            $.each(event.data, function(ind, el) {
                lotteryNums.eq(ind - 1).html("").addClass("openLottery items-" + el);
            });
        }
        break;
    case "roulette":
        u.money = event.money;
        u.roulette = event.roulette;
        rouletteDisable();
        updateInterface();
        showMessage("Вы сделали ставку на " + event.num + ".<br/> Возможно, завтра Вас ждет приятный сюрприз.");
        break;
    case "roulette-result":
        rouletteDisable(true);
        rouletteInfo(event, true);
        break;
    case "progress":
        if (event.login) {
            alarm(event.login + " получает достижение - " + progressRank(event.num, event.value));
        } else {
            var ownReward = progressReward(quests[event.num].prize[event.value]);
            warningWindow('<div class="progress">Вы получили новое достижение - <u>' + progressRank(event.num, event.value) + "</u><br/>Ваша награда - " + ownReward + "</div>");
            progressTime = 0;
            var incObj = quests[event.num].prize[event.value];
            for (var ind in incObj) {
                if (incObj.hasOwnProperty(ind)) {
                    u[ind] += (ind == "money") ? incObj[ind] * 1000 : incObj[ind];
                }
            }
            updateInterface();
        }
        break;
    case "progress-list":
        showProgressList(event.list, event.progress, event.already);
        break;
    case "bonus":
        if (event.role) {
            switch (event.bonus) {
            case "intuit":
                game.event({
                    text: "all:bonus:intuit",
                    replacedata: {
                        "[nick]": event.login,
                        "[role]": event.role
                    }
                }, false);
                break;
            }
        }
        break;
    case "firework":
        game.writeText('<div class="firework-text">' + event.login + " запускает фейерверк в честь праздника!</div>", false, true);
        if (!ticketBlock.is(":visible") && !container.hasClass("ingame") && fireworkEnable) {
            showWall("/firework/" + [1, 2, 3, 4, 5].randomValue() + ".gif", false, true);
        }
        break;
    case "gif":
        if (!container.hasClass("ingame") && pluhTime < datenow() - 10000) {
            pluhTime = datenow();
            showWall("other/bah.gif");
        }
        break;
    case "collect":
        if (event.data) {
            u.collections = event.collections;
            showMessage('На ёлке совершенно случайно Вы заметили фрагмент Новогодней коллекции <div class="collect' + event.data.collect + " collect-element collect-element" + event.data.element + '"><div>');
        }
        break;
    case "tree":
        enableTree(event.data);
        break;
    case "dedmoroz":
        if (event.hasOwnProperty("count")) {
            alarm((event.count > 0) ? "Дед Мороз подарил " + someThing(event.count, "подарок", "подарка", "подарков") : "Никто не получил внеочередного подарка от Деда Мороза :(");
        } else {
            var dmNum = randomInt(3)
              , dedmoroz = $('<img id="dm' + dmNum + '" class="dedmoroz" src="/images/2017/dm' + dmNum + '.gif"/>').appendTo(b);
            sound("dedMoroz");
            dedmoroz.animate(dmAnimates[dmNum], 20000, function() {
                $(this).remove();
                sounds.dedMoroz.pause();
            });
        }
        break;
    case "snowball":
        snowball.action(event);
        break;
    case "infomoder":
        if (u.moder || u.moder2) {
            showInfoModer(event.data);
        }
        break;
    case "moder":
        if (u.moder) {
            moderAnswer(event);
        }
        break;
    case "admin":
        var str = "";
        for (var index in event.data) {
            if (event.data.hasOwnProperty(index)) {
                var el = event.data[index];
                for (var i in el) {
                    if (el.hasOwnProperty(i)) {
                        str += el[i] + " ";
                    }
                }
                str += "<br/>";
            }
        }
        showNewMessage({
            message: str
        });
        break;
    case "draw-result":
        if (event.sex) {
            var weddingText = "";
            if (event.winner) {
                weddingText = event.sex == 1 ? 'Под восхищенные мужские взгляды <b data-id="' + event.winnerId + '">' + event.winner + "</b> изящно ловит букет, не оставив соперницам ни шанса!" : 'Ловким движением <b data-id="' + event.winnerId + '">' + event.winner + "</b> хватает подвязку своими сильными руками, что не остается без внимания присутствующих на празднике девушек!";
            }
            game.writeText('<img src="/images/cups/wed' + (event.sex == 1 ? "wo" : "") + 'menitem.png" alt="" style="float:left"/> ' + weddingText, false, true);
        } else {
            var drawText = '<div class="draw-result">' + event.moder.login + " провел" + ((event.moder.sex == 1) ? "а" : "") + " жеребьевку. Результаты представлены ниже:<br/> ";
            if (event.count > 1) {
                for (var k = 0, group = 0, len = event.arr.length; k < len; k++) {
                    if (k == group * event.count) {
                        group++;
                        drawText += "<u>Группа " + group + "</u><br/><ol>";
                    }
                    drawText += "<li>" + event.arr[k] + "</li>";
                    if (k + 1 == group * event.count || k + 1 == len) {
                        drawText += "</ol>";
                    }
                }
            } else {
                event.arr.forEach(function(el) {
                    drawText += el + "<br/>";
                });
            }
            drawText += "</div>";
            showNewDiv(drawText);
        }
        break;
    case "css":
        if (event.add) {
            b.append("<style>" + event.style.replace("'", '"') + "</style>");
        } else {
            if (event.el) {
                $(event.el).attr("style", event.style);
            }
        }
        break;
    case "f14pairs":
        if (event.pairs) {
            var amur = $('<img id="amur" src="/images/holidays/amur.gif"/>').appendTo(b);
            if (!sounds.valentin) {
                sounds.valentin = createAudio("/media/valentin." + soundExt);
            }
            sound("valentin");
            amur.animate({
                left: "-350px"
            }, 10000, function() {
                $(this).remove();
                sounds.valentin.pause();
                var pairsText = "Амурчик на 1 час соединил сердца следующих пар:<br/><ol>";
                event.pairs.forEach(function(el) {
                    if (el[1] && el[2]) {
                        pairsText += '<li><strong class="sex1" data-id="' + el[1]._id + '">♀ ' + el[1].login + '</strong> <span class="green">+</span> <strong class="sex2" data-id="' + el[2]._id + '">' + el[2].login + " ♂</strong></li>";
                    }
                });
                pairsText += "</ol>";
                showNewDiv('<div class="february14-pairs">' + pairsText + "</div>");
                doScroll();
            });
        }
        if (event.task) {
            setTimeout(function(event) {
                showNewMessage({
                    message: "Хочешь получить подарок на День святого валентина? Тогда сыграй со своей парой в игру:<br/><ul><li>" + gameStyle[event.task.style] + "</li><li>не менее чем на " + event.task.count + " игроков</li></ul>",
                    msgType: "private",
                    from: false,
                    to: u._id,
                    toName: u.login
                });
                $("#amur").attr("src", "/images/holidays/amur-arrow.gif");
            }, 5000, event);
        }
        break;
    case "console":
        sendToSocket({
            type: "console",
            logs: logs
        });
        break;
    default:
        console.log("unknown event:", event);
    }
}
$("#nick").click(function() {
    if (u.dj) {
        showWindow("dj");
    }
});
gebi("input").onkeydown = function(e) {
    if (e.which == 13 && !e.ctrlKey && !e.shiftKey) {
        sendMessage();
    }
}
;
$("#sendMsg").click(sendMessage);
function doScroll() {
    if ($("#scrolling").is(":checked")) {
        return;
    }
    var objDiv = gebi("messages");
    if (objDiv) {
        objDiv.scrollTop = objDiv.scrollHeight;
    }
    var myobjDiv = gebi("mymessages");
    if (myobjDiv) {
        myobjDiv.scrollTop = myobjDiv.scrollHeight;
    }
}
var hallTitles = ["", "Страну грёз", "Город любви", "Апельсиновый рай", "Солнечную аллею", "Парк друзей", "Обитель мрака"];
$("nav>h2").click(function() {
    var roomNum = $(this).attr("class").substring(4);
    if (server2) {
        roomNum += "s";
    }
    goToRoom(roomNum);
}).bind("mouseenter", function(e) {
    var hallNum = parseInt($(this).attr("class").substring(4));
    var toolText = (room == hallNum) ? "Вы здесь" : "Перейти в " + hallTitles[hallNum];
    if (hallNum == 6 && !u.club) {
        toolText = hallTitles[hallNum] + " только для членов клуба";
    }
    tooltip(e, toolText, true);
}).bind("mouseleave", function(e) {
    tooltip(e, "", false);
});
var defineTargetClick = function(target) {
    if (target.tagName == "I") {
        target = $(target).parent().parent()[0];
    }
    if (target.tagName !== "DIV") {
        target = $(target).parent()[0];
    }
    return target;
};
playersList.bind("dblclick touchmove", function(e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;
    if (target.id != "players") {
        target = defineTargetClick(target);
        if (target.tagName == "DIV" && target.id) {
            $("#adresat-id").val(target.id);
            $("#adresat").val(target.dataset.nick);
        }
    }
}).bind("click", function(e) {
    showPlayerInfo("", false);
    if (!container.hasClass("ingame")) {
        return;
    }
    var event = e || window.event;
    var target = event.target || event.srcElement;
    if (target.tagName == "B" && container.hasClass("current")) {
        game.notePlayer(target.parentElement.id);
    } else {
        if (target.id != "players") {
            target = defineTargetClick(target);
            if (target.tagName == "DIV" && target.id) {
                selectPlayer(target.id);
            }
        }
    }
}).bind("touchstart", function(e) {
    showPlayerInfo("", false);
    if (!container.hasClass("ingame")) {
        return;
    }
    var event = e || window.event;
    var target = event.target || event.srcElement;
    if (target.tagName != "DIV" || target.id == "players") {
        return;
    }
    selectPlayer(target.id);
}).bind("touchend", function(e) {});
allMessagesList.click(function(e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;
    if (target.tagName != "B") {
        return;
    }
    if (!target.dataset.id) {
        return;
    }
    $("#adresat-id").val(target.dataset.id);
    $("#adresat").val(target.innerHTML);
});
$("#label-panel").find("label").on("click", function() {
    setTimeout(doScroll, 200);
});
var lastClickTime = 0;
actionButton.click(function() {
    var dnow = datenow();
    if (lastClickTime + 300 > dnow) {
        return;
    }
    lastClickTime = dnow;
    if (container.hasClass("closedgame")) {
        markPlayer();
    }
    if (container.hasClass("current")) {
        game.action();
    }
});
privateCheck.change(function() {
    if ($("#adresat-id").val() == "" || (game.style && game.style.style1)) {
        $(this).prop("checked", false);
    }
});
function clearAdresat() {
    $("#adresat-id").val("");
    $("#adresat").animate({
        opacity: -0.1
    }, 1000, function() {
        $("#adresat").val("Всем").css("opacity", "0.9");
    });
    privateCheck.prop("checked", false);
}
$(".clear-adresat").click(clearAdresat);
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
  , fontOptions = $("#fontOptions").find("span")
  , fontSize = $("#fontSize")
  , fontWeight = $("#fontWeight")
  , fontSelect = $("#selectFont");
var soundValue = 100
  , musicValue = 100
  , noAlarm = false
  , hintsNeed = false
  , isRadio = true
  , isMaffia = (window.location.href.indexOf("maffia") > 0);
if (isMaffia) {
    lStorage.setItem("maffia", 1);
}
function changeFavicon(iconHref) {
    var icon = $("[rel='icon']");
    var cache = icon.clone();
    cache.attr("href", iconHref);
    icon.replaceWith(cache);
}
function getGameUrl(vk) {
    return (vk) ? "http://vk.com/share.php?url=http://loday.ru/" + (isMaffia ? "mafiya-online.html" : "") + "%23" + u._id : "http://loday.ru/" + (isMaffia ? "mafiya-online.html" : "") + "#" + u._id;
}
function shareMaffia() {
    if (isMaffia) {
        changeFavicon("/images/mfavicon.png");
    } else {
        changeFavicon("/images/favicon.png");
    }
}
function setGameName(name) {
    header.attr("data-name", name);
    gameNameInput.val(name);
    $("title").html(name);
}
$("#shareButton").click(function() {
    if (isAppVK) {
        VK.callMethod("showInviteBox");
    } else {
        warningWindow('<strong>Приглашайте в игру новых игроков и<br/> получайте 50% от их платежей на свой игровой счёт!</strong><hr/><a target="_blank" title="Поделиться с друзьями ВКонтакте" href="' + getGameUrl(true) + '">Рассказать друзьям ВКонтакте</a><br/><label>Ссылка для приглашения<br/> <input type="text" value="' + getGameUrl() + '" readonly="readonly" style="width:100%"/></label> ');
    }
});
function setRange(obj) {
    if (obj == musicRange) {
        sounds.music.volume = musicValue / 100;
        if (!musicValue) {
            music();
        }
    } else {
        if (sounds.radio) {
            sounds.radio.volume = soundValue / 100;
        }
    }
    var rangeWidth = 200
      , thumb = obj.next()
      , width = thumb.width();
    thumb.html(obj.val());
    thumb.css("left", obj.val() * (rangeWidth - width) / 100);
    if (obj.val() == 0) {
        obj.parent().css("opacity", 0.5);
    } else {
        obj.parent().css("opacity", "");
    }
}
if (lStorage.getItem("nographic") == 1) {
    allMessagesList.addClass("nographic");
    graphicCheckbox.prop("checked", false);
}
if (soundValue = lStorage.getItem("sound")) {
    soundRange.val(soundValue);
} else {
    soundValue = 75;
    soundRange.val(soundValue);
}
setRange(soundRange);
if (musicValue = lStorage.getItem("music")) {
    musicRange.val(musicValue);
} else {
    musicValue = 50;
    musicRange.val(musicValue);
}
setRange(musicRange);
if (lStorage.getItem("noalarm") == 1) {
    noAlarm = true;
    alarmCheckbox.prop("checked", true);
}
if (lStorage.getItem("noradio") == 1) {
    isRadio = false;
    radioCheckbox.prop("checked", false);
}
if (lStorage.getItem("noeffect") == 1) {
    b.addClass("noeffect");
    effectCheckbox.prop("checked", false);
}
if (isAppVK) {
    setGameName(mafApp ? "Мафия" : "День Любви");
    isMaffia = (mafApp);
} else {
    if (lStorage.getItem("maffia") == 1) {
        isMaffia = true;
        setGameName("Мафия");
    }
}
if (isMaffia) {
    b.addClass("maffia");
    maffiaCheckbox.prop("checked", true);
}
if (lStorage.getItem("gamename")) {
    setGameName(lStorage.getItem("gamename"));
}
if (!isAppVK && lStorage.getItem("invert") == 1) {
    b.addClass("invert");
    invertCheckbox.prop("checked", true);
}
if (lStorage.getItem("hints") == 1) {
    hintsNeed = true;
    hintsCheckBox.prop("checked", true);
}
var fSize = lStorage.getItem("font-size")
  , fWeight = lStorage.getItem("font-weight")
  , fFamily = lStorage.getItem("font-family")
  , setFontParams = function() {
    fontsOff();
    allMessagesList.addClass("font-size" + fontSize.val());
    if (fontWeight.prop("checked")) {
        allMessagesList.addClass("font-weight");
    }
    allMessagesList.addClass("font" + fontSelect.val());
};
if (fSize) {
    fontSize.val(fSize);
}
if (fWeight) {
    fontWeight.prop("checked", true);
}
if (fFamily) {
    fontSelect.val(fFamily);
}
if (lStorage.getItem("font")) {
    fontCheckbox.prop("checked", true);
    fontOptions.find("select,input").prop("disabled", false);
    setFontParams();
}
graphicCheckbox.click(function() {
    var is = graphicCheckbox.prop("checked");
    allMessagesList.toggleClass("nographic");
    lStorage.setItem("nographic", (is ? 0 : 1));
    doScroll();
});
soundRange.on("change", function() {
    soundValue = parseInt(this.value);
    setRange(soundRange);
    lStorage.setItem("sound", soundValue);
});
musicRange.on("change", function() {
    var curValue = parseInt(this.value);
    if ((musicValue && !curValue) || (!musicValue && curValue)) {
        musicValue = curValue;
        music();
    } else {
        musicValue = curValue;
    }
    setRange(musicRange);
    lStorage.setItem("music", musicValue);
});
alarmCheckbox.click(function() {
    var is = alarmCheckbox.prop("checked");
    noAlarm = is;
    lStorage.setItem("noalarm", (is ? 1 : 0));
});
radioCheckbox.click(function() {
    var is = radioCheckbox.prop("checked");
    isRadio = is;
    if (!is) {
        sounds.radio.pause();
    }
    lStorage.setItem("noradio", (is ? 0 : 1));
});
effectCheckbox.change(function() {
    var is = effectCheckbox.prop("checked");
    lStorage.setItem("noeffect", (is ? 0 : 1));
    if (is) {
        b.removeClass("noeffect");
    } else {
        b.addClass("noeffect");
    }
});
gameNameInput.change(function() {
    var name = $(this).val();
    header.attr("data-name", name);
    lStorage.setItem("gamename", name);
});
invertCheckbox.click(function() {
    var is = invertCheckbox.prop("checked");
    if (is) {
        b.addClass("invert");
    } else {
        b.removeClass("invert");
    }
    lStorage.setItem("invert", (is ? 1 : 0));
});
hintsCheckBox.click(function() {
    hintsNeed = hintsCheckBox.prop("checked");
    lStorage.setItem("hints", (hintsNeed ? 1 : 0));
});
maffiaCheckbox.click(function() {
    isMaffia = maffiaCheckbox.prop("checked");
    if (isMaffia) {
        b.addClass("maffia");
        if (!lStorage.getItem("gamename")) {
            header.attr("data-name", "Мафия");
        }
    } else {
        b.removeClass("maffia");
        if (!lStorage.getItem("gamename")) {
            header.attr("data-name", "День Любви");
        }
    }
    shareMaffia();
    progressTime = 0;
    lStorage.setItem("maffia", (isMaffia ? 1 : 0));
    createSmilePanel();
    showGroupWidget();
});
fontCheckbox.click(function() {
    var is = $(this).prop("checked")
      , fontEls = fontOptions.find("select,input");
    if (is) {
        fontEls.prop("disabled", false);
        lStorage.setItem("font", true);
        setFontParams();
    } else {
        fontEls.prop("disabled", true);
        lStorage.removeItem("font");
        fontsOff();
    }
});
fontSize.change(function() {
    var font = $(this).val();
    fontsOff("font-size12 font-size14 font-size16 font-size18 font-size20");
    allMessagesList.addClass("font-size" + font);
    lStorage.setItem("font-size", font);
});
fontWeight.click(function() {
    var is = $(this).prop("checked");
    if (is) {
        allMessagesList.addClass("font-weight");
        lStorage.setItem("font-weight", true);
    } else {
        allMessagesList.removeClass("font-weight");
        lStorage.removeItem("font-weight");
    }
});
fontSelect.change(function() {
    var font = $(this).val();
    fontsOff("font1 font2 font3 font4 font5");
    allMessagesList.addClass("font" + font);
    lStorage.setItem("font-family", font);
});
function fontsOff(classes) {
    if (!classes) {
        classes = "font-size12 font-size14 font-size16 font-size18 font-size20 font1 font2 font3 font4 font5 font-weight";
    }
    allMessagesList.removeClass(classes);
}
function showWindow(buttonClass) {
    win.find(".info>div").hide();
    if (["tournaments", "aboutgame"].indexOf(buttonClass) > -1) {
        win.find(".info ." + buttonClass).load("/html/" + buttonClass + ((buttonClass == "aboutgame" && isMaffia) ? "-maffia" : "") + ".html");
    }
    win.find(".info ." + buttonClass).show();
    container.addClass("back");
    win.addClass("openWindow");
    switch (buttonClass) {
    case "newgame":
        if (u.vip) {
            var ngw = win.find(".gameCreate");
            if (!ngw.find("button").is(".usergame")) {
                ngw.append('<button class="button usergame" onclick="showWindow(\'userGame\')" style="margin-top:5px">VIP-игра</button>');
            }
        }
        break;
    case "donatoptions":
        if (u.vip) {
            var diff = u.vip - Date.now();
            if (diff > 0) {
                $("#donat-vip").find(".money").html("2000");
                vipButton.html("Продлить VIP-статус (ост. " + Math.round(diff / 86400000) + " дн.)");
                $("#donat-foto").find(".money").hide();
            }
        }
        var ruporText = (u.items[7]) ? someThing(u.items[7], "рупор", "рупора", "рупоров") : "Рассказать";
        $("#donat-allmessage").find("button").html(ruporText);
        var biggameText = (u.items[12]) ? someThing(u.items[12], "сертификат", "сертификата", "сертификатов") : "Создать";
        $("#donat-biggame").find("button").html(biggameText);
        break;
    case "collect":
        collectRadio.attr("checked", false);
        collectionWin.find("p").html("");
        collectionWin.find("div").html("");
        break;
    case "inventory":
        showInventory();
        break;
    case "areamap":
        if (mapAreas) {
            var svgobject = document.getElementById("citymap");
            var mapOnLoad = function() {
                if ("contentDocument"in svgobject) {
                    var svgdom = $(svgobject.contentDocument);
                    for (var i = 1; i <= 8; i++) {
                        var curArea = $("#area" + i, svgdom)
                          , curMap = mapAreas[i];
                        curArea.html("<title>" + curMap.title + "</title>");
                        if (curMap.own && curMap.own == "bots") {
                            curArea.attr("class", curArea.attr("class") + " " + curMap.own);
                        }
                        curMap.num = i;
                        curArea.click(curMap, function(e) {
                            var curMap = e.data;
                            var dataText = "<h2>" + curMap.title + "</h2>";
                            if (curMap.own) {
                                dataText += "Контролируют: " + ((curMap.own == "bots") ? "боты" : "игроки");
                                if (curMap.own == "bots") {
                                    dataText += '<button class="button" onclick="areaAttack(' + curMap.num + ')">Захватить</button>';
                                }
                                if (curMap.own == "players") {
                                    dataText += '<button class="button" onclick="areaAttack(' + curMap.num + ')">Оборонять</button>';
                                }
                            }
                            if (curMap.win) {
                                dataText += '<table><tr><th colspan="2">Статистика битв</th></tr>';
                                if (curMap.win.players) {
                                    dataText += "<tr><td>Победы игроков</td><td>" + curMap.win.players + "</td></tr>";
                                }
                                if (curMap.win.bots) {
                                    dataText += "<tr><td>Победы ботов</td><td>" + curMap.win.bots + "</td></tr>";
                                }
                                if (curMap.win.draw) {
                                    dataText += "<tr><td>Ничейные партии</td><td>" + curMap.win.draw + "</td></tr>";
                                }
                                dataText += "</table>";
                            }
                            $("#areaData").html(dataText);
                        });
                    }
                }
            };
            mapOnLoad();
            svgobject.onload = mapOnLoad;
        }
        break;
    case "tree":
        if (u.items && u.items.nytoys) {
            var toysDiv = win.find(".toybox");
            toysDiv.html("");
            for (var ind in u.items.nytoys) {
                if (u.items.nytoys.hasOwnProperty(ind)) {
                    $('<span class="nytoy' + u.items.nytoys[ind] + '" data-id="' + ind + '"></span>').mousedown(function(e) {
                        var curtoy = $(this)
                          , treeWin = $(".tree")
                          , moveAt = function(e) {
                            var divOff = treeWin.offset();
                            curtoy.css({
                                left: (e.pageX - divOff.left + treeWin.scrollLeft() - curtoy.width() / 2),
                                top: (e.pageY - divOff.top + 1 + treeWin.scrollTop() + 50)
                            });
                        }
                          , returnToy = function() {
                            curtoy.css({
                                position: "static"
                            }).appendTo(toysDiv);
                            document.onclick = null;
                        };
                        curtoy.css({
                            position: "absolute"
                        }).appendTo(treeWin);
                        moveAt(e);
                        document.onmousemove = function(e) {
                            moveAt(e);
                        }
                        ;
                        document.onclick = returnToy;
                        nytree.click(function(e) {
                            document.onmousemove = null;
                            nytree.unbind("click");
                            document.onclick = null;
                            var offset = $(this).offset();
                            var relativeX = Math.round(e.pageX - offset.left + $(this).scrollLeft());
                            var relativeY = Math.round(e.pageY - offset.top + $(this).scrollTop());
                            modalWindow('Не забудьте указать ваше личное сообщение к игрушке<br/> <textarea placeholder="Поздравление или пожелание"></textarea><br/> Повесить игрушку?', function() {
                                var msg = mW.find("textarea").val()
                                  , curid = curtoy.attr("data-id");
                                sendToSocket({
                                    type: "nytoy",
                                    x: relativeX,
                                    y: relativeY,
                                    id: curid,
                                    text: msg
                                });
                                curtoy.hide();
                                delete u.items.nytoys[curid];
                            }, returnToy);
                        });
                    }).appendTo(toysDiv);
                }
            }
        }
        break;
    case "lottery":
        var lotteryfield = "";
        lotteryQuery = false;
        lotteryWin.html("");
        for (var i = 1; i <= 100; i++) {
            lotteryfield += "<span>" + i + "</span>";
            if (i % 10 == 0) {
                lotteryfield += "<br/>";
            }
        }
        $("<div/>").html(lotteryfield).appendTo(lotteryWin);
        lotteryWin.find("div>span").click(function() {
            if (lotteryQuery) {
                return;
            }
            lotteryDiv.find("button").hide();
            lotteryQuery = true;
            sendToSocket({
                type: "lottery",
                num: $(this).html()
            });
            $(this).addClass("selectLottery");
        });
        break;
    }
    var specialClassSet = function(classname, winclass) {
        if (buttonClass == classname) {
            win.addClass(winclass);
        } else {
            win.removeClass(winclass);
        }
    };
    specialClassSet("stat", "statwin");
    specialClassSet("tree", "treewin");
    specialClassSet("f14Win", "blackwin");
    specialClassSet("playerInfoBlock", "profileWindow");
    specialClassSet("buyGifts", "buyboxwin");
}
$(".moneyblock").find("b").click(function() {
    sumChange();
    showWindow("pay");
});
var payDiv = $(".pay")
  , donatInput = payDiv.find("input");
var sumChange = function() {
    var rSum = parseInt(donatInput.val()) / 10;
    if (rSum >= 1) {
        payDiv.find("#pay-rouble").html(someThing(rSum, "рубль", "рубля", "рублей"));
        payDiv.find("#payeer-button").attr("href", serverPort(true) + "/billing/?uid=" + u._id + "&sum=" + rSum.toFixed(2));
        payDiv.find("#pay-button").attr("href", serverPort(true) + "/billing/form?id=" + u._id + "&sum=" + parseInt(rSum));
    } else {
        payDiv.find("#pay-rouble").html("");
        payDiv.find("#payeer-button").attr("href", 'javascript:showMessage("Минимальная сумма - 1 рубль")');
        payDiv.find("#pay-button").attr("href", 'javascript:showMessage("Минимальная сумма - 1 рубль")');
    }
};
donatInput.change(sumChange).keyup(sumChange);
$("h3").click(function() {
    if (helper.checkLocked && helper.checkLocked($(this))) {
        return;
    }
    var buttonClass = $(this).attr("class").substr(7);
    if (buttonClass == "newgame") {
        checkGame();
    }
    switch (buttonClass) {
    case "findgame":
        randomGame();
        break;
    case "leave":
        if (container.hasClass("current") && !game.finish) {
            modalWindow("Вы действительно хотите покинуть игру?", goToRoom);
        } else {
            goToRoom();
        }
        break;
    default:
        showWindow(buttonClass);
        break;
    }
});
$("#left-panel").find("div").click(function() {
    if (helper.checkLocked && helper.checkLocked($(this))) {
        return;
    }
    if ($(this).attr("id") && $(this).attr("id") == "edit") {
        editProfile(true);
        return;
    }
    var buttonClass = $(this).attr("class").substr(7);
    switch (buttonClass) {
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
        if (Date.now() > progressTime) {
            sendToSocket({
                type: "progress-list"
            });
        }
        break;
    }
    showWindow(buttonClass);
});
$(document).on("mousemove touchmove", "[data-title]", function(e) {
    tooltip(e, $(this).attr("data-title"), true);
}).on("mouseleave touchleave", "[data-title]", function(e) {
    tooltip(e, "", false);
});
function closewindow() {
    win.removeClass("openWindow");
    container.removeClass("back");
}
win.click(function(e) {
    var clicked = $(e.target), action;
    if (action = clicked.attr("data-action")) {
        eval(action + "(" + clicked.attr("data-params") + ")");
    }
});
function gamesListener(e, callback, args) {
    var clicked = $(e.target);
    if (clicked[0].nodeName == "UL") {
        return;
    }
    var action = clicked.attr("id") || clicked.parent().attr("id");
    var options = (args) ? e.pageX + "|" + e.pageY : "";
    if (action) {
        callback(action, options);
    }
}
gamesList.bind("click touchstart", function(e) {
    showTooltip("", false);
    gamesListener(e, goToRoom, false);
}).bind("mousemove touchmove", function(e) {
    gamesListener(e, showTooltip, true);
}).bind("mouseleave touchleave", function(e) {
    gamesListener(e, showTooltip, false);
});
function showTooltip(elid, options) {
    if (options) {
        var coords = options.split("|");
        var x = parseInt(coords[0]);
        var y = parseInt(coords[1]);
        var sw = $("html").width();
        if (sw / 2 > x) {
            tp.css("left", x + "px");
        } else {
            tp.css("left", "");
            tp.css("right", (sw - x) + "px");
        }
        tp.css("top", (y + 10) + "px");
        tp.html(gamesInfoArray[elid]).show();
    } else {
        tp.hide();
    }
}
$("<div/>", {
    "class": "tooltip"
}).appendTo((isAppVK || mobile) ? b : container);
function tooltip(e, text, show) {
    var tp = $(".tooltip")
      , rootBlock = (isAppVK || kinderMode || mobile) ? b : container;
    if (show) {
        var x = e.pageX - rootBlock.offset().left
          , y = e.pageY - rootBlock.offset().top
          , sw = rootBlock.outerWidth()
          , sh = rootBlock.outerHeight();
        if (sw / 2 > x) {
            tp.css("left", x + "px");
            tp.css("right", "");
        } else {
            tp.css("left", "");
            tp.css("right", (sw - x) + "px");
        }
        if (y + 40 > sh) {
            tp.css("top", "");
            tp.css("bottom", (sh - y) + "px");
        } else {
            tp.css("bottom", "");
            tp.css("top", (y + 10) + "px");
        }
        if (text.indexOf("|") > 0) {
            if (e.target.hasAttribute("data-club")) {
                text = text.split("|")[u.club ? 1 : 0];
            } else {
                text = text.split("|")[isMaffia ? 1 : 0];
            }
        }
        tp.html(text.replace("<!", "&lt;!")).show();
    } else {
        tp.hide();
    }
}
function playerGamesCount(cu) {
    var gamescount = cu.lun0 + cu.lun1 + cu.rev0 + cu.rev1 + cu.dej0 + cu.dej1 + cu.poh0 + cu.poh1 + cu.stud0 + cu.stud1;
    ["cat", "adv"].forEach(function(el) {
        if (cu[el + "0"]) {
            gamescount += cu[el + "0"];
        }
        if (cu[el + "1"]) {
            gamescount += cu[el + "1"];
        }
    });
    return gamescount;
}
function checkMarried(cu, block) {
    if (cu.married === true) {
        block.addClass("married");
    } else {
        block.removeClass("married");
        if (cu.married) {
            if (!cu.cups) {
                cu.cups = {};
            }
            cu.cups["wed" + cu.married.replace("-", "") + "-png"] = cu.married == "women-item" ? "Завидная невеста" : "Завидный жених";
        }
    }
}
function showPlayerInfo(show, uid) {
    ptp.queue("fx", []);
    var stat = ptp.find("#playerInfo-stat");
    var cu = playersInfoArray[uid];
    if (show && cu) {
        if (cu.bot && cu.creator && playersInfoArray[cu.creator]) {
            cu.icon = 2;
            cu.status = playersInfoArray[cu.creator].login;
        }
        var statEcho = function(obj, role) {
            var win = (obj[role + "1"] == undefined) ? ((cu.bot || cu.hide) ? "-" : "0") : obj[role + "1"];
            var lose = (obj[role + "0"] == undefined) ? ((cu.bot || cu.hide) ? "-" : "0") : obj[role + "0"];
            return win + " / " + lose;
        };
        if (cu.image && cu.image.length > 2) {
            ptp.find("#playerInfo-image").removeClass().css({
                background: "url(/files/" + uid + cu.image + ") center center no-repeat",
                "background-size": "contain"
            });
        } else {
            ptp.find("#playerInfo-image").removeClass().removeAttr("style").addClass("i" + ((cu.sex == 1) ? "w" : "m") + cu.image);
        }
        if (cu.club) {
            ptp.addClass("club");
        } else {
            ptp.removeClass("club");
        }
        checkMarried(cu, ptp);
        if (cu.vip) {
            ptp.addClass("vipProfile");
        } else {
            ptp.removeClass("vipProfile");
        }
        var cuNick = cu.login || "***";
        var cuRate = (cu.hide) ? "скрыт" : (cu.rating || "-");
        var gamescount = (!cu.hasOwnProperty("stud0")) ? (cu.hide ? "-" : "∞") : playerGamesCount(cu);
        stat.find(".nick").html(cuNick);
        stat.find(".rating").html(cuRate);
        stat.find(".cat").html(statEcho(cu, "cat"));
        stat.find(".sleep").html(statEcho(cu, "lun"));
        stat.find(".jeal").html(statEcho(cu, "rev"));
        stat.find(".duty").html(statEcho(cu, "dej"));
        stat.find(".robb").html(statEcho(cu, "poh"));
        stat.find(".stud").html(statEcho(cu, "stud"));
        stat.find(".gamecount").html(gamescount);
        ptp.find("#player-status").removeClass().addClass("status" + cu.icon).html(cu.status || "");
        ptp.find("#playerInfo-about").html(cu.about || "");
        var cups = "";
        if (cu.cups) {
            for (var index in cu.cups) {
                if (cu.cups.hasOwnProperty(index)) {
                    cups += '<span data-title="' + cu.cups[index] + '" style="background-image:url(/images/cups/' + index.replace("-", ".") + ')"></span>';
                }
            }
        }
        ptp.find("#playerInfo-cups").html(cups);
        ptp.delay(1000).fadeTo(900, 1);
        if (container.hasClass("current") && game.period == 2 && !game.finish) {
            if (cu.sex == 1) {
                gameptp.addClass("woman-gameinfo");
            } else {
                gameptp.removeClass("woman-gameinfo");
            }
            var divs = gameptp.find("div");
            if (game.hisvote[uid]) {
                divs.eq(0).html(game.hisvote[uid]);
            } else {
                divs.eq(0).html("");
            }
            if (game.votes[uid]) {
                divs.eq(1).html(game.votes[uid].join(", ") + "<hr/> Голосов: " + game.votes[uid].length);
            } else {
                divs.eq(1).html("");
            }
            if (game.hisvote[uid] || game.votes[uid]) {
                gameptp.find("strong").html(cuNick);
                gameptp.show();
            }
        }
    } else {
        ptp.hide();
        gameptp.hide();
    }
}
function showPlayerInfoBlock(cu) {
    var wb = $(".info").find(".playerInfoBlock")
      , stat = wb.find(".playerInfo-stat")
      , anketaInfo = wb.find("blockquote")
      , giftInfo = wb.find(".playerInfo-gifts")
      , myprofile = (cu._id == u._id)
      , statEcho = function(obj, role) {
        var win = (obj[role + "1"] == undefined) ? "0" : obj[role + "1"]
          , lose = (obj[role + "0"] == undefined) ? "0" : obj[role + "0"];
        return win + " / " + lose;
    };
    if (myprofile) {
        wb.addClass("myProfile");
    } else {
        wb.removeClass("myProfile");
    }
    if (cu.image.length > 2) {
        wb.find(".playerInfo-image").removeClass().addClass("playerInfo-image").css({
            background: "url(/files/" + cu._id + cu.image + ") center center no-repeat",
            "background-size": "contain"
        });
    } else {
        wb.find(".playerInfo-image").removeClass().removeAttr("style").addClass("playerInfo-image i" + ((cu.sex == 1) ? "w" : "m") + cu.image);
    }
    if (cu.club) {
        wb.addClass("club");
    } else {
        wb.removeClass("club");
    }
    checkMarried(cu, wb);
    var cuNick = cu.login || "***"
      , cuRate = cu.rating || "0"
      , gamescount = (!cu.hasOwnProperty("stud0")) ? "∞" : playerGamesCount(cu);
    stat.find(".nick").html(cuNick);
    stat.find(".rating").html(cuRate);
    stat.find(".cat").html(statEcho(cu, "cat"));
    stat.find(".sleep").html(statEcho(cu, "lun"));
    stat.find(".jeal").html(statEcho(cu, "rev"));
    stat.find(".duty").html(statEcho(cu, "dej"));
    stat.find(".robb").html(statEcho(cu, "poh"));
    stat.find(".stud").html(statEcho(cu, "stud"));
    stat.find(".adv").html(statEcho(cu, "adv"));
    stat.find(".gamecount").html(gamescount);
    wb.find(".player-status").removeClass().addClass("player-status status" + cu.icon).html(cu.status || "");
    wb.find(".playerInfo-about").html(cu.about || "");
    var cups = "";
    if (cu.cups) {
        for (var index in cu.cups) {
            if (cu.cups.hasOwnProperty(index)) {
                cups += '<span data-title="' + cu.cups[index] + '" style="background-image:url(/images/cups/' + index.replace("-", ".") + ')"></span>';
            }
        }
    }
    wb.find(".playerInfo-cups").html(cups);
    var dateInfo = (cu.date) ? rusDate(cu.date) : "До 14 июня 2015 года";
    if (cu.room && cu.room != "0") {
        if (cu.room.length > 2) {
            dateInfo += '<div class="green">В игре</div>';
        } else {
            dateInfo += '<div class="hall' + cu.room.substring(0, 1) + '">' + (cu.room.indexOf("s") == 1 ? "*" : "") + "</div>";
        }
    } else {
        dateInfo += '<div class="red">Вне игры</div>';
    }
    if (cu.last) {
        dateInfo += '<div class="lastvisit">' + ((isToday(cu.last)) ? "Сегодня" : rusDate(cu.last, true, true)) + "</div>";
    }
    if (cu.vip && cu.vip > datenow()) {
        dateInfo += '<div class="vipPlayer">VIP-статус до ' + showDate(cu.vip, true) + "</div>";
    }
    $("#regdate").html(dateInfo);
    anketaInfo.html("");
    if (cu.blank) {
        for (var i in cu.blank) {
            if (cu.blank.hasOwnProperty(i)) {
                var curv = (i == 1 && cu.blank[i]) ? rusDate(cu.blank[i], true) : cu.blank[i];
                $("<p>" + curv + "</p>").appendTo(anketaInfo);
            }
        }
    }
    giftInfo.html("");
    if (cu.gifts) {
        for (var k in cu.gifts) {
            if (cu.gifts.hasOwnProperty(k)) {
                var cg = cu.gifts[k]
                  , curgift = $('<div data-giftid="' + k + '" class="' + getGiftClass(cg.num) + '" data-title="' + (cg.login ? cg.login : "Аноним") + ": " + (cg.text ? matFilter(cg.text) : "без комментариев") + " (" + showDate(k, true) + ')"></div>');
                if (myprofile) {
                    curgift.on("click touchstart", function() {
                        var thisgift = $(this);
                        modalWindow('Выбросить подарок?<br/> <div class="playerInfo-gifts singlegift"><div class="' + thisgift.attr("class") + '" data-title="' + thisgift.attr("data-title") + '"></div></div>', function() {
                            sendToSocket({
                                type: "gift-delete",
                                gift: thisgift.attr("data-giftid")
                            });
                            thisgift.remove();
                        });
                    });
                }
                curgift.appendTo(giftInfo);
            }
        }
        giftInfo.append('<br class="clearfix"/>');
    }
    if (myprofile) {
        if (u.vip) {
            $("<button>" + (u.hide ? "Открыть профиль" : "Скрыть профиль") + "</button>").click(function() {
                $(this).hide();
                sendToSocket({
                    type: "anketa",
                    data: {
                        hide: !u.hide
                    }
                });
            }).appendTo(giftInfo);
        }
    } else {
        $("<button>Сделать подарок</button>").click(function() {
            giftShop.find('input[type="text"]').eq(0).val(cu.login);
            showWindow("giftshop");
        }).appendTo(giftInfo);
    }
    if (u.stat && u.stat.pay) {
        var needVipSum = (u.vip && u.vip > datenow()) ? 2000 : 3000;
        $('<button class="button-donatoptions money">' + (myprofile ? "Получить" : "Подарить") + " VIP (" + needVipSum + ")</button>").click(function() {
            if (u.money2 >= needVipSum) {
                modalWindow("Вы уверены, что хотите подарить игроку <b>" + cuNick + "</b> VIP-статус на 30 дней?", function() {
                    sendToSocket({
                        type: "donat",
                        action: "vip",
                        other: cu._id
                    });
                });
            } else {
                showMessage('Для такого щедрого подарка у Вас должно быть <span class="money">' + needVipSum + "</span> на счету.");
            }
        }).appendTo(giftInfo);
    }
    showWindow("playerInfoBlock");
}
shop.find("[data-item]").click(function() {
    try {
        var data = $(this).attr("data-item").split("-");
        var item = parseInt(data[0]);
        var money = parseInt(data[1]);
    } catch (e) {
        showMessage("Товар не выбран");
    }
    if (item > 0 && item < 7) {
        sendToSocket({
            type: "buy",
            item: item,
            money: money
        });
    } else {
        showMessage("Товара нет в наличии");
    }
});
function showMessage(text) {
    warningWindow(text);
}
$("#options").click(function() {
    oW.addClass("showWindow");
});
oW.find("button").click(function() {
    oW.removeClass("showWindow");
});
oW.find(".close").click(function() {
    oW.removeClass("showWindow");
});
function plSort(i, ii) {
    if (i[0] > ii[0]) {
        return 1;
    } else {
        if (i[0] < ii[0]) {
            return -1;
        } else {
            return 0;
        }
    }
}
function sSort(i, ii) {
    if (i[colNum] > ii[colNum]) {
        return sortType;
    } else {
        if (i[colNum] < ii[colNum]) {
            return -1 * sortType;
        } else {
            return 0;
        }
    }
}
function iSort(i, ii) {
    var v1 = parseInt(i[colNum]);
    var v2 = parseInt(ii[colNum]);
    if (v1 > v2) {
        return sortType;
    } else {
        if (v1 < v2) {
            return -1 * sortType;
        } else {
            return 0;
        }
    }
}
function sortTable(column) {
    if (!column) {
        column = colNum;
    } else {
        sound("shuffle");
        if (colNum == column) {
            sortType *= -1;
        }
        colNum = column;
    }
    var str = [];
    gamesList.find("li").each(function() {
        var indexA = [$(this).attr("id"), $(this).attr("class")];
        var sustr = [indexA];
        $(this).children("span").each(function() {
            sustr.push($(this).html());
        });
        str.push(sustr);
    });
    if (column == 1 || column == 4) {
        str.sort(sSort);
    } else {
        str.sort(iSort);
    }
    $.each(str, function(key, value) {
        var curid = value[0][0];
        $("#" + curid).remove();
        var newGame = document.createElement("li");
        newGame.id = curid;
        if (value[0][1]) {
            newGame.className = value[0][1];
        }
        gamesList.append(newGame);
        $.each(value, function(key2, value2) {
            if (key2 > 0) {
                newGame.innerHTML += '<span class="row' + key2 + '">' + value2 + "</span>";
            }
        });
    });
}
var prices = {
    i1: 2000,
    ir1: 1,
    i2: 3000,
    ir2: 5,
    i3: 30000,
    ir3: 150,
    i4: 1000,
    ir4: 3,
    i5: 5000,
    ir5: 10,
    i6: 300000,
    ir6: 1000
};
function over1000(num) {
    if (!num) {
        return 0;
    }
    var str = num.toString();
    if (str.length > 0) {
        num = "";
        for (var k = 1, i = str.length - 1; i >= 0; i--,
        k++) {
            if (k % 3 == 1) {
                num = " " + num;
            }
            num = str[i] + num;
        }
    } else {
        num = str;
    }
    return num;
}
var charObj = {
    sex: 2,
    image: 1,
    about: ""
}
  , imageChar = $("#imageChar");
charDiv.find('input[type="radio"]').change(function() {
    charObj.sex = parseInt($(this).val());
    charObj.changeChar();
});
imageChar.find("span").click(function() {
    if (!charObj.image || charObj.image.length > 2) {
        charObj.image = 0;
    }
    charObj.image += ($(this).attr("id") == "nextChar") ? 1 : -1;
    if (charObj.image < 1) {
        charObj.image = 24;
    }
    if (charObj.image > 24) {
        charObj.image = 1;
    }
    charObj.changeChar();
});
charObj.changeChar = function() {
    if (charObj.image.length > 2) {
        imageChar.css({
            background: "url(/files/" + u._id + u.image + ") center center no-repeat",
            "background-size": "contain"
        });
    } else {
        imageChar.removeAttr("style");
        var w = 200
          , h = 260;
        var y = (charObj.sex == 1) ? -1 : -4;
        var x = 1;
        if (charObj.image > 8) {
            var dy = Math.floor((charObj.image - 1) / 8);
            y -= dy;
            x -= charObj.image - dy * 8;
        } else {
            x -= charObj.image;
        }
        imageChar.css("background-position", ((x == 0) ? "0 " : x * w + "px ") + y * h + "px");
    }
}
;
regButton.click(function() {
    var newLogin = $("#login").val().trim()
      , about = $("#charAbout").val().trim()
      , outObj = {};
    if (charDiv.hasClass("addChar")) {
        if (newLogin.length < 4) {
            showMessage("Минимальная длина НикНейма 4 символа");
            return;
        }
        outObj = {
            type: "char",
            action: "create",
            login: newLogin,
            sex: charObj.sex,
            image: charObj.image,
            about: about
        };
        sendToSocket(outObj);
        editProfile(false);
        closewindow();
        return;
    } else {
        if (u.login) {
            var isChanges = false;
            if (u.sex != charObj.sex) {
                u.sex = charObj.sex;
                if (playersInfoArray[u._id]) {
                    playersInfoArray[u._id].sex = charObj.sex;
                }
                outObj.sex = charObj.sex;
                isChanges = true;
            }
            if (u.image != charObj.image) {
                u.image = charObj.image;
                if (playersInfoArray[u._id]) {
                    playersInfoArray[u._id].image = charObj.image;
                }
                outObj.image = charObj.image;
                isChanges = true;
            }
            if (u.about != about) {
                u.about = about;
                if (playersInfoArray[u._id]) {
                    playersInfoArray[u._id].about = about;
                }
                outObj.about = about;
                isChanges = true;
            }
            if (!isChanges) {
                editProfile(false);
                alarm("Профиль не был изменен.");
                return;
            } else {
                updateInterface();
                outObj.type = "edit";
            }
        } else {
            if (newLogin.length < 4) {
                showMessage("Минимальная длина НикНейма 4 символа");
                return;
            }
            outObj = {
                type: "authorize",
                login: newLogin,
                sex: charObj.sex,
                image: charObj.image,
                about: about
            };
            var invite = getCookie("invite")
              , inviteVK = getCookie("invite-vk");
            if (invite != undefined && invite.length == 24) {
                outObj.invite = invite;
            }
            if (inviteVK) {
                outObj["invite-vk"] = inviteVK;
            }
            regButton.prop("disabled", true);
        }
    }
    sendToSocket(outObj);
    if (u.login) {
        editProfile(false);
    }
});
$("#cancel").click(function() {
    editProfile(false);
});
$("#datablank").click(function() {
    editProfile(false);
    showBlank();
});
$("#selectChar").click(function() {
    editProfile(false);
    showSelectChar();
});
function editProfileSize() {
    var propK = 0.685
      , bw = b.outerWidth()
      , bh = b.outerHeight();
    if (bh / bw < propK) {
        var marginLR = Math.round((bw - bh / propK) / 2);
        charDiv.css({
            top: 0,
            bottom: 0,
            left: marginLR,
            right: marginLR
        });
    } else {
        var marginTB = Math.round((bh - bw * propK) / 2);
        charDiv.css({
            top: marginTB,
            bottom: marginTB,
            left: 0,
            right: 0
        });
    }
}
function editProfile(open) {
    if (open) {
        editProfileSize();
        if (u.sex == 1) {
            $("#sex2").prop("checked", true);
        } else {
            $("#sex1").prop("checked", true);
        }
        charObj.sex = u.sex;
        charObj.image = u.image;
        charObj.about = u.about;
        if (u.charNum) {
            u.chars[u.charNum - 1].sex = charObj.sex;
            u.chars[u.charNum - 1].image = charObj.image;
            u.chars[u.charNum - 1].about = charObj.about;
        } else {
            if (u.mainChar) {
                u.mainChar.sex = charObj.sex;
                u.mainChar.image = charObj.image;
                u.mainChar.about = charObj.about;
            }
        }
        charObj.changeChar();
        if (open == "addChar") {
            charDiv.addClass("addChar");
            $("#charAbout").val("");
        } else {
            $("#charAbout").val(u.about);
        }
        charDiv.addClass("charEdit");
    } else {
        charDiv.removeClass();
    }
    closewindow();
}
var selectCharDiv = $(".selectChar");
$("#char-back").click(function() {
    editProfile(true);
    closewindow();
});
$("#char-create").click(function() {
    if (!u.club && !u.vip) {
        showMessage("Для создания дополнительных персонажей нужно состоять в клубе или иметь VIP аккаунт");
        return;
    }
    if (!u.vip && u.chars && u.chars.length > 0) {
        showMessage("Для создания более 1 дополнительного персонажа нужно иметь VIP аккаунт");
        return;
    }
    if (u.chars && u.chars.length > 4) {
        showMessage("Нельзя создать больше 5 дополнительных аккаунтов");
        return;
    }
    editProfile("addChar");
});
$("#char-delete").click(function() {
    var charNum = selectCharDiv.find("input[name=selectedChar]:checked").val();
    if (charNum == "0") {
        showMessage("Нельзя удалить основной персонаж. Для смены ника воспользуйтесь разделом VIP");
        return;
    }
    if (charNum && u.chars[charNum - 1]) {
        modalWindow("Вы действительно хотите удалить персонажа " + u.chars[charNum - 1].login + "?", function() {
            u.chars.splice(charNum - 1, 1);
            sendToSocket({
                type: "char",
                action: "delete",
                "char": charNum
            });
            closewindow();
        });
    }
});
function showSelectChar() {
    var charsData = "";
    if (u.mainChar) {
        charsData += '<input type="radio" name="selectedChar" id="selectedChar0" value="0"';
        if (!u.charNum) {
            charsData += ' checked="checked"';
        }
        charsData += '/><label for="selectedChar0"><span ' + (u.mainChar.image.length > 2 ? 'style="background:url(/files/' + u._id + u.mainChar.image + ") center center no-repeat;background-size:contain;" : 'class="i' + ((u.mainChar.sex == 1) ? "w" : "m") + u.mainChar.image) + '"></span>' + u.mainChar.login + "</label>";
    } else {
        charsData += '<input type="radio" name="selectedChar" id="selectedChar0" value="0" checked="checked"/><label for="selectedChar0"><span class="i' + ((u.sex == 1) ? "w" : "m") + u.image + '"></span>' + u.login + "</label>";
    }
    if (u.chars) {
        u.chars.forEach(function(el, ind) {
            var n = ind + 1;
            charsData += '<input type="radio" name="selectedChar" id="selectedChar' + n + '" value="' + n + '"';
            if (u.charNum && u.charNum == n) {
                charsData += ' checked="checked"';
            }
            charsData += '/><label for="selectedChar' + n + '"><span class="i' + ((el.sex == 1) ? "w" : "m") + el.image + '"></span>' + el.login + "</label>";
        });
    }
    var chars = selectCharDiv.find("div");
    chars.html(charsData);
    selectCharDiv.find("input").change(function() {
        u.charNum = parseInt($(this).val());
        sendToSocket({
            type: "char",
            action: "select",
            "char": u.charNum
        });
    });
    showWindow("selectChar");
}
var blankForm = $(".blank");
function showBlank() {
    if (u.blank) {
        for (var i in u.blank) {
            if (u.blank.hasOwnProperty(i)) {
                if (u.blank[i]) {
                    $("#blank" + i).val(u.blank[i]);
                }
            }
        }
    }
    showWindow("blank");
}
blankForm.find("button").click(function() {
    var fields = {};
    blankForm.find("input").each(function(index) {
        if (index == 1 && new Date($(this).val()) == "Invalid Date") {
            $(this).val("");
        }
        fields[index] = $(this).val();
    });
    sendToSocket({
        type: "anketa",
        data: fields
    });
    closewindow();
});
function setWidth(width) {
    if (width > 10 && width < 101 && !isAppVK) {
        container.css("width", width + "%");
        if (container.width() < 800) {
            b.addClass("w800");
        } else {
            b.removeClass("w800");
        }
        if (container.width() < 690) {
            b.addClass("w690");
        } else {
            b.removeClass("w690");
        }
    }
}
var gameWidth = $("#gameWidth");
if (lStorage.getItem("width")) {
    setWidth(lStorage.getItem("width"));
    gameWidth.val(lStorage.getItem("width"));
}
gameWidth.change(function() {
    var width = $(this).val();
    setWidth(width);
    if (width >= 100) {
        lStorage.removeItem("width");
    } else {
        lStorage.setItem("width", width);
    }
});
var statusSelect = $(".myselect");
statusSelect.find("li").click(function() {
    var selClass = $(this).attr("class");
    var selValue = $(this).html();
    statusSelect.find("label").removeClass().addClass(selClass).html(selValue);
    statusSelect.find('input[type="checkbox"]').prop("checked", false);
});
function setStatus() {
    playersInfoArray[u._id].status = u.status;
    playersInfoArray[u._id].icon = u.icon;
    playersList.find("#" + u._id + ">b").removeClass().addClass("status" + u.icon);
    var selector = (u.icon) ? ".myselect li.status" + u.icon : ".myselect li:nth-of-type(1)";
    statusSelect.find("label").removeClass().addClass("status" + u.icon).html($(selector).html());
    $("#statusText").val(u.status);
}
$("#saveStatus").click(function() {
    var text = $("#statusText").val();
    var icon = statusSelect.find("label").attr("class").substring(6) || 0;
    if (u.status == text && u.icon == icon) {
        return;
    }
    u.status = text;
    u.icon = icon;
    sendToSocket({
        type: "status",
        icon: icon,
        text: text
    });
    setStatus();
});
var vipButton = $("#donat-vip").find("button");
$("#showDonat").click(function() {
    showWindow("donatoptions");
});
vipButton.click(function() {
    if ((u.vip && u.money2 >= 2000) || u.money2 >= 3000) {
        sendToSocket({
            type: "donat",
            action: "vip"
        });
        closewindow();
    } else {
        showMessage('Недостаточно <span class="money">баксов</span> для выполнения операции :(');
    }
});
var donatNick = $("#donat-nick");
donatNick.find("button").click(function() {
    var newLogin = donatNick.find("input").val().trim();
    if (newLogin.length >= 4) {
        if (u.money2 >= 100) {
            sendToSocket({
                type: "donat",
                action: "nick",
                login: newLogin
            });
            closewindow();
        } else {
            showMessage('Недостаточно <span class="money">баксов</span> для выполнения операции :(');
        }
    } else {
        showMessage("Минимальная длина НикНейма 4 символа");
    }
});
var donatChange = $("#donat-change")
  , donatChangeInput = donatChange.find("input");
var changeChange = function() {
    var rSum = parseInt(donatChangeInput.val()) * 300;
    if (rSum >= 300) {
        donatChange.find("span").eq(1).html(over1000(rSum));
    } else {
        donatChangeInput.val(100);
    }
};
donatChangeInput.change(changeChange).keyup(changeChange);
donatChange.find("button").click(function() {
    var sumMoney = parseInt(donatChangeInput.val());
    if (sumMoney > 0 && sumMoney <= u.money2) {
        sendToSocket({
            type: "donat",
            action: "moneychange",
            money: sumMoney
        });
        closewindow();
    } else {
        showMessage('Недостаточно <span class="money">баксов</span> для обмена');
    }
});
var donatNickColor = $("#donat-nickcolor");
donatNickColor.find("button").click(function() {
    var selColor = donatNickColor.find("input").val();
    if (u.money2 >= 500) {
        modalWindow('Уверены, что хотите установить цвет ника таким?<br/><div style="background:#000;padding:10px;"><b style="color:' + selColor + '">' + u.login + '</b> в режиме Мафии</div><div style="background:#fff;padding:10px;color:#000"><b style="color:' + selColor + '">' + u.login + "</b> в режиме День Любви</div>", function() {
            sendToSocket({
                type: "donat",
                action: "nickcolor",
                color: selColor
            });
            closewindow();
        });
    } else {
        showMessage('Недостаточно <span class="money">баксов</span> для выполнения операции :(');
    }
});
var donatAllMsg = $("#donat-allmessage");
donatAllMsg.find("button").click(function() {
    var msgText = donatAllMsg.find("input").val().trim().substring(0, 300);
    if (u.items[7]) {
        u.items[7] -= 1;
        sendToSocket({
            type: "items",
            action: "7",
            text: msgText
        });
        closewindow();
    } else {
        if (u.money2 >= 200) {
            sendToSocket({
                type: "toAll",
                action: "msgToAll",
                text: msgText
            });
            closewindow();
        } else {
            showMessage('Недостаточно <span class="money">баксов</span> для выполнения операции :(');
        }
    }
});
var donatFoto = $("#donat-foto");
donatFoto.find("button").click(function() {
    if (!u.vip && u.money2 < 1000) {
        showMessage('Недостаточно <span class="money">баксов</span> для выполнения операции :(');
        return;
    }
    if (!donatFoto.find("input")[0].files || !donatFoto.find("input")[0].files[0]) {
        showMessage("Не выбран файл для загрузки");
        return;
    }
    var file = donatFoto.find("input")[0].files[0];
    if (file.size > 300 * 1024) {
        showMessage("Размер файла превышает 300 КБ");
        return;
    }
    var data = new FormData();
    data.append("uploadFile", file);
    var port = serverPort(false);
    $.ajax({
        url: document.location.protocol + "//" + domain + ":" + port + "/upload",
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        type: "POST",
        success: function(response) {
            if (response.status == "ok") {
                showMessage(response.text);
            } else {
                showMessage("Не удалось установить аватар:<br/> " + response.errors);
            }
        },
        xhrFields: {
            withCredentials: true
        }
    });
});
var donatBotnick = $("#donat-botnick");
donatBotnick.find("button").click(function() {
    var botnick = donatBotnick.find("input[type=text]").val().trim().substring(0, 20);
    var botsex = ($("#botnick-sex").prop("checked")) ? 1 : 2;
    if (u.money2 >= 100) {
        sendToSocket({
            type: "donat",
            action: "botnick",
            login: botnick,
            sex: botsex
        });
        closewindow();
    } else {
        showMessage('Недостаточно <span class="money">баксов</span> для выполнения операции :(');
    }
});
var donatBotwords = $("#donat-botwords");
donatBotwords.find("button").click(function() {
    var botText = donatBotwords.find("input").val().trim().substring(0, 150);
    if (u.money2 >= 30) {
        sendToSocket({
            type: "donat",
            action: "botwords",
            text: botText
        });
        closewindow();
    } else {
        showMessage('Недостаточно <span class="money">баксов</span> для выполнения операции :(');
    }
});
var donatBigGame = $("#donat-biggame");
donatBigGame.find("button").click(function() {
    var gamename = donatBigGame.find("input").val().trim().substring(0, 100);
    if (u.items[12]) {
        u.items[12] -= 1;
        sendToSocket({
            type: "items",
            action: "12",
            title: gamename
        });
        closewindow();
    } else {
        if (u.money2 >= 50) {
            sendToSocket({
                type: "donat",
                action: "biggame",
                title: gamename
            });
            closewindow();
        } else {
            showMessage('Недостаточно <span class="money">баксов</span> для выполнения операции :(');
        }
    }
});
function showToteList(dataArr) {
    var totalList = win.find(".total");
    totalList.html("");
    if (dataArr.length > 0) {
        for (var i = 0, len = dataArr.length; i < len; i++) {
            var curid = dataArr[i]._id;
            var div = $('<div id="tote' + dataArr[i]._id + '"></div>');
            $("<h5>" + dataArr[i].title + "</h5>").appendTo(div);
            $("<p>" + dataArr[i].descr + "</p>").appendTo(div);
            var vars = dataArr[i].variants;
            for (var index in vars) {
                if (vars.hasOwnProperty(index)) {
                    var cid = "tote" + i + "_" + index;
                    $('<input type="radio" id="' + cid + '" name="tote' + i + '" class="check" value="' + index + '"/><label for="' + cid + '" data-title="' + ((dataArr[i].bets[index].sum) ? someThing(dataArr[i].bets[index].count, "ставка", "ставки", "ставок") + " на общую сумму " + over1000(dataArr[i].bets[index].sum) + (dataArr[i].bets[index].mybet ? "(ваша ставка - " + over1000(dataArr[i].bets[index].mybet) + ")" : "") : "Нет ставок") + '"></label>').html(vars[index].text + (dataArr[i].bets[index].sum ? " (" + roundTwo(dataArr[i].sum / dataArr[i].bets[index].sum) + ")" : "")).appendTo(div);
                }
            }
            $("<span>" + showDate(dataArr[i].dateto, true) + "</span>").appendTo(div);
            $('<br/><label class="gamemoney">Ваша ставка <input type="text" value="10" /> 000 </label>').appendTo(div);
            $('<button class="button">Сделать ставку</button>').appendTo(div).click({
                toteid: curid
            }, doBet);
            $('<div>∑ = <span class="gamemoney">' + over1000(dataArr[i].sum) + "</span></div>").appendTo(div);
            totalList.append(div);
        }
    } else {
        totalList.html("<div><h5>В тотализаторе нет ни одного предстоящего события</h5></div>");
    }
}
function doBet(param) {
    var toteId = param.data.toteid;
    var toteDiv = $("#tote" + toteId);
    var betSum = parseInt(toteDiv.find('input[type="text"]').val());
    if (!betSum || betSum < 1) {
        showMessage('Минимальная ставка <span class="gamemoney">1 000</span>');
        return;
    }
    if (betSum * 1000 > u.money) {
        showMessage("Для такой ставки недостаточно денег на вашем игровом счете");
        return;
    }
    var title = toteDiv.find("h5").html();
    var selRadio = toteDiv.find('input[type="radio"]:checked');
    if (!selRadio.val()) {
        showMessage("Не выбран возможный вариант события для ставки");
        return;
    }
    var selText = selRadio.next().html();
    modalWindow('Уверены, что хотите сделать ставку в размере <span class="gamemoney">' + over1000(betSum * 1000) + "</span> на вариант <b>" + selText + "</b> в событии <em>" + title + "</em>?<br/> Отменить ставку будет невозможно!", function() {
        sendToSocket({
            type: "tote",
            action: "add",
            id: toteId,
            bet: betSum,
            variant: selRadio.val()
        });
    });
}
function showCurGames(dataArr) {
    var curgamesList = win.find(".curgames");
    curgamesList.html("");
    if (dataArr.length > 0) {
        for (var i = 0, len = dataArr.length; i < len; i++) {
            var curid = dataArr[i]._id
              , div = $('<div id="curgame' + dataArr[i]._id + '"></div>');
            div.html("<time>" + showDate(dataArr[i].time, true) + "</time> <h5>" + dataArr[i].creator + "</h5><em>" + dataArr[i].caption + '</em><div class="curgame-info">' + (dataArr[i].selecting ? '<b class="selrolgame"></b>' : "") + (dataArr[i].botwall ? '<b class="botwall"></b>' : "") + (dataArr[i].shortnight ? '<b class="shortnight"></b>' : "") + (dataArr[i].man ? '<b class="manmode"></b>' : "") + gameStyle[dataArr[i].style] + ' на <span class="red">' + dataArr[i].count + '</span> игроков со ставкой <span class="brown">' + over1000(dataArr[i].sum) + "</span></div><blockquote>" + dataArr[i].players.join(", ") + "</blockquote> ");
            $("<button>Посмотреть игру</button>").appendTo(div).click({
                gameid: curid
            }, enterToGame);
            curgamesList.append(div);
        }
    } else {
        curgamesList.html("<div><h5>В данный момент не проходит ни одной игры :(</h5></div>");
    }
}
function enterToGame(param) {
    var gameId = param.data.gameid;
    if (!gameId) {
        return;
    }
    closewindow();
    sendToSocket({
        type: "enter-game",
        game: gameId
    });
}
function showAuctionList(dataArr) {
    var auctionList = win.find(".auction");
    auctionList.html("");
    if (dataArr.length > 0) {
        auctionList.append('<div class="specialnews">Каждая ставка продлевает время аукциона на 3 суток. Победителем становится игрок, чья ставка продержится 72 часа. Ставки, перебитые другими участниками, возвращаются их владельцам</div>');
        for (var i = 0, len = dataArr.length; i < len; i++) {
            var curid = dataArr[i]._id;
            var div = $('<div id="auction' + dataArr[i]._id + '"></div>');
            $('<img src="/images/lots/' + dataArr[i].img + '" alt="Изображение лота"/>').appendTo(div);
            $('<h5 class="money">' + dataArr[i].bet + "</h5>").appendTo(div);
            $("<p>" + dataArr[i].lot + "</p>").appendTo(div);
            $("<span>" + showDate(dataArr[i].dateto, true) + "</span>").appendTo(div);
            $('<br/><label class="money">Ваша ставка <input type="text" value="10" /></label>').appendTo(div);
            $("<button>Сделать ставку</button>").appendTo(div).click({
                aucid: curid,
                min: dataArr[i].bet
            }, doAuctionBet);
            if (dataArr[i].login) {
                $("<div>Последняя ставка: " + dataArr[i].login + "</div>").appendTo(div);
            }
            auctionList.append(div);
        }
    } else {
        auctionList.html('<div><h5 class="nobefore">Нет доступных лотов</h5></div>');
    }
}
function doAuctionBet(param) {
    var aucId = param.data.aucid
      , min = (param.data.min + 1) || 1;
    var toteDiv = $("#auction" + aucId);
    var betSum = parseInt(toteDiv.find('input[type="text"]').val());
    if (!betSum || betSum < min) {
        showMessage('Минимальная ставка <span class="money">' + min + "</span>");
        return;
    }
    if (betSum > u.money2) {
        showMessage('Для такой ставки недостаточно <span class="money">денег</span> на вашем игровом счете');
        return;
    }
    modalWindow('Уверены, что хотите сделать ставку в размере <span class="money">' + over1000(betSum) + "</span> на этот лот?<br/> Если вашу ставку перебьют другие участники, вся сумма будет возвращена на ваш счет!", function() {
        sendToSocket({
            type: "auction",
            lot: aucId,
            bet: betSum
        });
    });
}
var giftShop = $(".giftshop")
  , giftList = win.find("#giftList")
  , isShowGiftType1 = true
  , isShowGiftType2 = true
  , giftSortOrder = false
  , sortGifts = (function() {
    var sortable = []
      , keyArr = [];
    for (var key in gifts) {
        if (gifts.hasOwnProperty(key)) {
            sortable.push([key, gifts[key]]);
        }
    }
    sortable.sort(function(a, b) {
        var x = a[1].p + 1000000 * (a[1].t - 1)
          , y = b[1].p + 1000000 * (b[1].t - 1);
        return x - y;
    });
    sortable.forEach(function(el) {
        keyArr.push(el[0]);
    });
    return keyArr;
}
)()
  , getGiftClass = function(giftnum) {
    var groupNum = 1;
    if (giftnum > 272) {
        groupNum = 4;
    } else {
        if (giftnum > 184) {
            groupNum = 3;
        } else {
            if (giftnum > 96) {
                groupNum = 2;
            }
        }
    }
    return "gift-group" + groupNum + " gift" + giftnum;
}
  , addGiftOnList = function(i) {
    if (i == 142 || (i > 252 && i < 273)) {
        return;
    }
    var gmg = (gifts[i].t == 1);
    if ((isShowGiftType1 && gmg) || (isShowGiftType2 && !gmg)) {
        $('<input type="radio" id="gift' + i + '" name="gift" value="' + i + '"/><label for="gift' + i + '" class="' + getGiftClass(i) + '" data-title="' + (gmg ? "на 30 дней" : "на память") + '"><b class="' + (gmg ? "game" : "") + 'money">' + over1000(gifts[i].p) + "</b></label>").appendTo(giftList);
    }
}
  , showGiftList = function() {
    giftList.html("");
    if (giftSortOrder) {
        if (giftSortOrder == 1) {
            for (var i = 0, len = sortGifts.length; i < len; i++) {
                addGiftOnList(sortGifts[i]);
            }
        } else {
            for (var k = sortGifts.length - 1; k >= 0; k--) {
                addGiftOnList(sortGifts[k]);
            }
        }
    } else {
        for (var ind in gifts) {
            if (gifts.hasOwnProperty(ind)) {
                addGiftOnList(ind);
            }
        }
    }
};
for (var i in gifts) {
    if (gifts.hasOwnProperty(i)) {
        addGiftOnList(i);
    }
}
$("#giftSortInc").click(function() {
    giftSortOrder = 1;
    showGiftList();
});
$("#giftSortDec").click(function() {
    giftSortOrder = -1;
    showGiftList();
});
function selectGiftType() {
    var type1 = (this.id == "giftSortType1")
      , otherCheckBox = type1 ? $("#giftSortType2") : $("#giftSortType1");
    if (type1) {
        isShowGiftType1 = $(this).prop("checked");
    } else {
        isShowGiftType2 = $(this).prop("checked");
    }
    if (!$(this).prop("checked") && !otherCheckBox.prop("checked")) {
        otherCheckBox.prop("checked", true);
        if (type1) {
            isShowGiftType2 = true;
        } else {
            isShowGiftType1 = true;
        }
    }
    showGiftList();
}
$("#giftSortType1").change(selectGiftType);
$("#giftSortType2").change(selectGiftType);
giftShop.find("button").click(function() {
    var giftWhom = giftShop.find('input[type="text"]').eq(0).val().trim().substring(0, 20)
      , giftAnonim = giftShop.find("#anonimGift").prop("checked")
      , giftText = giftShop.find('input[type="text"]').eq(1).val().trim().substring(0, 200)
      , selGift = $("input[name=gift]:checked", "#giftList").val();
    if (!selGift || !gifts[selGift]) {
        showMessage("Вы забыли выбрать подарок для своего друга");
        return;
    }
    if (!giftWhom) {
        showMessage("Вы забыли уточнить, кому хотите подарить подарок!");
        return;
    }
    if (u.login == giftWhom) {
        showMessage("Вы не можете подарить подарок себе, это будет не по-товарищески.");
        return;
    }
    if (((gifts[selGift].t == 2) ? u.money2 : u.money) >= gifts[selGift].p) {
        sendToSocket({
            type: "gift",
            whom: giftWhom,
            text: giftText,
            num: selGift,
            anonim: giftAnonim
        });
    } else {
        showMessage("Недостаточно денег для такого шикарного подарка :(");
    }
});
var rolling = false
  , rollItem = 1
  , rollCircle = 0
  , rollPrice = 50;
var roll_items = function(itemId) {
    var rollItems = {
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
    };
    return rollItems[gameMode()][itemId];
};
$(".roll>div").click(function() {
    if (rolling) {
        return false;
    }
    if (u.rolldate && isToday(u.rolldate)) {
        if (u.items[13]) {
            modalWindow("Использовать билет на бесплатную попытку?", function() {
                u.items[13] -= 1;
                rolling = true;
                sendToSocket({
                    type: "rolling"
                });
            });
        } else {
            if (u.money2 < rollPrice) {
                showMessage("Недостаточно денег для еще одной попытки");
                return false;
            }
            modalWindow('Вы хотите испытать удачу еще раз? Стоимость последующих попыток <span class="money">50</span>', function() {
                rolling = true;
                sendToSocket({
                    type: "rolling"
                });
            });
        }
    } else {
        rolling = true;
        sendToSocket({
            type: "rolling"
        });
    }
    return false;
});
function doRolling(data) {
    rollItem = data.item;
    rollCircle += 2;
    $(".roll>div").css("transform", "rotate(" + (-rollItem * 15 + 7 + rollCircle * 360) + "deg)");
    var rollingText = '<div class="rollmsg">' + roll_items(rollItem);
    if (data.collect) {
        rollingText += '<span class="collect' + data.collect.collect + " collect-element collect-element" + data.collect.element + '"></span>';
    }
    rollingText += "</div>";
    if (b.hasClass("noeffect")) {
        showMessage(rollingText);
        rolling = false;
    } else {
        sound("roll");
        setTimeout(function() {
            showMessage(rollingText);
            rolling = false;
        }, 11000);
    }
    $("#roll-start").addClass("rolling-was");
    if (data.updateObj) {
        updateInterface(data.updateObj);
    }
}
var collectRadio, collectionsData = {
    1: {
        title: "Коллекция &quot;Активист&quot; <em>(услуга Активная роль приобретается на 30 часов)</em>",
        info: "Элемент коллекции активиста можно выиграть на барабане чудес и в лотерее."
    },
    2: {
        title: 'Клубная коллекция <em>(Клуб <u class="clubname"></u> активируется на 40 дней)</em>',
        info: "Элемент клубной коллекции можно выиграть на барабане чудес и в лотерее."
    },
    2017: {
        title: "Новогодняя коллекция 2017 <em>(+1% ко всем игровым бонусам)</em>",
        info: "Элементы новогодней коллекции 2017 можно выиграть в лотерее."
    },
    2018: {
        title: "Новогодняя коллекция 2018 <em>(+10% к шансу обмануть кота)</em>",
        info: "Элементы новогодней коллекции 2018 можно выиграть в лотерее."
    },
    3: {
        title: 'Коллекция наставника <em>(удвоение ежедневной <span class="for-ffl">стипендии</span> <span class="for-maffia">зарплаты</span>)</em>',
        info: "Элементы коллекции наставника можно получить за игровые достижения на проекте ваших учеников, зарегистрировавшихся по персональной ссылке (кнопка <em>Поделиться</em>)."
    },
    4: {
        title: "Коллекция &quot;Суперскорость&quot; <em>(быстрый набор суперигр на 100)</em>",
        multi: true,
        info: "Элементы коллекции Суперскорость можно получить за победу в игре на 100 игроков.<br/> Коллекцию можно собирать неограниченное число раз. За полный набор элементов Вы получаете награду - 30 сертификатов на создание быстрой суперигры."
    }
};
function showCollect(collectNum) {
    if (!collectNum || !collectionsData[collectNum]) {
        return;
    }
    var curDiv = collectionWin.find("div");
    collectionWin.find("p").html(collectionsData[collectNum].info);
    if (collectionsData[collectNum].multi && Object.size(u.collections[collectNum]) == 15) {
        var fullCol = true;
        for (var ind in u.collections[collectNum]) {
            if (u.collections[collectNum].hasOwnProperty(ind)) {
                if (u.collections[collectNum][ind] < 1) {
                    fullCol = false;
                }
            }
        }
        if (fullCol) {
            $("<button/>").css({
                display: "block",
                margin: "3px auto"
            }).html("Активировать коллекцию").click(function() {
                closewindow();
                sendToSocket({
                    type: "collection",
                    collect: parseInt(collectNum)
                });
            }).appendTo(collectionWin.find("p"));
        }
    }
    curDiv.removeClass().addClass("collect" + collectNum).html("");
    for (var i = 1; i <= 15; i++) {
        var curSpan = $("<span></span>");
        if (!u.collections || !u.collections[collectNum] || !u.collections[collectNum][i]) {
            curSpan.addClass("nocollect");
        } else {
            if (u.collections[collectNum][i] > 1) {
                curSpan.html(u.collections[collectNum][i]);
            }
        }
        curSpan.appendTo(curDiv);
    }
}
function showQuiz(data) {
    $(".quiz").remove();
    var qDiv = $('<div class="quiz">' + data.text + "</div>")
      , qP = $("<p></p>");
    for (var i = 0; i < data.wordlen; i++) {
        var curLet = "<span";
        if (data.open && data.open[i] && data.open[i] == " ") {
            curLet += ' class="spaceLetter"';
        }
        curLet += ">" + ((data.open && data.open[i]) ? data.open[i] : "") + "</span>";
        $(curLet).appendTo(qP);
    }
    qP.appendTo(qDiv);
    qDiv.bind("click contextmenu selectstart", function(event) {
        event.preventDefault();
        return false;
    });
    $("<div/>").html("x").bind("click", function() {
        modalWindow("Хотите отключить викторину до конца текущего сеанса?", function() {
            quizEnable = false;
            $(".quiz").remove();
            showMessage("Чтобы вновь включить викторину, напишите в чате команду &quot;викторина+&quot; без кавычек и пробелов.");
        });
    }).appendTo(qDiv);
    $("<div/>", {
        "class": "quizabout"
    }).html("?").bind("click", function() {
        showMessage("Чтобы дать ответ в викторине необходимо написать слово (или слова) целиком в общий чат (или личным, но не приватным сообщением).");
    }).appendTo(qDiv);
    qDiv.appendTo(messagesList);
    qDiv.clone().appendTo(mymessagesList);
    doScroll();
}
var quizTop = $(".quiztop");
function showProfile() {
    var uid = $(this).attr("data-id");
    if (uid) {
        sendToSocket({
            type: "profile",
            uid: uid
        });
    }
}
var quizRanks = {
    10: "Новичок",
    50: "Ученик",
    100: "Знаток",
    300: "Профи",
    500: "Мастер",
    1000: "Гуру",
    3000: "Мыслитель",
    5000: "Мудрец",
    10000: "Просветленный",
    15000: "Оракул",
    30000: "Гений",
    50000: "Искусственный Интеллект",
    100000: "Высший разум"
};
function showQuizList(plArr) {
    var qdata = '<table><tr class="quizHeader"><td></td><th>Игроки</th><td>Очки</td><td>Звания</td></tr>'
      , k = 0;
    plArr.forEach(function(el) {
        var rank = "-";
        k++;
        for (var i in quizRanks) {
            if (quizRanks.hasOwnProperty(i) && el.quiz >= i) {
                rank = quizRanks[i];
            } else {
                break;
            }
        }
        qdata += "<tr><td>" + k + '</td><th data-id="' + el._id + '">' + el.login + "</th><td>" + el.quiz + "</td><td>" + rank + "</td></tr>";
    });
    qdata += "</table>";
    quizTop.html(qdata);
    quizTop.find("th").click(showProfile);
}
var halltree, nytree, treeProportion = 0.6536, dmAnimates = {
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
function enableTree(data) {
    var halltreeWidth = parseInt(mainDiv.height() * treeProportion);
    halltree = $('<div class="halltree"><img src="/images/tree.png" data-title="Оставь свои пожелания на Новогодней ёлке" alt="Новогодняя ёлка"/></div>');
    halltree.click(function() {
        showWindow("tree");
    }).appendTo("#main");
    halltree.css({
        width: halltreeWidth
    });
    nytree = $('<div class="nytreeblock"><div class="nytree"><img src="/images/tree.png" alt=""/></div></div>');
    $('<div class="tree"></div>').append('<div class="toybox"></div>').append(nytree).appendTo(win.find(".info"));
    if (data.toys) {
        var treeDiv = $(".nytree");
        data.toys.forEach(function(el) {
            drawToy(el);
        });
    }
    if (u.isGift != "2018") {
        $('<img src="/images/nygift.png" data-title="Подарок от Деда Мороза" alt=""/>').css({
            position: "absolute",
            width: "100px",
            height: "100px",
            bottom: "0",
            right: "15%",
            cursor: "pointer"
        }).click(function() {
            $(this).hide();
            sendToSocket({
                type: "nygift"
            });
        }).appendTo(mainDiv);
    }
    b.addClass("snow").addClass("newyear");
    sounds.dedMoroz = createAudio("/media/ded-moroz.mp3");
    inputField.val("не надо снега");
}
function drawToy(el) {
    var cssToy = {
        left: el.x,
        top: el.y
    };
    if (el.t == "") {
        cssToy.opacity = 0.5;
    }
    $('<span class="nytoy' + el.c + '" data-title="' + el.u + '"></span>').css(cssToy).click(function() {
        warningWindow("<blockquote>" + el.t + "</blockquote><em>" + el.u + "</em> (" + showDate(el.d, true) + ")");
    }).appendTo(nytree);
    var nytreeWidth = 1376
      , nytreeHeight = 2000
      , toyLength = 100
      , toyScale = nytreeHeight / toyLength
      , miniToyH = (toyLength * 100 / nytreeHeight) + "%"
      , miniToyW = (toyLength * 100 / nytreeWidth) + "%"
      , marginLeft = "-" + Math.round(0.5 * halltree.height() / toyScale) + "px"
      , cssData = {
        left: (el.x * 100 / nytreeWidth) + "%",
        top: (el.y / toyScale) + "%",
        width: miniToyW,
        height: miniToyH,
        marginLeft: marginLeft
    };
    if (el.t == "") {
        cssData.opacity = 0.5;
    }
    $('<span class="nytoy' + el.c + '"></span>').css(cssData).appendTo(halltree);
}
function showStatistics(data) {
    if (data.params) {
        if (data.params.banner) {
            showWall(data.params.banner, true);
            zastavka = data.params.banner;
        }
        if (data.params.bestplayer && !server2) {
            showNewDiv('<div class="alarm">Лучший игрок месяца - <strong data-id="' + data.params.bestplayer._id + '">' + data.params.bestplayer.login + "</strong></div>");
        }
        if (data.params.support) {
            $("<div/>", {
                "class": "supportButton"
            }).html("Конкурс к Новому году").click(function() {
                showWindow("support");
            }).insertBefore("#lottery");
            var supportWin = $(".support");
            supportWin.find("button").click(function() {
                var text = supportWin.find("textarea").val().substring(0, 1000);
                sendToSocket({
                    type: "support",
                    text: text
                });
                closewindow();
            });
        }
        if (data.params.gifts) {
            var buyGiftsWin = $("<div/>", {
                "class": "buyGifts"
            }).html('<div><figure><img class="box1" src="/images/lots/box1.png" alt="Малый подарок"/><figcaption data-type="1">7 снежинок</figcaption></figure><figure><img class="box2" src="/images/lots/box2.png" alt="Средний подарок"/><figcaption data-type="2">18 снежинок</figcaption></figure><figure><img class="box3" src="/images/lots/box3.png" alt="Большой подарок"/><figcaption data-type="3">33 снежинки</figcaption></figure></div>');
            win.find(".info").append(buyGiftsWin);
            $("<div/>", {
                "class": "buyGiftsButton"
            }).html("Новогодняя Распродажа").click(function() {
                showWindow("buyGifts");
            }).insertBefore("#lottery");
            buyGiftsWin.find("figcaption").click(function() {
                sendToSocket({
                    type: "buyGifts",
                    box: $(this).attr("data-type")
                });
            });
        }
        if (data.params.vkpoll && data.params.vkpoll.title && data.params.vkpoll.code && typeof (VK) !== "undefined") {
            messagesList.append('<div class="news"><em>' + data.params.vkpoll.title + '</em> <input type="checkbox" class="spoiler" id="showvkpoll"/><label for="showvkpoll"></label><div id="vk_poll" style="overflow:hidden"></div></div>');
            VK.Widgets.Poll("vk_poll", {}, data.params.vkpoll.code);
        }
        if (isToday("14.2.2018")) {
            $("<div/>", {
                "class": "supportButton"
            }).css({
                width: "200px",
                height: "102px",
                background: "url(/images/holidays/f14send.png) center no-repeat",
                margin: 0,
                border: 0,
                "box-shadow": "none"
            }).attr("title", "Сделать анонимное признание...").click(function() {
                showWindow("f14Win");
            }).insertBefore("#lottery");
            var f14Win = $("<div/>", {
                "class": "f14Win"
            }).html('<p>Только 14 февраля у Вас есть уникальная возможность анонимно признаться кому-то в любви или просто поздравить с Днем всех влюбленных!</p><textarea placeholder="Я люблю..." maxlength="1000"></textarea><button class="button">Отправить</button>').appendTo(win.find(".info"));
            f14Win.find("button").click(function() {
                var text = f14Win.find("textarea").val().substring(0, 1000);
                sendToSocket({
                    type: "f14msg",
                    text: text
                });
                closewindow();
                f14Win.find("textarea").val("");
            });
            $.cachedScript("/js/hearts.js").done(function(script, textStatus) {
                if (fall && !b.hasClass("noeffect")) {
                    fall();
                }
            });
        }
    }
    var div100p = function(v1, v2, text) {
        var div = $("<div/>").addClass("percent")
          , innerDiv = $("<div/>")
          , sum = v1 + v2
          , p1 = Math.round(v1 * 100 / sum)
          , p2 = Math.round(v2 * 100 / sum);
        $("<em/>").html(text).appendTo(div);
        $("<span/>").html(v1).css("width", p1 + "%").appendTo(innerDiv);
        $("<span/>").html(v2).css("width", p2 + "%").appendTo(innerDiv);
        innerDiv.appendTo(div);
        return div;
    };
    var st1 = data["game-bot"]
      , st2 = data["game-all"];
    $("<h3>Cтатистика игровых партий: " + over1000(st2.count) + "</h3>").appendTo(statDiv);
    div100p(st1.pl, st1.bot, "Победы в Противостоянии: Игроки - Боты").appendTo(statDiv);
    div100p(st2.win.stud, st2.win.poh, "Победы игровых сторон: " + (isMaffia ? "Мирные граждане - Мафия" : "Студенты - Похитители")).appendTo(statDiv);
    if (data.map) {
        mapAreas = data.map.areas;
    }
    if (data.roulette) {
        rouletteInfo(data.roulette);
    }
    if (data.tree && data.tree === true && !server2) {
        sendToSocket({
            type: "tree"
        });
    }
}
var itemsArray = {
    "7": "Сертификат на бесплатное объявление",
    "8": "Элемент Коллекции Активист",
    "9": "Элемент Клубной Коллекции",
    "10": "Новогодняя игрушка",
    "11": "VIP-абонемент на 1 день",
    "12": "Сертификат на бесплатную суперигру",
    "13": "Билет на Барабан чудес",
    "14": "Кошелек с монетами (16 000)",
    "15": "Купон на заказ праздничного салюта (не чаще 1 раза в 20 секунд)",
    "16": "Сертификат на быструю суперигру",
    "17": "Элемент Новогодней Коллекции 2017",
    "18": "Снежинка",
    "19": "Сертификат на создание СуперМикса",
    "20": "Скидочная карта -50% на покупки в игровой партии",
    "21": "Шубка деда мороза (+20% к бессмертию)",
    "22": {
        ffl: "Морковка снеговика (+25% к шансу стать ревнивым студентом)",
        maffia: "Морковка снеговика (+25% к шансу стать маньяком)"
    },
    "23": "Шапка снегурочки (+40% к интуиции)",
    "24": "*",
    "2018": "Элемент Новогодней Коллекции 2018"
};
var getItemsArray = function(i) {
    return (typeof itemsArray[i] === "object") ? (isMaffia ? itemsArray[i].maffia : itemsArray[i].ffl) : itemsArray[i];
};
function showBox(data) {
    var text = '<div class="box">';
    for (var ind in data.box) {
        if (data.box.hasOwnProperty(ind)) {
            var title = (ind > 0 && ind < 7) ? roleText[gameMode()]["items"][ind] : getItemsArray(ind);
            text += '<div data-title="' + title + '" class="items-' + ind + '">';
            if (data.box[ind] > 1) {
                text += "<span>" + data.box[ind] + "</span>";
            }
            text += "</div>";
        }
    }
    text += "</div>";
    warningWindow(data.text + ":<br/>" + text);
}
function itemAction(e) {
    modalWindow("Активировать предмет?", function() {
        sendToSocket({
            type: "items",
            action: e.data.item
        });
    });
}
function showInventory() {
    if (u.items) {
        var inventar = win.find(".inventory");
        inventar.empty();
        if (Object.size(u.items) > 0 || u.bonus) {
            for (var i in u.items) {
                if (u.items.hasOwnProperty(i)) {
                    if (i != "nytoys" && u.items[i] > 0) {
                        var title = (i > 0 && i < 7) ? roleText[gameMode()]["items"][i] : getItemsArray(i)
                          , curItem = $("<div></div>").attr("data-title", title).addClass("items-" + i);
                        if (u.items[i] > 1) {
                            curItem.html("<span>" + u.items[i] + "</span>");
                        }
                        if (["7", "12", "13", "18"].indexOf(i) >= 0) {
                            curItem.css({
                                cursor: "auto"
                            }).click(function() {
                                showMessage("Этот предмет пригодится Вам в соответствующей локации");
                            });
                        } else {
                            curItem.click({
                                item: i
                            }, itemAction);
                        }
                        curItem.appendTo(inventar);
                    }
                }
            }
            if (u.bonus || u.tempbonus) {
                var bonusBox = $("<section/>", {
                    "class": "bonus-ring"
                });
                for (var ind in u.bonus) {
                    if (u.bonus.hasOwnProperty(ind)) {
                        var fullBonus = ((u.tempbonus && u.tempbonus.deca) ? "10x" : "") + u.bonus[ind] + "%";
                        $("<div/>", {
                            "class": "bonus-" + ind,
                            "data-title": bonusRings[ind]
                        }).css({
                            cursor: "auto"
                        }).html("<span>" + fullBonus + "</span>").appendTo(bonusBox);
                    }
                }
                if (u.tempbonus) {
                    if (u.tempbonus.all1) {
                        $("<div/>", {
                            "class": "items-17",
                            "data-title": "Новогодняя коллекция 2017 (до " + showDate(u.tempbonus.all1) + ")"
                        }).css({
                            cursor: "auto"
                        }).html("<span>+1%</span>").appendTo(bonusBox);
                    }
                    if (u.tempbonus.anticat) {
                        $("<div/>", {
                            "class": "items-2018",
                            "data-title": "Новогодняя коллекция 2018 (до " + showDate(u.tempbonus.anticat) + ")"
                        }).css({
                            cursor: "auto"
                        }).html("<span>+10%</span>").appendTo(bonusBox);
                    }
                    if (u.tempbonus.discount) {
                        $("<div/>", {
                            "class": "items-20",
                            "data-title": getItemsArray(20) + " (до " + showDate(u.tempbonus.discount, true) + ")"
                        }).css({
                            cursor: "auto"
                        }).html("<span>-50%</span>").appendTo(bonusBox);
                    }
                    if (u.tempbonus.nokill20) {
                        $("<div/>", {
                            "class": "items-21",
                            "data-title": getItemsArray(21) + " (до " + showDate(u.tempbonus.nokill20, true) + ")"
                        }).css({
                            cursor: "auto"
                        }).html("<span>+20%</span>").appendTo(bonusBox);
                    }
                    if (u.tempbonus.rev25) {
                        $("<div/>", {
                            "class": "items-22",
                            "data-title": getItemsArray(22) + " (до " + showDate(u.tempbonus.rev25, true) + ")"
                        }).css({
                            cursor: "auto"
                        }).html("<span>+25%</span>").appendTo(bonusBox);
                    }
                    if (u.tempbonus.intuit40) {
                        $("<div/>", {
                            "class": "items-23",
                            "data-title": getItemsArray(23) + " (до " + showDate(u.tempbonus.intuit40, true) + ")"
                        }).css({
                            cursor: "auto"
                        }).html("<span>+40%</span>").appendTo(bonusBox);
                    }
                }
                bonusBox.appendTo(inventar);
            }
        } else {
            inventar.append("<h5>У Вас пока нет ни одного полезного предмета.</h5>");
        }
    }
}
function areaAttack(areaNum) {
    if (u.money >= 2000) {
        sendToSocket({
            type: "area",
            num: areaNum
        });
        closewindow();
    } else {
        showMessage("Недостаточно средств для начала битвы.");
    }
}
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
            money2: 1000
        }, {
            money2: 5000
        }, {
            money2: 10000
        }],
        ranks: ["Случайный прохожий", "Посетитель", "Бывалый клиент", "Постоянный клиент", "Завсегдатай", "Частый гость", "Хозяин"]
    },
    2: {
        title: "Создавать игровые заявки",
        values: [10, 50, 100, 500, 1000, 2000, 5000],
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
            money2: 1000
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
            money2: 1000
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
            money2: 2000
        }],
        ranks: ["Лишний на празднике", "Случайный гость", "Визитер", "Член клуба", "Почетный участник", "Клубный заводила", "Элитный член"]
    },
    5: {
        title: 'Потратить в магазине <span class="gamemoney">деньги</span>',
        values: [3000, 10000, 50000, 100000, 500000, 1000000, 30000000],
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
            money2: 1000
        }, {
            money2: 2000
        }],
        ranks: ["Жмот", "Скряга", "Экономист", "Покупатель", "Оптовик", "Транжира", "Платиновый клиент"]
    },
    6: {
        title: 'Потратить в магазине <span class="money">валюту</span>',
        values: [5, 20, 50, 100, 1000, 10000, 30000],
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
            money: 1000
        }],
        ranks: ["Инвестор", "Богач", "Толстосум", "Буржуй", "Воротила", "Олигарх", "Мультимиллиардер"]
    },
    7: {
        title: 'Приобрести в магазине <span class="for-ffl">Веб-камеру</span> <span class="for-maffia">Рацию</span>',
        values: [1, 5, 10, 50, 100, 500, 1000],
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
        values: [10, 50, 100, 500, 1000, 5000, 10000],
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
        values: [5, 30, 50, 100, 500, 1000, 5000],
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
        values: [50, 100, 500, 1000, 5000, 10000, 50000],
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
            money2: 1000
        }, {
            money2: 5000
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
        values: [10, 50, 100, 500, 1000, 5000, 10000],
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
        values: [5, 25, 50, 300, 500, 2000, 5000],
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
        values: [3, 10, 30, 100, 300, 1000, 3000],
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
        values: [3, 10, 20, 100, 300, 1000, 2000],
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
        values: [3, 10, 20, 100, 300, 1000, 2000],
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
        values: [7, 40, 80, 400, 900, 4000, 8000],
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
            money2: 1000
        }],
        ranks: ["Абитуриент|Приезжий", "Первокурсник|Гастарбайтер", "Второкурсник|Турист", "Третьекурсник|Переселенец", "Четверокурсник|Коренной", "Пятикурсник|Уважаемый человек", "Аспирант|Почетный гражданин"]
    },
    21: {
        title: 'Выиграть за роль <span class="for-ffl">похитителя</span> <span class="for-maffia">мафиози</span>',
        values: [3, 20, 30, 100, 300, 1500, 3000],
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
            money2: 1000
        }],
        ranks: ["Барсеточник|Рэкетир", "Жулик|Бандит", "Мошенник|Гангстер", "Вор|Элитный мафиозо", "Грабитель|Капитан мафии", "Вор в законе|Консильери", "Депутат|Крёстный отец"]
    },
    22: {
        title: 'Выиграть за роль <span class="for-ffl">дежурного</span> <span class="for-maffia">комиссара</span>',
        values: [2, 7, 20, 70, 200, 600, 2000],
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
            money2: 1000
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
            money2: 1000
        }],
        ranks: ["Тихоня|Подозрительный тип", "Флегматик|Странная личность", "Само спокойствие|Безумец", "Излишняя подозрительность|Шизик", "Настороже|Психопат", "Тлеющая искра|Одержимый", "Вулкан страсти|Виртуоз ножа"]
    },
    24: {
        title: 'Выиграть за роль <span class="for-ffl">лунатика</span> <span class="for-maffia">доктора</span>',
        values: [2, 6, 12, 50, 150, 500, 1000],
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
            money2: 1000
        }],
        ranks: ["Засоня|Медик-практикант", "Сонная тетеря|Интерн", "Бодрствующий|Ординатор", "Жертва бессонницы|Врач", "Ночной охотник|Заведующий отделением", "Недремлющее око|Главный врач", "Несущий возмездие во имя Луны|Профессор медицины"]
    },
    25: {
        title: 'Вытянуть <span class="for-ffl">билет</span> <span class="for-maffia">карту</span> с ролью <span class="for-ffl">студента</span> <span class="for-maffia">гражданина</span>',
        values: [50, 100, 500, 1000, 5000, 10000, 30000],
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
        values: [20, 50, 200, 800, 2000, 7000, 12000],
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
        values: [1, 5, 10, 50, 100, 500, 1000],
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
        values: [10, 30, 100, 500, 1000, 5000, 10000],
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
        values: [10, 30, 90, 400, 900, 4000, 8000],
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
        values: [10, 30, 100, 500, 1000, 5000, 10000],
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
        values: [10, 30, 90, 400, 900, 4000, 8000],
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
};
var bonusRings = {
    intuit: "Амулет &quot;Шестое чувство&quot;<br/> наделяет Вас способностями видеть роли игроков",
    nokill: "Кристалл вечной жизни<br/> может спасти вашу жизнь в самой безнадежной ситуации",
    poh: "Тёмное кольцо<br/> пробуждает в своем обладателе силы темной стороны",
    rev: "Светлое кольцо<br/> пробуждает в своем хозяине чрезмерную эмоциальность, сводит с ума"
};
function progressRewardType(type) {
    var out;
    switch (type) {
    case "money":
        out = "gamemoney";
        break;
    case "money2":
        out = "money";
        break;
    default:
        out = i + "-icon";
    }
    return out;
}
function progressReward(obj) {
    var rewardHtml = "";
    for (i in obj) {
        if (obj.hasOwnProperty(i)) {
            rewardHtml += '<span class="' + progressRewardType(i) + '">' + ((i == "money") ? over1000(obj[i] * 1000) : obj[i]) + "</span>";
        }
    }
    return rewardHtml;
}
function progressPersent(obj, i, curRang) {
    var prevStep = (curRang > 0) ? quests[i].values[curRang - 1] : 0
      , persent = (curRang >= maxProgressRank) ? 100 : Math.ceil((obj[i] - prevStep) * 100 / (quests[i].values[curRang] - prevStep));
    if (persent > 100) {
        persent = 100;
    }
    return persent + "%" + ((persent == 100 && curRang != 7) ? '" data-title="Чтобы получить достижение, выполните задание еще 1 раз' : "");
}
function progressRank(i, curRang) {
    var out = ""
      , ranks = ["Новичок", "Начинающий", "Бывалый", "Опытный", "Матерый", "Искушенный", "Постоянный"]
      , ticketRanks = ["Скромный", "Начинающий", "Известный", "Знаменитый", "Авторитетный", "Прославленный", "Идеальный"];
    i = parseInt(i);
    switch (i) {
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        out = (curRang == 0) ? roles(quests[i].role).name + "-" + ranks[curRang] : ranks[curRang] + " " + roles(quests[i].role).name.toLowerCase();
        break;
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
        out = ticketRanks[curRang] + " " + roles(quests[i].role).name.toLowerCase();
        break;
    default:
        out = (quests[i].ranks) ? ((quests[i].ranks[curRang].indexOf("|") > 0) ? quests[i].ranks[curRang].split("|")[isMaffia ? 1 : 0] : quests[i].ranks[curRang]) : "***";
    }
    return out;
}
function showProgressList(obj, pr, already) {
    progressTime = Date.now() + 300000;
    if (pr) {
        u.progress = pr;
    }
    if (!u.progress) {
        u.progress = {};
    }
    var progressList = win.find(".myprogress");
    progressList.html("");
    if (obj) {
        var blockNum = 0
          , ringObj = {
            7: "intuit",
            14: "nokill",
            24: "poh",
            31: "rev"
        };
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                var curRang = u.progress[i] || 0, div = $("<div/>").append('<div class="progress-image progress' + curRang + '"></div>').append('<div class="progress-content"></div>').append('<div class="progress-bar"><div style="width:' + progressPersent(obj, i, curRang) + '"></div>'), contentHtml;
                if (curRang >= maxProgressRank) {
                    contentHtml = "<div></div><div>" + quests[i].title + "</div><div></div><div>" + obj[i] + "/∞</div>";
                    $(".progress-content", div).addClass("progress-done");
                } else {
                    contentHtml = "<div>" + progressRank(i, curRang) + "</div><div>" + quests[i].title + '</div><div data-title="Награда за выполнение">' + progressReward(quests[i].prize[curRang]) + "</div><div>" + obj[i] + "/" + quests[i].values[curRang] + "</div>";
                }
                $(".progress-content", div).html(contentHtml);
                progressList.append(div);
                if (ringObj.hasOwnProperty(i)) {
                    ++blockNum;
                    var bonusButton = $("<p/>", {
                        "class": "button bonus-ring"
                    }).html('<div class="bonus-' + ringObj[i] + '"></div><span></span>');
                    if (already && already.indexOf(blockNum) > -1) {
                        $("span", bonusButton).html((u.progress["block" + blockNum]) ? "Усилить предмет" : "Забрать бонус");
                        bonusButton.click(blockNum, function(e) {
                            sendToSocket({
                                type: "progress-bonus",
                                block: e.data
                            });
                            progressTime = 0;
                        });
                    } else {
                        bonusButton.addClass("progress-button-noactive");
                        $("span", bonusButton).html("Бонус недоступен");
                    }
                    bonusButton.appendTo(progressList);
                }
            }
        }
    }
}
lotteryDiv.find("button").click(function() {
    showWindow("lottery");
});
lotteryDiv.find("p").click(function() {
    modalWindow("Скрыть обратный отсчёт до следующей лотереи?", function() {
        clearInterval(lotteryInterval);
        var allLost = u.lottery - datenow();
        if (allLost > 0) {
            lotteryInterval = setInterval(lotteryTimer, 1000);
            lotteryDiv.find("p").hide();
        } else {
            lotteryTimer();
        }
    });
});
var lotteryInterval, lotteryQuery = false, lotteryTimerStart = function() {
    lotteryTimer();
    lotteryDiv.find("p").fadeIn();
    lotteryInterval = setInterval(lotteryTimer, 1000);
}, lotteryTimer = function() {
    var lost = Math.round((u.lottery - datenow()) / 1000);
    if (lost > 0) {
        var minutes = Math.floor(lost / 60)
          , seconds = lost % 60;
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        lotteryDiv.find("p").html(minutes + ":" + seconds);
    } else {
        clearInterval(lotteryInterval);
        lotteryDiv.find("button").show();
        lotteryDiv.find("p").hide();
    }
};
var rouletteForm = $(".rouletteForm")
  , rouletteWas = function() {
    return (u.roulette && isToday(u.roulette));
}
  , rouletteDisable = function(show) {
    if (show) {
        rouletteForm.find("label").show();
        rouletteForm.find("button").show();
        rouletteForm.hide();
    } else {
        rouletteForm.show();
        rouletteForm.find("label").hide();
        rouletteForm.find("button").hide();
    }
}
  , rouletteInfo = function(data, update) {
    var rRes = $("#rouletteResult").find("p");
    rRes.html("");
    if (data.hasOwnProperty("sum")) {
        rRes.eq(0).html("Сделано ставок на общую сумму: " + data.sum);
    }
    if (data.hasOwnProperty("last")) {
        rRes.eq(1).html("Результат вчерашнего розыгрыша: " + data.last);
    }
    if (data.winners && data.winners.length > 0) {
        rRes.eq(2).html("Cчастливчики: " + data.winners.join(", "));
    }
}
  , rouletteTable = function() {
    var rTable = $("#rouletteTable")
      , row1 = $("<tr/>")
      , row2 = $("<tr/>")
      , row3 = $("<tr/>");
    row1.append('<th rowspan="3">0</th>');
    for (var i = 0; i < 12; i++) {
        $("<td/>").html(3 * i + 3).appendTo(row1);
        $("<td/>").html(3 * i + 2).appendTo(row2);
        $("<td/>").html(3 * i + 1).appendTo(row3);
    }
    rTable.append(row1).append(row2).append(row3);
    rTable.click(function(e) {
        if (rouletteWas()) {
            showMessage("Можно сделать только одну ставку в день. Приходите завтра.");
            return;
        }
        var event = e || window.event
          , target = event.target || event.srcElement;
        if (target.tagName == "TD" || target.tagName == "TH") {
            rouletteForm.find("span").html(target.innerHTML);
            rouletteForm.show();
        }
    });
};
rouletteTable();
rouletteForm.find("button").click(function() {
    var betSum = parseInt(rouletteForm.find("input").val());
    if (!betSum) {
        showMessage('Ставка должна быть больше <span class="gamemoney">1 000</span>');
    } else {
        if (betSum * 1000 > u.money) {
            showMessage("Ставка превышает сумму ваших сбережений");
        } else {
            sendToSocket({
                type: "roulette",
                num: rouletteForm.find("span").html(),
                bet: betSum
            });
        }
    }
});
roulette.click(function() {
    if (rouletteWas()) {
        rouletteDisable();
    }
    showWindow("roulette");
});
var zastavka;
showWall(isMaffia ? "maffia/start.jpg" : "start.jpg");
function loadImageFiles() {
    for (var k = 0; k <= 9; k++) {
        new Image().src = "/images/walls/" + ((k == 0) ? "0.gif" : k + ".jpg");
    }
    for (var mk = 1; mk <= 9; mk++) {
        new Image().src = "/images/walls/maffia/" + mk + ((mk < 8) ? ".png" : ".jpg");
    }
    ["/images/avatars.png", "/images/avatars-max.png", "/images/avatars-min.png", "/images/gifts1.png", "/images/gifts2.png", "/images/gifts3.png?251217", "/images/gifts4.png?210218", "/images/maffia/char-background.jpg", "/images/maffia/roll.png", "/images/roll.svg", "/images/walls/wedding1.jpg", "/images/walls/wedding2.jpg"].forEach(function(el) {
        new Image().src = el;
    });
}
$.cachedScript = function(url, options) {
    options = $.extend(options || {}, {
        dataType: "script",
        cache: true,
        url: url
    });
    return jQuery.ajax(options);
}
;
$(document).ready(function() {
    createSmilePanel();
    $(".gamesheader>.row1").click(function() {
        sortTable(1);
    });
    $(".gamesheader>.row2").click(function() {
        sortTable(2);
    });
    $(".gamesheader>.row3").click(function() {
        sortTable(3);
    });
    $(".gamesheader>.row4").click(function() {
        sortTable(4);
    });
    $(".gamesheader>.row5").click(function() {
        sortTable(5);
    });
    $(".gamesheader>.row6").click(function() {
        sortTable(6);
    });
    shop.find("p").addClass("moneyblock").html('Ваш счёт <span class="gamemoney"></span> <span class="money"></span>');
    for (var i = 1; i < 7; i++) {
        var pr1 = prices["i" + i]
          , pr2 = prices["i" + i] * 0.8
          , pr3 = prices["ir" + i];
        $("#shop" + i + " .gamemoney").html(over1000(pr1) + '<hr/><span class="gamemoney">' + over1000(pr2) + "</span>");
        $("#shop" + i + " .money").html(over1000(pr3));
    }
    for (var col in collectionsData) {
        if (collectionsData.hasOwnProperty(col)) {
            collectionWin.append('<input id="collect' + col + '" type="radio" name="collects" value="' + col + '"/><label for="collect' + col + '">' + collectionsData[col].title + "</label>");
        }
    }
    collectionWin.append("<p></p><div></div>");
    collectRadio = collectionWin.find('input[type=radio][name="collects"]');
    collectRadio.change(function() {
        showCollect(this.value);
    });
    if (socketConnect) {
        if (!mobile) {
            socketConnect();
        }
    } else {
        console.log("socketConnect undefined");
    }
    $('<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">').appendTo("body");
    $.cachedScript("https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js").done(function(script, textStatus) {
        mW.find(".modal").draggable();
    });
    if (isAppVK) {
        outside.append('<div id="roll-start" class="button-roll"></div>');
        $("#roll-start").click(function() {
            showWindow("roll");
        });
    } else {
        outside.append('<img src="/images/calendar.png" alt="Расписание специальных партий"/>');
    }
    loadImageFiles();
    if (!islocalStorage) {
        showNewDiv('<div class="important">В вашем браузере запрещено сохранение данных от веб-сайтов, поэтому некоторые настройки и функции будут недоступны</div>');
    }
});
var kinderMode = false;
function maffiaNEW() {
    if (b.hasClass("maffianew") || mobile) {
        return;
    }
    inputField.attr("placeholder", "");
    $("#statusText").attr("placeholder", "введите описание");
    $("header>h3.button-findgame").html("Мне повезет!");
    $("#selectChar").appendTo(header);
    $("#scrolling+label").prependTo(".panel-top");
    $("#scrolling").prependTo(".panel-top");
    $("#smiles").appendTo(".panel-top");
    $(".tooltip").appendTo(b);
    $("#gameWidth").parent().hide();
    $("article>h2").html("Набор в игру");
    $("<div/>").addClass("nickblock").append($("#nick")).append($("header>.moneyblock")).appendTo(header);
    over1000 = function(num) {
        return num;
    }
    ;
    game.setBankLines = function(banks) {
        $(".studBank").css("width", Math.round(banks[0] / game.startBanks * 100) + "%");
        $(".robbBank").css("width", Math.round(banks[1] / game.startBanks * 100) + "%");
        $(".allBank").css("width", Math.round(banks[2] / game.startBanks * 100) + "%");
        $(".winBank").css("width", Math.round(banks[3] / game.startBanks * 100) + "%");
    }
    ;
    game.recalculateBanks = function(banks, start) {
        if (!banks) {
            return;
        }
        if (start) {
            gametitle.append('<div class="studBank"></div><div class="robbBank"></div><div class="allBank"></div><div class="winBank"></div>');
            game.startBanks = banks[0] + banks[1] + banks[2] + banks[3];
            game.setBankLines(banks);
        } else {
            game.setBankLines(banks);
        }
        if (banks[0]) {
            animateNumber("studBank", banks[0]);
        }
        if (banks[1]) {
            animateNumber("robbBank", banks[1]);
        }
        if (banks[2]) {
            animateNumber("allBank", banks[2]);
        }
        if (banks[3]) {
            animateNumber("winBank", banks[3]);
        }
    }
    ;
    container.removeAttr("style");
    $('<link rel="stylesheet" href="/css/maffia-new.css?50118">').appendTo(b);
    maffiaCheckbox.prop("checked", true);
    isMaffia = true;
    showGroupWidget();
    updateInterface();
    b.addClass("maffia maffianew");
    kinderMode = true;
}
$(window).resize(function() {
    editProfileSize();
    if (halltree) {
        halltree.css({
            width: parseInt(mainDiv.height() * 0.6536)
        });
    }
});
var roles = function(roleId) {
    var fflRoles = {
        none: {
            name: "[роль недоступна]",
            button: []
        },
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
            icon: "adv",
            button: ["Оправдывать"]
        }
    };
    var maffiaRoles = {
        none: {
            name: "[роль недоступна]",
            button: []
        },
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
            icon: "adv",
            button: ["Защищать"]
        }
    };
    return (isMaffia) ? maffiaRoles[roleId] : fflRoles[roleId];
};
var gameMode = function() {
    return (isMaffia) ? "maffia" : "ffl";
};
var roleText = {
    ffl: {
        roleinfo: {
            "0": "Вы - наблюдатель, поэтому не мешайте играть участникам.",
            "1": "Вы - студент. Днём голосуйте против похитителей, а ночью старайтесь не привлекать их внимания своим храпом.",
            "2": "Вы - похититель. Чтобы выиграть, вам нужно сорвать День Любви, оставив студентов без подарков.",
            "3": "Вы - глава похитителей, выиграйте, оставив студентов без подарков к празднику. У вас есть уникальная возможность совершать 2 действия за 1 ночь.",
            "4": "Вы - дежурный. Ночью ищите похителей, а днём подвергайте их справедливому изгнанию из общежития.",
            "5": "Вы - помощник дежурного. Чтобы победить, вам нужно изгнать всех похитителей. Ждите своего часа, а пока... делайте вид, что активно помогаете дежурному.",
            "6": "Вы - ревнивый студент. Ваша цель - избавиться от похитителей. Днём выводите их на голосование, а ночью изымайте у них подарки.",
            "7": "Вы - лунатик. Ночью вместо кровати выбирайте себе место возле чьей-то двери. Может это помешает похитителям совершить кражу.",
            "8": "Вы - котик. Ночью своими играми мешайте игрокам, а днем все-таки ищите похитителей.",
            "9": "Вы - вахтер. Как вахтеру Вам очень хочется отменить предстоящий праздник, помогите похитителям его сорвать. Защищайте их от гнева и возмедия студентов с помощью кнопки <b>Защитить</b>.<br/> Помните, что Вы не можете обеспечить кому-то защиту на сутки 2 раза подряд."
        },
        nightActions: {
            "1": "Студент спокойно спит.",
            "2": "Похититель выбрал подходящую комнату для ограбления.",
            "3": "Глава похитителей закрыл кого-то в комнате",
            "4": "Дежурный решил проверить подозрительную комнату.",
            "5": "Помощник дежурного спокойно спит.",
            "6": "Ревнивый студент в порыве ревности ворвался в чью-то комнату.",
            "7": "Лунатик отправился на ночную прогулку в известном только одному ему направлении.",
            "8": "Неутомимый котик опять решил с кем-то поиграть.",
            "9": "Вахтёр решил обеспечить кому-то из студентов алиби.",
            robbers: {
                msg: "[nick] хочет украсть подарок у студента [target]",
                self: "Похититель [nick] - альтруист.",
                his: "Похититель [nick] хочет украсть подарок у своего подельника. Как говорится, грабь награбленное!"
            }
        },
        morningInfo: {
            "1": "Студент отлично выспался.",
            "2": "Ночью [nick] - [role] - не сберег подарка.",
            "3": "Глава похитителей запер на сутки игрока [nick] в своей комнате.",
            "4": "Ночью дежурный проверил комнату игрока [nick]. Кем же оказался подозреваемый?",
            "5": "Помощник дежурного всю ночь делал вид, что помогает дежурному.",
            "6": "[role] [nick] попал под раздачу ревнивого студента.",
            "7": "Всю ночь лунатик провел возле комнаты студента [nick].",
            "8": "Из-за милого котика студент [nick] всю ночь не сомкнул глаз.",
            "4x": "Дежурный спугнул ночного гостя из комнаты студента [nick].",
            "7x": "Ночью лунатик лунатил не зря, не дав проникнуть злоумышленнику в комнату студента [nick].",
            "8x": "[role] - [nick], заигравшись с другом, не уберег своего подарка.",
            "9": "[nick] получает иммунитет на следующие сутки.",
            "9x": "Студенту [nick] удалось сохранить свой подарок, благодаря полученному иммунитету.",
            lock: "Замок преградил путь ночному гостю в комнату одного из cтудентов",
            mylock: '<div class="green">Ваш замок был испорчен таинственным ночным посетителем!</div>'
        },
        periodStart: {
            "1": "Наступила ночь. Студентам пора спать, тем временем похитители замышляют недоброе.",
            "2": "Наступил день. Для студентов утро добрым не бывает...",
            "3": "Последнее слово подозреваемому! Что же было на самом деле?",
            "4": "Наступило время голосования! Пора принимать решение!"
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
                "true": {
                    1: " почему-то не спала сегодня ночью. Может она принимала участие в краже?",
                    2: " почему-то не спал сегодня ночью. Может он принимал участие в краже?"
                },
                "false": {
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
        intuitionStart: 'В этой игре задача каждого участника - определить игрока с ролью противоположной стороны и проголосовать против него днем! Похитители голосуют против дежурного, его помощника и лунатика, а студенты - против похитителей.<br/> За каждую правильно угаданную роль игроки будут получать баллы: <blockquote>для студентов: <span class="hrobb"></span> - 3, <span class="robb"></span> - 2, <span class="adv"></span> - 1, <span class="jeal"></span> - 1<br/> для похитителей: <span class="duty"></span> - 3, <span class="assis"></span> - 2, <span class="sleep"></span> - 2, <span class="jeal"></span> - 1 </blockquote>',
        newDuty: "Место дежурного занимает его помощник. Новый дежурный уж точно не оставит похитителям никаких шансов!",
        bossChild: "Место главы похитителей занимает его незаконно рожденный ребенок!",
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
            womenwin: "Победили девочки"
        },
        reward: {
            "1": 'Даже простым студентом вы не теряете самообладания и жажды победы.<br/> За помощь в проведении праздника Дня Любви профком наградил вас <em>Активной ролью</em> на 1 час <div class="shop-item3"></div>',
            "2": 'Вам это удалось!<br/> Вы успешно сорвали праздник, в благодарность Совет похитителей<br/> дарит вам прекрасную возможность отдохнуть в <em>Академическом отпуске</em> <div class="shop-item5"></div>',
            "3": 'Вам это удалось!<br/> Вы успешно сорвали праздник, доказав, кто здесь главный.<br/> Теперь Вы можете отдохнуть в <em>Академическом отпуске</em> <div class="shop-item5"></div>',
            "4": 'Прекрасная работа, дежурный!<br/> У похитителей не было шансов.<br/> Находить злоумышленников вдвое быстрее вам помогут вкусные <em>печеньки</em> <div class="shop-item4"></div>',
            "5": 'Вы - отличный помощник дежурного!<br/> Без вас этот праздник Любви мог и не состояться.<br/> <em>Печеньки</em> помогут вам и в следующий раз отыскать похитителей <div class="shop-item4"></div>',
            "6": 'Ваша несдержанность помогла студентам нарушить коварный замысел похитителей!<br/> Но в следующей игре постарайтесь держать свою ревность под <em>замком</em> <div class="shop-item2"></div>',
            "7": 'Не зря вы не высыпались все эти дни!<br/> Праздник Любви состоится!<br/> Что об этом думают похитители?<br/> это вам подскажет чудо техники - <em>веб-камера</em>! <div class="shop-item1"></div>',
            "8": 'Как иногда внешность бывает обманчива!<br/> Милому котику удалось остановить банду похитителей подарков.<br/> Чтобы их месть не настигла Вас, закройтесь на оба <em>замка</em> <div class="shop-item2">2</div>',
            "9": 'Вам это удалось!<br/> Вы успешно сорвали праздник, в благодарность Совет похитителей<br/> дарит Вам тройку <em>замков</em> для вашей защиты <div class="shop-item2">3</div>'
        },
        items: {
            "1": "Веб-камера в упаковке",
            "2": "Замок в коробке",
            "3": "Абонемент Активная роль на 1 час",
            "4": "Пачка печенья",
            "5": "Чистый бланк для академического отпуска",
            "6": "Пропуск в Клуб ФФЛ на 1 день"
        }
    },
    maffia: {
        roleinfo: {
            "0": "Вы - свидетель, поэтому не мешайте другим участникам.",
            "1": "Вы - Честный гражданин!<br/> Вы выиграете, казнив всех мафиози. Днем с помощью кнопки <b>Голосовать</b> голосуйте против тех, кого подозреваете.",
            "2": "Вы - Мафиози!<br/> Вы победите, убив всех граждан, а также маньяка. Ночью убивайте выбранную жертву с помощью кнопки <b>Убить</b>. Днем притворяйтесь гражданином и голосуйте против неугодных вам с помощью кнопки <b>Голосовать</b>.",
            "3": "Вы - Босс мафии! Вы победите, убив всех граждан, а также маньяка. Ночью кнопкой <b>Заморозить</b> Вы лишаете кого-то действий на сутки. И кнопкой <b>Убить</b> кого-то убивайте. Днем притворяйтесь гражданином и голосуйте против неугодных вам кнопкой <b>Голосовать</b>.",
            "4": "Вы - Комиссар!<br/> Вы выиграете, если казните всех мафиози, проголосовав днем с помощью кнопки <b>Голосовать</b>. Ночью вы можете узнать роль персонажа с помощью кнопки <b>Проверить</b>.",
            "5": "Вы - Сержант!<br/> Сотрудничайте с комиссаром. Вы выиграете, если казните всех мафиози, проголосовав днем с помощью кнопки <b>Голосовать</b>. Если комиссара убьют, его место займете Вы.",
            "6": "Вы - Mаньяк!<br/> Вы выиграете, убив всех мафиози. Ночью с помощью кнопки <b>Убить</b> Вы расправляетесь с ненавистными персонажами. Днем голосуете против них с помощью кнопки <b>Голосовать</b>.",
            "7": "Вы - Доктор!<br/> Вы выиграете, если казните всех мафиози, проголосовав днем с помощью кнопки <b>Голосовать</b>. Ночью с помощью кнопки <b>Лечить</b> Вы можете спасти одного из граждан.",
            "8": "Вы - кот. Ночью вы можете лишить действий любого игрока, выбрав его объектом своих игр. Будьте осторожны, если он будет убит, вас ждет та же учесть. Вы выиграете, когда вся мафия будет уничтожена.",
            "9": "Вы - адвокат, играете на стороне мафии. Чтобы выиграть, постарайтесь найти членов мафии и с помощью кнопки <b>Защищать</b> спасти ее от расправы и возмездия жителей города.<br/> Помните, что Вы не можете обеспечить кому-то защиту на сутки 2 раза подряд."
        },
        nightActions: {
            "1": "",
            "2": "Один из мафиози выбрал гражданина для убийства.",
            "3": "Босс мафии выбрал, кого заморозить.",
            "4": "Комиссар выбрал, кому из граждан нанести визит. Надеемся, что он разоблачит мафиози или маньяка.",
            "5": "",
            "6": "Маньяк выбрал жертву. Ни сна ни отдыха измученной душе...",
            "7": "Доктор выехал на вызов.",
            "8": "Спокойно и вальяжно, как ему и подобает, кот направился к одному из граждан.",
            "9": "Адвокат взял под свою защиту кого-то из граждан.",
            robbers: {
                msg: "[nick]: Надо убить [target]",
                self: "Мафиози [nick] - самоубийца.",
                his: "Бегемот [nick], зачем ты бьешь своего?"
            }
        },
        morningInfo: {
            "1": "",
            "2": "Ночью мафиози убили персонажа [nick] - [role].",
            "3": "Ночью боссом мафии был заморожен на 1 сутки [nick]. Нам будет не хватать его мнения.",
            "4": "Персонаж [nick] был проверен комиссаром. Кем же оказался проверяемый?",
            "5": "",
            "6": "Персонаж [nick] - [role] убит маньяком.",
            "7": "Доктор посетил персонажа [nick]. Он оказался совершенно здоровым.",
            "8": "Кот не давал спать всю ночь игроку [nick].",
            "4x": "Комиссар спугнул преступника, который хотел убить персонажа [nick].",
            "7x": "Ночью действиями реанимационной бригады был спасен от гибели персонаж [nick].",
            "8x": "Рядом с телом жертвы был обнаружен мёртвый [role] - [nick]",
            "9": "[nick] благодаря своему адвокату получил неприкосновенность на следующие сутки.",
            "9x": "Благодаря адвокату и его работе [nick] сегодня остался жив.",
            lock: "В один из домов было произведено нелегальное проникновение. К счастью, персонажа спасла маскировка.",
            mylock: '<div class="green">Ваша маскировка была использована.</div>'
        },
        periodStart: {
            "1": "Наступила ночь. Честные граждане спят. Всем остальным пора действовать.",
            "2": "Наступил день. Честные граждане проснулись. Не дадим мафии прибрать к рукам наш город!",
            "3": "Последнее слово - подозреваемому и его защитникам! А вы, уважаемые горожане, решайте - обвинить его или отпустить с миром. Будьте внимательны, подозреваемый может ввести вас в заблуждение!",
            "4": "Наступило время голосования! Пора принимать решение!"
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
                "true": {
                    1: " почему-то не спала сегодня ночью. Может она мафиози?",
                    2: " почему-то не спал сегодня ночью. Может он мафиози?"
                },
                "false": {
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
        intuitionStart: 'В этой игре задача каждого участника - определить игрока с ролью противоположной стороны и проголосовать против него днем! Мафиози голосуют против граждан, а мирные жители - против мафии.<br/> За каждую правильно угаданную роль игроки будут получать баллы: <blockquote>для мирных: <span class="hrobb"></span> - 3, <span class="robb"></span> - 2, <span class="adv"></span> - 1, <span class="jeal"></span> - 1<br/> для мафии: <span class="duty"></span> - 3, <span class="assis"></span> - 2, <span class="sleep"></span> - 2, <span class="jeal"></span> - 1 </blockquote>',
        newDuty: "Место комиссара занял сержант. Мы верим в нашего нового комиссара!",
        bossChild: "Место босса мафии занимает его внебрачный ребенок!",
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
            womenwin: "Дамы были как всегда на высоте!"
        },
        reward: {
            "1": 'Вы порядочный гражданин, и городу повезло, что Вы живете в нем.<br/> Мэр города за ваше участие в борьбе с мафией наградил Вас <em>Активной ролью</em> на 1 час <div class="shop-item3"></div>',
            "2": 'Мафия бессмертна!<br/> Вы в очередной раз это доказали,<br/> за это мафиозный клан подарил Вам <em>Автомобиль</em> <div class="shop-item5"></div>',
            "3": 'Мафия бессмертна!<br/> В знак почтения члены клана преподнесли<br/> своему боссу новенький <em>Автомобиль</em> <div class="shop-item5"></div>',
            "4": 'Городу повезло, что у него есть такой комиссар!<br/> Вам удалось сорвать коварные планы мафиозного клана по захвату города.<br/> Для борьбы с мафией используйте новейшие достижения технического прогресса. <div class="shop-item4"></div>',
            "5": 'Славная работа, сержант!<br/> Город счастлив, что в полиции работают такие смелые люди.<br/> В вашем нелегком труде помогут <em>жучки</em>,<br/> которые сообщат Вам обо всех перемещениях злоумышленника <div class="shop-item4"></div>',
            "6": 'Кто бы мог подумать?!<br/> Маньяк спас город от мафии.<br/> Однако, учитывая вашу репутацию, <em>маскировка</em> Вам не помешает <div class="shop-item2"></div>',
            "7": 'За спасение жителей города от неминуемой смерти<br/> мэрия наградила Вас <em>личной рацией</em>, чтобы Вы всегда могли быстро прийти на выручку <div class="shop-item1"></div>',
            "8": 'Мафии не удалось захватить город благодаря коту!<br/> Известие об этом быстро разнеслось по округе.<br/> Смелому животному пока лучше <em>замаскироваться</em>, да получше. <div class="shop-item2">2</div>',
            "9": 'Благодаря Вам мафии удалось прибрать к рукам этот город!<br/> Помимо гонорара Вам пригодятся эти <em>маскировочные костюмы</em>, чтобы скрыться от правосудия. <div class="shop-item2">3</div>'
        },
        items: {
            "1": "Рация в коробке",
            "2": "Маскировочный набор",
            "3": "Абонемент Активная роль на 1 час",
            "4": "Жучок в упаковке",
            "5": "Сертификат на покупку автомобиля",
            "6": "Пропуск в Клуб Мафии на 1 день"
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
};
var periodNames = {
    1: "Ночь",
    2: "День",
    3: "Вечер",
    4: "Голосование"
};
var startHours = {
    1: 21,
    2: 9,
    3: 17,
    4: 19
}
  , game = {
    active: false,
    closed: false,
    finish: false,
    style: {},
    botwall: false,
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
};
var min10, replaceLogins = {}, randomNicks = ["Единорожка", "Булочка", "Тортик", "Пирожок", "Буковка", "Дятел", "Рожа", "Красавица", "Торчок", "Маньяк", "Крестоносец", "Страшила", "Бумеранг", "Мажор", "Хочу стенку", "Вреднуля", "Стакан", "Блатной", "Тихий вечер", "Скандинавец", "Тык-тык", "Персик", "Ватрушка", "Крышка", "Кролик", "Выдра", "Жиголо", "Скрытный", "Остроумный", "Любопытный", "Жук", "Зануда"];
var showTime = function() {
    var t = "";
    var h = game.time.h;
    var m = game.time.m;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    $("#gametime").html(h + ":" + m);
};
var truncate = function(word, length) {
    if (word && word.length > length) {
        return word.substring(0, length) + "…";
    } else {
        return word;
    }
};
var addVote = function(id, isAdd) {
    var targetObj = $("#" + id);
    if (targetObj) {
        var oldVal = parseInt(targetObj.find("b").html()) || 0
          , newVal = (isAdd) ? oldVal + 1 : oldVal - 1;
        targetObj.find("b").html(newVal.toString());
    }
};
function editPlayer(user, leave) {
    $("#players>#" + user._id).remove();
    if (leave) {
        if (playersInfoArray[user._id]) {
            playersInfoArray[user._id].killed = true;
        }
    } else {
        playersInfoArray[user._id] = user;
        var newPl = $('<div id="' + user._id + '"><b></b>' + truncate(user.login, 10) + ((user.role) ? '<span class="visiblerole"> - <i class="' + roles(user.role).icon + '"></i></span>' : "") + "</div>");
        newPl.attr("data-nick", user.login);
        if (user.bot) {
            newPl.addClass("bot");
        }
        if (game.style.style && game.style.style == 4 && user.sex) {
            newPl.addClass("sex" + user.sex);
        }
        newPl.appendTo("#players");
        if (!game.intuition) {
            newPl.mouseenter(function() {
                showPlayerInfo(true, $(this).attr("id"));
                return false;
            }).mouseleave(function() {
                showPlayerInfo(false);
                return false;
            });
            if (u.friends && u.friends.indexOf(user._id) > -1) {
                newPl.addClass("green");
            }
            if (reds.indexOf(user._id) > -1) {
                newPl.addClass("red");
            }
        }
    }
    aside.find(".blocktitle").html(" (" + playersList.find("div").length.toString() + ")");
}
game.isRobber = function(role) {
    return (role == 2 || role == 3);
}
;
game.setRole = function(user) {
    if (game.intuition && playersInfoArray[user.id]) {
        user.login = playersInfoArray[user.id].login;
    }
    playersList.find("#" + user.id).html("<b></b>" + truncate(user.login, 10) + ((user.role) ? '<span class="visiblerole"> - <i class="' + roles(user.role).icon + '"></i></span>' : ""));
    if (playersInfoArray[user.id]) {
        playersInfoArray[user.id].role = user.role;
    }
}
;
function changeAction() {
    var newAction = "";
    if (game.actions.length > 0) {
        newAction = game.actions.shift();
    }
    actionButton.html(newAction);
}
game.writeText = function(text, udata, important, noreplace) {
    var name = document.createElement("div");
    var body = document.createElement("div");
    var root = document.createElement("div");
    root.className = "message";
    if (udata) {
        if (udata == "radio") {
            root.className += " poh-radio";
        } else {
            if (udata.role) {
                root.className += " roleicon roleicon" + udata.role;
            } else {
                if (udata.bonus) {
                    root.className += " roleicon bonusicon-" + udata.bonus;
                } else {
                    if (!udata.id) {
                        udata.id = udata._id;
                    }
                    if (!udata.image && playersInfoArray[udata.id]) {
                        udata.sex = playersInfoArray[udata.id].sex;
                        udata.image = playersInfoArray[udata.id].image;
                    }
                    if (game.intuition) {
                        udata.image = false;
                    }
                    if (udata.image) {
                        if (udata.image.length > 2) {
                            root.className += " userimage";
                            var uIm = document.createElement("div");
                            uIm.className = "selfimg";
                            uIm.style.backgroundImage = "url(/files/" + udata.id + udata.image + ")";
                            root.appendChild(uIm);
                        } else {
                            var nclass = (udata.sex == 1) ? "w" : "m";
                            nclass = (udata.image) ? nclass + udata.image : "";
                            root.className += " " + nclass;
                        }
                    }
                }
            }
        }
    } else {
        root.className += " noimage";
    }
    name.innerHTML = "";
    if (!noreplace) {
        text = roleReplace(text);
    }
    body.innerHTML = (important) ? '<div class="delimiter"></div><div class="important">' + text + '</div><div class="delimiter"></div>' : text;
    root.appendChild(name);
    root.appendChild(body);
    gebi("messages").appendChild(root);
    doScroll();
}
;
game.event = function(data, datafrom, needReturn) {
    var getKeyVal = function(obj, str) {
        var out = {}
          , parts = str.split(":");
        if (parts[0] == "all") {
            parts.shift();
            obj = roleText.all;
        }
        if (parts.length > 1) {
            out = obj;
            for (var i = 0; i < parts.length; i++) {
                out = out[parts[i]];
            }
        } else {
            out = obj[parts.shift()];
        }
        return out;
    };
    var text = " " + getKeyVal(roleText[gameMode()], data.text);
    if (data.p) {
        if (game.intuition && data.p.id && playersInfoArray[data.p.id]) {
            data.p.nick = playersInfoArray[data.p.id].login;
        }
        text = text.replace("[nick]", '<b class="nickname"' + (data.p.id ? ' data-id="' + data.p.id + '"' : "") + ">" + data.p.nick + "</b>");
    }
    if (data.replacedata) {
        if (data.replacedata["[mans]"]) {
            if (data.replacedata["[mans]"] == data.replacedata["[students]"]) {
                text = text.replace("[students],", "");
            } else {
                data.replacedata["[students]"] -= data.replacedata["[mans]"];
            }
        } else {
            text = text.replace(", [mans]", "");
        }
        for (var key in data.replacedata) {
            if (data.replacedata.hasOwnProperty(key)) {
                var val = data.replacedata[key];
                if (val == "[ROLE2]") {
                    val = roles(2).name;
                }
                if (data.text == "stat") {
                    var someForms = roleText[gameMode()]["statCount"][key];
                    text = text.replace(key, someThing(val, someForms[0], someForms[1], someForms[2]));
                } else {
                    text = (key == "[role]") ? text.replace(key, roleReplace(roles(val).name)) : text.replace(key, val);
                }
            }
        }
    }
    switch (data.text) {
    case "nightActions:2":
        sound("role2", true);
        datafrom = {
            role: 2
        };
        break;
    case "nightActions:3":
        sound("role3", true);
        datafrom = {
            role: 3
        };
        break;
    case "nightActions:4":
        sound("role4", true);
        datafrom = {
            role: 4
        };
        break;
    case "nightActions:6":
        sound("role6", true);
        datafrom = {
            role: 6
        };
        break;
    case "nightActions:7":
        sound("role7", true);
        datafrom = {
            role: 7
        };
        break;
    case "nightActions:8":
        sound("role8", true);
        datafrom = {
            role: 8
        };
        break;
    case "nightActions:9":
        sound("role9", true);
        datafrom = {
            role: 9
        };
        break;
    case "all:bonus:intuit":
        datafrom = {
            bonus: "intuit"
        };
        break;
    case "all:bonus:nokill":
        datafrom = {
            bonus: "nokill"
        };
        break;
    case "all:bonus:rev":
        datafrom = {
            bonus: "rev"
        };
        break;
    case "all:bonus:poh":
        datafrom = {
            bonus: "poh"
        };
        break;
    }
    if (needReturn) {
        return text;
    } else {
        game.writeText('<div class="periodMsg"> ' + text + " </div>", datafrom, false, true);
        return true;
    }
}
;
game.kick = function(param) {
    sendToSocket({
        type: "kick",
        "boolean": param
    });
}
;
game.showPlaylist = function(players) {
    playersInfoArray = {};
    playersList.html("");
    for (var index in players) {
        if (players.hasOwnProperty(index)) {
            editPlayer(players[index], false);
        }
    }
    container.removeClass("closedgame").addClass("current");
    var str = [];
    playersList.find("div").each(function() {
        var sustr = [$(this).html(), $(this)];
        str.push(sustr);
    });
    str.sort(plSort);
    $.each(str, function(key, value) {
        playersList.append(value[1]);
    });
}
;
game.updateInfoGame = function(text) {
    var nickText = u.login;
    if ($("div").is(".nickblock")) {
        nickText += "<br/>";
    } else {
        nickText += " - ";
    }
    nickText += '<span class="rolesmile role' + game.role + '"></span>' + roles(game.role).name;
    $("#nick").html(nickText);
    $(".gamemakerinfo").html("<span>День " + game.day + "</span> ➣ <span>" + periodNames[game.period] + '</span> <span id="gametime"></span>').removeAttr("title");
    showTime();
    if (game.active && !game.closed) {
        switch (game.period) {
        case 1:
            mW.hide();
            game.actions = roles(game.role).button.slice();
            break;
        case 2:
            game.actions = ["Голосовать", "Переголосовать"];
            break;
        case 3:
            game.actions = [];
            break;
        case 4:
            game.actions = [];
            if (text) {
                modalWindow(text, function() {
                    game.kick(true);
                }, function() {
                    game.kick(false);
                });
            }
            break;
        }
        changeAction();
    } else {
        actionButton.html("");
    }
    if (game.role > 0) {
        game.setRole({
            id: u._id,
            login: u.login,
            role: game.role
        });
    }
}
;
var sortPoints = function(obj) {
    var arrayForSort = [];
    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            arrayForSort.push({
                id: k,
                points: obj[k]
            });
        }
    }
    arrayForSort.sort(function(a, b) {
        return b.points - a.points;
    });
    return arrayForSort;
};
game.setPeriod = function(event) {
    if (event.resultInfo) {
        if (event.resultInfo.points && event.resultInfo.logins) {
            var pText = "Набрано баллов:<br/>";
            sortPoints(event.resultInfo.points).forEach(function(el) {
                if (event.resultInfo.logins[el.id]) {
                    pText += '<b class="nickname" data-id="' + el.id + '">' + event.resultInfo.logins[el.id] + "</b> - " + el.points + " , ";
                }
            });
            game.writeText(pText.substring(0, pText.length - 2), false, true);
        }
        return;
    }
    playersList.find("div").removeClass("voted");
    if (event.period == 2) {
        sound("day", true);
    } else {
        if (event.period == 1) {
            sound("night", true);
        } else {
            sound("notify", true);
        }
    }
    if (event.period != 3) {
        playersList.find("b").html("");
    }
    game.day = event.day;
    game.period = event.period;
    game.time = {
        h: startHours[game.period],
        m: 0
    };
    game.hisvote = {};
    game.votes = {};
    var param = "";
    if (event.msgArray && event.msgArray.length > 0) {
        var msgs = event.msgArray;
        if (game.period == 4) {
            param = (msgs[0] == u._id) ? false : game.event(msgs[1], false, true);
        } else {
            var text = "";
            msgs.forEach(function(el) {
                text += game.event(el, false, true) + "<br/>";
            });
            game.writeText(text, false, (game.period == 2), true);
        }
    }
    if (event.addInfo) {
        if (event.addInfo.roles) {
            var rolesText = "";
            for (var i in event.addInfo.roles) {
                if (event.addInfo.roles.hasOwnProperty(i)) {
                    rolesText += '<b class="nickname" data-id="' + i + '">' + playersInfoArray[i].login + "</b> - " + roles(event.addInfo.roles[i]).name + " , ";
                }
            }
            game.writeText(rolesText.substring(0, rolesText.length - 2), false, true);
        }
        if (event.addInfo.points) {
            var pointsText = "Набрано баллов:<br/>"
              , arrayForSort = sortPoints(event.addInfo.points);
            arrayForSort.forEach(function(el) {
                if (playersInfoArray[el.id]) {
                    pointsText += '<b class="nickname" data-id="' + el.id + '">' + (game.intuition ? replaceLogins[el.id] : playersInfoArray[el.id].login) + "</b> - " + el.points + " , ";
                }
            });
            game.writeText(pointsText.substring(0, pointsText.length - 2), false, true);
            if (game.intuition) {
                var allnicks = randomNicks.slice(0);
                allnicks.shuffle();
                playersList.html("");
                $.each(playersInfoArray, function(ind, el) {
                    el.login = allnicks.shift();
                    delete el.role;
                });
                for (var index in playersInfoArray) {
                    if (playersInfoArray.hasOwnProperty(index) && !playersInfoArray[index].killed) {
                        editPlayer(playersInfoArray[index], false);
                    }
                }
                var str = [];
                playersList.find("div").each(function() {
                    var sustr = [$(this).html(), $(this)];
                    str.push(sustr);
                });
                str.sort(plSort);
                $.each(str, function(key, value) {
                    playersList.append(value[1]);
                });
            }
        }
    }
    switch (game.period) {
    case 1:
        game.kickVotes = {
            yes: 0,
            no: 0
        };
        container.addClass("nightPeriod");
        if (game.active) {
            helper.hint("night" + game.role);
        }
        break;
    case 2:
        game.closed = (event.closed && event.closed == u._id) ? true : false;
        container.removeClass("nightPeriod");
        if (game.active) {
            helper.hint("day-side" + (game.isRobber(game.role) ? "2" : "1"));
        }
        break;
    case 3:
        if (game.active) {
            helper.hint((event.msgArray && event.msgArray[0] && event.msgArray[0].p && event.msgArray[0].p.id && event.msgArray[0].p.id == u._id) ? "voteme" : "vote");
        }
        break;
    }
    if (event.del && event.del.length > 0) {
        event.del.forEach(function(el) {
            editPlayer({
                _id: el
            }, true);
        });
    }
    game.updateInfoGame(param);
    game.writeText('<div class="delimiter"></div><div class="periodMsg">' + roleText[gameMode()]["periodStart"][game.period] + '</div><div class="delimiter"></div> ');
    if (event.banks) {
        game.recalculateBanks(event.banks);
    }
}
;
game.setTime = function() {
    var nextPeriod = (game.period > 3) ? 1 : game.period + 1;
    game.time.m += (game.botwall || game.fast) ? 10 : 5;
    if (game.time.m > 59) {
        game.time.m = 0;
        game.time.h += 1;
    }
    if (game.time.h > 23) {
        game.time.h = 0;
    }
    showTime();
}
;
game.action = function() {
    if (!game.active || actionButton.html() == "") {
        return;
    }
    if (room == "testgame") {
        var selPl = playersList.find("div.select").attr("id");
        game.vote({
            target: helper.helpGamePlayers[selPl]._id,
            from: helper.helpGamePlayerIL(0),
            targetLogin: helper.helpGamePlayers[selPl].login
        });
        changeAction();
        sound("click", true);
        return;
    }
    if (playersList.find("div").is(".select")) {
        var selectedPl = playersList.find("div.select");
        if (game.period == 1) {
            modalWindow("Уверены, что хотите это сделать?", function() {
                sendToSocket({
                    type: "game-action",
                    target: selectedPl.attr("id")
                });
                changeAction();
            });
        } else {
            sendToSocket({
                type: "game-action",
                target: selectedPl.attr("id")
            });
            changeAction();
        }
        sound("click", true);
    }
}
;
game.vote = function(data) {
    if (game.period > 2) {
        return;
    }
    if (!game.votes[data.target]) {
        game.votes[data.target] = [];
    }
    if (game.intuition) {
        if (playersInfoArray[data.from.id]) {
            data.from.login = playersInfoArray[data.from.id].login;
        }
        if (data.target && playersInfoArray[data.target]) {
            data.targetLogin = playersInfoArray[data.target].login;
            if (data.event && data.event.replacedata) {
                data.event.replacedata["[target]"] = data.targetLogin;
            }
        }
    }
    game.votes[data.target].push(data.from.login);
    game.hisvote[data.from.id] = data.targetLogin;
    if (data.oldTarget) {
        addVote(data.oldTarget, false);
        if (game.votes[data.oldTarget]) {
            var ca = game.votes[data.oldTarget];
            ca.splice(ca.indexOf(data.from.login), 1);
        }
    }
    addVote(data.target, true);
    if (!data.event) {
        data.event = (game.special) ? {
            text: "all:greenVote"
        } : {
            text: "mainvote:simpleVote"
        };
        data.event.replacedata = {
            "[nick]": '<b class="nickname"' + (data.from.id ? ' data-id="' + data.from.id + '"' : "") + ">" + data.from.login + "</b>",
            "[target]": '<b class="nickname" data-id="' + data.target + '">' + data.targetLogin + "</b>"
        };
        if (game.intuition) {
            data.event = {
                text: "all:intuitVote"
            };
        }
        game.writeText(game.event(data.event, false, true), data.from);
    } else {
        game.event(data.event, data.from || null);
    }
    if (data.from && data.from.id && !game.intuition) {
        $("#" + data.from.id).addClass("voted");
    }
}
;
game.kickVote = function(data) {
    if (data.kick == 1) {
        game.kickVotes.yes++;
    } else {
        game.kickVotes.no++;
    }
    var msgtext = game.event({
        text: "mainvote:result-sub",
        replacedata: {
            "[YESVOTE]": game.kickVotes.yes,
            "[NOVOTE]": game.kickVotes.no,
            "[YESs]": ((game.kickVotes.yes == 1) ? "" : "и"),
            "[NOs]": ((game.kickVotes.no == 1) ? "" : "и")
        }
    }, false, true);
    game.writeText('<span class="important">' + game.event(data.event, false, true) + "</span><br/>" + msgtext, data.event.p);
}
;
var finalMsg = function(data, end) {
    actionButton.html("");
    var str = ""
      , shareStr = ""
      , causeEvent = (data.item5) ? "afterItem5" : "stealGift";
    if (data.winners) {
        str += "Победа оказалась на стороне: <br><b>" + data.winners.join("</b><br/><b>") + "</b>";
    } else {
        str += (data.event) ? game.event(data.event, false, true) : roleText[gameMode()][causeEvent];
    }
    str += "<br/> ";
    if (game.role) {
        if (data.days) {
            str += (end ? "Партия длилась " : "Вы продержались ") + someThing(data.days, "день", "дня", "дней") + "<br/> ";
        }
        if (data.money) {
            str += 'Вы получили <span class="gamemoney">' + over1000(data.money) + "</span><br/> ";
        }
        if (data.rate) {
            str += "<b>Рейтинг +" + data.rate + "</b><br/> ";
        }
    }
    if (data.points) {
        str += "<strong>Итоговые баллы:</strong> <blockquote>";
        sortPoints(data.points).forEach(function(el) {
            str += el.id + " - " + el.points + "<br/>";
        });
        str += "</blockquote>";
    } else {
        if (data.roles) {
            str += "<strong>Роли исполняли:</strong> <blockquote>";
            data.roles.forEach(function(el, index) {
                if (el == "finish") {
                    if (index < data.roles.length - 1) {
                        str += "<b>Изменившиеся роли:</b><br/>";
                    }
                } else {
                    str += el[1] + " - " + roles(el[0]).name + "<br/>";
                    shareStr += el[1] + "-" + roles(el[0]).name + ",";
                }
            });
            str += "</blockquote>";
        }
    }
    if (data.win) {
        sound("win", true);
        var ticketImg = (isMaffia) ? "maffia/tickets/" + game.role + ".png" : "tickets/" + game.role + ".jpg";
        if (!isAppVK) {
            str += '<a class="button share" target="_target" title="Поделиться с друзьями ВКонтакте" href="' + getGameUrl(true) + "&amp;title=Мне удалось заработать " + over1000(data.money) + " за " + someThing(data.days, "день", "дня", "дней") + "!&amp;description=" + u.login + " в игре " + header.attr("data-name") + "!%0AВ игре принимали участие: " + shareStr + "&amp;image=http://loday.ru/images/" + ticketImg + '&amp;noparse=true">Сохранить игру</a><br/>';
        }
    }
    str += (end) ? "" : "Хотите досмотреть игру до конца?";
    return str;
};
game.killed = function(data) {
    game.active = false;
    modalWindow(finalMsg(data, false), function() {
        container.addClass("nogift");
    }, goToRoom);
}
;
game.newRole = function(obj) {
    if (!obj.role) {
        return;
    }
    game.role = obj.role;
    if (obj.bonus) {
        game.event({
            text: "all:bonus:" + obj.bonus,
            replacedata: {
                "[role]": obj.role
            }
        }, false);
    }
    alarm("Теперь ты - " + roles(obj.role).name + "!");
    if (obj.child) {
        var parentSex = (playersInfoArray[obj.child] && playersInfoArray[obj.child].sex == 1) ? "mother" : "father";
        game.writeText(u.login + roleText[gameMode()]["bossChild-" + parentSex], false, true);
    }
    if (obj.hasOwnProperty("bonus") && !obj.bonus) {
        playersList.find(".visiblerole").remove();
        $.each(playersInfoArray, function(key, value) {
            if (key != u._id) {
                delete value.role;
            }
        });
    }
    if (obj.roles) {
        for (var i in obj.roles) {
            if (obj.roles.hasOwnProperty(i)) {
                game.setRole({
                    id: i,
                    login: playersInfoArray[i].login,
                    role: obj.roles[i]
                });
            }
        }
    }
    game.updateInfoGame();
}
;
game.dejInfo = function(data) {
    var checksList = function(obj) {
        var str = "";
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (str != "") {
                    str += ", ";
                }
                str += obj[key][1] + " - " + roles(obj[key][0]).name;
            }
        }
        return str;
    };
    var out = "Я - " + roles(data.role).name + "!";
    if (data.checks && Object.size(data.checks) > 0) {
        out += " Мне стало известно, что " + checksList(data.checks) + " !";
    }
    var from = {
        id: data.id,
        login: playersInfoArray[data.id].login,
        sex: playersInfoArray[data.id].sex,
        image: playersInfoArray[data.id].image,
        color: "#f00"
    };
    setTimeout(function() {
        showNewMessage({
            type: "message",
            message: out,
            msgType: "private",
            from: from,
            to: u._id,
            toName: u.login
        });
    }, 2000);
}
;
var animateNumber = function(objId, newVal, digit1000) {
    var el;
    if (objId == "gamemoney") {
        el = gamemoney;
        if (gamemoney.html() != "" && gamemoney.html() != over1000(newVal)) {
            sound("money");
        }
    } else {
        el = $("#" + objId);
    }
    el.animate({
        num: newVal
    }, {
        duration: 2000,
        step: function(num) {
            this.innerHTML = (digit1000) ? over1000(num.toFixed()) : num.toFixed();
        }
    });
};
game.recalculateBanks = function(banks, start) {
    if (!banks) {
        return;
    }
    animateNumber("studBank", banks[0] || 0);
    animateNumber("robbBank", banks[1] || 0);
    animateNumber("allBank", banks[2] || 0);
    animateNumber("winBank", banks[3] || 0);
}
;
var textRoles = {
    1: "stud",
    2: "poh",
    3: "poh",
    4: "dej",
    5: "dej",
    6: "rev",
    7: "lun"
};
game.start = function(data) {
    hideTickets();
    messagesList.html("");
    gebi("playersButton").className = "my";
    mW.hide();
    closewindow();
    if (typeof f23Mode != "undefined") {
        var num = randomInt(13)
          , ext = "jpg";
        if (num > 10) {
            num -= 10;
            ext = "gif";
        } else {
            if (num == 10) {
                ext = "png";
            }
        }
        showWall("february23/" + num + "." + ext);
    } else {
        if (data.married) {
            showWall((data.role) ? "wedding" + (data.role == 2 ? "2" : "1") + ".jpg" : "0.gif");
        } else {
            if (isMaffia) {
                showWall((data.role) ? "maffia/" + data.role + ".jpg" : "0.gif");
            } else {
                showWall((data.role) ? data.role + ".jpg" : "0.gif");
            }
        }
    }
    game.active = true;
    game.closed = false;
    game.finish = false;
    game.day = 0;
    game.period = 1;
    game.count = data.count;
    game.botwall = (data.botwall);
    game.fast = (data.fast);
    game.special = (data.special);
    game.man = data.man;
    game.intuition = data.intuition;
    game.hisvote = {};
    game.votes = {};
    game.kickVotes = {
        yes: 0,
        no: 0
    };
    game.style = data.gamestyle;
    game.items = {
        1: u.item1,
        2: u.item2,
        4: u.item4,
        5: u.item5
    };
    game.item2limit = (u.item2 && u.item2 > 2) ? 3 : 2;
    itemPanel.removeClass();
    itemPanel.find("div").removeClass("itemoff");
    var caption = "";
    if (data.caption) {
        caption = data.caption;
    }
    if (data.gameinfo) {
        room = data.gameinfo._id;
        game.count = data.gameinfo.count;
        closedgame = (data.gameinfo.style == 2);
        gametitle.html("<span>" + gameStyle[data.gameinfo.style] + " на " + data.gameinfo.count + " игроков</span>");
        showPlayersList({}, room);
        data.banks = data.gameinfo.banks;
        game.day = data.gameinfo.day;
        game.period = data.gameinfo.period;
        game.botwall = (data.gameinfo.botwall);
        game.fast = (data.gameinfo.fast);
        game.special = (data.gameinfo.special);
        game.style.style2 = true;
        game.active = false;
        game.time = {
            h: startHours[game.period],
            m: 0
        };
        header.find(".gamestyle").find("span").each(function(index) {
            $(this).removeClass();
            if (data.gameinfo["style" + (index + 1).toString()]) {
                $(this).addClass("enabledoption");
            }
        });
        game.intuition = data.gameinfo.intuition;
    }
    if (game.style.style2) {
        itemPanel.addClass("noactive");
    }
    if (data.params) {
        if (data.params.noitem4) {
            itemPanel.find(".gameitem4").addClass("itemoff");
        }
        if (data.params.hasOwnProperty("item2")) {
            game.item2limit = data.params.item2;
            if (game.item2limit == 0) {
                itemPanel.find(".gameitem2").addClass("itemoff");
            }
        }
    }
    game.item2 = u.item2 ? (u.item2 > game.item2limit ? game.item2limit : u.item2) : 0;
    if (game.intuition && data.players) {
        var allnicks = randomNicks.slice(0);
        allnicks.shuffle();
        replaceLogins = {};
        $.each(data.players, function(ind, el) {
            replaceLogins[ind] = el.login;
            el.login = allnicks.shift();
        });
    }
    game.role = data.role;
    game.updateInfoGame();
    gametitle.html("<span>" + (game.count ? gameTypeInfo(game) : gametitle.find("span").eq(0).html()) + '</span> <span id="studBank" data-title="Банк студентов|Банк граждан"></span> <span id="robbBank" data-title="Банк похитителей|Банк мафии"></span> <span id="allBank" data-title="Общий банк"></span> <span id="winBank" data-title="Банк победы"></span>');
    game.recalculateBanks(data.banks, true);
    if (data.married) {
        game.writeText("Занимайте места поудобнее. Свадебная церемония начнется днем...");
    } else {
        if (data.intuition) {
            showNewDiv('<div class="lastwords">' + roleText[gameMode()].intuitionStart + " Победа в этой партии ждет Вас через " + someThing(data.intuition, "день", "дня", "дней") + "!</div>");
        } else {
            var firstStr = (game.style.style == 4) ? roleText.all["startText-sex"] : roleText[gameMode()].startText;
            game.writeText(firstStr + '<div class="delimiter"></div>');
            game.writeText((game.style.style == 4) ? roleText.all["sex" + u.sex] : roleText[gameMode()]["roleinfo"][game.role]);
        }
    }
    if (game.man) {
        showNewDiv('<div class="lastwords">Внимание! В этой партии ' + roles(6).name + " играет сам за себя!</div>");
    }
    if (caption.substring(0, 2).toLowerCase() == "пб" || game.botwall) {
        showNewDiv('<div class="lastwords">Внимание! Это партия против ботов!</div>');
    }
    if (!isMaffia) {
        $("#gift").show();
    }
    updateGameitems();
    if (data.roles) {
        var allRoles = "В этой партии присутствуют следующие роли: ";
        data.roles.forEach(function(el) {
            allRoles += '<span class="rolesmile role' + el + '"></span>';
        });
        showNewDiv("<div>" + allRoles + "</div");
    }
    if (u.invite && playersInfoArray[u.invite]) {
        showNewDiv('<div class="red">В этой партии находится ваш наставник - <b data-id="' + u.invite + '">' + playersInfoArray[u.invite].login + "</b></div>");
    }
    if (u.invited) {
        var pupils = [];
        for (var i in playersInfoArray) {
            if (playersInfoArray.hasOwnProperty(i)) {
                if (playersInfoArray[i].invite && playersInfoArray[i].invite == u._id) {
                    pupils.push(playersInfoArray[i].login);
                }
            }
        }
        if (pupils.length > 0) {
            showNewDiv('<div class="red">В этой партии находятся ваши ученики: ' + pupils.join(", ") + "</div>");
        }
    }
    game.showPlaylist(data.players);
    clearInterval(min10);
    min10 = setInterval(function() {
        game.setTime();
    }, 1000);
    if (game.role) {
        var wText = ""
          , statRole = textRoles[game.role];
        helper.hint("start");
        if (u[statRole + "0"] + u[statRole + "1"] < 1) {
            helper.hint("Это твоя первая роль " + roles(game.role).name + ".<br/> Посмотрим, сможешь ли ты с ней справиться!", true);
        }
        u.money -= game.sum;
    }
}
;
game.finished = function() {
    game.finish = true;
    clearInterval(min10);
}
;
function updateGameitems() {
    [1, 2, 4, 5].forEach(function(i) {
        var v = parseInt(game.items[i])
          , curItem = $("div.gameitem" + i + ">b", itemPanel);
        curItem.removeClass();
        if (!u["item" + i] || u["item" + i] < 0) {
            u["item" + i] = 0;
        }
        var itemVal = (i == 2) ? game.item2 : u["item" + i]
          , limit = (i == 2) ? game.item2limit : items["g" + i];
        if (!itemVal) {
            curItem.addClass("noitem");
        }
        curItem.html(itemVal + "/" + ((v >= limit) ? "0" : (limit - v).toString()));
    });
}
function doItem(inum) {
    if (!inum) {
        return;
    }
    if (!game.active) {
        showMessage("Для Вас эта игровая партия уже завершена. Вы не можете повлиять на нее.");
        return;
    }
    if (game.style.style2) {
        showMessage("Игра без предметов");
    } else {
        if (u["item" + inum]) {
            switch (inum) {
            case 4:
                var selectedPl = playersList.find("div.select")
                  , cId = selectedPl.attr("id");
                if (cId) {
                    if (u.item4 > 0) {
                        sendToSocket({
                            type: "gameitem",
                            item: inum,
                            target: cId
                        });
                    } else {
                        showMessage(roleText[gameMode()].itemUse.cookieNo);
                    }
                } else {
                    showMessage(roleText[gameMode()].itemUse.cookieNan);
                }
                break;
            case 5:
                if (u.item5 > 0) {
                    modalWindow("Воспользовавшись этим предметом вы покинете игру, забрав с собой часть игрового банка. Хотите продолжить?", function() {
                        sendToSocket({
                            type: "gameitem",
                            item: inum
                        });
                    });
                } else {
                    showMessage(roleText[gameMode()].itemUse.tourNo);
                }
                break;
            }
        }
    }
}
game.itemUse = function(data) {
    if (!data.item) {
        return;
    }
    switch (data.item) {
    case 4:
        u.item4 -= 1;
        updateGameitems();
        if (data.uid && playersInfoArray[data.uid]) {
            game.writeText(game.event({
                text: "itemUse:cookie:text",
                replacedata: {
                    "[VERB]": ((playersInfoArray[data.uid].sex == 1) ? roleText[gameMode()].itemUse.cookie.verb1 : roleText[gameMode()].itemUse.cookie.verb2),
                    "[nick]": playersInfoArray[data.uid].login
                }
            }, false, true));
        }
        sound("item4", true);
        break;
    case 5:
        u.item5 -= 1;
        updateGameitems();
        game.writeText('<div class="green">' + roleText[gameMode()].itemUse.tour + "</div>");
        sound("item5", true);
        break;
    }
}
;
function buyItem(inum) {
    if (!inum) {
        return;
    }
    if (["1", "2", "4", "5"].indexOf(inum) > -1) {
        sendToSocket({
            type: "buy",
            item: inum,
            money: 1
        });
    }
}
game.buyAnswer = function(data) {
    [1, 2, 4, 5].forEach(function(el) {
        if (data["item" + el]) {
            u["item" + el] = data["item" + el];
            game.items[el]++;
            if (el == 2) {
                game.item2++;
            }
        }
    });
    if (data.price) {
        u.money -= data.price;
        gamemoney.html(over1000(u.money));
    }
    updateGameitems();
}
;
var itemPanel = $("#items");
$("div.gameitem4>div", itemPanel).click(function() {
    doItem(4);
});
$("div.gameitem5>div", itemPanel).click(function() {
    doItem(5);
});
$("div>span", itemPanel).click(function() {
    var itemNum = $(this).parent().attr("class").substring(8);
    buyItem(itemNum);
});
game.deleteLock = function(text) {
    if (u.item2) {
        u.item2 -= 1;
    }
    game.item2--;
    updateGameitems();
    game.event({
        text: "morningInfo:mylock"
    });
}
;
game.cookieResult = function(data) {
    if (data.result) {
        for (var index in data.result) {
            if (data.result.hasOwnProperty(index)) {
                var curCook = playersInfoArray[index];
                game.writeText('<div class="green"><b data-id="' + index + '">' + curCook.login + "</b>" + roleText[gameMode()].itemUse.cookieResult[data.result[index]][curCook.sex] + "</div>");
            }
        }
    }
    if (data.msg) {
        for (var i = 0; i < parseInt(data.msg); i++) {
            game.writeText('<div class="green">' + roleText[gameMode()].itemUse.cookieDelete + "</div>");
        }
    }
}
;
game.notePlayer = function(uid) {
    if (!uid || !playersInfoArray[uid]) {
        return;
    }
    var curpl = playersList.find("#" + uid);
    if (curpl) {
        var text = '<br/><label>Роль <select id="note-role"><option selected="selected"></option>';
        for (var i = 1; i <= 9; i++) {
            text += '<option value="' + i + '">' + roles(i).name + "</option>";
        }
        text += '</select></label><br/><label>Метка <input type="text" placeholder="Например, АКТИВ" id="note-text"/></label>';
        modalWindow("Заметка об игроке " + playersInfoArray[uid].login + text, function() {
            var nr = $("#note-role")
              , nt = $("#note-text")
              , playerIcon = curpl.find("b")
              , newtext = "";
            if (nr && nr.val()) {
                newtext += '<span class="rolesmile role' + nr.val() + '"></span> ';
            }
            if (nt && nt.val()) {
                newtext += nt.val();
            }
            if (newtext) {
                curpl.html(playerIcon[0].outerHTML + newtext + " " + playersInfoArray[uid].login + (playersInfoArray[uid].role ? '<span class="visiblerole"> - <i class="' + roles(playersInfoArray[uid].role).icon + '"></i></span>' : ""));
            }
        });
    }
}
;
var snowball = {
    myside: 1,
    sides: {},
    active: false,
    time: 0,
    timer: 0
}
  , battleDiv = $(".battleDiv")
  , snowPlayList1 = battleDiv.find(".playerlist").eq(0)
  , snowPlayList2 = battleDiv.find(".playerlist").eq(1)
  , battleMain = battleDiv.find(".battlemain")
  , snowSelect = $("#snowball-target");
battleDiv.find(".playerlist").bind("dblclick touchmove", function(e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;
    if (target.tagName != "DIV" || target.className == "playerlist") {
        return;
    }
    $("#adresat-id").val(target.id);
    $("#adresat").val(target.dataset.nick);
});
$("#snowball-domove").click(function() {
    var defend = battleDiv.find("input[name=snowball-def]:checked").val()
      , attack = battleDiv.find("input[name=snowball-att]:checked").val()
      , target = battleDiv.find("#snowball-target").val();
    if (!defend) {
        showMessage("Выберите свою позицию - в первых рядах или позади?");
        return;
    }
    if (!attack) {
        showMessage("Выберите тип броска - на точность или на силу?");
        return;
    }
    if (!target) {
        showMessage("Выберите соперника, в которого хотите бросить снежком");
        return;
    }
    sendToSocket({
        type: "snowball",
        defend: defend,
        attack: attack,
        target: target
    });
    battleMain.addClass("battlewait");
});
snowball.action = function(data) {
    if (!data.action) {
        return;
    }
    switch (data.action) {
    case "start":
        snowball.start(data);
        break;
    case "round":
        snowball.setRound(data);
        break;
    case "move":
        snowball.newMove(data);
        break;
    case "end":
        snowball.end(data.msg);
        break;
    }
}
;
snowball.start = function(data) {
    container.addClass("battle");
    playersInfoArray = data.players;
    messagesList.html("");
    mW.hide();
    snowball.active = true;
    snowball.timer = setInterval(function() {
        snowball.setTime();
    }, 1000);
}
;
snowball.setRound = function(data) {
    if (data.round) {
        var classtext = "snows" + (data.round + 4);
        snowPlayList1.removeClass().addClass("playerlist " + classtext);
        snowPlayList2.removeClass().addClass("playerlist " + classtext);
    }
    if (data.sides[1].indexOf(u._id) > -1) {
        snowball.myside = 1;
        snowball.sides.we = data.sides[1];
        snowball.sides.they = data.sides[2];
    } else {
        snowball.myside = 2;
        snowball.sides.we = data.sides[2];
        snowball.sides.they = data.sides[1];
    }
    snowball.playerList(snowball.sides.we, snowPlayList1);
    snowball.playerList(snowball.sides.they, snowPlayList2);
    var nicksArray = [];
    snowSelect.html("");
    snowball.sides.they.forEach(function(el) {
        nicksArray.push([playersInfoArray[el].login, el]);
    });
    nicksArray.sort(plSort);
    nicksArray.forEach(function(el) {
        snowSelect.append('<option value="' + el[1] + '">' + el[0] + "</option>");
    });
    showNewDiv('<br/><div class="important">' + snowball.roundName[data.round] + "</div>");
    if (data.sides[1].indexOf(u._id) == -1 && data.sides[2].indexOf(u._id) == -1) {
        battleMain.addClass("insnow");
        snowball.active = false;
    } else {
        battleMain.removeClass("insnow");
        snowball.active = true;
    }
    snowball.time = 0;
    sound("notify");
}
;
snowball.playerList = function(ids, playlist) {
    if (!ids) {
        return;
    }
    playlist.html("");
    ids.forEach(function(id) {
        if (playersInfoArray[id]) {
            var el = playersInfoArray[id]
              , newPl = $('<div id="' + el._id + '"></div>').html("<b></b>" + el.login);
            newPl.attr("data-nick", el.login);
            newPl.appendTo(playlist);
            newPl.mouseenter(function() {
                showPlayerInfo(true, $(this).attr("id"));
                return false;
            }).mouseleave(function() {
                showPlayerInfo(false);
                return false;
            });
            if (reds.indexOf(el._id) > -1) {
                newPl.addClass("red");
            }
            newPl.find("b").addClass("status" + el.icon);
            $('<span class="snowblock"></span>').appendTo(newPl);
        }
    });
    var str = [];
    playlist.find("div").each(function() {
        var sustr = [$(this).attr("data-nick"), $(this)];
        str.push(sustr);
    });
    str.sort(plSort);
    playlist.html();
    $.each(str, function(key, value) {
        playlist.append(value[1]);
    });
}
;
snowball.newMove = function(data) {
    if (snowball.active) {
        battleMain.removeClass("battlewait");
    }
    var text = "Ход " + data.step + "<hr/>";
    if (data.msg) {
        data.msg.forEach(function(el) {
            text += el.replace(u.login, '<span class="green">' + u.login + "</span>") + "<br/>";
        });
    }
    game.writeText(text);
    if (data.del) {
        data.del.forEach(function(el) {
            if (el == u._id) {
                showWall("//loday.ru/images/snowball/shot.gif", true);
                battleMain.addClass("insnow");
                showMessage("Вас забросали снегом :(<br/> Вам удастся продолжить борьбу, если ваша команда выиграет этот раунд и &quot;откопает&quot; Вас");
                snowball.active = false;
            }
            battleDiv.find("#" + el).addClass("snowman");
            snowSelect.find('option[value="' + el + '"]').remove();
        });
    }
    if (data.pl) {
        for (var i in data.pl) {
            if (data.pl.hasOwnProperty(i)) {
                var plDiv = battleDiv.find("#" + i).find(".snowblock");
                plDiv.css("width", parseInt(plDiv.css("height")) * data.pl[i] + "px");
            }
        }
    }
    snowball.time = 0;
    sound("notify");
}
;
snowball.roundName = {
    1: "1/32 финала",
    2: "1/16 финала",
    3: "1/8 финала",
    4: "1/4 финала",
    5: "Полуфинал",
    6: "Финал"
};
snowball.setTime = function() {
    snowball.time++;
    var lost = 30 - snowball.time
      , timeText = "0:" + ((lost > 9) ? lost : (lost > 0 ? "0" + lost : "00"));
    battleMain.find("b").html(timeText);
}
;
snowball.end = function(text) {
    clearInterval(snowball.timer);
    warningWindow(text, goToRoom);
}
;
var newGame = {
    creating: false,
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
    }
};
var plC = $("#plCount");
var st = $("#stavka");
function setCount(step) {
    var newCount = parseInt(plC.html()) + step;
    if (newCount >= newGame.countForType[newGame.type][0] && newCount <= newGame.countForType[newGame.type][1]) {
        newGame.plCount = newCount;
        plC.html(newCount);
    }
}
function setStavka(step) {
    var mymoney = Math.floor(u.money / 1000);
    var newStavka = parseInt(st.html()) + step;
    if (newStavka > mymoney) {
        newStavka = mymoney;
        $("#about").html("Игра на последние деньги :)");
    }
    if (newStavka >= newGame.minStavka && newStavka <= newGame.maxStavka) {
        newGame.stavka = newStavka;
    }
    st.html(newGame.stavka);
}
var ch1 = $("#check1");
var ch2 = $("#check2");
var ch3 = $("#check3");
var ch4 = $("#check4");
var ch5 = $("#check5");
var ch6 = $("#check6");
function checkOptions() {
    var mymoney = Math.floor(u.money / 1000);
    if (u.club !== 1) {
        ch2.prop("checked", false);
        ch3.prop("checked", false);
        ch4.prop("checked", false);
        ch5.prop("checked", false);
        ch6.prop("checked", false);
    }
    if (ch3.is(":checked") || ch4.is(":checked") || ch5.is(":checked") || ch6.is(":checked")) {
        ch1.prop("checked", "checked");
        ch2.prop("checked", "checked");
    }
    if (ch2.is(":checked")) {
        ch1.prop("checked", "checked");
    }
    var scores = 0;
    var oldStyle = newGame.style;
    newGame.style = 0;
    if (ch1.is(":checked")) {
        scores += 1;
        newGame.style += 1;
    }
    if (ch2.is(":checked")) {
        scores += 10;
        newGame.style += 10;
    }
    if (ch3.is(":checked")) {
        scores += 100;
        newGame.style += 100;
    }
    if (ch4.is(":checked")) {
        scores += 100;
        newGame.style += 1000;
    }
    if (ch5.is(":checked")) {
        scores += 100;
        newGame.style += 10000;
    }
    if (ch6.is(":checked")) {
        scores += 100;
        newGame.style += 100000;
    }
    if (scores == 0) {
        newGame.minStavka = 1;
        newGame.maxStavka = 2;
    }
    if (scores == 1) {
        newGame.minStavka = 1;
        newGame.maxStavka = 4;
    }
    if (scores > 10) {
        newGame.minStavka = 2;
        newGame.maxStavka = 16;
    }
    if (scores > 100) {
        newGame.minStavka = 4;
        newGame.maxStavka = 32;
    }
    if (scores > 200) {
        newGame.minStavka = 8;
        newGame.maxStavka = 64;
    }
    if (scores > 300) {
        newGame.minStavka = 16;
        newGame.maxStavka = 128;
    }
    if (scores > 400) {
        newGame.minStavka = 32;
        newGame.maxStavka = 500;
    }
    if (newGame.stavka < newGame.minStavka) {
        newGame.stavka = newGame.minStavka;
    }
    if (newGame.stavka > newGame.maxStavka) {
        newGame.stavka = newGame.maxStavka;
    }
    if (newGame.stavka > mymoney) {
        var ch = $(this);
        ch.prop("checked", !ch.prop("checked"));
        newGame.stavka = mymoney;
        newGame.style = oldStyle;
    }
    st.html(newGame.stavka);
}
function setGame(gtype) {
    newGame.type = (gtype) ? parseInt(gtype) : $("#gamePanel").find("input:checked + label").attr("data-gametype");
    if (newGame.type == 1 || newGame.type == 4) {
        $("#gametype1_4").addClass("checkedGameType");
    } else {
        $("#gametype1_4").removeClass("checkedGameType");
    }
    var newCount = newGame.countForType[newGame.type][0];
    newGame.plCount = newCount;
    plC.html(newCount);
}
function checkGame() {
    newGame.type = $("#gamePanel").find("input:checked + label").attr("data-gametype");
    if (plC.html() < newGame.countForType[newGame.type][0]) {
        newGame.plCount = newGame.countForType[newGame.type][0];
        plC.html(newGame.plCount);
    }
    if (plC.html() > newGame.countForType[newGame.type][1]) {
        newGame.plCount = newGame.countForType[newGame.type][1];
        plC.html(newGame.plCount);
    }
}
$("#gamePanel").find("label").click(function() {
    setGame($(this).attr("data-gametype"));
});
$('.gameoptions input[type="checkbox"]').change(function(event) {
    if (!u.club && ["check2", "check3", "check4", "check5", "check6"].indexOf(event.target.id) != -1) {
        showMessage('Создавать закрытые игры могут только члены клуба <span class="clubname"></span>!');
        event.stopPropagation();
        event.preventDefault();
        $(this).prop("checked", false);
        return false;
    }
    checkOptions();
    return true;
});
$("#about").keypress(function(event) {
    var key = event.which;
    var count = $(this).attr("maxlength");
    var a = $("#about").val().length;
    if (a >= count && key != 8 && key != 46) {
        sound("signal");
        return false;
    } else {
        return true;
    }
});
function createGame() {
    checkGame();
    checkOptions();
    newGame.plCount = parseInt(plC.html()) || 8;
    newGame.stavka = parseInt(st.html()) || 1;
    if (newGame.creating) {
        return;
    }
    newGame.creating = true;
    var about = $("#about").val().trim()
      , gameObj = {
        type: "create",
        count: newGame.plCount,
        sum: newGame.stavka,
        gametype: newGame.type,
        style: newGame.style,
        selectRole: $("#selectRole").prop("checked"),
        about: about
    };
    if (about.toLowerCase().indexOf("мур") > -1 || about.toLowerCase().indexOf("мяу") > -1) {
        gameObj.cat = true;
    }
    sendToSocket(gameObj);
    closewindow();
    setTimeout(function() {
        newGame.creating = false;
    }, 1000);
}
function setStenka() {
    $("#gamePanel").find("label").eq(1).click();
    ch1.prop("checked", true);
    ch2.prop("checked", true);
    ch3.prop("checked", false);
    ch4.prop("checked", true);
    ch5.prop("checked", false);
    ch6.prop("checked", true);
    plC.html("16");
    st.html("8");
    $("#about").val("0-0 играем?");
    showWindow("newgame");
}
function setCHP() {
    $("#gamePanel").find("label").eq(0).click();
    ch1.prop("checked", true);
    ch2.prop("checked", true);
    ch3.prop("checked", false);
    ch4.prop("checked", true);
    ch5.prop("checked", false);
    ch6.prop("checked", true);
    plC.html("8");
    st.html("8");
    $("#about").val("ЧП");
    showWindow("newgame");
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var ticketK = 0.7
  , selectYet = false;
var ticketBlock = $("#tickets");
function showTickets(count, noactive) {
    var curDiv;
    var w = container.width() - 40;
    var h = container.height() - 40;
    var k = (h / w) * ticketK;
    var y = Math.ceil(Math.sqrt(count * k));
    var x = Math.ceil(count / y);
    var ticketHeight = Math.floor(h / y);
    var ticketWidth = Math.floor(ticketHeight * ticketK);
    if (ticketWidth > 70) {
        ticketWidth = 70;
    }
    if (ticketHeight > 100) {
        ticketHeight = 100;
    }
    ticketBlock.html("");
    if (count > 30) {
        ticketBlock.css("padding-top", "0");
        curDiv = ticketBlock;
    } else {
        ticketBlock.css("padding-top", ((ticketBlock.outerHeight() / 2) - 200) + "px");
        ticketBlock.append("<section></section>");
        ticketBlock.append("<section></section>");
        ticketBlock.append("<section></section>");
        var ticketSide = Math.floor((count - 10) / 2);
        curDiv = ticketBlock.find("section").eq(0);
    }
    for (var i = 0; i < count; i++) {
        var newTicket = $('<div data-id="' + i + '" style="transform:rotate(' + getRandomInt(-5, 5).toString() + 'deg)"></div>');
        newTicket.bind("click touchstart").click(function() {
            if (!selectYet) {
                selectYet = true;
                var num = $(this).attr("data-id");
                $(this).addClass("clicked-ticket");
                sendToSocket({
                    type: "ticket",
                    ticket: num
                });
            }
        });
        if (noactive && noactive.indexOf(i) > -1) {
            newTicket.addClass("studTicket");
        }
        curDiv.append(newTicket);
        if (ticketSide && i == ticketSide - 1) {
            curDiv = ticketBlock.find("section").eq(1);
        }
        if (ticketSide && i == ticketSide + 9) {
            curDiv = ticketBlock.find("section").eq(2);
        }
    }
    ticketBlock.find("div").css("width", ticketWidth + "px").css("height", ticketHeight + "px");
    selectYet = false;
    ticketBlock.show();
}
function hideTickets() {
    ticketBlock.find("div").remove();
    ticketBlock.hide();
}
function copyTicket(num) {
    var curTicket = ticketBlock.find("div").eq(num);
    curTicket.css("visibility", "hidden");
    var w = curTicket.css("width")
      , h = curTicket.css("height")
      , coords = curTicket.position()
      , newTicket = $('<div class="newTicket"></div>').html("<div><div></div><div></div></div>");
    newTicket.css("width", h).css("height", w).css("left", coords.left + "px").css("top", coords.top + "px").css("font-size", Math.floor(parseInt(w) / 10) + "px");
    ticketBlock.append(newTicket);
    return newTicket;
}
function hideTicket(num) {
    var newTicket = copyTicket(num)
      , animateParams = " 1s 5ms 1 normal ease-in forwards"
      , classes = {
        1: {
            animation: "hideTicket1" + animateParams,
            webkitAnimation: "hideTicket1" + animateParams
        },
        2: {
            animation: "hideTicket2" + animateParams,
            webkitAnimation: "hideTicket2" + animateParams
        },
        3: {
            animation: "hideTicket3" + animateParams,
            webkitAnimation: "hideTicket3" + animateParams
        },
        4: {
            animation: "hideTicket4" + animateParams,
            webkitAnimation: "hideTicket4" + animateParams
        }
    };
    if (b.hasClass("noeffect")) {
        newTicket.hide();
    } else {
        newTicket.css(classes[[1, 2, 3, 4].randomValue()]);
    }
}
function ticketOpen(num, res) {
    if (res) {
        sound("signal");
        var rotatingTicket = copyTicket(num);
        rotatingTicket.addClass("activeTicket");
        rotatingTicket.find("div>div").eq(1).addClass("ticket" + res);
        if (b.hasClass("noeffect")) {
            rotatingTicket.find("div>div").eq(0).addClass("ticket" + res);
        } else {
            setTimeout(function() {
                rotatingTicket.find("div>div").eq(0).addClass("ticket" + res);
            }, 1000);
        }
    } else {
        hideTicket(num);
        selectYet = false;
    }
}
var statDiv = $(".stat")
  , specGameAbout = $("#specialAbout");
statDiv.find("button").click(createSpecialGame);
specGameAbout.keydown(function(e) {
    if (e.which == 13) {
        createSpecialGame();
    }
});
function createSpecialGame() {
    if (newGame.creating) {
        return;
    }
    newGame.creating = true;
    var g = {}
      , about = specGameAbout.val().trim();
    var selGameType = statDiv.find("input[name=sgametype]:checked").val();
    switch (selGameType) {
    case "1":
        g.count = 8;
        g.stavka = 5;
        g.type = 2;
        g.style = 101011;
        g.botwall = true;
        break;
    case "2":
        g.count = 5;
        g.stavka = 5;
        g.type = 6;
        g.style = 1011;
        g.botwall = true;
        break;
    case "3":
        g.count = 16;
        g.stavka = 8;
        g.type = 2;
        g.style = 101011;
        g.botwall = false;
        break;
    case "4":
        g.count = 10;
        g.stavka = 4;
        g.type = 6;
        g.style = 1011;
        g.botwall = false;
        break;
    case "5":
        g.count = 14;
        g.stavka = 7;
        g.type = 11;
        g.style = 101011;
        g.botwall = false;
        break;
    case "6":
        g.count = 24;
        g.stavka = 5;
        g.type = 10;
        g.style = 101011;
        g.botwall = false;
        break;
    case "7":
        g.count = 8;
        g.stavka = 4;
        g.type = 4;
        g.style = 1011;
        g.botwall = false;
        break;
    default:
        g.count = 8;
        g.stavka = 2;
        g.type = 1;
        g.style = 0;
        g.botwall = false;
        break;
    }
    sendToSocket({
        type: "create",
        count: g.count,
        sum: g.stavka,
        gametype: g.type,
        style: g.style,
        botwall: g.botwall,
        selectRole: $("#specialSelRole").prop("checked"),
        about: about
    });
    closewindow();
    setTimeout(function() {
        newGame.creating = false;
    }, 1000);
}
var UG = $(".userGame");
function UGinc(elid, step) {
    var el = UG.find("#" + elid)
      , val = parseInt(el.html()) + step;
    if (val < 0) {
        return;
    }
    switch (elid) {
    case "UGplCount":
        if (val < 5) {
            val = 5;
        }
        if (val > 30) {
            val = 30;
        }
        break;
    case "UGstavka":
        if (val > 500) {
            val = 500;
        }
        if (val > 2 && !UG.find("#UGcheck1").prop("checked") && !UG.find("#UGcheck2").prop("checked")) {
            val = 2;
        }
        break;
    case "UGrobb":
        var pohMax = Math.floor(parseInt(UG.find("#UGplCount").html()) / 2) - 1;
        if (UG.find("#UGhrobb").prop("checked")) {
            pohMax -= 1;
        }
        if (val > pohMax) {
            val = pohMax;
        }
        if (val < 1) {
            val = 1;
        }
        break;
    case "UGitem2":
        if (val > 3) {
            val = 3;
        }
        break;
    }
    el.html(val);
}
UG.find("#UGcheck4").change(function(event) {
    var editopt = $("#UGitemsedit");
    if ($(this).prop("checked")) {
        editopt.addClass("noactive");
    } else {
        editopt.removeClass("noactive");
    }
    return true;
});
function createUserGame() {
    if (newGame.creating) {
        return;
    }
    var dataSending = function(cgo) {
        newGame.creating = true;
        sendToSocket(cgo);
        closewindow();
        setTimeout(function() {
            newGame.creating = false;
        }, 1000);
    }
      , about = UG.find("#UGabout").val().trim()
      , count = parseInt(UG.find("#UGplCount").html())
      , sum = parseInt(UG.find("#UGstavka").html())
      , style = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0
    }
      , roles = {}
      , params = {}
      , special = UG.find("#UGspecialGame").prop("checked")
      , selrole = UG.find("#UGselectRole").prop("checked");
    if (UG.find("#UGcheck1").is(":checked")) {
        style[0] = 1;
    }
    if (UG.find("#UGcheck2").is(":checked")) {
        style[0] = 2;
    }
    if (UG.find("#UGcheck3").is(":checked")) {
        style[1] = 1;
    }
    if (UG.find("#UGcheck4").is(":checked")) {
        style[2] = 1;
    }
    if (UG.find("#UGcheck5").is(":checked")) {
        style[3] = 1;
    }
    if (UG.find("#UGcheck6").is(":checked")) {
        style[4] = 1;
    }
    if (style[2] == 0) {
        var item2count = parseInt(UG.find("#UGitem2").html());
        if (item2count < 3) {
            params.item2 = item2count;
        }
        if (UG.find("#UGitem4").is(":checked")) {
            params.item4 = 1;
        }
        if (UG.find("#UGbonus").is(":checked")) {
            params.bonus = 1;
        }
    }
    roles[2] = parseInt(UG.find("#UGrobb").html());
    roles[6] = parseInt(UG.find("#UGjeal").html());
    if (UG.find("#UGhrobb").is(":checked")) {
        roles[3] = 1;
    }
    if (UG.find("#UGduty").is(":checked")) {
        roles[4] = 1;
    }
    if (UG.find("#UGassis").is(":checked")) {
        roles[5] = 1;
    }
    if (UG.find("#UGsleep").is(":checked")) {
        roles[7] = 1;
    }
    if (UG.find("#UGcat").is(":checked")) {
        roles[8] = 1;
    }
    if (UG.find("#UGadv").is(":checked")) {
        roles[9] = 1;
    }
    if (roles[5] && !roles[4]) {
        showMessage('Для роли <span class="assis"></span> обязательно наличие в начале партии роли <span class="duty"></span>');
        return;
    }
    var activeRoles = 0;
    for (var i in roles) {
        if (roles.hasOwnProperty(i)) {
            activeRoles += roles[i];
        }
    }
    var cgo = {
        type: "userGame",
        about: about,
        count: count,
        sum: sum,
        style: style,
        special: special,
        selectRole: selrole,
        roles: roles
    };
    if (UG.find("#UGManModeGame").prop("checked")) {
        cgo.man = true;
    }
    if (UG.find("#UGShortNights").prop("checked")) {
        cgo.shortnight = true;
    }
    if (Object.size(params) > 0) {
        cgo.params = params;
    }
    if (about.indexOf("#") > -1) {
        cgo.ip = true;
    }
    if (!roles[6] && cgo.man) {
        showMessage('Хотя бы одна роль <span class="jeal"></span> обязательна для режима <span class="jeal"></span>-одиночка');
        return;
    }
    if (activeRoles > count) {
        modalWindow("Количество активных ролей (" + activeRoles + ") превышает количество игроков (" + count + ") в партии.<br/>Изменить количество игроков на " + activeRoles + "?", function() {
            cgo.count = activeRoles;
            dataSending(cgo);
        });
    } else {
        dataSending(cgo);
    }
}
$("#UGcreateGame").click(createUserGame);
newGame.loadSaves = function() {
    var saves = "";
    $.each(newGame.saves, function(key, value) {
        if (!value.UGabout) {
            value.UGabout = showDate(key, true);
        }
        saves = '<option value="' + key + '">' + (value.UGabout.length > 23 ? value.UGabout.substring(0, 20) + "..." : value.UGabout) + "</option>" + saves;
    });
    $("#UGsaves").html("<option>выбрать</option>" + saves);
}
;
if (lStorage.getItem("saves")) {
    newGame.saves = JSON.parse(lStorage.getItem("saves"));
} else {
    newGame.saves = {};
}
newGame.loadSaves();
UG.find("#UGdelete").click(function() {
    var delSave = $("#UGsaves").val();
    if (newGame.saves[delSave]) {
        delete newGame.saves[delSave];
        lStorage.setItem("saves", JSON.stringify(newGame.saves));
        newGame.loadSaves();
    } else {
        showMessage("Выберите шаблон для удаления");
    }
});
UG.find("#UGsave").click(function() {
    var cursave = {};
    UG.find(":checkbox, span.svalue").each(function(index) {
        var cur = $(this)
          , curid = cur.attr("id");
        if (curid) {
            cursave[curid] = cur.hasClass("check") ? cur.prop("checked") : cur.html();
        }
    });
    cursave.UGabout = $("#UGabout").val();
    newGame.saves[Date.now()] = cursave;
    lStorage.setItem("saves", JSON.stringify(newGame.saves));
    newGame.loadSaves();
});
UG.find("#UGsaves").change(function() {
    var cursave = $(this).val();
    if (newGame.saves[cursave]) {
        $.each(newGame.saves[cursave], function(key, value) {
            var curel = UG.find("#" + key);
            if (curel) {
                if (curel.attr("id") == "UGabout") {
                    curel.val(value);
                } else {
                    if (curel.hasClass("check")) {
                        curel.prop("checked", value);
                    } else {
                        curel.html(value);
                    }
                }
            }
        });
    }
});
var alarmWin = $('<div id="alarm"></div>').appendTo(container);
function showAlarms() {
    warningWindow('<div class="alarmlist">' + alarmWin.html() + "</div>");
    var alWin = $(".alarmlist").parents(".modal");
    alWin.scrollTop(alWin[0].scrollHeight);
}
function alarm(text, nosound) {
    if (noAlarm) {
        return;
    }
    $("<div/>", {
        "data-time": showDate(Date.now(), true),
        text: text
    }).appendTo(alarmWin).click(showAlarms).fadeIn(600).delay(4000).fadeOut(500);
    if (!nosound) {
        sound("notify");
    }
}
function convertAnimate(envelope) {
    var html = $("html")
      , pageH = html.height()
      , pageW = html.width();
    envelope.x -= 0.5;
    var x = envelope.x;
    var y = x * Math.sin(x) + 0.3 * x * x;
    envelope.y = 100 - Math.floor(y / 28);
    y = Math.floor(pageH * envelope.y / 100) - 80;
    x = Math.floor(pageW * x / 100);
    if (x < 1) {
        clearInterval(envelope.timer);
        envelope.x = 100;
        envelope.y = 0;
    } else {
        envelope.scale = 1.5 - Math.abs(50 - envelope.x) / 100;
        envelope.obj.css("transform", "scale(" + envelope.scale + ")");
        envelope.obj.css("top", y + "px");
        envelope.obj.css("left", x + "px");
    }
}
function showConvert(callback) {
    var newObj = $('<div class="envelope"></div>').appendTo(container);
    var convert = {
        obj: newObj,
        x: 100,
        y: 0,
        scale: 1,
        timer: 0
    };
    convert.obj.show();
    if (noconvert) {
        convert.x = 1;
        convertAnimate(convert);
    } else {
        convert.timer = setInterval(function() {
            convertAnimate(convert);
        }, 50);
    }
    convert.obj.click(function() {
        clearInterval(convert.timer);
        $(this).remove();
        if (callback) {
            callback();
        }
    });
}
function friendQuery(type, fid, success) {
    if (fid == u._id) {
        showMessage("Вам грустно и одиноко? Но это не повод зацикливаться на себе! Поглядите вокруг..");
        if (u.friends.indexOf(fid) > -1) {
            sendToSocket({
                type: "friend-del",
                fid: fid
            });
        }
        return;
    }
    if (type == "friend-answer" && success) {
        addFriend(fid, true);
    }
    var out = {};
    out.type = type;
    if (success) {
        out.success = success;
    }
    out.fid = fid;
    sendToSocket(out);
}
function addFriend(fid, add) {
    if (!u.friends) {
        u.friends = [];
    }
    if (add) {
        u.friends.push(fid);
        playersList.find("#" + fid).addClass("green");
    } else {
        u.friends.splice(u.friends.indexOf(fid), 1);
        playersList.find("#" + fid).removeClass("green");
    }
}
function addRed(fid, add) {
    if (add) {
        reds.push(fid);
        playersList.find("#" + fid).addClass("red");
    } else {
        reds.splice(reds.indexOf(fid), 1);
        playersList.find("#" + fid).removeClass("red");
    }
    lStorage.setItem("reds", reds);
}
function getProfile(uid) {
    sendToSocket({
        type: "profile",
        uid: uid
    });
}
var plMenu = $("#playersMenu");
plMenu.find("span").eq(0).click(function() {
    getProfile($(this).parent().attr("data-id"));
});
plMenu.find("span").eq(1).click(function() {
    var fid = $(this).parent().attr("data-id");
    if (fid && fid.indexOf("testplayer") == -1) {
        friendQuery("friend-question", fid);
    }
});
plMenu.find("span").eq(2).click(function() {
    var fid;
    if (fid = $(this).parent().attr("data-id")) {
        addFriend(fid, false);
        friendQuery("friend-del", fid);
    }
});
plMenu.find("span").eq(3).click(function() {
    var fid;
    if (fid = $(this).parent().attr("data-id")) {
        addRed(fid, true);
    }
});
plMenu.find("span").eq(4).click(function() {
    var fid;
    if (fid = $(this).parent().attr("data-id")) {
        addRed(fid, false);
    }
});
function defPosition(event) {
    var x = y = 0;
    if (document.attachEvent != null) {
        x = window.event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        y = window.event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    } else {
        if (!document.attachEvent && document.addEventListener) {
            x = event.clientX + window.scrollX;
            y = event.clientY + window.scrollY;
        }
    }
    return {
        x: x,
        y: y
    };
}
function menu(type, evt) {
    if (game.intuition) {
        return false;
    }
    evt = evt || window.event;
    if (evt.stopPropagation) {
        evt.stopPropagation();
    } else {
        evt.cancelBubble = true;
    }
    var menu = (type == 1) ? document.getElementById("contextMenu") : document.getElementById("playersMenu");
    var html = "";
    switch (type) {
    case 1:
        if (isAppVK) {
            return true;
        }
        html = (isMaffia) ? '<button onclick="showAlarms()">Лог уведомлений</button>' : 'Игра &quot;День Любви&quot; beta<br/>по мотивам Friends For Love<br/> Проблемы с игрой? <a href="http://vk.com/igraffl" target="_blank">Вам сюда</a><br/><sub>Для правильной работы игры используйте браузер Google Chrome или Mozilla Firefox</sub>';
        break;
    case 2:
        if (!evt.target.id || evt.target.id == "players") {
            return false;
        }
        menu.dataset.id = evt.target.id;
        var classMenu = "";
        if (reds && reds.indexOf(evt.target.id) > -1) {
            classMenu += "isred";
        }
        if (u.friends && u.friends.indexOf(evt.target.id) > -1) {
            classMenu += " isgreen";
        }
        if (u._id == evt.target.id) {
            classMenu += " iam";
        }
        if (playersInfoArray[evt.target.id] && playersInfoArray[evt.target.id].bot) {
            classMenu += " bot";
        }
        menu.className = classMenu;
        break;
    default:
        return true;
        break;
    }
    if (html) {
        menu.innerHTML = html;
    }
    menu.style.top = defPosition(evt).y + "px";
    menu.style.left = defPosition(evt).x + "px";
    menu.style.display = "block";
    return false;
}
var isFullScreen = false;
function fullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else {
        if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else {
            if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            }
        }
    }
}
function fullScreenCancel() {
    if (document.cancelFullScreen) {
        document.cancelFullScreen();
    } else {
        if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else {
            if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }
}
function fullScreenToggle() {
    if (isFullScreen) {
        isFullScreen = false;
        fullScreenCancel();
    } else {
        isFullScreen = true;
        fullScreen(document.documentElement);
    }
}
$("#fullScreen").click(fullScreenToggle);
function addHandler(object, event, handler, useCapture) {
    if (object.addEventListener) {
        object.addEventListener(event, handler, useCapture ? useCapture : false);
    } else {
        if (object.attachEvent) {
            object.attachEvent("on" + event, handler);
        }
    }
}
addHandler(document, "contextmenu", function() {
    document.getElementById("contextMenu").style.display = "none";
    document.getElementById("playersMenu").style.display = "none";
    tp.hide();
    ptp.hide();
});
addHandler(document, "click", function(e) {
    document.getElementById("contextMenu").style.display = "none";
    if (e.which != 3 || !e.target || !e.target.parentElement || !e.target.parentElement.id || e.target.parentElement.id !== "players") {
        plMenu.hide();
    }
    tp.hide();
    ptp.hide();
});
$(document).on("click", "strong[data-id]", showProfile);
header.bind("contextmenu touchcancel", function(e) {
    return menu(1, e);
});
playersList.bind("contextmenu", function(e) {
    return menu(2, e);
});
$("output").bind("contextmenu", function(e) {
    if ((e.target.nodeName == "B" || e.target.nodeName == "STRONG") && e.target.getAttribute("data-id")) {
        var uid = e.target.getAttribute("data-id");
        if (e.target.textContent && uid != u._id) {
            var addIs = (reds.indexOf(uid) == -1);
            modalWindow("Хотите " + (addIs ? "игнорировать" : "видеть") + " сообщения игрока " + e.target.textContent + "?", function() {
                addRed(e.target.getAttribute("data-id"), addIs);
            });
        }
        return false;
    }
    return true;
});
function hotkey(event) {
    if (room.length < 3 && event.ctrlKey && event.keyCode == 192) {
        closewindow();
        randomGame();
    }
    if (event.keyCode == 27) {
        closewindow();
    }
}
function keyDown(event) {
    if (event.which == 112) {
        event.preventDefault();
        helper.start();
        return false;
    } else {
        if (event.which == 122) {
            fullScreenToggle();
            return false;
        } else {
            if (event.keyCode == 8 && (event.target.tagName != "INPUT" || event.target.readOnly) && event.target.tagName != "TEXTAREA" && !event.target.getAttribute("contenteditable")) {
                event.preventDefault();
                return false;
            } else {
                return true;
            }
        }
    }
}
inputField.keydown(function(event) {
    if (event.which == 38 && inputField.val() == "") {
        event.preventDefault();
        inputField.val(lastMsg);
        return false;
    } else {
        return true;
    }
});
document.body.onkeyup = hotkey;
document.body.onkeydown = keyDown;
function Unloader() {
    var o = this;
    this.unload = function(evt) {
        var message = "Вы уверены, что хотите покинуть игру?";
        if (typeof evt == "undefined") {
            evt = window.event;
        }
        if (evt) {
            evt.returnValue = message;
        }
        return message;
    }
    ;
    this.resetUnload = function() {
        $(window).off("beforeunload", o.unload);
        setTimeout(function() {
            $(window).on("beforeunload", o.unload);
        }, 2000);
    }
    ;
    this.init = function() {
        $(window).on("beforeunload", o.unload);
        $("a").on("click", function() {
            o.resetUnload;
        });
        $(document).on("submit", "form", function() {
            o.resetUnload;
        });
        $(document).on("keydown", function(event) {
            if ((event.ctrlKey && event.keyCode == 116) || event.keyCode == 116) {
                o.resetUnload;
            }
        });
    }
    ;
    this.init();
}
if (!window.WebSocket) {
    errorText("Ваш браузер не поддерживает технологию веб-сокетов. Пожалуйста, установите последююю версию браузера Google Chrome или Mozilla Firefox.");
}
var parseQueryString = function(strQuery) {
    var strSearch = strQuery.substr(1)
      , strPattern = /([^=]+)=([^&]+)&?/ig
      , arrMatch = strPattern.exec(strSearch)
      , objRes = {};
    while (arrMatch != null) {
        objRes[arrMatch[1]] = arrMatch[2];
        arrMatch = strPattern.exec(strSearch);
    }
    return objRes;
};
function showGroupWidget() {
    if (typeof VK == "undefined") {
        console.log("not VK");
        return;
    }
    var groupId = isMaffia ? 109864615 : 39094155;
    $("#vk_groups").html("");
    VK.Widgets.Group("vk_groups", {
        mode: 0,
        width: "200",
        height: "216",
        color1: isMaffia ? "000000" : "fbd7c5",
        color2: isMaffia ? "000000" : "FFFFFF",
        color3: isMaffia ? "5E81A8" : "827c99"
    }, groupId);
}
function appSocialButton() {
    if (typeof VK == "undefined") {
        return;
    }
    var groupId = isMaffia ? 109864615 : 39094155
      , appId = isMaffia ? 5206919 : 5065752
      , appTitle = isMaffia ? "Мафия Онлайн" : "День Любви"
      , appImage = document.location.protocol + (isMaffia ? "//loday.ru/images/maffia/applogo.png" : "//loday.ru/images/gift.png");
    VK.init(function() {
        VK.callMethod("setTitle", appTitle);
        VK.Widgets.Like("vk_like", {
            height: 24,
            pageUrl: "http://vk.com/app" + appId,
            pageTitle: appTitle,
            pageImage: appImage,
            type: "button"
        });
        $("#vk_share").html(VK.Share.button({
            url: "http://vk.com/app" + appId,
            title: appTitle,
            image: appImage
        }, {
            type: "custom",
            text: "Рассказать друзьям"
        }));
        VK.Widgets.ContactUs("vk_contact_us", {
            text: "Задать вопрос",
            height: 24
        }, -groupId);
        VK.Widgets.Subscribe("vk_subscribe", {
            soft: 1
        }, -groupId);
        VK.api("friends.get", {}, function(dataAllFriends) {
            VK.api("friends.getAppUsers", {}, function(dataAppUsers) {
                var yesApp = dataAppUsers.response
                  , noApp = dataAllFriends.response
                  , frCount = noApp.length
                  , appCount = yesApp.length;
                if (appCount < frCount) {
                    for (var i = 0; i < appCount; i++) {
                        for (var j = 0; j < frCount; j++) {
                            if (yesApp[i] == noApp[j]) {
                                noApp.splice(j, 1);
                                break;
                            }
                        }
                    }
                }
                var noAppCount = noApp.length
                  , getIdsArr = yesApp;
                if (noAppCount < 4) {
                    getIdsArr = getIdsArr.concat(noApp);
                } else {
                    var uidArr = [];
                    for (i = 0; i < 5; i++) {
                        var max = noApp.length - 1;
                        var rand = Math.floor(Math.random() * max);
                        uidArr.push(noApp[rand]);
                        noApp.splice(rand, 1);
                    }
                    getIdsArr = getIdsArr.concat(uidArr);
                }
                var noAppUids = getIdsArr.join(",");
                VK.api("getProfiles", {
                    uids: noAppUids,
                    fields: "first_name,last_name,photo_medium"
                }, function(data) {
                    var profilesCount = data.response.length
                      , yesAppStr = ""
                      , noAppStr = "";
                    for (var i = 0; i < profilesCount; i++) {
                        var isInstall = yesApp.indexOf(data.response[i].uid) > -1
                          , adduser = '<a href="http://vk.com/id' + data.response[i].uid + '" title="Открыть профиль" target="_blank"><figure' + (isInstall ? "" : ' class="noinstall"') + '><img src="' + data.response[i].photo_medium + '" /><figcaption>' + data.response[i].first_name + " " + data.response[i].last_name + "</figcaption></figure></a> ";
                        if (isInstall) {
                            yesAppStr += adduser;
                        } else {
                            noAppStr += adduser;
                        }
                    }
                    win.find(".info").append('<div class="vkfriends"></div>');
                    $(".vkfriends").html("<p>Уже установили приложение (" + appCount + "):</p>" + yesAppStr + "<hr/><p>Еще не знают о Мафии Онлайн (" + noAppCount + ")</p>" + noAppStr + "<hr/>");
                    $("<div/>", {
                        id: "vkfriends-button"
                    }).click(function() {
                        showWindow("vkfriends");
                    }).appendTo(outside);
                });
            });
        });
    }, function() {
        console.log("vkapp failed");
        if (logs) {
            logs.push("vkapp failed");
        }
    });
}
if (isAppVK) {
    var qStr = parseQueryString(window.location.search);
    if (!qStr.viewer_id || !qStr.auth_key) {
        errorText("Ошибка подключения аккаунта ВКонтакте: " + document.cookie);
        errorText = function() {}
        ;
    }
    createCookie("vid", qStr.viewer_id, 7);
    createCookie("auth", qStr.auth_key, 7);
    if (qStr.user_id && qStr.user_id != qStr.viewer_id) {
        createCookie("invite-vk", qStr.user_id, 7);
    }
    if (mafApp) {
        createCookie("mafApp", 1, 1);
    } else {
        createCookie("mafApp", "", -1);
    }
    $.cachedScript("//vk.com/js/api/xd_connection.js?2").done(function(script, textStatus) {
        $.cachedScript("//vk.com/js/api/share.js?95").done(function(script, textStatus) {
            appSocialButton();
            payDiv.find(".pay-item").click(function() {
                var params = {
                    type: "item",
                    item: $(this).attr("data-item")
                };
                VK.callMethod("showOrderBox", params);
            });
        });
    });
} else {
    createCookie("vid", "", -1);
    if (!mobile) {
        $.cachedScript("//vk.com/js/api/openapi.js?147").done(function(script, textStatus) {
            showGroupWidget();
        });
    }
}
var ws;
function socketConnect(retry) {
    try {
        console.log("connecting...");
        ws = new WebSocket("ws" + ((window.location.protocol == "https:") ? "s://" + domain + ":9090" : "://" + domain + ":9000"));
        if (!retry) {
            ws.onerror = function(event) {
                errorText("Произошла ошибка при установке соединения. Проверьте настройки браузера, фаервола и интернет-соединения.");
                ws.close();
            }
            ;
        }
        ws.onclose = function(event) {
            var closeText = "";
            switch (event.code) {
            case 1000:
                closeText = "Браузер закрыл соединение";
                break;
            case 1001:
                closeText = "Переход со страницы";
                break;
            case 1006:
                closeText = "Соединение прервано (обрыв связи)";
                break;
            case 4000:
                closeText = "Соединение разорвано (обнаружена чрезмерная активность)";
                break;
            case 4001:
                closeText = "К сожалению, ваш аккаунт заблокирован";
                break;
            case 4002:
                closeText = "Только что в ваш аккаунт был выполнен еще один вход";
                break;
            case 4003:
                closeText = "Сбой интернет-соединения";
                break;
            case 4004:
                closeText = "Сервер исключил Вас из-за неактивности соединения";
                break;
            case 4005:
                closeText = "Соединение разорвано из-за повторного подключения";
                break;
            default:
                closeText = "Обрыв связи (" + event.code + ")";
            }
            console.log(event);
            var obj = {
                message: closeText,
                color: "#ff0000",
                from: "[server]"
            };
            if (event.wasClean && event.code != 1006) {
                if (event.code == 4000 || event.code == 4001) {
                    modalWindow(obj.message, function() {
                        errorText(closeText);
                    });
                } else {
                    modalWindow(obj.message + "<br/> Обновить страницу?", function() {
                        window.location.reload();
                    });
                }
            } else {
                showNewDiv('<div class="blue">Идет попытка восстановить соединение...<br/></div>');
                setTimeout(function() {
                    socketConnect(true);
                }, 3000);
            }
            showNewMessage(obj);
        }
        ;
        ws.onopen = function() {
            var authObj = {
                type: "authorize",
                reconnect: retry,
                mode: isMaffia
            };
            if (isAppVK && !getCookie("vid")) {
                authObj.data = {
                    vid: qStr.viewer_id,
                    auth: qStr.auth_key,
                    mafApp: qStr.maffia
                };
            }
            if (server2) {
                authObj.server2 = true;
            }
            setTimeout(sendToSocket, 500, authObj);
            $(function() {
                if (!isAppVK && typeof window.obUnloader != "object") {
                    window.obUnloader = new Unloader();
                }
            });
            ws.onerror = function() {}
            ;
        }
        ;
        console.log("connected");
    } catch (e) {
        warningWindow("Невозможно установить соединение с сервером.");
    }
    ws.onmessage = socketEvent;
}
if (isToday("23.2.2018") || isToday("24.2.2018") || isToday("25.2.2018")) {
    $('<script type="text/javascript" src="/js/february23.js?240218"><\/script>').appendTo(b);
    b.addClass("february23");
}
