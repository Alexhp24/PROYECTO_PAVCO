// Importar la clase Codo desde Codo.js
import { SingleShapeBase } from "../single_shape_base.js";

// Definir constantes para las dimensiones y colores
const lineLength = 25; // Longitud de la línea en mm
const largerCircleRadius = 7; // Radio del círculo más grande en mm
const verticalLineLength = 15; // Longitud de la línea vertical en mm

export class CodoAbajoA extends SingleShapeBase {
  constructor(ctx, color) {
    // Llamar al constructor de la clase padre (Codo)
    super(ctx, color);
    // Asignar una etiqueta única a este codo
    this.label = `Codo Abajo`;
  }
  // Dibujar la línea recta con el círculo al final
  drawLineWithCircle(x, y) {
    this.ctx.save();

    // Aplicar la traslación y rotación al contexto del canvas
    this.ctx.translate(x, y);
    this.ctx.rotate(this.rotation * Math.PI / 180);

    // Coordenadas de inicio y fin de la línea recta
    const startX = 0;
    const startY = 0;
    const endX = lineLength;
    const endY = 0;

    // Dibujar la línea recta
    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(endX, endY);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = "#09BBD7";
    this.ctx.stroke();


    // Dibujar el círculo más grande sin relleno
    this.ctx.beginPath();
    this.ctx.arc(endX, endY, largerCircleRadius, 0, 2 * Math.PI, false);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = '#79EC1A'; // Color de borde verde para el círculo más grande
    this.ctx.stroke();

    // Dibujar la línea vertical cerca del círculo
    const verticalLineStartX = endX - largerCircleRadius - 5; // Separación desde el círculo más grande
    const verticalLineStartY = endY - verticalLineLength / 2; // Posición inicial de la línea vertical
    const verticalLineEndX = verticalLineStartX;
    const verticalLineEndY = endY + verticalLineLength / 2; // Posición final de la línea vertical

    this.ctx.beginPath();
    this.ctx.moveTo(verticalLineStartX, verticalLineStartY);
    this.ctx.lineTo(verticalLineEndX, verticalLineEndY);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = '#09BBD7'; // Color negro para la línea vertical
    this.ctx.stroke();

    // Dibujar la etiqueta del codo
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, endX + 10, endY - 10);

    // Restaurar el estado del contexto
    this.ctx.restore();
  }
  // Dibujar el codo en el lienzo
  draw() {
    this.drawLineWithCircle(this.lastPoint.x, this.lastPoint.y);
  }
}
