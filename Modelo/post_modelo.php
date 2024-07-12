<?php
include_once 'conexion.php';
class metodopost{
    var $objetos;
    VAR $acceso;
    public function __construct() {
        $db = new conexion();
        $this->acceso = $db->pdo;
    }

    function metodo_post(){
        $sql = "SELECT document_proyect FROM adm_roles";
        $query = $this->acceso->prepare($sql);
        $query->execute();
        $this->objetos = $query->fetchAll();
        return $this->objetos;
    } 
    
    function obtener_datos($id){
        $sql = "SELECT * FROM usuario join tipo_us on us_tipo=id_tipo_us and id_usuario=:id";
        $query = $this->acceso->prepare($sql);
        $query->execute(array(':id'=>$id));
        $this->objetos = $query->fetchAll();
        return $this->objetos;
    }
    function editar($id_usuario,$telefono,$residencia,$correo,$sexo,$adicional){
        $sql = "UPDATE usuario SET telefono_us=:telefono,residencia_us=:residencia,correo_us=:correo,sexo_us=:sexo,adicional_us=:adicional WHERE id_usuario=:id";
        $query = $this->acceso->prepare($sql);
        $query->execute(array(':id'=>$id_usuario,':telefono'=>$telefono,':residencia'=>$residencia,':correo'=>$correo,':sexo'=>$sexo,':adicional'=>$adicional));
   }

}
?>