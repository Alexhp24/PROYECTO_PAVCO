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

  const data = document.getElementById("datatuberiasaccesorios");
console.log(data); // Esto imprimirá el elemento con el ID 'datatuberiasaccesorios'

const myButton = document.getElementById("guardardata");

myButton.addEventListener("click", function () {
  // Suponiendo que 'data' es un elemento, necesitamos extraer su valor o contenido antes de convertirlo a JSON
  const dataContent = data ? data.value || data.innerText || data.textContent : null;

  // Convertir el contenido extraído a una cadena JSON
  const DATAFORMATTER = JSON.stringify({ content: dataContent });
  
  console.log(DATAFORMATTER); // Esto imprimirá la versión en cadena del contenido de los datos
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