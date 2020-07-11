<?php

$host = "localhost";
$user = "root";
$password = "";
$db = "demo";

mysql_connect($host,$Username,$Password)
mysql_select_db($db);

if(isset($_POST['Username'])){
   $uname=$_POST['Username'];
   $password=$_POST['Password'];

   $sql="select * from loginform where Username='".$uname."'AND
Password='".$password."'limit 1";

   $result=mysql_query($sql);

   if(mysql_num_rows($result)==1){
   echo " You have Successfully Logged in";
   exit();
   }
   else{
   echo "You have Entered Incorrect Password";
   exit();
   }
}
?>