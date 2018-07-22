<!DOCTYPE html>
<html>
	<head>
		<title>Citra Editor</title>
		<meta charset='utf-8'>
	   	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	   	<meta name="viewport" content="width=device-width, initial-scale=1">
	    <link href="style/css/bootstrap.css" rel="stylesheet">
	    <link href="style/css/gaya.css" rel="stylesheet">
		<link rel="icon" href="media/favicon.png" type="image/x-icon">
	</head>
	<body>
		<?php include 'layout/navbar.php';?>
		<div class="col-md-6 col-md-offset-3">
		<br>
			<div align="center">
				<canvas id="canvas" class="background"></canvas>
			</div>
		</div>
		<?php include 'layout/footer.php';?> 
	</body>
	<script src="style/js/jquery.js" type="text/javascript" ></script>
	<script src="style/js/citra.js" type="text/javascript" ></script>
	<script src="style/js/bootstrap.js" type="text/javascript" ></script>
</html>