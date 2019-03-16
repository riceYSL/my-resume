//返回顶部


$(function(){
    var toggle = true;
    $("#img").click(function(){
        if(toggle){
            $("#img").attr("src","../img_icon/xinRedh.png");
            toggle = false;
            var span=$("#span").text()-0;
            var span_1=span+1;
            $("#span").text(span_1);
        }else{
            $("#img").attr("src","../img_icon/xinRedo.png");
            toggle = true;
            var span=$("#span").text()-0;
            var span_1=span-1;
            $("#span").text(span_1);
        }
       
    });
    var $fx_div = $('.bdsharebuttonbox');
    console.log($fx_div);
    $("#icon").click(function(){
         $fx_div.toggle();
    	if(toggle){
    		$("#icon").attr("src","../img_icon/shareh_yj1.png");
            toggle = false;
    	}else{
            $("#icon").attr("src","../img_icon/share_yj1.png");
            toggle = true;
            
        }
    })
});