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
    $(' .finance .tab-menu li').click(function () {
        let idx = $(this).index()
        $('.finance .tab-item > *').removeClass('on')
        $('.finance .tab-item > *').eq(idx).addClass('on')
        $('.finance .tab-menu li a ').removeClass('on')
        $(this).find('a').addClass('on')
    })

     // year
     $('.year').click(function () {
        $(this).find('.option').slideToggle(400)
        $(this).addClass('dropdown')
    })
    //날짜바꾸기...
    let select_text = document.querySelector('.select').innerText
    const Select = document.querySelector('.select')
    const option_li = document.querySelectorAll('.option-li')

    $('.option li').click(function () {
        // Select.innerText = $(this).innerText

        let text = $(this).find('.option-li').innerText
        console.log(text)
        $('.date').innerText = $(this).find('.option-li').innerText
    })
})