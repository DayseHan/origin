jQuery(function($){
    $('#pageFooter').load('../html/footer.html #footer',function(){
        $('#footer').find('.link').remove();
    });
    
    // document.onreadystatechange = function(){
        
    // }

    // 注册验证
    let $btn2 = $('.banner_r2').find('.ipt');
    let $btn1 = $('.banner_r2').find('.submit');
    let $txt1 = $('.banner_r2').find('.ipt1');
    let $txt2 = $('.banner_r2').find('.ipt2');
    let $pass1 = $('.banner_r2').find('.ipt3');
    let $pass2 = $('.banner_r2').find('.ipt4');
    $btn1.on('click',function(){
        if($txt1.val() == '' || !/^1[34578]\d{9}/.test($txt1.val())){
            console.log($txt1.val())
            alert('你输入的手机号码有误，请重新输入！')
        }
        if($pass1.val() == ''|| $pass2.val()==''){
            alert('密码/确认密码不能为空！')
        }else if(!/(a-z0-9){6,12}/.test($pass1.val()) ||  /(a-z){6,12}/.test($pass1.val()) || /(0-9){6,12}/.test($pass1.val())){
            alert('你输入的密码格式有误，请重新输入！')

        }else if($pass1.val() !== $pass2.val()){
            alert('两次输入的密码不一致，请重新输入！')
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