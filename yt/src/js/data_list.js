jQuery(function($){
    //ajax加载头部
    $('#pageHeader').load('../html/header.html #head',function(){
        //三级列表显示隐藏（给从ajax加载的元素绑定事件要用回调函数）
        $('#h_nav').find('.tal').on('mouseover',function(){
            $(this).find('ul').css('display','block');
        }).on('mouseout',function(){
            $(this).find('ul').css('display','none');
        });
    });

    //ajax加载尾部
    $('#pageFooter').load('../html/footer.html #footer');

    //底部tab标签
    //初始化
    let $tab = $('#tab').find('.tab');
    let $tv = $tab.find('.bot').find('div');
    $tab.find('li').first().addClass('active');
    $tv.first().show().siblings().hide();
    //点击tab切换
    $tab.find('ul').on('click','li',function(){
        let index = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        $tv.eq(index).show().siblings().hide();
    });

});