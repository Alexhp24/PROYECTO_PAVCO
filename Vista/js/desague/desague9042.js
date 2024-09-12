// Importar la clase SingleShapeBase desde single_shape_base.js
import { SingleShapeBase } from "../single_shape_base.js";

// Definir constantes para las dimensiones y colores
const largerCircleRadius = 6; // Radio del círculo más grande en mm
const shortLineLength = 5; // Longitud de las líneas horizontales en mm
const leftVerticalLineLength = 10; // Longitud de la línea vertical izquierda en mm
const rightVerticalLineLength = 15; // Longitud de la línea vertical derecha en mm
const centerPointRadius = 1.5; // Radio del punto central en mm

// Clase MontantesDes que extiende de SingleShapeBase
export class Desague9042 extends SingleShapeBase {
  constructor(ctx, color) {
    // Llamar al constructor de la clase padre (SingleShapeBase)
    super(ctx, color);

    // Asignar una etiqueta única a este codo
    this.label = `Codo de 90 4 x 2`;
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

  // Dibujar el círculo y las líneas
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
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = "#79EC1A"; // Color de borde verde para el círculo más grande
    this.ctx.stroke();

    // Dibujar el punto rojo en el centro del círculo
    this.ctx.beginPath();
    this.ctx.arc(circleX, circleY, centerPointRadius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "red"; // Color rojo para el punto central
    this.ctx.fill();

    // Dibujar la línea vertical izquierda con longitud diferente, alineada al extremo de la línea horizontal izquierda
    const leftVerticalLineStartX = circleX - largerCircleRadius - shortLineLength; // Extremo más alejado de la línea horizontal
    const leftVerticalLineStartY = circleY - leftVerticalLineLength / 2; // Centrando verticalmente
    const leftVerticalLineEndX = leftVerticalLineStartX;
    const leftVerticalLineEndY = circleY + leftVerticalLineLength / 2;

    this.ctx.beginPath();
    this.ctx.moveTo(leftVerticalLineStartX, leftVerticalLineStartY);
    this.ctx.lineTo(leftVerticalLineEndX, leftVerticalLineEndY);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = "#1AAFEC"; // Color para la línea vertical izquierda
    this.ctx.stroke();

    // Dibujar la línea horizontal izquierda pegada al círculo
    const leftHorizontalLineStartX = circleX - largerCircleRadius; // Pegado al borde del círculo
    const leftHorizontalLineStartY = circleY; // Centrado verticalmente
    const leftHorizontalLineEndX = leftHorizontalLineStartX - shortLineLength; // Longitud total hacia la izquierda

    this.ctx.beginPath();
    this.ctx.moveTo(leftHorizontalLineStartX, leftHorizontalLineStartY);
    this.ctx.lineTo(leftHorizontalLineEndX, leftHorizontalLineStartY);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = "#1AAFEC"; // Color para la línea horizontal izquierda
    this.ctx.stroke();

    // Dibujar la línea vertical derecha con longitud diferente, alineada al extremo cercano de la línea horizontal derecha
    const rightVerticalLineStartX = circleX + largerCircleRadius + shortLineLength; // Extremo más alejado de la línea horizontal
    const rightVerticalLineStartY = circleY - rightVerticalLineLength / 2; // Centrando verticalmente
    const rightVerticalLineEndX = rightVerticalLineStartX;
    const rightVerticalLineEndY = circleY + rightVerticalLineLength / 2;

    this.ctx.beginPath();
    this.ctx.moveTo(rightVerticalLineStartX, rightVerticalLineStartY);
    this.ctx.lineTo(rightVerticalLineEndX, rightVerticalLineEndY);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = "#1AAFEC"; // Color para la línea vertical derecha
    this.ctx.stroke();

    // Dibujar la línea horizontal derecha pegada al círculo
    const rightHorizontalLineStartX = circleX + largerCircleRadius; // Pegado al borde del círculo
    const rightHorizontalLineStartY = circleY; // Centrado verticalmente
    const rightHorizontalLineEndX = rightHorizontalLineStartX + shortLineLength; // Longitud total hacia la derecha

    this.ctx.beginPath();
    this.ctx.moveTo(rightHorizontalLineStartX, rightHorizontalLineStartY);
    this.ctx.lineTo(rightHorizontalLineEndX, rightHorizontalLineStartY);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = "#1AAFEC"; // Color para la línea horizontal derecha
    this.ctx.stroke();

    // Dibujar la etiqueta del codo
    this.ctx.font = "10px Arial";
    this.ctx.fillStyle= "black"
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

