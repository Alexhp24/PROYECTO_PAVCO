import { SingleShapeBase } from "../single_shape_base.js";
// Definir las longitudes de las líneas
const horizontalLength = 15; // Longitud ajustada para la parte inferior del codo X
const verticalLength = 7.5; // Longitud ajustada para la parte inferior del codo Y
const diagonalLength = 7.5; // Longitud de las líneas diagonales

export class DesagueYEE extends SingleShapeBase {
  constructor(ctx, color, count) {
    super(ctx, color);
    this.label = `Y${count}`; // Asignar un número de etiqueta único a este codo
  }

  // Función para manejar el evento de doble clic
  onDoubleClick(event) {
    const rect = this.ctx.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Obtener las coordenadas relativas al punto de origen del codo
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
      rotatedX >= -horizontalLength / 2 &&
      rotatedX <= horizontalLength / 2 &&
      rotatedY >= -verticalLength / 2 &&
      rotatedY <= verticalLength / 2
    ) {
      // Calcular las coordenadas ajustadas para dibujar el codo lejos del punto de clic
      const adjustedX = this.lastPoint.x + rotatedX;
      const adjustedY = this.lastPoint.y + rotatedY;

      // Actualizar el último punto a las coordenadas ajustadas
      this.lastPoint.x = adjustedX;
      this.lastPoint.y = adjustedY;

      this.rotation = (this.rotation + 90) % 360;
      this.draw();
    }
  }

  // Función para dibujar la forma Y en una posición dada
  drawY(x, y) {
    this.ctx.save();

    this.ctx.translate(x, y);
    this.ctx.rotate((this.rotation * Math.PI) / 180);

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
    this.ctx.fillText(
      this.label,
      rightDiagonalEndX + 5,
      rightDiagonalEndY - 10
    );

    this.ctx.restore();
  }

  // Función para dibujar el codo
  draw() {
    this.drawY(this.lastPoint.x, this.lastPoint.y);
  }
}

/*import { Codo } from "./Codo.js";

// Definir las longitudes de las líneas
const verticalLength = 7.5; // Longitud ajustada para la parte inferior del codo Y
const diagonalLength = 7.5; // Longitud de las líneas diagonales

export class CodoY extends Codo {
  static labelCount = 0; // Variable de clase para contar el número de codos dibujados

  constructor(ctx, color, lastPoint) {
    super(ctx, color, lastPoint);
    this.label = `Y${++CodoY.labelCount}`; // Asignar un número de etiqueta único a este codo
  }

  // Función para dibujar la forma Y en una posición dada
  draw() {
    const verticalStartX = this.lastPoint.x;
    const verticalStartY = this.lastPoint.y - verticalLength / 2;
    const leftDiagonalEndX = this.lastPoint.x - diagonalLength / 2;
    const leftDiagonalEndY = verticalStartY - diagonalLength;
    const rightDiagonalEndX = this.lastPoint.x + diagonalLength / 2;
    const rightDiagonalEndY = verticalStartY - diagonalLength;

    // Comenzar a dibujar la forma
    this.ctx.beginPath();

    // Dibujar la línea vertical principal de arriba hacia abajo
    this.ctx.moveTo(verticalStartX, verticalStartY); // Punto de inicio de la línea vertical
    this.ctx.lineTo(verticalStartX, verticalStartY + verticalLength); // Punto final de la línea vertical

    // Dibujar el canto en la parte inferior de la línea vertical
    this.ctx.moveTo(verticalStartX - 3, verticalStartY + verticalLength); // Moverse a la izquierda del extremo inferior
    this.ctx.lineTo(verticalStartX + 3, verticalStartY + verticalLength); // Dibujar una línea horizontal hacia la derecha del extremo inferior

    // Dibujar la línea diagonal izquierda
    this.ctx.moveTo(verticalStartX, verticalStartY); // Punto de inicio de la línea diagonal izquierda
    this.ctx.lineTo(leftDiagonalEndX, leftDiagonalEndY); // Punto final de la línea diagonal izquierda

    // Dibujar el canto en el extremo de la línea diagonal izquierda
    this.ctx.moveTo(leftDiagonalEndX - 3, leftDiagonalEndY); // Moverse a la izquierda del extremo de la línea diagonal izquierda
    this.ctx.lineTo(leftDiagonalEndX + 3, leftDiagonalEndY); // Dibujar una línea horizontal hacia la derecha del extremo de la línea diagonal izquierda

    // Dibujar la línea diagonal derecha
    this.ctx.moveTo(verticalStartX, verticalStartY); // Punto de inicio de la línea diagonal derecha
    this.ctx.lineTo(rightDiagonalEndX, rightDiagonalEndY); // Punto final de la línea diagonal derecha

    // Dibujar el canto en el extremo de la línea diagonal derecha
    this.ctx.moveTo(rightDiagonalEndX - 3, rightDiagonalEndY); // Moverse a la izquierda del extremo de la línea diagonal derecha
    this.ctx.lineTo(rightDiagonalEndX + 3, rightDiagonalEndY); // Dibujar una línea horizontal hacia la derecha del extremo de la línea diagonal derecha
    this.ctx.lineWidth = 3.5;
    this.ctx.strokeStyle = this.color;

    /*this.ctx.strokeStyle = '#000000';*
    // Trazar el camino
    this.ctx.stroke();
    // Dibujar la etiqueta
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, rightDiagonalEndX + 5, rightDiagonalEndY - 10);
  }
}
*/
