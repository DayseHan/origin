<?php
    // 引入其他php文件
    include 'connect.php';

    // 编写sql语句
    $sql = "select * from sjdh";

    // 执行sql语句query(),得到一个：查询结果集
    $result = $conn->query($sql);

    //释放查询结果集，避免资源浪费
    // $result->close();

    // 关闭数据库，避免资源浪费
    // $conn->close();

    // 使用查询结果集
    // 返回数组
    $row = $result->fetch_all(MYSQLI_ASSOC);

    $res = json_encode($row,JSON_UNESCAPED_UNICODE);
    echo "$res";
?>