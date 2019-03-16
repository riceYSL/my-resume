$.ajax({
    url:'js/report-new.json',
    type:'get',
    dataType:'json',
    success:function (res) {
        console.log(res);
        for (var i=0;i<res.length;i++) {
            var url = res[i].img;
            var titel = res[i].titel;
            var more=res[i].more;
            var li_ = $('<li></li>');
            var div_a=$('<div>'+titel+'</div>');
            var div_b=$("<div></div>");
            var img_ = $("<img src=../" + url + ">");
            $('.report-pic').append(li_);
            li_.append(img_);
            li_.append(div_a);
            div_a.append(div_b);
            div_b.append($('<div></div>'));
            div_b.append($('<span>● 苏苏</span> '));
            div_b.append($('<span>2016-01-26</span>'));
            div_b.append($('<p><img src="../img_icon/reply.png" alt="">3</p><p><img src="../img_icon/zan.png" alt="">3</p>'))
            li_.append($('<p>'+more+'</p>'))


        }

    }
});
$('.more').click(function () {
    $.ajax({
        url:'js/report-new.json',
        type:'get',
        dataType:'json',
        beforesend:function(){
            alert("1")
        },
        success:function (res) {
            console.log(res)
            for (var i = 0; i < res.length; i++) {
                var url = res[i].img;
                var titel = res[i].titel;
                var more=res[i].more;
                var li_ = $('<li></li>');
                var div_a=$('<div>'+titel+'</div>');
                var div_b=$("<div></div>");
                var img_ = $("<img src=../" + url + ">");
                $('.report-pic').append(li_);
                li_.append(img_);
                li_.append(div_a);
                div_a.append(div_b);
                div_b.append($('<div></div>'));
                div_b.append($('<span>● 苏苏</span> '));
                div_b.append($('<span>2016-01-26</span>'));
                div_b.append($('<p><img src="../img_icon/reply.png" alt="">3</p><p><img src="../img_icon/zan.png" alt="">3</p>'))
                li_.append($('<p>'+more+'</p>'))


            }

        }
    });
});