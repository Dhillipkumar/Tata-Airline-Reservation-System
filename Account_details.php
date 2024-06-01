<!DOCTYPE html>
<html>
    <head>
        <title>
     
        </title>
        <link rel="stylesheet" href="My_account.css">
    </head>
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
    if (empty($_SESSION["username"])) {
        // If username is not set or empty, show an alert and redirect to login page
        echo "<script>alert('Please Login ...'); window.location.href = 'login.html';</script>";
        exit; // Stop further script execution
    }
    $username=$_SESSION["username"];

$sql = "SELECT * FROM customer_registration WHERE email_id='$username'";
$result = mysqli_query($conn,$sql);
?>
    <body id="body">
        <fieldset id="header_field">
            <img src="Image/20211030_183129.png" id="logo_img"/>
            <h1>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <span id="header_title1">Your Account Details</span></h1><hr>
   </fieldset>
   <?php

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_array($result)) {
        
?>
   <fieldset id="field1">
       <div style="display: flex;">
        <fieldset id="profile">
   
             <img src="Image/user.png" id="user"><br><br>
             <span id="output"><?php echo  $row["title"]." ".$row["Firstname"]." ".$row["Lastname"]?></span><br><br><br>
             <table>
                 <tr>
                     <td><button id="button" onclick="Chagepassword()">Change password</button></td>
                 </tr>
                 <tr>
                    <td><button id="button1" onclick="Logout()">Logout</button></td>
                </tr>
                <tr>
                    <td><button id="button2" onclick="back()">Back</button></td>
                </tr>
             </table>
             <script>
function Chagepassword(){
                     window.open("Changing_password.html","_parent")
                 }
                 function Logout(){
                     window.open("Login.html","_parent")
                 }
                 function back(){
            window.history.back();
        }
       
             </script>

        </fieldset> 
        <div id="center">
        </div>
        <fieldset id="Accountdetails">
      <h1>Account Details</h1>
      <hr>

      <table style="padding: 8px;border-spacing: 38px;width: 800px;"><tr>
        <td id="Firstname" class="styles">Firstname : <span id="output1"><?php echo  $row["Firstname"] ?></span></td>
        <td id="Lastname" class="styles">Lastname : <span id="output1"><?php echo  $row["Lastname"] ?></span></td>
</tr>
<tr>
        <td id="DOB" class="styles">Date of Birth : <span id="output1"><?php echo  $row["Birthdate"] ?></span></td>
        <td id="phonenumber" class="styles">Phone Number : <span id="output1"><?php echo  $row["phone_number"] ?></span></td>
</tr>
<tr>
        <td id="Email_ID" class="styles">Email ID :  <span id="output1"><?php echo  $row["email_id"] ?></span></td>
</tr>
<tr>
        <td id="Address" class="styles" colspan="3">Address : <span id="output1"><?php echo  $row["Address"] ?></span></td>
</tr>
<tr>
        <td id="City" class="styles">City :  <span id="output1"><?php echo  $row["City"] ?></span></td>
        <td id="State" class="styles">State :  <span id="output1"><?php echo  $row["state"] ?></span></td>
</tr>
<tr>
    <td  id="pincode" class="styles">Pincode :  <span id="output1"><?php echo  $row["Pincode"] ?></span></td>
</tr>
</table>
<hr>
<?php  }
} else {
    echo "0 results";
}

$conn->close();


?>
        </fieldset>
    </div>
       
   </fieldset>
    </body>
</html>