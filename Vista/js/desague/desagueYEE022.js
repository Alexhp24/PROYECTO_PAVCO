import { SingleShapeBase } from "../single_shape_base.js";

// Definir las longitudes de las líneas
const verticalLength = 15; // Longitud de la línea vertical
const diagonalLength = 10.6; // Longitud de la línea diagonal (ajustada para mantener la proporcionalidad)
const horizontalLength = 10; // Longitud de la línea horizontal inclinada

export class DesagueYEE022 extends SingleShapeBase {
  constructor(ctx, color) {
    super(ctx, color);
    this.label = `Codo Yee Ø2`; // Asignar un número de etiqueta único a este codo
  }

  // Función para dibujar la forma Y en una posición dada
  drawY(x, y) {
    this.ctx.save();

    this.ctx.translate(x, y);
    this.ctx.rotate(this.rotation * Math.PI / 180);

    const verticalStartX = 0;
    const verticalStartY = -verticalLength / 2;
    const verticalEndY = verticalStartY + verticalLength;
    const midY = (verticalStartY + verticalEndY) / 2;
    const diagonalEndX = diagonalLength / Math.sqrt(2);
    const diagonalEndY = verticalStartY - diagonalLength / Math.sqrt(2);

    // Calcular el punto final de la línea diagonal
    const diagonalEndXFinal = verticalStartX + diagonalEndX;
    const diagonalEndYFinal = midY - diagonalEndX;

    // Calcular los puntos de la línea horizontal inclinada centrada en el extremo de la línea diagonal
    const horizontalStartX = diagonalEndXFinal - horizontalLength / 2;
    const horizontalStartY = diagonalEndYFinal;
    const horizontalEndX = diagonalEndXFinal + horizontalLength / 2;
    const horizontalEndY = diagonalEndYFinal;

    // Comenzar a dibujar la forma
    this.ctx.beginPath();

    // Dibujar la línea vertical principal de arriba hacia abajo
    this.ctx.moveTo(verticalStartX, verticalStartY);
    this.ctx.lineTo(verticalStartX, verticalEndY);

    // Dibujar las líneas horizontales en los extremos de la línea vertical
    this.ctx.moveTo(verticalStartX - horizontalLength / 2, verticalStartY);
    this.ctx.lineTo(verticalStartX + horizontalLength / 2, verticalStartY);

    this.ctx.moveTo(verticalStartX - horizontalLength / 2, verticalEndY);
    this.ctx.lineTo(verticalStartX + horizontalLength / 2, verticalEndY);

    // Dibujar la línea diagonal desde la mitad de la línea vertical hacia arriba
    this.ctx.moveTo(verticalStartX, midY);
    this.ctx.lineTo(diagonalEndXFinal, diagonalEndYFinal);

    // Dibujar la línea horizontal inclinada desde el extremo de la línea diagonal
    this.ctx.moveTo(horizontalStartX, horizontalStartY);
    this.ctx.lineTo(horizontalEndX, horizontalEndY);

    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = "red";

    // Trazar el camino
    this.ctx.stroke();

    // Dibujar la etiqueta
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, horizontalEndX + 5, horizontalEndY - 10);

    this.ctx.restore();
  }

  // Función para dibujar el codo
  draw() {
    this.drawY(this.lastPoint.x, this.lastPoint.y);
  }
}
