<?php 
	Header('Access-Control-Allow-Origin: *');
	include 'funciones.php';
	$opcion = $_GET["opcion"];
	switch ($opcion) {
		case '1':
		    $sub= $_GET["sub"];
		    $sql = "SELECT * FROM aplicaciones WHERE submenu = $sub ORDER BY nombreapli";
		    echo getSQL($sql);
			break;
		case '2':
		    $menu= $_GET["menu"];
		    $sql = "SELECT * FROM submenu1 WHERE menu = $menu ORDER BY nombresub1";
		    echo getSQL($sql);
			break;
		case '3':
		    $sql = "SELECT * FROM menues";
		    echo getSQL($sql);
			break;
		case '4':
			
			break;
		case '5':
			
			break;
		default:
			# code...
			break;
	}
?>