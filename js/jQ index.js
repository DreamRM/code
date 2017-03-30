(function(){
    $(function(){
        $('.tab-item').on('click',function(){
            $(this).addClass('active')
                .siblings().removeClass('active');
            var index = $(this).index();
            $('.main').eq(index).addClass('selected')
                .siblings().removeClass('selected');
        })
    })
})()