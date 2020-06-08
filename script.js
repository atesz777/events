$('button').click(() => {
    console.log('Yeah, you clicked me')
}
)

$('.button2').click(() => {
    $('.button1').text('Changed button')
}
)

$('.button3').click(() => {
    $('button').css('background', 'green')
}
)