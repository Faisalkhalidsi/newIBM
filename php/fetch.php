<?php
include 'conn.php';

$kodeIn = $_POST['kode'];

$sql = "SELECT * FROM dbd_kec where kode =".$kodeIn."";
$result = mysqli_query($conn,$sql) or die("Query error: " . mysql_error());

$records = array();

while ($row = mysqli_fetch_object($result)) {
    $records[] = $row;
}

mysqli_close($conn);

$data = "{\"kecamatan\" : " . json_encode($records) . "}";
echo $data;
?>