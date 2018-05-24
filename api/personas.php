<?php 
	Header('Access-Control-Allow-Origin: *');
	include 'funciones.php';
	$opcion = $_GET["opcion"];
	switch ($opcion) {
		case '1':
			$sql = "SELECT * FROM persona WHERE vigencia = 1 ORDER BY apellido";
			echo getSQL($sql);
			break;
		case '2':
			$id = $_GET["id"];
			$sql = "SELECT * FROM persona WHERE idpersona = $id";
			echo getSQL($sql);
			break;
		case '3':
			$apellido = utf8_decode($_POST["apellido"]);
            $nombre = utf8_decode($_POST["nombre"]);
            $documento =$_POST["documento"];
            $mail = utf8_decode($_POST["mail"]);
            $telefono_particular = $_POST["telefono_particular"];
            $telefono_celular = $_POST["telefono_celular"];
            $domicilio = utf8_decode($_POST["domicilio"]);
			//$pro_observaciones = utf8_decode($_POST["pro_observaciones"]);
			//$pro_pcompra = $_POST["pro_pcompra"];
			//$pro_pventa = $_POST["pro_pventa"];
			//$pro_fcompra = $_POST["pro_fcompra"];
			//if ($pro_fcompra == "null") {
                $sql = "INSERT INTO persona VALUES(null, '$apellido', '$nombre', $documento, '$mail', 1, $telefono_particular, $telefono_celular, '$domicilio', 1, NOW(), null)";
               // $sql = "INSERT INTO persona VALUES(null, 'AAAAA', 'AAAAA', 222222, 'FFFFFFF', 1, 333333, 333333, 'GGGGGGGGG', 1, NOW(), null)";
			//}else{
				//$sql = "INSERT INTO persona VALUES(null, '$apellido', '$nombre', '$pro_fcompra', $pro_pcompra, $pro_pventa, '$pro_observaciones', 1, NOW(), null)";
			//}
			echo putSQL($sql);
			//echo $sql;
			break;
		case '4':
			/*$idsel = $_POST["idsel"];
			$pro_descripcion = strtolower(utf8_decode($_POST["pro_descripcion"]));
			$pro_unidad = $_POST["pro_unidad"];
			$pro_marca = utf8_decode($_POST["pro_marca"]);
			$pro_observaciones = utf8_decode($_POST["pro_observaciones"]);
			$pro_pcompra = $_POST["pro_pcompra"];
			$pro_pventa = $_POST["pro_pventa"];
			$pro_fcompra = $_POST["pro_fcompra"];
			if ($pro_fcompra == "null") {
				$sql = "UPDATE productos SET pro_descripcion = '$pro_descripcion', pro_unidad = '$pro_unidad', pro_marca = '$pro_marca', pro_observaciones = '$pro_observaciones', pro_pcompra = $pro_pcompra, pro_pventa = $pro_pventa, pro_fcompra = null, modificacion = NOW() WHERE idproducto = $idsel";
			}else{
				$sql = "UPDATE productos SET pro_descripcion = '$pro_descripcion', pro_unidad = '$pro_unidad', pro_marca = '$pro_marca', pro_observaciones = '$pro_observaciones', pro_pcompra = $pro_pcompra, pro_pventa = $pro_pventa, pro_fcompra = '$pro_fcompra', modificacion = NOW() WHERE idproducto = $idsel";
			}
			//echo $sql;
			echo putSQL($sql);*/
			break;
		case '5':
			$idsel = $_GET["id"];
			$sql = "UPDATE persona SET vigencia = 0, modificacion = NOW() WHERE idpersona = $idsel";
			//echo $sql;
			echo putSQL($sql);
			break;
		default:
			# code...
			break;
	}
?>