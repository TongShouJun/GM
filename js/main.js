;$(function () {
    'use strict';

    //绑定相关元素
    var sidebar = $('#sidebar'),
        mask = $('.mask'),
        backButton = $('.back-to-top'),
        sidebar_trigger = $('#sidebar_trigger');

    function showSidebar() {
        //console.log('lalal');
        mask.fadeIn();
        sidebar.css('right',0);
        //sidebar.animate({'right': 0});
    }

    function hideSidebar() {
        mask.fadeOut();
        sidebar.css('right',-sidebar.width());
    }

    sidebar_trigger.on('click',showSidebar);//显示菜单栏
    mask.on('click',hideSidebar);//隐藏遮罩
    //监听返回顶部点击事件
    backButton.on('click',function () {
        $('html,body').animate({
            scrollTop: 0
        },800)
    })

    //判断返回顶部按钮出现位置
    $(window).on('scroll',function () {
        if($(window).scrollTop() > $(window).height()) {
            backButton.fadeIn();
            //backButton.style.display = "block";
        }
        else{
            backButton.fadeOut();
        }
    })

    //开始执行scroll事件
    $(window).trigger('scroll');

})