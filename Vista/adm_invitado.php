<?php
session_start();
if ($_SESSION['roles_designado'] == 1 || $_SESSION['roles_designado'] == 3 || $_SESSION['roles_designado'] == 3) {
  include_once "assets/views/header.php";
  include_once "assets/views/nav.php";


?>
  <title>Adm | Empresa</title> <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="text-center">
            <h1 class="text-center">BIENVENIDOS PAVCO</h1>
            <input type="hidden" id="tipo_usuario" value="<?php echo $_SESSION['roles_designado'] ?>">
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <section>
      <div class="container-fluid">
        <div class="card ">
          <div class="card-body">
        
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
<script src=""></script>