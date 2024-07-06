<?php
include_once '../Modelo/trabajadorModelo.php';
$trabajadores = new trabajadores();
//datos generales como los meses//
//MANTENIMIENTO----------------------------
if ($_POST['funcion'] == 'adm_cargar_trabajadores') { //javascritp
    $json = array();
    $trabajadores->cargar_trabajadores(); //modelo
    foreach ($trabajadores->objetos as $objeto) {
        $json[] = array(
            'id_usuario' => $objeto->id_usuario,
            'nombre' => $objeto->nombre,
            'apellido' => $objeto->apellido,
            'dni' => $objeto->dni,
            
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
}