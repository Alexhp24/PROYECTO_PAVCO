// Importar la clase Codo desde Codo.js
import { SingleShapeBase } from "../single_shape_base.js";

// Definir constantes para las dimensiones y colores
const largerCircleRadius = 6; // Radio del círculo más grande en mm
const verticalLineLength = 10; // Longitud de la línea vertical en mm

// Clase CABAJO que extiende de SingleShapeBase
export class Griforiego extends SingleShapeBase {
  constructor(ctx, color, count) {
    // Llamar al constructor de la clase padre (Codo)
    super(ctx, color);
    // Asignar una etiqueta única a este codo
    this.label = `M${count}`;

  }

  // Dibujar el círculo y la línea vertical
  drawLineWithCircle(x, y) {
    this.ctx.save();

    // Aplicar la traslación y rotación al contexto del canvas
    this.ctx.translate(x, y);
    this.ctx.rotate(this.rotation * Math.PI / 180);

    // Coordenadas del círculo
    const circleX = 0;
    const circleY = 0;

    // Dibujar el círculo más grande sin relleno
    this.ctx.beginPath();
    this.ctx.arc(circleX, circleY, largerCircleRadius, 0, 2 * Math.PI, false);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = 'green'; // Color de borde verde para el círculo más grande
    this.ctx.stroke();

    // Dibujar la línea vertical cerca del círculo
    const verticalLineStartX = circleX - largerCircleRadius - 5; // Separación desde el círculo más grande
    const verticalLineStartY = circleY - verticalLineLength / 2; // Posición inicial de la línea vertical
    const verticalLineEndX = verticalLineStartX;
    const verticalLineEndY = circleY + verticalLineLength / 2; // Posición final de la línea vertical

    this.ctx.beginPath();
    this.ctx.moveTo(verticalLineStartX, verticalLineStartY);
    this.ctx.lineTo(verticalLineEndX, verticalLineEndY);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = '#09BBD7'; // Color negro para la línea vertical
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
}
