var x, y, delta_x, delta_y; // Define X, Y and Delta X, Y
var page_index = 0;
var MOVE_THRESH = 150;
var PAGE_HEIGHT = window.screen.height - 64
var moving = false

function process_move(axis) {
    var v = axis.delta_y - PAGE_HEIGHT * page_index
    var trans = "translateY(" + v + "px)"
    $('.row.first').css({"transform": trans})
}
function go_page(page) {
    moving = true
    if (page < 0) {
        page = 0
        page_index = 0
    }
    if (page >= 3) {
        page = 3
        page_index = 3
    }
    $('.row.first').css({"transition": "all 1s ease-in-out"})
    $('.row.first').css({"transform": "translateY(-" + PAGE_HEIGHT*page + "px)"})
    setTimeout(function(){
        $('.row.first').css({"transition": "none"})
        moving = false
    }, 1000)
}

$('.row .i_page').on('touchstart', function(e) {
    if (moving) { return }
    x = e.originalEvent.touches[0].screenX
    y = e.originalEvent.touches[0].screenY
});

$('.row .i_page').on('touchend', function(e) {
    if (moving) { return }
    x = y = 0
    if (Math.abs(delta_y) > MOVE_THRESH) {
        page_index -= (1 * delta_y / Math.abs(delta_y))
    }
    delta_x = delta_y = 0
    go_page(page_index) 
});

$('.row .i_page').on('touchmove', function(e) {
    if (moving) { return }
    var nx = e.originalEvent.touches[0].screenX
    var ny = e.originalEvent.touches[0].screenY
    delta_x = nx - x
    delta_y = ny - y
    process_move({delta_x, delta_y})
})

$('.choice.c_1').on('click', function(){
    $('.overlay.c_1').fadeIn()
})

$('.choice.c_2').on('click', function(){
    $('.overlay.c_2').fadeIn()
})

$('.choice.c_3').on('click', function(){
    $('.overlay.c_2').fadeIn()
})

$('.overlay').on('click', function(e){
    $(this).fadeOut()
    page_index += 1
    go_page(page_index) 
})