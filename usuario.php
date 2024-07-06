<?php

$user = $_GET['user'];

$password = $_GET['password'];

if (($user == "usuario") && ($password == "12345")) {

    echo "Bienvenido " . $user;
    header('location: Vista/paginaprincipal.php');
} else {

    echo "¡Usuario o contraseña incorrectos!";
    header('location: index.php ');
}
