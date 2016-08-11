var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});

function unload() {
	$('.overlay').one('click', function(e){
	    $(this).fadeOut(function(){
	    	swiper.slideNext()
	    	$(this).css('display','none')
	    })
	})
}

$('.choice.c_1').on('click', function(){
    $('.overlay.c_1').fadeIn(function(){
    	unload()
    })
})

$('.choice.c_2').on('click', function(){
    $('.overlay.c_2').fadeIn(function(){
    	unload() 	
    })
})

$('.choice.c_3').on('click', function(){
    $('.overlay.c_2').fadeIn(function(){
    	unload()
    })
})


$('#hint').on('click', function(){
    $('.overlay.c_3').fadeIn(function(){
		$('.overlay').one('click', function(e){
		    $(this).fadeOut(function(){
		    	$(this).css('display','none')
		    })
		})
    })
})