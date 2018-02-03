var moder = {};

function TextAreaMultiStrings(el){
    var vars = el.val().split(/\n/);
    var variants = [];
    for (var i=0;i<vars.length;i++) {
        if(/\S/.test(vars[i])){
            variants.push(escapeHtml($.trim(vars[i])));
        }
    }
    return variants;
}

$('output').unbind('contextmenu').bind('contextmenu', function(e){
    if( (e.target.nodeName=='B' || e.target.nodeName=='STRONG') && e.target.getAttribute('data-id')){
        banPanel.find('strong').html(e.target.textContent);
        banPanel.attr('data-plid',e.target.getAttribute('data-id')).show();
        return false;
    }
    return true;
});

var banPanel = $('<div class="banPanel"><strong></strong><label>На <select><option value="1">1 минуту</option><option value="5">5 минут</option><option value="10">10 минут</option>'
    +'<option value="15">15 минут</option><option value="30">30 минут</option><option value="60">1 час</option><option value="120">2 часа</option>'
    +'<option value="360">6 часов</option></select></label><button data-action="ban">выдать бан</button><br/><button data-action="noban">Разбанить</button><br/>'
    +'<button data-action="info">Информация об игроке</button>'+(u.moder===true?'<button data-action="newModer">Назначить модератором</button>':'')+'</div>');
$('<div class="close"></div>').click(function(){banPanel.hide()}).appendTo(banPanel);
banPanel.appendTo(b);
banPanel.find('button').click(function(){
    var plID = banPanel.attr('data-plid'),
        nick = banPanel.find('strong').html(),
        act = $(this).attr('data-action');
    if(!plID || !act) return;
    switch(act){
        case 'ban': moder.ban(banPanel.find('select').val(),plID,nick); break;
        case 'noban': moder.ban(false,plID,nick); break;
        case 'info': sendToSocket({type:'moder',action:'plInfo',id:plID}); break;
        case 'newModer':
            modalWindow('Вы действительно хотите назначить этого игрока ('+nick+') модератором?',function(){
                sendToSocket({type:'moder',action:'editModer',add:true,id:plID});
            });
            break;
    }
    banPanel.hide();
});
moder.ban = function(time,id,nick){
    var text = (time)?'Выдать бан на '+time+' мин игроку '+nick+'?':'Снять бан с игрока '+nick+'?';
    modalWindow(text,function(){
        sendToSocket({type:'moder',action:'ban',id:id,time:time});
    });
};

plMenu.append('<span data-title="Информация об игроке" style="background:url(/images/edit.png) 5px 5px no-repeat"></span>');
plMenu.find('span').eq(5).click(function(){
    sendToSocket({type:'moder',action:'plInfo',id:$(this).parent().attr('data-id')});
});

function showInfoModer(data){
    var vkProfile = (data.profile && data.profile.indexOf('vkontakte')>-1),
        text = 'IP: <a href="http://www.ip-ping.ru/ipinfo/?ipinfo='+data.ip+'" target="_blank">'+data.ip+'</a><br/>';
    text += 'Cоц.профиль: <a href="'+(vkProfile?data.profile.replace('vkontakte','http://vk.com/id'):data.profile)+'" target="_blank">'
        +(vkProfile?'ВК-приложение':data.profile)+'</a><br/>';
    if(data.accs && data.accs.length>1){
        text += 'Все аккаунты на ip ('+data.accs.length+'): <blockquote>'+data.accs.join('<br/>')+'</blockquote><br/>';
    }else{
        text += 'Нет других аккаунтов на этом ip';
    }
    warningWindow(text);
}


var adnews,adtotal;
$('<link href="/css/moder.css?1503" rel="stylesheet" />').appendTo(b);
var adminPanel = $('<div>').addClass('adpanel').load('/html/adpanel.html?1002', function(){
    adnews = $('.addNews');
    adnews.find('input[type=color]').change(function(){
        adnews.find('div').css('color',$(this).val());
    });
    adtotal = $('.addTotal');
});
if(u.moder===true) adminPanel.addClass('admin-status');
win.find('.info').append(adminPanel);

var adminButton = $('<div class="button-adpanel" data-title="Администрирование"></div>').click(function(){
    $('.openNow').removeClass('openNow');
    showWindow('adpanel');
});
if(u.moder) $('#left-panel').prepend(adminButton);

adminPanel.click(function(e){
    var cb = $(e.target);
    if(cb.hasClass('extend')){
        if(cb.hasClass('openNow')){
            cb.removeClass('openNow');
            return;
        }else{
            cb.addClass('openNow');
        }
    }
    if(e.target.id){
        var tmp = e.target.id.split('-');
        if(tmp[1] && moder[tmp[1]]) moder[tmp[1]]();
    }
});

