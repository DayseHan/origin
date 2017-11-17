jQuery(function($){
    //链接网站头部和尾部
    // $('#pageHeader').load('../html/header.html #head'); 
    // $('#pageFooter').load('../html/footer.html #footer');    


    //banner二维码动画
    $('#ewm').on('mouseover',function(){console.log(777)
        $(this).animate({right:10});
    }).on('mouseout',function(){
        $(this).stop().animate({right:0});
    });
    //设置搜索框value
    $('#h_ss').find('input').on('blur',function(){
        this.value = "大家正在搜：Alicedudu  简约明快 秋冬优雅变奏";
    }).on('focus',function(){
        this.value ="";
        this.focus();
    });
    //顶部li第一个小的二维码
    $('#webChat').on('mouseover',function(){
        var $img = $('<img>').attr('src','../img/wechat.png');
        $(this).find('a').css('border',0);
        $(this).find('i').css('background-position','-225px -87px');
        $(this).find('span').addClass('c');
        $(this).addClass('b').find('div').addClass('wx').append($img);
    }).on('mouseout',function(){
        $(this).removeClass('b').find('div').removeClass('wx').find('img').remove();
        $(this).find('span').removeClass('c');
        $(this).find('i').css('background-position','-225px -57px');
    });
    
     //顶部li第二个小的二维码
    $('#phone').on('mouseover',function(){
        var $img = $('<img>').attr('src','../img/appphone.png');
        $(this).find('i').css('background-position','0 bottom');
        $(this).find('span').addClass('c');
        $(this).addClass('b2').find('div').addClass('wx2').append($img);
    }).on('mouseout',function(){
        $(this).find('i').css('background-position','0 0');
        $(this).find('span').removeClass('c');
        $(this).removeClass('b2').find('div').removeClass('wx2').find('img').remove();
    });
    //顶部《我的永泰》列表
    $('#myYT').on('mouseover',function(){
        console.log(666);
        $(this).find('ul').css('display','block');
        $(this).find('span').addClass('c');
    }).on('mouseout',function(){
        $(this).find('ul').css('display','none');
        $(this).find('span').removeClass('c');
    });
    $('#h_banner').find('img').on('click',function(){console.log(666)
        window.open('../html/news.html');
    });
    //二级列表显示、隐藏
    $('#h_nav').find('.tal').on('mouseover',function(){
        $(this).find('.big_ul').css('display','block');
    }).on('mouseout',function(){
        $(this).find('.big_ul').css('display','none');
    })

    var $ul = $('#h_nav').find('.tal').find('.big_ul');
    $('<div/>').appendTo($ul).addClass('sj');
    $('<ul/>').appendTo($('.sj')).addClass('left');
    $('<div/>').appendTo($('.sj')).addClass('right');

    var timerout;
    $('#h_nav').find('.tal').find('.big_ul').on('mouseover','.list',function(){
        $(this).addClass('active').siblings('.list').removeClass('active');
        $(this).addClass('active').siblings('.sj').css('display','block');
        // clearTimeout(timerout);
        console.log($(this).siblings('.sj'))

    }).on('mouseout',function(){
        $(this).find('.sj').css('display','none');
        
    });
    //三级导航ajax
    // $.ajax({
    //         type:"get",
    //         url:"http://localhost:1232/php/header.php",
    //         success:function(data){
    //             var data = JSON.parse(data);

    //             var $ul = $('#h_nav').find('.tal').children('ul');
    //             $('<div/>').appendTo($ul).addClass('sj');
    //             $('<ul/>').appendTo($('.sj')).addClass('left');
    //             $('<div/>').appendTo($('.sj')).addClass('right');

    //             $li2 = $('<li/>').append($('<h3/>').text('男装')).appendTo($('.left'));
    //             $li3 = $('<li/>').append($('<h3/>').text('女装')).appendTo($('.left'));
    //             $li4 = $('<li/>').append($('<h3/>').text('鞋靴')).appendTo($('.left'));
    //             $li5 = $('<li/>').append($('<h3/>').text('女包')).appendTo($('.left'));
    //             $li6 = $('<li/>').append($('<h3/>').text('男包')).appendTo($('.left'));
    //             $li7 = $('<li/>').append($('<h3/>').text('配饰')).appendTo($('.left'));
    //             $li8 = $('<li/>').append($('<h3/>').text('婴童')).appendTo($('.left'));
    //             $li9 = $('.right').append($('<h3/>').text('品牌'));
                
    //             $.map(data,function(item,index){
    //                 console.log(item.type3)
    //                 switch(item.type3){
    //                     case '男装':
    //                             $('<a/>').appendTo($li2).text(item.name);
    //                     break;case '女装':
    //                             $('<a/>').appendTo($li3).text(item.name);
    //                     break;case '鞋靴':
    //                             $('<a/>').appendTo($li4).text(item.name);
    //                     break;case '女包':
    //                             $('<a/>').appendTo($li5).text(item.name);
    //                     break;case '男包':
    //                             $('<a/>').appendTo($li6).text(item.name);
    //                     break;case '配饰':
    //                             $('<a/>').appendTo($li7).text(item.name);
    //                     break;case '婴童':
    //                             $('<a/>').appendTo($li8).text(item.name);
    //                     break;case '品牌':
    //                             $('<a/>').appendTo($li9).text(item.name);
    //                     break;
    //                 }
    //             });
                
                
    //         }
    //     });
    


    
});