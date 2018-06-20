<?php 

require_once './db.php' ;

// $query = "SELECT * FROM book ORDER BY numselling DESC";

if(isset($_POST['submit'])){
    $sql = "INSERT INTO user (fname,lname,email,password)
    VALUES ('".$_POST["firstname"]."','".$_POST["lastname"]."','".$_POST["email"]."','".$_POST["password"]."')";
}

$res=mysqli_query( $db_link, $query );



$ret = [] ;




if(!$res || !mysqli_num_rows( $res )  )
{
    die( 'error in database');
} else {
    
    
    while ($row = $res->fetch_assoc()) {
        
        $ret[] = $row;
    }
}




    
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
$alldata = json_encode($ret);


echo $alldata;

?>