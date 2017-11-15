jQuery(function($){
    //链接网站头部和尾部
    $('#pageHeader').load('../html/header.html #head',function(){
        // 控制三级列表显示、隐藏
        $('#h_nav').find('.tal').on('mouseover',function(){
            $(this).find('ul').css('display','block');
        }).on('mouseout',function(){
            $(this).find('ul').css('display','none');
        })
    }); 
    $('#pageFooter').load('../html/footer.html #footer');  
        // document.onreadystatechange = function(){
            
        // };
        //轮播图
    $('.banner').jjCarousel({
                                width:945,
                                height:293,
                                imgs:["../img/banner (1).png","../img/banner (2).png",
                                    "../img/banner (3).png","../img/banner (4).png",
                                    "../img/banner (5).png","../img/banner (6).png",
                                    "../img/banner (7).png","../img/banner (8).png"],
                                buttons:true,
                                page:true,
                                pageNum:true,
                                type:'horizontal'   
    });

    //一些小样式
    $('.container').css('padding-bottom',30);
    $('#main').css('background','url(../img/news-bg.jpg) center');
    $('.container').css('background','#F0F0F0');
});
    

