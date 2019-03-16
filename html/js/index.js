$.ajax({
    url:'json/json.json',
    type:'get',
    dataType:'json',
    success:function (res) {
        for(var i=0;i<res.length;i++){
            var url=res[i].img;
            var pro=res[i].product;
            var day_=res[i].day;
            var tag=res[i].tag;
            var li_=$('<li></li>');
            var img_=$("<img src="+url+">");
            var span_=$("<p><span>2032</span><span>20台</span></p>");
            $('.pic').append(li_);
            li_.append(img_);
            li_.append($('<p>'+pro+'</p>'));
            li_.append(span_);
            li_.append($('<p><span>1392</span>申请</p>'));
            li_.append($('<p>'+day_+'</p>'));
            li_.append($('<p>'+tag+'</p>'))
        }
    }
});

$.ajax({
    url:'report/js/report-new.json',
    type:'get',
    dataType:'json',
    success:function (res) {
        for(var i=0;i<4;i++){
            var url=res[i].img;
            var titel=res[i].titel;
            var name_=res[i].name;
            var li_=$('<li></li>');
            var img_=$("<img src="+url+">");
            $('.report').append(li_);
            li_.append(img_);
            li_.append($('<p>'+titel+'</p>'));
            li_.append($('<div>'+name_+'<p><img src="img_icon/reply.png" alt="">3</p><p><img src="img_icon/zan.png" alt="">3</p></div>'))

        }
        for(var j=3;j>=0;j--){
            console.log(j);
            var url_a=res[j].img;
            var titel_a=res[j].titel;
            var name_a=res[j].name;
            var li_a=$('<li></li>');
            var img_a=$("<img src="+url_a+">");
            $('.report').append(li_a);
            li_a.append(img_a);
            li_a.append($('<p>'+titel_a+'</p>'));
            li_a.append($('<div>'+name_a+'<p><img src="img_icon/reply.png" alt="">3</p><p><img src="img_icon/zan.png" alt="">3</p></div>'))

        }
        $('.pic-lb').srcoll({
            parent:'.pic',
            child:'.pic>li',
            time:2000,
            num:4
        });
    }
});

$.fn.extend({
    srcoll:function (option) {
        var set={
            time:1000,
            num:3
        };
        var active=$.extend(true,{},set,option);
        console.log(active);
        var li_w=$(active.child).innerWidth()+50;
        function roll() {
            $(active.parent).animate({marginLeft:-li_w*2},active.time,function () {
                $(active.child).slice(0,2).appendTo( $(active.parent));
                $(active.parent).css('margin-left','0px')
            })
        }
        var timer=setInterval(roll,active.time);
        $(active.parent).on('mouseenter',function () {
            clearInterval(timer);
        });
        $(active.parent).on('mouseleave',function () {
            timer=setInterval(roll,active.time);
        });
        var toggle=false;
        $('#left').on('click',function () {
            clearInterval(timer);
            if(!toggle){
                toggle=true;
                $(active.parent).css('margin-left',-li_w*active.num);
                $(active.child).slice(-active.num).prependTo( $(active.parent));
                $(active.parent).animate({marginLeft:'0px'},active.time,function () {
                    toggle=false;
                });

            }

        });
        // $('#left').on('mouseleave',function () {
        //     timer=setInterval(roll,active.time);
        // });
        $('#right').on('click',function () {
            clearInterval(timer);
            $(active.parent).animate({marginLeft:-li_w*active.num},active.time,function () {
                $(active.child).slice(0,active.num).appendTo( $(active.parent));
                $(active.parent).css('margin-left','0px')
            })
        })
        // $('#right').on('mouseleave',function () {
        //     timer=setInterval(roll,active.time);
        // });



    }
});
//导购模块
$.ajax({
    url:'json/guid.json',
    dataType:'json',
    type:'get',
    success:function(res){
        console.log(res);
        var listText = doT.template($('#guid').text());
        $('.guid').html(listText(res));
    }
});
//酷玩模块
$.ajax({
    url:'json/play.json',
    dataType:'json',
    type:'get',
    success:function(res){
        console.log(res);
        var list = doT.template($('#play').text());
        $('.play').html(list(res));
    }
});


var more = document.querySelector('.more>a');
more.onclick = function () {
    // more.style.display = 'none';
    more.style.background = 'url("img_icon/loading-icon.gif") center left no-repeat';
    more.innerHTML = "加载中";
};
;
