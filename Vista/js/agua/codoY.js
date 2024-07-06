import { SingleShapeBase } from "../single_shape_base.js";

// Definir las longitudes de las líneas
const horizontalLength = 15; // Longitud ajustada para la parte inferior del codo X
const verticalLength = 7.5; // Longitud ajustada para la parte inferior del codo Y
const diagonalLength = 7.5; // Longitud de las líneas diagonales
export class CodoY extends SingleShapeBase {
  constructor(ctx, color, count) {
    super(ctx, color);
    this.label = `Y${count}`; // Asignar un número de etiqueta único a este codo
  }

  // Función para dibujar la forma Y en una posición dada
  drawY(x, y) {
    this.ctx.save();

    this.ctx.translate(x, y);
    this.ctx.rotate(this.rotation * Math.PI / 180);

    const verticalStartX = 0;
    const verticalStartY = -verticalLength / 2;
    const leftDiagonalEndX = -diagonalLength / 2;
    const leftDiagonalEndY = verticalStartY - diagonalLength;
    const rightDiagonalEndX = diagonalLength / 2;
    const rightDiagonalEndY = verticalStartY - diagonalLength;

    // Comenzar a dibujar la forma
    this.ctx.beginPath();

    // Dibujar la línea vertical principal de arriba hacia abajo
    this.ctx.moveTo(verticalStartX, verticalStartY);
    this.ctx.lineTo(verticalStartX, verticalStartY + verticalLength);

    // Dibujar el canto en la parte inferior de la línea vertical
    this.ctx.moveTo(verticalStartX - 3, verticalStartY + verticalLength);
    this.ctx.lineTo(verticalStartX + 3, verticalStartY + verticalLength);

    // Dibujar la línea diagonal izquierda
    this.ctx.moveTo(verticalStartX, verticalStartY);
    this.ctx.lineTo(leftDiagonalEndX, leftDiagonalEndY);

    // Dibujar el canto en el extremo de la línea diagonal izquierda
    this.ctx.moveTo(leftDiagonalEndX - 3, leftDiagonalEndY);
    this.ctx.lineTo(leftDiagonalEndX + 3, leftDiagonalEndY);

    // Dibujar la línea diagonal derecha
    this.ctx.moveTo(verticalStartX, verticalStartY);
    this.ctx.lineTo(rightDiagonalEndX, rightDiagonalEndY);

    // Dibujar el canto en el extremo de la línea diagonal derecha
    this.ctx.moveTo(rightDiagonalEndX - 3, rightDiagonalEndY);
    this.ctx.lineTo(rightDiagonalEndX + 3, rightDiagonalEndY);

    this.ctx.lineWidth = 3.5;
    this.ctx.strokeStyle = this.color;

    // Trazar el camino
    this.ctx.stroke();

    // Dibujar la etiqueta
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, rightDiagonalEndX + 5, rightDiagonalEndY - 10);

    this.ctx.restore();
  }

  // Función para dibujar el codo
  draw() {
    this.drawY(this.lastPoint.x, this.lastPoint.y);
  }
}
