<?php

session_start();

	$_SESSION['Difficulty'] = 1;
?>

<!DOCTYPE html>
<html lang="pl">
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Pokemon 2gen Memory Game</title>
	<meta name="description" content="JS Memory Game ">
	<meta name="keywords" content="javascript, jQuery, game, pokemon, memory">
	<meta name="author" content="KG">
	
	<meta http-equiv="X-Ua-Compatible" content="IE=edge,chrome=1">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
	<link rel="stylesheet" href="main.css">


	<link href="https://fonts.googleapis.com/css?family=Lobster&amp;subset=latin-ext" rel="stylesheet">
	
	<!--[if lt IE 9]>
	<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
	<![endif]-->

</head>

<body>

	<script src="jquery-3.2.1.min.js" async></script>
	<script src="memory-infant.js" async></script>

	<header>
			
			<h1>Pokemon Memory Game <input id="muteButton" type="image" src="img\mute.png" width="2%" /></h1>
			</p>
				<audio loop autoplay>
	
  <source src="opening.mp3" type="audio/mpeg">
</audio>
	
	
	</header>
	
	<main>
	
		<article>
			
			<div class="board" id="container">
				<div class="col-5 col-sm-6 col-md-8 col-lg-10 col-xl-12">
				<div class="card" id="c0"></div>
				<div class="card" id="c1"></div>
				<div class="card" id="c2"></div>
				<div class="card" id="c3"></div>	
				<div class="card" id="c4"></div>
				<div class="card" id="c5"></div>	
				<div class="card" id="c6"></div>	
				<div class="card" id="c7"></div>	
				<div class="card" id="c8"></div>
				<div class="card" id="c9"></div>
				<div></div>
				
				<div class="card" id="c10"></div>
				<div class="card" id="c11"></div>			
				<div class="card" id="c12"></div>	
				<div class="card" id="c13"></div>
				<div class="card" id="c14"></div>
				<div class="card" id="c15"></div>				
				<div class="card" id="c16"></div>
				<div class="card" id="c17"></div>
				<div class="card" id="c18"></div>
				<div class="card" id="c19"></div>
				<div></div>
				<script>/*
				<div class="card" id="c20"></div>
				<div class="card" id="c21"></div>
				<div class="card" id="c22"></div>
				<div class="card" id="c23"></div>
				<div class="card" id="c24"></div>
				<div class="card" id="c25"></div>
				<div class="card" id="c26"></div>
				<div class="card" id="c27"></div>
				<div class="card" id="c28"></div>
				<div class="card" id="c29"></div>

				<div class="card" id="c30"></div>
				<div class="card" id="c31"></div>
				<div class="card" id="c32"></div>
				<div class="card" id="c33"></div>
				<div class="card" id="c34"></div>
				<div class="card" id="c35"></div>
				<div class="card" id="c36"></div>
				<div class="card" id="c37"></div>
				<div class="card" id="c38"></div>
				<div class="card" id="c39"></div>
				
				<div class="card" id="c40"></div>
				<div class="card" id="c41"></div>
				<div class="card" id="c42"></div>
				<div class="card" id="c43"></div>
				<div class="card" id="c44"></div>
				<div class="card" id="c45"></div>
				<div class="card" id="c46"></div>
				<div class="card" id="c47"></div>
*/
</script>
			
				<div class="score">Turn counter: 0</div>
			</div>
			</div>
				<div class="start" id="start"><a href="index.html"><h4>RETURN</h4></a></div>
				
			
	
		</article>
	
	</main>

	
	
	<script>
/*
	document.write(random[0]+'  ');
	document.write(random[1]+'  ');
	document.write(random[2]+'  ');
	document.write(random[3]+'  ');
	document.write(random[4]+'  ');
	document.write(random[5]+'  ');
	document.write(random[6]+'  ');
	document.write(random[7]+'  ');
	document.write(random[8]+'  ');
	document.write(random[9]+'  ');
	document.write(random[10]+'  ');
	document.write(random[11]+'  ');
	document.write(random[12]+'  ');
	document.write(random[13]+'  ');
	document.write(random[14]+'  ');
	document.write(random[15]+'  ');
	document.write(random[16]+'  ');
	document.write(random[17]+'  ');
	document.write(random[18]+'  ');
	document.write(random[19]+' -- <br>');
	
		document.write(cards[0]+'  ');
		document.write(cards[1]+'  ');
		document.write(cards[2]+'  ');
		document.write(cards[3]+'  ');
		document.write(cards[4]+'  ');
		document.write(cards[5]+'  ');
		document.write(cards[6]+'  ');
		document.write(cards[7]+'  ');
		document.write(cards[8]+'  ');
		document.write(cards[9]+'  ');
		document.write(cards[10]+'  ');
		document.write(cards[11]+'  ');
		document.write(cards[12]+'  ');
		document.write(cards[13]+'  ');
		document.write(cards[14]+'  ');
		document.write(cards[15]+'  ');
		document.write(cards[16]+'  ');
		document.write(cards[17]+'  ');
		document.write(cards[18]+'  ');
		document.write(cards[19]+'  <br>');
	
		document.write(cards[20]+'  ');
		document.write(cards[21]+'  ');
		document.write(cards[22]+'  ');
		document.write(cards[23]+'  ');
		document.write(cards[24]+'  ');
		document.write(cards[25]+'  ');
		document.write(cards[26]+'  ');
		document.write(cards[27]+'  ');
		document.write(cards[28]+'  ');
		document.write(cards[29]+'  ');
		document.write(cards[30]+'  ');
		document.write(cards[31]+'  ');
		document.write(cards[32]+'  ');
		document.write(cards[33]+'  ');
		document.write(cards[34]+'  ');
		document.write(cards[35]+'  ');
		document.write(cards[36]+'  ');
		document.write(cards[37]+'  ');
		document.write(cards[38]+'  ');
		document.write(cards[39]+'  ');
	*/
	</script>
	
</body>
</html>