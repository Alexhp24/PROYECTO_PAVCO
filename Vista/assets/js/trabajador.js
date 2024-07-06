$(document).ready(function () {
  var funcion;
  buscar_mantenimeto();

  function buscar_mantenimeto(consulta) {
    const funcion = "adm_cargar_trabajadores";
    $.post(
      "../Controlador/trabajadorControlador.php",
      {
        consulta,
        funcion,
      },
      (response) => {
        console.log(response);
        const trabajadores = JSON.parse(response);
        let template = "";
        trabajadores.forEach((trabajador) => {
          template += `
                  <div class="col-lg-3 col-6">
                      <div class="card text-center">
                        <div class="card-header bg-warning">
                          <img src="./img/PAVCO.png" class="rounded-3" style="width: 50px;" alt="Avatar" />
                        </div>
                        <div class="card-body">
                          <P> <strong>NOMBRE: </strong> ${trabajador.nombre}</p>
                          <p> <strong>APELLIDO: </strong> ${trabajador.apellido}</p>
                          <p> <strong>DNI: </strong> ${trabajador.dni}</p>
                        </div>
                        <div class="card-footer">
                          <a class="btn btn-outline-primary" href="adm_pavco_cad.php?id_valorizacion=${trabajador.id_proyecto}">Abrir</a>
                        </div>
                      </div>
                  </div>`;
        });
        $("#listado_trabajadores").html(template);
      }
    );
  }
});
