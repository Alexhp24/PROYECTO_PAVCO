$(document).ready(function () {
  var funcion;
  buscar_mantenimeto();

  function buscar_mantenimeto(consulta) {
    const funcion = "adm_cargar_proyectos";
    $.post(
      "../Controlador/proyectoControlador.php",
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
  function enviarDatos(url, formData, successCallback, errorCallback) {
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      cache: false,
      processData: false,
      contentType: false,
      success: successCallback,
      error: errorCallback,
    });
  }
  // BOTON  DE GUARDAR DATA
  const data = document.getElementById("datatuberiasaccesorios");
  console.log(data); // Esto imprimirá el elemento con el ID 'datatuberiasaccesorios'

  const myButton = document.getElementById("guardardata");

  $("button").click(function () {
    const nombre_proyect = document.getElementById("").value;
    const dataContent = data
      ? data.value || data.innerText || data.textContent
      : null;
    var funcion = "guardar_data_pavco";
    const datapavco = JSON.stringify(dataContent);
    $.post(
      "../Controlador/proyectoControlador.php",
      {
        datapavco,
        funcion,
        nombre_proyect
      },
      (response) => {
        console.log(response);
      }
    );
  });

  // myButton.addEventListener("click", function () {
  //   // Suponiendo que 'data' es un elemento, necesitamos extraer su valor o contenido antes de convertirlo a JSON
  //   const dataContent = data
  //     ? data.value || data.innerText || data.textContent
  //     : null;

  //   // Convertir el contenido extraído a una cadena JSON
  //   const datapavco = JSON.stringify({ dataContent });
  //   console.log(datapavco); // Esto imprimirá la versión en cadena del contenido de los datos
  //   const formData = new FormData($("")[0]);
  //   formData.append("funcion", "guardar_data_pavco");
  //   formData.append("datapavco ", datapavco); // Aquí corregí para convertir a JSON string
  //   enviarDatos(
  //     "../Controlador/proyectoControlador.php",
  //     formData,
  //     function (response) {
  //       console.log(response);
  //     }
  //   );
  // });
  /*
  const data = document.getElementById("datatuberiasaccesorios");
  console.log(data)
  const myButton = document.getElementById("guardardata");
  myButton.addEventListener("click", function () {
    const DATAFORMATTER= JSON.stringify(data);
    console.log(DATAFORMATTER) 
    */
});
