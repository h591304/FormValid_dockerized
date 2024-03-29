<?php

$servername = "db";
$username = "root";
$password = "password";
$dbname = "form_val_data";

// Sets parameters 
if (isset($_POST["submit"])) {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $pw = $_POST['pw'];
    if (!empty($fname) && !empty($lname) && !empty($address) && !empty($email) && !empty($pw)) {
        //Create Connection between db and client
        $connection = mysqli_connect($servername, $username, $password, $dbname);
        //Check connection
        if ($connection == false) {
            die(mysqli_connect_error());
        }

        // Sql query to save information in database
        $sql = "INSERT INTO form_val_info (fname, lname, address, email, pw) VALUES ('$fname', '$lname', '$address', '$email', '$pw')";

        // Execute the sql query
        if (mysqli_query($connection, $sql)) {
            echo "Information inserted successfully";
        } else {
            echo "Error: " . mysqli_error($connection);
        }

        // Close the connection
        mysqli_close($connection);
    } else {
        echo "Please fill out all information!";
    }
}
