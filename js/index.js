$('.box>li>div').on('click',function () {
	event.stopPropagation();

	$(this).addClass('point');		
})
$('html').on('click',function(){
	event.stopPropagation();
	$('.box>li>div').removeClass();
	
},)