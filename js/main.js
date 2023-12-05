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

    // lang


    $('.lang span').click(function () {
        $('.lang span').removeClass('color')
        $(this).addClass('color')
    })
    $('.lang span').eq(0).trigger('click')

    // skroll
    $(window).scroll(function () {
        let st = $(this).scrollTop()
        if (st > 60) {
            $('header .logo img').addClass('width-small')
        } else {
            $('header .logo img').removeClass('width-small')
        }
    })
    // darkmode

    $('.toggle-bg').click(function () { //다크 모드 버튼을 누르면
        //ham-content
        $(this).toggleClass('toggle-bg-active') // 버튼 배경
        $(this).find('.toggle-btn').toggleClass('toggle-btn-black') //버튼 자체
        $('.ham-content').toggleClass('ham-content-dark') //ham-content 배경
        $('.de1 a').toggleClass('dark') // ham-content 글자색
        $('.de1>li ').toggleClass('border-dark') //테두리 색
        $('.font span').toggleClass('span-dark') //font size 박스 색
        $('.font p').toggleClass('p-dark') //font size 글자 색
        // font size 클릭한거 색 바꾸기
        // kor eng 색 바꾸기
        $('.close').toggleClass('close-dark') // ham-content X 색
        $('.light p').toggleClass('light-dark') //다크모드 글자 색

        // 본문
        $('body').toggleClass('body-dark') //body 색 바꾸기
        $('header').toggleClass('header-dark') //header 색 바꾸기
        $('.logo img').toggleClass('img-dark') //header 색 바꾸기
        $('.hamburger span').toggleClass('head-span-dark') //햄버거 색 바꾸기
        $('.three-box').find('a').toggleClass('three-dark') // 밑에 박스 세개 색 바꾸기
        $('.arrow').toggleClass('arrow-dark') // 밑에 박스 화살표 색 바구기
        $('footer').toggleClass('footer-dark') // footer 색 바꾸기
        $('.foot-left p').toggleClass('footp-dark') //footer 글자 색 바꾸기
        $('.foot-right a').toggleClass('foota-dark') //footer 오른쪽 글자 색 바꾸기
    })

    // font-size
    // 색 변하기
    $('.font span').click(function () {
        $('.font span').removeClass('active')
        $(this).addClass('active')
    })
    // 글자크기
    $('.font11').click(function () {
        $('.de1>li>a').addClass('font11-1').removeClass('font14-1')
        $('.de2>li>a').addClass('font11-2').removeClass('font14-2')
    })
    $('.font14').click(function () {
        $('.de1>li>a').addClass('font14-1').removeClass('font11-1')
        $('.de2>li>a').addClass('font14-2').removeClass('font11-2')
    })
    $('.font18').click(function () {
        $('.de1>li>a').removeClass('font11-1 , font14-1')
        $('.de2>li>a').removeClass('font11-2 , font14-2')
    })
    $('.font18').trigger('click')

    // let have =  $('.toggle-bg').hasClass('toggle-bg-active')
    // if(have){
    //     $('.font .active').css({
    //         'color':'#555',
    //         'background-color' : '#fff'
    //     }) 
    // } 


        // gotop
        $('.gotop').click(function (e) {
            e.preventDefault()
            $('html, body').stop().animate({
                scrollTop: 0
            }, 500)
        })
})