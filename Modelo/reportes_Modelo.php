<?php
include_once 'conexion.php';
class reportes {
    var $objetos;
    var $acceso;

    public function __construct() {
        $db = new conexion();
        $this->acceso = $db->pdo;
    }

    function cargar_reportes(){
        $sql = "SELECT 
        id_usuario,
        nombre_proyecto,
        nombre,
        apellido,
        fecha
        FROM 
        adm_usuario
        JOIN
        adm_proyectos";

        $query = $this->acceso->prepare($sql);
        $query->execute();
        $this->objetos = $query->fetchAll(PDO::FETCH_OBJ);
        return $this->objetos;
    } 

    function obtener_datos($id){
        $sql = "SELECT * FROM usuario JOIN tipo_us ON us_tipo=id_tipo_us WHERE id_usuario=:id";
        $query = $this->acceso->prepare($sql);
        $query->execute(array(':id' => $id));
        $this->objetos = $query->fetchAll(PDO::FETCH_OBJ);
        return $this->objetos;
    }

    function editar($id_usuario, $telefono, $residencia, $correo, $sexo, $adicional){
        $sql = "UPDATE usuario SET telefono_us=:telefono, residencia_us=:residencia, correo_us=:correo, sexo_us=:sexo, adicional_us=:adicional WHERE id_usuario=:id";
        $query = $this->acceso->prepare($sql);
        $query->execute(array(':id' => $id_usuario, ':telefono' => $telefono, ':residencia' => $residencia, ':correo' => $correo, ':sexo' => $sexo, ':adicional' => $adicional));
    }

    function eliminar($id_usuario){
        $sql = "DELETE FROM adm_usuario WHERE id_usuario = :id";
        $query = $this->acceso->prepare($sql);
        return $query->execute(array(':id' => $id_usuario));
    }
}
?>
