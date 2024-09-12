// Importar la clase CodoDesague desde CodoDesague.js
import { SingleShapeBase } from "../single_shape_base.js";

// Definir constantes para las dimensiones y colores
const largerCircleRadius = 6; // Radio del círculo más grande en mm
const lineLength = 15; // Longitud de la línea vertical y horizontal en mm

// Clase CodoAbajoDes que extiende de CodoDesague
export class ReguistroBronce06 extends SingleShapeBase {
  constructor(ctx, color) {
    // Llamar al constructor de la clase padre (CodoDesague)
    super(ctx, color);

    // Asignar una etiqueta única a este codo
    this.label = `Reguistro bronce Ø6`;
  }

  // Manejar el evento de doble clic
  onDoubleClick(event) {
    // Obtener las coordenadas del evento respecto al canvas
    const rect = this.ctx.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Calcular las coordenadas relativas al punto de origen del codo
    const relativeX = x - this.lastPoint.x;
    const relativeY = y - this.lastPoint.y;

    // Calcular las coordenadas rotadas
    const rotatedX =
      relativeX * Math.cos((-this.rotation * Math.PI) / 180) -
      relativeY * Math.sin((-this.rotation * Math.PI) / 180);
    const rotatedY =
      relativeX * Math.sin((-this.rotation * Math.PI) / 180) +
      relativeY * Math.cos((-this.rotation * Math.PI) / 180);

    // Verificar si el doble clic ocurrió dentro del área del codo
    if (
      rotatedX >= -largerCircleRadius &&
      rotatedX <= largerCircleRadius &&
      rotatedY >= -largerCircleRadius &&
      rotatedY <= largerCircleRadius
    ) {
      // Actualizar la rotación del codo (90 grados hacia la derecha)
      this.rotation = (this.rotation + 90) % 360;

      // Redibujar todos los codos en el lienzo
      this.redrawAll();
    }
  }

  // Dibujar el círculo y las líneas verticales
  drawLineWithCircle(x, y) {
    this.ctx.save();

    // Aplicar la traslación y rotación al contexto del canvas
    this.ctx.translate(x, y);
    this.ctx.rotate((this.rotation * Math.PI) / 180);

    // Coordenadas del círculo
    const circleX = 0;
    const circleY = 0;

    // Dibujar el círculo más grande sin relleno
    this.ctx.beginPath();
    this.ctx.arc(circleX, circleY, largerCircleRadius, 0, 2 * Math.PI, false);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = "#6A5ACD"; // Color de borde verde para el círculo más grande
    this.ctx.stroke();

    // Dibujar la primera línea vertical a un lado del círculo
    const verticalLine1StartX = circleX + largerCircleRadius + 5; // A la derecha del círculo
    const verticalLine1StartY = circleY - lineLength / 2; // Centro de la línea vertical
    const verticalLine1EndX = circleX + largerCircleRadius + 5; // A la derecha del círculo
    const verticalLine1EndY = circleY + lineLength / 2; // Centro de la línea vertical

    this.ctx.beginPath();
    this.ctx.moveTo(verticalLine1StartX, verticalLine1StartY);
    this.ctx.lineTo(verticalLine1EndX, verticalLine1EndY);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = "#09BBD7"; // Color negro para la primera línea vertical
    this.ctx.stroke();

    // Dibujar la segunda línea vertical al lado opuesto del círculo
    const verticalLine2StartX = circleX - largerCircleRadius - 5; // A la izquierda del círculo
    const verticalLine2StartY = circleY - lineLength / 2; // Centro de la línea vertical
    const verticalLine2EndX = circleX - largerCircleRadius - 5; // A la izquierda del círculo
    const verticalLine2EndY = circleY + lineLength / 2; // Centro de la línea vertical

    this.ctx.beginPath();
    this.ctx.moveTo(verticalLine2StartX, verticalLine2StartY);
    this.ctx.lineTo(verticalLine2EndX, verticalLine2EndY);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = "#09BBD7"; // Color negro para la segunda línea vertical
    this.ctx.stroke();

    // Dibujar la línea inclinada dentro del círculo
    const inclinedLineStartX =
      circleX - largerCircleRadius * Math.cos(Math.PI / 4); // Punto de inicio en el borde del círculo
    const inclinedLineStartY =
      circleY + largerCircleRadius * Math.sin(Math.PI / 4); // Punto de inicio en el borde del círculo
    const inclinedLineEndX =
      circleX + largerCircleRadius * Math.cos(Math.PI / 4); // Punto final en el borde del círculo
    const inclinedLineEndY =
      circleY - largerCircleRadius * Math.sin(Math.PI / 4); // Punto final en el borde del círculo

    this.ctx.beginPath();
    this.ctx.moveTo(inclinedLineStartX, inclinedLineStartY);
    this.ctx.lineTo(inclinedLineEndX, inclinedLineEndY);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = "#6A5ACD"; // Color rojo para la línea inclinada
    this.ctx.stroke();

    // Dibujar la etiqueta del codo
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, circleX + 10, circleY - 10);

    // Restaurar el estado del contexto
    this.ctx.restore();
  }

  // Dibujar el codo en el lienzo
  draw() {
    this.drawLineWithCircle(this.lastPoint.x, this.lastPoint.y);
  }

  // Limpiar y redibujar todos los codos en el lienzo
  redrawAll() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    instances.forEach((instance) => instance.draw());
  }
}