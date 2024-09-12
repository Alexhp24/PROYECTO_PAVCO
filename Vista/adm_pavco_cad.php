<?php
session_start();
/* if ($_SESSION['roles_designado'] == 1 || $_SESSION['roles_designado'] == 2) {
  include_once "assets/views/header.php";
  include_once "assets/views/nav.php";  */
if (true) {
?>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Proyecto Pavco</title>
    <!-- Bootstrap CSS -->

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
  </head>

  <body>
    <style>
      /* Static Section (.col-md-12) */
      .col-md-12 {
        height: 150px;
        /* Set a fixed height for static behavior */
        overflow: hidden;
        /* Hide any content that overflows */
      }

      /* Scrollable Section (.drawing-board.col-md-12) */
      .drawing-board.col-md-12 {
        height: 500px;
        /* Set a desired height for the scrollable area */
        width: 600px;
        overflow-y: auto;
        /* Enable vertical scrolling */
        overflow-x: auto;
      }

      .icono-boton {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
        outline: none;
      }

      .icono {
        width: 32px;
        /* Ajusta el tamaño según tus necesidades */
        height: 32px;
        /* Ajusta el tamaño según tus necesidades */
        object-fit: cover;
        /* Asegura que la imagen se ajuste al tamaño especificado */
        border-radius: 5px;
        /*border: 2px solid #ccc;  Agrega un borde para darle apariencia de icono *
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Agrega una sombra para un efecto de relieve */
      }

      .icono-boton:hover .icono {
        border-color: #888;
        /* Cambia el color del borde al pasar el cursor sobre el botón */
        box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
        /* Aumenta la sombra al pasar el cursor sobre el botón */
      }
    </style>
    <div class="content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <section class="col-md-12">
            <div class="card">
              <div class="card-header p-2">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#archivo" data-toggle="tab"><i class="ri-file-add-line"></i>Archivo</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#agua" data-toggle="tab"><i class="ri-dashboard-horizontal-line"></i>Accesorios de
                      Agua</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#desague" data-toggle="tab"><i class="ri-dashboard-horizontal-line"></i>Accesorios de
                      Desague</a>
                  </li>
                  <!--                   <li class="nav-item">
                    <a class="nav-link" href="#ajustes" data-toggle="tab"
                      ><i class="ri-settings-5-fill"></i>Ajustes</a
                    >
                  </li> -->
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div class="active tab-pane" id="archivo" style="height: 50px">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-6 col-12 py-2">
                        <div class="card" style="margin-left: -1.2rem; margin-top: -1.7rem">
                          <div class="card-body d-flex justify-content-around">
                            <div>
                              <button class="btn btn-sm" id="zoomInButton" title="ZOOM (+)"><i class="ri-zoom-in-line" style="font-size: 24PX;"></i></button>
                              <button class="btn btn-sm" id="zoomOutButton" title="ZOOM (-)"><i class="ri-zoom-out-line" style="font-size: 24px;"></i></button> <button class="btn btn-sm" id="save-img" title="Descargar img"><i class="fa-solid fa-file-image" style=" font-size: 20px;"></i></button>
                              <button class="btn btn-sm" id="savePdf" title="Desgargar PDF"><i class="fa-solid fa-file-pdf" style="font-size: 20px;"></i></button>
                              <button class="btn btn-sm" id="guardardata" title="Guardar base de datos"> <i class="fas fa-download" style="font-size: 20px;"></i></button>
                              <label class="btn btn-sm" for="fileInput" title="Nuevo"> <i class="fa-solid fa-file" style="font-size: 26px;"></i></label>
                              <input type="file" id="fileInput" accept="application/pdf" style="display:none;">
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- secciones por definir -->
                      <div class="col-lg-3 col-md-3 col-sm-6 col-12 py-2"></div>
                      <div class="col-lg-3 col-md-3 col-sm-6 col-12"></div>
                      <div class="col-lg-3 col-md-3 col-sm-6 col-12 py-2"></div>
                    </div>
                  </div>
                  <div class="tab-pane" id="agua" style="height: 50px">
                    <div class="row">
                      <!-- seccion herramientas -->
                      <div class="col-lg-3 col-md-3 col-sm-6 col-12" style="
                          height: 50px;
                          overflow-x: auto;
                          overflow-x: hidden;
                        ">
                        <!--TUBOS DE AGUA GENERAL-->
                        <div class="card d-flex justify-content-around">
                          <div class="col-12">
                            <div class="body">
                              <div class="row">
                                <!--tubo 1/2-->
                                <div class="col-2">
                                  <button id="toggleColdPipe" class="btn btn-outline-sm btn-sm">TUBO 1/2
                                  </button>
                                </div>
                                <!--tubo3/4-->
                                <div class="col-2">
                                  <button id="toggle34" class="btn btn-outline-sm btn-sm">TUBO 3/4
                                  </button>
                                </div>
                                <!-- tubo de agua de 1 -->
                                <div class="col-2">
                                  <button id="toggle112" class="btn btn-outline-sm btn-sm">TUBO 1
                                  </button>
                                </div>
                                <!--tubo 1/1/2-->
                                <!-- <div class="col-2">
                                  <button id="toggle112" class="btn btn-outline-sm btn-sm">TUBO 1_1/2
                                  </button>
                                </div> -->
                                <!--tubo1_1/4-->
                                <div class="col-2">
                                  <button id="toggle114" class="btn btn-outline-sm btn-sm">TUBO 11_/4
                                  </button>
                                </div>
                                <!-- tubo de agua de 2 -->
                                <!-- <div class="col-2">
                                  <button id="toggle112" class="btn btn-outline-sm btn-sm">TUBO 2
                                  </button>
                                </div>
                                <-- tubo de agua de 3  --
                                <div class="col-2">
                                  <button id="toggle112" class="btn btn-outline-sm btn-sm">TUBO 3
                                  </button>
                                </div>
                                <-- tubo de 4 --
                                <div class="col-2">
                                  <button id="toggle112" class="btn btn-outline-sm btn-sm">TUBO 4
                                  </button>
                                </div> -->
                                <!--tubo caliente-->
                                <div class="col-2">
                                  <button id="toggleHotPipe" class="btn btn-outline-sm btn-sm">TUBO C°
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- TUBOS DE AGUA ACCESORIO -->
                      <div class="col-lg-3 col-md-3 col-sm-6 col-12" style="
                          height: 50px;
                          overflow-x: auto;
                          overflow-x: hidden;
                        ">
                        <div class="card d-flex justify-content-around">
                          <div class="col-12">
                            <div class="body">
                              <div class="row">
                                <!--CODO DE 90 SEGUN PULGADAS-->
                                <div class="dropdown">
                                  <button class="btn btn-outline-sm btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style=" height: 50px; overflow-x: auto;overflow-x: hidden;">
                                    <!--CODO DE 90 SEGUN PULGADAS-->
                                    <button class="icono-boton" type="button" title="CODO 1/2°" id="toggle90">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--CODO 3/4-->
                                    <button class="icono-boton" type="button" title="CODO 3/4°" id="togglecodo34">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--CODO DE 1-->
                                    <button class="icono-boton" type="button" title="CODO 1" id="togglecodo01">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                    </button>
                                    <!---CODO 11/4-->
                                    <button class="icono-boton" type="button" title="CODO 1_1/4°" id="togglecodo114">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--CODO DE 11/2-->
                                    <button class="icono-boton" type="button" title="CODO 1_1/2°" id="togglecodo112">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--CODO DE 2--->
                                    <button class="icono-boton" type="button" title="CODO 2" id="togglecodo02">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--CODO DE 3-->
                                    <button class="icono-boton" type="button" title="CODO 3°" id="togglecodo03">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--CODO DE 4-->
                                    <button class="icono-boton" type="button" title="CODO 4°" id="togglecodo04">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                    </button>
                                  </div>
                                </div>
                                <!-- codo TEE tipos de pulgada  -->
                                <div class="dropdown">
                                  <button class="btn btn-outline-sm btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style=" height: 50px; overflow-x: auto;overflow-x: hidden;">
                                    <!---CODOO TE 1/2--->
                                    <button class="icono-boton" type="button" title="CODO Tee 1/2" id="toggleTee12">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <!---CODOO TE 3/4--->
                                    <button class="icono-boton" type="button" title="Tee 3/4°" id="toggleX">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <!---CODOO TE 1--->
                                    <button class="icono-boton" type="button" title="Tee 1" id="toggleTee01">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <!---CODOO TE 1 1/4--->
                                    <button class="icono-boton" type="button" title="Tee 1 1/4" id="toggleTee114">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <!---CODOO TE 1 1/2--->
                                    <button class="icono-boton" type="button" title="Tee 1 1/2" id="toggleTee112">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <!---CODOO TE 2--->
                                    <button class="icono-boton" type="button" title="Tee 2" id="toggleTee02">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <!---CODOO TE 3--->
                                    <button class="icono-boton" type="button" title="Tee 3" id="toggleTee03">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <!---CODOO TE 4--->
                                    <button class="icono-boton" type="button" title="Tee 4" id="toggleTee04">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                    </button>
                                  </div>
                                </div>
                                <!-- codo yee -->
                                <!-- <div class="dropdown">
                                  <button class="btn btn-outline-sm btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style=" height: 50px; overflow-x: auto;overflow-x: hidden;">
                                    <!--yee 3/4--
                                    <button class="icono-boton" type="button" title="CODO 3/4" id="toggleY">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--Yee 1/2--
                                    <button class="icono-boton" type="button" title="Yee 1/2" id="toggleY12">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--Yee 1--
                                    <button class="icono-boton" type="button" title="Yee 1" id="toggleY01">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--Yee 1 1/4--
                                    <button class="icono-boton" type="button" title="Yee 1 1/4" id="toggleY114">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--Yee 1 1/2--
                                    <button class="icono-boton" type="button" title="Yee 1 1/2" id="toggleY112">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--Yee 2--
                                    <button class="icono-boton" type="button" title="Yee 2" id="toggleY02">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--Yee 3--
                                    <button class="icono-boton" type="button" title="Yee 3" id="toggleY03">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--Yee 4--
                                    <button class="icono-boton" type="button" title="Yee 4" id="toggleY04">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                    </button>
                                  </div>
                                </div> -->
                                <!-- Reduccion -->
                                <div class="dropdown">
                                  <button class="btn btn-outline-sm btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/REDUCCION.png" alt="Icono" class="icono" />
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style=" height: 50px; overflow-x: auto;overflow-x: hidden;">
                                    <!--REDUCCION 1 a 3/4-->
                                    <button class="icono-boton" type="button" title="REDUCCION 1 a 3/4" id="toggleReduccion">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/REDUCCION.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--REDUCCION 4 a 2-->
                                    <button class="icono-boton" type="button" title="REDUCCION 4 a 2" id="toggleReduccion12">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/REDUCCION.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--REDUCCION 3 x 4-->
                                    <button class="icono-boton" type="button" title="REDUCCION 3 x 4" id="toggleReduccion01">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/REDUCCION.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--REDUCCION 3/4 x 1/2-->
                                    <button class="icono-boton" type="button" title="REDUCCION 3/4 x 1/2" id="toggleReduccion112">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/REDUCCION.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--REDUCCION 1 x 1/2-->
                                    <button class="icono-boton" type="button" title="REDUCCION 1 x 1/2" id="toggleReduccion114">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/REDUCCION.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--REDUCCION 2 x 1/2-->
                                    <button class="icono-boton" type="button" title="REDUCCION 2 x 1/2" id="toggleReduccion02">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/REDUCCION.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--REDUCCION 2 x 11/4-->
                                    <button class="icono-boton" type="button" title="REDUCCION 2 x 11/4" id="toggleReduccion03">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/REDUCCION.png" alt="Icono" class="icono" />
                                    </button>
                                    <!--REDUCCION 11/2 x 11/4-->
                                    <button class="icono-boton" type="button" title="REDUCCION 11/2 x 11/4" id="toggleReduccion04">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/REDUCCION.png" alt="Icono" class="icono" />
                                    </button>
                                  </div>
                                </div>
                                <!--MONTANTES-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="MONTANTES" id="toggleMontantes">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/MONTANTES.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--GRIFO LIMPÍEZA-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="GRIFO LIMPIEZA" id="toggleGrifolimpieza">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/GRIFOLIMPIEZA.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--GRIFO DE RIEGO-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="GRIFO DE RIEGO" id="toggleGriforiego">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/GRIFORIEGO.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--CRUCES DE TUBO-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="TUBO CRUCES" id="toggleCrucesinConexion">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CRUCESTUBO.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!-- CAJA MEDIDOR DE AGUA -->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title=" CAJA MEDIDOR AGUA" id="toggleCajareguistroagua">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CAJAPORTAMEDIDORAGUA.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--VALVULA DE CONTROL-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="VALVULA DE CONTROL" id="toggleLlaveGeneral">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/VALVULACONTROL.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--CODO HACIA ABAJO-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO HACIA ARRIBA" id="toggleCD">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOHACIABAJO.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--CODO HACIA ARRIBA-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO HACIA ABAJO" id="toggleCA">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOHACIAARRIBA.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--VALVULA CHECK DE BRONCE-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="VALVULA CHECK DE BRONCE" id="toggleValvulaCheck">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/VAVULACHECK1.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--TEE HACIA ARRIBA-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="TEE HACIA ARRIBA" id="toggleTeeArriba">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/TEEHACIARRIBA1.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--TEE HACIA ABAJO-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="TEE HACIA ABAJO" id="toggleTeeAbajo">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/TEEHACIAABAJO.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--UNION UNIVERSAL-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="UNION UNIVERSA" id="toggleUnionUniversal">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/UNIONUNIVERSAL.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--TEE PLANTA-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="TEE PLANTA" id="toggleTeeplanta">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/TEEPLANTA.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-auto">
                        <div class="card d-flex justify-content-around" style="width: 80px; height: 55px;"> <!-- Ajusta width y height según tus necesidades -->
                          <div class="col-12">
                            <div class="body">
                              <div class="row">
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Entrada" id="toogleentrada">
                                    <i class="ri-circle-line"></i>
                                  </button>
                                </div>
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Salida" id="tooglesalida">
                                    <i class="ri-circle-fill"></i>
                                  </button>
                                </div>
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Texto" id="Texto1">
                                    <i class="fa-solid fa-text-slash" style="color: #4007df;"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!--REPORTES  -->
                      <div class="col-lg-3 col-md-3 col-sm-6 col-12 p-0 m-0">
                        <div class="d-flex justify-content-around">
                          <div class="form-group row">
                            <label for="proyecto_name" class="col-sm-6 col-form-label">GENERAR REPORTES</label>
                            <div class="col-sm-6">
                              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#reporteagua">
                                GENERAR
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- seccion datos extras-leyendas -->
                      <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div class="card">
                          <div id="legend"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!---TUBOS DE SAGUE-->
                  <div class="tab-pane" id="desague" style="height: 50px">
                    <div class="row">
                      <!-- seccion herramientas -->
                      <div class="col-lg-3 col-md-3 col-sm-6 col-12" style="
                          height: 50px;
                          overflow-x: auto;
                          overflow-x: hidden;
                        ">
                        <!--TUBOS DE DESAGUE GENERAL-->
                        <div class="card d-flex justify-content-around">
                          <div class="col-12">
                            <div class="body">
                              <div class="row">
                                <!--TUBERlA DE DESAGUE Ø2" SAL. MEDIA PRESIÓN-->
                                <div class="col-2">
                                  <button class="btn btn-outline-sm btn-sm" type="button" title="TUBERlA DE DESAGUE Ø4 SAL. MEDIA PRESIÓN" id="tubo02">TUBO Ø2
                                  </button>
                                </div>
                                <!-- TUBERIA DE DESAGUE 03 -->
                                <div class="col-2">
                                  <button class="btn btn-outline-sm btn-sm" type="button" title="TUBERlA DE DESAGUE Ø4 SAL. MEDIA PRESIÓN" id="tubo03">TUBO Ø3
                                  </button>
                                </div>
                                <!--TUBERlA DE DESAGUE Ø4" SAL. MEDIA PRESIÓN-->
                                <div class="col-2">
                                  <button class="btn btn-outline-sm  btn-sm" type="button" title="TUBERlA DE DESAGUE Ø2 SAL. MEDIA PRESIÓN" id="tubo04">TUBO Ø4
                                  </button>
                                </div>
                                <!-- TUBERIA DE DESAGUE 06 -->
                                <div class="col-2">
                                  <button class="btn btn-outline-sm  btn-sm" type="button" title="TUBERlA DE DESAGUE Ø6 SAL. MEDIA PRESIÓN" id="tubo06">TUBO Ø6
                                  </button>
                                </div>
                                <!-- TUBO DE DESAGUE 08 -->
                                <div class="col-2">
                                  <button class="btn btn-outline-sm btn-sm" type="button" title="TUBERlA DE DESAGUE Ø8 SAL. MEDIA PRESIÓN" id="tubo08">TUBO Ø8
                                  </button>
                                </div>
                                <div class="col-2">
                                  <button class="btn btn-outline-sm btn-sm" type="button" title="TUBERlA DE DESAGUE Ø8 SAL. MEDIA PRESIÓN" id="">
                                  </button>
                                </div>
                                <div class="col-2">
                                  <button class="btn btn-outline-sm btn-sm" type="button" title="TUBERlA DE VENTILACION" id="tuboventilacion09">TUBO VENTILACION
                                  </button>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- TUBOS DE DESAGUE ACCESORIO -->
                      <div class="col-lg-3 col-md-3 col-sm-6 col-12" style="
                          height: 50px;
                          overflow-x: auto;
                          overflow-x: hidden;
                        ">
                        <div class="card d-flex justify-content-around">
                          <div class="col-12">
                            <div class="body">
                              <div class="row">
                                <!--COD DE DESAGUE YEE.-->
                                <div class="dropdown">
                                  <button class="btn btn-outline-sm btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOYEE.png" alt="Icono" class="icono" />
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style=" height: 50px; overflow-x: auto;overflow-x: hidden;">
                                    <!--COD DE DESAGUE YEE.-->
                                    <button class="icono-boton" type="button" title="CODO YEE Ø4 a Ø2" id="CodoDesague_YEE">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOYEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <button class="icono-boton" type="button" title="CODO YEE Ø2°" id="CodoDesagueYEE022">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOYEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <button class="icono-boton" type="button" title="CODO YEE Ø4°" id="CodoDesagueYEE04">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOYEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <!-- <button class="icono-boton" type="button" title="CODO YEE 06°" id="CodoDesagueYEE06">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOYEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <button class="icono-boton" type="button" title="CODO YEE 08°" id="CodoDesagueYEE08">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOYEE.png" alt="Icono" class="icono" />
                                    </button> -->
                                  </div>
                                </div>
                                <!--TEE SANITARIO-->
                                <div class="dropdown">
                                  <button class="btn btn-outline-sm btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/TEESANITARIO.png" alt="Icono" class="icono" />
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style=" height: 50px; overflow-x: auto;overflow-x: hidden;">
                                    <!--TEE SANITARIO-->
                                    <button class="icono-boton" type="button" title="TEE SANITARIO Ø4 a Ø3" id="CodoTeeSanitario">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/TEESANITARIO.png" alt="Icono" class="icono" />
                                    </button>
                                    <button class="icono-boton" type="button" title="TEE SANITARIO Ø4 a Ø2" id="CodoTeeSanitario03">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/TEESANITARIO.png" alt="Icono" class="icono" />
                                    </button>
                                    <button class="icono-boton" type="button" title="TEE SANITARIO Ø4" id="CodoTeeSanitario04">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/TEESANITARIO.png" alt="Icono" class="icono" />
                                    </button>
                                    <button class="icono-boton" type="button" title="TEE SANITARIO  Ø2" id="CodoTeeSanitario06">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/TEESANITARIO.png" alt="Icono" class="icono" />
                                    </button>
                                    <!-- <button class="icono-boton" type="button" title="TEE SANITARIO 08" id="CodoTeeSanitario08">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/TEESANITARIO.png" alt="Icono" class="icono" />
                                    </button> -->
                                  </div>
                                </div>
                                <!-- TEE.GENERAL -->
                                <div class="dropdown">
                                  <button class="btn btn-outline-sm btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOTEE.png" alt="Icono" class="icono" />
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style=" height: 50px; overflow-x: auto;overflow-x: hidden;">
                                    <!-- TEE.GENERAL -->
                                    <button class="icono-boton" type="button" title=" CODO TEE 02°" id="CodoDesague_TEE">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOTEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <button class="icono-boton" type="button" title=" CODO TEE 03°" id="CodoTEEDesague03">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOTEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <button class="icono-boton" type="button" title=" CODO TEE 04°" id="CodoTEEDesague04">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOTEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <button class="icono-boton" type="button" title=" CODO TEE 06°" id="CodoTEEDesague06">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOTEE.png" alt="Icono" class="icono" />
                                    </button>
                                    <button class="icono-boton" type="button" title=" CODO TEE 08°" id="CodoTEEDesague08">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOTEE.png" alt="Icono" class="icono" />
                                    </button>
                                  </div>
                                </div>
                                <!--CODO DE 90° GENERAL-->
                                <div class="dropdown">
                                  <button class="btn btn-outline-sm btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO90.png" alt="Icono" class="icono" />
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style=" height: 50px; overflow-x: auto;overflow-x: hidden;">
                                    <!--CODO DE 90° GENERAL-->
                                    <button class="icono-boton" type="button" title="CODO 90 2 a 4°" id="CodoDesague42">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO90.png" alt="Icono" class="icono" />
                                    </button>

                                    <button class="icono-boton" type="button" title="CODO 02°" id="CodoDesague_90">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO90.png" alt="Icono" class="icono" />
                                    </button>
                                    <!-- CODO DE 90 03 -->
                                    <button class="icono-boton" type="button" title="CODO 03°" id="CodoDesague03">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO90.png" alt="Icono" class="icono" />
                                    </button>
                                    <!-- CODO DE 90 04 -->
                                    <button class="icono-boton" type="button" title="CODO 04°" id="CodoDesague04">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO90.png" alt="Icono" class="icono" />
                                    </button>
                                    <!-- CODO DE 90 04 -->
                                    <button class="icono-boton" type="button" title="CODO 06°" id="CodoDesague06">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO90.png" alt="Icono" class="icono" />
                                    </button>
                                    <!-- CODO DE 90 08 -->
                                    <button class="icono-boton" type="button" title="CODO 08°" id="CodoDesague08">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO90.png" alt="Icono" class="icono" />
                                    </button>
                                  </div>
                                </div>
                                <!-- CODO DE 45  -->
                                <div class="dropdown">
                                  <button class="btn btn-outline-sm btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO45.png" alt="Icono" class="icono" />
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style=" height: 50px; overflow-x: auto;overflow-x: hidden;">
                                    <!--CODO 45 A GRADOS corrregir .-->
                                    <button class="icono-boton" type="button" title="CODO 2 " id="CodoCodo45">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO45.png" alt="Icono" class="icono" />
                                    </button>

                                    <button class="icono-boton" type="button" title="CODO 3 " id="CodoCodo4503">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO45.png" alt="Icono" class="icono" />
                                    </button>

                                    <button class="icono-boton" type="button" title="CODO 4 " id="CodoCodo4504">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO45.png" alt="Icono" class="icono" />
                                    </button>

                                    <button class="icono-boton" type="button" title="CODO 6 " id="CodoCodo4506">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO45.png" alt="Icono" class="icono" />
                                    </button>

                                    <button class="icono-boton" type="button" title="CODO 8 " id="CodoCodo4508">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO45.png" alt="Icono" class="icono" />
                                    </button>
                                  </div>
                                </div>
                                <!-- SUMIDERO -->
                                <div class="dropdown">
                                  <button class="btn btn-outline-sm btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/SUMIDEROREJILLA.png" alt="Icono" class="icono" />
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style=" height: 50px; overflow-x: auto;overflow-x: hidden;">
                                    <!--SUMIDERO DEL TIPO REJILLA (CROMADO) corregir -->
                                    <button class="icono-boton" type="button" title="SUMIDERO DEL TIPO REJILLA 02" id="CodoSumidero">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/SUMIDEROREJILLA.png" alt="Icono" class="icono" />
                                    </button>

                                    <button class="icono-boton" type="button" title="SUMIDERO DEL TIPO REJILLA 04 " id="CodoSumidero04">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/SUMIDEROREJILLA.png" alt="Icono" class="icono" />
                                    </button>

                                    <!-- <button class="icono-boton" type="button" title="SUMIDERO DEL TIPO REJILLA 06 " id="CodoSumidero06">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/SUMIDEROREJILLA.png" alt="Icono" class="icono" />
                                    </button> -->
                                  </div>
                                </div>
                                <!--REGISTRO ROSCADO DE BRONCE CROMADO.-->
                                <div class="dropdown">
                                  <button class="btn btn-outline-sm btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/REGUISTROROSCADO.png" alt="Icono" class="icono" />
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style=" height: 50px; overflow-x: auto;overflow-x: hidden;">
                                    <button class="icono-boton" type="button" title="REGISTRO ROSCADO DE BRONCE CROMADO Ø2" id="CodoReguistroBronce">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/REGUISTROROSCADO.png" alt="Icono" class="icono" />
                                    </button>

                                    <button class="icono-boton" type="button" title="REGISTRO ROSCADO DE BRONCE CROMADO Ø4" id="CodoReguistroBronce04">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/REGUISTROROSCADO.png" alt="Icono" class="icono" />
                                    </button>

                                    <button class="icono-boton" type="button" title="REGISTRO ROSCADO DE BRONCE CROMADO Ø6" id="CodoReguistroBronce06">
                                      <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/REGUISTROROSCADO.png" alt="Icono" class="icono" />
                                    </button>
                                  </div>
                                </div>
                                <!--CAJA DE REGISTRO DE 12" x 24"PARA EL DESAGUE PLUVIAL-->
                                <div class="col-2 dropup">
                                  <button class="icono-boton" type="button" title="CAJA DE REGISTRO DE 12 x 24PARA EL DESAGUE PLUVIAL" id="CodoCajaReguistro">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CAJAREGUISTRO.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!---CRUCE DE TUBERIAS SIN CONEXION-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CRUCE DE TUBERIAS SIN CONEXION" id="CodoCodoCrusesDes">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CRUCESTUBO.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!-- //// -->
                                <!--CODO HACIA ABAJO-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO HACIA ABAJO" id="CodoCodoAbajo">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOHACIAABAJO.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!---MONTANTES.-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="MONTANTES" id="CodoMontantesDes">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/MONTANTES.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--CODO HACIA ABAJO.-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO HACIA ABAJO." id="CodoCodoHciaAbajo">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOABAJO.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- seccion entradas -->
                      <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div class="d-flex justify-content-around">
                          <div class="form-group row">
                            <label for="proyecto_name" class="col-sm-6 col-form-label">Genera reportes</label>
                            <div class="col-sm-6">
                              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#reportedesague">
                                GENERAR
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- seccion datos extras-leyendas -->
                      <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div class="card">
                          <div id="legend"></div>
                        </div>

                        <!-- <input type="text" id="inputTexto" placeholder="Escribe tu texto aquí">
                        <button id="botonModoTexto">Modo Texto</button> -->

                      </div>


                    </div>
                  </div>
                  <div class="tab-pane" id="desague" style="height: 50px"></div>
                </div>
              </div>
            </div>
          </section>
          <section class="drawing-board col-md-12">
            <div class="card" style="align-items: center" id="contenedor_message">
              <h2>Sube tu plano en formato .pdf</h2>
              <p><strong>Escala :</strong> 1/50</p>
              <p><strong>Tipo de Hoja :</strong> A1</p>
            </div>
            <!-- CANVAS  -->
            <canvas id="pdfCanvas" class="border"></canvas>
          </section>
        </div>
      </div>
      <!-- REPORTES DE AGUA  -->
      <div class="modal fade" id="reporteagua" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="reporteaguaLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="reporteaguaLabel">REPORTE DE ACCESORIOS AGUA </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <table class="table-sm table-hover  table-bordered" id="tabla1" style="text-align: center;">
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Tubo</td>
                    <td><sup>1</sup>/<sub>2</sub< /td>
                    <td><span id="TuboFria">0</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Tubo</td>
                    <td><sup>3</sup>/<sub>4</sub></td>
                    <td><span id="Tubo34">0</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Tubo</td>
                    <td>1 <sup>1</sup>/<sub>2</sub></td>
                    <td><span id="Tubo112">0</span></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Tubo</td>
                    <td> 1<sup>1</sup>/<sub>4</sub></td>
                    <td><span id="Tubo114">0</span></td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>Tubo</td>
                    <td>C°</td>
                    <td><span id="TuboCaliente">0</span></td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td>Codo</td>
                    <td><sup>1</sup>/<sub>2</sub></td>
                    <td><span id="Codo90">0</span></td>
                  </tr>
                  <tr>
                    <td>07</td>
                    <td>Codo</td>
                    <td><sup>3</sup>/<sub>4</sub></td>
                    <td><span id="Codo34">0</span></td>
                  </tr>
                  <tr>
                    <td>08</td>
                    <td>Codo</td>
                    <td>1</td>
                    <td><span id="Codo01">0</span></td>
                  </tr>
                  <tr>
                    <td>09</td>
                    <td>Codo</td>
                    <td>1<sup>1</sup>/<sub>4</sub></td>
                    <td><span id="Codo114">0</span></td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Codo</td>
                    <td>1<sup>1</sup>/<sub>2</sub></td>
                    <td><span id="Codo112">0</span></td>
                  </tr>

                  <tr>
                    <td>11</td>
                    <td>Codo</td>
                    <td>2</td>
                    <td><span id="Codo002">0</span></td>
                  </tr>

                  <tr>
                    <td>12</td>
                    <td>Codo</td>
                    <td>3</td>
                    <td><span id="Codo03">0</span></td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Codo</td>
                    <td>4</td>
                    <td><span id="Codo04">0</span></td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Codo TEE</td>
                    <td><sup>3</sup>/<sub>4</sub></td>
                    <td><span id="CodoT">0</span> </td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Codo TEE</td>
                    <td><sup>1</sup>/<sub>2</sub></td>
                    <td><span id="CodoT12">0</span></td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Codo TEE</td>
                    <td>1</td>
                    <td><span id="CodoT01">0</span></td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Codo TEE</td>
                    <td>1<sup>1</sup>/<sub>2</sub></td>
                    <td><span id="CodoT112">0</span></td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>Codo TEE</td>
                    <td>1<sup>1</sup>/<sub>4</sub></td>
                    <td><span id="CodoT114">0</span></td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>Codo TEE</td>
                    <td>2</td>
                    <td><span id="CodoT002">0</span></td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>Codo</td>
                    <td>3</td>
                    <td><span id="CodoT03">0</span></td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>Codo TEE</td>
                    <td>4</td>
                    <td><span id="CodoT04">0</span></td>
                  </tr>
                  <!-- <tr>
                    <td>22</td>
                    <td>Codo YEE</td>
                    <td><sup>3</sup>/<sub>4</sub></td>
                    <td><span id="CodoY">0</span></td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>Codo YEE</td>
                    <td><sup>1</sup>/<sub>2</sub></td>
                    <td><span id="CodoY12">0</span></td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>Codo YEE</td>
                    <td>1</td>
                    <td><span id="CodoY01">0</span></td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>Codo YEE</td>
                    <td>1<sup>1</sup>/<sub>2</sub></td>
                    <td><span id="CodoY112">0</span></td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>Codo YEE</td>
                    <td>1<sup>1</sup>/<sub>4</sub></td>
                    <td><span id="CodoY114">0</span></td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>Codo YEE</td>
                    <td>2</td>
                    <td><span id="CodoY02">0</span></td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>Codo YEE</td>
                    <td>3</td>
                    <td><span id="CodoY03">0</span></td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>Codo YEE</td>
                    <td>4</td>
                    <td><span id="CodoY04">0</span></td>
                  </tr> -->
                  <tr>
                    <td>30</td>
                    <td>Montantes</td>
                    <td>-</td>
                    <td><span id="Montantes">0</span></td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td>Grifo limpieza</td>
                    <td>-</td>
                    <td><span id="Grifolimpieza">0</span></td>
                  </tr>
                  <tr>
                    <td>32</td>
                    <td>Gtifo de riego</td>
                    <td>-</td>
                    <td><span id="Griforiego">0</span></td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td>Tubo Cruces</td>
                    <td>-</td>
                    <td><span id="CrucesinConexion">0</span></td>
                  </tr>
                  <tr>
                    <td>34</td>
                    <td>Caja medidor de agua</td>
                    <td>-</td>
                    <td><span id="Cajareguistroagua">0</span></td>
                  </tr>
                  <tr>
                    <td>35</td>
                    <td>Valvula de control</td>
                    <td>-</td>
                    <td><span id="LlaveGeneral">0</span></td>
                  </tr>
                  <tr>
                    <td>36</td>
                    <td>Codo hacia arriba</td>
                    <td>-</td>
                    <td><span id="CodoArriba">0</span></td>
                  </tr>
                  <tr>
                    <td>37</td>
                    <td>Codo hacia abajo</td>
                    <td>-</td>
                    <td><span id="CodoAbajoA">0</span></td>
                  </tr>
                  <tr>
                    <td>38</td>
                    <td>Valvula check</td>
                    <td>-</td>
                    <td><span id="ValvulaCheck">0</span></td>
                  </tr>
                  <tr>
                    <td>39</td>
                    <td>Tee abajo</td>
                    <td>-</td>
                    <td><span id="TeeAbajo">0</span></td>
                  </tr>
                  <tr>
                    <td>40</td>
                    <td>Tee arriba</td>
                    <td>-</td>
                    <td><span id="TeeArriba">0</span></td>
                  </tr>
                  <tr>
                    <td>41</td>
                    <td>Union universal</td>
                    <td>-</td>
                    <td><span id="UnionUniversal">0</span></td>
                  </tr>
                  <tr>
                    <td>42</td>
                    <td>Reduccion</td>
                    <td>1&nbsp;x&nbsp;<sup>3</sup>/<sub>4</sub></td>
                    <td><span id="Reduccion">0</span></td>
                  </tr>
                  <tr>
                    <td>43</td>
                    <td>Reduccion</td>
                    <td>4 &nbsp;x&nbsp;2</td>
                    <td><span id="Reduccion12">0</span></td>
                  </tr>
                  <tr>
                    <td>44</td>
                    <td>Reduccion</td>
                    <td>3 &nbsp;x&nbsp; 4</td>
                    <td><span id="Reduccion01">0</span></td>
                  </tr>
                  <tr>
                    <td>45</td>
                    <td>Reduccion</td>
                    <td><sup>3</sup>/<sub>4</sub> &nbsp;x&nbsp;<sup>1</sup>/<sub>2</sub></td>
                    <td><span id="Reduccion112">0</span></td>
                  </tr>
                  <tr>
                    <td>46</td>
                    <td>Reduccion </Ri:a>
                    </td>
                    <td>1&nbsp;x&nbsp;<sup>1</sup>/<sub>2</sub></td>
                    <td><span id="Reduccion114">0</span></td>
                  </tr>
                  <tr>
                    <td>47</td>
                    <td>Reduccion</td>
                    <td>2&nbsp;x&nbsp;<sup>1</sup>/<sub>2</sub></td>
                    <td><span id="Reduccion02">0</span></td>
                  </tr>
                  <tr>
                    <td>48</td>
                    <td>Reduccion</td>
                    <td>2&nbsp;x&nbsp;<sup>1</sup>/<sub>4</sub></td>
                    <td><span id="Reduccion03">0</span></td>
                  </tr>
                  <tr>
                    <td>49</td>
                    <td>Reduccion</td>
                    <td>1&nbsp; <sup>1</sup>/<sub>2 &nbsp;x&nbsp; 1 &nbsp; <sup>1</sup>/<sub>4</sub></td>
                    <td><span id="Reduccion04">0</span></td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td>Tee planta</td>
                    <td>-</td>
                    <td><span id="Teeplanta">0</span></td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td>Cantidad de entras </td>
                    <td>-</td>
                    <td><span id="Entrada">0</span></td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td>Cantidad de salidas </td>
                    <td>-</td>
                    <td><span id="Salida">0</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button id="download-pdf" type="button" class="btn btn-primary">Guardar</button>
            </div>
          </div>
        </div>
      </div>
      <!-- REPORTES DE DESAGUE  -->
      <div class="modal fade" id="reportedesague" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="reportedesagueLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="reportedesagueLabel">REPORTE DESAGUE </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <table class="table-sm table-hover table-responsive table-bordered" id="tabla2">
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Tubo</td>
                    <td>Ø2</td>
                    <td><span id="Tubo02">0</span></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Tubo</td>
                    <td>Ø2</td>
                    <td><span id="Tuboventilacion">0</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Tubo</td>
                    <td>Ø3</td>
                    <td><span id="Tubo03">0</span></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Tubo</td>
                    <td>Ø4</td>
                    <td><span id="Tubo04">0</span></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Tubo</td>
                    <td>Ø6</td>
                    <td><span id="Tubo06">0</span></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Tubo</td>
                    <td>Ø8</td>
                    <td><span id="Tubo08">0</span></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>CAJA DE REGISTROPARA EL DESAGUE PLUVIAL</td>
                    <td> 12 &nbsp; x &nbsp; 24</td>
                    <td><span id="CajaReguistro">0</span></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>SUMIDERO DEL TIPO REJILLA</td>
                    <td>CROMADO</td>
                    <td><span id="Sumidero">0</span></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>SUMIDERO DEL TIPO REJILLA</td>
                    <td> CROMADO 04</td>
                    <td><span id="Sumidero04">0</span></td>
                  </tr>
                  <!-- <tr>
                    <td>7</td>
                    <td>SUMIDERO DEL TIPO REJILLA</td>
                    <td>CROMADO 06</td>
                    <td><span id="Sumidero06">0</span></td>
                  </tr> -->

                  <tr>
                    <td>8</td>
                    <td>CRUCE DE TUBERIAS SIN CONEXION</td>
                    <td>-</td>
                    <td><span id="CodoCrusesDes">0</span></td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>REGISTRO ROSCADO DE BRONCE CROMADO</td>
                    <td>-</td>
                    <td><span id="ReguistroBronce">0</span></td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>REGISTRO ROSCADO DE BRONCE CROMADO</td>
                    <td>-</td>
                    <td><span id="ReguistroBronce04">0</span></td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>REGISTRO ROSCADO DE BRONCE CROMADO</td>
                    <td>-</td>
                    <td><span id="ReguistroBronce06">0</span></td>
                  </tr>


                  <tr>
                    <td>10</td>
                    <td>YEE</td>
                    <td>3</td>
                    <td><span id="DesagueYEE">0</span></td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>YEE</td>
                    <td>2</td>
                    <td><span id="DesagueYEE022">0</span></td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>YEE</td>
                    <td>4</td>
                    <td><span id="DesagueYEE04">0</span></td>
                  </tr>
                  <!-- 
                  <tr>
                    <td>13</td>
                    <td>YEE</td>
                    <td>6</td>
                    <td><span id="DesagueYEE06">0</span></td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>YEE</td>
                    <td>8</td>
                    <td><span id="DesagueYEE08">0</span></td>
                  </tr> -->

                  <tr>
                    <td>15</td>
                    <td>CODO 45° </td>
                    <td>2</td>
                    <td><span id="Codo45">0</span></td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>CODO 45° </td>
                    <td>3</td>
                    <td><span id="Codo4503">0</span></td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>CODO 45° </td>
                    <td>4</td>
                    <td><span id="Codo4504">0</span></td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>CODO 45° </td>
                    <td>6</td>
                    <td><span id="Codo4506">0</span></td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>CODO 45° </td>
                    <td>8</td>
                    <td><span id="Codo4508">0</span></td>
                  </tr>


                  <tr>
                    <td>16</td>
                    <td>CODO HACIA ABAJO</td>
                    <td>-</td>
                    <td><span id="CodoHciaAbajo">0</span></td>
                  </tr>

                  <tr>
                    <td>17</td>
                    <td>MONTANTES</td>
                    <td>-</td>
                    <td><span id="MontantesDes">0</span></td>
                  </tr>

                  <tr>
                    <td>18</td>
                    <td> CODO HACIA ABAJO</td>
                    <td></td>
                    <td><span id="CodoAbajo">0</span></td>
                  </tr>

                  <tr>
                    <td>19</td>
                    <td>TEE SANITARIO</td>
                    <td>2</td>
                    <td><span id="TeeSanitario">0</span></td>
                  </tr>

                  <tr>
                    <td>20</td>
                    <td>TEE SANITARIO</td>
                    <td>3</td>
                    <td><span id="TeeSanitario03">0</span></td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>TEE SANITARIO</td>
                    <td>4</td>
                    <td><span id="TeeSanitario04">0</span></td>
                  </tr>

                  <tr>
                    <td>22</td>
                    <td>TEE SANITARIO</td>
                    <td>6</td>
                    <td><span id="TeeSanitario06">0</span></td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>TEE SANITARIO</td>
                    <td>8</td>
                    <td><span id="TeeSanitario08">0</span></td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>TEE</td>
                    <td>2</td>
                    <td><span id="DesagueTEE">0</span></td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>Codo TEE</td>
                    <td>3</td>
                    <td><span id="DesagueTEE03">0</span></td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>--</td>
                    <td>3</td>
                    <td><span id="Texto">0</span></td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>Codo TEE</td>
                    <td>4</td>
                    <td><span id="DesagueTEE04">0</span></td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>Codo TEE</td>
                    <td>6</td>
                    <td><span id="DesagueTEE06">0</span></td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>Codo TEE</td>
                    <td>8</td>
                    <td><span id="DesagueTEE08">0</span></td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>CODO 90</td>
                    <td>2</td>
                    <td><span id="Desague90">0</span></td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>CODO</td>
                    <td>3</td>
                    <td><span id="Desague03">0</span></td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td>CODO</td>
                    <td>4</td>
                    <td><span id="Desague04">0</span></td>
                  </tr>
                  <tr>
                    <td>32</td>
                    <td>CODO</td>
                    <td>6</td>
                    <td><span id="Desague06">0</span></td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td>CODO</td>
                    <td>8</td>
                    <td><span id="Desague08">0</span></td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td>CODO</td>
                    <td>2 a 4</td>
                    <td><span id="Desague9042">0</span></td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button id="proyect" class="btn btn-primary">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Bootstrap JS y dependencias opcionales -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <!-- PDF.js -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.10/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.10/vfs_fonts.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"></script>
    <!-- Tu archivo JavaScript personalizado -->
    <!---pdf--
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js"></script>--->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.70/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.70/vfs_fonts.js"></script>
  </body>

  </html>
<?php
  include_once "assets/views/footer.php";
} else {
  header('Location: ./index.php');
}
?>
<script type="module" src="./js/canvas.js" defer></script>