;jQuery(function($){
    $('#pageFooter').load('../html/footer.html #footer');
    // window.onload = function(){
    //     $('#footer').find('.link').remove();
    // }
    document.onreadystatechange = function(){
        $('#footer').find('.link').remove();
    }
     
    

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
    $btn1.on('click',function(){
        if($txt1.val() !== '' && !/^1[34578]\d{9}/.test($txt1.val())){
            console.log($txt1.val())
            alert('你输入的手机号码有误，请重新输入！')
        }
        if($pass1.val() !== '' && !/^[a-z](a-z0-9_.){5,19}/.test($pass1.val())){
            alert('你输入的密码格式有误，请重新输入！')
        }
    });

    let $btn2 = $('#tab2').find('button');
    let $txt2 = $('#tab2').find('.ip1');
    let $pass2 = $('#tab2').find('.ip2');
    $btn2.on('click',function(){
        if($txt2.val() !== '' && (!/^1[34578]\d{9}/.test($txt2.val()) &&  !/^[a-z0-9][\w\-\.]{2,}@[a-z0-9]+(\.[a-z]{2,})+$/.test($txt2.val()))){
            console.log($txt2.val())
            alert('你输入的手机/邮箱有误，请重新输入！')
        }
        if($pass2.val() !== '' && !/^[a-z](a-z0-9_.){5,19}/.test($pass2.val())){
            alert('你输入的密码格式有误，请重新输入！')
        }
    });
    
});