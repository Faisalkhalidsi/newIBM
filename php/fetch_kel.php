<?php
include 'conn.php';

$kodeIn = $_POST['id_kel'];

$sql = "SELECT * FROM dbd_kel where id_kel =".$kodeIn."";
$result = mysqli_query($conn,$sql) or die("Query error: " . mysql_error());

$records = array();

while ($row = mysqli_fetch_object($result)) {
    $records[] = $row;
}

mysqli_close($conn);

$data = "{\"kelurahan\" : " . json_encode($records) . "}";
echo $data;
?>