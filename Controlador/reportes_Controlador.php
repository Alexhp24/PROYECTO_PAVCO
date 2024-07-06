<?php
include_once '../Modelo/reportes_Modelo.php';
$reportes = new reportes(); // Asegúrate de usar la clase correcta

// Cargar reportes
if ($_POST['funcion'] == 'adm_cargar_reportes') {
    $json = array();
    $reportes->cargar_reportes();
    foreach ($reportes->objetos as $objeto) {
        $json[] = array(
            'id_usuario' => $objeto->id_usuario,
            'nombre_proyecto' => $objeto->nombre_proyecto,
            'nombre' => $objeto->nombre,
            'apellido' => $objeto->apellido,
            'fecha' => $objeto->fecha
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
}

// Eliminar reporte
if ($_POST['funcion'] == 'adm_eliminar_reporte') {
    if (isset($_POST['reporteId'])) {
        $reporteId = $_POST['reporteId'];
        $resultado = $reportes->eliminar($reporteId);
        
        if ($resultado) {
            echo "success";
        } else {
            echo "error";
        }
    } else {
        echo "error";
    }
}
?>
