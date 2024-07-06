$(document).ready(function () {
  var funcion;
  buscar_mantenimeto();

  function buscar_mantenimeto(consulta) {
    const funcion = "adm_cargar_proyectos";
    $.post(
      "../Controlador/proyectControlador.php",
      {
        consulta,
        funcion,
      },
      (response) => {
        console.log(response);
        const proyectos = JSON.parse(response);
        let template = "";
        proyectos.forEach((proyecto) => {
          template += `
                <div class="col-lg-3 col-6">
                    <div class="card text-center">
                        <div class="card-header bg-primary">${proyecto.nombre_proyecto}</div>
                        <div class="card-body">
                            <p> <strong>Fecha: </strong> ${proyecto.fecha}</p>
                            <p> <strong>Tipo de proyecto: </strong> ${proyecto.tipo_sanitario}</p>
                        </div>
                        <div class="card-footer">
                            <a class="btn btn-outline-primary" href="adm_pavco_cad.php?id_valorizacion=${proyecto.id_proyecto}">Abrir Valorización</a>
                        </div>
                    </div>
                </div>`;
        });
        $("#listado_proyectos").html(template);
      }
    );
  }
});
