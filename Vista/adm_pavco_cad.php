<?php
session_start();
/* if ($_SESSION['roles_designado'] == 1 || $_SESSION['roles_designado'] == 2) {
  include_once "assets/views/header.php";
  include_once "assets/views/nav.php";  */
if (true) {
?>
  <!DOCTYPE html>
  <html lang="spn">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PLUMER V01 </title>
    <link rel="stylesheet" type="text/css" href="./css/styles1.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
  </head>
  <body>
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
        </div><!-- /.container-fluid -->
        <div id="proyectos-container" >
        </div>
      </section>
      <section>
        <div class="container-fluid">
          <div class="card">
            <div class="card-body">
              <div class="container">
                <div>
                  <button class="btn btn-primary" id="zoomInButton">+</button>
                  <button class="btn btn-primary" id="zoomOutButton">-</button>
                  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Descargar
                  </button>
                  <ul class="dropdown-menu">
                    <button class="btn btn-primary" id="savePdf">Pdf</button>
                    <button class="btn btn-primary" id="save-img">Img</button>                    
                  </ul>
                  <label class="btn btn-primary" for="fileInput">Subir Archivo</label>
                  <input type="file" id="fileInput" accept="application/pdf" style="display:none;">

                  <button class="btn btn-primary" id="guardardata">guardar</button>
                </div>
                <div class="row">
                  <!-- Planos -->
                  <div class="col-9">
                    <canvas id="pdfCanvas" width="0" height="0" style="border-radius: 5px; border-color: #0000;"></canvas>
                  </div>
                  <!-- Accesorios -->
                  <div class="col-3">
                    <div class="row">
                      <!-- Agua -->
                      <div class="col-4">
                        <div class="btn-group">
                          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            agua
                          </button>
                          <ul class="dropdown-menu">
                            <table class="table table-hover table-responsive table-bordered" id="datatuberiasaccesorios">
                              <thead class="text-center">
                                <tr>
                                  <th scope="col" colspan="3">Agua</th>
                                </tr>
                                <tr>
                                  <th scope="col">N°</th>
                                  <th scope="col">Accesorios</th>
                                  <th scope="col">Cantidad</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td><button id="toggleColdPipe" class="btn btn-outline-primary btn-sm"> TUBO 1/2</button></td>
                                  <td><span id="TuboFria">0</span></td>
                                </tr>          
                                                  
                                <tr>
                                  <th scope="row">A</th>
                                  <td><button id="toggle34" class="btn btn-outline-primary btn-sm"> TUBO 3/4</button></td>
                                  <td><span id="Tubo34">0</span></td>
                                </tr>

                                <tr>
                                  <th scope="row">B</th>
                                  <td><button id="toggle112" class="btn btn-outline-primary btn-sm"> TUBO 1 1/4</button></td>
                                  <td><span id=" Tubo112 ">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">C</th>
                                  <td><button id="toggle114" class="btn btn-outline-primary btn-sm"> TUBO 1 1/2</button></td>
                                  <td><span id="Tubo114">0</span></td>
                                </tr>

                                <tr>
                                  <th scope="row">2</th>
                                  <td><button id="toggleHotPipe" class="btn btn-outline-primary btn-sm"> Agua C</button></td>
                                  <td><span id="TuboCaliente">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">3</th>
                                  <td><button id="toggleY" class="btn btn-outline-primary btn-sm"> Codo Yee</button></td>
                                  <td><span id="CodoY">0</span> </td>
                                </tr>
                                <tr>
                                  <th scope="row">4</th>
                                  <td><button id="toggleX" class="btn btn-outline-primary btn-sm"> Codo Tee</button> </td>
                                  <td><span id="CodoT">0</span></td>
                                </tr>

                                <tr>
                                  <th scope="row">5</th>
                                  <td><button id="toggle90" class="btn btn-outline-primary btn-sm"> Codo  1/2</button></td>
                                  <td><span id="Codo90">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">5</th>
                                  <td><button id="togglecodo34" class="btn btn-outline-primary btn-sm"> Codo 3/4</button></td>
                                  <td><span id="Codo34">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">5</th>
                                  <td><button id="togglecodo114" class="btn btn-outline-primary btn-sm"> Codo  11/4</button></td>
                                  <td><span id="Codo114">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">5</th>
                                  <td><button id="togglecodo112" class="btn btn-outline-primary btn-sm"> Codo 11/2</button></td>
                                  <td><span id="Codo112">0</span></td>
                                </tr>

                              


                                <tr>
                                  <th scope="row">6</th>
                                  <td><button id="toggleCA" class="btn btn-outline-primary btn-sm">Codo Arriba </button></td>
                                  <td><span id="CodoArriba">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">7</th>
                                  <td><button id="toggleCD" class="btn btn-outline-primary btn-sm">Codo Abajo</button></td>
                                  <td><span id="CodoAbajoA">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">8</th>
                                  <td><button id="toggleReduccion" class="btn btn-outline-primary btn-sm">Reduccion</button></td>
                                  <td><span id="Reduccion">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">9</th>
                                  <td><button id="toggleMontantes" class="btn btn-outline-primary btn-sm">Montantes</button> </td>
                                  <td><span id="Montantes">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">10</th>
                                  <td><button id="toggleTeeAbajo" class="btn btn-outline-primary btn-sm ">Tee Abajo</button> </td>
                                  <td><span id="TeeAbajo">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">11</th>
                                  <td><button id="toggleTeeArriba" class="btn btn-outline-primary btn-sm"> Arriba</button></td>
                                  <td><span id="TeeArriba">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">12</th>
                                  <td><button id="toggleUnionUniversal" class="btn btn-outline-primary btn-sm">UnionUniversal</button></td>
                                  <td><span id="UnionUniversal">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">13</th>
                                  <td><button id="toggleValvulaCheck" class="btn btn-outline-primary btn-sm">ValvulaCheck</button></td>
                                  <td><span id="ValvulaCheck">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">14</th>
                                  <td><button id="toggleLlaveGeneral" class="btn btn-outline-primary btn-sm">LlaveGeneral</button> </td>
                                  <td><span id="LlaveGeneral">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">15</th>
                                  <td><button id="toggleCrucesinConexion" class="btn btn-outline-primary btn-sm"> Cruces sin conexion</button></td>
                                  <td><span id="CrucesinConexion">0</span></td>
                                </tr>
                              </tbody>
                            </table>
                          </ul>
                        </div>
                      </div>
                      <!-- desague -->
                      <div class="col-4">
                        <div class="btn-group">
                          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Desague
                          </button>
                          <ul class="dropdown-menu">
                            <table class="table table-hover table-responsive table-bordered">
                              <thead class="text-center">
                                <tr>
                                  <!-- <th scope="col" colspan="3">Desague</th> -->
                                </tr>
                                <tr>
                                  <th scope="col">N°</th>
                                  <th scope="col">Accesorios</th>
                                  <th scope="col">Cantidad</th>
                                </tr>
                                <tr>
                                  <th scope="row">3</th>
                                  <td><button id="tubo02" class="btn btn-outline-primary btn-sm">Desague02</button></td>
                                  <td><span id="Tubo04">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">4</th>
                                  <td><button id="tubo04" class="btn btn-outline-primary btn-sm">Desague 04</button></td>
                                  <td><span id="Tubo02">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">14</th>
                                  <td><button id="CodoDesague_YEE" class="btn btn-outline-primary btn-sm"> DesagueYee</button> </td>
                                  <td><span id="DesagueYEE">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">15</th>
                                  <td><button id="CodoDesague_TEE" class="btn btn-outline-primary btn-sm">Codo Tee</button></td>
                                  <td><span id="DesagueTEE">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">16</th>
                                  <td><button id="CodoDesague_90" class="btn btn-outline-primary btn-sm">Desague 90°</button> </td>
                                  <td><span id="Desague90">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">17</th>
                                  <td><button id="CodoMontantesDes" class="btn btn-outline-primary btn-sm">Montantes</button> </td>
                                  <td><span id="MontantesDes">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">18</th>
                                  <td><button id="CodoReguistroBronce" class="btn btn-outline-primary btn-sm"> Reguistro Bronce</button></td>
                                  <td><span id="ReguistroBronce">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">19</th>
                                  <td><button id="CodoCodoHciaAbajo" class="btn btn-outline-primary btn-sm"> Codo hacia Abajo</button> </td>
                                  <td><span id="CodoHciaAbajo">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">20</th>
                                  <td> <button id="CodoCodoAbajo" class="btn btn-outline-primary btn-sm">Codo Abajo</button></td>
                                  <td><span id="CodoAbajo">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">21</th>
                                  <td><button id="CodoCajaReguistro" class="btn btn-outline-primary btn-sm">Caja Reguistro</button></td>
                                  <td><span id="CajaReguistro">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">22</th>
                                  <td><button id="CodoCodoCrusesDes" class="btn btn-outline-primary btn-sm"> Codo Cruces</button></td>
                                  <td><span id="CodoCrusesDes">0</span></td>
                                </tr>
                                <tr>
                                  <th scope="row">23</th>
                                  <td><button id="CodoTeeSanitario" class="btn btn-outline-primary btn-sm"> Tee Sanitario</button></td>
                                  <td><span id="TeeSanitario">0</span></td>
                                </tr>
                              </thead>
                            </table>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer"></div>
            </div>
          </div>
      </section>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      <script type="module" src="./js/canvas.js" defer></script>
  </body>
  </html>
<?php
  include_once "assets/views/footer.php";
} else {
  header('Location: ./index.php');
}
?>
<script src="assets/js/proyect.js"></script>