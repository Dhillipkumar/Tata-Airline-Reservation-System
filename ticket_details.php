<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ticket Details</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            padding: 20px;
        }
        .ticket-container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            padding: 20px;
            margin: auto;
            width: 60%;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
        a,button {
            display: inline-block;
            background-color: #0056b3;
            color: #fff;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            margin-top: 20px;
            
        }
        a:hover,button:hover {
            background-color: #004494;
        }
        .image-container {
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="ticket-container">
        <?php
        if (isset($_SESSION['ticketDetails'])) {
            $ticketDetails = $_SESSION['ticketDetails'];
            $book_ID = $ticketDetails['book_ID'];

          

    // ... [your existing code to display ticket details] ...

            $oneway_finall = $ticketDetails['oneway_finall'];
            $roundtrip_finall = $ticketDetails['roundtrip_finall'];
            $RoundTrip_date = $ticketDetails['RoundTrip_date'];
            ?>
            <h1>Thank You for Booking Tickets</h1>
            <div class="image-container">
                
                <img src="ticketlogo.png" alt="Ticket Image" width="200">
            </div>
            <p>Your Booking ID: <?php echo $book_ID; ?></p>
            <p>Your Seat number: Will be intimated at boarding time.</p>
            <p><?php echo $oneway_finall; ?></p>
            <?php
            if ($RoundTrip_date != '-') {
                echo "<p>" . $roundtrip_finall . "</p>";
            }
            ?>
            <p>Happy Journey! Fly Again!</p>

         
            <?php
        } else {
            echo "<p>No ticket details found. Please book a ticket first.</p>";
        }
        ?>
        <table align=center>
            <td>
        <a href="index.html">Go to Home</a>
    </td>
        <td >
        <button onclick="printTicket()" >Print Ticket</button></td>
        </table>
    </div>

    <script type="text/javascript">
        function printTicket() {
            window.print();
        }
    </script>
</body>
</html>