moder.insertUrl = function(){
    var inps = adnews.find('p').find('input');
    if(!inps[0].value || !inps[1].value){
        showMessage('Обязательно нужно указать ссылку и текст для нее');
        return;
    }
    var link = '<a href="'+escapeHtml(inps[0].value)+'" target="_blank" data-title="';
    link += (inps[2] && inps[2].value)?escapeHtml(inps[2].value):'перейти по ссылке';
    link += '">'+escapeHtml(inps[1].value)+'</a>';
    adnews.find('div').append('<br/>'+link);
};
moder.createNew = function(){
    var color = adnews.find('input[type=color]').val();
    var text = adnews.find('div').html().replace("'","&#039;");
    if(color && color!='#000000') text = '<span style="color:'+color+'">'+text+'</span>';
    modalWindow('Вы действительно хотите опубликовать эту новость?<br/> '+text,function(){
        sendToSocket({type:'moder',action:'addNews',text:text});
    });
};
moder.showNews = function(){
    sendToSocket({type:'moder',action:'showNews'});
};
moder.delNews = function(newsId){
    modalWindow('Вы действительно хотите удалить эту новость?<br/> Отменить операцию будет невозможно!',function(){
        sendToSocket({type:'moder',action:'delNews',id:newsId});
    });
};

moder.showAllNews = function(news){
    var  newsDiv = $('#ad-showNews').next(), allNews = '';
    if(news && news.length>0){
        news.forEach(function(el){
            allNews += '<blockquote>'+el.text+'</blockquote><button onclick="moder.delNews(\''+el._id+'\')">Удалить</button>';
            if(el.author) allNews += '<span>Автор: <em>'+el.author+'</em></span>';
            allNews += '<hr/>';
        });
    }else{
        allNews = 'Нет новостей';
    }
    newsDiv.html(allNews);
};

function moderAnswer(data){
    switch(data.action){
        case 'news':
            moder.showAllNews(data.news);
            break;
        case 'toteAll':
            moder.showAllTotes(data.arr);
            break;
        case 'moders':
            moder.showAllModers(data.moders);
            break;
        case 'valentin':
            moder.showValentinCards(data.cards);
            break;
        default: break;
    }
}

moder.showTotals = function(){
    sendToSocket({type:'moder',action:'toteAll'});
};
moder.createTotal = function(){
    var title = escapeHtml(adtotal.find('input[type=text]').val());
    var descr = escapeHtml(adtotal.find('textarea[data-type="info"]').val());
    var time = new Date(adtotal.find('input[type=datetime-local]').val());
    if(time=='Invalid Date'){
        showMessage('Неверная дата');
        return;
    }
    var dateto = time.getTime()+(new Date()).getTimezoneOffset()*60*1000,
        variants = TextAreaMultiStrings(adtotal.find('textarea[data-type="totalVar"]'));
    sendToSocket({type:'moder',action:'toteCreate',title:title,descr:descr,dateto:dateto,variants:variants});
};

moder.showAllTotes = function(dataArr){
    var totalList = $('#ad-showTotals').next();
    totalList.html('');
    if(dataArr.length>0){
        for(var i=0;i<dataArr.length;i++){
            var curid = dataArr[i]._id;
            var div = $('<div id="tote'+dataArr[i]._id+'"></div>');
            $('<h5>'+dataArr[i].title+'</h5>').appendTo(div);
            $('<p>'+dataArr[i].descr+'</p>').appendTo(div);
            var vars = dataArr[i].variants;
            for(var index in vars){
                if(vars.hasOwnProperty(index)){
                    var cid = 'modertote'+i+'_'+index;
                    $('<input type="radio" id="'+cid+'" name="modertote'+i+'" class="check" value="'+index+'"/><label for="'+cid+'" title="'
                        +( (dataArr[i].bets[index].sum)?someThing(dataArr[i].bets[index].count,'ставка','ставки','ставок')+' на общую сумму '
                        +over1000(dataArr[i].bets[index].sum):'Нет ставок' )+'"></label>').html(vars[index].text).appendTo(div);
                }
            }
            $('<span>'+showDate(dataArr[i].dateto,true)+' </span>').appendTo(div);
            $('<button>Завершить событие</button>').appendTo(div).click({toteid:curid},moder.endTote);
            $('<div>∑ = <span class="gamemoney">'+over1000(dataArr[i].sum)+'</span></div>').appendTo(div);
            totalList.append(div);
        }
    }else{
        totalList.html('<div><h5>В тотализаторе нет ни одного незавершенного события</h5></div>');
    }
};
moder.endTote = function(param){
    var toteId = param.data.toteid;
    var totalList = $('#ad-showTotals').next();
    var toteDiv = totalList.find('#tote'+toteId);
    var title = toteDiv.find('h5').html();
    var selRadio = toteDiv.find('input[type="radio"]:checked');
    if(!selRadio.val()){
        showMessage('Не выбран правильный вариант завершения события');
        return;
    }
    var selText = selRadio.next().html();
    modalWindow('Завершить событие <em>'+title+'</em> и выбрать верным вариант <b>'+selText+'</b>?<br/> Эту операцию нельзя будет отменить!',function(){
        sendToSocket({type:'moder',action:'toteEnd',id:toteId,variant:selRadio.val()});
    });
};

