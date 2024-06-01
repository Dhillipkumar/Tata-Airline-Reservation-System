-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 24, 2023 at 06:05 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tataairline`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer_registration`
--

CREATE TABLE `customer_registration` (
  `title` varchar(10) NOT NULL,
  `Firstname` varchar(25) NOT NULL,
  `Lastname` varchar(25) NOT NULL,
  `Birthdate` text NOT NULL,
  `phone_number` bigint(11) NOT NULL,
  `state` varchar(100) NOT NULL,
  `email_id` varchar(100) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `City` varchar(100) NOT NULL,
  `Pincode` int(6) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer_registration`
--

INSERT INTO `customer_registration` (`title`, `Firstname`, `Lastname`, `Birthdate`, `phone_number`, `state`, `email_id`, `Address`, `City`, `Pincode`, `password`) VALUES
('mr.', 'Karthikeyan', 'M', '12/09/2001', 6301457870, 'Andhra Pradesh', '2001karthi.m@gmail.com', 'Chittoor', 'Chittoor', 517125, '23MCA0090@m'),
('mr.', 'karthikeyan', 'M', '0000-00-00', 6301457870, 'Andhra Pradesh', '2001karthi@gmail.com', 'Chittoor', 'Chittoor', 517125, '23MCA0010@m');

-- --------------------------------------------------------

--
-- Table structure for table `passenger_booking_details`
--

CREATE TABLE `passenger_booking_details` (
  `Booking_ID` varchar(50) NOT NULL,
  `PNR_number` varchar(50) NOT NULL,
  `Passenger_name` varchar(25) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Date_of_Birth` varchar(12) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Phonenumber` bigint(11) NOT NULL,
  `Email_ID` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `passenger_booking_details`
--

INSERT INTO `passenger_booking_details` (`Booking_ID`, `PNR_number`, `Passenger_name`, `Gender`, `Date_of_Birth`, `Address`, `Phonenumber`, `Email_ID`) VALUES
('6735024', 'ADT41428', 'karthikeyan.M', 'male', '12/09/2001', 'chennai,India', 6301457870, '2001karthi@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `passenger_ticket_details`
--

CREATE TABLE `passenger_ticket_details` (
  `Booking_ID` varchar(50) NOT NULL,
  `Cityname_From` varchar(50) NOT NULL,
  `Cityname_To` varchar(50) NOT NULL,
  `Type_Oneway_or_RoundTrip` varchar(50) NOT NULL,
  `Oneway_Date` varchar(50) NOT NULL,
  `Flight_Timing` varchar(50) NOT NULL,
  `RoundTrip_Date` varchar(50) NOT NULL,
  `ReturnFlight_Timing` varchar(50) NOT NULL,
  `FlightBooked_username` varchar(50) NOT NULL,
  `Total_passengers` bigint(20) NOT NULL,
  `Total_Amount` bigint(20) NOT NULL,
  `Paid_on` varchar(50) NOT NULL,
  `Payment_Details` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `passenger_ticket_details`
--

INSERT INTO `passenger_ticket_details` (`Booking_ID`, `Cityname_From`, `Cityname_To`, `Type_Oneway_or_RoundTrip`, `Oneway_Date`, `Flight_Timing`, `RoundTrip_Date`, `ReturnFlight_Timing`, `FlightBooked_username`, `Total_passengers`, `Total_Amount`, `Paid_on`, `Payment_Details`) VALUES
('6735024', 'Chennai', 'Delhi', 'Oneway', '2023-12-25', '(10:30 AM)', '-', '- ', '2001karthi@gmail.com', 0, 6700, '2023-12-24 18:04:26', 'Username: \nKarthikeayn\nCard_No: 654585474586');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer_registration`
--
ALTER TABLE `customer_registration`
  ADD PRIMARY KEY (`email_id`);

--
-- Indexes for table `passenger_booking_details`
--
ALTER TABLE `passenger_booking_details`
  ADD PRIMARY KEY (`PNR_number`);

--
-- Indexes for table `passenger_ticket_details`
--
ALTER TABLE `passenger_ticket_details`
  ADD PRIMARY KEY (`Booking_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
