<?php
include_once '../Modelo/proyectModelo.php';
$proyectos = new proyectos();
//datos generales como los meses//
//MANTENIMIENTO----------------------------
if ($_POST['funcion'] == 'adm_cargar_proyectos') { //javascritp
    $json = array();
    $proyectos->cargar_proyectos(); //modelo
    foreach ($proyectos->objetos as $objeto) {
        $json[] = array(
            'id_proyecto' => $objeto->id_proyecto,
            'nombre_proyecto' => $objeto->nombre_proyecto,
            'fecha' => $objeto->fecha,
            'tipo_sanitario' => $objeto->tipo_sanitario,
        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;
}
if ($_POST['funcion'] == 'guardar_data_pavco') {
    $nombre_proyecto = $_POST['nombre_proyect'];
    $datapavco = $_POST['datapavco'];
    echo '<pre>';
    print_r($nombre_proyecto);
    echo '</pre>';
    echo '<pre>';
    print_r($datapavco);
    echo '</pre>';

    //$contabilidad->crear_contabilidad_balance($nombre_balance_con, $descripcion, $montoInicial, $documentos_cont, $fecha_ingreso_doc, $empresa_designado);
}
