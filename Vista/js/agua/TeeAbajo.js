// Importar la clase Codo desde Codo.js
import { SingleShapeBase } from "../single_shape_base.js";

// Definir constantes para las dimensiones y colores
const lineLength = 50; // Longitud de la línea en mm
const largerCircleRadius = 6; // Radio del círculo más grande en mm
const verticalLineLength = 15; // Longitud de la línea vertical en mm

// Clase TeeAbajo que extiende de SingleShapeBase
export class TeeAbajo extends SingleShapeBase {
  constructor(ctx, color) {
    // Llamar al constructor de la clase padre (Codo)
    super(ctx, color);

    // Asignar una etiqueta única a este codo
    this.label = `Tee Abajo`;
  }

  // Dibujar la línea recta con el círculo al final
  drawLineWithCircle(x, y) {
    this.ctx.save();

    // Aplicar la traslación y rotación al contexto del canvas
    this.ctx.translate(x, y);
    this.ctx.rotate((this.rotation * Math.PI) / 180);

    // Coordenadas de inicio y fin de la línea recta
    const startX = -lineLength / 2;
    const startY = 0;
    const endX = lineLength / 2;
    const endY = 0;

    // Dibujar la línea recta
    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(endX, endY);
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();

    // Dibujar el círculo más grande sin relleno en el centro de la línea
    const centerX = 0;
    const centerY = 0;

    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, largerCircleRadius, 0, 2 * Math.PI, false);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = "#4DEC1A"; // Color de borde verde para el círculo más grande
    this.ctx.stroke();

    // Dibujar la línea vertical a la izquierda del círculo más grande
    const verticalLineStartXLeft = centerX - largerCircleRadius - 5;
    const verticalLineStartYLeft = centerY - verticalLineLength / 2;
    const verticalLineEndXLeft = verticalLineStartXLeft;
    const verticalLineEndYLeft = centerY + verticalLineLength / 2;

    this.ctx.beginPath();
    this.ctx.moveTo(verticalLineStartXLeft, verticalLineStartYLeft);
    this.ctx.lineTo(verticalLineEndXLeft, verticalLineEndYLeft);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = "blue"; // Color azul para la línea vertical
    this.ctx.stroke();

    // Dibujar la línea vertical a la derecha del círculo más grande
    const verticalLineStartXRight = centerX + largerCircleRadius + 5;
    const verticalLineStartYRight = centerY - verticalLineLength / 2;
    const verticalLineEndXRight = verticalLineStartXRight;
    const verticalLineEndYRight = centerY + verticalLineLength / 2;

    this.ctx.beginPath();
    this.ctx.moveTo(verticalLineStartXRight, verticalLineStartYRight);
    this.ctx.lineTo(verticalLineEndXRight, verticalLineEndYRight);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = "blue"; // Color azul para la línea vertical
    this.ctx.stroke();

    // Dibujar la línea del centro del círculo
    this.ctx.beginPath();
    this.ctx.moveTo(verticalLineEndXLeft, centerY);
    this.ctx.lineTo(verticalLineStartXRight, centerY);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = "blue"; // Color azul para la línea central
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


/*// Importar la clase Codo desde Codo.js
import { SingleShapeBase } from "../single_shape_base.js";

// Definir constantes para las dimensiones y colores
const lineLength = 50; // Longitud de la línea en mm
const largerCircleRadius = 6; // Radio del círculo más grande en mm
const verticalLineLength = 15; // Longitud de la línea vertical en mm

// Clase TeeAbajo que extiende de SingleShapeBase
export class TeeAbajo extends SingleShapeBase {
  constructor(ctx, color) {
    // Llamar al constructor de la clase padre (Codo)
    super(ctx, color);

    // Asignar una etiqueta única a este codo
    this.label = `Tee Abajo`;
  }

  // Dibujar la línea recta con el círculo al final
  drawLineWithCircle(x, y) {
    this.ctx.save();

    // Aplicar la traslación y rotación al contexto del canvas
    this.ctx.translate(x, y);
    this.ctx.rotate((this.rotation * Math.PI) / 180);

    // Coordenadas de inicio y fin de la línea recta
    const startX = 0;
    const startY = 0;
    const endX = lineLength;
    const endY = 0;

    // Dibujar la línea recta
    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(endX, endY);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();

    // Dibujar el círculo más grande sin relleno en el centro de la línea
    const centerX = lineLength / 2;
    const centerY = 0;

    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, largerCircleRadius, 0, 2 * Math.PI, false);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = "green"; // Color de borde verde para el círculo más grande
    this.ctx.stroke();

    // Dibujar la línea vertical a la izquierda del círculo más grande
    const verticalLineStartXLeft = centerX - largerCircleRadius - 5;
    const verticalLineStartYLeft = centerY - verticalLineLength / 2;
    const verticalLineEndXLeft = verticalLineStartXLeft;
    const verticalLineEndYLeft = centerY + verticalLineLength / 2;

    this.ctx.beginPath();
    this.ctx.moveTo(verticalLineStartXLeft, verticalLineStartYLeft);
    this.ctx.lineTo(verticalLineEndXLeft, verticalLineEndYLeft);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = "blue"; // Color azul para la línea vertical
    this.ctx.stroke();

    // Dibujar la línea vertical a la derecha del círculo más grande
    const verticalLineStartXRight = centerX + largerCircleRadius + 5;
    const verticalLineStartYRight = centerY - verticalLineLength / 2;
    const verticalLineEndXRight = verticalLineStartXRight;
    const verticalLineEndYRight = centerY + verticalLineLength / 2;

    this.ctx.beginPath();
    this.ctx.moveTo(verticalLineStartXRight, verticalLineStartYRight);
    this.ctx.lineTo(verticalLineEndXRight, verticalLineEndYRight);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = "blue"; // Color azul para la línea vertical
    this.ctx.stroke();

    // Dibujar la línea del centro del círculo
    this.ctx.beginPath();
    this.ctx.moveTo(verticalLineEndXLeft, centerY);
    this.ctx.lineTo(verticalLineStartXRight, centerY);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = "blue"; // Color azul para la línea central
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
*/