<?php
class conexion
{
    private $servidor = "localhost";
    private $db = "pavco";
    private $usuario = "root";
    private $password = "";
    public $pdo = null;
    private $atributos = [PDO::ATTR_CASE => PDO::CASE_LOWER, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_ORACLE_NULLS => PDO::NULL_EMPTY_STRING, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ];

    function __construct()
    {
        $this->pdo = new PDO("mysql:host={$this->servidor};dbname={$this->db}", $this->usuario, $this->password, $this->atributos);
    }
}
?>
