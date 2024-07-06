<?php
include_once '../Modelo/usuarioModelo.php';
session_start();
$user = $_POST['user'];
$pass = $_POST['password'];
$Usuario = new Usuario();
if (!empty($_SESSION['roles_designado'])) {
    switch ($_SESSION['roles_designado']) {
        case 1:
            header('location: ../Vista/adm_administrador.php');
            break;
        case 2:
            header('location: ../Vista/adm_trabajador.php');
            break;
        case 3:
            header('location: ../Vista/adm_invitado.php');
            break;
    }
} else {
    $Usuario->logearse($user, $pass);
    if (!empty($Usuario->objetos)) {
        foreach ($Usuario->objetos as $objetos) {
            $_SESSION['id_usuario'] = $objetos->id_usuario;
            $_SESSION['roles_designado'] = $objetos->roles_designado;
            $_SESSION['nombre'] = $objetos->nombre;
            $_SESSION["apellido"] = $objetos->apellido;
            // $_SESSION["avatar"]=$objetos->avatar;
        }
        switch ($_SESSION['roles_designado']) {
            case 1:
                header('location: ../Vista/adm_administrador.php');
                break;
            case 2:
                header('location: ../Vista/adm_trabajador.php');
                break;
            case 3:
                header('location: ../Vista/adm_invitado.php');
                break;
        }
    } else {
        header('location: ../login.php');
    }
}
