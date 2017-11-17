jQuery(function($){
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
            let html,html1,html2,html3,html4,html5,html6,html7,html8,html9,html10='';
            var url;
            $.map(data,function(item,index){
                // console.log(item.type)
                url = item.imgurl.slice(1,-1).split(',')[0];
                html= `<li>
                        <a><img src = ${url}></a>
                        <h3><a>${item.brand}</a></h3>
                        <p><a>${item.title}</a></p>
                        <h4>${item.price1}<i>${item.price2}</i></h4>
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

                        
                    // case "商场同款":
                    //     // url={item.imgurl};
                    //     // console.log(item.imgurl);
                    //     // url = JSON.parse(item.imgurl);
                    //     // console.log(
                    //     url = item.imgurl.slice(1,-1).split(',')[0];
                    //     // )
                    //     html1 += `<li>
                    //     <a><img src = ${url}></a>
                    //     <h3><a>${item.brand}</a></h3>
                    //     <p><a>${item.title}</a></p>
                    //     <h4>${item.price1}<i>${item.price2}</i></h4>
                    //     </li>
                    //     `;
                    //     var $ul1 = $('#main').find('.same_kind').find('ul').html(html1);
                    // break;

                    // case "时尚名品":

                    //     // url={item.imgurl};
                    //     console.log(item.imgurl);
                    //     // url = JSON.parse(item.imgurl);
                    //     // console.log(
                    //     url = item.imgurl.slice(1,-1).split(',')[0].slice(3);
                    //     // )
                    //     html2 += `<li>
                    //     <a><img src = ${url}></a>
                    //     <h3><a>${item.brand}</a></h3>
                    //     <p><a>${item.title}</a></p>
                    //     <h4>${item.price1}<i>${item.price2}</i></h4>
                    //     </li>
                    //     `;
                    //     var $ul1 = $('#main').find('.fashion').find('ul').html(html2);
                    // break;

                }
            }).join(',');
        }

    });

    // console.log($('#main').find('.same_kind').find('ul').html('<li></li>'));

});