<?php
  $titl=$_POST['title'];
  $Firstname=$_POST['Firstname'];
  $Lastname=$_POST['Lastname'];
  $Birthdate=$_POST['Birthdate'];
  $phone_number=$_POST['phone_number'];
  $state=$_POST['state'];
  $email_id=$_POST['email_id'];
  $Address=$_POST['Address'];
  $City=$_POST['City'];
  $Pincode=$_POST['Pincode'];
  $password=$_POST['password'];
  
  $con=mysqli_connect("localhost:3308","root","","tataairline");

  $query=mysqli_query($con,"SELECT * FROM customer_registration WHERE email_id='$email_id'");

  $result = mysqli_num_rows($query);
  if($result>0){
    echo "<script>alert('Email ID already use. Please use other Mail Id');</script>";
    echo "<script>window.location.href = 'Signup.html';</script>";
    exit;
  }

  else{
  $sql="INSERT INTO customer_registration(title,Firstname,Lastname,Birthdate,phone_number,state,email_id,Address,City,Pincode,password) 
  values('$titl','$Firstname','$Lastname','$Birthdate','$phone_number','$state','$email_id','$Address','$City','$Pincode','$password')";
  if(mysqli_query($con,$sql)){
    echo '<script type="text/javascript" language="javascript">
    alert("Successfully Registered");
    window.open("Login.html","_parent");

    </script>';
  }
  else{
	echo"registration Details NOT ADDED";
  }
}
?>
