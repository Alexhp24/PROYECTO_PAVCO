<?php
session_start();
if ($_SESSION['roles_designado'] == 1 || $_SESSION['roles_designado'] == 2 || $_SESSION['roles_designado'] == 3) {

    include_once "assets/views/header.php";
    include_once "assets/views/nav.php";
?>
    <title>Adm | Empresa</title> <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header"><!-- /.container-fluid -->
        </section>
        <section>
            <div class="container-fluid">
                <div class="card">
                    <div class="card-body">
                        <table class="table">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">ID USUARIO</th>
                                    <th scope="col">NOMBRE</th>
                                    <th scope="col">APELLIDO</th>
                                    <th scope="col">NOMBRE PROYECTO</th>
                                    <th scope="col">FECHA</th>
                                    <th scope="col"></th>
                                    
                                </tr>
                            </thead>
                            <tbody id="listar_reportes"></tbody>
                        </table>
                    </div>
                    <div class="card-footer"></div>
                </div>
            </div>
        </section>
    </div> <?php
            include_once "assets/views/footer.php";
        } else {
            header('Location: ../Login.php');
        }
            ?>
<script src="assets/js/reportes.js"></script>