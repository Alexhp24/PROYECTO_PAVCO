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
          <table class="table">
            <thead class="table-light">
              <tr class="">
                <th scope="col">#</th>
                <th scope="col">NOMBRE</th>
                <th scope="col">NOMBRE ROLES</th>
              </tr>
            </thead>
            <tbody id="listar_roles"></tbody>
          </table>
              
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
<script src="assets/js/gestionroles.js"></script>