var djDiv = $('<div class="dj"></div>');
$('<input type="text" id="djText" placeholder="запрос от 3 символов" value=""/>').keydown(function(e){
    if(e.which == 13) djDiv.find('button').click();
}).appendTo(djDiv);
$('<button>Найти</button>').click(function(){
    var tf = $('#djText');
    if(tf.val().length>=3) searchSong(tf.val());
}).appendTo(djDiv);
djDiv.append('<div></div>');
djDiv.append('<table></table>');
win.find('.info').append(djDiv);
b.append('<style>.dj{overflow-y:scroll}.dj:before{content:"DJ-room"}.dj>table{width:100%;background:#fff}.dj tr>td:nth-of-type(4){width:50px;text-align:center}'
    +'.dj tr>td:nth-of-type(5){width:100px;text-align:center}.dj b{cursor:pointer;font-weight:700}.dj b.playing{border:1px solid #f00}#djText,.dj button{font-size:2em;width:48%}</style>');
var djResult = djDiv.find('table');

var djAudio = document.createElement('audio');

var djCallback = function(data){

    if(!data.query.results){
        djResult.html('<tr><th class="red">Ничего не найдено :(</th></tr>');
        return;
    }

    var results = (data.query.results.div[0])?data.query.results.div[0].div:data.query.results.div.div;

    djResult.html('');
    djResult.append('<tr><th>Название</th><th>Исполнитель</th><th>Время</th><th>Воспр.</th><th>Эфир</th></tr>');
    results.forEach(function(el){
        var djRow = $('<tr></tr>'),
            artist = el.div[0].div[3].a.content,
            title = el.div[0].div[1].a.content,
            duration = el.div[1].content,
            mp3 = 'http://cdndl.zaycev.net/'+el.div[0].div[1].a.href.substring(8)+'/'+el['data-id']+'/1.mp3';
        djRow.append('<td>'+artist+'</td>');
        djRow.append('<td>'+title+'</td>');
        djRow.append('<td>'+duration+'</td>');
        var playB = $('<b>⧐</b>').click(function(){
            if($(this).html()=='⧐'){
                djAudio.pause();
                $('b.playing').removeClass('playing').html('⧐');
                djAudio.setAttribute('src',mp3);
                djAudio.play();
                $(this).addClass('playing').html('⋭');
            }else{
                djAudio.pause();
                $(this).removeClass('playing').html('⧐');
            }
        });
        $('<td></td>').append(playB).appendTo(djRow);
        var sendB = $('<b>В эфир</b>').click(function(){
            modalWindow('<b>Поставить в эфир</b> песню <em>'+title+'</em>?',function(){
                sendToSocket({type:'audio',title:title,singer:artist,src:mp3});
            });
        });
        $('<td></td>').append(sendB).appendTo(djRow);
        djRow.appendTo(djResult);
    });
};
function spacePlus(text){
    return encodeURIComponent(text.replace(' ','+')).replace('%20','%2520');
}
function searchSong(text){
    djResult.html('<tr><th>Идет поиск... Пожалуйста, подождите</th></tr>');
    $.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D\'http%3A%2F%2Fzaycev.net%2Fsearch.html?query_search='+
        spacePlus(text)+'\'%20and%20xpath%3D\'%2F%2F*%5Bcontains(%40class%2C%20%22musicset-track-list__items%22)%5D\'&format=json&env=store'
        +'%3A%2F%2Fdatatables.org%2Falltableswithkeys',djCallback).fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
        });
}