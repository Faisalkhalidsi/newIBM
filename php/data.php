<?php
include 'conn.php';

$sql = "SELECT * FROM dbd_kec";

$result = mysqli_query($conn,$sql) or die("Query error: " . mysql_error());

$records = array();

while ($row = mysqli_fetch_assoc($result)) {
    $records[] = $row;
}

mysqli_close($conn);

$data = "{\"kecamatan\" : " . json_encode($records) . "}";
echo $data;
?>	