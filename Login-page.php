<?php

session_start();


$servername = "localhost:3308";
$username = "root";
$password =  NULL;
$dbname = "tataairline";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 
 
    $username = $_POST["username"];  
	$_SESSION["username"]=$username;
    $userpassword = $_POST["Password"];  
	$getusername = "NULL";
	$getuserpassword = "NULL";
   
	$sql = "Select email_id,Password from customer_registration WHERE email_id =  '$username'";
	$getuserdata = $conn->query($sql);
	if ($getuserdata->num_rows > 0) {
	  // output data of each row
	  while($row = $getuserdata->fetch_assoc()) 
	  {
		 $getusername=$row["email_id"];
		 $getuserpassword=$row["Password"];
	  }
	} 
	else {
		echo'
		<script>
	
		confirm("Invalid Email id");
		window.open("Login.html","_parent");
	
		</script>';
	 
	}
	
	if($getusername==$username && $getuserpassword==$userpassword)
	{
		echo'
		<script>
		  window.open("index.html","_parent");
		</script>';
	}
	else
	{
		echo'
		<script>
		  confirm("Incorrect Email or Password");
		  window.open("Login.html","_parent");
		</script>';
	}


$conn->close();
?>