<?php
$link = mysqli_connect('localhost', 'arkkiteh', 'cyG=rbfRuW', 'arkkiteh_mfa');

if($link === false){
	die('Ei voitu yhdistää tietokantaan. ' . mysqli_connect_error());
}

$name = $_POST['name'];
$score = $_POST['tulos'];

$sql =  "INSERT INTO scores (name, score) VALUES ('$name', '$score')";
if(mysqli_query($link, $sql)){
	echo 'Tuloksesi on tallennettu!';
}else{
	echo 'ERROR: Tulosta ei tallennettu.' .
	mysqli_error($link);
}

mysqli_close($link);
?>
