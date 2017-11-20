<?php
    // 引入其他php文件
    include 'connect.php';

    // 获取前端传递的参数
    $pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 30;

    // 编写sql语句
    $sql = "select * from goods_list";
    // 执行sql语句query(),得到一个：查询结果集
    $result = $conn->query($sql);
    // 使用查询结果集
        
    $row = $result->fetch_all(MYSQLI_ASSOC);

    // var_dump($row);
    $res = array(
        'data'=>array_slice($row, ($pageNo-1)*$qty,$qty),
        'total'=>count($row)
    );
    // var_dump($res);

    echo json_encode($res,JSON_UNESCAPED_UNICODE);
                

    //释放查询结果集，避免资源浪费
    // $result->close();

    // 关闭数据库，避免资源浪费
    // $conn->close();

    
    // 返回数组
    // $row = $result->fetch_all(MYSQLI_ASSOC);

    // $res = json_encode($row,JSON_UNESCAPED_UNICODE);
    // echo "$res";
?>