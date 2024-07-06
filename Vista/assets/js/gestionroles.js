$(document).ready(function () {
  var funcion;
  buscar_mantenimiento();

  function buscar_mantenimiento(consulta) {
    const funcion = "adm_cargar_gestionRoles";
    $.post(
      "../Controlador/gestion_roles_Controlador.php",
      {
        consulta,
        funcion,
      },
      (response) => {
        console.log(response);
        const gestionRoles = JSON.parse(response);
        let template = "";
        gestionRoles.forEach((roles) => {
          template += `
            <tr> 
                <td>${roles.id_usuario}</td>
                <td>${roles.nombre}</td>
                <td id="rol-${roles.id_usuario}" >${roles.nombre_roles}</td>
                <td>
                <button data-id="${roles.id_usuario}" class="btn btn-outline-warning editar-rol">Editar</button>
                </td>
            </tr>`;
        });
        $("#listar_roles").html(template);
      }
    );
  }

  $(document).on('click', '.editar-rol', function () {
    const id_usuario = $(this).data('id');
    const rolActual = $(`#rol-${id_usuario}`).text();

    const nuevoRol = prompt('Edita el rol designado:', rolActual);
    if (nuevoRol !== null && nuevoRol !== rolActual) {
      $.post(
        "../Controlador/gestion_roles_Controlador.php",
        {
          id_usuario,
          nuevoRol,
          funcion: 'editar_rol'
        },
        (response) => {
          if (response === 'success') {
            $(`#rol-${id_usuario}`).text(nuevoRol);
          } else {
            alert('Error al actualizar el rol');
          }
        }
      );
    }
  });

  buscar_mantenimiento();
});
