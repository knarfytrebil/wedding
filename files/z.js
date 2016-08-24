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
