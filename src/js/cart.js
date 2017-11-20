jQuery(function($){
    //ajax加载头部
    $('#pageHeader').load('../html/header.html #head',function(){
        //三级列表显示隐藏（给从ajax加载的元素绑定事件要用回调函数）
        $('#h_nav').find('.tal').on('mouseover',function(){
            $(this).find('ul').css('display','block');
        }).on('mouseout',function(){
            $(this).find('ul').css('display','none');
        });

        $('#h_link').remove();
        $('#h_search').remove();
        $('#h_nav').remove();
        $('#head').css('background','url(../img/link.gif) no-repeat 50px 50px').css('min-height',150);

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

    // get Cookie数据生成页面
    function opt(){
            var datalist = Cookie.get('datalist');
            if(!datalist){
            datalist = [];
        }else{
            datalist = JSON.parse(datalist);
            console.log(datalist)
            // console.log(datalist);
            var html='';
            var price_tal=0;
            $.map(datalist,function(item,idx){
                html+= `<li data-id=${datalist[idx].guid}>
                            <div class="l"><img src=${datalist[idx].imgurl}></div>
                            <div class="r">
                                <h3>${datalist[idx].name}</h3>
                                <p><i>商品编号：</i>${datalist[idx].guid}</p>
                                <h5>尺寸：${datalist[idx].size}</h5>
                                <h4>￥${datalist[idx].price} X ${datalist[idx].qty}</h4>
                            </div>
                            <a>X</a>
                        </li>`
                price_tal += datalist[idx].price*datalist[idx].qty*1;
                         // = ${datalist[idx].price}*${datalist[idx].qty}
            }).join();
            let $ul = $('#main').find('ul').html(html);
            $('<span/>').appendTo($ul).text(`总价：${price_tal}`);
            // console.log('price_tal:',price_tal);
        }
    }
    
    
    var datalist = Cookie.get('datalist');
            if(!datalist){
            datalist = [];
        }else{
        datalist = JSON.parse(datalist);
        console.log(datalist)
        // console.log(datalist);
        var html='';
        var price_tal=0;
        $.map(datalist,function(item,idx){
            html+= `<li data-id=${datalist[idx].guid}>
                        <div class="l"><img src=${datalist[idx].imgurl}></div>
                        <div class="r">
                            <h3>${datalist[idx].name}</h3>
                            <p><i>商品编号：</i>${datalist[idx].guid}</p>
                            <h5>尺寸：${datalist[idx].size}</h5>
                            <h4>￥${datalist[idx].price} X ${datalist[idx].qty}</h4>
                        </div>
                        <a>X</a>
                    </li>`
            price_tal += datalist[idx].price*datalist[idx].qty*1;
                     // = ${datalist[idx].price}*${datalist[idx].qty}
        }).join();
        let $ul = $('#main').find('ul').html(html);
        $('<span/>').appendTo($ul).text(`总价：${price_tal}`);
        // console.log('price_tal:',price_tal);
        }

    $('.cart').on('click','a',function(){
        var index=0;
        $curli = $(this).closest('li');
        $.map(datalist,function(item,idx){
            if(item.guid == $curli.attr('data-id')){
                index = idx;
                return;
            }
        });
        datalist.splice(index,1);
        var now = new Date();
        now.setDate(now.getDate()+7);
        Cookie.set('datalist',JSON.stringify(datalist),now,'/');
        opt();
    });
});