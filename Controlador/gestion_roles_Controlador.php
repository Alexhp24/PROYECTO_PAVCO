<?php
include_once '../Modelo/gestion_roles_Modelo.php';
$gestionRoles = new gestionRoles();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $funcion = $_POST['funcion'];

    if ($funcion == 'adm_cargar_gestionRoles') {
        $json = array();
        $gestionRoles->cargar_gestionRoles();
        foreach ($gestionRoles->objetos as $objeto) {
            $json[] = array(
                'id_usuario'=> $objeto->id_usuario,
                'nombre' => $objeto->nombre,
                'nombre_roles' => $objeto->nombre_roles,
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    } elseif ($funcion == 'editar_rol') {
        $id_usuario = $_POST['id_usuario'];
        $nuevoRol = $_POST['nuevoRol'];

        $resultado = $gestionRoles->actualizar_rol($id_usuario, $nuevoRol);

        if ($resultado) {
            echo 'success';
        } else {
            echo 'error';
        }
    }
}
?>
