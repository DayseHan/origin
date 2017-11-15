jQuery(function($){
    window.onload = (function(){
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
            var $img = $('<img>').attr('src','./img/wechat.png');console.log($img)
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
            var $img = $('<img>').attr('src','./img/appphone.png');console.log($img)
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

        $('#h_banner').find('.cal').jjCarousel({
            width:755,
            height:470,
            imgs:["img/banner_1.jpg","img/banner_2.jpg","img/banner_3.jpg"],
            index:0,
            page:true,
            pageNum:false
        });
    });
});