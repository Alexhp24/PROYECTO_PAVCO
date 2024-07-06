$(document).ready(function () {
    buscar_mantenimiento();

    function buscar_mantenimiento() {
        const funcion = "adm_cargar_reportes";
        $.post(
            "../Controlador/reportes_Controlador.php",
            { funcion },
            function(response) {
                console.log(response);
                const reportes = JSON.parse(response);
                let template = "";
                reportes.forEach((reporte) => {
                    template += `
                        <tr data-id="${reporte.id_usuario}">
                            <td>${reporte.id_usuario}</td>
                            <td>${reporte.nombre}</td>
                            <td>${reporte.apellido}</td>
                            <td>${reporte.nombre_proyecto}</td>
                            <td>${reporte.fecha}</td>
                            <td>
                                <button type="button" class="btn btn-outline-warning">Editar</button>
                                <button type="button" class="btn btn-outline-danger eliminar-fila">Eliminar</button>
                            </td>
                        </tr>`;
                });
                $("#listar_reportes").html(template);
            }
        );
    }

    // Evento para eliminar fila al hacer clic en el botón "Eliminar"
    $(document).on('click', '.eliminar-fila', function() {
        var fila = $(this).closest('tr');
        var reporteId = fila.data('id'); // Obtener el ID del reporte desde el atributo data-id

        // Confirmar eliminación
        if (confirm("¿Está seguro de eliminar este reporte?")) {
            // Llamar a la función para eliminar el reporte del backend y del frontend
            eliminarReporte(reporteId, fila);
        }
    });


    function eliminarReporte(reporteId, fila) {
        const funcion = "adm_eliminar_reporte"; 
        $.post(
            "../Controlador/reportes_Controlador.php",
            { funcion, reporteId },
            function(response) {
                console.log(response);
                if (response.trim() === "success") {

                    fila.remove();
                } else {
                    alert("Error al eliminar el reporte. Por favor, inténtelo de nuevo.");
                }
            }
        );
    }
});

