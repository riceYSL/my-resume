window.onload = function () {

    $.ajax({
				url:'js/json.json',
				data:"",
				type:'POST',
				dataType:'json',
				//请求成功
				success:function(data){
					console.log(data);
					var list = data[1];
					console.log(list);
					var $li_ist = $('.main_showUl');
					for (var i = 0; i<data[1].length; i++) {
                        var $img = data[1][i].img;
                        console.log($img);
                        var $text = data[1][i].text;
                        console.log($text);
                        var $enjoy = data[1][i].enjoy;
                        var str = '<li><div class="li_img"><img src="'+$img+'" alt=""><span>'+$enjoy+'</span></div><div class="li_h2"><h2>'
                            +$text+'</h2></div><div class="li_num"><a href="#">2032</a><a href="#" class="li_numRight">20台</a></div><div class="li_time"><span class="li_timeNum">1392</span><span>申请</span></div><div class="li_syTime"><span>剩余时间2天</span></div></li>';
                        $li_ist.append(str);
                    }
                    // 循环遍历第三个数组
                    for (var j = 4; j < data[2].length ; j ++) {
					    console.log(data[2][j]);
                        var $img1 = data[2][j].img;
                        console.log($img1);
                        var $text1 = data[2][j].text;
                        console.log($text1);
                        var $enjoy1 = data[2][j].enjoy;
                        var $str1 = '<li><div class="li_img"><img src="'+$img1+'" alt=""><span>'+$enjoy1+'</span></div><div class="li_h2"><h2>'
                            +$text1+'</h2></div><div class="li_num"><a href="#">2032</a><a href="#" class="li_numRight">20台</a></div><div class="li_time"><span class="li_timeNum">1392</span><span>申请</span></div><div class="li_syTime"><span>剩余时间2天</span></div></li>';
                        $li_ist.append($str1);
                    }
				},
				// 请求失败
				err:function(err){
					console.log(err);
				}
			})


};