moder.setStartPic = function(){
    var bannerBlock = $('.ad-startpic');
    var imgUrl= bannerBlock.find('input[type=text]').val().trim();
    if(imgUrl){
        modalWindow('Установить изображение <u onclick="showWall(\''+imgUrl+'\',true)" data-title="Нажмите, чтобы посмотреть">'+imgUrl+'</u> на заставку игры?',function(){
            sendToSocket({type:'moder',action:'startPic',pic:imgUrl});
        });
    }else{
        modalWindow('Вы действительно хотите отключить заставку игры?',function(){
            sendToSocket({type:'moder',action:'startPic',pic:false});
        });
    }
};

moder.snowsCreate = function(){
    sendToSocket({type:'snowball-new'});
    closewindow();
};

moder.moderGameCreate = function(){
    sendToSocket({
        type:'moder',
        action:'moderGame',
        id:parseInt($('#moderGameType').val()),
        selectRole:$('#moderGameSelrole').prop('checked'),
        about:$('#moderGameTitle').val()
    });
    closewindow();
};

moder.showModers = function(){
    sendToSocket({type:'moder',action:'editModer',list:true});
};
moder.showAllModers = function(moderArr){
    var modersDiv = $('.ad-moderlist').find('div');
    modersDiv.html('');
    if(moderArr && moderArr.length>0){
        moderArr.forEach(function(el){
            var delModer = $('<button>Снять с должности</button>').click(function(){
                modalWindow('Вы действительно хотите снять с должности модератора '+el.login+'?',function(){
                    sendToSocket({type:'moder',action:'editModer',id:el._id});
                    $('div[data-id="'+el._id+'"]').remove();
                });
            });
            $('<div data-id="'+el._id+'">'+el.login+'</div>').prepend(delModer).appendTo(modersDiv);
        });
    }else{
        modersDiv.html('Вы не назначили ни одного модератора.');
    }
};

moder.rename = function(){
    var div = $('.ad-rename'),
        oldnick = $('#ad-renameold').val(),
        newnick = $('#ad-renamenew').val(),
        info = $('#ad-renameinfo').val();
    if(oldnick.length && newnick.length && info.length){
        sendToSocket({
            type:'moder',
            action:'rename',
            old:oldnick,
            new:newnick,
            info:info
        });
    }else{
        showMessage('Необходимо заполнить все поля');
    }
};

moder.valentinCards = function(){
    sendToSocket({type:'moder',action:'valentin'});
};
moder.showValentinCards = function(cards){
    var cardsDiv = $('.ad-valentin').find('div');
    cardsDiv.html('');
    b.append('<style>.valentinCard{position:relative;width:300px;height:200px;float:left}.valentinCard>span{position:absolute;bottom:5px;right:5px;background:#f00;'
        +'padding:0 10px;cursor:pointer}.valentinCard>span:before{content:"Снять с конкурса"}.valentinCard.valentinno>span:before{content:"Допустить"}.valentinno{opacity:0.3}</style>');
    if(cards && cards.length>0){
        cards.forEach(function(el,ind){
            var curCard = $('<div/>').addClass('valentinCard').css({background:'url(/images/walls/valentin/'+el.file+') center/contain no-repeat'}).click(function(event){
                if(event.target.nodeName!='SPAN') showWall('valentin/'+el.file,false,true);
            }).html(el.login);
            $('<span/>').click(function(event){
                sendToSocket({type:'moder',action:'valentin',edit:el.no,vid:ind});
                if(el.no){
                    $(this).parent().removeClass('valentinno');
                }else{
                    $(this).parent().addClass('valentinno');
                }
            }).appendTo(curCard);
            if(el.no) curCard.addClass('valentinno');
            curCard.appendTo(cardsDiv);
        });
    }else{
        [1,2,3,4,5,6,7,8,9,10].forEach(function(el){
            var curCard = $('<div/>').css({width:'300px',height:'200px',float:'left',background:'url(/images/walls/valentin/'+el+'.gif) center/contain no-repeat'}).click(function(){
                showWall('valentin/'+el+'.gif',false,true);
            }).html('Пример №'+el).appendTo(cardsDiv);
        });
    }
};

moder.drawAction = function(){
    var block = $('#drawBox'),
        variants = TextAreaMultiStrings(block.find('textarea')),
        num = parseInt(block.find('input').val());
    if(num<1){
        alarm('Кол-во записей в каждой группе должно быть больше нуля');
    }else if(variants.length<2){
        alarm('В списке должно быть хотя бы 2 строки...');
    }else{
        sendToSocket({type:'moder',action:'draw',arr:variants,count:num});
    }
};
$('<div/>',{id:'drawStartButton'}).html('Жеребьевка').click(function(){
    warningWindow('<div id="drawBox"><textarea placeholder="Список команд или участников (каждая на отдельной строке)"></textarea>'
        +'<label for="drawBox-num">Кол-во записей на 1 группу</label><input id="drawBox-num" type="number" value="5"/>'
        +'<div onclick="moder.drawAction()">Жеребьевка</div></div>',false,'Закрыть жеребьевку');
}).appendTo(outside);
}).appendTo(outside);
}).appendTo(outside);