<?php

session_start();

$servername = "localhost:3308";
$username = "root";
$password = NULL;
$dbname = "tataairline";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email_id = $_POST['username'];
$new_password = $_POST['password'];

// Check if the email exists
$email_check_sql = "SELECT * FROM customer_registration WHERE email_id='$email_id'";
$email_check_result = $conn->query($email_check_sql);

if ($email_check_result->num_rows > 0) {
    // Email exists, update password
    $update_sql = "UPDATE customer_registration SET password = '$new_password' WHERE email_id='$email_id'";
    if ($conn->query($update_sql) === TRUE) {
        echo '<script>alert("Your Password has been successfully changed");
        window.open("Login.html","_parent");  
        </script>';
    } else {
        echo '<script>alert("Error updating password: ' . $conn->error . '");
        window.history.back();
        </script>';
    }
} else {
    // Email does not exist, redirect to login with an alert
    echo '<script>alert("Email ID does not exist");
    window.history.back();
    </script>';
}

$conn->close();
?>
