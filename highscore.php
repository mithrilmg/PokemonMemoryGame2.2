<?php

session_start();

require_once 'database.php';




switch ($_SESSION['Difficulty']) {
    case 1:
		$queryList = $db->query("SELECT * FROM highscore WHERE Difficulty=1 ORDER BY Score ");
		$list = $queryList->fetchAll();
        break;
    case 2:
        $queryList = $db->query("SELECT * FROM highscore WHERE Difficulty=2 ORDER BY Score ");
		$list = $queryList->fetchAll();
		break;
	case 3:
        $queryList = $db->query("SELECT * FROM highscore WHERE Difficulty=3 ORDER BY Score ");
		$list = $queryList->fetchAll();
        break;
	case 4:
        $queryList = $db->query("SELECT * FROM highscore WHERE Difficulty=4 ORDER BY Score ");
		$list = $queryList->fetchAll();
        break;
	case 5:
        $queryList = $db->query("SELECT * FROM highscore WHERE Difficulty=5 ORDER BY Score ");
		$list = $queryList->fetchAll();
        break;
	default:
       echo "ERROR DIFFICULTY LEVEL ";
	  
}
//print_r($list);

?>
<html>
<head>
<link rel="stylesheet" href="main.css">
</head>

<body>
<main>
<article>
	<div id="container" align="center"><h4>Highscore</h4>
	<table>
		<thead>
			<tr><th>Name</th><th>Score</th></tr>
		</thead>
		<tbody align="center">
				<?php
				foreach ($list as $user) {
					echo "<tr><td>{$user['Name']}</td><td>{$user['Score']}</tr></tr>";
				}
				
				?>
		</tbody>
	</table>


</div>
</article>
</main>
</body>
</html>