<!DOCTYPE html>
<html>
<head>
<title>Den finska arkitekturens decennier</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="ark/css/style.css">
<link rel="stylesheet" type="text/css" href="ark/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto+Condensed">
<script src="ark/js/jquery-1.12.2.min.js"></script>
<script src="ark/js/bootstrap.js"></script>
<script src="ark/js/bootbox.js"></script>
<script src="ark/js/functions.js"></script>
<script src="ark/js/lisatietoa.js"></script>
<script src="ark/kys/1900.js"></script>
<script src="ark/kys/1910.js"></script>
<script src="ark/kys/1920.js"></script>
<script src="ark/kys/1930.js"></script>
<script src="ark/kys/1940.js"></script>
<script src="ark/kys/1950.js"></script>
<script src="ark/kys/1960.js"></script>
<script src="ark/kys/1970.js"></script>
<script src="ark/kys/1980.js"></script>
<script src="ark/kys/1990.js"></script>
</head>
<body>
<div id="frame">
</div>
<div id="frame2">
</div>
<div id="alaframe">
</div>
<?php

$servername = "localhost";
$username = "arkkiteh";
$password = "cyG=rbfRuW";
$dbname = "arkkiteh_mfa";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT name, score FROM scores  ORDER BY score DESC LIMIT 10";
$result = $conn->query($sql);
$rank = 0;
$temp_score = 0;

echo "<div id=\"tulokset\"><table id=\"scoreboard\">";
echo "<h1>Den finska arkitekturens decennier</h1>";
echo "<tr><th>Placering</th><th>Namn</th><th>Poäng</th></tr>";
if ($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		if ($temp_score!=$row['score']) {
			$rank++;
		}
		echo "<tr><td>#" . $rank. "</td><td>" . $row["name"]. "</td><td>" . $row["score"]. "</td></tr>";
	}
} else {
	echo "";
}
echo "</table></div>";

$conn->close();
?>
</body>
</html>