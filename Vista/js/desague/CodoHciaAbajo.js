// Importar la clase Codo desde Codo.js
import { SingleShapeBase } from "../single_shape_base.js";

// Definir constantes para las dimensiones y colores
const lineLength = 25; // Longitud de la línea en mm
const largerCircleRadius = 6.5; // Radio del círculo más grande en mm
const verticalLineLength = 13; // Longitud de la línea vertical en mm

// Clase CABAJO que extiende de SingleShapeBase
export class CodoHciaAbajo extends SingleShapeBase {
  constructor(ctx, color) {
    // Llamar al constructor de la clase padre (Codo)
    super(ctx, color);

    // Asignar una etiqueta única a este codo
    this.label = `CODO HACIA ABAJO`;
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
      rotatedX >= -lineLength / 2 &&
      rotatedX <= lineLength / 2 &&
      rotatedY >= -largerCircleRadius &&
      rotatedY <= largerCircleRadius
    ) {
      // Actualizar la rotación del codo (90 grados hacia la derecha)
      this.rotation = (this.rotation + 90) % 360;

      // Redibujar todos los codos en el lienzo
      this.redrawAll();
    }
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
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle ="#1AAFEC";
    this.ctx.stroke();

    // Dibujar el círculo más grande sin relleno
    this.ctx.beginPath();
    this.ctx.arc(endX, endY, largerCircleRadius, 0, 2 * Math.PI, false);
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = "#79EC1A"; // Color de borde verde para el círculo más grande
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
    this.ctx.strokeStyle = "#1AAFEC";
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

  // Limpiar y redibujar todos los codos en el lienzo
  redrawAll() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    instances.forEach((instance) => instance.draw());
  }
}
