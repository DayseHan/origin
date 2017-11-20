jQuery(function($){
    //获取cookie到datalist
    var datalist2 = Cookie.get('datalist');
            if(!datalist2){
                datalist2 = [];
            }else{
                datalist2 = JSON.parse(datalist2);
            }

    //购物车数量更新
    // console.log(datalist2.length);
    var $span_qty = $('#h_cart').find('span').text(datalist2.length);

    //购物车跳转
    var $cart = $('#h_cart');

    $cart.on('click',function(){
        window.location.href = '../html/cart.html';
    });

    //banner二维码动画
    $('#ewm').on('mouseover',function(){
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
    $('#h_banner').find('.cal').jjCarousel({
        width:755,
        height:470,
        imgs:["img/banner_1.jpg","img/banner_2.jpg","img/banner_3.jpg"],
        index:0,
        page:true,
        pageNum:false
    });


    //二级导航显示、隐藏
    $('#h_nav').find('.tal').on('mouseover',function(){
        $(this).find('.big_ul').css('display','block');
    }).on('mouseleave',function(){
        $('.sj').css('display','none');
    });

    var $ul = $('#h_nav').find('.tal').find('.big_ul');
    $('<div/>').appendTo($ul).addClass('sj');
    $('<ul/>').appendTo($('.sj')).addClass('left');
    $('<div/>').appendTo($('.sj')).addClass('right');
    

    //三级导航显示、隐藏
    var timerout;
    $ul.on('mouseenter','.list',function(){
        $('.sj').css('display','none');
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
                    case '鞋靴': 
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

    //楼梯导航
    //hover效果
    $('#main').find('.warp').on('mouseover','a',function(){
        $(this).addClass('active');
    }).on('mouseout','a',function(){
        $(this).removeClass('active');
    });

    //scroll滚动获取当前scrollTop
    var scrollTop;
    window.onscroll = function(){
            scrollTop = window.scrollY;
            if(scrollTop >= $('#main').offset().top){
                    $('.warp').css('display','block');
                }else{
                    $('.warp').css('display','none');
                }
        }

    var timer;
    $('#main').find('.warp').on('click','li',function(){
        speed = 0;
        target = scrollTop;

        let index = $(this).index();
        // let h = 1193;
        let lis = $('#main').find('.container').children('div');
        let len = lis.length;
        let h = parseInt($('#main').find('.container').children('div').css('height'));
        // console.log('this:'+this,'h:'+h);
        //30为margin
        var target = index*(h+30) + $('#main').offset().top;console.log(index)
        if(index == len){
            target = 0;
        }
        clearInterval(timer);
        timer = setInterval(()=>{
                    
                    let speed = (target - scrollTop)/10>0?Math.ceil((target - scrollTop)/10):Math.floor((target - scrollTop)/10);
                    scrollTop +=speed;

                    console.log(speed);
                    //speed>0 && target <= scrollTop 说明已经滚动到目标值
                    if(speed>0 && target <= scrollTop){
                        clearInterval(timer);
                        speed = 0;
                        target = scrollTop;
                    }
                    //speed<0 && target>=scrollTop  说明已经滚动到目标值
                    else if(speed<0 && target>=scrollTop){
                        clearInterval(timer);
                        speed = 0;
                        target = scrollTop;
                    }
                    window.scrollTo(0,scrollTop);
                    // console.log(target)

        },15);
    });

    //ajax请求数据
    //$.ajax({
    // type:"get",
    //     url:"http://localhost:1232/php/sign_in.php?phone=" + phone,
    //     success:function(data){
    //         // var data = JSON.parse(data);
    //         console.log('------分割线-----');
    //         console.log('------以下信息为数据库验证结果-----');
    //         console.log(phone +'=>',data);
    //         alert(data);
    //     }
    // });
    $.ajax({
        type:'get',
        url:"http://localhost:1232/php/index.php",
        success:function(data){
            var data = JSON.parse(data);
            // console.log(data);
            var html='';
            var html1=html2=html3=html4=html5=html6=html7=html8=html10=html;
            var url;
            $.map(data,function(item,index){
                // console.log(item.type)
                url = item.imgurl.slice(1,-1).split(',')[0];
                html= `<li data-id="${item.id}">
                        <a href="#" class="datalist"><img src = ${url}></a>
                        <h3><a href="#">${item.brand}</a></h3>
                        <p><a href="../html/data_list.html" class="datalist">${item.title}</a></p>
                        <h4>￥${item.price1}<i>￥${item.price2}</i></h4>
                    </li>`;    
                switch(item.type){
                    case "商场同款":
                                html1+=html;
                                $('#main').find('.same_kind').find('ul').html(html1);
                        break;

                    case "时尚名品":
                                html2+=html;
                                $('#main').find('.fashion').find('ul').html(html2);
                        break;

                    case "潮流女装":
                            html3+=html;
                            $('#main').find('.girl').find('ul').html(html3);
                    break;

                    case "精品男装":
                            html4+=html;
                            $('#main').find('.boy').find('ul').html(html4);
                    break;

                    case "时尚鞋靴":
                            html5+=html;
                            $('#main').find('.shoe').find('ul').html(html5);
                    break;

                    case "潮流箱包":
                            html6+=html;
                            $('#main').find('.bag').find('ul').html(html6);
                    break;

                    case "美容护肤":
                            html7+=html;
                            $('#main').find('.beautify').find('ul').html(html7);
                    break;

                    case "运动户外":
                            html8+=html;
                            $('#main').find('.sport').find('ul').html(html8);
                    break;

                    // case "内衣配饰":
                    //         html9+=html;
                    //         $('#main').find('.ACC').find('ul').html(html9);
                    // break;

                    case "可爱婴童":
                            html10+=html;
                            $('#main').find('.kid').find('ul').html(html10);
                    break;
                }
            });
        }

    });
    
    // 列表标题
    var $title = $('#main').find('.container').children('div');
    for(var i=1;i<=$title.length;i++){
        $title.eq(i).find('a').addClass('h6'+i);
    }
    //1.每个title的小样式（间距)
    $title.after($('<h5/>'));
    //2.事件委托获取data-id查询数据库传递数据到详情页
    $title.on('click','.datalist',function(){
        var data_id = $(this).closest('li').attr('data-id');
        console.log(data_id);
        window.location.href = "../html/data_list.html?id="+data_id;
    });
    


});