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
  echo "<script>alert('Please Login Before Booking the ticket...'); window.location.href = 'login.html';</script>";
  exit; // Stop further script execution
}
$adult_no=$_SESSION["adult_no"];
$Children_no=$_SESSION["Children_no"];
$infants_no=$_SESSION["infants_no"];

$username=$_SESSION["username"];
$citynameform = $_POST["citynameform"];  
$citynameto = $_POST["citynameto"];  
$type = $_POST["type"];  
$oneway_Date = $_POST["oneway_Date"];  
$flight_timing = $_POST["flight_timing"];  
$RoundTrip_date = $_POST["RoundTrip_date"];  
$returnflight_timing = $_POST["returnflight_timing"];  

$Total_passengers = "ADT-".$adult_no." CHD-".$Children_no." INF-".$infants_no;

$Total_Amount = $_POST["Total_Amount"];  
$paymentdetails = "Username: \n".$_POST["Name"]."\n"."Card_No: ".$_POST["card"]; 
$paidon=date("Y-m-d H:i:s");;


    $book_ID= $_SESSION["book_ID"];
    $sql = "INSERT INTO passenger_ticket_details (Booking_ID,Cityname_From,Cityname_To,Type_Oneway_or_RoundTrip,Oneway_Date,Flight_Timing,RoundTrip_Date,ReturnFlight_Timing,FlightBooked_username,Total_passengers,Total_Amount,Paid_on,Payment_Details)
    VALUES('$book_ID','$citynameform','$citynameto','$type','$oneway_Date','$flight_timing','$RoundTrip_date','$returnflight_timing ','$username','$Total_passengers','$Total_Amount','$paidon','$paymentdetails')";

$oneway_finall="Flight Form : ".$citynameform." To : ".$citynameto." , ".$oneway_Date." ".$flight_timing;
$roundtrip_finall="Flight Form : ".$citynameto." To : ".$citynameform." , ".$RoundTrip_date." ".$returnflight_timing;

if (mysqli_multi_query($conn, $sql)) {
  // Store ticket details in the session or pass via URL
  $_SESSION['ticketDetails'] = [
      'book_ID' => $book_ID,
      'oneway_finall' => $oneway_finall,
      'roundtrip_finall' => $roundtrip_finall,
      'RoundTrip_date' => $RoundTrip_date
  ];

  // Redirect to the new page
  header('Location: ticket_details.php');
  exit;
}

?>
