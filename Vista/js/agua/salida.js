// Importar la clase Codo desde Codo.js
import { SingleShapeBase } from "../single_shape_base.js";

// Definir constantes para las dimensiones y colores
const largerCircleRadius = 8; // Radio del círculo más grande en mm

// Clase Entrada que extiende de SingleShapeBase
export class Salida extends SingleShapeBase {
  constructor(ctx, color) {
    // Llamar al constructor de la clase padre (Codo)
    super(ctx, color);
    // Asignar una etiqueta única a esta entrada
    this.label = `S`;
  }

  // Dibujar el círculo
  drawCircle(x, y) {
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
    this.ctx.fillStyle = 'black'; // Color de relleno negro
    this.ctx.fill();
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = 'black'; // Cambiar el color de borde a negro
    this.ctx.stroke();

    // Dibujar la etiqueta de la entrada
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, circleX + 10, circleY - 10);

    // Restaurar el estado del contexto
    this.ctx.restore();
  }

  // Dibujar la entrada en el lienzo
  draw() {
    this.drawCircle(this.lastPoint.x, this.lastPoint.y);
  }
}
