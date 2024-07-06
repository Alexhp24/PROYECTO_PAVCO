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