jQuery(function($){
    $('#pageFooter').load('../html/footer.html #footer',function(){
        $('#footer').find('.link').remove();
    });
    
    // document.onreadystatechange = function(){
        
    // }
    console.log('15989137193','=>未注册');
    console.log('18720731372','=>已注册');
    console.log('------以上信息非验证，仅用于开发者测试时复制粘贴之用-----');

    // 注册验证
    let $btn2 = $('.banner_r2').find('.ipt');
    let $btn1 = $('.banner_r2').find('.submit');
    let $txt1 = $('.banner_r2').find('.ipt1');
    let $txt2 = $('.banner_r2').find('.ipt2');
    let $pass1 = $('.banner_r2').find('.ipt3');
    let $pass2 = $('.banner_r2').find('.ipt4');
    var yzm;
    $btn1.on('click',function(){
        if($txt2.val() != yzm){
            alert('验证码错误！')
            return;
        }

        if($pass1.val() == ''|| $pass2.val()==''){
            alert('密码/确认密码不能为空！')
            return;
        }else if(/(a-z){6,12}/.test($pass1.val()) || /(0-9){6,12}/.test($pass1.val())){
            alert('密码格式错误！')
            return;
        }
        else if($pass1.val() !== $pass2.val()){
            alert('两次输入的密码不一致，请重新输入！')
            return;
        }else if(/(a-z0-9){6,12}/.test($pass1.val())){
            var phone = $txt1.val();
            var password = $pass1.val();
            console.log(password);
            $.ajax({
                type:"get",
                url:'http://localhost:1232/php/sign_in.php?phone=' + phone +'&password='+password,
                success:function(data){
                    // var data = JSON.parse(data);
                    console.log(data);
                    alert(data);
                }
            });
        }else{
            alert('密码格式错误！')
        }

        

    });

    $btn2.on('click',function(){
        if($txt1.val() == '' || !/^1[34578]\d{9}/.test($txt1.val())){
            console.log($txt1.val())
            alert('你输入的手机号码有误，请重新输入！')
        }else{
            var phone = $txt1.val();
            $.ajax({
                type:"get",
                url:"http://localhost:1232/php/sign_in.php?phone=" + phone,
                success:function(data){
                    // var data = JSON.parse(data);
                    console.log('------分割线-----');
                    console.log('------以下信息为数据库验证结果-----');
                    console.log(phone +'=>',data);
                    
                    if(data == '1'){
                        alert('亲，您的手机号已注册，可直接登陆');
                        window.location.href="../html/reg.html?phone="+phone;
                    }else{
                        yzm = randomNumber(1000,9999);
                        console.log(yzm);
                        alert(data);

                        
                    }
                }
            });
        }
        
    });
    

    //输入时把input的类型改为password
    $('.banner_r2').find(':text').eq(2).on('focus',function(){
        $(this).keydown(function(){
            $(this).attr('value','').attr('type','password');
        })
    });;

    $('.banner_r2').find(':text').eq(3).on('focus',function(){
        $(this).keydown(function(){
            $(this).attr('value','').attr('type','password');
        })
    });;
    
});