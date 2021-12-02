<?php
header("content-type:text/html;charset=utf-8");
//获取传入的参数
$u=$_GET['user'];
$p=$_GET['pass'];

//连接数据库
$link=mysqli_connect("localhost",'root','','bbb');
//设置编码
mysqli_set_charset($link,"utf8");
//SQL语句
$sql1="select * from enroll where user='$u'";
//执行SQL，并返回结果集
$result1=mysqli_query($link,$sql1);
//获取结果集中的数据
if($row=mysqli_fetch_assoc($result1)){
    echo "2";
}else{
//编写SQL
$sql2="insert into enroll(user,pass) values('$u','$p')";
//执行SQL语句
$result2=mysqli_query($link,$sql2);
if($result2){
    echo "1";
}
}

//关闭数据库连接
mysqli_close($link);

?>