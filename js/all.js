$(document).ready(function () {

    $('.col-3 li').click(function (event) {

        // 讓點擊到span 亮起來, 其他 span 移除active樣式
        $(this).toggleClass('active');

        // 讓點擊到span找到父元素 .question  再找裡面的p
        $(this).parent().find('p').slideToggle();


        // 自己以外的 p 隱藏起來 
        $(this).parent().siblings().find('p').slideUp();

        // 自己以外的 h3 移除active樣式
        $(this).parent().siblings().find('.col-3 li').removeClass('active')

    });

});å