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
                        <div class="card-header bg-primary">${proyecto.id_proyecto}</div>
                        <div class="card-body">                     
                            <p> <strong>Nombre: </strong> ${proyecto.nombre_proyecto}</p>
                            <p> <strong>Fecha: </strong> ${proyecto.fecha}</p>
                            <p> <strong>Tipo de proyecto: </strong> ${proyecto.tipo_sanitario}</p>
                        </div>
                        <div class="card-footer">
                            <a class="btn btn-outline-primary" href="adm_pavco_cad.php?id_valorizacion=${proyecto.id_proyecto}?nombre=${proyecto.nombre_proyecto}">Abrir pvc</a>
                        </div>
                    </div>
                </div>`;
        });
        $("#listado_proyectos").html(template);
      }
    );
  }

  const myButton = document.getElementById("guardardata");
myButton.addEventListener("click", function () {
  const table = document.getElementById("datatuberiasaccesorios");
  const rows = table.querySelectorAll("tbody tr");

  let data = [];
  rows.forEach(row => {
    const numero = row.querySelector("th[scope=row]").innerText.trim();
    const accesorios = row.querySelector("td button").innerText.trim();
    const cantidad = row.querySelector("td span").innerText.trim();

    data.push({
      Numero: numero,
      Accesorios: accesorios,
      Cantidad: cantidad
    });
  });

  console.log(data); // Verifica los datos antes de convertir a JSON

  const DATAFORMATTER = JSON.stringify(data);
  console.log(DATAFORMATTER);
});




  /*
  const data = document.getElementById("datatuberiasaccesorios");
  console.log(data)
  const myButton = document.getElementById("guardardata");
  myButton.addEventListener("click", function () {
    const DATAFORMATTER= JSON.stringify(data);
    console.log(DATAFORMATTER)
    */


});