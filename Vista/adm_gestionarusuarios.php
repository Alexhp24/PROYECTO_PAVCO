<?php
session_start();
if ($_SESSION['roles_designado'] == 1 || $_SESSION['roles_designado'] == 2) {
  include_once "assets/views/header.php";
  include_once "assets/views/nav.php";
?>
 <title>Adm | proyectos</title> <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header"> 
      <div class="container-fluid">
        <div class="text-center">

        </div>
      </div><!-- /.container-fluid -->
    </section>
    <section>
      <div class="container-fluid">
        <div class="card">
          <div class="card-body">
            <div class="row" id="listado_trabajadores"></div>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
    </section>
  </div>

<?php
  include_once "assets/views/footer.php";
} else {
  header('Location: ./index.php');
}
?>
<script src="assets/js/trabajador.js"></script>