$(document).ready(function () {
    // hamburger
    $('.hamburger').click(function () {
        $('.mask').addClass('mask-show')
        $('.ham-content').addClass('ham-content-show')
        $('.close').addClass('close-show')
    })
    $('.close').click(function () {
        $('.ham-content').removeClass('ham-content-show')
        $('.mask').removeClass('mask-show')
        $('.close').removeClass('close-show')
    })
    $('.mask').click(function () {
        $('.ham-content').removeClass('ham-content-show')
        $('.mask').removeClass('mask-show')
        $('.close').removeClass('close-show')
    })


    // gotop
    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500)
    })

    // 내용바꾸기
    $(' .structure .tab-menu li').click(function () {
        let idx = $(this).index()
        $('.structure .tab-item > *').removeClass('on')
        $('.structure .tab-item > *').eq(idx).addClass('on')
        $('.structure .tab-menu li a ').removeClass('on')
        $(this).find('a').addClass('on')
    })



})