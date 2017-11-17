<?php
	/*
		接口：获取列表数据
	 */
	
	// $cate = isset($_GET['category']) ? $_GET['category'] : null;
	
	// 连接数据库
	$conn = new mysqli('localhost','root','','yt');//得到实例对象

	// 检测连接
	if($conn->connect_errno){
		die('连接失败'.$conn->connect_error);
	}

	// 设置编码
	$conn->set_charset('utf8');

	// 编写sql语句
	$sql = "select * from sjdh";

	// if($cate){
		// $sql .= " where category='$cate'";
	// }

	// 执行sql语句
	// query()
	// 得到一个：查询结果集
	$result = $conn->query($sql);


var_dump($result);
	// 使用查询结果集
	// 返回数组
	$row = $result->fetch_all(MYSQLI_ASSOC);

	// 把数组转换成json字符串
	$res = json_encode($row,JSON_UNESCAPED_UNICODE);
	
	echo "$res";
?>