// Importar la clase Codo desde Codo.js
import { SingleShapeBase } from "../single_shape_base.js";

// Definir constantes para las dimensiones y colores
const lineLength = 50; // Longitud de la línea en mm
const verticalLineLengths = [15, 20, 15]; // Longitudes de las líneas verticales en mm
const verticalLineDistances = [-5, 0, 5]; // Distancias de las líneas verticales desde el centro en mm1
const verticalLineColors = ['#00FF00']; // Colores de las líneas verticales

// Clase UnionUniversal que extiende de SingleShapeBase
export class UnionUniversal extends SingleShapeBase {
  constructor(ctx, color) {
    // Llamar al constructor de la clase padre (Codo)
    super(ctx, color);

    // Asignar una etiqueta única a este codo
    this.label = `Union Universal`;
  }

  // Dibujar la línea recta con las líneas verticales
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
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();

    // Dibujar tres líneas verticales con diferentes longitudes, distancias y colores
    verticalLineLengths.forEach((lineLength, index) => {
      const verticalLineX = startX + (endX - startX) / 2 + verticalLineDistances[index]; // Posición de la línea vertical
      const verticalLineStartY = endY - lineLength / 2; // Posición inicial de la línea vertical
      const verticalLineEndY = endY + lineLength / 2; // Posición final de la línea vertical

      this.ctx.beginPath();
      this.ctx.moveTo(verticalLineX, verticalLineStartY);
      this.ctx.lineTo(verticalLineX, verticalLineEndY);
      this.ctx.lineWidth = 1.5;
      this.ctx.strokeStyle = verticalLineColors[index]; // Color de la línea vertical
      this.ctx.stroke();
    });

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
