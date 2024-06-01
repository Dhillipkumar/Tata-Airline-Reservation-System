

<?php
 error_reporting(0);
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
$adult_no=$_POST["ps_adult_no"];
$Children_no=$_POST["ps_Children_no"];
$infants_no=$_POST["ps_infants_no"];

$_SESSION["adult_no"]=$adult_no;
$_SESSION["Children_no"]=$Children_no;
$_SESSION["infants_no"]=$infants_no;

$regenerateNumber = true;
do {
    $regNum      = rand(1000000,9999999);
    $book_ID=$regNum;
    $checkRegNum = "SELECT * FROM passenger_booking_details WHERE Booking_ID = '$book_ID'";
    $result      = mysqli_query($conn, $checkRegNum);
   
    if (mysqli_num_rows($result) == 0) {
        $regenerateNumber = false;
    }
} while ($regenerateNumber);


$_SESSION["book_ID"]=  $book_ID;

for ($a = 1; $a <= $adult_no; $a++) {
    $x = strval($a);
  $regenerateNumber = true;
do {
    $regNum      = rand(10000,99999);
    $ADTbooking_ID="ADT".$regNum;
    $checkRegNum = "SELECT * FROM passenger_booking_details WHERE PNR_number = '$booking_ID'";
    $result      = mysqli_query($conn, $checkRegNum);
   
    if (mysqli_num_rows($result) == 0) {
        $regenerateNumber = false;
    }
} while ($regenerateNumber);


    $adult_gender=$_POST["gender".$x]; 
    $adult_firstname=$_POST["ps_firstname".$x]; 
    $adult_Lastname=$_POST["ps_Lastname".$x]; 

    $adult_Email_id=$_POST["Email_id".$x];
    $adult_phonenumber=$_POST["phonenumber".$x];

    $adult_city=$_POST["city".$x];
    $adult_country=$_POST["country".$x];
    $adult_DOB=$_POST["DOB".$x];

    $adult_fullname= $adult_firstname.".".$adult_Lastname;
    $adult_fullAddress= $adult_city.",".$adult_country;
   

    $sql = "INSERT INTO passenger_booking_details (Booking_ID,PNR_number,Passenger_name,Gender,Date_of_Birth,Address,Phonenumber,Email_ID)
    VALUES('$book_ID','$ADTbooking_ID','$adult_fullname','$adult_gender','$adult_DOB','$adult_fullAddress','$adult_phonenumber','$adult_Email_id')";
    mysqli_multi_query($conn,$sql);
}


for ($a = 1; $a <= $Children_no; $a++) {
    $x = strval($a);
    $regenerateNumber = true;
    do {
        $regNum      = rand(10000,99999);
        $ADTbooking_ID="CHD".$regNum;
        $checkRegNum = "SELECT * FROM passenger_booking_details WHERE PNR_number = '$booking_ID'";
        $result      = mysqli_query($conn, $checkRegNum);
       
        if (mysqli_num_rows($result) == 0) {
            $regenerateNumber = false;
        }
    } while ($regenerateNumber);
  
    $adult_gender=$_POST["cgender".$x]; 
    $adult_firstname=$_POST["cps_firstname".$x]; 
    $adult_Lastname=$_POST["cps_Lastname".$x]; 

    $adult_Email_id=$_POST["cEmail_id".$x]; 
    $adult_phonenumber=$_POST["cphonenumber".$x];
    $adult_city=$_POST["ccity".$x]; 

    $adult_country=$_POST["ccountry".$x]; 
    $adult_DOB=$_POST["cDOB".$x]; 

    $adult_fullname= $adult_firstname.".".$adult_Lastname;
    $adult_fullAddress= $adult_city.",".$adult_country;

    $sql = "INSERT INTO passenger_booking_details (Booking_ID,PNR_number,Passenger_name,Gender,Date_of_Birth,Address,Phonenumber,Email_ID)
    VALUES('$book_ID','$ADTbooking_ID','$adult_fullname','$adult_gender','$adult_DOB','$adult_fullAddress','$adult_phonenumber','$adult_Email_id')";
    mysqli_multi_query($conn,$sql);
} 


for ($a = 1; $a <= $infants_no; $a++) {
    $x = strval($a);
    $regenerateNumber = true;
    do {
        $regNum      = rand(10000,99999);
        $ADTbooking_ID="INF".$regNum;
        $checkRegNum = "SELECT * FROM passenger_booking_details WHERE PNR_number = '$booking_ID'";
        $result      = mysqli_query($conn, $checkRegNum);
       
        if (mysqli_num_rows($result) == 0) {
            $regenerateNumber = false;
        }
    } while ($regenerateNumber);

   
    $adult_gender=$_POST["igender".$x]; 
    $adult_firstname=$_POST["ips_firstname".$x]; 
    $adult_Lastname=$_POST["ips_Lastname".$x]; 

    $adult_Email_id=$_POST["iEmail_id".$x]; 
    $adult_phonenumber=$_POST["iphonenumber".$x];
    $adult_city=$_POST["icity".$x]; 

    $adult_country=$_POST["icountry".$x]; 
    $adult_DOB=$_POST["iDOB".$x]; 

    $adult_fullname= $adult_firstname.".".$adult_Lastname;
    $adult_fullAddress= $adult_city.",".$adult_country;

    $sql = "INSERT INTO passenger_booking_details (Booking_ID,PNR_number,Passenger_name,Gender,Date_of_Birth,Address,Phonenumber,Email_ID)
    VALUES('$book_ID','$ADTbooking_ID','$adult_fullname','$adult_gender','$adult_DOB','$adult_fullAddress','$adult_phonenumber','$adult_Email_id')";
    mysqli_multi_query($conn,$sql);
}
echo'
<script> 
        window.open("payment.html","_self");
 </script>
 ';
mysqli_close($conn);
?>

