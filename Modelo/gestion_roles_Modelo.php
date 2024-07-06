<?php
include_once 'conexion.php';

class gestionRoles {
    var $objetos;
    var $acceso;

    public function __construct() {
        $db = new conexion();
        $this->acceso = $db->pdo;
    }

    function cargar_gestionRoles() {
        $sql = "SELECT id_usuario, nombre, nombre_roles FROM adm_usuario 
                INNER JOIN adm_roles ON roles_designado=id_roles";
        $query = $this->acceso->prepare($sql);
        $query->execute();
        $this->objetos = $query->fetchAll();
        return $this->objetos;
    }

    function obtener_datos($id) {
        $sql = "SELECT * FROM usuario join tipo_us on us_tipo=id_tipo_us and id_usuario=:id";
        $query = $this->acceso->prepare($sql);
        $query->execute(array(':id' => $id));
        $this->objetos = $query->fetchAll();
        return $this->objetos;
    }

    function editar($id_usuario, $telefono, $residencia, $correo, $sexo, $adicional) {
        $sql = "UPDATE usuario SET telefono_us=:telefono, residencia_us=:residencia, correo_us=:correo, sexo_us=:sexo, adicional_us=:adicional WHERE id_usuario=:id";
        $query = $this->acceso->prepare($sql);
        $query->execute(array(':id' => $id_usuario, ':telefono' => $telefono, ':residencia' => $residencia, ':correo' => $correo, ':sexo' => $sexo, ':adicional' => $adicional));
    }

    function actualizar_rol($id_usuario, $nuevoRol) {
        $sql = "UPDATE adm_usuario SET roles_designado = :nuevoRol WHERE id_usuario = :id_usuario";
        $query = $this->acceso->prepare($sql);
        $query->execute(array(':nuevoRol' => $nuevoRol, ':id_usuario' => $id_usuario));
        return $query->rowCount() > 0;
    }
}
?>
