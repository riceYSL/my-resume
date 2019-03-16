

//导购模块
$.ajax({
    url:'js/guid_hot.json',
    dataType:'json',
    type:'get',
    success:function(res){
        var listText = doT.template($('#guid').text());
        $('.guid').append(listText(res));
        console.log(listText)
    },
});
$('.more').click(function () {
    $.ajax({
        url:'js/guid_hot.json',
        dataType:'json',
        type:'get',
        success:function(res){
            var listText = doT.template($('#guid').text());
            $('.guid').append(listText(res));
        },
    });
});
