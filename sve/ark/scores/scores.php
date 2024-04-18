<style>
<?php include "../css/scores.css"; ?>
</style>
<?php

$servername = "mysql.metropolia.fi";
$username = "elinamku";
$password = "ark312";
$dbname = "elinamku";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT name, score FROM scores  ORDER BY score DESC LIMIT 0 ,10";
$result = $conn->query($sql);
$rank = 0;
$temp_score = 0;

echo "<div style=\"overflow-x:auto\"><table id=\"scoreboard\">";
echo "<tr><th>Sijoitus</th><th>Nimi</th><th>Pisteet</th></tr>";
if ($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		if ($temp_score!=$row['score']) {
			$rank++;
		}
		echo "<tr><td>#" . $rank. "</td><td>" . $row["name"]. "</td><td>" . $row["score"]. "</td></tr>";
	}
} else {
	echo "Ei tallennettuja huipputuloksia";
}
echo "</table>";
echo "<p><button id=\"back\" onclick=\"javascript:history.back();\">Takaisin</button>";

$conn->close();
?>