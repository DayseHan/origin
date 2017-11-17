jQuery(function($){
    $('#pageFooter').load('../html/footer.html #footer',function(){
        $('#footer').find('.link').remove();
    });
    // document.onreadystatechange = function(){
        
    // }
     
    

    // // tab1用户名输入框
    // $('#tab1').find(':text').eq(0).attr('value','请输入银泰护照号(手机号)').on('focus',function(){
    //     $(this).keydown(function(){
    //         $(this).attr('value','');
    //     });
    // });
    
    // tab1密码输入框
    $('#tab1').find(':text').eq(1).attr('value','请输入密码').on('focus',function(){
        $(this).keydown(function(){
            $(this).attr('value','').attr('type','password');
        })
    });;

    // // tab2用户名输入框
    // $('#tab2').find(':text').eq(0).attr('value','请输入手机/邮箱').on('focus',function(){
    //     $(this).keydown(function(){
    //         $(this).attr('value','');
    //     });
    // });

    // // tab2密码输入框
    // $('#tab2').find(':text').eq(1).attr('value','请输入密码').on('focus',function(){
    //     $(this).keydown(function(){
    //         $(this).attr('value','').attr('type','password');
    //     })
    // });;

    //tab3二维码动画
    $('#tab3').find('.i').on('mouseover',function(){
        $(this).children('img').stop().animate({left:0}).next().stop().animate({opacity:1});
    }).on('mouseout',function(){
        $(this).children('img').stop().animate({left:80}).next().stop().animate({opacity:0});
    });

    //登录页面tab标签切换
    var $tab0 = $('#tab0');
    $tab0.children('div').slice(1).hide();
    $tab0.find('li').eq(0).addClass('active');

    $tab0.find('li').on('click',function(){console.log(666);
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass();
        $tab0.children('div').eq(index).show().siblings('div').hide();
    });

    let $btn1 = $('#tab1').find('button');
    let $txt1 = $('#tab1').find('.ip1');
    let $pass1 = $('#tab1').find('.ip2');
    

    let $btn2 = $('#tab2').find('button');console.log($btn2)
    let $txt2 = $('#tab2').find('.ip3');
    let $pass2 = $('#tab2').find('.ip4');

    console.log('15989137193','=>未注册');
    console.log('18720731372','mysql00','=>root(李海静)');
    console.log('------以上信息非验证，仅用于开发者测试时复制粘贴之用-----');

    $btn1.on('click',function(){
        if($txt2.val() !== '' && (!/^1[34578]\d{9}/.test($txt2.val()) &&  !/^[a-z0-9][\w\-\.]{2,}@[a-z0-9]+(\.[a-z]{2,})+$/.test($txt2.val()))){
            console.log($txt1.val())
            alert('手机号码错误/邮箱，请重新输入！')
        }
        if($pass2.val() !== '' && !/^[a-z](a-z0-9_.){5,19}/.test($pass1.val())){
            alert('用户名或密码错误，请重试！')
        }
    });

    $btn1.on('click',function(){
        var phone = $txt1.val();
        var password = $pass1.val();
        console.log(password);

        

        if($txt1.val() !== '' && !/^1[34578]\d{9}/.test($txt1.val())){
            alert('你输入的手机有误，请重新输入！')
        }else if(password == '' ){
            alert('密码不能为空！')
        }else if(/(a-z){6,12}/.test(password) || /(0-9){6,12}/.test(password)){
            alert('用户名或密码错误，请重试！')
        }else if(!/(a-z0-9){6,19}/.test(password)){
            $.ajax({
                type:"get",
                url:'http://localhost:1232/php/reg.php?phone=' + phone +'&password='+password,
                success:function(data){
                    // var data = JSON.parse(data);
                    console.log(data);
                    if(data =="true"){
                        alert('登陆成功！');
                        
                        location.href=("http://localhost:1232/index.html");
                    }else{
                        alert('用户名或密码错误！');
                    }
                    
                    // echo "登陆成功！";
                    // echo "用户名或密码错误";  
                }
            });
        }
        else{
            alert('用户名或密码错误，请重试！')
        }
        
    });
    
});