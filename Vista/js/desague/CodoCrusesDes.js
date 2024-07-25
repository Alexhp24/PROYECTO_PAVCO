// Importar la clase Codo desde Codo.js
import { SingleShapeBase } from "../single_shape_base.js";

// Definir constantes para las dimensiones y colores
const lineLength = 60; // Longitud de la línea en mm
const circleRadius = 7; // Radio del círculo en mm
const verticalLineLength = 25; // Longitud de la línea vertical en mm

// Clase CABAJO que extiende de SingleShapeBase
export class CodoCrusesDes extends SingleShapeBase {
  // Variables de clase para contar instancias y etiquetas
  constructor(ctx, color) {
    // Llamar al constructor de la clase padre (Codo)
    super(ctx, color);
    // Asignar una etiqueta única a este codo
    this.label = `CRUCES SIN CONEXION`;
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
    const rotatedX = relativeX * Math.cos(-this.rotation * Math.PI / 180) - relativeY * Math.sin(-this.rotation * Math.PI / 180);
    const rotatedY = relativeX * Math.sin(-this.rotation * Math.PI / 180) + relativeY * Math.cos(-this.rotation * Math.PI / 180);

    // Verificar si el doble clic ocurrió dentro del área del codo
    if (rotatedX >= -lineLength / 2 && rotatedX <= lineLength / 2 && rotatedY >= -circleRadius && rotatedY <= circleRadius) {
      // Actualizar la rotación del codo (90 grados hacia la derecha)
      this.rotation = (this.rotation + 90) % 360;

      // Redibujar todos los codos en el lienzo
      this.redrawAll();
    }
  }

  // Dibujar las líneas con el semicírculo en el centro de la línea horizontal
  drawLinesWithHalfCircle(x, y) {
    this.ctx.save();

    // Aplicar la traslación y rotación al contexto del canvas
    this.ctx.translate(x, y);
    this.ctx.rotate(this.rotation * Math.PI / 180);

    // Coordenadas de inicio y fin de las líneas
    const startX = -lineLength / 2;
    const endX = lineLength / 2;
    const startY = -verticalLineLength / 2;
    const endY = verticalLineLength / 2;


    // Dibujar la línea vertical
    this.ctx.beginPath();
    this.ctx.moveTo(0, startY);
    this.ctx.lineTo(0, endY);
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = 'orange';
    this.ctx.stroke();

    // Dibujar la línea horizontal hasta el semicírculo
    this.ctx.beginPath();
    this.ctx.moveTo(startX, 0);
    this.ctx.lineTo(-circleRadius, 0);
    this.ctx.moveTo(circleRadius, 0);
    this.ctx.lineTo(endX, 0);
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeStyle = '#09BBD7';
    this.ctx.stroke();

    // Dibujar el semicírculo en el centro de la línea horizontal
    this.ctx.beginPath();
    this.ctx.arc(0, 0, circleRadius, 0, Math.PI, true); // Dibuja la mitad superior del círculo
    this.ctx.lineWidth = 3.5;
    this.ctx.strokeStyle = '#09BBD7'; // Color de borde verde para el semicírculo
    this.ctx.stroke();


    // Dibujar la etiqueta del codo
    this.ctx.font = "10px Arial";
    this.ctx.fillText(this.label, endX + 10, -10);

    // Restaurar el estado del contexto
    this.ctx.restore();
  }

  // Dibujar el codo en el lienzo
  draw() {
    this.drawLinesWithHalfCircle(this.lastPoint.x, this.lastPoint.y);
  }

  // Limpiar y redibujar todos los codos en el lienzo
  redrawAll() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    instances.forEach(instance => instance.draw());
  }

}
