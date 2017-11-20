jQuery(function($){
    //ajax加载头部
    $('#pageHeader').load('../html/header.html #head',function(){

        //三级列表显示隐藏（给从ajax加载的元素绑定事件要用回调函数）
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

        // 三级导航ajax请求数据
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

    //location取得传递的id
    var data_id = window.location.search.slice(4);
    // console.log('location:',data_id);
    
    $.ajax({
        type:"get",
        url:"http://localhost:1232/php/data_list.php?data_id="+data_id,
        success:function(data){
            var data = JSON.parse(data);
            // console.log(data);
            var urlArr = data[0].imgurl.slice(1,-1).split(',');
            var sizeArr = data[0].size.slice(1,-1).split(',');
            var url = '';
            var size='';

            for(var i=0;i<sizeArr.length;i++){
                // $main.find('.size').append($('<a href="#">'));
                // size+= `<a href="#">${sizeArr[i]}</a>`;
                size+= `<a>${sizeArr[i]}</a>`;
                
            }
            for(var i=0;i<urlArr.length;i++){
                url+= `<li><img src=${urlArr[i]}></li>`;
                
            }
            url+=url;
            //商品详情的图片
            $ul = $('<ul/>').html(url);
            $('.bot1').append($ul);
            var html = `
                    <div>
                        <div class="imgbox">
                            <img src=${urlArr[0]}>
                        
                        </div>
                        <div class="ulbox">
                            <ul>${url}</ul>
                        </div>
                    </div>
                    <div class="rbox">
                        <h3 class="title">${data[0].title}</h3>
                        <span class="miao">喵货商品</span>
                        <p class="p1">银泰价：<i>￥${data[0].price1}</i></p>
                        <p class="p2">参考价： <i>￥${data[0].price2}</i></p>
                        <h4 class="price_cut">
                            <a href="#">四品类满299减100 可累计</a>
                        </h4>
                        <h4 class="color"><i>选择颜色分类：</i>
                            <a href="#">
                                ${data[0].color}
                                <img src=${urlArr[0]} data-id=${data[0].id}>
                                <i></i>
                            </a>
                        </h4><br/>
                        <h4 class="size">选择尺码：
                            ${size}
                            
                        </h4>
                        <h4 class="add">
                            <div class="qty">
                                <input type="text" value="1">
                                <span>
                                    <a class="jia">+</a>
                                    <a class="jian">-</a>
                                </span>
                            </div>
                            <div class="buy"><a>立即购买</a></div>
                            <div class="addCart"><a>加入购物车</a></div>
                        </h4>
                        <h4 class="cn">
                            <span>服务承诺</span>
                            <span>正品保障</span>
                            <span>支持无理由退换货</span>
                            <span>免运费</span>
                        </h4>   
                    </div>
                    
                    <div class="botbox">商品编号：${data[0].id}</div>
                    `;
            var $main = $('#main');
            $main.find('.l').html(html);

            var html2 = `<div><a href="#">${data[0].brand}</a></div>`
            $main.find('.r').html(html2);

            //size高亮
            $('.size').find('a').eq(0).addClass('size_act');
            $('.size').on('click','a',function(){
                $(this).addClass('size_act').siblings('a').removeClass('size_act');
            });

            //小图高亮
            $('.ulbox').find('a').eq(0).addClass('li_act');
            $('.ulbox').on('mouseover','li',function(){
                $(this).addClass('li_act').siblings('li').removeClass('li_act');
            })


            //放大镜
            $('#main').find('.imgbox').EdZoom({

                width:300,
                height:300,

                //大图与小图的距离
                gap:15,

                //大图显示的位置小图的右边
                position:'right',

                //小图增大的倍数
                multiple:3
            });

            $('#main').find('.ulbox').on('click','img',function(){
                var small_url = $(this).attr('src');console.log(this);
                $('#main').find('.imgbox').find('img').attr('src',small_url);
            });

            //添加购物车效果
            var $cartlist = $('.addCart');
            var $goodslist = $('.goods-list');
            var $cart = $('#h_cart');

            $cart.on('click',function(){
                window.location.href = '../html/cart.html';
            });

            //获取cookie到datalist
            var datalist = Cookie.get('datalist');
                    if(!datalist){
                        datalist = [];
                    }else{
                        datalist = JSON.parse(datalist);
                    }

            //购物车数量更新
            var $span_qty = $('#h_cart').find('span').text(datalist.length);
           // 给按钮绑定点击事件
            $cartlist.on('click',function(){
                var $imgbox = $('.imgbox');

                var $img = $imgbox.find('img');

                // 复制当前商品图片(用于实现动画效果)
                var $cloneImg = $img.clone();

                // 给复制图片设置一些样式
                $cloneImg.css({
                    position:'absolute',
                    top:$img.offset().top,
                    left:$img.offset().left,
                    width:$img.width()
                });

                // 图片写入页面body
                $cloneImg.appendTo('body');

                $cloneImg.animate({left:$cart.offset().left,top:$cart.offset().top+$cart.height(),width:60,height:60},function(){
                    //飞入后删除复制的图片
                    $cloneImg.remove();
                });

                    
                    
                    // 获取当前商品所在的li
                    var $currentLi = $(this).closest('.rbox');

                    var $img = $currentLi.find('.color').find('img');
                    var guid = $img.attr('data-id');

                    // 判断当前商品是否存在cookie
                    var currentIdx;
                    var res = datalist.some(function(goods,idx){
                        currentIdx = idx;
                        return goods.guid == guid;
                    });


                    if(res){
                        // if商品已经存在，则数量+1
                        datalist[currentIdx].qty++;
                    }else{
                        // else添加商品
                        var goods = {
                            guid:guid,
                            size:$('.size').find('.size_act').text(),
                            qty:1,
                            imgurl:$img.attr('src'),
                            name:$currentLi.find('.title').text(),
                            price:$currentLi.find('.p1').find('i').text().slice(1)
                        }

                        // 把当前商品添加到数组中
                        datalist.push(goods);
                    }
                    //把商品信息写入cookie
                    var now = new Date();
                    now.setDate(now.getDate()+7);
                    Cookie.set('datalist',JSON.stringify(datalist),now,'/');
                    var $span_qty = $('#h_cart').find('span').text(datalist.length);
            });
            
        }
        
    });
    
    //加减商品数量
    $('.jia').on('click',function(){
                    $ipt = $(this).parent().prev();
                    var a = $ipt.val();
                    console.log(a);
                    $ipt.val(a*1+1);
            });
     $('.jian').on('click',function(){
            $ipt = $(this).parent().prev();
            var a = $ipt.val();
            console.log(a);
            if(a<2){
                a=2;
            }
            $ipt.val(a*1-1);

    });

    //右下角三个小列表
    $.ajax({
        type:'get',
        url:"http://localhost:1232/php/index.php",
        success:function(data){
            var data = JSON.parse(data);
            // console.log(data);
            
            //封装获取5个商品的方法
            function ydd(){
                var x;
                var url='';
                var html_list='';

                for(var i=0;i<5;i++){
                        x = randomNumber(0,119);
                        // console.log(x);
                        url = data[x].imgurl.slice(1,-1).split(',')[0];
                        html_list += `<li data-id="${data[x].id}">
                                <a class="min_li img"><img src = ${url}></a>
                                <p><a class="min_li" target="_blank">${data[x].title}</a></p>
                                <h4>￥${data[x].price1}<i>￥${data[x].price2}</i></h4>
                            </li>`;
                }
                return html_list;
            
            }

            //循环生成三个ul
            var $ul = $('#tab').find('.list').find('ul');
            for(var j=0;j<$ul.length;j++){
                $ul.eq(j).html(ydd());
                html_list = '';
            }

            //点击刷新右下角商品列表
             $ul.prev().on('click','a',function(){
                $(this).closest('h5').next().html(ydd());
                html_list ='';
                return false;
             });

             //右下角的li跳转到详情页
             // console.log($('.min_li'))
             $('.min_li').on('click',function(){
                let dataId = $(this).closest('li').attr('data-id');
                window.location.href = "../html/data_list.html?id="+dataId;
             });


             
        }

        
    });

});