<?php
    // 引入其他php文件
    include 'connect.php';

    $phone = isset($_GET['phone']) ? $_GET['phone'] : 'null';
    $password = isset($_GET['password']) ? $_GET['password'] : 'null';
    // var_dump($phone);
    // var_dump($password);
    // 编写sql语句
        $sql = "select phone from user where phone='$phone'";
        // 执行sql语句query(),得到一个：查询结果集
        $result = $conn->query($sql);
        // 使用查询结果集
            
            if($result->num_rows>0){
                echo "1";
            }else{
                if($password != 'null'){
                    $sql2 = "insert into user(phone,password) values('$phone','$password')";
                    // 执行sql语句query(),得到一个：查询结果集
                    $result2 = $conn->query($sql2);

                    if($result2){
                        echo "恭喜您，注册成功！";
                    }else{
                        echo "注册失败，请重试！";
                    }
                }else{
                    echo "验证码已发送！请按F12查看。";
                }
                

                // 使用查询结果集
                
            }
     
    //释放查询结果集，避免资源浪费
    // $result->close();

    // 关闭数据库，避免资源浪费
    // $conn->close();

    
    // 返回数组
    // $row = $result->fetch_all(MYSQLI_ASSOC);

    // $res = json_encode($row,JSON_UNESCAPED_UNICODE);
    // echo "$res";
?>