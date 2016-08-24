var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
});


$('#hint').on('click', function(){
    $('.overlay.c_3').fadeIn(function(){
		$('.overlay').one('click', function(e){
		    $(this).fadeOut(function(){
		    	$(this).css('display','none')
		    })
		})
    })
})

$(function{
	if(navigator.userAgent.match(/MicroMessenger/i)){
		var weixinShareLogo = 'http://0924.refle.xin/files/couple.jpg';
		$('body').prepend('<div style=" overflow:hidden; width:0px; height:0; margin:0 auto; position:absolute; top:-800px;"><img src="'+ weixinShareLogo +'"></div>') 
	};
});

