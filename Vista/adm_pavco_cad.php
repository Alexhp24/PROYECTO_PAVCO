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
                                <div class="col-2">
                                  <button id="toggle112" class="btn btn-outline-sm btn-sm">TUBO 1_1/2
                                  </button>
                                </div>
                                <!--tubo1_1/4-->
                                <div class="col-2">
                                  <button id="toggle114" class="btn btn-outline-sm btn-sm">TUBO 11_/4
                                  </button>
                                </div>
                                <!-- tubo de agua de 2 -->
                                <div class="col-2">
                                  <button id="toggle112" class="btn btn-outline-sm btn-sm">TUBO 2
                                  </button>
                                </div>
                                <!-- tubo de agua de 3  -->
                                <div class="col-2">
                                  <button id="toggle112" class="btn btn-outline-sm btn-sm">TUBO 3
                                  </button>
                                </div>
                                <!-- tubo de 4 -->
                                <div class="col-2">
                                  <button id="toggle112" class="btn btn-outline-sm btn-sm">TUBO 4
                                  </button>
                                </div>
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

                                <!-- codo de 90 tipos de pulgada -->

                                <!--CODO DE 90 SEGUN PULGADAS-->
                                <div class="col-2 dropup">
                                  <button class="icono-boton" type="button" title="CODO 1/2°" id="toggle90">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--CODO 3/4-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO 3/4°" id="togglecodo34">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--CODO DE 1-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO 1" id="togglecodo01">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!---CODO 11/4-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO 1_1/4°" id="togglecodo114">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--CODO DE 11/2-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO 1_1/2°" id="togglecodo112">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--CODO DE 2--->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO 2" id="togglecodo02">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--CODO DE 3-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO 3°" id="togglecodo03">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--CODO DE 4-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO 4°" id="togglecodo04">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="Icono" class="icono" />
                                  </button>
                                </div>

                                <!-- codo TEE tipos de pulgada  -->

                                <!---CODOO TE 1/2--->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO Tee 1/2" id="toggleTee12">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!---CODOO TE 3/4--->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Tee 3/4°" id="toggleX">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!---CODOO TE 1--->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Tee 1" id="toggleTee01">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!---CODOO TE 1 1/4--->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Tee 1 1/4" id="toggleTee114">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!---CODOO TE 1 1/2--->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Tee 1 1/2" id="toggleTee112">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!---CODOO TE 2--->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Tee 2" id="toggleTee02">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!---CODOO TE 3--->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Tee 3" id="toggleTee03">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!---CODOO TE 4--->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Tee 4" id="toggleTee04">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>

                                <!-- codo Yee segun sus pulgadas -->

                                <!--yee 3/4-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO 3/4" id="toggleY">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--Yee 1/2-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Yee 1/2" id="toggleY12">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--Yee 1-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Yee 1" id="toggleY01">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--Yee 1 1/4-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Yee 1 1/4" id="toggleY114">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--Yee 1 1/2-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Yee 1 1/2" id="toggleY112">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--Yee 2-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Yee 2" id="toggleY02">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--Yee 3-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Yee 3" id="toggleY03">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--Yee 4-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="Yee 4" id="toggleY04">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="Icono" class="icono" />
                                  </button>
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
                                <!--REDUCCION-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="REDUCCION" id="toggleReduccion">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/REDUCCION.png" alt="Icono" class="icono" />
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
                      <!--REPORTES  -->
                      <div class="col-lg-3 col-md-3 col-sm-6 col-12">
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
                                  <button class="btn btn-outline-sm btn-sm" type="button" title="TUBERlA DE DESAGUE Ø4 SAL. MEDIA PRESIÓN" id="tubo02">TUBO Ø4 SAL. M-P
                                  </button>
                                </div>
                                <!--TUBERlA DE DESAGUE Ø4" SAL. MEDIA PRESIÓN-->
                                <div class="col-2">
                                  <button class="btn btn-outline-sm  btn-sm" type="button" title="TUBERlA DE DESAGUE Ø2 SAL. MEDIA PRESIÓN" id="tubo04">TUBO Ø2 SAL. M-P
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
                                <!--CAJA DE REGISTRO DE 12" x 24"PARA EL DESAGUE PLUVIAL-->
                                <div class="col-2 dropup">
                                  <button class="icono-boton" type="button" title="CAJA DE REGISTRO DE 12 x 24PARA EL DESAGUE PLUVIAL" id="CodoCajaReguistro">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CAJAREGUISTRO.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--SUMIDERO DEL TIPO REJILLA (CROMADO) corregir -->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="SUMIDERO DEL TIPO REJILLA (CROMADO)" id="CodoSumidero">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/SUMIDEROREJILLA.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!---CRUCE DE TUBERIAS SIN CONEXION-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CRUCE DE TUBERIAS SIN CONEXION" id="CodoCodoCrusesDes">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CRUCESTUBO.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--REGISTRO ROSCADO DE BRONCE CROMADO.-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="REGISTRO ROSCADO DE BRONCE CROMADO" id="CodoReguistroBronce">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/REGUISTROROSCADO.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--YEE.-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO YEE.°" id="CodoDesague_YEE">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOYEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--CODO 45 A GRADOS corrregir .-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO 45 A GRADOS" id="CodoCodo45">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO45.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
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
                                <!--TEE SANITARIO-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="TEE SANITARIO" id="CodoTeeSanitario">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/TEESANITARIO.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!-- TEE. -->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title=" CODO TEE°" id="CodoDesague_TEE">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOTEE.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <!--CODO DE 90°-->
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO 04°" id="CodoDesague_90">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO90.png" alt="Icono" class="icono" />
                                  </button>
                                </div>
                                <div class="col-2 position">
                                  <button class="icono-boton" type="button" title="CODO 02°" id="CodoDesague02">
                                    <img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO90.png" alt="Icono" class="icono" />
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
              <table class="table-sm table-hover table-responsive table-bordered" id="tabla1">
                <thead class="text-center">
                  <tr>
                    <th scope="col" colspan="4">Agua</th>
                  </tr>
                  <tr>
                    <th scope="col">N°</th>
                    <th scope="col">Accesorios</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Medidas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/TUBO2.png" alt="img" class="icono"> TUBO 1/2</td>
                    <td><span id="TuboFria">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">2</th>
                    <td> <img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/TUBO2.png" alt="img" class="icono"> TUBO 3/4</td>
                    <td><span id="Tubo34">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">3</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/TUBO2.png" alt="img" class="icono"> TUBO 1 1/2</td>
                    <td><span id="Tubo112">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">4</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/TUBO2.png" alt="img" class="icono"> TUBO 1 1/4</td>
                    <td><span id="Tubo114">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">5</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/TUBOCALIENTE1.png" alt="img" class="icono"> Agua C</td>
                    <td><span id="TuboCaliente">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">6</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="img" class="icono"> Codo 1/2</button></td>
                    <td><span id="Codo90">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">7</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="img" class="icono"> Codo 3/4</button></td>
                    <td><span id="Codo34">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">7</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="img" class="icono"> Codo 01</button></td>
                    <td><span id="Codo01">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">8</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="img" class="icono"> Codo 11/4</button></td>
                    <td><span id="Codo114">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">9</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="img" class="icono"> Codo 11/2</button></td>
                    <td><span id="Codo112">0</span></td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="img" class="icono"> Codo 02</button></td>
                    <td><span id="Codo002">0</span></td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="img" class="icono"> Codo 03</button></td>
                    <td><span id="Codo03">0</span></td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODO90.png" alt="img" class="icono"> Codo 03</button></td>
                    <td><span id="Codo04">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">10</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="img" class="icono"> Codo Tee 3/4</td>
                    <td><span id="CodoT">0</span> </td>
                  </tr>

                  <tr>
                    <th scope="row">10</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="img" class="icono"> Codo Tee 1/2</td>
                    <td><span id="CodoT12">0</span> </td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="img" class="icono"> Codo Tee 1</td>
                    <td><span id="CodoT01">0</span> </td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="img" class="icono"> Codo Tee 1 1/2</td>
                    <td><span id="CodoT112">0</span> </td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="img" class="icono"> Codo Tee 1 1/4</td>
                    <td><span id="CodoT114">0</span> </td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="img" class="icono"> Codo Tee 2</td>
                    <td><span id="CodoT002">0</span> </td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="img" class="icono"> Codo Tee 3</td>
                    <td><span id="CodoT03">0</span> </td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOTEE.png" alt="img" class="icono"> Codo Tee 4</td>
                    <td><span id="CodoT04">0</span> </td>
                  </tr>

                  <tr>
                    <th scope="row">11</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="img" class="icono"> Codo Yee </td>
                    <td><span id="CodoY">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">11</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="img" class="icono"> Codo Yee 1/2 </td>
                    <td><span id="CodoY12">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">11</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="img" class="icono"> Codo Yee 01</td>
                    <td><span id="CodoY01">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">11</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="img" class="icono"> Codo Yee 1 1/2</td>
                    <td><span id="CodoY112">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">11</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="img" class="icono"> Codo Yee 1 1/4</td>
                    <td><span id="CodoY114">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">11</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="img" class="icono"> Codo Yee 02</td>
                    <td><span id="CodoY02">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">11</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="img" class="icono"> Codo Yee 03</td>
                    <td><span id="CodoY03">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">11</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOYEE.png" alt="img" class="icono"> Codo Yee 04</td>
                    <td><span id="CodoY04">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">12</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/MONTANTES.png" alt="img" class="icono"> MONTANTES</button></td>
                    <td><span id="Montantes">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">13</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/GRIFOLIMPIEZA.png" alt="img" class="icono"> GRIFO LIMPIEZA</button></td>
                    <td><span id="Grifolimpieza">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">14</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/GRIFORIEGO.png" alt="img" class="icono"> GRIFO RIEGO</button></td>
                    <td><span id="Griforiego">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">15</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CRUCESTUBO.png" alt="img" class="icono"> TUBO CRUCES</button></td>
                    <td><span id="CrucesinConexion">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">16</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CAJAPORTAMEDIDORAGUA.png" alt="img" class="icono"> CAJA DE MEDIDOR DE AGUA</button></td>
                    <td><span id="Cajareguistroagua">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">17</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/VALVULACONTROL.png" alt="img" class="icono"> VALVULA CONTROL</button></td>
                    <td><span id="LlaveGeneral">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">18</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOHACIAARRIBA.png" alt="img" class="icono"> CODO HACIA ARRIBA </button></td>
                    <td><span id="CodoArriba">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">19</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/CODOHACIABAJO.png" alt="img" class="icono"> CODO HACIA ABAJO </button></td>
                    <td><span id="CodoAbajoA">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">20</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/VAVULACHECK1.png" alt="img" class="icono"> VAVULA CHECK</button></td>
                    <td><span id="ValvulaCheck">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">21</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/TEEHACIAABAJO.png" alt="img" class="icono"> TE ABAJO</button></td>
                    <td><span id="TeeAbajo">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">22</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/TEEHACIARRIBA.png" alt="img" class="icono"> TE ARRIBA</button></td>
                    <td><span id="TeeArriba">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">23</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/UNIONUNIVERSAL.png" alt="img" class="icono">UNION UNIVERSA</button></td>
                    <td><span id="UnionUniversal">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">24</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/REDUCCION.png" alt="img" class="icono"> REDUCCION </button></td>
                    <td><span id="Reduccion">0</span></td>
                  </tr>

                  <tr>
                    <th scope="row">25</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS AGUA/TEEPLANTA.png" alt="img" class="icono"> TE PLANTA</button></td>
                    <td><span id="Teeplanta">0</span></td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button id="proxtt" type="button" class="btn btn-primary">Guardar</button>
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
                <thead class="text-center">
                  <tr>
                    <th scope="col" colspan="4">DESAGUE</th>
                  </tr>
                  <tr>
                    <th scope="col">N°</th>
                    <th scope="col">Accesorios</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Medidas</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/TUBO01.png" alt="img" class="icono"> Tubo </button></td>
                    <td><span id="Tubo04">0</span></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/TUBO02.png" alt="img" class="icono"> Tubo </button></td>
                    <td><span id="Tubo02">0</span></td>

                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CAJAREGUISTRO.png" alt="img" class="icono"> CAJA DE REGISTRO DE 12" x 24"PARA EL DESAGUE PLUVIAL </button></td>
                    <td><span id="CajaReguistro">0</span></td>

                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/SUMIDEROREJILLA.png" alt="img" class="icono"> SUMIDERO DEL TIPO REJILLA (CROMADO) </button></td>
                    <td><span id="Sumidero">0</span></td>

                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CRUCESTUBO.png" alt="img" class="icono"> CRUCE DE TUBERIAS SIN CONEXION </button></td>
                    <td><span id="CodoCrusesDes">0</span></td>

                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/REGUISTROROSCADO.png" alt="img" class="icono"> REGISTRO ROSCADO DE BRONCE CROMADO </button></td>
                    <td><span id="ReguistroBronce">0</span></td>

                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOYEE.png" alt="img" class="icono"> YEE. </button></td>
                    <td><span id="DesagueYEE">0</span></td>

                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO45.png" alt="img" class="icono"> CODO 45 A GRADOS </button></td>
                    <td><span id="Codo45">0</span></td>

                  </tr>

                  <tr>
                    <th scope="row">9</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOABAJO.png" alt="img" class="icono"> CODO HACIA ABAJO </button></td>
                    <td><span id="CodoHciaAbajo">0</span></td>

                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/MONTANTES.png" alt="img" class="icono"> MONTANTES </button></td>
                    <td><span id="MontantesDes">0</span></td>

                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOHACIAABAJO.png" alt="img" class="icono"> CODO HACIA ABAJO </button></td>
                    <td><span id="CodoAbajo">0</span></td>

                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/TEESANITARIO.png" alt="img" class="icono"> TEE SANITARIO </button></td>
                    <td><span id="TeeSanitario">0</span></td>

                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODOTEE.png" alt="img" class="icono"> TEE </button></td>
                    <td><span id="DesagueTEE">0</span></td>

                  </tr>
                  <tr>
                    <th scope="row">14</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO90.png" alt="img" class="icono"> CODO 04</button></td>
                    <td><span id="Desague90">0</span></td>

                  </tr>
                  <tr>
                    <th scope="row">15</th>
                    <td><img src="./IMG PAVCO/IMG PAVCO/TUBOS DESAGUE/CODO90.png" alt="img" class="icono"> CODO 02 </button></td>
                    <td><span id="Codo02">0</span></td>

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