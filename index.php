<!DOCTYPE html>
<html>
<head>
<title>Arkkitehtuurimme vuosikymmenet</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="fin/ark/css/style.css">
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto+Condensed">
<script src="fin/ark/js/jquery-1.12.2.min.js"></script>
</head>
<body>
<script>
$(document).ready(function () {
		alku();

	function alku(){
		$(document.createElement('p')).addClass('choice-box').attr('id', 'pelibutton').text('SUOMEKSI').appendTo('#frame').click(function(){
			window.location.href = 'fin';
		});
		$(document.createElement('p')).addClass('choice-box').attr('id', 'tulosbutton').text('PÅ SVENSKA').appendTo('#frame').click(function(){
			window.location.href = 'sve';
		});
		}
	});
</script>
<div id="frame">
</div>
</body>
</html>