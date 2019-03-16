//点击获取验证码
var $check=$('span').eq(1);
var timer=null;
var num=60;
function daoshu(){
    num--;
    if(num>0){
        $check.text(num+'秒后重新发送')
    }else {
        num = 60;
        clearInterval(timer);
        $check.text('获取验证码');
        $check.on('click', fn);
    }
}
console.log($check);
$check.on('click',fn=function () {
    $check.off('click');
    timer=setInterval(daoshu,1000);
});
//验证两次密码是否一致
  var $psd=$('input[type=password]');
  $('input[type=submit]').on('click',function () {
      if($psd.eq(0).val()!=$psd.eq(1).val()){
          alert('两次密码输入不一致');
      }
  });

