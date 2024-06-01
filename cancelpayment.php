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

$book_ID= $_SESSION["book_ID"];
// sql to delete a record
$sql = "DELETE FROM passenger_booking_details WHERE Booking_ID=$book_ID";

if ($conn->query($sql) === TRUE) {
    echo '<script>alert("Payment Canceled");
       window.open("index.html","_parent");      
    </script>';
} 
$conn->close();
?>