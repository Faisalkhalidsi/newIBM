<?php
$servername = "localhost";
$username = "root";
$password = "root";
$database = "peta";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

/* Check connection
	if (!$conn) 
		{
    		die("Connection failed: " . mysqli_connect_error());
		}
		
	echo "Connected successfully"; */

// Change character set to utf8
mysqli_set_charset($conn,"utf8");
mysqli_select_db($conn,$database);

?> 
