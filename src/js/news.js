jQuery(function($){
    //链接网站头部和尾部
    $('#pageHeader').load('../html/header.html #head',function(){
    //获取cookie到datalist
    var datalist = Cookie.get('datalist');
            if(!datalist){
                datalist = [];
            }else{
                datalist = JSON.parse(datalist);
            }

    //购物车数量更新
    var $span_qty = $('#h_cart').find('span').text(datalist.length);

    var $cart = $('#h_cart');

    $cart.on('click',function(){
        window.location.href = '../html/cart.html';
    });
    
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
    //顶部《我的银泰》列表
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
    //二级导航显示、隐藏
    $('#h_nav').find('.tal').on('mouseover',function(){
        $(this).find('.big_ul').css('display','block');
    }).on('mouseout',function(){
        $(this).find('.big_ul').css('display','none');
    })

    var $ul = $('#h_nav').find('.tal').find('.big_ul');
    $('<div/>').appendTo($ul).addClass('sj');
    $('<ul/>').appendTo($('.sj')).addClass('left');
    $('<div/>').appendTo($('.sj')).addClass('right');
    

    //三级导航显示、隐藏
    var timerout;
    $ul.on('mouseenter','.list',function(){
        clearTimeout(timerout);
        $(this).addClass('active').siblings('.list').removeClass('active');
        $(this).siblings('.sj').css('display','block');

    }).on('mouseleave','.list',function(){
        timerout = setTimeout(function(){
            $('.sj').css('display','none');
        },500);
    }).on('mouseover','.sj',function(){
        clearTimeout(timerout);
    });

    // 三级导航ajax
    $.ajax({
            type:"get",
            url:"http://localhost:1232/php/header.php",
            success:function(data){
                var data = JSON.parse(data);
                // console.log(data);
            var html8 =''
            var html1=html2=html3=html4=html5=html6=html7=html8;
            $.map(data,function(item,index){
                switch(item.type3){
                    case '男装': 
                                if(html1==''){
                                    $('.left').append($('<li>').addClass('li1'));
                                }
                                html1 += `<a>${item.name}</a>`;
                                $('#h_nav').find('.li1').html(`<h4>${item.type3}</h4>`+html1);
                    break;
                    case '女装':
                            if(html2==''){
                                    $('.left').append('<li class="li2"/>').find('.li2').append($('<h4/>').text(`${item.type3}`));
                                }
                                html2 += `<a>${item.name}</a>`;
                                $('#h_nav').find('.li2').html(`<h4>${item.type3}</h4>`+html2);
                    break;
                    case '鞋靴': console.log(666)
                            if(html3==''){
                                    $('.left').append('<li class="li3"/>').find('.li3').append($('<h4/>').text(`${item.type3}`));
                                }
                                html3 += `<a>${item.name}</a>`;
                                $('#h_nav').find('.li3').html(`<h4>${item.type3}</h4>`+html3);
                    break;
                    case '女包':
                            if(html4==''){
                                    $('.left').append('<li class="li4"/>').find('.li4').append($('<h4/>').text(`${item.type3}`));
                                }
                                html4 += `<a>${item.name}</a>`;
                                $('#h_nav').find('.li4').html(`<h4>${item.type3}</h4>`+html4);
                    break;
                    case '男包':
                            if(html5==''){
                                    $('.left').append('<li class="li5"/>').find('.li5').append($('<h4/>').text(`${item.type3}`));
                                }
                                html5 += `<a>${item.name}</a>`;
                                $('#h_nav').find('.li5').html(`<h4>${item.type3}</h4>`+html5);
                    break;
                    case '配饰':
                            if(html6==''){
                                    $('.left').append('<li class="li6"/>').find('.li6').append($('<h4/>').text(`${item.type3}`));
                                }
                                html6 += `<a>${item.name}</a>`;
                                $('#h_nav').find('.li6').html(`<h4>${item.type3}</h4>`+html6);
                    break;
                    case '婴童':
                            if(html7==''){
                                    $('.left').append('<li class="li7"/>').find('.li7').append($('<h4/>').text(`${item.type3}`));
                                }
                                html7 += `<a>${item.name}</a>`;
                                $('#h_nav').find('.li7').html(`<h4>${item.type3}</h4>`+html7);
                    break;
                    case '品牌':
                            
                                html8 += `<a>${item.name}</a>`;
                                $('#h_nav').find('.right').html(`<h4>${item.type3}</h4>`+html8);
                    break;
            }
        }); 

         
                
            }
        });

        
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
    

